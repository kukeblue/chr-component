import { useEffect, useRef, useState } from "react";
import Ajax, { ChCommonResponse } from './request'

//@type Hook Function 分页Hoos,TS版本
interface usePageProps {
  url: string,
  pageSize: number,
  query: Object,
  onReloadAfter?: (res:any)=>void
}

export function usePage(props: usePageProps) {

  const {url, pageSize, query, onReloadAfter} = props;
  const [status, setStatus] = useState<string>('more');
  const [total, setTotal] = useState<number>(0);
  const [list, setList] = useState([]);

  const ref = useRef({pageNo:1});

  useEffect(()=>{
    reload()
  }, [])

  const reload = async (pageNo?:number) => {
    setStatus('loading');
    if(! pageNo ) pageNo = 1; 
    ref.current.pageNo = pageNo;
    const pz = pageSize || 10;
    const resp:any= await Ajax.request({url, data: {
      query, 
      pageNo, 
      pageSize:pz
    }});
    console.log('分页PAGE获取成功', resp)
    if (resp.status === 0) {
        setTotal(resp.page.total);
        let newList
        if (pageNo === 1) {
            newList = resp.page.list
        } else {
          newList = [].concat(list, resp.page.list.filter((x:any)=>list.find((y:any)=>y.id === x.id) ? false : true))
        }
        setList(newList);
        ref.current.pageNo = pageNo + 1;
        if (resp.page.pages < pz) {
            setStatus('noMore');
        } else {
            setStatus("more");
        }
    } else {
        setStatus("noMore");
    }
    onReloadAfter && onReloadAfter(resp);
  }
  const loadMore = async () => {
    if (status === 'noMore') return;
    await reload(ref.current.pageNo);
  }
  return {list, setList, status, setStatus, reload, loadMore, total};
}


interface useOptionFormListHookProps {
  url: string
}

interface Options {
  label: string,
  value: string,
}

export function useOptionFormListHook({
  url
}:useOptionFormListHookProps) {
  const [list, setList] = useState([]);
  const [options, setOptions] = useState<Options[]>([]);

  useEffect(()=>{
    Ajax.request({url,data: {}}).then((res: any)=>{
      if(res.status ==  0 && res.list) {
          let newOptions:Options[] = []
          res.list.forEach((item:any)=>{
            options.push({
              label: item.name,
              value: item.id,
            })
          })
          setList(res.list)
          setOptions(newOptions);
      }
    })
  }, [])
  return {
    list,
    options
  }
}


const chHooks = {
  usePage,
  useOptionFormListHook,
}

export default chHooks  

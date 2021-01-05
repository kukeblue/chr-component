
import { requset } from './request'
import utils from './common'
import React, { useEffect, useState, useRef } from "react"

/**
 * @type React Hook 
 * @description 手机验证码倒计时hook
 */
export function usePhoneVerifyCode() {
    const [code, setCode] = useState();
    const [countDown, setCountDown] = useState(60)
  
    const onClickGetPhoneCode = async () => {
        let i = 60
        while(i > 0) {
          setCountDown(i)
          i = i - 1;
          await utils.sleep(1000)
        }
        setCountDown(60)
    }
    return {
      countDown,
      setCountDown,
      code,
      setCode,
      onClickGetPhoneCode
    }
}

/**
 * @type React Hook 
 * @description 分页hooks
 */
export function usePage({url, pageSize, query, onReloadAfter}) { 
  const [status, setStatus] = useState('more');
  const [total, setTotal] = useState(0);
  const [list, setList] = useState([]);

  useEffect(()=>{
    reload()
  }, [])

  const ref = useRef({pageNo:1});

  const reload = async (pageNo) => {
    setStatus('loading');
    if(! pageNo ) pageNo = 1; 
    ref.current.pageNo = pageNo;
    const pz = pageSize || 10;
    const resp = await utils.request(url, {query, pageNo, pageSize:pz});
    console.log('list', resp)
    if (resp.status === 0) {
        setTotal(resp.page.totalElements);
        let newList
        if (pageNo === 1) {
            newList = resp.page.content
        } else {
          newList = [].concat(list, resp.page.content.filter(x=>list.find(y=>y.id === x.id) ? false : true))
        }
        setList(newList);
        ref.current.pageNo = pageNo + 1;
        
        if (resp.page.numberOfElements < pz) {
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

  return {list, setList, status, setStatus, reload, loadMore, total, pageNo: ref.current.pageNo};
}

 const chHooks = {
  usePhoneVerifyCode,
  usePage,
}

export default chHooks;
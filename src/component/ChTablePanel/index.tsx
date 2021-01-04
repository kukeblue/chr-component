import React, { useEffect, useState } from 'react';
import { Table, Popconfirm, Button, Modal} from 'antd'
import ChUtils from '../../ChUtils/index'
import ChForm from '../ChForm/index'
import './index.less'
import { useForm } from 'antd/lib/form/Form';
import { ItemRender } from 'antd/lib/upload/interface';

// 表格Props
interface TablePanelProps {
    columns: Column[],
    url: string,
    urlDelete: string,
    urlAdd: string,
    urlUpdate: string,
    formData: ChFormTypes.FormDataItem[]
    expandable?: {
        expandedRowRender: (item:Item) => React.ReactElement,
    },
    onAddBefore?: (item: Item)=>void,
    query?: Object,
}
// 表格Item
type Item = any
// 表格Column
type Column = {
    title: string,
    dataIndex: string,
    key: string,
    render?: (text:string, ob: {id: string})=>React.ReactElement
}
export default ({
    columns,
    url,
    urlAdd,
    urlDelete,
    urlUpdate,
    formData,
    expandable,
    query,
    onAddBefore,
}: TablePanelProps) => {
    const [form] = useForm()
    const [list, setList] = useState<Item[]>([])
    const [editor, setEditor] = useState<Item>()
    const [showEditModal, setShowEditModal] = useState(false)

    useEffect(()=>{
        doFetchList()
    }, [])
    const doFetchList = () => {
        ChUtils.request({ url, data: query}).then((res: ChAjax.ChResponse<Item>) =>{
            if(res && res.status == 0 && res.list) {
                setList(res.list)
            }
        })
    }
    const doDeleteItem = (id: string) => {
        ChUtils.request({url:urlDelete, data: {id}}).then((res: ChAjax.ChResponse<Item>) =>{
            if(res && res.status == 0) {
                doFetchList();
            }
        })
    }
    const doAddItem = (item: Item) => {
        if(!onAddBefore) {
        }else {
            onAddBefore(item)
        }
        ChUtils.request({url:urlAdd, data: item}).then((res: ChAjax.ChResponse<Item>) =>{
            if(res && res.status == 0) {
                doFetchList();
                setShowEditModal(false)
                setEditor(null);
            }
        })
    }
    const doEditItem = (item: Item) => {
        item.id = editor.id
        ChUtils.request({url:urlUpdate, data: item}).then((res: ChAjax.ChResponse<Item>) =>{
            if(res && res.status == 0) {
                doFetchList();
                setShowEditModal(false)
                setEditor(null);
            }
        })
    }
    
    const _columns = columns.concat([{
        title: '',
        dataIndex: 'option',
        key: 'option',
        render: (_, item: {id: string})=>{
          return <div>
              <Popconfirm
                  title="您确定删除此项?"
                  onConfirm={()=>{
                    doDeleteItem(item.id)
                  }}
                  okText="Yes"
                  cancelText="No"
              >
                  <Button type='link'>删除</Button> 
              </Popconfirm>
              <Button onClick={()=>{
                  setEditor(item);
                  form.setFieldsValue(item)
                  setShowEditModal(true);
                //   setShowGradeModal(true)
              }} type='link'>编辑</Button> 
          </div>
        }
      }])
    return <div className='ch-tablePanel'>
    <Button style={{
        marginBottom: '10px'
    }} onClick={()=>{
            setEditor({})
            setShowEditModal(true)
        }} type='primary'>添加</Button>
       <Table 
        rowKey='id' 
        dataSource={list} 
        columns={_columns}
        expandable={expandable}
    />
    <Modal title="编辑" 
        okText="确定"
        cancelText="取消"
        visible={showEditModal} 
        onOk={()=>{
            form.validateFields().then(values=>{
                if(!editor.id) {
                    doAddItem(values)
                }else {
                    doEditItem(values)
                }
            })
        }} 
        onCancel={()=>setShowEditModal(false)}>
        <ChForm 
            form={form}
            formData = {formData}
            onFinish={(values)=>{
                
            }}/>
    </Modal>
    </div>
};

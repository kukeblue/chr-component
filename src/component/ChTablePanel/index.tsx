import React, { useEffect, useState } from 'react';
import { Table, Popconfirm, Button, Modal } from 'antd'
import ChUtils from '../../ChUtils'
import ChForm from '../ChForm/index'
import './index.less'
import { useForm } from 'antd/lib/form/Form';
import { FormDataItem } from '../ChForm/index';

type ChResponse<T> = any

// 表格Propsyar
interface TablePanelProps {
    columns: Column[],
    url: string,
    urlDelete: string,
    urlAdd: string,
    urlUpdate: string,
    formData: FormDataItem[]
    expandable?: {
        expandedRowRender: (item: Item) => React.ReactElement,
    },
    onEditFormat?: (item: any)=>void,
    onEditBefore?: (item: Item)=>void,
    query?: Object,
}
// 表格Item
type Item = any
// 表格Column
type Column = {
    title: string,
    dataIndex: string,
    key: string,
    render?: (text: string, ob: any) => JSX.Element
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
    onEditBefore,
    onEditFormat,
    }: TablePanelProps) => {
    const {
        list,
        reload,
        total,
    } = ChUtils.chHooks.usePage({
        url: url,
        pageSize: 10,
        query: {},
    })

    const [form] = useForm()
    const [editor, setEditor] = useState<any>()
    const [showEditModal, setShowEditModal] = useState(false)

    const doDeleteItem = (id: string) => {
        ChUtils.Ajax.request({ url: urlDelete, data: { id } }).then((res: ChResponse<Item>) => {
            if (res && res.status == 0) {
                reload();
            }
        })
    }
    const doAddItem = (item: Item) => {
        if(!onEditBefore) {
        }else {
            onEditBefore(item)
        }
        ChUtils.Ajax.request({ url: urlAdd, data: item }).then((res: ChResponse<Item>) => {
            if (res && res.status == 0) {
                reload();
                setShowEditModal(false)
                setEditor(null);
            }
        })
    }
    const doEditItem = (item: Item) => {
        item.id = editor.id
        if(!onEditBefore) {
        }else {
            onEditBefore(item)
        }
        ChUtils.Ajax.request({url:urlUpdate, data: item}).then((res: ChResponse<Item>) =>{
            if(res && res.status == 0) {
                reload();
                setShowEditModal(false)
                setEditor(null);
            }
        })
    }

    const _columns = columns.concat([{
        title: '',
        dataIndex: 'option',
        key: 'option',
        render: (_, item: { id: string }) => {
            return <div>
                <Popconfirm
                    title="您确定删除此项?"
                    onConfirm={() => {
                        doDeleteItem(item.id)
                    }}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button type='link'>删除</Button>
                </Popconfirm>
                <Button onClick={() => {
                    let  data = JSON.parse(JSON.stringify(item))
                    setEditor(data);
                    onEditFormat && onEditFormat(data)
                    form.setFieldsValue(data)
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
            pagination={{
                total: total,
                defaultCurrent: 1,
                pageSize: 10,
                onChange: (page, pageSize) => {
                    reload(page)
                }
            }}
        />
        <Modal title={editor && editor.id ? "编辑" : "新增"}
            destroyOnClose
            okText="确定"
            cancelText="取消"
            visible={showEditModal}
            onOk={() => {
                form.validateFields().then(values => {
                    console.log('提交编辑', values)
                    if (!editor.id) {
                        doAddItem(values)
                    } else {
                        doEditItem(values)
                    }
                })
            }}
            onCancel={() => setShowEditModal(false)}>
            <ChForm
                editor={editor}
                form={form}
                formData={formData}
                onFinish={(values) => {
                }} />
        </Modal>
    </div>
};

---
title: TablePanel(常规表格组件)
---

## TablePanel

```jsx
import React from 'react';
import ChTablePanel from './index.tsx';
import './index.less';
import { useOptionFormListHook } from '../../ChUtils/ChHooks'


export default () => { 

    const { options } = useOptionFormListHook({url: 'http://api-paper.kukechen.top/api/grade/list'})

    const columns = [
        {
          title: '年级名称',
          dataIndex: 'name',
          key: 'name',
        },
    ]
    const childColumns = [
        {
          title: '学期名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '上下学期',
          dataIndex: 'term',
          key: 'term',
        },
    ]
    return <div className='chTablePanel'>
        <ChTablePanel 
            urlDelete='http://localhost:8000/api/grade/delete'
            urlAdd='http://localhost:8000/api/grade/add'
            urlUpdate='http://localhost:8000/api/grade/edit'
            url='http://api-paper.kukechen.top/api/grade/page'
            columns={columns}
            formData={
                [{
                  type: 'input',
                  label: '名称',
                  name: 'name',
                  rules: [{ required: true, message: '请输入年级名称' }],
               }]
            }
            expandable={{
                expandedRowRender: record => <div>
                 <ChTablePanel 
                    onAddBefore={(item)=>{
                        item.gradeId = record.id
                        console.log(item);
                    }}
                    urlDelete='http://localhost:8000/api/gradeStep/delete'
                    urlAdd='http://localhost:8000/api/gradeStep/add'
                    urlUpdate='http://localhost:8000/api/gradeStep/edit'
                    url='http://api-paper.kukechen.top/api/gradeStep/page'
                    query={{gradeId: record.id}}
                    columns={childColumns}
                    formData={
                        [
                            {
                                type: 'input',
                                label: '名称',
                                name: 'name',
                                rules: [{ required: true, message: '请输入年级名称' }],
                            },{
                                type: 'select',
                                label: '学期',
                                name: 'term',
                                rules: [{ required: true, message: '请选择学期' }],
                                initialValue: 'UP',
                                options: [
                                        { label: '上学期', value: 'UP' },
                                        { label: '下学期', value: 'DOWN' },
                                ]
                            }
                        ]
                    }/>
                </div>,
            }}
        />
    </div>;
}
```
---
title: Form(表单渲染处理组件)
---

## Form

```jsx
import React from 'react';
import ChForm from './index.tsx'
export default () => { 
    return <div style={{width: '350px'}}>
        <ChForm
            formData = {[
               {
                  type: 'radio-group',
                  label: 'label',
                  name: 'name',
                  options: [
                        { label: '上学期', value: 'UP' },
                        { label: '下学期', value: 'DOWN' },
                  ]
               },
               {
                  type: 'select',
                  label: 'label',
                  name: 'name1',
                  rules: [],
                  options: [
                        { label: '上学期', value: 'UP' },
                        { label: '下学期', value: 'DOWN' },
                  ]
               },
               {
                  type: 'region-select',
                  label: 'label',
                  name: 'name3',
               },
               {
                  type: 'upload',
                  label: '上传接口',
                  name: 'file',
                  rules: [{ required: true, message: '文件上传失败', validator: 
                    (rule, value, callback) => {
                        try {
                            if(value[0].response)  {
                               if(value[0].response.status == 0) {
                                 console.log('debug: 单文件上传成功！')
                               }else {
                                 callback('文件上传失败！');
                               }
                            }
                        } catch (err) {
                            callback(err);
                        }
                    }
                  }],
               }
            ]}
            onFinish={(values)=>{
                console.log('debug: form onFinish values', values)
            }}
        />
    </div>;}
```
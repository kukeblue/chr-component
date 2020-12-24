---
title: ChForm(表单渲染处理组件)
---

## ChForm

```jsx
import React from 'react';
import ChForm from './chForm.tsx'

export default () => { 
    return <div style={{width: '350px'}}>
        <ChForm
            formData = {[
               {
                  type: 'radio-group',
                  label: 'label',
                  name: 'name',
                  rules: [{ required: true, message: 'Please input your username!' }],
                  options: [
                        { label: '上学期', value: 'UP' },
                        { label: '下学期', value: 'DOWN' },
                  ]
               }
            ]}
            onFinish={(values)=>{
                console.log('debug: form onFinish values', values)
            }}
        />
    </div>;}
```
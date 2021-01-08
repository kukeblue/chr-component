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
                  type: 'upload',
                  label: 'label',
                  name: 'file',
                  rules: [],
               }
            ]}
            onFinish={(values)=>{
                console.log('debug: form onFinish values', values)
            }}
        />
    </div>;}
```
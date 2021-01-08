---
title: Layout(管理后台组件)
---

## Layout

```jsx
    import React from 'react';
    import ChLayout from './index.tsx'

    export default () => {
        let sider = {
            currentItem: 1,
            siderItems:[
                {
                    icon: '1',
                    text: '1',
                    click: ()=>{console.log('1')},
                }
            ]
        }
        
        return <ChLayout 
                sider={sider}    
             >
             </ChLayout>
    }

```
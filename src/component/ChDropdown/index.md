---
title: Dropdown(下拉按钮动画版本)
---

## Dropdown

```jsx
import React from 'react';
import ChDropdown from './index';
import './index.less'

export default () => { 
    return <div style={{display: 'flex'}}>
       <ChDropdown trigger={['click']} itemClassName="chDropdown-demo" text="1312312" menuItems={[{
           text: '1',
       }]}/>
    </div>;}
```
---
title:BlockSelector(块状选择器)
---

## MoveBook

```jsx
import React, { useState } from 'react';
import ChBlockSelector from './blockSelector';

export default () => { 

    const [value, setValue] = useState(['1'])

    const list = [{id: '1', name: '块状选择1'}, {id: '2', name: '块状选择器2'}, {id: '3', name: '块状选择器3'}]
    return <div style={{width: '350px'}}>
       <ChBlockSelector multiple={false} list={list} value={value} onChange={(value)=>{
           setValue(value)
       }}/>
    </div>}
```
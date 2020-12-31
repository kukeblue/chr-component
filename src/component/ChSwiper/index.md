---
title: Swiper(轮播组件)
---

## ChSwiper

```jsx
import React from 'react';
import ChSwiper from './swiper';
import ChSwiperItem from './swiperItem';
import './index.less';

export default () => { 
    return <div className='swiper_warp'>
        <ChSwiper>
            <ChSwiperItem>
                <div className='swiper_item'>
                    1
                </div>
            </ChSwiperItem>
        </ChSwiper>
    </div>;}

 


```


<!-- More skills for writing demo: https://d.umijs.org/guide/demo-principle -->

import React, { useEffect } from 'react';

export default ({ 
  direction = 'horizontal',
  loop = false,
  children
 }: { 
  children: JSX.Element,
  direction: string  // horizontal | vertical
  loop: Boolean
}) => {
   
  useEffect(()=>{
    // var mySwiper = new Swiper('.swiper-container', {
    //     direction: direction, // 垂直切换选项
    //     loop: loop, // 循环模式选项
    //     pagination: {
    //       el: '.swiper-pagination', // 如果需要分页器
    //     },
    //   })
    }, [])

    return <div className='ch-swiper'>
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {children}
            </div>
            <div className="swiper-pagination"></div>
        </div>
    </div>
};

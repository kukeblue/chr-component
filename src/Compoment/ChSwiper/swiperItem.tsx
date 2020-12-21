import React from 'react';

export default ({ 
    children
 }: { 
    children: JSX.Element,
}) => {
    return <div className="swiper-slide">
        {children}
    </div>
};

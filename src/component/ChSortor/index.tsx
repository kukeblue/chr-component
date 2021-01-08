import React from 'react';
import './index.less'
import { Button } from 'antd'
import {
    CaretUpOutlined,
    CaretDownOutlined
  } from '@ant-design/icons';

interface ChSortorProps {
    value?: ('up' | 'down' | 'default' | undefined);
    color?: string;
    className?: string;
}

export default (props: ChSortorProps) => {
    return <div  className={'ch-sortor ' + (props.className || '')}>
        <div style={props.value == 'up' ? {color: props.color || '#000'} : {}} className='ch-sortor-up'><CaretUpOutlined /></div>
        <div style={props.value == 'down' ? {color: props.color || '#000'}  : {}} className='ch-sortor-down'><CaretDownOutlined/></div>
    </div>
};

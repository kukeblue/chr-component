import React, { useState } from 'react';
import './index.less'
import { Dropdown, Menu } from 'antd'
import {
    DownOutlined
} from '@ant-design/icons';

export interface MenuItem {
    text: string,
    click?: ()=>boolean,
}

export interface ChDropdownProps {
    menuItems?: MenuItem[],
    text: JSX.Element | string,
    className?: string,
    itemClassName?: string,
    trigger?: ("click" | "hover" | "contextMenu")[]
}

export default (props: ChDropdownProps) => {
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false) 
    console.log(props.menuItems)
    return <div><Dropdown 
    trigger={props.trigger || ['hover']}
    onVisibleChange={(value)=>{
        setDropdownVisible(value)
    }}
    placement="bottomCenter" overlay={
            <Menu>
                {props.menuItems  && props.menuItems.map(item=>{
                    return <Menu.Item className={props.itemClassName} key={item.text}>
                        <div onClick={()=>{
                            if(!item.click || !item.click()) {
                                setDropdownVisible(false)
                            }
                        }}>{item.text}</div>
                    </Menu.Item>
                })}
            </Menu>
        }>
        <div className={`ch-dropdown-content ${props.className || ''}`}>
            {props.text || <div>下拉菜单</div>}
            <div className={dropdownVisible ?  'action-arrow-down action-arrow-down_active' : 'action-arrow-down'}><DownOutlined/></div>
        </div>
    </Dropdown></div>
};

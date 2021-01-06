import React from 'react'
import './index.less'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export interface SiderItem {
    icon: JSX.Element,
    text: string,
    click: ()=>void,
}

export interface Sider {
    siderItems?: SiderItem[],
    currentItem?: number
}

export interface ChLayoutProps {
    children?: JSX.Element | string,
    header?: JSX.Element | string,
    adminIcon?: JSX.Element | string,
    siderItems?: SiderItem[],
    sider: Sider
}

export default (props: ChLayoutProps) => {
    return <>
        <Layout className='ch-layout'>
            <Sider  
                width='80'
                className='ch-layoutSider' 
                theme="light"
            >
                <div className='ch-layoutSider-avatar'>
                    {props.adminIcon || 'CH'}
                </div>
                <div>
                    {props.sider.siderItems && props.sider.siderItems.map((item: SiderItem, index: number)=>{
                        return <div  
                            onClick={()=>item.click()}
                            key={item.text} 
                            className={props.sider.currentItem == (index + 1) ? 'ch-layoutSider-item_selected' : 'ch-layoutSider-item'}>
                                <span>{item.icon}</span>
                                <div>{item.text}</div>
                        </div>
                    })}
                </div>
            </Sider>
            <Layout>
                <Header className='ch-layoutHeader'>
                    {props.header}
                </Header>
                <Content>
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    </>
}
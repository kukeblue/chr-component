import React from 'react';
import { Form, Input, Button, Checkbox, Radio, Select, Upload } from 'antd';
import { FormInstance } from 'antd/lib/form/hooks/useForm'
import { UploadOutlined } from '@ant-design/icons';
import './index.less'
const { Option } = Select;
export enum FormItemType  {
      input = 'input',
      radioGroup = 'radio-group',
      select = 'select',
      upload = 'upload'
}
interface FormItemRule  {
      validator?:  (rule:any, value:any, callback: (v:any)=>void)=>void
      required: boolean,
      message: string,
}
type CheckboxValueType = string | number;
interface FormItemOptionsType {
      label: React.ReactNode;
      value: CheckboxValueType;
      style?: React.CSSProperties;
      disabled?: boolean;
}
export interface FormDataItem {
   key?: string,
   type: FormItemType,
   label: string,
   name: string,
   rules?: FormItemRule[],
   options?: FormItemOptionsType[],
   initialValue?: any,
   valuePropName?: string,
   getValueFromEvent?: (e:any)=>any,
   uploadUrl?:string,
   uploadType?: "picture" | "text" | "picture-card" | undefined
}
interface ChFormProps  {
   formData: FormDataItem[]
   onFinish?: (values: any)=>void,
   form?: FormInstance<any>
}

export default ({ 
   formData,
   onFinish,
   form
 } : ChFormProps) => {




   const layout = {
      labelCol: { span: 24 },
      wrapperCol: { span: 24 },
   };
   // @type JSX Function | @dec 渲染单个formItem
   const renderFormItem  = (item: FormDataItem) => {
      let dom
      switch(item.type) {
      case 'input':
         dom = <Input />
         break
      case 'radio-group':
         dom = <Radio.Group
               options={item.options}
               optionType="button"
               buttonStyle="solid"
         />
         break
      case 'select':
         dom = <Select>
            {item.options?.map(item=>{
               return <Option key={item.value} value={item.value}>{item.label}</Option>
            })}
         </Select>
         break
      case 'upload':
         dom = <Upload  multiple name="file" action={item.uploadUrl ? item.uploadUrl : "/fileUpload"} listType={item.uploadType}>
            <Button icon={<UploadOutlined/>}>点击文件</Button>
         </Upload>
      break
      default:
         dom = <Input />
      }
      return dom
   }
   const buildFormItemProps = (item: FormDataItem)=> {
      item.key = `formData_${item.name}`
      if(item.type == 'upload') {
         item.valuePropName = "fileList";
         item.getValueFromEvent = (e: any) => {
            if (Array.isArray(e)) {
              return e[e.length-1];
            }
            return e && [e.fileList[e.fileList.length-1]];
         };
      }
      return item;
   }

   return <div>
      <Form
         preserve={false}
         form={form}
         {...layout}
         onFinish={onFinish}
      >
         {
            formData && formData.map(item=>{
               let formItemProps = buildFormItemProps(item);
               return <Form.Item
                  {...formItemProps}
               >
                  {renderFormItem(item)}
               </Form.Item>
            })
         }
      </Form>   
    </div>
};

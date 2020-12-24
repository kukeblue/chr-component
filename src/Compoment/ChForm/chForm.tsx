import React from 'react';
import { Form, Input, Button, Checkbox, Radio } from 'antd';
import { FormInstance } from 'antd/lib/form/hooks/useForm'
import './chForm.less'

interface ChFormProps  {
   formData: ChFormTypes.FormDataItem[]
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

    const renderFormItem  = (item: ChFormTypes.FormDataItem) => {
         let dom
         console.log('debug: item.type', item.type)
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
         default:
            dom = <Input />
         }
         return dom
    }

    return <div>
      <Form
         form={form}
         {...layout}
         onFinish={onFinish}
      >
         {
            formData && formData.map(item=>{
               return <Form.Item
                  key={`formData_${item.name}`}
                  label={item.label}
                  name={item.name}
                  rules={item.rules}
                  initialValue={item.initialValue}
               >
                  {renderFormItem(item)}
               </Form.Item>
            })
         }
      </Form>   
    </div>
};

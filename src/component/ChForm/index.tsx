import React from 'react';
import {
  Form,
  Input,
  Button,
  Checkbox,
  Radio,
  Select,
  Upload,
  Row,
  Col,
  Cascader
} from 'antd';
import { FormInstance } from 'antd/lib/form/hooks/useForm';
import { UploadOutlined } from '@ant-design/icons';
import { useForm } from 'antd/lib/form/Form';
import regionOptions from '../../ChUtils/regionOptions'
import './index.less';
const { Option } = Select;
export enum FormItemType {
  input = 'input',
  radioGroup = 'radio-group',
  select = 'select',
  upload = 'upload',
  multipleSelect = 'mutipleSelect',
  regionSelect = 'region-select'
}
interface FormItemRule {
  validator?: (rule: any, value: any, callback: (v: any) => void) => void;
  required: boolean;
  message: string;
}
type CheckboxValueType = string | number;
interface FormItemOptionsType {
  label: React.ReactNode;
  value: CheckboxValueType;
  style?: React.CSSProperties;
  disabled?: boolean;
}
export interface FormDataItem {
  key?: string;
  placeholder?: string;
  itemshow?: (editor?: any, form?: FormInstance<any>) => boolean;
  type: FormItemType;
  label: string;
  name: string;
  rules?: FormItemRule[];
  options?: FormItemOptionsType[];
  initialValue?: any;
  valuePropName?: string;
  getValueFromEvent?: (e: any) => any;
  uploadurl?: string;
  uploadType?: 'picture' | 'text' | 'picture-card' | undefined;
  uploadname?: string;
  uploadheader?: any;
  layout?: {
    span?: number;
    offset?: number;
  };
}
interface ChFormProps {
  showclear?: boolean;
  submitname?: string;
  formData: FormDataItem[];
  onFinish?: (values: any) => void;
  form?: FormInstance<any>;
  editor?: any;
  layout?: {
    labelCol?: { span?: number; offset?: number };
    wrapperCol?: { span?: number; offset?: number };
  };
}

export default ({
  formData,
  onFinish,
  form,
  editor,
  layout,
  submitname,
  showclear,
}: ChFormProps) => {
  if (!form) {
    [form] = useForm();
  }

  const _layout = layout || {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };
  // @type JSX Function | @dec 渲染单个formItem
  const renderFormItem = (item: FormDataItem) => {
    let dom;
    switch (item.type) {
      case 'input':
        dom = <Input placeholder={item.placeholder} />;
        break;
      case 'radio-group':
        dom = (
          <Radio.Group
            options={item.options}
            optionType="button"
            buttonStyle="solid"
          />
        );
        break;
      case 'select':
        dom = (
          <Select placeholder={item.placeholder}>
            {item.options?.map((item, index) => {
              return (
                <Option key={index} value={item.value}>
                  {item.label}
                </Option>
              );
            })}
          </Select>
        );
        break;
      case 'upload':
        dom = (
          <Upload
            headers={
              item.uploadheader
              // { Auth: getObCache('user') && getObCache('user').token}
            }
            multiple
            name={item.uploadname || 'file'}
            action={item.uploadurl ? item.uploadurl : '/fileUpload'}
            listType={item.uploadType}
          >
            <Button icon={<UploadOutlined />}>点击文件</Button>
          </Upload>
        );
        break;
      case 'mutipleSelect':
        dom = (
          <Select placeholder={item.placeholder} mode="multiple">
            {item.options?.map((item, index) => {
              return (
                <Option key={'_' + index} value={item.value}>
                  {item.label}
                </Option>
              );
            })}
          </Select>
        );
        break;
        case 'region-select':
          dom = (
            <Cascader options={regionOptions}  placeholder={item.placeholder || '请选择地区'}/>
          );
          break;
      default:
        dom = <Input placeholder={item.placeholder} />;
    }
    return dom;
  };
  const buildFormItemProps = (item: FormDataItem) => {
    item.key = item.key || `formData_${item.name}`;
    const { itemshow, ...ob  } = item
    return ob;
  };

  return (
    <div>
      <Form preserve={false} form={form} {..._layout} onFinish={onFinish}>
        <Row>
          {formData &&
            formData.map((item, index) => {
              let layout = item.layout || { span: 24 };
              let formItemProps = buildFormItemProps(item);
              if (item.itemshow && !item.itemshow(editor, form)) {
                return null;
              }
              return (
                <Col key={formItemProps.key || index} {...layout}>
                  <Form.Item {...formItemProps}>
                    {renderFormItem(item)}
                  </Form.Item>
                </Col>
              );
            })}
          <Col offset={1} span={4}>
            {onFinish && (
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  {submitname || '确定'}
                </Button>
                {showclear && (
                  <Button
                    onClick={() => {
                      form?.resetFields();
                    }}
                    style={{ marginLeft: 10 }}
                  >
                    清空选项
                  </Button>
                )}
              </Form.Item>
            )}
          </Col>
        </Row>
      </Form>
    </div>
  );
};

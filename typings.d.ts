declare module '*.css';
declare module '*.less';
declare var Swiper: any;
declare var mui: any;
declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any;
    }
}
declare namespace ChAjax {
    // request 返回格式
    interface ChResponse<T> {
        list?: T[],
        status: number,
    }
}

declare namespace ChFormTypes {
    enum FormItemType  {
        input = 'input',
        radioGroup = 'radio-group'
     }
     
    interface FormItemRule  {
        required: boolean,
        message: string,
    }

    type CheckboxValueType = string | number | boolean;


    interface CheckboxOptionType {
        label: React.ReactNode;
        value: CheckboxValueType;
        style?: React.CSSProperties;
        disabled?: boolean;
    }
     
     interface FormDataItem {
        type: FormItemType,
        label: string,
        name: string,
        rules?: FormItemRule[],
        options?: CheckboxOptionType[],
        initialValue?: any
     }
}
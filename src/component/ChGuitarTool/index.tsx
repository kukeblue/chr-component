import React, { useEffect, useState } from 'react';
import './index.less'
import { Button } from 'antd'
import ChForm, {FormItemType} from '../ChForm'
import { useForm } from 'antd/lib/form/Form';

export default ({ 
 }: { }) => {
    const [form] = useForm()
    const [question, setQuestion] = useState<string>();
    const [fixedLine, setFixedLine] = useState<number>();
    const stage = []
    const line = [1,2,3,4,5,6]
    const grid = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

    const  buildQuestion = ()=> {
        form.validateFields().then(values=>{
            let lineIndex = Math.floor(Math.random() * 6);
            if(values.fixedLine) {
                lineIndex = Number(values.fixedLine) - 1
            }
            let gridIndex = Math.floor(Math.random() * 24);
            setQuestion(`请找到第${lineIndex + 1}弦，第${gridIndex + 1}品的音`)
        })
    }
    useEffect(()=>{
        buildQuestion()
    },[])

    return <div>
        <ChForm 
            form={form}
            formData={[{
                type: FormItemType.input,
                label: '第几弦',
                name: 'fixedLine',
             }]}
        ></ChForm>
        <Button style={{marginBottom: 30}} onClick={()=>buildQuestion()}>生成</Button>
        <div>
            {question}
        </div>
        
    </div>
};

import React from "react"
import './blockSelector.less'

type BlockItem = {
    id: never,
    name: String,
}


function BlockSelector({
    list = [],
    value = [],
    onChange,
    multiple = false
}:{
    list: BlockItem[],
    value: [],
    onChange: Function 
    multiple: Boolean
}) { 
    return <div className='block-selector'>
        {/* <div className='block-selected'>
            块状选择器
        </div> */}
        {
            list.map((item: BlockItem, index: number)=>{
                let selected = value.indexOf(item.id) > -1
                return <div onClick={()=> {
                    let i = value.indexOf(item.id)
                    let newValue:String[] = value.slice()
                    if(selected) {
                        newValue.splice(i, 1)
                    }else {
                        if(multiple) {
                            newValue.push(item.id)
                        }else {
                            newValue = [item.id] 
                        }
                    }
                    onChange && onChange(newValue)
                }} key={item.id || '_' + index } 
                className={selected ? 'block-selected' : 'block'}>
                    {item.name || '块状选择器'}
                    {selected && <div className='close-warp'><span className="close"></span></div>}
                </div>
            })
        }
    </div>
}

export default BlockSelector;
import React from 'react';
import './index.less'

const splitK = (num: number) => {
    var decimal = String(num).split('.')[1] || '';//小数部分
    var tempArr = [];
    var revNumArr: string[] = String(num).split('.')[0].split("").reverse();//倒序
    for (let i in revNumArr){
      tempArr.push(revNumArr[i]);
      if((Number(i)+1)%3 === 0 && Number(i) != revNumArr.length-1){
        tempArr.push(',');
      }
    }
    var zs = tempArr.reverse().join('');//整数部分
    return decimal?zs+'.'+decimal:zs;
  }

export default ({value}: {value: number}) => {
    return <span>
        {splitK(value || 0)}
    </span>
};

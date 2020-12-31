
import { useState } from 'react';
import { requset } from './request'
import utils from './common'

/**
 * @type React Hook 
 * @description 手机验证码倒计时hook
 */
export  function usePhoneVerifyCode() {
    const [code, setCode] = useState();
    const [countDown, setCountDown] = useState(60)
  
    const onClickGetPhoneCode = async () => {
        let i = 60
        while(i > 0) {
          setCountDown(i)
          i = i - 1;
          await utils.sleep(1000)
        }
        setCountDown(60)
    }
    return {
      countDown,
      setCountDown,
      code,
      setCode,
      onClickGetPhoneCode
    }
  }


/**
 * 验证手机号码
 * @param {string} phone 
 */
export const verifyPhoneNumber = function(phone) {
  if(!phone) {
    console.log('debug verifyPhoneNumber fail')
    return false
  }
  return /^1[3-9]\d{9}$/.test(phone)
}


/**
 * 验证空字符串
 * @param {string} obj 
 */
export function verifyStrEmpty(obj) {
  if (typeof obj == "undefined" || obj == null || obj == "") {
    return false;
  } else {
    return true;
  }
}
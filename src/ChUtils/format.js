

/**
 * 时间格式化
 * @param {*} date 
 */
export const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 获取num位的数字字符串
 * @param {*} num 
 */
export const getRandomNumber = (num) => {
  if(!num) num = 10
  return  Math.floor((Math.random()+Math.floor(Math.random()*9+1))*Math.pow(10,num-1)) + '';
}

 

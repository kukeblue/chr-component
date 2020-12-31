

export function getTodayDate() {
 return new Date(new Date().toLocaleDateString())
}

/**
 * 加减天
 * @param {*} date 
 */
export function addDate(day, start) {
  let result
  if(!start) {
    result = new Date(new Date().toLocaleDateString());
  }else {
    result = new Date(start)
  }
  result.setTime(result.getTime() + 3600 * 1000 * 24 * day);
  return result
}

/**
 * 字符串转时间
 * @param {*} date 
 */
function dateToDate(date) {
  var sDate = new Date();
  if (typeof date == 'object'
      && typeof new Date().getMonth == "function"
      ) {
      sDate = date;
  }
  else if (typeof date == "string") {
      var arr = date.split('-')
      if (arr.length == 3) {
          sDate = new Date(arr[0] + '-' + arr[1] + '-' + arr[2]);
      }
  }

  return sDate;
}

/**
 * 加减月
 * @param {*} date 
 */
export function addMonth(date, num) {
  num = parseInt(num);
  let sDate = dateToDate(date);

  let sYear = sDate.getFullYear();
  let sMonth = sDate.getMonth() + 1;
  let sDay = sDate.getDate();

  let eYear = sYear;
  let eMonth = sMonth + num;
  let eDay = sDay;
  while (eMonth > 12) {
      eYear++;
      eMonth -= 12;
  }

  let eDate = new Date(eYear, eMonth - 1, eDay);

  while (eDate.getMonth() != eMonth - 1) {
      eDay--;
      eDate = new Date(eYear, eMonth - 1, eDay);
  }

  return eDate;
}

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

/**
 * 时间格式化
 * @param {*} date 
 */
export const formatDate = date => {
  if(!date) return 
  if(typeof date == "string") {
    date = new Date(date)
  }
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}






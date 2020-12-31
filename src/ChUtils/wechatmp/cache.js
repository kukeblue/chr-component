

const wx = window.wx

export function mp_setCache(key, value) {
  try {
    wx.setStorageSync(key, value)
  } catch (e) {
    console.log('debug setCache error', key, value)
   }
}

export function mp_getCache(key) {
  try {
    var value = wx.getStorageSync(key)
    if (value) {
      // Do something with return value
      return value
    }
  } catch (e) {
    console.log('debug no cache', key)
    // Do something when catch error
  }
  
}


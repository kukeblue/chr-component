
export const isMobile = () => {
    var isMobile = /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent)
    if (isMobile) {
        return  true
    } else {
        return false
    }
}


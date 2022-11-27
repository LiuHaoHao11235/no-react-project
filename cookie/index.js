document.cookie = "id0=你好"
document.cookie = "id1=你不好"
document.cookie = "id2=我很好♥ 卍 卐  ₪▶ ▷ ► ▼"
document.cookie ="id=test"
function parseCookie() {
    let cookieObj = {};
    let cookieAry = document.cookie.split(';');
    let cookie;
    //console.log(cookieAry)
    for (let i=0, l=cookieAry.length; i<l; ++i) {
        if(cookieAry[i].includes('=')){
        cookie = cookieAry[i].split('=');
        cookieObj[cookie[0].trim()] = cookie[1];
        }
    }
    console.log(cookieObj)
    return cookieObj;
}

function getCookieByName(name) {
    let value = parseCookie()[name];
    console.log(value)
    if (value) 
        value = decodeURIComponent(value);
    return value;
}
getCookieByName('id2')
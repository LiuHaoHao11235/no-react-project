const bar=document.querySelector(".banner")
const leftSide=document.querySelector(".leftSide")
let StartX
let LeftWidth
let newLeftWidth
//localStorage.clear()清除localStorage
if (localStorage.getItem("stored_Width")!=null) {
    LeftWidth=localStorage.getItem("stored_Width")
    leftSide.style.width = LeftWidth + 'px'
}
bar.addEventListener('mousedown',startMove)
function startMove(x){ //x為被監聽對象bar 執行mousedown事件所返回的物件 使用.clientX方法可以知道點及滑鼠當下滑鼠所在的x座標
    StartX=x.clientX
    LeftWidth=window.getComputedStyle(leftSide).width //得到 "500px"的string型態值
    LeftWidth=parseInt(LeftWidth) //轉成數字型態
    document.documentElement.addEventListener('mousemove',Moving) //如果只開啟在banner區域下滑動滑鼠的監聽 當超出banner時會造成中斷 很不流暢 所以要需要監聽整個網頁
    document.documentElement.addEventListener('mouseup',Stop) //要用全頁面來監聽滑鼠放下 否則banner滑動太快會跑出去 跑出去也必須要能在外面停止mousemove mouseup 監聽
}
function Moving(x){                                                        //新增加或減少的寬度//
    newLeftWidth = LeftWidth + (x.clientX-StartX) // 原來左寬度 + (移動時滑鼠所在的x座標 - 原來按下時的x座標) = 新的左寬度
    console.log(newLeftWidth)
    leftSide.style.width = newLeftWidth + 'px' //將新左寬利用dom去更改先前寬度
    

}
function Stop(){
    console.log("Stop!")
    localStorage.setItem("stored_Width",newLeftWidth)
    document.documentElement.removeEventListener('mousemove',Moving)
    document.documentElement.removeEventListener('mouseup',Stop)

}

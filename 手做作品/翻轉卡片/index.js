const cards=document.querySelectorAll(".card")
const fronts=document.querySelectorAll(".front")
const backs=document.querySelectorAll(".back")
for(i=0;i<cards.length;i++){ //全域的i 必須在下面所有i都用let var個別定義 否則會受到全域i影響
    cards[i].addEventListener('mouseenter',enterFunction)
    cards[i].addEventListener('mouseleave',leaveFunction)
    cards[i].addEventListener('click',reverseCard)
}
itemWidth=cards[0].clientWidth
itemHieght=cards[0].clientHeight
const itemsfourXY=[]
const centerX=[]
let fromLeft
let fromRight
getItemXY()
getItemCenterX()
original_windew_width=window.innerWidth
function enterFunction(e){
    let i=parseInt(e.target.accessKey) //利用acessKey屬性來設定i 知道是哪張卡片
    check_window_width_change() //在畫面縮小或放大時 要重新取得物件的所有座標 不然用之前畫面的座標一定會出錯
    fromLeft=false
    fromRight=false
    if(e.clientX>centerX[i]){ //利用x的中間座標與鍵入時的x座標大小來判斷是左邊進入 還是右邊進入
        fromRight=true
        //console.log('enter from right')
        fronts[i].style.transform=`rotateY(30deg)`
        fronts[i].style.boxShadow=`-8px 5px 10px 3px rgba(0, 0, 0, 0.5)`
    }
    else{

        fromLeft=true
        //console.log('enter from left')
        fronts[i].style.transform=`rotateY(-30deg)` 
        fronts[i].style.boxShadow=`8px 5px 10px 3px rgba(0, 0, 0, 0.5)`

    }
}
function reverseCard(e){
    let i=parseInt(e.target.accessKey) //target在img上 要在img設定acesskey
    if(fromRight){
        fronts[i].style.transform=`rotateY(180deg)`
        backs[i].style.transform=`rotateY(0deg)`
    }
    else{
        fronts[i].style.transform=`rotateY(-180deg)`
        backs[i].style.transform=`rotateY(-360deg)`
    }

}


function leaveFunction(e){ //每當滑鼠離開牌時 都要將正面和背面重置回原來的位置
    let i=parseInt(e.target.accessKey)
    fronts[i].style.boxShadow=`1px 1px 20px 3px rgba(0, 0, 0, 0.5)`
    fronts[i].style.transform=`rotateY(0deg)`
    backs[i].style.transform=`rotateY(-180deg)`
}
function getItemXY(){
    for(var i=0;i<cards.length;i++){ //順時鐘算出每個牌的 4個角xy座標並且放入陣列中
        offsetLeft=cards[i].offsetLeft
        offsetTop=cards[i].offsetTop
        itemsfourXY.push(offsetLeft)
        itemsfourXY.push(offsetTop)
        offsetLeft=offsetLeft+itemWidth
        itemsfourXY.push(offsetLeft)
        itemsfourXY.push(offsetTop)
        offsetTop=offsetTop+itemHieght
        itemsfourXY.push(offsetLeft)
        itemsfourXY.push(offsetTop)
        offsetLeft=offsetLeft-itemWidth
        itemsfourXY.push(offsetLeft)
        itemsfourXY.push(offsetTop)
    }
}
function getItemCenterX(){ //取得每個牌的中間x座標
    for(var i=0;i<itemsfourXY.length;i=i+8){
        x=(itemsfourXY[i]+itemsfourXY[i+2])/2
        centerX.push(x)
    }
}
function check_window_width_change(){
    console.log(this)
    if(original_windew_width!=window.innerWidth){  
        Length=itemsfourXY.length
        for(var i=0;i<Length;i++){ //清除上一次的座標資料
            itemsfourXY.pop()
        }
        for(var i=0;i<Length/8;i++){  //清除上一次的座標資料
            centerX.pop()
        }
        //console.log(itemsfourXY)
        //console.log(centerX)
        getItemXY()
        getItemCenterX()
        console.log("change windows width")
        original_windew_width=window.innerWidth
    }
}
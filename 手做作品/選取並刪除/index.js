const items=document.querySelectorAll(".item")
document.documentElement.addEventListener('mousedown',startMove)
const framed=document.querySelector(".framed")
itemWidth=items[0].clientWidth
itemHieght=items[0].clientHeight
itemsfourXY=[]
framefourXY=[]
const startXY=[]
const currentXY=[]
const campareXY=[]
const coveredItems=[]
let framed_Width,framed_Height
let offset_left_up,offset_right_up,offset_left_down,no_offset
getItemXY()
//console.log(itemsfourXY)
function startMove(x){ 
    //console.log(x)
    startXY.push(x.clientX)
    startXY.push(x.clientY)
    framed.style.top = startXY[1] + 'px'    
    framed.style.left = startXY[0] + 'px'
    document.documentElement.addEventListener('mousemove',Moving)
    document.documentElement.addEventListener('mouseup',Stop)
}
function Moving(x){
    offset_left_up=false
    offset_right_up=false
    offset_left_down=false
    no_offset=false
    if(currentXY.length=!0){ 
        currentXY.pop(0)
        currentXY.pop(1)
        currentXY.push(x.clientX)  
        currentXY.push(x.clientY)   
    }
    else{
        currentXY.push(x.clientX)  
        currentXY.push(x.clientY)   
    }
    GenerateFrame(offset_left_up,offset_right_up,offset_left_down)

}
function Stop(e){
    //let StopX=e.clientX
    //let StopY=e.clientY
    console.log("Stop!")
    checkCover()
    console.log(coveredItems)
    coveredItems_length=coveredItems.length
    coveredItems.forEach(element => {
        items[element].style.visibility="hidden"
    });
    for(i=0;i<coveredItems_length;i++){
        coveredItems.pop()
    }
    resetFrame()
    document.documentElement.removeEventListener('mousemove',Moving)
    document.documentElement.removeEventListener('mouseup',Stop)

}
function GenerateFrame(){
    framed_Width=currentXY[0]-startXY[0]
    framed_Height=currentXY[1]-startXY[1]
    if(framed_Height<=0 && framed_Width<=0){
        offset_left_up=true
        //console.log("左上")
        calFrameSize() //計算框框大小
        framed.style.transform=`translate(${-framed_Width+'px'},${-framed_Height+'px'})`  //offset調整框框位置

    }
    else if(framed_Height<=0 && framed_Width>=0){
        offset_right_up=true
        //console.log("右上")
        calFrameSize() //計算框框大小
        framed.style.transform=`translate(0,${-framed_Height+'px'})` //offset調整框框位置

    }
    else if(framed_Height>=0 && framed_Width<=0){
        offset_left_down=true
        //console.log("左下")
        calFrameSize() //計算框框大小
        framed.style.transform=`translate(${-framed_Width+'px'},0)`  //offset調整框框位置

    }

    else{
        no_offset=true
        //console.log("又下") //計算框框大小
        calFrameSize()  //不需要offset因為是在框框增長的方向
    }
}
function resetFrame(){
    framed.style.transform=`translate(0px,0px)`
    framed.style.width='0px'
    framed.style.height='0px'
    framed.style.top='0px'
    framed.style.left='0px'
    currentXY.pop(0)
    currentXY.pop(1)
    startXY.pop(0)
    startXY.pop(1)
}
function calFrameSize(){
    framed_Height=Math.abs(framed_Height)
    framed_Width=Math.abs(framed_Width)
    framed.style.width=framed_Width+'px'
    framed.style.height=framed_Height+'px'
}
function getItemXY(){
    for(i=0;i<items.length;i++){ //順時鐘算出xy座標並且放入陣列
        offsetLeft=items[i].offsetLeft
        offsetTop=items[i].offsetTop
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
function checkCover(){
    console.log(offset_left_up)
    console.log(offset_right_up)
    console.log(offset_left_down)
    let index=0
    if(offset_left_up){   //雖然選取框是利用translate offset(偏移) 顯示的 但是並沒真正offset 所以正確位置必須在扣掉前面offset的值
        console.log("offset_left_up")
        offsetLeft=framed.offsetLeft-framed_Width
        offsetTop=framed.offsetTop-framed_Height
    }
    if(offset_right_up){
        console.log("offset_right_up")
        offsetLeft=framed.offsetLeft
        offsetTop=framed.offsetTop-framed_Height
    }
    if(offset_left_down){
        console.log("offset_left_down")
        offsetLeft=framed.offsetLeft-framed_Width
        offsetTop=framed.offsetTop

    }
    if(no_offset){
        console.log("no offset")
        offsetLeft=framed.offsetLeft
        offsetTop=framed.offsetTop
    }
    console.log(offsetTop)
    console.log(offsetLeft)
    framefourXY.push(offsetLeft)
    framefourXY.push(offsetTop)
    offsetLeft=offsetLeft+framed_Width
    framefourXY.push(offsetLeft)
    framefourXY.push(offsetTop)
    offsetTop=offsetTop+framed_Height
    framefourXY.push(offsetLeft)
    framefourXY.push(offsetTop)
    offsetLeft=offsetLeft-framed_Width
    framefourXY.push(offsetLeft)
    framefourXY.push(offsetTop)


    console.log(framefourXY) // 框的4xy個座標 共8個值
    for(i=0;i<itemsfourXY.length;i=i+8){
        let point=0
        for(j=0;j<8;j++){
            a=framefourXY[j]-itemsfourXY[i+j]
            campareXY.push(a) // [-,-,+,-,+,+,-,+]為被包覆
        }
        //console.log(campareXY)
        if(campareXY[0]<=0){
            point=point+1

        }
        if(campareXY[1]<=0){
            point=point+1
        }
        if(campareXY[2]>=0){
            point=point+1

        }
        if(campareXY[3]<=0){
            point=point+1

        }
        if(campareXY[4]>=0){
            point=point+1
   
        }
        if(campareXY[5]>=0){
            point=point+1

        }
        if(campareXY[6]<=0){
            point=point+1

        }
        if(campareXY[7]>=0){
            point=point+1

        }
        if(point==8){
            coveredItems.push(index)
            //console.log(coveredItems)
            //console.log(campareXY)
        }
        for(k=0;k<8;k++){
            campareXY.pop()
        }    
        index=index+1
        }
    for(k=0;k<8;k++){
        framefourXY.pop()
    }    
}

const verify_img = document.querySelectorAll('div.img img')
const LoginBottom = document.querySelectorAll("div.container button")[0]
const VerifyBottom = document.querySelectorAll("div.verify button")[0]
const DeleteBottom = document.querySelectorAll("div.verify button")[1]
const SummitBottom = document.querySelectorAll("div.verify button")[2]
const Username_input=document.querySelectorAll("div.container input")[0]
const Password_input=document.querySelectorAll("div.container input")[1]
const p= document.getElementsByClassName("item")[0]
const label1=document.querySelectorAll("div.container label")[0]
const label2=document.querySelectorAll("div.container label")[1]
//const con= document.querySelector("div.outside:not([id*='ssa']")
let img_list=[]
let ans_list=[]
const Username_list=["a250907790","b","c"] //外面來的陣列
const Password_list=["a40701106","b1","c1"] //外面來的陣列
let inputU=""
let inputP=""
let username=0
fisrt_time=true

class UserData { //測試class
    constructor(Username, Password) {
      this.Username = Username;
      this.Password = Password;
    }

  }
let SS=new UserData(Username_list,Password_list)



function Vertify_render() {
    // 渲染頁面的list
    let listContent=[]
    let htmlStr = ''
    for(let i=0; i<img_list.length ; i++) {
        key=img_list[i]
        switch(key) {
            case key=0:
                listContent.push("跑山猴")
                break;
            case key=1:
                listContent.push("香蕉")
                break;
            case key=2:
                listContent.push("潑猴")
                break;
            case key=3:
                listContent.push("勁戰六代")
                break;
            default:
          }
    }
    htmlStr = htmlStr + `
      <div class="item1">
          <p>依照中文依序點擊圖片：${listContent}</p>
          <p id="ans">你的答案：${ans_list}</p>
      </div> `
    console.log(p)
    p.innerHTML = htmlStr
}
function update_render(){
    const C = document.querySelectorAll("div.verify div.item1 p")[1]
    C.innerHTML=`<p id="ans">你的答案：${ans_list}</p>`
    console.log(C)
}
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}  
function Vertify_Summit(){

    if(ans_list.length==4){
        console.log(img_list)
        if(list_equal(ans_list,img_list)){
            console.log("true")
            jumpToPage()
            console.log('我先執行囉~~')
        }
        else{
            console.log("not_true")
            alert('驗證錯誤')
            window.location.reload()
        }
    }
    else{
        console.log("還沒完成作答 不能驗證")
    }
}
function list_equal(ans_list,img_list){
    a=true
    if(typeof(ans_list)==typeof(img_list)){
        for(let i=0;i<ans_list.length;i++){
            if(ans_list[i]!=img_list[i]){
                a = false
            }
        }
    }
    else{
        if(ans_list!=img_list[0]){
            a = false
        }
        }
    console.log(ans_list)
    return a
}


function loginCheck(inputU,inputP){
    let indexUsername=0
    let indexPassword=0
    if(inputU!=""&&inputP!=""){
        for(let i=0;i<SS.Username.length;i++){
            indexUsername=i
            if(inputU==SS.Username[i]){
                if(inputP==SS.Password[indexUsername]){
                    indexPassword=indexUsername
                }
                else{
                indexPassword=9999
                }
            break
            }
            indexUsername=9999
        }
        return(indexUsername==indexPassword)
        }
    }


async function jumpToPage(){
    await delay(3)
    alert('驗證正確跳轉')
    window.location.reload()
    address='index.html'+"?"+username
    window.location.href=address
}
//111111111111111111111111111111111111111111111111111111111111111
SummitBottom.addEventListener('click', Vertify_Summit )
Username_input.addEventListener('change',function(){
    inputU=Username_input.value
})
Password_input.addEventListener('change',function(){
    inputP=Password_input.value
})

//Username_input.addEventListener('click',function(){
   // label1.style.color="red"
//})
//Password_input.addEventListener('click',function(){
    
//})

DeleteBottom.addEventListener('click',function () {
    ans_list.pop()
    update_render()
})
//con.addEventListener('click',function () {
    //label1.style.color="blue"
//})



LoginBottom.addEventListener('click',function(){ //按下登入按鈕 才會出現驗證
    if(loginCheck(inputU,inputP)){
        LoginBottom.className='NotDisplay'
        VerifyBottom.className="Display"
        alert('密碼正確 點擊驗證按鈕')
    }   
    else{
        alert('密碼錯誤')
    }
})



VerifyBottom.addEventListener('click', function () {
    if(fisrt_time)  //只能夠執行一次 避免每按一次驗證按鈕 開啟一次verify[0]的監聽器 和重疊計數器 ps如果按3次驗證按鈕 下次按圖片0時 會一次執行3個ans_list.push(0) ans_list會有[0,0,0]!!
    {   
        DeleteBottom.className="Display" //按下驗證紐才出來
        SummitBottom.className="Display" //按下驗證紐才出來
        start_and_setTime ()
        verify_img[0].addEventListener('click', function () {
            ans_list.push(0)
            console.log(ans_list)
            update_render()
        })
        verify_img[1].addEventListener('click', function () {
            ans_list.push(1)
            console.log(ans_list)
            update_render()
        })
        verify_img[2].addEventListener('click', function () {
            ans_list.push(2)
            console.log(ans_list)
            update_render()
        })
        verify_img[3].addEventListener('click', function () {
            ans_list.push(3)
            console.log(ans_list)
            update_render()
        })
    }
    fisrt_time=false
    for(i=0;i<4;i++)
    {
    verify_img[i].className = "Display"; //按下驗證 更改照片的css定義 讓驗證照片顯示
    } 
    while(img_list.length!=4){ //隨機抽4個index值
        index=Math.floor(generateRandom(4))
        if(img_list.length==0 ||!index_check(index,img_list)){
            img_list.push(index)
            }
    }
   
    console.log(img_list)
    Vertify_render()
    }
)
function generateRandom(max){
    return Math.random() * max;
}
function index_check(index,img_list){
    let reapeat=false
    for(let i=0;i<img_list.length;i++){
        if(img_list[i]==index){
            reapeat=true //重複了
        }
        else(img_list[i]!=index)
        {
        }
    }
    return reapeat
}
function paddedFormat(num) {
    return num < 10 ? "0" + num : num; 
}

function startCountDown(duration, element) {

    let secondsRemaining = duration;
    let min = 0;
    let sec = 0;

    let countInterval = setInterval(function () {

        min = parseInt(secondsRemaining / 60);
        sec = parseInt(secondsRemaining % 60);

        element.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;

        secondsRemaining = secondsRemaining - 1;
        if (secondsRemaining==0 && ans_list.length!=4){
            console.log("時間到未完成作答")
            window.location.reload();
            };
        if (secondsRemaining < 0) { 
            clearInterval(countInterval)
            };
    }, 1000);
}

function start_and_setTime () {
    let time_minutes = 0; // Value in minutes
    let time_seconds = 30; // Value in seconds

    let duration = time_minutes * 60 + time_seconds;

    element = document.querySelector('#count-down-timer');
    element.textContent = `${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`;
    startCountDown(--duration, element);
};
function login_success(){

}
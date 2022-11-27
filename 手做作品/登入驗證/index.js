const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')
const deletedBtn2 = document.getElementById('deletedBtn2')
const list = document.getElementById('list')

const listContent = []

// function 
array=window.location.href
array=array.split('?')
array[1]=parseInt(array[1])
console.log(array)
console.log(typeof array[1])
function render() {
  // 渲染頁面的list
  let htmlStr = ''

  for(let i=0; i<listContent.length ; i++) {
    htmlStr = htmlStr + `
    <div class="item">
      <div>
        <p>內容：${listContent[i].content}</p>
        <p>時間：${listContent[i].date} ${listContent[i].time}</p>
      </div>
    </div> `
  }

  list.innerHTML = htmlStr
}



function New_render(){
    item_index=listContent.length
    last_item=document.getElementsByClassName("item")[item_index]
    last_item.innerHTML = ""
    list.removeChild(last_item)
}


// const r1 = new RenderFeature()

addedBtn.addEventListener('click', function () {

    listContent.unshift({
        content: content.value,
        date: date.value,
        time: time.value
    })
    console.log(listContent)
    render()
  
})

deletedBtn.addEventListener('click', function () {
    listContent.pop() //必須pop 如果沒有真實刪除list裡面的東西 用render()渲染時會渲染錯誤
    console.log(listContent)
    New_render() //不用重頭跑list裡面的東西 只需要用dom找出最後一個需刪除資料的index 過程中完全不用在意list裡面的東西 
})
deletedBtn2.addEventListener('click', function () {
    listContent.shift()
    console.log(listContent)
    render()
  })

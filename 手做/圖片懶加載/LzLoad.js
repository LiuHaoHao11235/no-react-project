const image_tags=document.querySelectorAll("img")
window.addEventListener("scroll",function(){ //事件監聽整個頁面
    console.log("scroll")
    for(i=0;i<image_tags.length;i++){
        const img_top=image_tags[i].getBoundingClientRect().top   //取得照片頂端到頁面頂端的距離
        if(img_top<window.innerHeight){
            const imgName=image_tags[i].getAttribute('invalid-src') //取得"無效路徑屬性invalid-src"中的"照片名稱"
            image_tags[i].setAttribute('src',imgName)//將照片名稱加入 新設定的正確載入屬性src中 語法為src=照片名
            }
    }
})

//!!!!缺點是每次只要滑動(scroll)螢幕就會觸發一次callback函數 造成效能下降 所以在另一個improve版的程式碼中加入觀察器 觀察器可以關掉 也可以在被觀察到或是離開觀察時才有執行 而不是每次scroll都計算一次
//照片跟螢幕頂端的距離和螢幕的大小比對 造成不必要的事件監聽資源浪費


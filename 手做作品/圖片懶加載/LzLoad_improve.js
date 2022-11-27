const image_tags=document.querySelectorAll("img")
const observer= new IntersectionObserver(function(entries){ 
    console.log("觀察到的圖片的被觀察屬性:",entries) //entries存被觀察到的圖片的被觀察屬性 
    for(i=0;i<entries.length;i++){ //將同一高度的圖片 一起加載 不用for就需要一個一個加載 如果有多張照片要同時加載會造成卡頓
        if(entries[i].isIntersecting){ //用來過濾"不在or離開"可視的entries 取"進入"可視的entries 因為監視器在這兩種狀態都會回傳被觀察到的圖片的被觀察屬性 讓entires有值 尤其一開始設定監視器並初始化網頁中照片所在位置時 
            //圖片被監視到都是"不在"可視範圍內的狀態 所以不用isIntersecting過濾 會造成所有照片即使不在可視範圍內也被抓出來載入畫面
            const image_tag=entries[i].target //取得被監視到進入可視範圍的圖片標籤
            const image_name=image_tag.getAttribute("invalid-src")//取得"無效路徑屬性invalid-src"中的"照片名稱"
            image_tag.setAttribute("src",image_name)
            console.log("載入照片:",image_name)
            observer.unobserve(image_tag) //解除觀察 選擇已經被載入的圖片標籤 觀察器中已經沒有被加載的照片標籤
            console.log("解除觀察:",image_name)
        }
    }
})
for(i=0;i<image_tags.length;i++){  //設定要監視什麼元素 相當於 "IntersectionObserver(function(entries){console.log(entries)).observe(img)"
    observer.observe(image_tags[i])    //只要狀態改變 也就是被監視到或是離開監視就會觸發callback function
 //                       ^
//                        這個是照片的dom節點 也就是整個照片標籤(等於上面的img_tag)
}

//!!!!注意一點 如果圖片被加載前時放在同一高度 也就是inline的屬性  全部圖片會被讀到 並且isIntersecting==true 造成全部的圖的路徑都被改成有效 並且同時加載 所以照片必須用block 或是inline block!!!!//

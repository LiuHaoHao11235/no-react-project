function learnJavaScript() {
    const strArray = ['English', 'JavaScript', 'React', 'TypeScript', 'AWS']
    let mapFor = (arr, fn) => {  
      const newArray = []
      for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i]))  
      }//這裡將隱藏function fn參數正式定義為函式參數 外面傳入的item參數成為fn()裡面的參數 為fn(item){return item.length} 像是將外面的function(item){...}成為了 fn(item){...}
      return newArray 
    }
    const lenArray = mapFor(strArray, function(item){return item.length})
    return 'Word length: ' + lenArray // [ 7, 10, 5, 10, 3 ]
  }


function filterTest() {
fullAge=[]
const persons = [
    { name: 'Niki', age: 34 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24 }
]
persons.filter(function(person){ //filter(function(被抓出來的參數))方法會將陣列主人裡面所有子物件或子元素輪流且一一被抓出來 他回調函式裡面的參數就是陣列中被抓出來元素 可以對被抓出來的元素做操作
    if (person.age>20){
        fullAge.push(person.age)    
    }
})
return fullAge 
}

function mapTest() {
    fullAge=[]
    const persons = [
        { name: 'Niki', age: 34 },
        { name: 'Mark', age: 18 },
        { name: 'John', age: 27 },
        { name: 'Jane', age: 14 },
        { name: 'Tony', age: 24 }
    ]
    persons.map(function(person){ //經過測試map和filter功能一樣
        if (person.age>20){
            fullAge.push(person.age)    
        }
    })
    return fullAge 
  }
  //!!!!!經過測試map和filter功能一樣!!!!!//

function Test(f1,f2){
  f1(10)
  f2(10)
}

Test(function(item1){console.log(item1)},function(item2){console.log(item2)})
//上下兩個一樣
Test(item1 => console.log(item1),item2 => console.log(item2))

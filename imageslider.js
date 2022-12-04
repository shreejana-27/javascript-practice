const img_array=['a.jpg','b.jpg','c.jpg','d.jpg','e.jpg']
const array_length=img_array.length
let i=0
let set=setInterval(sliderFunction,3000)

function sliderFunction(){
    i++
    i=i%array_length
    //0%5=0
    //1%5=1
    //2%5=2
    //3%5=3
    //4%5=4
    //5%5=0
    document.querySelector('#image').src=`images/${img_array[i]}`
}

function next(){
    i++
    i=i%array_length
    document.querySelector('#image').src=`images/${img_array[i]}`
}
function previous(){
    i--
    if(i<0){
        i=array_length-1
    }
    document.querySelector('#image').src=`images/${img_array[i]}`
}
function stops(){
    clearInterval(set)
}
function starts(){
    set=setInterval(sliderFunction,3000)
}

var num = 0;
var updated_num = 0 

function increment() {
    num += 1
    updated_num += num
    console.log(num)
    document.getElementById("total_numb").innerText = num
}


function decrement(){
    num -= 1
    updated_num -= num
    console.log(num)
    document.getElementById("total_numb").innerText = num
}


function save() {
    document.getElementById("total_numb").innerText="Total count is " + num
}
var num = 0;
var updated_num = 0 
let arr_history = []
var arr , index_num = 0 , note

//function for incrementing numbers
function increment() {
    num += 1
    updated_num += num
    console.log(num)
    document.getElementById("total_numb").innerText = num
}


//function for decrementing numbers
function decrement(){
    num -= 1
    updated_num -= num
    console.log(num)
    document.getElementById("total_numb").innerText = num
}


//function for saving numbers and description
function save() {
    document.getElementById("total_numb").innerText="Total is " + num
    arr_history.push(num)
    console.log(arr_history);
    
    //showing the saved number and note in history section 
    index_num++
    document.getElementById("count_took").innerText = arr_history[index_num-1] 
    console.log(index_num,"is the arrr")
    note = prompt("Note Description")
    console.log(note);
    document.getElementById("note_wrote").innerText = note

}


//function for reseting numbers
function reset() {
    num = 0
    document.getElementById("total_numb").innerText = 0;
}



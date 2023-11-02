
let count=0;
let countElement=document.getElementsByClassName("count")[0]
let previousCountElement=document.getElementsByClassName("previous")[0]
console.log(countElement.textContent);
function increment() {
    count+=1;
    countElement.textContent=count;
    
}

function save() {
    previousCountElement.textContent+=count + "-";
    count=0;
    countElement.textContent=0;

}
var list = [];
var div = document.getElementById("messages");

let chatvalue = document.getElementById("msg");
function chatboot() {
    list.push(chatvalue.value)
for(let i = 0; i < list.length; i++) {
   div.innerHTML += `<div class="bg-blue-600 rounded-full p-2 m-2 text-white w-min ">
   <p class"">${list[i]}</p>
   </div>` 
}
}

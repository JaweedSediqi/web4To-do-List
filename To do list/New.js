const input_box =document.getElementById("input-box");
const list_cintainner=document.querySelector('.list_cintainner');

function king(){
    if(input_box.value===''){
        alert("you must write someting");
    }
    else{
    let li=document.createElement('li');
    li.innerHTML=input_box.value;
    list_cintainner.appendChild(li);

    let span=document.createElement('span');
    span.innerHTML='\u00d7';
    li.appendChild(span);
    }
    input_box.value='';
    saveData()
}
list_cintainner.addEventListener('click',call);
function call(e) {
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
    // false;
}
function saveData(){
    localStorage.setItem('data',list_cintainner.innerHTML);
}
function showTask(){
    list_cintainner.innerHTML=localStorage.getItem('data');
}
showTask();


function keys(e){
    
}
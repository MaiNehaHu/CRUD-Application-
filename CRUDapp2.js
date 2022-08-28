function addonemore(AddBtn){
            
    let chap_list = document.getElementById('chap_list')
    if(chap_list.children[0].className==='emptyMsg'){
        chap_list.children[0].remove()
    }
    let newTask= document.createElement("li")
    newTask.setAttribute('id','box')
    newTask.innerHTML=`<span>✨</span>
    <input type="text" id="input" placeholder="Enter task"></input>
    <button onclick="OKbtn(this)" id="OKbtn">OK</button>`
    chap_list.append(newTask)
}
function removeone(){
    let chapka_list = document.getElementById('chap_list')
    chapka_list.children[chapka_list.children.length-1].remove();

    if(chapka_list.children.length === 0){
    //ul me agar ek b children nhi hai to ..
    let emptyMsg = document.createElement('h3')
    emptyMsg.setAttribute('class','emptyMsg')
    emptyMsg.textContent="Add a task for today!"
    chapka_list.append(emptyMsg)
}
}
function OKbtn(OKbtn){
    if(OKbtn.textContent==="OK"){

    OKbtn.textContent="Edit"
    let OK = OKbtn.previousElementSibling 
    console.log(OK);
    let ToDisplay = document.createElement('p');
    ToDisplay.setAttribute('id','displayed');

    console.log(OK.value)
    ToDisplay.textContent = OK.value;
    console.log(ToDisplay.textContent);
    OKbtn.parentElement.replaceChild(ToDisplay,OK)
}else{
    OKbtn.textContent="OK"
    let OK = OKbtn.previousElementSibling            //DisplayedText ko save kiya
    console.log(OK);
    let TextField = document.createElement('input');
    TextField.type="text"
    TextField.setAttribute('id','input')
    TextField.placeholder="Enter task"

    TextField.value = OK.textContent                 //textfield ka value set to DisplayedText
    console.log((TextField.value));
    OKbtn.parentElement.replaceChild(TextField,OK)    
}
}
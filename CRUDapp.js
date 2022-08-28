ok.addEventListener('click',function(event){

    let chap_list = document.getElementById('chap_list')
    if( chap_list.children[0].className==="emptyMsg"){
        chap_list.children[0].remove()                     
    //list ka pehla child ka class agar emptyMsg hai to remove kardo
    }
    let okBtn = event.currentTarget;
    //button ka current target button hi hoga na
    console.log(event.currentTarget);
    let currentInput = okBtn.previousElementSibling
    //button se phle obviously text hi ayega .. ab vo taget h 
    let Chaptername =  currentInput.value; 
    //stored text in a variable
    console.log("Chaptername-->niche");
    console.log(Chaptername);


    let NewLi = document.createElement('li')             
    //new li in ul
    NewLi.setAttribute('class',"list-group-item")
    //Attribute set kiye
    NewLi.classList.add('list-group-item')         
    //class list me add kiya jo ki.. phle se jo elemet h unke pass bhi yahi className h
    NewLi.innerHTML= `<h3 class="flex-grow-1">${Chaptername}</h3>
    <button onclick="removeCh(this)" id="remove" class="btn btn-danger mx-3">Remove</button>
    <button onclick="editCh(this)" id="edit" class="btn btn-info ">Edit</button>`    //li ke text me stored text aagya
    //ChapterName aa jayega, remove button oor edir button


    let chapkalist = document.getElementById('chap_list') 
    //ul ka jo Id hai.. uska variable banaya
    chapkalist.append(NewLi)                         
    //Newli ko ul me append kiye
    
})

function removeCh(event){
    //event acts like "this"
    let removeBtn = event.parentElement
    console.log(event.parentElement);
    //iska parent element jo li hai vahi hai
    removeBtn.remove()
    //li ko remove kar diye

    //to show a mseeage when there is nothing in the list
    let chap_list = document.getElementById('chap_list')
    //ul ko select kiya
    if(chap_list.children.length === 0){
        //ul me agar ek b children nhi hai to ..
        let emptyMsg = document.createElement('h5')
        emptyMsg.setAttribute('class','emptyMsg')
        //class name de diye..but bhaiya ne classNme.add('emptyMsg) kiya tha..That is also fine
        emptyMsg.textContent="Nothing is there. Please add a chapter."
        chap_list.appendChild(emptyMsg)
    }
}
function editCh(editBtn){
    if(editBtn.textContent==="done"){
        //if button is done
        editBtn.textContent= "Edit"
        //Rechange it to Edit
        let RemoveBtn = editBtn.previousElementSibling           //Remove button 
        let newName = RemoveBtn.previousElementSibling       //chapter name
        //Select the Chapter Name element
        console.log("newName ka value jo input me diya: "+newName.value);

        let ChapterName = document.createElement('h3')
        //Creating h3 to be displayed after clicking done
        ChapterName.className="flex-grow-1"
        ChapterName.textContent = newName.value
        //Iska ChapterName me newName ka value add hoga
        //Value for Input
        //textContent for display
        console.log("to ChapterName ka textContent bhi: "+ChapterName.textContent);

        editBtn.parentElement.replaceChild(ChapterName,newName)
        //TextField ko h3 se replace kar diye

    }else{

    editBtn.textContent="done"
    let RemoveBtn = editBtn.previousElementSibling          //Remove button 
    let chapterName = RemoveBtn.previousElementSibling      //chapter name
    //Select the Chapter Name element
    console.log("chapterName ka textContent: "+ chapterName.textContent);

    let input= document.createElement('input')
    //created input field for new chapter name
    input.setAttribute('id','newname')
    input.type="text"
    input.placeholder="New chapter name"
    input.class="form-control"
    input.value= chapterName.textContent
    //ChapterName ka text content ke InputField ke value me save hogya
    //Value for Input
    //textContent for display
    console.log("to input ka value bhi: "+ input.value);

    editBtn.parentElement.replaceChild(input,chapterName)
    //Text ko inputField  se exchange kar diye
    }
}




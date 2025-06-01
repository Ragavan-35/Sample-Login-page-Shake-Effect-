function validateinput(){
    let inputField=document.getElementById("input-field1");
    let inputValue=inputField.value.trim();
    const errormessage=document.getElementById("error-message1");
    if(inputValue===""){
        inputField.classList.add("shake");
        errormessage.style.visibility="visible";
    
    setTimeout(function(){
        inputField.classList.remove("shake");
        errormessage.style.visibility="hidden";
    },500);
}
    else{
        
        alert("Valid inputs");
    }

    let inputField1=document.getElementById("input-field2");
    let inputValue11=inputField.value.trim();
    const errormessage1=document.getElementById("error-message2");
    if(inputValue11===""){
        inputField1.classList.add("shake");
        errormessage1.style.visibility="visible";
    
    setTimeout(function(){
        inputField1.classList.remove("shake");
        errormessage1.style.visibility="hidden";
    },500);
}
    else{
        
        alert("Valid inputs");
    }
}

let car={
    carName:"audi",
    carcolor:"yellow"
    



}
for(let carName in car){
    console.log(car[carName]);
}

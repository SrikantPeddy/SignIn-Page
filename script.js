
// tempID = document.getElementById("formID").addEventListener("click",    
function showAlert() {

    
    const name = document.getElementById("user_name").value;
    const pswd = document.getElementById("user_pwd").value;
    // event.preventDefault();

    if(name == null || (name.length < 4 || name.length > 20)){
        alert(`Incompatible Username`);
        return;
    }
    else if(pswd == null || (pswd.length < 9 || pswd.length > 20)){
        alert(`Incompatible Password`);
        return;
    }
    else if((name == null || (name.length < 4 || name.length > 20)) && (pswd == null || (pswd.length < 9 || pswd.length > 20))){
        alert(`Incompatible Username and Password`);
    }
    else{window.alert(`Login successful`);
        alert(`User - (${name})`)
    }

    console.log(name);

};
function showAlertfp(){
    const email = document.getElementById('user_email').value;

    if(email == null || email.length < 5){alert("Re-verify the email to correct one.");}
    else{
    document.getElementById('messageID').innerHTML="Thank you for your time. You will receive updates to above given email.";
    event.preventDefault();

    }
    

}
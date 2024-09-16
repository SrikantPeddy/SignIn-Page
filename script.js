document.addEventListener("DOMContentLoaded", () => {

var btnIndex =document.getElementById("formBtn");
btnIndex.addEventListener('click', function(){    
        const username = document.getElementById("user_name");
        const pswd = document.getElementById("user_pwd");
    
        if(username.value.length < 4 || username.value.length > 20){
            console.log("Inside 1");
            alert(`Incompatible Username`);
        }
        else if(pswd.value.length < 9 || pswd.value.length > 20){
            console.log("Inside 2");
            alert(`Incompatible Password`);
        }
        else{alert(`Login successful`);
            alert(`User - (${username.value})`);
        }
    
    });

});

document.addEventListener("DOMContentLoaded", () => {
var btnForgot = document.getElementById("forgotBtn");

btnForgot.addEventListener('click', function(){
    const useremail = document.getElementById("user_email");
    const validExpressionCheck = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if(!(useremail.value.match(validExpressionCheck))){
        console.log("Inside forgot listener");
        alert(`incompatible Email. Try again`);

    }else{document.getElementById('messageID').innerHTML="Thank you for your time. You will receive updates to above given email.";
        event.preventDefault();
    }

    });
});

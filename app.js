const checkBtn = document.querySelector(".checkBtn");


let message;

checkBtn.onclick = () => {
    const email = document.querySelector(".email").value.trim();


    if(email.indexOf("@")=== -1 || email.indexOf("@",email.indexOf("@")+1)!== -1){
        result = " should have one '@'";
        sendAMessageNegative(email, result);
    }else if(!(email.endsWith(".com")) && !(email.endsWith(".de")) && !(email.endsWith(".en")) && !(email.endsWith(".tr"))){
        result = " should have a domain.";
        sendAMessageNegative(email, result);
    }else{
        result = " is a valid Email";
        sendAMessagePositive(email, result);
    }

}
const sendAMessageNegative = (email, result) =>{
    const resultArea = document.querySelector(".result");
    let a = result.toUpperCase();
    document.querySelector(".result").value = email + a;
    resultArea.style.backgroundColor= "red";
    resultArea.style.color= "white";

}

const sendAMessagePositive = (email, result) =>{
    const resultArea = document.querySelector(".result");
    let a = result.toUpperCase();
    document.querySelector(".result").value = email + a;
    resultArea.style.backgroundColor= "green";
    resultArea.style.color= "white";

}

welcomespeech();

function welcomespeech(){
    let userName = prompt ("Siapa Nama Anda?");
    if (userName != '') {
        document.getElementById('user-greeting').textContent = userName; 
    }
}

function sendmessage(){
    let message = document.getElementById('user-message').value;
    if(message != '' ){
        alert("message sent: " + message);
    } else{
        alert("please enter a message before sending");
    }
}
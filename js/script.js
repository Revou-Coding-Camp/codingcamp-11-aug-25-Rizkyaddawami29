
welcomespeech();

function welcomespeech(){
    let userName = prompt ("Siapa Nama Anda?");
    if (userName != '') {
        document.getElementById('user-greeting').textContent = userName; 
    }
}

function sendmessage(){
    let message = document.getElementById('user-message').value;
    let name = document.getElementById('user-name').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let genderValue = gender ? gender.value : "Belum dipilih"
    let dob = document.getElementById("dob").value;
    let now = new Date();
    let waktuInput = now.toLocaleString();
    if(message != '' || name != ''){
        alert("message sent: " + message +"\n"+ "your name: " + name + "\n" + "gender: " + genderValue + "\n" + "Date of Birth: " + dob + "\n" + "Input time: " + waktuInput);
    } else{
        alert("please enter a message before sending");
    }
}
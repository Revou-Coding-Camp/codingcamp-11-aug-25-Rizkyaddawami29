
welcomespeech();

function welcomespeech(){
    let userName = prompt ("Siapa Nama Anda?");
    if (userName != '') {
        let hours = new Date().getHours();
  let timeGreeting = "";

  if (hours < 12) {
    timeGreeting = "Morning";
  } else if (hours < 18) {
    timeGreeting = "Afternoon";
  } else {
    timeGreeting = "Evening";
  }
        document.getElementById("time-greeting").textContent = timeGreeting + ",";
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
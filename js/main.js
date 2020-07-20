// Declaration of Variables
const menuButton = document.querySelector('.burger');
const menu = document.querySelector('.nav-list');
const menuLinks = document.querySelectorAll('.nav-list li');

// Menu toggle
menuButton.addEventListener('click', () => {
//Toggle menu and Logo Change
    menuButton.classList.toggle('close');
    menu.classList.toggle('active');
// Links fade in
    menuLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ""
        } else {
            link.style.animation= `linksFadein 0.3s ease forwards ${index/7 + 0.6}s`;
        }
    })
});

const validate = () => {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    let text;
    if(name.length < 4 && name.includes(' ')){
        text = "Please enter valid full name";
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(phone) || phone.length != 10){
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if(subject.length <= 140){
        text = "Please Enter More Than 140 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}
let userName = document.querySelector('[name = username]')
let eMail = document.querySelector('[name = email')
let sendBtn = document.querySelector('.send-btn')
let skills = document.querySelectorAll('[name = skills]')
let labels = document.querySelectorAll('label')
let errBox = document.querySelector('.erorr-box')
let form = document.querySelector('form')


let skillsVal = []
let errors = []

console.log(sendBtn);
sendBtn.addEventListener('click', validation)


function validation(e) {
    e.preventDefault()
    let userData = getUserData()

    console.log(userData);

    if ( userData.username.length < 3) {
        userName.style.border = "1px solid red"
        errors.push('Please enter a valid name.')    
    }

    if (userData.email.indexOf('@gmail') === -1  && userData.email.indexOf('@yahoo') === -1) {
        eMail.style.border = "1px solid red"
        errors.push('Please enter a valid email.')
    }

    if (skillsVal.length === 0) {
        errors.push('Please enter a skill.')

        labels.forEach(function(label) {
            label.style.color = "red"
        })
    }

    if (errors.length !== 0) {
        displayErrors()
    } else {
        dataBase.push(userData) 
        console.log(dataBase);


        // form.submit(userData)
    }
}


function displayErrors() {
    errBox.style.display = "block"

    let text = ""
    
    for (let i = 0; i < errors.length; i++) {
        text += `<p>${errors[i]}</p>`
    }
    errBox.innerHTML = text
    
    if (text !== "") {
        setTimeout(resetErrorBox ,3000)
    }
}

function resetErrorBox() {
    errBox.style.display = "none"
    errors = []
}

function getUserData() {
    let name = userName.value
    let email = eMail.value
    let genderVal = document.querySelector('[type="radio"]:checked').value
    for (let i = 0; i < skills.length; i++) {
        if (skills[i].checked) {
            skillsVal.push(skills[i].value)
        }
    }  

    let newUser = {
        username : name,
        email : email,
        gender: genderVal,
        skills : skillsVal  
    }
    
   return newUser
}


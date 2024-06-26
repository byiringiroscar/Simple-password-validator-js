const passwordInput = document.querySelector('.password-control')
const showPasswordButton = document.querySelector('.show-password')


showPasswordButton.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password'
    passwordInput.setAttribute('type', type)
    // this.classList.toggle('active')
    if(type === 'password') {
        showPasswordButton.textContent = 'Show'
    }
    else {
        showPasswordButton.textContent = 'Hide'
    }
})

function toggleValidity(elementId, isValid) {
    const element = document.getElementById(elementId)
    element.classList.toggle('valid', isValid)
    element.classList.toggle('invalid', !isValid)
}

passwordInput.addEventListener('input', function() {
    const password = passwordInput.value
    toggleValidity('length', password.length >= 8)
    toggleValidity('lowercase', password.match(/[a-z]/))
    toggleValidity('uppercase', password.match(/[A-Z]/))
    toggleValidity('number', password.match(/[0-9]/))
    toggleValidity('special', password.match(/[^a-zA-Z0-9]/))
})




// const passwordInput = document.getElementsByClassName('password-control')[0]


// // <li id="length">At least 8 characters</li>
// //                     <li id="lowercase">At least one lowercase letter</li>
// //                     <li id="uppercase">At least one uppercase letter</li>
// //                     <li id="number">At least one number</li>
// //                     <li id="special">At least one special character</li>


// passwordInput.addEventListener('input', function() {
//     const password = passwordInput.value
//     const length = password.length >= 8
//     const lowercase = password.match(/[a-z]/)
//     const uppercase = password.match(/[A-Z]/)
//     const number = password.match(/[0-9]/)
//     const special = password.match(/[^a-zA-Z0-9]/)
    
//     document.getElementById('length').classList.toggle('valid', length)
//     document.getElementById('length').classList.toggle('invalid', !length)

//     document.getElementById('lowercase').classList.toggle('valid', lowercase)
//     document.getElementById('lowercase').classList.toggle('invalid', !lowercase)

//     document.getElementById('uppercase').classList.toggle('valid', uppercase)
//     document.getElementById('uppercase').classList.toggle('invalid', !uppercase)

//     document.getElementById('number').classList.toggle('valid', number)
//     document.getElementById('number').classList.toggle('invalid', !number)

//     document.getElementById('special').classList.toggle('valid', special)
//     document.getElementById('special').classList.toggle('invalid', !special)
// })
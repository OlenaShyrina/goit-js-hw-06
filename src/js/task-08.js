const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    const {elements: {email, password}} = event.currentTarget;

event.preventDefault();

if (email.value === '' || password.value === '') {
    alert('Please, foll in all fields of the form!');

} else {
    const formData = {
        email: email.value,
        password: password.value,
    };
    console.log(formData);
}

event.currentTarget.removeEventListener();
}


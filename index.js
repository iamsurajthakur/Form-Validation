const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cPassword = document.getElementById('c-password');


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    Validate();
});

const setError = (element,message) => {

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
}

const validEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const Validate = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cPasswordValue = cPassword.value.trim();

    if(usernameValue === ''){
        setError(username,'username is required');
    }else{
        setSuccess(username);
    }
    if(emailValue === ''){
        setError(email,'email required');
    }else if(!validEmail(emailValue)){
        setError(email,'valid email required')
    }
    else{
        setSuccess(email)
    }
    if(passwordValue === ''){
        setError(password,'Password required');
    }else if(passwordValue.length < 6 || passwordValue.length > 20){
        setError(password,'Password length is too small or big')
    }
    else{
        setSuccess(password)
    }
    if(cPasswordValue === ''){
        setError(cPassword,'required feild');
    }else if(cPasswordValue === passwordValue){
        setSuccess(cPassword)
    }
    else{
        setError(cPassword,`Both password doesn't matched`)
    }
}

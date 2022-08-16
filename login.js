document.getElementById('btn-submit').addEventListener('click', function(){
    const getEmail = document.getElementById('email-field')
    const emailValue = getEmail.value 

    const getInput = document.getElementById('password-field')
    const passValue = getInput.value 

    if(emailValue == 'hasanbro@gmail.com' && passValue == 'hasan'){
        window.location.href = 'bank.html'
    } else{
        alert ('muri ka')
    }
})
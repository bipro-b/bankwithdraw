document.getElementById('login-submit').addEventListener('click', function () {
    // get email

    const emailField = document.getElementById('user-email');

    const userEmail = emailField.value;
    // get pasword

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // check validation

    if (userEmail == 'biprocuet@gmail.com' && userPassword == 'biprobarai') {
        window.location.href = 'Banking.html'; // linked another page
    }
    else {
        console.log('Invalid user');
    }

})


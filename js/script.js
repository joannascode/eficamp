document.addEventListener('DOMContentLoaded', function () {
    const password = document.querySelector('#password');
    const error = document.querySelector('.error');
    const submit = document.querySelector('.button');


    submit.addEventListener('clik', function (event) {
        event.preventDefault();

        $.ajax({
            type: "post",
            data: {
                login: 'efi',
                password: password.value
            },
            url: "https://efigence-camp.herokuapp.com/api/login"
        }).done(function (response) {
            console.log('success');
            console.log(response);

            window.location.href = "main.html";
        }).fail(function (response) {

            error.style.display = 'block';
            error.innerHTML = response.responseJSON.message;
        });
    })
})
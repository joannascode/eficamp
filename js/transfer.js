document.addEventListener('DOMContentLoaded', function () {
    const allValidate = document.querySelectorAll('[data-validate]');
    console.log(allValidate);

    allValidate.forEach(function (valForm) {
        console.log(valForm);
    });
//to to samo co wyżej
    for ( var i = 0; i < allValidate.length; i++ ) {
        console.log(allValidate[i]);
    }

    allValidate.forEach(function (valForm) {
        console.log(valForm.dataset);
    });


    allValidate.forEach(function (valForm) {
        console.log(valForm.dataset.validate,valForm);
    });


    allValidate.forEach(function (valForm) {
        console.log(valForm.dataset.validate.split(','));
    });

// przechowanie reguły i funkcję im odpowiadające

    const all = {
        requried: function (input) {
            console.log(input.value.length > 0);

            return input.value.length > 0;

        }
    };

 console.log(all.requried(document.querySelector('[data-validate]')));

});
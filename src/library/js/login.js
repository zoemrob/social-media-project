"use strict";
const FrontUtils = new ZUtils();
const loginForm = document.querySelector('#js-login-form');
if (loginForm !== undefined) {
    loginForm.onsubmit = (e) => {
        e.preventDefault();
        let formObj = FrontUtils.objectifyForm(loginForm);
        // room to do stuff to form
        const formJson = JSON.stringify(formObj);
        const request = new ZRequest({
            uri: 'user/login',
            httpMethod: 'POST',
            body: formJson,
            needAuth: false
        });
        request.request().then(data => {
            console.log(data);
        })

    }
} else {
    console.log('loginForm not found\.');
}
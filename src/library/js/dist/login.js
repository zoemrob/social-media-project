"use strict";function login(){const e=document.querySelector("#js-login-form");function o(e){const o=JSON.stringify(e);new ZRequest({uri:"user/login",httpMethod:"POST",body:o,needAuth:!1}).request().then(e=>{if(console.log(e),void 0!==e.lockout&&localStorage.setItem("loginLockout",JSON.stringify(e.lockout)),!0===e.loggedIn){(new Headers).append("Authorization",localStorage.getItem("jwt")),window.location="user/home"}})}e.onsubmit=(t=>{t.preventDefault();let n=ZUtils.objectifyForm(e);if(null!==localStorage.getItem("loginLockout")){const e=JSON.parse(localStorage.getItem("loginLockout")),t=new Date(1e3*e.lockout),l=e.email;if(Date.now()<t.getTime()&&n.email===l){const e=new Date(t-Date.now());(function(e){const o=new tingle.modal({footer:!1,closeLabel:"Close",onOpen:function(){console.log(e)},onClose:function(){o.close();const e=document.querySelector("div.tingle-modal");e.remove()}});return o.setContent("<h1>"+e+"</h1>"),o})("Account locked for "+e.getMinutes()+" minutes and "+e.getSeconds()+" seconds.").open()}else o(n)}else o(n)})}document.addEventListener("DOMContentLoaded",login);
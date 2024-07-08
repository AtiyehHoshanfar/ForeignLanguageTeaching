//! breadCrumb
const signup=document.querySelector(".signup");
const signin=document.querySelector(".signin");
const loginForm=document.querySelector("#login-form")
const signupForm=document.querySelector("#signup-form")
const breadcrumbs=document.querySelector(".breadcrumbs")
signup.addEventListener("click",()=>{
    breadcrumbs.style.transform="translateX(-100%)";
    signupForm.style.display="block";
    loginForm.style.display="none";

})
signin.addEventListener("click",()=>{
    breadcrumbs.style.transform="translateX(0)";
    signupForm.style.display="none";
    loginForm.style.display="block";
})
// ! show password Sign in
function showHidePassword(input,button){
    if(input.type==="password"){
        input.type="text";
        button.innerHTML="<i class='text-purple-600 text-lg fa-solid fa-eye-slash'></i>"
    }
    else {
        input.type="password";
        button.innerHTML="<i class='text-purple-600 text-lg fa-solid fa-eye'></i>"

    }
}
const passwordInput=document.querySelector("#password");
const showHidebtnLogin=document.querySelector(".show-hide-btn-login");
showHidebtnLogin.addEventListener("click",(e)=>{
    e.preventDefault();
    showHidePassword(passwordInput,showHidebtnLogin)
})

// ! Show hide SignUp 
const signupPassword=document.querySelector("#signup-password");
const signupConfirmPassword=document.querySelector("#signup-confirm-password");
const signupPasswordBtn=document.querySelector(".signup-password-btn");
const signupConfirmPasswordBtn=document.querySelector(".signup-confirm-password-btn");
signupPasswordBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    showHidePassword(signupPassword,signupPasswordBtn)
})
signupConfirmPasswordBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    showHidePassword(signupConfirmPassword,signupConfirmPasswordBtn)
})

   


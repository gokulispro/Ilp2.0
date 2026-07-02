/* ===========================================
   REGISTRATION JAVASCRIPT
=========================================== */

"use strict";

/* ===========================================
   DOM
=========================================== */

const form = document.getElementById("registrationForm");

const sections = document.querySelectorAll(".form-section");

const steps = document.querySelectorAll(".step");

const nextButtons = document.querySelectorAll(".nextBtn");

const previousButtons = document.querySelectorAll(".previousBtn");

const submitButton = document.getElementById("submitBtn");

/* ===========================================
   INPUTS
=========================================== */

const fullName = document.getElementById("fullName");

const email = document.getElementById("email");

const phone = document.getElementById("phone");

const password = document.getElementById("password");

const confirmPassword = document.getElementById("confirmPassword");

const organizationName =
document.getElementById("organizationName");

const city =
document.getElementById("city");

const country =
document.getElementById("country");

/* ===========================================
   REVIEW
=========================================== */

const reviewAdmin =
document.getElementById("reviewAdminName");

const reviewOrganization =
document.getElementById("reviewOrganization");

const reviewResources =
document.getElementById("reviewResources");

const reviewContact =
document.getElementById("reviewContact");

/* ===========================================
   CURRENT STEP
=========================================== */

let currentStep = 0;

/* ===========================================
   REGEX
=========================================== */

const nameRegex =
/^[A-Za-z ]{2,50}$/;

const emailRegex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phoneRegex =
/^[6-9]\d{9}$/;

/* ===========================================
   SHOW STEP
=========================================== */

function showStep(step){

    sections.forEach(section=>{

        section.classList.remove("active");

    });

    steps.forEach(item=>{

        item.classList.remove("active");

    });

    sections[step].classList.add("active");

    steps[step].classList.add("active");

    for(let i=0;i<step;i++){

        steps[i].classList.add("completed");

    }

    for(let i=step;i<steps.length;i++){

        if(i!==step){

            steps[i].classList.remove("completed");

        }

    }

}

/* ===========================================
   INITIALIZE
=========================================== */

showStep(currentStep);


/* ===========================================
   VALIDATION FUNCTIONS
=========================================== */

function showError(input,message){

    input.classList.remove("success");

    input.classList.add("invalid");

    let error=input.parentElement.querySelector(".error");

    if(!error){

        error=document.createElement("small");

        error.className="error";

        input.parentElement.appendChild(error);

    }

    error.textContent=message;

}

function clearError(input){

    input.classList.remove("invalid");

    input.classList.add("success");

    const error=input.parentElement.querySelector(".error");

    if(error){

        error.remove();

    }

}

function validateStepOne(){

    let valid=true;

    if(!nameRegex.test(fullName.value.trim())){

        showError(

            fullName,

            "Enter a valid full name."

        );

        valid=false;

    }

    else{

        clearError(fullName);

    }

    if(!emailRegex.test(email.value.trim())){

        showError(

            email,

            "Invalid email address."

        );

        valid=false;

    }

    else{

        clearError(email);

    }

    if(!phoneRegex.test(phone.value.trim())){

        showError(

            phone,

            "Enter a valid 10 digit mobile number."

        );

        valid=false;

    }

    else{

        clearError(phone);

    }

    if(password.value.length<8){

        showError(

            password,

            "Password must contain at least 8 characters."

        );

        valid=false;

    }

    else{

        clearError(password);

    }

    if(confirmPassword.value!==password.value){

        showError(

            confirmPassword,

            "Passwords do not match."

        );

        valid=false;

    }

    else{

        clearError(confirmPassword);

    }

    return valid;

}

/* ===========================================
   NEXT BUTTON
=========================================== */

nextButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        if(currentStep===0){

            if(!validateStepOne()){

                return;

            }

        }

        if(currentStep<sections.length-1){

            currentStep++;

            showStep(currentStep);

        }

    });

});

/* ===========================================
   PREVIOUS BUTTON
=========================================== */

previousButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        if(currentStep>0){

            currentStep--;

            showStep(currentStep);

        }

    });

});




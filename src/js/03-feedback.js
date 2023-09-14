import throttle from 'lodash.throttle';

const registerForm = document.querySelector(".feedback-form");
const emailInput = registerForm.querySelector('[name="email"]');
const messageInput = registerForm.querySelector('[name="message"]');

 const saveInput = throttle(function () {
    const feedbackData = {
        email: emailInput.value,
        message: messageInput.value
      };
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackData));
    }, 500);
    
function updateFormFields() {
    const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (savedData !== null) {
        emailInput.value = savedData.email;
        messageInput.value = savedData.message;
        }
    }

    function clearLocalStorage() {
    localStorage.removeItem("feedback-form-state");
    registerForm.reset();
    }

    registerForm.addEventListener('input', saveInput);
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log({
            email: emailInput.value,
            message: messageInput.value
          });
          clearLocalStorage();
      });
          
      updateFormFields();

// import throttle from 'lodash.throttle';

// const registerForm = document.querySelector(".feedback-form");
// const emailInput = registerForm.querySelector('[name="email"]');
// const messageInput = registerForm.querySelector('[name="message"]');

// function saveInput() {
//     const feedbackData = {
//         email: emailInput.value,
//         message: messageInput.value
//       };
//     localStorage.setItem("feedback-form-state", JSON.stringify(feedbackData));
//     }
    
// function updateFormFields() {
//     const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
//     if (savedData !== null) {
//         emailInput.value = savedData.email;
//         messageInput.value = savedData.message;
//         }
//     }

//     function clearLocalStorage() {
//     localStorage.removeItem("feedback-form-state");
//     registerForm.reset();
//     }

//     registerForm.addEventListener('input', throttle(saveInput), 500);
//     registerForm.addEventListener("submit", function (event) {
//         event.preventDefault();
//         console.log({
//             email: emailInput.value,
//             message: messageInput.value
//           });
//           clearLocalStorage();
//       });
          
//       updateFormFields();
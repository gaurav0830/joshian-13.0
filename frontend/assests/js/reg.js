document.addEventListener('DOMContentLoaded', () => {
    const selectBox = document.getElementById('options');
    const inputFieldsDiv = document.getElementById('inputFields');
  
    selectBox.addEventListener('change', () => {
      const selectedValue = selectBox.value;
  
      // Clear existing input fields
      inputFieldsDiv.innerHTML = '';
  
      // Add new input fields based on the selected value
      switch (selectedValue) {
        case 'astrohack':
          addInputField('Enter Participant Name1:');
          break;
        case 'galactic webcraft':
          addInputField('Enter Participant Name1:');
          addInputField('Enter Participant Name2:');
          break;
        case 'quantum query':
          addInputField('Enter Participant Name1:');
          addInputField('Enter Participant Name2:');
          break;
        case 'infognite':
          addInputField('Enter Participant Name1:');
          addInputField('Enter Participant Name2:');
          break; 
        case 'futurewave':
          addInputField('Enter Participant Name1:');
          break;
        case 'CLOAKED':
          addInputField('Enter Participant Name1:');
          addInputField('Enter Participant Name2:');
          break;
        case 'OUTLAST':
          addInputField('Enter Participant Name1:');
          addInputField('Enter Participant Name2:');
        case 'COSMIC BEAT':
          addInputField('Enter Participant Name1:');
          addInputField('Enter Participant Name2:');
          addInputField('Enter Participant Name3:');
          addInputField('Enter Participant Name4:');
          addInputField('Enter Participant Name5:');
          addInputField('Enter Participant Name6:');
          break;
        case 'FRACTAL FORTUNE':
          addInputField('Enter Participant Name1:');
          addInputField('Enter Participant Name2:');
          break;
        case 'STELLER STORIES':
          addInputField('Enter Participant Name1:');
          break;
        default:
          console.log('Invalid selected value');
      }
    });
  
    function addInputField(placeholder) {
      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.name = placeholder.replace(/\s+/g, '_').toLowerCase();
      inputField.placeholder = placeholder;
      inputFieldsDiv.appendChild(inputField);
      inputFieldsDiv.appendChild(document.createElement('br')); // Add line break for better layout
    }
  });
 
  const form = document.getElementById('myForm');
     const nameInput = document.getElementById('college');
     const emailInput = document.getElementById('email');
     const phoneInput = document.getElementById('phone');
     const nameError = document.getElementById('nameError');
     const emailError = document.getElementById('emailError');
     const phoneError = document.getElementById('phoneError');
 
     form.addEventListener('submit', (e) => {
       let isValid = true;
 
       if (nameInput.value.trim() === '') {
         nameError.textContent = 'Name is required';
         isValid = false;
       } else {
         nameError.textContent = '';
       }
 
       if (emailInput.value.trim() === '') {
         emailError.textContent = 'Email is required';
         isValid = false;
       } else if (!validateEmail(emailInput.value)) {
         emailError.textContent = 'Invalid email';
         isValid = false;
       } else {
         emailError.textContent = '';
       }
 
       if (phoneInput.value.trim() === '') {
         phoneError.textContent = 'Phone is required';
         isValid = false;
       } else if (!validatePhone(phoneInput.value)) {
         phoneError.textContent = 'Invalid phone number';
         isValid = false;
       } else {
         phoneError.textContent = '';
       }
 
       if (!isValid) {
         e.preventDefault();
       }
     });
 
     function validateEmail(email) {
       const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
       return emailRegex.test(email);
     }
 
     function validatePhone(phone) {
       const phoneRegex = /^\d{10}$/;
       return phoneRegex.test(phone);
     }
     
 
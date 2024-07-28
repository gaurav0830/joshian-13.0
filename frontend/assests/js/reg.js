document.addEventListener('DOMContentLoaded', () => {
    const selectBox = document.getElementById('options');
    const inputFieldsDiv = document.getElementById('inputFields');
  
    selectBox.addEventListener('change', () => {
      const selectedValue = selectBox.value;
  
      // Clear existing input fields
      inputFieldsDiv.innerHTML = '';
  
      // Add new input fields based on the selected value
      switch (selectedValue) {
        case 'SEOUL':
          addInputField('Enter Participant Name1:');
          addInputField('Enter Participant Name2:');
          break;
        case 'CodeBlanca':
          addInputField('Enter Participant Name1:');
          addInputField('Enter Participant Name2:');
          break;
        case 'CairoConflicts':
          addInputField('Enter Participant Name1:');
          addInputField('Enter Participant Name2:');
          break;
        case 'NukeTown':
          addInputField('Enter Participant Name1:');
          addInputField('Enter Participant Name2:');
          addInputField('Enter Participant Name3:');
          addInputField('Enter Participant Name4:');
          break; 
        case 'DortWeb':
          addInputField('Enter Participant Name1:');
          addInputField('Enter Participant Name2:');
          break;
        case 'Vlog of Fame':
          addInputField('Enter Participant Name1:');
          break;
        case 'Harlem Shake':
          addInputField('Enter Participant Name1:');
          addInputField('Enter Participant Name2:');
          addInputField('Enter Participant Name3:');
          addInputField('Enter Participant Name4:');
          break;
          case 'L ObjectIf':
          addInputField('Enter Participant Name1:');
          break;
        case 'IT Pharaoh':
          addInputField('Enter Participant Name1:');
          break;
        case 'Takeshis Castle':
          addInputField('Enter Participant Name1:');
          addInputField('Enter Participant Name2:');
          addInputField('Enter Participant Name3:');
          addInputField('Enter Participant Name4:');
          addInputField('Enter Participant Name5:');
          addInputField('Enter Participant Name6:');
          addInputField('Enter Participant Name7:');
          addInputField('Enter Participant Name8:');
          addInputField('Enter Participant Name9:');
          addInputField('Enter Participant Name10:');
          addInputField('Enter Participant Name11:');
          addInputField('Enter Participant Name12:');
          addInputField('Enter Participant Name13:');
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
     
 
/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (loginPass, loginEye) =>{
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye)

   iconEye.addEventListener('click', () =>{
      // Change password to text
      if(input.type === 'password'){
         // Switch to text
         input.type = 'text'

         // Icon change
         iconEye.classList.add('ri-eye-line')
         iconEye.classList.remove('ri-eye-off-line')
      } else{
         // Change to password
         input.type = 'password'

         // Icon change
         iconEye.classList.remove('ri-eye-line')
         iconEye.classList.add('ri-eye-off-line')
      }
   })
}

showHiddenPass('login-pass','login-eye')

document.addEventListener('DOMContentLoaded', function () {
   document.querySelector('.login__form').addEventListener('submit', function (e) {
       e.preventDefault();
       alert('Login Successful!');
   });
});

// Add this function to handle logo positioning
const adjustLogoPosition = () => {
  const logo = document.querySelector('.login__logo');
  const windowHeight = window.innerHeight;

  // Calculate the vertical position for the logo
  const logoPosition = windowHeight * 0.19; // You can adjust this value

  // Set the new top value for the logo
  logo.style.top = `${logoPosition}px`;
};

// Call the function when the window is resized
window.addEventListener('resize', adjustLogoPosition);

// Call the function once on page load
document.addEventListener('DOMContentLoaded', adjustLogoPosition);




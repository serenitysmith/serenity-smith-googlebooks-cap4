import emailjs from 'emailjs-com'; // Correct import statement

const sendEmail = () => {
  return new Promise((resolve, reject) => {
    emailjs.send('service_k5cgwgr', 'template_56yv0s9', '#myForm')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          resolve(response); // resolve the promise with the response
        },
        (error) => {
          console.log('FAILED...', error);
          reject(error); // reject the promise with the error
        }
      );
  });
};

export default sendEmail; // Exporting the sendEmail function as the default export


const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  console.log(mail, password);

  const formData = {
    email: formElements.email.value,
    password: formElements.password.value,
  };

  if (mail === '' || password === '') {
    return alert(`All fields must be filled`);
  }

  console.log(formData);
  event.currentTarget.reset(formData);
}

document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.querySelector('.btn');

  submitButton.addEventListener('click', function () {
    const selectedRadioButton = document.querySelector(
      'input[type="radio"]:checked'
    );

    if (selectedRadioButton) {
      const selectedNumber = selectedRadioButton.nextElementSibling.textContent;
      console.log('Selektovani broj:', selectedNumber);
    } else {
      console.log('Nijedan radio dugme nije selektovan.');
    }
  });
});

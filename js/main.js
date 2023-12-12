document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.querySelector('.btn');
  const num = document.querySelector('.num');

  const container = document.querySelector('.container');
  const ratingState = document.querySelector('.ratingState');

  submitButton.addEventListener('click', function () {
    const selectedRadioButton = document.querySelector(
      'input[type="radio"]:checked'
    );

    if (selectedRadioButton) {
      const selectedNumber = selectedRadioButton.nextElementSibling.textContent;
      console.log('Selektovani broj:', selectedNumber);
      num.textContent = selectedNumber;
      container.classList.add('hidden');
      ratingState.classList.remove('hidden');
    } else {
      console.log('Nijedan radio dugme nije selektovan.');
    }
  });
});

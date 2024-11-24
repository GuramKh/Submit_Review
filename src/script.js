const numbers = document.querySelectorAll('.number');
const submitButton = document.querySelector('.button');
const container1 = document.querySelector('.container');
const container2 = document.querySelector('.container2');
const ratingDiv = document.querySelector('.rating');

numbers.forEach((number) => {
  number.addEventListener('click', function() {
      if (this.classList.contains('active')) {
          this.classList.remove('active');
          return;
      }
      
      numbers.forEach(number => number.classList.remove('active'));
      this.classList.add('active');
  });
});


submitButton.addEventListener('click', function() {
  const selectedNumber = document.querySelector('.number.active');
   
  if (selectedNumber) {
    ratingDiv.innerHTML = `
            <div>You selected  ${selectedNumber.textContent} out of 5</div>
        `;

    container1.style.display = 'none';
    container2.style.display = 'flex';
  }

});
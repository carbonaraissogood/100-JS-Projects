let totalAmount = 0;

function calculateTotalAmount(billAmount, tipPercentage) {
  return totalAmount = billAmount * (1 + tipPercentage / 100);
}

document.querySelector('.js-calculate-button').addEventListener('click', () => {
  const billAmount = Number(document.querySelector('.js-bill-amount').value);

  const tipPercentage = Number(document.querySelector('.js-tip-percentage').value);

  totalAmount = calculateTotalAmount(billAmount, tipPercentage);

  const totalPaymentContainer = document.querySelector('.js-total-payment');

  totalPaymentContainer.innerHTML += `$${(totalAmount).toFixed(2)}`;

  totalPaymentContainer.classList.add('bold');

});
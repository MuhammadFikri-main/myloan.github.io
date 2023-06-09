// Get form and output elements
const form = document.getElementById('form');

// Function to calculate and display the monthly payment
function calculateMonthlyPayment() {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const loanAmount = parseFloat(document.getElementById('loan').value);
    const interestRate = parseFloat(document.getElementById('interest').value);
    const loanTerm = parseFloat(document.getElementById('years').value);

    // Check for valid input
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        alert('Please enter valid numeric values for all fields.');
        return;
    }

    // Calculate monthly payment
    const monthlyInterestRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numPayments));
    const totalPayment = monthlyPayment * numPayments;
    const totalInterestPayment = totalPayment - loanAmount;

    // Display the result
    document.getElementById("monthly").innerHTML = 'RM ' + monthlyPayment.toFixed(2);
    document.getElementById("total").innerHTML = 'RM ' + totalPayment.toFixed(2);
    document.getElementById("totalInterest").innerHTML = 'RM ' + totalInterestPayment.toFixed(2);

    // Show success message
    alert('Calculation successful!');
}

function calculateMortgage() {
    event.preventDefault();

    // Retrieve input values
    var loanAmount = parseFloat(document.getElementById('loanAmount').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    var loanTerm = parseFloat(document.getElementById('loanTerm').value);
    var downPayment = parseFloat(document.getElementById('downPayment').value);
    var propertyTaxRate = parseFloat(document.getElementById('propertyTaxRate').value) / 100;
    var homeownersInsurance = parseFloat(document.getElementById('homeownersInsurance').value);
    var pmi = parseFloat(document.getElementById('pmi').value);
    var extraPayment = parseFloat(document.getElementById('extraPayment').value);

    //Check for valid input
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) ||
        isNaN(downPayment) || isNaN(propertyTaxRate) || isNaN(homeownersInsurance) ||
        isNaN(pmi) || isNaN(extraPayment)) {
        alert('Please enter valid numeric values for all fields.');
        return;
    }
  
    // Calculate monthly interest rate
    var monthlyInterestRate = interestRate / 12;
  
    // Calculate loan amount after down payment
    var loanAmountAfterDownPayment = loanAmount - downPayment;
  
    // Calculate monthly mortgage payment (including principal and interest)
    var monthlyPayment = (loanAmountAfterDownPayment * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
  
    // Calculate property tax payment per month
    var propertyTaxPayment = (loanAmount * propertyTaxRate) / 12;
  
    // Calculate total monthly payment (including property taxes, homeowners insurance, and PMI)
    var totalMonthlyPayment = monthlyPayment + propertyTaxPayment + homeownersInsurance + pmi + extraPayment;
  
    // Calculate total repayment amount
    var totalRepayment = monthlyPayment * loanTerm;
  
    // Calculate total interest paid
    var totalInterestPaid = totalRepayment - loanAmountAfterDownPayment;
  
    // Display the results
    document.getElementById('monthlyPayment').innerHTML = "RM " + monthlyPayment.toFixed(2);
    document.getElementById('totalRepayment').innerHTML = "RM " + totalRepayment.toFixed(2);
    document.getElementById('totalInterestPaid').innerHTML = "RM " + totalInterestPaid.toFixed(2);
    document.getElementById('loanAmountAfterDownPayment').innerHTML = "RM " + loanAmountAfterDownPayment.toFixed(2);
    document.getElementById('propertyTaxPayment').innerHTML = "RM " + propertyTaxPayment.toFixed(2);
    document.getElementById('totalMonthlyPayment').innerHTML = "RM " + totalMonthlyPayment.toFixed(2);
    
    // Show success message
    alert('Calculation successful!');
  }

// Function to handle the "Clear" button click
function clearForm() {
    // Display a confirmation dialog
    const confirmClear = confirm('Are you sure you want to clear the form?');

    // Clear the form if confirmed
    if (confirmClear) {
        document.getElementById('form').reset();
        document.getElementById("monthlyPayment").innerHTML = '';
        document.getElementById("totalRepayment").innerHTML = '';
        document.getElementById("totalInterestPaid").innerHTML = '';
        document.getElementById("loanAmountAfterDownPayment").innerHTML = '';
        document.getElementById("propertyTaxPayment").innerHTML = '';
        document.getElementById("totalMonthlyPayment").innerHTML = '';
    }
}

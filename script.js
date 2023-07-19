let btn = document.getElementById('btn');
btn.addEventListener('click', ageCalculator);

function ageCalculator() {
    let num01 = parseFloat(document.getElementById('num01').value);
    let num02 = parseFloat(document.getElementById('num02').value);
    let num03 = parseFloat(document.getElementById('num03').value);
    let resultado1 = document.getElementById('resultado1');
    let resultado2 = document.getElementById('resultado2');
    let resultado3 = document.getElementById('resultado3');
    let errorNum01 = document.getElementById('error-num01');
    let errorNum02 = document.getElementById('error-num02');
    let errorNum03 = document.getElementById('error-num03');
  
    verificarNaN(num01, num02, num03);
  
    // verifica se o número é menor ou igual a zero
    if (num01 <= 0) {
      errorNum01.innerHTML = 'This field is required';
      resultado1.innerHTML = '--';
      document.getElementById('num01').classList.add('error');
      errorNum01.classList.add('show-error-message');
    } else {
      errorNum01.innerHTML = '';
      resultado1.innerHTML = '--';
      document.getElementById('num01').classList.remove('error');
      errorNum01.classList.remove('show-error-message');
    }
  
    if (num02 <= 0) {
      errorNum02.innerHTML = 'This field is required';
      resultado2.innerHTML = '--';
      document.getElementById('num02').classList.add('error');
      errorNum02.classList.add('show-error-message');
    } else {
      errorNum02.innerHTML = '';
      resultado2.innerHTML = '--';
      document.getElementById('num02').classList.remove('error');
      errorNum02.classList.remove('show-error-message');
    }
  
    if (num03 <= 0) {
      errorNum03.innerHTML = 'This field is required';
      resultado3.innerHTML = '--';
      document.getElementById('num03').classList.add('error');
      errorNum03.classList.add('show-error-message');
    } else {
      errorNum03.innerHTML = '';
      resultado3.innerHTML = '--';
      document.getElementById('num03').classList.remove('error');
      errorNum03.classList.remove('show-error-message');
    }
  
    const inputDate = new Date(num03, num02 - 1, num01);
    const diff = new Date() - inputDate;
    const age = new Date(diff);
    const totalYears = age.getUTCFullYear() - 1970;
    const totalMonths = age.getUTCMonth();
    const totalDays = age.getUTCDate() - 1;
  
    resultado1.innerHTML = `${totalYears} `;
    resultado2.innerHTML = `${totalMonths}`;
    resultado3.innerHTML = `${totalDays} `;
  }
  
  //  Função para veririficar se tem ou não um número na caixa de número
  
  function verificarNaN(num01,num02,num03) {
  
    if (num01 <= 0) {
      document.getElementById('error-num01').innerHTML = 'This field is required';
      resultado1.innerHTML = `--`;
    } else {
      document.getElementById('error-num01').innerHTML = '';
      resultado1.innerHTML = `--`;
    }
  
    if (num02 <= 0) {
      document.getElementById('error-num02').innerHTML = 'This field is required';
      resultado2.innerHTML = `--`;
    } else {
      document.getElementById('error-num02').innerHTML = '';
      resultado2.innerHTML = `--`;
    }
  
    if (num03 <= 0) {
      document.getElementById('error-num03').innerHTML = 'This field is required';
      resultado3.innerHTML = `--`;
    } else {
      document.getElementById('error-num03').innerHTML = '';
      resultado3.innerHTML = `--`;
    }
  }
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.keys-container')

keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
     console.log('clicker');
   // Do something
 }
})
const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];

const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

function a(element) { 
  return element.animate(aliceTumbling, aliceTiming).finished; 
}

a(alice1)
.then(() => a(alice2)
.then(() => a(alice3)
.catch(error => console.log(`에러발생 ${error}`))));
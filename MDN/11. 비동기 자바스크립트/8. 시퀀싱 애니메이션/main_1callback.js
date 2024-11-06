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

function a(inp, callback){
  inp.animate(aliceTumbling, aliceTiming).onfinish = callback;
}

a(alice1, ()=>{
  a(alice2, () => {
    a(alice3, ()=>{
      console.log("complite");
    })
  })
})
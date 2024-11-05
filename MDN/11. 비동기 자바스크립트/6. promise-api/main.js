// const output = document.querySelector("#output");
// const button = document.querySelector("#set-alarm");

// function setAlarm(){
//     // 1000자리에 문자열을 사용하면 좋지 않음. 반드시 숫자를 사용. 
//     setTimeout(()=>{
//         output.textContent = "Wake up!";
//     }, 1000);
// }

// button.addEventListener("click", setAlarm);

//Promise() executor

const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener("click", () => {
  alarm(name.value, delay.value)
    .then((message) => (output.textContent = message))
    .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`));
});

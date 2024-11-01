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

function alarm(person, delay){
    // Promise에 new를 적어주지 않으면 생성자생성이 불가능해서 reject, resolve 사용 불가
    return new Promise((resolve, reject)=>{
        if (delay < 0){
            throw new Error("알람 시간은 음수가 불가");
        }
        setTimeout(()=>{
            resolve(`wake up, ${person}!`);
        }, delay);
    });
}

button.addEventListener("click", () => {
    alarm(name.value, delay.value)
    .then((message)=>{
        output.textContent = message})
    .catch((error)=>{output.textContent = `알람 세팅 불가 : ${error}`});
});
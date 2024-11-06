

//generate 를 사용해서 새로운 worker를 생성함
const worker = new Worker("./generate.js");

document.querySelector("#generate").addEventListener("click", ()=>{
    const quota = document.querySelector("#quota").value;
    //버튼이 눌리면 메시지를 전달하고, quota도 전달함.
    worker.postMessage({
        command : "generate",
        quota
    });
});

worker.addEventListener("message", (message) => {
    //innerText를 사용할 수 있지만 textContent가 더 빠름.
    //다만 스타일 적용후에 보이는 텍스트를 반환해서 사용자 상호작용 반영
    document.querySelector("#output").textContent =
    `Finished generating ${message.data} primes!`;
});

document.querySelector("#reload").addEventListener("click", () =>{
    document.querySelector("#user-input").value = 
    'Generate 프라임을 누른 후 바로 이곳을 눌러보시요:)';
    // 새로고침과 같은 효과를 가지고 사용할 수 있음.
    // 추가로 true 값을 전달하면 캐시 무시하고 서버에서 새 데이터를 가져오도록 설정 가능
    document.location.reload();
})
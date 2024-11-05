// 동기식 프로그램
// const name = "hello";
// const pe = `hello my name ${hello}`;
// console.log(pe);

// async는 항상 promise를 반환함. 비동기 코드를 동기 코드처럼 보이도록 만들어줌.

const log = document.querySelector(".event-log");
document.querySelector("#xhr").addEventListener("click", () =>{
    log.textContext = "";

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("loadend", () =>{
        log.textContent = `${log.textContent}Finished with status:
        ${xhr.status}`;
    })

    xhr.open("GET","https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",true);
    xhr.send();
    log.textContent = `${log.textContent}Started XHR request\n`;
})

document.querySelector("#reload").addEventListener("click", () => {
    log.textContent = "";
    document.location.reload();
  });
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log(fetchPromise);

fetchPromise.then((response)=>{
    console.log(`응답 수신 : ${response.status}`);
});

console.log("요청 시작");
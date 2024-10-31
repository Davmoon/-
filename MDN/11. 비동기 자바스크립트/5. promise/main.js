async function fetchProducts(){
    try{
        // await는 acync 안에만 사용할 수 있음!!
        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
        );

        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data[0].name);
    }catch{
        console.error(`json 값 가져오기 불가 ${error}`);
    }
}

fetchProducts();

//이렇게도 가능. 오류잡는 것은 promise의 마지막 체인임.
// async function fetchProducts() {
//     const response = await fetch(
//       "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   }
  
//   const promise = fetchProducts();
//   promise
//     .then((data) => {
//       console.log(data[0].name);
//     })
//     .catch((error) => {
//       console.error(`Could not get products: ${error}`);
//     });
  

//불가능
// async function fetchProducts() {
//     try {
//       const response = await fetch(
//         "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//       );
//       if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`);
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error(`Could not get products: ${error}`);
//     }
//   }
  
//   const promise = fetchProducts();
//   console.log(promise[0].name); // "promise" 는 Promise Object이므로 작동 안함.
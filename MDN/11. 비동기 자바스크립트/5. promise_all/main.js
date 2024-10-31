const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );
  
  // 모든 배열이 참일경우 가능
  Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses) => {
      for (const response of responses) {
        console.log(`${response.url}: ${response.status}`);
      }
    })
    .catch((error) => {
      console.error(`Failed to fetch: ${error}`);
    });
  

    // any는 이렇게 씀 하나라도 되거나, 다 안되거나
    // const fetchPromise1 = fetch(
    //     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    //   );
    //   const fetchPromise2 = fetch(
    //     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
    //   );
    //   const fetchPromise3 = fetch(
    //     "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
    //   );
      
    //   Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
    //     .then((response) => {
    //       console.log(`${response.url}: ${response.status}`);
    //     })
    //     .catch((error) => {
    //       console.error(`Failed to fetch: ${error}`);
    //     });
      
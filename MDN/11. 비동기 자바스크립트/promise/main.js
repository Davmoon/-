const hello = document.querySelector(".hello");

const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  alert(fetchPromise);
  
  fetchPromise.then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((data)=>{
        hello.textContent = data[0].name;
    })
  });
  
  console.log("Started request…");
  

  
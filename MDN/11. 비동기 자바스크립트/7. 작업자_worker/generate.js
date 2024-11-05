addEventListener("message", (message) => {
    if (message.data.command === "generate"){
        generatePrimes(message.data.quata);
    }
});

function generatePrimes(quota){
    function isPrime(n){
        for (let a = 2; a <= sqrt(n); ++a){
            if (n % a === 0){
                return false;
            }
        }
        return true;
    }

    const primes = [];
    const maximum = 1000000;

    while(primes.length < quota){
        const candidate = Math.floor(Math.random() * (maximum + 1));
        if (isPrime(candidate)){
            primes.push(candidate);
        }
    }
    //작업이 완료되면 메세지를 메인 스레드로 보냄.
    postMessage(primes.length);
}
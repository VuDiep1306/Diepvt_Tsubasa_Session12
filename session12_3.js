let count = 0;
for (let num = 2; count < 20; num++) {
    let isPrime = true;
    let i = 2;

    while (i <= Math.sqrt(num)) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
        i++;
    }

    if (isPrime) {
        console.log(num + " ");
        count++;
    }
}
//1. Đếm từ 1 đến 100
for (let i = 1; i <= 100; i++) {
    console.log(i);

    if (i === 99) {
        alert("Đã hoàn thành!");
    }
}

//2. Nhập nhiệt độ từ người dùng
let nhietDo = Number(prompt("Nhập nhiệt độ hiện tại (°C):"));
if (nhietDo > 100) {
    alert("Nhiệt độ quá cao! Vui lòng giảm nhiệt độ.");
} else if (nhietDo < 20) {
    alert("Nhiệt độ quá thấp! Vui lòng tăng nhiệt độ.");
} else {
    alert("Nhiệt độ bình thường.");
}

//3. Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
let n1 = 0, n2 = 1, n3;

console.log("20 số đầu tiên trong dãy Fibonacci:");

for (let i = 1; i <= 20; i++) {
  console.log(n1);
  n3 = n1 + n2;
  n1 = n2;
  n2 = n3;
}

//4. Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.

// function findNumer() {
//     let a = 0, b = 1;
//     while (true) {
//         let fib = a + b;
//         if (fib % 5 === 0) {
//             console.log ("Số đầu tiên trong dãy Fibonacci chia hết cho 5 là: " + fib);
//             break;
//         }
//         a = b;
//         b = fib;
//     }
// }
// findNumer();

let m1 = 0, m2 = 1, m3;

for (let j = 1; j <= 20; j++) {
  if (m1 % 5 === 0 && m1 !==0 ) {
    console.log("Số đầu tiên trong dãy Fibonacci chia hết cho 5 là: " + m1);
    break;
  } else {
  m3 = m1 + m2;
  m1 = m2;
  m2 = m3;
  }
}

//5. Tính tổng của 20 số đầu tiên trong dãy fibonacci.
let s1 = 0, s2 = 1, s3;
let sum = 0;

for (let l = 1; l <= 20; l++) {
  sum = sum + s1; 
  s3 = s1 + s2;
  s1 = s2;
  s2 = s3;
}

console.log("Tổng 20 số Fibonacci đầu tiên là: " + sum);

//6. Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
let count = 0;
let sum6 = 0;
let num = 1;
while (count < 30) {
    if (num % 7 ===0) {
        console.log(num);
        sum6 = sum6 + num;
        count++;
    }
    num++;
}
console.log("Tổng của 30 số chia hết cho 7 đầu tiên là:", sum6);

//7. Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ “FizzBuzz”
for (let z = 1; z <= 100; z++) {
    if (z % 3 ===0 && z % 5 ===0) {
        console.log("FizzBuzz");
    } else if (z % 3 === 0) {
        console.log("Fizz");
    } else if (z % 5 ===0) {
        console.log("Buzz");
    } else {
        console.log(z);
    }
}
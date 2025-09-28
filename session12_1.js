let choice = prompt(
    "Chọn bài tập:\n" +
    "1. Kiểm tra chia hết\n" +
    "2. Kiểm tra tuổi vào lớp 10\n" +
    "3. So sánh số nguyên với 0\n" +
    "4. Tìm số lớn nhất trong 3 số\n" +
    "5. Xếp hạng học lực"
);
switch (choice) {

    case "1":
        let a = Number(prompt("Nhập số a:"));
        let b = Number(prompt("Nhập số b:"));
        if (b === 0) {
            console.log("Không thể chia cho 0!");
        } else if (a%b===0) {
            console.log(a +" chia hết cho " + b);
        }else {
            console.log(a + " không chia hết cho " + b);
        }
        break;

    case "2":
        let age = Number(prompt("Nhập tuổi:"));
        if (age>=15) {
            console.log("Đủ điều kiện vào lớp 10");
        } else {
            console.log("Không đủ điều kiện vào lớp 10");
        }
        break;

    case "3":
        let num = Number(prompt("Nhập một số nguyên:"));
        if (num > 0) {
            console.log(num + " lớn hơn 0");
        } else if (num<0) {
            console.log(num + " nhỏ hơn 0");
        } else {
            console.log("Số vừa nhập là 0");
        }
        break;

    case "4":
        let x = Number(prompt("Nhập số thứ nhất:"));
        let y = Number(prompt("Nhập số thứ hai:"));
        let z = Number(prompt("Nhập số thứ ba:"));
        let max = x;
        if (y>max) max = y;
        if (z>max) max = z;
        console.log("Số lớn nhất là: " + max);
        break;

    case "5":
        let test = Number(prompt("Nhập điểm kiểm tra:"));
        let mid = Number(prompt("Nhập điểm giữa kỳ:"));
        let final = Number(prompt("Nhập điểm cuối kỳ:"));
        let avg = (test + mid + final)/3;
        let rank ="";
        if (avg>=9) rank = "Xuất sắc";
        else if (avg>=8) rank = "Giỏi";
        else if (avg>=6.5) rank = "khá";
        else if (avg>=5) rank = "Trung bình";
        else rank = "Yếu";
        console.log("Điểm trung bình là: " + avg.toFixed(2) + ". Xếp loại " + rank);
        break;
    default:
        console.log("Lựa chọn không hợp lệ!");
}

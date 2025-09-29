let choice = Number(prompt(
    "Chọn chức năng:\n" +
    "1. Chuyển độ C sang độ F\n" +
    "2. Chuyển mét sang feet\n" +
    "3. Tính diện tích hình vuông\n" +
    "4. Tính diện tích hình chữ nhật\n" +
    "5. Tính diện tích tam giác vuông\n" +
    "6. Giải phương trình bậc 1\n" +
    "7. Giải phương trình bậc 2\n" +
    "8. Kiểm tra tuổi hợp lệ\n"
));
switch(choice) {
    case 1:
        let c = Number(prompt("Hãy nhập nhiệt độ C: "));
        let f = c * 9/5 + 32;
        console.log(`${c}°C = ${f}°F`);
        break;
    
    case 2:
        let m = Number(prompt("Hãy nhập số mét: "));
        let ft = m * 3.2808;
        console.log(`${m} mét = ${ft} feet`);
        break;

    case 3:
        let a = Number(prompt("Hãy nhập cạnh a: "));
        console.log(`Diện tích hình vuông là: ${a*a}`);
        break;

    case 4:
        let a4 = Number(prompt("Hãy nhập chiều dài:"));
        let b4 = Number(prompt("Hãy nhập chiều rộng b:"));
        console.log(`Diện tích hình chữ nhật là: ${a4*b4}`);
        break;

    case 5:
        let a5 = Number(prompt("Nhập cạnh a:"));
        let b5 = Number(prompt("Nhập cạnh b:"));
        console.log(`Diện tích tam giác vuông là: ${(a5 * b5) / 2}`);
        break;

    case 6:
        let a6 = Number(prompt("Nhập a:"));
        let b6 = Number(prompt("Nhập b:"));
        if (a6 === 0) {
            if (b6 ===0) console.log("Phương trình có vô số nghiệm");
            else console.log("Phương trình vô nghiệm");
        } else {
            console.log(`Nghiệm của phương trình là x = ${-b6 / a6}`);
        }
        break;
    
    case 7:
        let a7 = parseFloat(prompt("Nhập a:"));
        let b7 = parseFloat(prompt("Nhập b:"));
        let c7 = parseFloat(prompt("Nhập c:"));
        if (a7 === 0) {
            if (b7 === 0) {
                if (c7 === 0) console.log("Phương trình có vô số nghiệm");
                else console.log("Phương trình vô nghiệm");
            }else {
                console.log(`Nghiệm của phương trình là x = ${-c7 / b7}`);
            }
        } else {
            let delta = b7 * b7 - 4 * a7 * c7;
            if (delta < 0) {
                console.log("Phương trình vô nghiệm");
            } else if (delta === 0) {
                console.log(`Nghiệm kép x = ${-b7 / (2 * a7)}`);
            } else {
                let x1 = (-b7 + Math.sqrt(delta)) / (2 * a7);
                let x2 = (-b7 - Math.sqrt(delta)) / (2 * a7);
                console.log(`Phương trình có 2 nghiệm: x1 = ${x1}, x2 = ${x2}`);
            }
        }
        break;

    case 8:
        let age = Number(prompt("Nhập tuổi:"));
        if (age > 0 && age < 120) {
            console.log(`${age} là tuổi hợp lệ`);
        } else {
            console.log(`${age} không phải là tuổi hợp lệ`);
        }
        break;

  default:
    alert("Lựa chọn không hợp lệ!");

}
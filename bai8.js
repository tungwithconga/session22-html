
function tinhKetQua(soThuNhat, soThuHai, phepTinh) {
    switch (phepTinh) {
        case '+':
            return soThuNhat + soThuHai;
        case '-':
            return soThuNhat - soThuHai;
        case '*':
            return soThuNhat * soThuHai;
        case '/':
            return soThuNhat / soThuHai;
        default:
            return null;
    }
}


const soThuNhat = parseFloat(prompt('Nhập số thứ nhất:'));


if (!isValidNumber(soThuNhat)) {
    console.log('Số thứ nhất không hợp lệ');
} else {

    const soThuHai = parseFloat(prompt('Nhập số thứ hai:'));


    if (!isValidNumber(soThuHai)) {
        console.log('Số thứ hai không hợp lệ');
    } else {
        const phepTinh = prompt('Nhập phép tính (+, -, *, /):');


        const ketQua = tinhKetQua(soThuNhat, soThuHai, phepTinh);
        if (ketQua === null) {
            console.log('Phép tính không hợp lệ');
        } else {
            console.log(`Kết quả: ${ketQua}`);
        }
    }
}

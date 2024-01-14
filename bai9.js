function isValidDate(month, year) {
    return Number.isInteger(month) && month >= 1 && month <= 12 && Number.isInteger(year) && year >= 0;
}

function soNgayTrongThang(month, year) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? 29 : 28;
        default:
            return -1; 
    }
}

const thang = parseInt(prompt('Nhập tháng (1-12):'));

const nam = parseInt(prompt('Nhập năm:'));

if (isValidDate(thang, nam)) {
    const soNgay = soNgayTrongThang(thang, nam);
    if (soNgay === -1) {
        console.log('Tháng không hợp lệ.');
    } else {
        console.log(`Tháng ${thang} năm ${nam} có ${soNgay} ngày.`);
    }
} else {
    console.log('Ngày tháng không hợp lệ.');
}

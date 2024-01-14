let so = prompt("Nhập một số có 4 chữ số:");

if (so >= 1000 && so <= 9999) {
    let hangNghin = Math.floor(so / 1000);
    let hangChuc = Math.floor((so % 1000) / 100);
    let hangTram = Math.floor((so % 100) / 10);
    let hangDonVi = so % 10;

    console.log("Chữ số hàng nghìn: " + hangNghin);
    console.log("Chữ số hàng trăm: " + hangChuc);
    console.log("Chữ số hàng chục: " + hangTram);
    console.log("Chữ số hàng đơn vị: " + hangDonVi);
} else {
    console.log("Vui lòng nhập một số có 4 chữ số.");
}

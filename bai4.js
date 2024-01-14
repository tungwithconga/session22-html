let nam = prompt("Nhập một năm:");

if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
    console.log(nam + " là năm nhuận.");
} else {
    console.log(nam + " không phải là năm nhuận.");
}
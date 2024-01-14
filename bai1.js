let a =prompt("Hay nhap vao so a:");
let b =prompt("Hay nhap vao so b:");
let thuong1 = a/b;
let thuong2 =b/a;
if(a%b==0){
console.log(thuong1);
}else if(b%a==0){
     console.log(thuong2);
}else{
    alert("So khong chia het cho nhau")
}
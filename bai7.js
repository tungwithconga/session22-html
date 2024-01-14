function giaiPhuongTrinhBacNhat(a, b, c) {
    const delta = b**2 - 4*a*c;

    if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2*a);
        const x2 = (-b - Math.sqrt(delta)) / (2*a);
        return `Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
    } else if (delta === 0) {
        const x = -b / (2*a);
        return `Phương trình có nghiệm kép: x = ${x}`;
    } else {
        return 'Phương trình không có nghiệm thực';
    }

}
const a = (prompt('Nhập giá trị của a:'));
const b = (prompt('Nhập giá trị của b:'));
const c = (prompt('Nhập giá trị của c:'));

console.log(giaiPhuongTrinhBacNhat(a, b, c));

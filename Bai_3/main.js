// Mảng
// CÚ PHÁP: let tênMảng = [phần tử 1, phần tử 2, ...];

// Vị trí bắt đầu trong mảng là: vị trí số 0
// Sử dụng .length để lấy ra mảng có bao nhiêu phần tử (đếm phần tử trong mảng)

let mangSo = [1, 2, 5.6, 7.8, 10];

console.log(mangSo.length); // Mong muốn kết quả là 5

// for (let i = 0; i < mangSo.length; i++) {
//   console.log("Vị trí phần tử trong mảng: " + i);
//   console.log("Các phần tử trong mảng: " + mangSo[i]);
// }

// Vòng lặp for .. of
// CÚ PHÁP: for(tên biến đại diện cho phần tử của mảng of tên mảng) {code xử lí logic ...}
for (let cacSo of mangSo) {
  console.log(cacSo);
}

// Các phương thức trong mảng
// 1. Phương thức thêm phần tử vào cuối mảng: .push()
let danhSachHoaQua = ["Táo", "Lê", "Cam", "Quýt"];
console.log(danhSachHoaQua);
// Sử dụng .push để thêm phần tử sau "Quýt" (thêm phần tử vào cuối mảng)
danhSachHoaQua.push("Bưởi");
console.log(danhSachHoaQua);

// Bài tập 1:
// Khai báo 1 mảng gồm tên con các vật, ít nhất 3 con vật
// Yêu cầu thêm con mèo vào cuối mảng
let dsDV = ["Gà", "Vịt", "Ngỗng"];
// Sử dụng phương thức .push để thêm phần tử vào cuối mảng
dsDV.push("Mèo");
console.log(dsDV);

// 2. Phương thức tìm vị trị phần tử trong mảng: indexOf()
// CÚ PHÁP: let tênBiến = tênMảng.indexOf()
// Nếu tìm thấy: thì hiển thị vị trí của phần tử đó (số nguyên)
// Nêu không tìm thấy: thì hiển thị -1
let viTriPhanTu = danhSachHoaQua.indexOf("Lê");
console.log(viTriPhanTu); // => KQ mong muốn: 1 => Vị trí của phần tử

// Đi tìm phần tử con chó trong mảng dsDV
let viTriConCho = dsDV.indexOf("Chó"); // -1
console.log(viTriConCho);

if (viTriConCho > -1) {
  console.log("Tìm thấy");
} else {
  console.log("Không tìm thấy");
}

// 3. Phương thức thêm / xoá .splice
let tinhThanhPho = ["Hải Phòng", "Hưng Yên", "Hà Nội", "Thái Nguyên"];

// Thêm phần tử vào vị trí bất kì trong mảng
tinhThanhPho.splice(0, 0, "Nam Định");
// Số 0 đầu tiên là thêm phần tử vào vị trí
// Số 0 thứ 2 là không xoá đi phần tử nào
// "Nam Định" là phần tử sẽ thêm vào

// Xoá phần tử
tinhThanhPho.splice(0, 1);
// Số 0 đầu tiên là vị trị bắt đầu xoá
// Số 1 sẽ là số lượng phần tử sẽ xoá
console.log(tinhThanhPho);

// Bài tập 2:
// Khai báo mảng gồm tên các đồ vật sau
let dsDoVat = ["Cốc", "Bát", "Đũa", "Thìa"];
console.log("Mảng ban đầu: " + dsDoVat);
// Sử dụng phương thức phù hợp để làm bài
// 1. Thêm phần từ Nồi vào cuối mảng
console.log("Đáp án câu 1: " + dsDoVat);
// Mong muốn let dsDoVat = ["Cốc", "Bát", "Chảo", "Đũa", "Nồi"];
// 2. Thêm phần tử Chảo vào sau phần tử Bát
console.log("Đáp án câu 2: " + dsDoVat);
// Mong muốn ["Cốc", "Bát", "Chảo", "Đũa", "Thìa", "Nồi"];
// 3. Xoá tất cả phần tử sau phần tử Đũa
console.log("Đáp án câu 3: " + dsDoVat);
// Mong muốn let dsDoVat = ["Cốc", "Bát", "Chảo", "Đũa"];

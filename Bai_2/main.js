// Khai báo biến hoTen và biến tuoi
// Sau đó dùng console.log hiển thị giá trị của 2 biến

// CÚ PHÁP: let tênBiến = giá trị của biến
let hoTen = "Tuấn Anh";
let tuoi = 28;

console.log(hoTen);
console.log(tuoi);

let so1 = 1;
let so2 = "tuan anh"; // => kiểu chuỗi
console.log(so1 - so2);
// Lần chạy 1: => 3
// Lần chạy 2: => 1tuan anh

// LƯU Ý: Phép cộng nếu không thực hiện được thì
// sẽ thành nối chuỗi

// Mảng: Array và dùng dấu ngoặc []
// - Dùng để chưa được nhiều dữ liệu trong 1 biến
// - Các biến này có thể là nhiều kiểu dữ liệu khác nhau

// CÚ PHÁP: let tênBiến = [giá trị1, giá trị 2, ...]

// Ví dụ: Khai báo mảng chứa tên các tỉnh thành ở VN
let dsTinhThanh = ["Hà Nội", "Hải Phòng", "Hưng Yên"];
// Hà Nội, Hải Phòng, ... => gọi là phần tử của mảng

// Ví dụ 2: Khai báo mảng chứa các số nguyên từ 1 tới 9
// Mảng có ít nhất 4 phần tử
let dsSoNguyen = [3, 4, 5, 6];
// Lưu ý: Phần tử trong mảng bắt đầu từ vị trí 0

// Hiển thị phần tử ở vị trí số 2 của mảng dsSoNguyen
console.log(dsSoNguyen[2]); // => 5

// Ví dụ 3: Khai báo mảng chứ các thông tin tuổi và tên
// của sinh viên
let dsSinhVien = ["Tuân Anh", 28, "Khánh Lâm", 27];

console.log(dsSinhVien);

// Vòng lặp
// Vòng lặp for
// CÚ PHÁP
// for(giá trị bắt đầu; điều kiện; bước nhảy) {
// logic vòng lặp...
//}

// Ví dụ 1: Tạo vòng lặp đếm từ 1 tới 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// // Ví dụ 2: Tạo vào lặp đếm từ 5 về 0
// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }

// Ứng dụng vòng lặp vào trong mảng để hiện thị
// tất cả các phần tử của mảng
let dsSo = [1, 2, 3, 4, 5, 6, 7];
// - Mảng có 5 phần tử
// - Vị trí bắt đầu 0
// - Vị trí kết thúc 4

// Sử dụng .length để lấy ra độ dài của mảng (lấy ra
// xem mảng có bao nhiêu phần tử)

for (let i = 0; i < dsSo.length; i++) {
  console.log(dsSo[i]);
}

// Bài tập:
// Thực hiện khai báo mảng gồm 5 món đồ ăn đặc sản
// của Hải phòng

// Sau đó thực hiện dùng for để nối thêm chuỗi
// "ngon quá" và hiển thị tất cả phần tử

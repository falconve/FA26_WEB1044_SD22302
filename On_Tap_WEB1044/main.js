// 1. Khai báo biến
// CÚ PHÁP: let tênBiến

// 1.1 Gán giá trị cho biến
// tênBiến = giá trị của biến

// 2. Giá trị của biến => kiểu dữ liệu
// 1. Số: Số nguyên và số thập phân
// VD:
let soNguyen = 1;
let soThapPhan = 1.5;

// 2. Chuỗi
let hoTen = `Tuấn Anh`;
let tenLop = `SD22302`;

// 3. Mảng: dùng để chứa nhiều kiểu dữ liệu trong 1 biến
let dsHoaQua = [`Táo`, `Cam`, `Quýt`, 1, 2, 3, 1.5, [9, 10]];
console.log(`Số phần tử trong mảng là:  ${dsHoaQua.length}`);

// LƯU Ý:
// - Sử dụng .length để lấy số lượng phần tử trong mảng
// - Sử dụng ``: template string

// 4. Đối tượng: Object dùng để mô tả chi tiết về 1 đối tượng
let thongTinLaptop = [`4GB`, `256GB`];
let thongTinLaptopMoi = {
  ram: `4GB`,
  boNho: `256GB`,
};
// 5. Hàm: Dùng để tái sử dụng 1 đoạn code nhiều lần
let tinhTong = (soThu1, soThu2) => {
  let tong = soThu1 + soThu2;
  return tong;
  //console.log(`Kết quả tổng là: ${tong}`);
};

// Chạy hàm hoặc sử dụng hàm tinhTong()
console.log(tinhTong(1, 2));

// Phương thức của mảng
// 1. indexOf
// 2. push
// 3. splice

let dsSinhVien = [`Tuấn Anh`, `Khánh Lâm`, `Hoàng Thắng`];

// Sử dụng phương thức indexOf để tìm vị trí của 1 phần tử
let viTriPhanTu = dsSinhVien.indexOf(`Huy Dũng`);
console.log(viTriPhanTu);
// Nếu tìm được => kết quả vị trí của phần tử
// Nếu không tìm được => -1

// Sử dụng phương thức push để thêm phần tử vào cuối mảng
dsSinhVien.push(`Xuân Huy`);

console.log(dsSinhVien);

// Sử dụng phương thức splice:
// + Thêm phần tử vào vị trí bất kì trong mảng
// + Xoá phần tử ở vị trí truyền vào phương thức

dsSinhVien.splice(2, 1); // Xoá phần tử ở vị trí truyền vào
// 2 => là vị trí cần xoá
// 1 => số lượng phần tử muốn xoá

console.log(dsSinhVien);

dsSinhVien.splice(1, 0, `Bình`);

console.log(dsSinhVien);

// Vòng lặp
// for
// for (let i = 0; i < dsSinhVien.length; i++) {
//   console.log(dsSinhVien[i]);
// }
// for .. of
for (let sinhVien of dsSinhVien) {
  console.log(sinhVien);
}

// DOM: Cầu nối giữa JS và HTML/CSS

// Khi làm việc với DOM, thì nên đặt class hoặc id cho thẻ HTML

// Sử dụng .querySelector và .querySelectorAll để thực hiện
// chọn các thẻ HTML

let tieuDe = document.querySelector(`.tieu-de`);
//console.log(tieuDe);

if (tieuDe) {
  // lấy nội dung của 1 thẻ HTML .textContent
  let noiDungTieuDe = tieuDe.textContent;
  console.log(noiDungTieuDe);
  // Thay nội dung mới cho thẻ h1
  tieuDe.textContent = `Nội dung mới cho thẻ h1`;

  // CSS màu chữ, cỡ chữ
  tieuDe.style.color = `red`;
  tieuDe.style.fontSize = `60px`;
}

// Lưu ý: Lấy nội dung và nội dung mới cho tất cả các thẻ ngoại trừ input
// => .textContent

// Thẻ input => .value

// Tạo thẻ HTML: document.createElement
let theH2 = document.createElement(`h2`);

theH2.textContent = `Tutoring hay quá`;

// Đưa thẻ h2 vừa tạo vào trong thẻ body
document.body.appendChild(theH2);

// Tạo thẻ p và đưa vào div hien-thi
let hienThi = document.querySelector(`.hien-thi`);

if (hienThi) {
  let theP = document.createElement(`p`);

  theP.textContent = `Nội dung thẻ p `;

  //đưa vào div hien-thi
  hienThi.appendChild(theP);
}

// thêm hoặc xoá 1 class
// VD: thêm class duong-vien vào div hien-thi
hienThi.classList.add(`duong-vien`);

// Xoá class
tieuDe.classList.remove(`duong-vien`);

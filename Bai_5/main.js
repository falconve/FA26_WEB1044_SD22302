// Hàm (function): dùng để tái sử dụng lại 1 đoạn code nhiều lần

// CÚ PHÁP: let tênHàm = () => {}

// HÀM CÓ 3 LOẠI:
// - LOẠI 1: hàm không có tham số và không có trả về
// VÍ DỤ 1: Tính tổng 2 số a và b và hiển thị kết quả
// ở console.log

// Khai báo hàm tính tổng (tạo hàm)
let tinhTong = () => {
  // Khai báo 2 biến a và b để lưu dữ liệu
  let a = 2;
  let b = 5;

  // Khai báo biến tổng để lưu lại kết quả
  let tong = a + b;
  console.log(`Kết quả tổng 2 số là: ${tong} `);
};

// Chạy hàm (sử dụng hàm)
tinhTong();

// - LOẠI 2: hàm có tham số và đối số và có trả về
// a và b khi khai báo cùng với
// hàm được gọi là đối số
let tinhHieu = (a, b) => {
  let hieu = a - b;
  //console.log(`Kết quả hiệu 2 số là: ${hieu}`);

  // return là trả về
  // Để lấy kết quả của hàm sử dụng tiếp vào logic khác
  return hieu;
};

// Gọi hàm tinhHieu() và truyền vào hàm
// 2 tham số 7 và 6
let kqHieu = tinhHieu(7, 6);

// Ví dụ 3: Sử dụng lại kết quả của hàm tinhHieu
// để nhân đôi
let nhanDoi = kqHieu * 2;
console.log(nhanDoi);

// Bài tập 1: Hàm có tham số và đối số không có trả về
// Xây dựng hàm tính chu vi và diện tích hình chữ nhật
// Hiển thị kết quả ở console.log

// MONG MUỐN: hcn(6, 7);

// Bài tập 2: Hàm có tham số / đối số và có trả về
// Xây dựng hàm thêm phần tử vào mảng
// let themPhanTuMang = () => {
//  let mangDoVat = [`Tivi`, `PC`]
//
//}

// MONG MUỐN: themPhanTuMang(`Laptop`);

// Bài tập 3:
// Xây dựng hàm kiểm tra và xoá phần tử trong mảng
// let xoaPhanTuMang = () => {
// let tinhThanhPho = [`Hải Phòng`, `Hà Nội`, `TP. HCM`];
//  Kiểm tra phần tử có trong mảng không?
//  Nếu không có thì hiển thị console.log là không tìm thấy
//  Nếu có tìm thấy phần tử sử dụng phương thức phù hợp để xoá phần tử đó đi
//}

// Ví dụ khai báo 1 mảng lưu thông tin của 1 chiếc pc
// - Ram
// - Main
// - Chip
// - ổ cứng

let thongTinCauHinhPC = [`128 GB`, `B760M`, `Core Ultra 7`, `256 GB`];

// Object (Đối tượng): Dùng để mô tả chi tiết về đối tượng đó
// Object: {}
let thongTinChiTietPC = {
  ram: `128 GB`,
  main: `B760M`,
  chip: `Core Ultra 7`,
  ssd: `256 GB`,
};

// Khai báo object: let tênObject = {
//    key: value,
//    key1: value1,
//    key2: value2,
//    ...
//}

// Bài tập 1: Khai báo 1 object
// mô tả thông tin sinh viên gồm: msv, họ tên, lớp, chuyên ngành học
// hiển thị ra console

let thongTinSV = {
  msv: "TP00001",
  hoTen: "Tuấn Anh",
  lop: "SD22302",
  cnHoc: "PTPM",
};
console.log(thongTinSV);
console.log(`Thông tin sinh viên: ${thongTinSV} của trường cao đẳng FPL`);

// Hiển thị giá trị của 1 key trong object
// CÚ PHÁP: tênObject.tênKey
console.log(`Tên sinh viên là: ${thongTinSV.hoTen}`);

// Gán lại giá trị cho 1 key trong object
thongTinSV.hoTen = `Đức Anh`;

console.log(`Tên sinh viên là: ${thongTinSV.hoTen}`);

// Tạo mới 1 key trong object
// thêm 1 thông tin là tuổi của sinh viên
thongTinSV.tuoi = 20;
thongTinSV.diaChi = `Hải Phòng`;

console.log(thongTinSV);

//console.log("Thông tin sinh viên: " + thongTinSV); // Thông tin sinh viên:

let dsSV = [
  {
    msv: "TP00001",
    hoTen: "Đức Anh",
    lop: "SD22302",
    cnHoc: "PTPM",
  },
  {
    msv: "TP00002",
    hoTen: "Lâm Huy",
    lop: "SD22302",
    cnHoc: "PTPM",
  },
];

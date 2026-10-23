// Câu 1:
// Các ô nhập
let studentName = document.querySelector(`#studentName`);
let studentClass = document.querySelector(`#studentClass`);

// Các nút ấn
let btnUpdate = document.querySelector(`#btnUpdate`);
let btnAdd = document.querySelector(`#btnAdd`);
let btnHighlight = document.querySelector(`#btnHighlight`);
let btnNormal = document.querySelector(`#btnNormal`);

// thẻ sinh viên xem trước
let previewCard = document.querySelector(`#previewCard`);
let previewName = document.querySelector(`#previewName`);
let previewClass = document.querySelector(`#previewClass`);
let previewStatus = document.querySelector(`#previewStatus`);

// Danh sách sinh viên khi bấm nút thêm
let studentList = document.querySelector(`#studentList`);
// bộ đếm
let studentCount = document.querySelector(`#studentCount`);
let emptyState = document.querySelector(`#emptyState`);

// Khu vực thông báo
let notification = document.querySelector(`#notification`);

// Câu 2: Thêm sinh viên
let demSv = 0;

let themSinhVien = () => {
  if (studentName && studentClass) {
    // Lấy thông tin người dùng nhập vào ô input
    let tenSV = studentName.value;
    let lopSV = studentClass.value;

    // Tạo mới 1 thẻ div
    let div = document.createElement(`div`);

    // Tạo mới các thẻ p
    let thongTinTenSV = document.createElement(`p`);
    let thongTinLopSV = document.createElement(`p`);

    // Gán nội dung lấy được từ input cho thẻ p
    thongTinTenSV.textContent = `Tên SV: ${tenSV}`;
    thongTinLopSV.textContent = `Tên SV: ${lopSV}`;

    // thêm các thẻ p vừa tạo vào bên trong thẻ div
    div.appendChild(thongTinTenSV);
    div.appendChild(thongTinLopSV);

    emptyState.style.display = `none`;

    // Thêm thẻ div vào bên trong
    studentList.appendChild(div);

    // Cập nhật lại tên sinh viên & lớp ở thẻ sinh viên
    previewName.textContent = tenSV;
    previewClass.textContent = lopSV;

    // Cập nhật số lượng SV
    demSv = demSv + 1;
    studentCount.textContent = `${demSv} sinh viên`;
  }
};

// Câu 4
let noiBat = () => {
  if (previewCard && notification) {
    // dùng classList.add để thêm class is-highlighted cho thẻ sinh viên
    previewCard.classList.add(`is-highlighted`);

    // Đổi chữ Bình thường => Đang nổi bật
    previewStatus.textContent = "Nổi bật";
  }
};

// Câu 5:
let boNoiBat = () => {
  if (previewCard && notification) {
    // dùng classList.add để thêm class is-highlighted cho thẻ sinh viên
    previewCard.classList.remove(`is-highlighted`);

    // Đổi chữ Bình thường => Đang nổi bật
    previewStatus.textContent = "Bình thường";
  }
};

// Câu 6
let diChuotNutCapNhat = () => {
  notification.textContent = `Nhấn vào đây để cập nhật thông tin sinh viên.`;
};

// Câu 7
let diChuotTheSV = () => {
  notification.textContent = `Bạn đang xem thẻ thông tin sinh viên.”`;
};

// Sự kiện (Event)
// - Là những thao tác mà người dùng tác động lên các thẻ HTML
// - Tác động bằng cách di chuột, ấn chuột lên các thẻ HTML
// 1. Sự kiện ấn chuột vào thẻ: onclick*
// 2. Sự kiện di chuột vào thẻ: onmouseover
// 3. Sự kiện di chuột từ thẻ HTML ra bên ngoài: onmouseout

// Khai báo hàm doiMauChu
let doiMauChu = () => {
  // Thực hiện dùng JS để CSS cho 1 thẻ HTML

  // Chọn vào thẻ HTML
  let tieuDe = document.querySelector(`.tieu-de`);

  // Kiểm tra xem thẻ HTML có không?
  if (tieuDe) {
    // Áp dụng CSS cho thẻ HTML
    tieuDe.style.color = `red`;
  }
};

// Thực hiện viết logic cho 2 nút còn lại
// doiCoChu()
let doiCoChu = () => {
  let tieuDe = document.querySelector(`.tieu-de`);

  if (tieuDe) {
    tieuDe.style.fontSize = `60px`;
  }
};
// gachChanChu()
let gachChanChu = () => {
  let tieuDe = document.querySelector(`.tieu-de`);

  if (tieuDe) {
    tieuDe.style.textDecoration = `underline`;
  }
};

// Thêm class
let themClass = () => {
  let theH1 = document.querySelector(`.the-h1`);

  if (theH1) {
    // sử dụng classList.add để thêm 1 class đa có sẵn
    // ở CSS vào thẻ HTML
    // CÚ PHÁP: tên biến.classList.add(`tên class`)
    //theH1.classList.add(`bien-mat`);

    theH1.classList.add(`duong-vien`);
  }
};

// Thêm class
let xoaClass = () => {
  let theH1 = document.querySelector(`.the-h1`);

  if (theH1) {
    // sử dụng classList.remove để thêm 1 class đa có sẵn
    // ở CSS vào thẻ HTML
    // CÚ PHÁP: tên biến.classList.add(`tên class`)
    //theH1.classList.remove(`bien-mat`);

    theH1.classList.remove(`duong-vien`);
  }
};

// Bài tập 1:
// 1. tạo 1 thẻ div và đặt tên class là cai-hop
// 2. tạo 1 thẻ button, đặt tên: tạo hình vuông và thêm sự onclick
// 3. tạo hàm hinhVuong(), với các logic sau:
// - Khi bấm chuột vào button, thì sẽ tạo width và height là 300px
// - Thêm màu nền vàng
// - Thêm bo góc 5px

// Bài tập 2:
// - Tạo 2 thẻ input, đặt tên input là tài khoản và mật khẩu
// - Tạo 1 nút đăng nhập
// - Sử dụng thuộc tính phù hợp để lấy thông tin nhập vào 2 ô input
// - Hiển thị kết quả ở console.log

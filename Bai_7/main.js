// 1. Lấy nội dung của 1 thẻ HTML hoặc nhiều thẻ HTML

// Chọn vào thẻ HTML
// document.querySelector(`.tên-class`) => lưu vào biến

let tieuDe = document.querySelector(`.tieu-de`);

// Sử dụng if để kiểm tra xem có thẻ không
if (tieuDe) {
  // Lấy ra nội dung của thẻ h1
  // Sử dụng .textContent để lấy nội dung của 1 thẻ HTML
  // LƯU Ý: .textContent không sử dụng được với thẻ input
  let noiDungTieuDe = tieuDe.textContent;
  console.log(noiDungTieuDe);

  // Ghi đè lại nội dung của 1 thẻ
  tieuDe.textContent = `Hôm nay trời lại mưa rồi `;

  // CHỐT: .textContent
  // 1. Lấy nội dung
  // 2. Ghi đè nội dung đã có
  // 3. Sử dụng được với tất cả thẻ HTML ngoại trừ thẻ input

  // .value
  let hoTen = document.querySelector(`.ho-ten`);
  if (hoTen) {
    // Sử dụng .value để lấy nội dung nhập vào input
    console.log(hoTen.value);

    // Ghi đè lại nội dung input
    hoTen.value = `Lâm`;
  }

  // CHỐT: .value
  // 1. Lấy nội dung
  // 2. Ghi đè nội dung đã có
  // 3. Chỉ sử dụng được với thẻ input

  // Tạo 2 thẻ HTML thẻ p và thẻ h3, nhập nội dung cho 2 thẻ

  // Bài tập:
  // Sử dụng phương thức phù hợp để lấy nội dung và hiển thị
  // ở console.log
  let haiPhong = document.querySelector(`.hai-phong`);
  let vietNam = document.querySelector(`.viet-nam`);
  console.log(vietNam);

  if (haiPhong && vietNam) {
    console.log(haiPhong.textContent); // Hiển thị nội dung của thẻ p
    console.log(vietNam.textContent); // Hiển thị nội dung của thẻ h3

    // Sau đó thay thế nội dung như sau:
    // - Đối với thẻ p nội dung thay thế là: SD22302
    // - Đối với  thẻ h3 nội dung thay thế là: FPT Polytechnic
    haiPhong.textContent = `SD22302`;
    vietNam.textContent = `FPT Polytechnic`;

    // Sử dụng .style để dùng CSS cho thẻ HTML
    // CÚ PHÁP: .style.têncss = giá trị CSS
    // LƯU Ý:
    // CSS: font-weight => JS: fontWeight
    // CSS: padding-top => JS: paddingTop
    // CSS: border-radius => JS: borderRadius
    // CSS: color => JS: color
    // CSS: width => JS: width

    // - Những thuộc tính CSS có 1 từ thì giữ nguyên ở JS
    // - Những thuộc tính CSS có 2 từ trở lên thì bỏ dấu - và
    // viết hoa chữ cái đầu của từ thứ 2 trở đi
    vietNam.style.color = `red`;

    // Bài tập: Tạo 1 thẻ div và đặt tên class
    // - Sử dụng JS để cập nhật width và height thành 300px
    // - Sử dụng border với độ dày 1px kiểu dotted màu đen
    // - Sử dụng border radius để bo các góc 5px
    // - Div có màu nền là màu vàng
  }
}

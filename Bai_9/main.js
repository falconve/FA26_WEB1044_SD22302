// Sử dụng JS để tạo thẻ HTML
// CÚ PHÁP: document.createElement(`tên thẻ`)
// LƯU Ý: Nên tạo biến để lưu lại việc tạo thẻ bằng JS

// Ví dụ: tạo thẻ h1
let theH1 = document.createElement(`h1`);

theH1.textContent = `SD22302`;

// Khi tạo thẻ HTML bằng JS muốn hiển thị ở bên trong thẻ body
// thì phải có document.body.appendChild(biến chưa thẻ cần hiển thị)
document.body.appendChild(theH1);

//console.log(theH1); // <h1></h1> => <h1>SD22303</h1>

// Bài tập 1:
// Thực hiện tạo thẻ p và thêm
// vào trong thẻ div có class là thong-tin
// Sau đó thêm nội dung cho thẻ p là Xin chào

// Tạo thẻ <p></p>
let theP = document.createElement(`p`);

// Thêm nội dung cho thẻ p vừa tạo
theP.textContent = `Xin chào`;

let thongTin = document.querySelector(`.thong-tin`);

if (thongTin) {
  // Sử dụng appendChild để thêm thẻ thẻ p vào bên trong div
  // có class thong-tin
  thongTin.appendChild(theP);
}

// Bài tập 2:
// 1. Xây dựng giao diện HTML gồm 2 thẻ input: tài khoản và mật khẩu
// Cùng 1 nút đăng nhập

// 2. Nếu đăng nhập tài khoản là nguoidung1 và mật khẩu là 123456
// => sử dụng alert hiển thị thông báo "Đăng nhập thành công"
// còn nếu nhập sai thông tin
// tài khoản thì thông báo "Đăng nhập thất bại"

// 3. Nếu đăng nhập thành công, thì hiển thị "Xin chào nguoidung1"
// ở thẻ h3.

// GỢI Ý:
// onclick nút đăng nhập => hàm => .value => lấy thông tin từ input
// => sử dụng if kiểm tra => alert thông báo thành công => tạo thẻ h3
// => else => alert thất bại

// Bài tập 3:
// Xây dựng form đổi mật khẩu
// 1. Xây dựng giao diện HTML gồm 3 input: mật khẩu cũ, mật khẩu mới,
// xác nhận mật khẩu và 1 nút đổi mật khẩu

// 2. Dùng JS để kiểm tra xem khi người dùng nhập mật khẩu mới
// có giống ô xác nhận mật khẩu không?

// - Nếu không giống thì alert thông báo "Xác nhận mật khẩu cần giống
//  mật khẩu mới"

// - Nếu giống thì alert thông báo "Đổi mật khẩu thành công"

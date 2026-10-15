// DOM: Là cầu nối giữa JS với HTML và CSS

// Sử dụng:
// - document.querySelector() để thực hiện chọn vào 1 thẻ HTML
let theH1 = document.querySelector(`h1`); // tên thẻ
let so2 = document.querySelector(`.so-2`); // với tên class
let h1So3 = document.querySelector(`#h1-so-3`); // với tên id
console.log(theH1);
console.log(so2);
console.log(h1So3);
// YÊU CẦU:
// - đặt id vào thẻ h1 số 3
// - thực hiện viết code JS chọn vào thẻ h1 có id

// - document.querySelectorAll() để thực hiện chọn nhiều thẻ HTML
let tatCaTheH1 = document.querySelectorAll(`h1`);
console.log(tatCaTheH1);

// YÊU CẦU:
// - Sử dụng vòng lặp for để hiển thị tất các thẻ

// Sử dụng tên thẻ, tên class, tên id kết hợp cùng với
// document.querySelector & document.querySelectorAll

// LƯU Ý:
// - 1. Nên đặt tên biến khi thực hiện sử dụng document.querySelector()
// và document.querySelectorAll()

// - 2. Sử dụng if để kiểm tra xem có tồn tại thẻ HTML không?

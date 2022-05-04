
/**
 * ARRAY (mảng)
 */
// var u1 = "Nguyen"
// var u2 = "Hai"
// var u3 = "Thai"
// var u4 = "Truong"
// var u5 = "Phuc"
var listUser = ["Nguyen", "Hai", "Thai", "Truong", "Phuc"];

// // độ dài
// console.log("Độ dài: "+ listUser.length);
// // phần tử cuối cùng là length - 1

// for(var i = 0; i < listUser.length; i++) {
//     console.log("listUser [" + i + "] " + listUser[i]);}
// // console.log('list[1]',listUser[0]);
// // console.log(listUser[1]);
// // console.log(listUser[2]);
// // console.log(listUser[3]);
// // console.log(listUser[4]);

// // Thay đổi giá trị trong mảng
// listUser[2] = 'Minh';
// console.log('mảng user', listUser);

// // thêm 1 phần tử (element)
// listUser.push('Khải');
// console.log(listUser);

// // xóa 1 phần tử (từ vị trí, bao nhiêu phần tử)
// var itemDel = listUser.splice(3,1);
// console.log(itemDel);
// console.table(listUser);

/**
    Các bước thực hiện bài toán về vòng lặp
 B1: xác định giá trị thay đổi
 B2: xác định điểu kiện lăp
 B3: xử lý khối lệnh muốn thực thi
 B4: thay đổi giá trị ở bước 1
 Ví dụ : in ra các tên trong mảng kèm theo chứ hello: ( hello Nguyen, hello Hai...)
 */

// // Bước 1
// var index = 0
// // Bước 2
// while(index <= listUser.length - 1) {
// // Bước 3
//     console.log('Hello', listUser[index]);
// // Bước 4
//     index++;    
// }
// for(var index = 0; index <= listUser.length - 1; index++) {
//     console.log('Hello', listUser[index]);
// }


/* Bài tập
    + cho 1 mảng: [2,7,4,3,6,10,29,32,41]
    + Yêu cầu viết chương trình khi người dùng click vào nút btnBaiTap1 => in kết quả ra ketQua1
*/ 
var arrNumber = [2,7,4,3,6,10,29,32,41];

document.getElementById("btnBaiTap1").onclick = function() {
    // alert
    // input: number? string? boolean? array?

    // output: string?
    var result = [];
    // progress
    for(var index = 0; index <= arrNumber.length -1; index++) {
        // XỬ lý
        // Lấy ra giá trị của từng phần tử
        var phanTu = arrNumber[index];
        if(phanTu % 2 === 0) {
        result += phanTu + " ";
        }
    }    
    document.getElementById("ketQua1").innerHTML = "Số chẵn là: " + result ;
}
/**
 * Bài tập 2
 */
document.getElementById("btnThemGiaTri").onclick = function() {
    // input: number? string? boolean? array?
    // input là: arrNumber và giá trị người dùng nhập
    var number = document.getElementById("giaTri").value*1;

    // output: string: [1,2,3,4,5,6,7]
    var output = '';

    // xử lý
    arrNumber.push(number);

    for(var index = 0;  index <= arrNumber.length -1; index++ ) {
        // mỗi lần duyệt lấy ra 1 giá trị
        var giaTri = arrNumber[index];
        output += giaTri + " ";
    }
    // sau vong lặp:
    output = "[" + output + "]";
    // In kết quả
    document.getElementById("ketQua2").innerHTML = output;

    //cách 2
    console.log(arrNumber.toString());
}

/**
 * Bài tập 3
 */
document.getElementById("btnXoaGiaTri").onclick = function() {
    // input: arrNumber, number
    var xoaGiaTri = Number(document.getElementById("giaTriXoa").value);
    // output: string?
    var ketQua = '';
    // khởi tạo giá trị lính canh
    var viTri = -1;
    // for ( var index = arrNumber.length -1; index >= 0; index++) nếu có nhiều trường hợp số giống nhau trong mảng
    for(var index = 0; index < arrNumber.length; index++) {
        // mỗi lần duyệt qua index => lấy ra giá trị
        var giaTri = arrNumber[index];
        if(giaTri === xoaGiaTri ) {
            // Tìm thấy
            viTri = index; // khi ta thấy giá trị người dùng nhập vào
            break; 
        }
    }
    if(viTri !== -1) {
        // => xóa tại vị trí đó
        arrNumber.splice(viTri,1)
        // xóa thành công thì in mảng ra giao diện
        ketQua = "[" + arrNumber.toString() + "]";
    }  else {
        ketQua = xoaGiaTri + " không tìm thấy";
    }
    document.getElementById("ketQua3").innerHTML = ketQua;
}


// Ví dụ: DOM qua ten thẻ
document.getElementById("btnThayDoiNoiDung").onclick = function() {
    // DOM thông qua tên thẻ hoặc tag name (s1,s2,s3)
     var arrTagSection = document.getElementsByTagName("section");

    //  arrTagSection[1].innerHTML = "hello cybersoft";
     console.log("arrTagSection",arrTagSection);

     for( var index = 0; index < arrTagSection.length; index++) {
        var tagSection = arrTagSection[index];
        tagSection.innerHTML =" Hello Cybersoft";
        // dòng lẻ
        if(index%2 == 0) {
            tagSection.className = "bg-warning";
        }
     }
}

//Ví dụ: DOM qua className
document.getElementById("btnDomClass").onclick = function() {
    var arrDom = document.getElementsByClassName("text");

    arrDom[2].style.color = "red";
    console.log("arrDom",arrDom);
    for(var index = 0; index < arrDom.length; index++) {
        var tag = arrDom[index];
        tag.className = "alert-primary m-2";
    }
}
// lưu ý khi DOM bằng tagName className kết quả trả vè luôn trả về là một array kể cả có 1 DOM
// để xử lý thẻ đó phải có chỉ số phần tử
// arr[0].innerHTML

/**
 * Khi sử dụng document.querySelector => Nếu co nhiều selector trùng nhau thì kết quả chir trả về selctor đầu tiên tìm thấy
 */
document.querySelector("#btnDangNhap").onclick = function(event) {
    // chặn sự kiện reload của browser
    event.preventDefault();

    var taiKhoan = document.querySelector("#taiKhoan").value;
    var matKhau = document.querySelector("#matKhau").value;
    alert("Tài khoản và mật khẩu "+taiKhoan + " & " + matKhau);
}

/**
 * Khi sử dụng document.querySelectorAll => Tương tự querySelector tuy nhiên kết quả trả về là 1 mảng ele có cùng selector. Lưu ý: Dù chỉ 1 element khớp với Selector thì vân trả về 1 mảng có cùng 1 phần tử
 */
document.querySelector("#btnDangNhap").onclick = function() {
    var arrSelector = document.querySelectorAll("#form-dang-nhap input");
    // khi DOM nên thử CSS trước coi có bị ảnh hưởng thẻ khác không
    console.log(arrSelector);
    console.log("taiKhoan", arrSelector[0].value);
    console.log("matKhau", arrSelector[1].value);
}

/**
 * FOREACH: cho phép thực thi hành động hêt tất cả phàn tử của mảng
 */
var colors = ["red","green","blue","yellow","pink"];


// for(var i = 0; i <= colors.length -1;i++) {
//     console.log(colors[i]);
// }
    colors.forEach(function (ele,index) {
        console.log(ele, index); // Phần từ lấy lần lượt ra từ mảng
        // console.log(index); // vị trí (index)
        // Mỗi lần duyệt qua 1 phần tử thì tạp ra 1 nutton màu
        var btn = document.createElement("button");
        btn.style.color = "#fff";
        btn.style.backgroundColor = ele;
        btn.className = "btn mr-2";
        btn.innerHTML = ele;
        // Truy xuất đến thẻ div.colors => append button vào
        document.querySelector(".colors").appendChild(btn);
    });


/**
 * pop: lấy phần tử ở cuối mảng ra
 */
var lastElement = colors.pop();
console.log(lastElement);
console.log(colors);

/**
 * unshift: thêm 1 hoặc nhiều phần tử ở đầu mảng ngược lại với push
 */
var length = colors.unshift("black","white");
console.log(length);
console.log("arrColor",colors);

/**
 * shift: xóa phần tử đầu tiên của mảng
 */
colors.shift();
console.log("newColor", colors);

/**
 * IndexOf: Trả ra vị trí của phần tử đó trong mảng (phần tử đầu tiên khớp với giá trị). Nếu không tìm thấy giá trị trả về -1
 */
// xóa màu xanh ra khỏi mảng ["red","green","blue","yellow","pink"];
var viTriMau = colors.indexOf("red");
console.log("viTriMau",viTriMau);
colors.splice(1,1);


/**
 * reverse(): đảo chiều của mảng
 */
// colors.reverse();
// console.log(colors);

/**
 * sort():
 */
var result = colors.sort(function(phanTu, phanTuTruoc){
    return phanTu - phanTuTruoc;
    // return về số âm sẽ hoán vị (số dương thì giữ nguyên)
})
console.log(result);

var arrNumber = [1,6,4,3,5,8,2,9];
// sắp tăng dầnq
var ketQua = arrNumber.sort(function(soSau,soTruoc){
    return soSau - soTruoc;
})
console.log(arrNumber);

// concat(): dùng để nối nhiều mảng lại với nhau
var res = [1,2,3].concat([4,5,6],[7],8,9);
console.log(res);

// map(): hàm biến đổi 1 mảng thành 1 mảng khác
var arrColor = ["red","green","blue","yellow","pink"];

var resmap = arrColor.map(function(ele,index){

    // return về giá trị gì thig giá trị đó sẽ được add vào mảng kết quả
    return '<button class = "btn text-white" style = "background-color:'+ele+'">' +ele+ '</button>';
})
for(var i = 0; i <= resmap.length -1; i++) {
    document.querySelector(".colors-2").innerHTML += resmap[i];
}

/**
 * filter(): lọc 1 mảng theo điểu kiện return của function bên trong filter
*/
var prices = [1000,500,2500,3000];

// lấy ra các giá trị lớn hơn 1000

// output
// var arrResult = [];
// for(var i = 0; i <= prices.length-1; i++) {
//     // DUyệt qua mảng giá tiền  lấy ra giá trị (prices[i]);
//     if(prices[i]>1000) {
//         // so sánh giá trị nào lớn hơn 1000
//         arrResult.push(prices[i]);
//     }
// }
// console.log("arrResult", arrResult);

var arrResult = prices.filter(function(ele,index){
    return ele > 1000;
})
console.log(arrResult);
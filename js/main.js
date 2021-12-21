var numArray = [];

function getNum(){
    var num = Number(document.getElementById('inpNum').value);

    numArray.push(num);
    document.getElementById('txtNum').innerHTML = numArray;
}
document.getElementById('btnNum').onclick = getNum;

/**
 * Bài 1:
 * Khối 1: Input 
 *  num
 * Khối 2:
 * B1: Tạo hàm và khai báo biến
 * B2: 
 *  - Duyệt mảng Lấy các giá trị trong mảng số đã nhập vào,
 *  - Nếu phần tử nào > 0 cộng các giá trị lấy được vào biến tổng
 * B3: Hiển thị kết quả
 * Khối 3: Output     
 * Sum
 */
function tinhTongSoDuong(){
    var sum = 0
    for(var i = 0; i < numArray.length; i++){
        if(numArray[i] > 0){
            sum += numArray[i];
        }
    }
    document.getElementById('txtTong').innerHTML = 
    "Tổng là: "+sum;
}
document.getElementById('btnTong').onclick = tinhTongSoDuong;

/**
 * Bài 2:
 * Khối 1: Input 
 *  num
 * Khối 2:
 * B1: Tạo hàm và khai báo biến
 * B2: 
 *  - Duyệt mảng Lấy các giá trị trong mảng số đã nhập vào,
 *  - Nếu phần tử nào > 0 đếm các số nguyên dương
 * B3: Hiển thị kết quả
 * Khối 3: Output     
 * Count
 */
 function demSoDuong(){
    var count = 0
    for(var i = 0; i < numArray.length; i++){
        if(numArray[i] > 0){
            count++;
        }
    }
    document.getElementById('txtDem').innerHTML = 
    "Số dương là: "+count;
}
document.getElementById('btnDem').onclick = demSoDuong;

/**
 * Bài 3:
 * Khối 1: Input 
 *  num
 * Khối 2:
 * B1: Tạo hàm và khai báo biến
 * B2: 
 *  - Duyệt mảng Lấy các giá trị trong mảng số đã nhập vào,
 *  - Cho min = phần tử đầu tiên
 *  - Đem min đi so sánh với các phần tử còn lại trong mảng
 *  - Nếu có phần tử nào < min thì gán min bằng phần tử đó
 * B3: Hiển thị kết quả
 * Khối 3: Output     
 * min
 */
 function timMin(){
    var min = numArray[0];
    for(var i = 1; i < numArray.length; i++){
        if(numArray[i] < min){
            min = numArray[i];
        }
    }
    document.getElementById('txttimMin').innerHTML = 
    "Số nhỏ nhất  là: "+min;
}
document.getElementById('btntimMin').onclick = timMin;

/**
 * Bài 4:
 * Khối 1: Input 
 *  num
 * Khối 2:
 * B1: Tạo hàm và khai báo biến
 * B2: 
 *  - Duyệt mảng Lấy các giá trị trong mảng số đã nhập vào,
 *  - Nếu phần tử nào lớn hơn 0 thì đẩy các phần tử đó vào mảng mới
 *  - Cho min bằng phần tử đầu tiên của mảng các phần tử lớn hơn 0
 *  - Duyệt mảng các số lớn lớn hơn 0 vừa đẩy vào
 *  - Nếu phần tử nào bé hơn min thì gán min cho phần tử đó
 * B3: Hiển thị kết quả
 * Khối 3: Output     
 * min
 */
 function timMinDuong(){
    var duongArr = [];
    for(var i = 0; i < numArray.length; i++){
        if(numArray[i] > 0){
            duongArr.push(numArray[i]);
        }
    }
    var minDuong = duongArr[0];
    for(var i = 1; i < duongArr.length; i++){
        if(duongArr[i] < minDuong){
            minDuong = duongArr[i];
        }
    }
   
    document.getElementById('txttimMin2').innerHTML = 
    "Số dương nhỏ nhất  là: "+minDuong;
}
document.getElementById('btntimMin2').onclick = timMinDuong;

/**
 * Bài 5:
 * Khối 1: Input 
 *  num
 * Khối 2:
 * B1: Tạo hàm và khai báo biến
 * B2: 
 *  - Duyệt mảng Lấy các giá trị trong mảng số đã nhập vào
 *  - Kiểm tra nếu phần tử ở vị trí cuối chia hết cho 2 => chẵn
 *  - Ngược lại trả về -1
 * B3: Hiển thị kết quả
 * Khối 3: Output     
 * chanCuoi
 */
 function timChanCuoi(){
    var chanCuoi = 0
    for(var i = 0; i < numArray.length; i++){
        if(numArray[numArray.length -1] % 2 == 0  ){
           chanCuoi = numArray[numArray.length -1]
        }else{
            chanCuoi = -1;
        }
    }

    document.getElementById('txtChanCuoi').innerHTML = 
    "Số chẵn cuối cùng trong mảng  là: "+chanCuoi;
}
document.getElementById('btnChanCuoi').onclick = timChanCuoi;

/**
 * Bài 6:
 * Khối 1: Input 
 *  num
 * Khối 2:
 * B1: Tạo hàm và khai báo biến
 * B2: 
 *  - Duyệt mảng Lấy các giá trị trong mảng số đã nhập vào
 *  - Tạo 1 biến tạm, gán giá trị của phần tử ở vị trí 1 vào biến tạm
        Gán giá trị của phần tử ở vị trí 2 vào vị trí 1
        Gán giá trị biến tạm vào vị trí 2   
 * B3: Hiển thị kết quả
 * Khối 3: Output     
 * chanCuoi
 */
 function doiViTri(){
    var index1 = document.getElementById('inpViTri1').value;
    var index2 = document.getElementById('inpViTri2').value;
    for(var i = 0; i < numArray.length; i++){
        var temp = numArray[index1];
        numArray[index1] = numArray[index2];
        numArray[index2] = temp;
    }
   
    document.getElementById('txtDoiViTri').innerHTML = 
    "Mảng sau khi đổi là: "+numArray;
    
}
document.getElementById('btnDoiViTri').onclick = doiViTri;

/**
 * Bài 7:
 * Khối 1: Input 
 *  num
 * Khối 2:
 * B1: Tạo hàm và khai báo biến
 * B2: 
 *  - Duyệt mảng Lấy các giá trị trong mảng số đã nhập vào
 *  Vòng lớn: Lặp nhiều lần vòng nhỏ để đem nhiều giá trị lớn về cuối mảng
 *  Vòng nhỏ: 
 *      Đem duy nhất 1 giá trị lớn về cuối mảng
 *      So sánh từng cặp giá trị ở vị trí liền kề
 * B3: Hiển thị kết quả
 * Khối 3: Output     
 * chanCuoi
 */
function sapXepTang(){
    for(var i = 0; i < numArray.length; i++){
        for(var j = 0; j < numArray.length; j++){
            if(numArray[j] > numArray[j + 1]){
                var temp = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temp;
            }
        }
    }
    
    document.getElementById('txtTang').innerHTML = 
    "Mảng sắp xếp tăng dần là: "+numArray;
}
document.getElementById('btnTang').onclick = sapXepTang;

/**
 * Bài 8:
 * Khối 1: Input 
 *  num
 * Khối 2:
 * B1: Tạo hàm và khai báo biến
 * B2: 
 *  - Hàm kiểm tra snt
 *      Nếu giá trị < 2 thì không phải là snt
 *      duyệt mảng kiểm tra nếu là snt thì trả về true ngược lại trả về false 
 *  - Hàm tìm snt
 *      Duyệt mảng kiểm tra kiemTraSNT trả về true thì dừng vòng lặp và không   tìm các snt ở sau 
 * B3: Hiển thị kết quả
 * Khối 3: Output     
 * chanCuoi
 */
function kiemTraSNT(snt){
    if(snt < 2){
        return false;
    }
    for(var i = 2; i <= Math.sqrt(snt); i++){
        if(snt % i == 0){
            return false;
        }
    }
    return true;
}

function timSNT(){
    for(var i = 0; i < numArray.length; i++){
        if(kiemTraSNT(numArray[i])){
            document.getElementById('txtSnt').innerHTML = 
            "Số nguyên tố đầu tiên là: "+numArray[i];
            break;
        }else{
            document.getElementById('txtSnt').innerHTML = 
            "-1";
        }
    } 
}
document.getElementById('btnSnt').onclick = timSNT;

/**
 * Bài 9:
 * Khối 1: Input 
 *  num
 * Khối 2:
 * B1: Tạo hàm và khai báo biến
 * B2: 
 *  - Duyệt mảng Lấy các giá trị trong mảng số đã nhập vào
 *  - kiểm tra xem số trong mảng có phải là số nguyên không => đếm số nguyên
 * B3: Hiển thị kết quả
 * Khối 3: Output     
 * Số nguyên đã đếm được
 */
 var floatArray = [];

// Lấy số  từ input nhập vào
function laySoNguyen(){
    var num = Number(document.getElementById('inpFloat').value);
    floatArray.push(num)
    for(var i = 0; i < floatArray.length; i++){
        document.getElementById('txtFloat').innerHTML = floatArray;
    }
    
}
document.getElementById('btnFloat').onclick = laySoNguyen;

// Tìm số nguyên
function timSoNguyen(){
    var count = 0;
    for(var i = 0; i < floatArray.length; i++){
        if(Number.isInteger(floatArray[i])){
            count++;
        }
    }
    document.getElementById('txtdemNguyen').innerHTML = 
    "Số nguyên có trong mảng là: "+count;
    
}
document.getElementById('btndemNguyen').onclick = timSoNguyen

/**
 * Bài 10:
 * Khối 1: Input 
 *  num
 * Khối 2:
 * B1: Tạo hàm và khai báo biến
 * B2: 
 *  - Duyệt mảng Lấy các giá trị trong mảng số đã nhập vào
 *  - Kiểm tra xem số trong mảng có bao nhiêu số dương bao nhiêu số âm rồi so sánh
 * B3: Hiển thị kết quả
 * Khối 3: Output     
 * Số âm và số dương đã đếm được và so sánh với nhau
 */

function soSanhSoAmDuong(){
    var soAm = 0;
    var soDuong = 0;
    for(var i = 0; i < numArray.length; i++){
        if(numArray[i] > 0){
           soDuong++;
        }else if(numArray[i] < 0){
            soAm++;
        }
    }
    if(soDuong > soAm){
        document.getElementById('txtsoSanh').innerHTML = 
        "Số dương nhiều hơn số âm "
    }else if(soDuong < soAm){
        document.getElementById('txtsoSanh').innerHTML = 
        "Số âm nhiều hơn số dương  "
    }else if(soDuong == soAm){
        document.getElementById('txtsoSanh').innerHTML = 
        "Số dương bằng số âm  "
    }
}
document.getElementById('btnsoSanh').onclick = soSanhSoAmDuong


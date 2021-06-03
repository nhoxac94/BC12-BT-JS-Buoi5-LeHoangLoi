/**
 * Bài tập: Quản lý tuyển sinh
 * 
 * B1: Input : điểm 3 môn thi của học sinh, điểm chuan hội đồng, khu vực và đối tượng dự thi
 * B2: Handle 
 *  - Đặt biến: diemMon1, diemMon2, diemMon3, diemTong, diemTongKet, diemChuan, khuVuc, doiTuong, diemKhuVuc, diemDoiTuong, ketQuaTuyenSinh
 *  - Kiểm tra đầu vào 
 *  - ktra diemMon1, diemMon2, diemMon3 < 0 => rớt 
 *  - Xét khuVuc => diemKhuVuc, doiTuong => diemKhuVuc 
 *  - diemTongKet + diemKhuVuc + diemKhuVuc so sánh voi diemChuan
 * B3: Output: Xuất kết quả ra màn hình 
 */


function getEle(id) {
    return document.getElementById(id);
}


btnTinhDiem = getEle ('btnTinhDiem');
showKetQuaTuyenSinh = getEle ('showKetQuaTuyenSinh');
showKetQuaDiemTongKet = getEle ('showKetQuaDiemTongKet');

btnTinhDiem.onclick = function () {
      
    diemChuan = +getEle ('diemChuan').value;
    diemMon1 = +getEle ('diemMon1').value;
    diemMon2 = +getEle ('diemMon2').value;
    diemMon3 = +getEle ('diemMon3').value;
    khuVucA = getEle ('khuVucA').checked;
    khuVucB = getEle ('khuVucB').checked;
    khuVucC = getEle ('khuVucC').checked;
    khuVucKhongUuTien = getEle ('khuVucKhongUuTien').checked;
    doiTuong1 = getEle ('doiTuong1').checked;
    doiTuong2 = getEle ('doiTuong2').checked;
    doiTuong3 = getEle ('doiTuong3').checked;
    doiTuongKhongUuTien = getEle ('doiTuongKhongUuTien').checked;
    
    var diemTong = 0, diemTongKet = 0, diemKhuVuc = 0, diemDoiTuong = 0, ketQuaTuyenSinh = '';

    //Tính điểm khu vực
    if (khuVucA == true ) {
        diemKhuVuc = 2;
    } else if (khuVucB == true) {
        diemKhuVuc = 1;
    } else if (khuVucC == true) {
        diemKhuVuc = 0.5;
    }else if (khuVucKhongUuTien == true) {
        diemKhuVuc = 0;
    }
        // Tính điểm ưu tiên
    if (doiTuong1 == true ) {
        diemDoiTuong = 2.5;
    } else if (doiTuong2 == true) {
        diemDoiTuong = 1.5;
    } else if (doiTuong3 == true) {
        diemDoiTuong = 1;
    }else if (doiTuongKhongUuTien == true) {
        diemDoiTuong = 0;
    };

    //Tinh tỏng điểm
    if (isNaN(diemMon1) ||isNaN(diemMon2)||isNaN(diemMon3)||isNaN(diemChuan) || diemMon1 < 0 || diemMon1 > 10|| diemMon2 <0 || diemMon2 > 10 || diemMon3 < 0 || diemMon3 > 10 || diemChuan < 0 || diemChuan > 34.5)  {
        alert('Bạn vui lòng nhập lại điểm')
    } else if ((diemMon1 == 0) || (diemMon2 == 0)||(diemMon3 == 0)) {
        diemTongKet = (diemMon1 + diemMon2 + diemMon3) + diemKhuVuc + diemDoiTuong;
        showKetQuaTuyenSinh.innerHTML = 'Bạn đã rớt';   
        showKetQuaDiemTongKet.innerHTML = 'Tổng điểm của bạn là: ' + diemTongKet;

    } else  {
        diemTongKet = (diemMon1 + diemMon2 + diemMon3) + diemKhuVuc + diemDoiTuong;
        diemTongKet >= diemChuan ? showKetQuaTuyenSinh.innerHTML = 'Bạn đã đậu' :  showKetQuaTuyenSinh.innerHTML = 'Bạn đã rớt';
        showKetQuaDiemTongKet.innerHTML = 'Tổng điểm của bạn là: ' + diemTongKet;

    };
}





/**
 * Bài tập: Tính tiền nộp
 * 
 * B1: Input : Tên người sử dụng , số kw sử dụng
 * B2: Handle:
 *  - Đặt biến: tenNguoiSuDung, soKW
 *  - dùng hàm if xét các khoảng giá => tính tiền điện
 * B3: Output : Xuất kết quả ra màn hình
 */

function getEleId(id) {
    return document.getElementById(id);
} 

btnTinhTienDien = getEleId('btnTinhTienDien');
showTienDien = getEleId('showTienDien');

btnTinhTienDien.onclick = function () {
    var tienDien = 0;
    tenNguoiSuDung = getEleId('tenNguoiSuDung').value;
    soKW = +getEleId('soKW').value;
    if ((soKW < 0) || (isNaN(soKW))) {
        alert('Vui lòng nhập lại số kW điện')
    } else {
        if (soKW <= 50) {
            tienDien = soKW*500;
        } else if (soKW <= 100) {
            tienDien = 50*500 + (soKW -50)*650;
        } else if (soKW <= 200) {
            tienDien = 50*500 + 50*650 + (soKW -100)*850;
        } else if (soKW <= 350) {
            tienDien = 50*500 + 50*650 + 100*850 +  (soKW -200)*1100;
        } else {
            tienDien = 50*500 + 50*650 + 100*850 + 150*1100 + (soKW - 350)*1300;
        }        
    }
    showTienDien.innerHTML = 'Tiền điện ' + tenNguoiSuDung + ' cần thanh toán là: ' + tienDien.toLocaleString() + ' vnd'
}
function CongViec(id, tieuDe, moTa, hoanThanh) {
    this.id = id;
    this.tieuDe = tieuDe;
    this.moTa = moTa;
    this.hoanThanh = hoanThanh;
}

let congViecs = [];
function themCongViec() {
    let id = prompt('Nhập ID của công việc:');
    let tieuDe = prompt('Nhập tiêu đề công việc:');
    let moTa = prompt('Nhập mô tả công việc:');
    let hoanThanh = prompt('Công việc đã hoàn thành? (true/false):');

    hoanThanh = (hoanThanh.toLowerCase() === 'true');

    let congViecMoi = new CongViec(id, tieuDe, moTa, hoanThanh);
    congViecs.push(congViecMoi);

    console.log('Công việc đã được thêm vào danh sách.');
}

function hienThiCongViec() {
    console.log('Danh sách công việc:');
    congViecs.forEach(congViec => {
        console.log(`ID: ${congViec.id}, Tiêu đề: ${congViec.tieuDe}, Mô tả: ${congViec.moTa}, Hoàn thành: ${congViec.hoanThanh}`);
    });
}

function timCongViecTheoID() {
    let timID = prompt('Nhập ID công việc cần tìm:');
    let congViecTimThay = congViecs.find(congViec => congViec.id === timID);

    if (congViecTimThay) {
        console.log('Thông tin công việc:');
        console.log(`ID: ${congViecTimThay.id}, Tiêu đề: ${congViecTimThay.tieuDe}, Mô tả: ${congViecTimThay.moTa}, Hoàn thành: ${congViecTimThay.hoanThanh}`);
    } else {
        console.log('Không tìm thấy công việc với ID đã nhập.');
    }
}

function chuongTrinhChinh() {
    let luaChon;
    do {
        console.log('----- MENU -----');
        console.log('1. Thêm mới công việc');
        console.log('2. Hiển thị danh sách công việc');
        console.log('3. Tìm kiếm công việc theo ID');
        console.log('4. Thoát');

        luaChon = prompt('Nhập lựa chọn của bạn (1-4):');
        switch (luaChon) {
            case '1':
                themCongViec();
                break;
            case '2':
                hienThiCongViec();
                break;
            case '3':
                timCongViecTheoID();
                break;
            case '4':
                console.log('Chương trình kết thúc.');
                break;
            default:
                console.log('Lựa chọn không hợp lệ. Hãy nhập lại.');
        }
    } while (luaChon !== '4');
}

chuongTrinhChinh();
# DỰ ÁN WEB APP CHO THUÊ THỜI TRANG HỘI AN PREMIUM

Web Application & Báo cáo Lộ trình Kinh doanh cho tiệm thuê quần áo nữ cao cấp & trending tại Trung tâm Phố cổ Hội An.

## 🚀 HƯỚNG DẪN DEPLOY TRÊN GITHUB PAGES / GIT SERVER

Mã nguồn đã được khởi tạo Git repository và commit hoàn chỉnh tại máy local. Để đưa lên Internet vĩnh viễn dùng Git:

### Bước 1: Tạo Repository trên GitHub
1. Truy cập [https://github.com/new](https://github.com/new)
2. Đặt tên Repo: `tiem-thue-quan-ao-hoi-an`
3. Nhấn **Create repository**.

### Bước 2: Push Mã Nguồn Từ Máy Lên GitHub
Mở Terminal tại thư mục dự án và chạy các lệnh:

```bash
git remote add origin https://github.com/USERNAME/tiem-thue-quan-ao-hoi-an.git
git branch -M main
git push -u origin main
```

### Bước 3: Bật GitHub Pages (Miễn Phí Vĩnh Viễn)
1. Vào **Settings** của Repository trên GitHub.
2. Chọn mục **Pages** ở thanh menu bên trái.
3. Ở phần **Build and deployment** -> **Branch**: Chọn `main` / `root` -> Bấm **Save**.
4. Sau 1 phút, GitHub sẽ cấp cho anh link Web App dùng được trên mọi điện thoại & máy tính:
   - **Link Web App Cửa Hàng:** `https://USERNAME.github.io/tiem-thue-quan-ao-hoi-an/app.html`
   - **Link Báo Cáo Chiến Lược:** `https://USERNAME.github.io/tiem-thue-quan-ao-hoi-an/index.html`

---

## 📱 CÁC FILE TRONG DỰ ÁN

- `app.html`: Web App Bán & Cho thuê trang phục (Giao diện Khách thuê + Admin Portal dành cho Chủ Tiệm).
- `index.html`: Cẩm nang chiến lược, lộ trình 6 giai đoạn & Bộ tính ROI tài chính.
- `Process.html`: File sao lưu nội dung kế hoạch vận hành.

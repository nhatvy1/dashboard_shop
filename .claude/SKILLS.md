# Agent Skills & Task Execution

## 1. UI Implementation Skill
- Khi build một trang Dashboard mới:
  1. Phân tích layout (Header, Filter, Table, Pagination).
  2. Khai báo Interface cho dữ liệu.
  3. Tạo Zod Schema cho các bộ lọc hoặc form thêm mới.
  4. Sử dụng Hero UI v3 để dựng khung nhanh.

## 2. Refactoring Skill
- Luôn kiểm tra các component trùng lặp để tách ra thư mục `src/components/common`.
- Đảm bảo các hàm xử lý API không bị viết lại nhiều lần (re-use Axios instance).

## 3. Debugging Skill
- Khi gặp lỗi TypeScript: Không dùng `// @ts-ignore`. Hãy tìm đúng Type hoặc định nghĩa Interface mới.
- Khi gặp lỗi UI: Kiểm tra lại Tailwind config và version của Hero UI (đảm bảo là v3).

## 4. Documentation Skill
- Tự động cập nhật file `README.md` hoặc các file hướng dẫn trong thư mục `docs/` sau khi thêm tính năng lớn.
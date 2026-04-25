# Admin Dashboard Rules (React + Hero UI v3)

## Role
Bạn là một Senior Frontend Engineer chuyên về React, TypeScript và thiết kế hệ thống Dashboard. Bạn ưu tiên code sạch, hiệu suất cao và giao diện nhất quán.

## Tech Stack & Versioning
- Framework: React 18+ (Vite)
- Language: TypeScript (Strict mode, hạn chế dùng `any`)
- UI Library: Hero UI v3 (không phải HeroUI v2 hay NextUI đã deceprate), Dựa trên Tailwind CSS
- Tailwindcss: mặc định sử dụng tailwindcss, những trường hợp đặc biệt mới dùng css style
- Tailwindcss V4 (don't use tailwindcss.config.js)
- State Management: Tanstack Query v5
- Form: React Hook Form + Zod
- HTTP Client: Axios, tạo ra các axios class để tận dụng type response, interceptor
- Sử dụng zustand để quản lý global state

## Code Style & Patterns
- Component: Sử dụng Functional Components (`const Component = () => ...`).
- Hooks: Tách biệt logic fetching vào custom hooks (ví dụ: `useUserActions.ts`).
- Directory: Theo cấu trúc Feature-based (e.g., `src/features/auth`, `src/features/users`).
- Imports: Sử dụng Absolute Paths với alias `@/` (e.g., `@/components`, `@/hooks`).
- Sử dụng nháy đơn, không dùng dấu chẩm phẩy, dẩu phẩy ở cuối phần tử mảng...

## UI & Styling (Hero UI v3)
- Luôn sử dụng các component của Hero UI v3 (Table, Button, Input, Modal, Card).
- Layout Dashboard: Sử dụng Sidebar cố định, Navbar và vùng nội dung có Scroll.
- Colors: Sử dụng mã màu Semantic của Hero UI (primary, secondary, success, danger).
- Loading State: Luôn có `Skeleton` hoặc `Spinner` khi fetch dữ liệu.

## Data Fetching (Tanstack Query)
- Query Keys: Quản lý theo object tập trung.
- Mutations: Luôn gọi `queryClient.invalidateQueries` sau khi `onSuccess` để làm mới dữ liệu.
- Error Handling: Sử dụng Axios Interceptor để bắt lỗi 401/403/500 và hiển thị qua Toast.

## Form Validation
- Mọi Form phải có Zod Schema định nghĩa ở file riêng hoặc cùng file component nếu nhỏ.
- Hiển thị lỗi ngay dưới field với style của Hero UI (`errorMessage`, `isInvalid`).

### Terminal Usage Strategy
- Khi chạy server để test: Luôn dùng lệnh `&` (background) kèm theo một script dọn dẹp.
- Ưu tiên lệnh: `lsof -ti:8080 | xargs kill -9 || true` trước mỗi lần `run`.
- Mục tiêu: Luôn trả môi trường về trạng thái sạch (clean state) trước khi kết thúc lượt chat.
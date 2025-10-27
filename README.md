# Amado Furniture Ecommerce - React TypeScript

Đây là phiên bản React TypeScript của template Amado Furniture Ecommerce, được chuyển đổi từ HTML/CSS/JS gốc.

## 🚀 Tính năng

- **Home Page**: Hiển thị các danh mục sản phẩm với hiệu ứng hover
- **Shop Page**: Danh sách sản phẩm với bộ lọc theo danh mục, thương hiệu, màu sắc và giá
- **Product Details**: Chi tiết sản phẩm với gallery hình ảnh và chức năng thêm vào giỏ hàng
- **Cart**: Quản lý giỏ hàng với cập nhật số lượng và xóa sản phẩm
- **Checkout**: Form thanh toán với validation
- **Responsive Design**: Tương thích với mọi thiết bị
- **TypeScript**: Type safety và IntelliSense
- **React Context**: Quản lý state toàn cục cho giỏ hàng

## 🛠️ Công nghệ sử dụng

- **React 18** với TypeScript
- **React Router DOM** cho routing
- **Vite** cho build tool
- **SCSS** cho styling
- **Context API** cho state management

## 📦 Cài đặt

1. Clone repository:
```bash
git clone <repository-url>
cd amado-master
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy development server:
```bash
npm run dev
```

4. Mở trình duyệt tại `http://localhost:3000`

## 🏗️ Cấu trúc project

```
src/
├── components/          # React components
│   ├── Layout.tsx      # Layout chính
│   ├── Header.tsx      # Header với navigation
│   ├── Footer.tsx      # Footer
│   ├── SearchWrapper.tsx
│   ├── ProductCard.tsx
│   ├── CategoryCard.tsx
│   └── CartItemRow.tsx
├── pages/              # Các trang chính
│   ├── Home.tsx
│   ├── Shop.tsx
│   ├── ProductDetails.tsx
│   ├── Cart.tsx
│   └── Checkout.tsx
├── contexts/           # React Context
│   └── CartContext.tsx
├── hooks/              # Custom hooks
│   └── index.ts
├── types/              # TypeScript types
│   └── index.ts
├── utils/              # Utility functions
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🎨 Styling

Project sử dụng CSS gốc từ template Amado với một số cải tiến:

- Import CSS gốc từ thư mục `css/`
- Thêm styles cho React components
- Responsive design được giữ nguyên
- Hover effects và animations

## 🛒 Chức năng giỏ hàng

- Thêm sản phẩm vào giỏ hàng
- Cập nhật số lượng
- Xóa sản phẩm
- Tính tổng tiền tự động
- Hiển thị số lượng sản phẩm trong header

## 🔧 Scripts

- `npm run dev`: Chạy development server
- `npm run build`: Build production
- `npm run preview`: Preview build

## 📱 Responsive

Template được thiết kế responsive với:
- Mobile navigation
- Tablet layout
- Desktop layout
- Touch-friendly interface

## 🎯 Cải tiến so với bản gốc

1. **TypeScript**: Type safety và better development experience
2. **React Components**: Modular và reusable
3. **State Management**: Context API cho cart state
4. **Routing**: Client-side routing với React Router
5. **Custom Hooks**: Reusable logic
6. **Utility Functions**: Helper functions cho các tác vụ chung
7. **Modern Build**: Vite thay vì webpack

## 🚀 Deployment

Để deploy lên production:

1. Build project:
```bash
npm run build
```

2. Upload thư mục `dist/` lên web server

## 📄 License

Template gốc được cung cấp bởi Colorlib và Themewagon. Phiên bản React TypeScript này được tạo ra để học tập và phát triển.

## 🤝 Contributing

Mọi đóng góp đều được chào đón! Hãy tạo issue hoặc pull request.

## 📞 Support

Nếu có vấn đề, hãy tạo issue trên GitHub repository.

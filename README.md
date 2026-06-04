# 📖 On-Policy Distillation cho Mọi Họ Mô hình — Bản dịch Tiếng Việt

> Bản dịch tiếng Việt của bài nghiên cứu **"Unlocking On-Policy Distillation for Any Model Family"** bởi nhóm HuggingFace H4.

[![Deploy to GitHub Pages](https://github.com/tuandung222/on-policy-distillation-vi/actions/workflows/deploy.yml/badge.svg)](https://github.com/tuandung222/on-policy-distillation-vi/actions/workflows/deploy.yml)

## 🌐 Xem trực tuyến

👉 [https://tuandung222.github.io/on-policy-distillation-vi/](https://tuandung222.github.io/on-policy-distillation-vi/)

## 📚 Giới thiệu

Dự án này là bản dịch và giải thích tiếng Việt của bài nghiên cứu về **phương pháp GOLD (Generalized On-policy Logit Distillation)** — một phương pháp đột phá cho phép chưng cất tri thức on-policy giữa các mô hình ngôn ngữ lớn (LLM) với tokenizer khác nhau.

### Điểm nổi bật của nghiên cứu

- 🧪 **GOLD Method**: Mở rộng Universal Logit Distillation sang chế độ on-policy
- 🔗 **Cross-Tokenizer**: Chưng cất giữa các họ mô hình khác nhau (Llama → Qwen, Gemma → Phi)
- 🏆 **Vượt trội GRPO**: Đạt hiệu suất gấp 2 lần so với GRPO trên nhiều benchmark

## 🛠️ Công nghệ sử dụng

| Công nghệ | Mô tả |
|-----------|-------|
| [Docusaurus 3.10.1](https://docusaurus.io/) | Framework xây dựng trang tài liệu |
| [KaTeX](https://katex.org/) | Hiển thị công thức toán học |
| [Mermaid](https://mermaid.js.org/) | Sơ đồ và biểu đồ tương tác |
| TypeScript | Cấu hình type-safe |
| GitHub Pages | Triển khai tự động |

## 🚀 Chạy cục bộ

### Yêu cầu

- Node.js >= 20.0
- npm

### Cài đặt

```bash
# Clone repository
git clone https://github.com/tuandung222/on-policy-distillation-vi.git
cd on-policy-distillation-vi

# Cài đặt dependencies
npm install

# Chạy development server
npm start
```

Trình duyệt sẽ tự mở tại `http://localhost:3000/on-policy-distillation-vi/`.

### Build production

```bash
npm run build
```

Kết quả build sẽ nằm trong thư mục `build/`.

### Xem bản build

```bash
npm run serve
```

## 📖 Nội dung

| Chương | Tiêu đề | Mô tả |
|--------|---------|-------|
| 1 | Giới thiệu | Tổng quan về chưng cất tri thức và động lực nghiên cứu |
| 2 | Phương pháp Chưng cất | Nền tảng lý thuyết: off-policy, on-policy, ULD |
| 3 | Thuật toán GOLD | Chi tiết thuật toán GOLD |
| 4 | Thiết lập Thí nghiệm | Cấu hình mô hình, dataset, hyperparameter |
| 5 | Kết quả Thí nghiệm | Phân tích kết quả trên các benchmark |
| 6 | So sánh với GRPO | GOLD vs GRPO |
| 7 | Chưng cất cho Domain | Ứng dụng cho các domain cụ thể |
| 8 | Kết luận | Tóm tắt và hướng nghiên cứu tương lai |

## 📄 Bài viết gốc

- 🤗 [HuggingFace Space — Blogpost on On-Policy Distillation](https://huggingface.co/spaces/HuggingFaceH4/blogpost-on-policy-distillation)
- 📦 [TRL — Transformer Reinforcement Learning](https://huggingface.co/docs/trl)

## 🙏 Ghi công

Nội dung gốc được tạo bởi nhóm **HuggingFace H4**. Bản dịch tiếng Việt này nhằm mục đích giáo dục và phổ biến kiến thức AI cho cộng đồng Việt Nam.

## 📜 Giấy phép

Dự án này được phân phối cho mục đích giáo dục. Nội dung gốc thuộc bản quyền của các tác giả tương ứng.

---

Được xây dựng với ❤️ bởi [tuandung222](https://github.com/tuandung222)

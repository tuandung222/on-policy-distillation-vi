---
sidebar_position: 5
sidebar_label: 'Chương 5: Kết quả Thí nghiệm'
---

# Chương 5: Kết quả Thí nghiệm

Chương này trình bày các kết quả thí nghiệm chi tiết — từ việc xác nhận hiệu quả của GKD đến so sánh GOLD và ULD trong các kịch bản tokenizer khác nhau.

---

## 5.1 GKD với Cùng Tokenizer

Mục tiêu đầu tiên là **xác nhận** triển khai GKD bằng cách đối chiếu với kết quả mà Agarwal et al. đã báo cáo. Chúng tôi tập trung so sánh hiệu suất khi kết hợp on-policy và off-policy thông qua thí nghiệm ablation với năm giá trị $\lambda$ khác nhau.

### Cấu hình thí nghiệm

| Thành phần | Chi tiết |
|:---|:---|
| **Mô hình Teacher** | `Qwen/Qwen3-4B-Instruct-2507` |
| **Mô hình Student** | `Qwen/Qwen2.5-1.5B-Instruct` |
| **Nhiệt độ sinh** | $\gamma = 1$ |
| **Hàm mất mát** | Forward KL divergence ($\beta = 0$) trong $\mathcal{L}_{OD}$ |
| **Giá trị $\lambda$ thử nghiệm** | 0.0, 0.25, 0.5, 0.75, 1.0 |

### Vai trò của tham số $\beta$

Tham số $\beta$ điều khiển **generalized Jensen-Shannon divergence**:

$$\mathcal{D}_{\text{JSD}(\beta)}(p_S, p_T) = \beta \cdot D_{\text{KL}}(p_S \| \pi) + (1-\beta) \cdot D_{\text{KL}}(p_T \| \pi)$$

trong đó:

$$\pi = \beta \cdot p_S + (1-\beta) \cdot p_T$$

- Khi $\beta = 0$: **Forward KL** — student cố gắng bao phủ toàn bộ phân phối của teacher.
- Khi $\beta = 1$: **Reverse KL** — student tập trung vào các mode chính của phân phối teacher.
- Khi $0 < \beta < 1$: kết hợp cả hai hướng, cân bằng giữa bao phủ và tập trung.

### Kết quả Ablation theo $\lambda$

```mermaid
graph LR
    A["λ = 0.0<br/>(Hoàn toàn Off-Policy / SFT)"] --> B["λ = 0.25"]
    B --> C["λ = 0.5"]
    C --> D["λ = 0.75"]
    D --> E["λ = 1.0<br/>(Hoàn toàn On-Policy)"]
    
    style A fill:#ffcccc,stroke:#cc0000
    style B fill:#ffd699,stroke:#cc7700
    style C fill:#ffffcc,stroke:#cccc00
    style D fill:#ccffcc,stroke:#00cc00
    style E fill:#99ff99,stroke:#006600
```

Kết quả xác nhận rằng **chỉ cần một lượng nhỏ dữ liệu on-policy** đã vượt trội so với SFT thuần túy. Hiệu suất cải thiện dần theo $\lambda$, và chế độ **hoàn toàn on-policy** ($\lambda = 1.0$) đạt kết quả tốt nhất.

> **Nhận xét quan trọng:** Ngay cả $\lambda = 0.25$ cũng cải thiện đáng kể so với $\lambda = 0$.

---

## 5.2 Tri thức Teacher được Chưng cất Thành công

Sau khi thử nghiệm nhiều cấu hình, chúng tôi đạt được thiết lập có thể **chưng cất nhất quán trên 80%** hiệu suất teacher trên bài toán Countdown — và kết quả này đúng với nhiều teacher có kích thước khác nhau.

| Mô hình Teacher | Kích thước | Hiệu suất Teacher | Hiệu suất Student sau KD | Tỷ lệ khôi phục |
|:---|:---:|:---:|:---:|:---:|
| Qwen3-4B | 4B | Baseline | > 80% teacher | ✅ Cao |
| Các mô hình khác | Đa dạng | Đa dạng | > 80% teacher | ✅ Cao |

Những kết quả này nhấn mạnh một điểm cơ bản: **hiệu suất của student bị giới hạn bởi năng lực của teacher**. Student không thể vượt qua teacher thông qua chưng cất — nó chỉ có thể tiệm cận hiệu suất của teacher.

```mermaid
graph TD
    T["🎓 Teacher Performance<br/>(Giới hạn trên)"] 
    S["📚 Student Performance<br/>(Sau chưng cất: >80% Teacher)"]
    B["📉 Student Baseline<br/>(Trước chưng cất)"]
    
    T -->|"Giới hạn trên"| S
    B -->|"Cải thiện qua KD"| S
    
    style T fill:#4CAF50,color:#fff
    style S fill:#2196F3,color:#fff
    style B fill:#FF9800,color:#fff
```

---

## 5.3 On-Policy Distillation Hoạt động với Tokenizer Khác nhau

Mặc dù GKD đã khôi phục hơn 80% hiệu suất teacher, nó vẫn **bị giới hạn với các cặp cùng tokenizer**. Để vượt qua ràng buộc này, chúng tôi so sánh **ULD** baseline với **GOLD** trên các cặp student-teacher khác tokenizer.

```mermaid
graph LR
    subgraph "Cùng Tokenizer"
        GKD["GKD<br/>✅ >80% teacher"]
    end
    
    subgraph "Khác Tokenizer"
        ULD["ULD (Baseline)<br/>⚠️ Hạn chế"]
        GOLD["GOLD (Đề xuất)<br/>✅ Hiệu quả"]
    end
    
    GKD -.->|"Mở rộng"| GOLD
    
    style GKD fill:#4CAF50,color:#fff
    style ULD fill:#FF9800,color:#fff
    style GOLD fill:#2196F3,color:#fff
```

---

## 5.4 Độ Tương đồng Tokenizer Ảnh hưởng đến Hiệu suất

**Độ tương đồng tokenizer** quyết định mức độ cần thiết của căn chỉnh chuỗi và căn chỉnh từ vựng. Hiệu suất của GOLD trên Countdown **giảm khi độ tương đồng tokenizer giảm**.

Tuy nhiên, điều quan trọng cần lưu ý: **GOLD ở mức tương đồng 0.64 vẫn vượt trội so với các phương pháp RL**.

```mermaid
graph TD
    A["Độ tương đồng cao<br/>(~1.0)"] -->|"Hiệu suất tốt nhất"| R1["GOLD ≈ GKD"]
    B["Độ tương đồng trung bình<br/>(~0.64)"] -->|"Hiệu suất tốt"| R2["GOLD > RL"]
    C["Độ tương đồng thấp<br/>(~0.0 strict match)"] -->|"Thách thức lớn"| R3["GOLD vẫn hiệu quả<br/>nhờ content matching"]
    
    style A fill:#4CAF50,color:#fff
    style B fill:#FFC107,color:#000
    style C fill:#FF5722,color:#fff
```

---

## 5.5 GOLD Vượt trội so với ULD

Chúng tôi huấn luyện `meta-llama/Llama-3.2-1B-Instruct` (student) với `Qwen/Qwen3-4B-Instruct-2507` (teacher):

### Kết quả so sánh chi tiết

| Phương pháp | Cải thiện so với Baseline | Tỷ lệ khôi phục Teacher | Ghi chú |
|:---|:---:|:---:|:---|
| **GOLD** | **+25%** | **60%** | Hiệu quả vượt trội |
| **ULD** | +5% | 10% | Cải thiện hạn chế |

### Phân tích Tokenizer Similarity

Cặp này có **độ tương đồng 0** theo strict ID match, nhưng phương pháp **token content matching** tăng con số này lên **0.64**.

```mermaid
graph LR
    subgraph "Đo lường Tokenizer Similarity"
        SM["Strict ID Match<br/>Similarity = 0.0"] 
        CM["Content Matching<br/>Similarity = 0.64"]
    end
    
    SM -->|"Bỏ qua nội dung<br/>giống nhau"| LOW["Đánh giá thấp<br/>sự tương đồng thực tế"]
    CM -->|"Nhận diện token<br/>có cùng nghĩa"| HIGH["Phản ánh đúng hơn<br/>sự tương đồng thực tế"]
    
    style SM fill:#FF5722,color:#fff
    style CM fill:#4CAF50,color:#fff
```

> **Ý nghĩa thực tiễn:** Strict ID match có thể đánh giá quá thấp sự tương đồng thực tế giữa các tokenizer từ các họ mô hình khác nhau, trong khi content matching cho kết quả phản ánh chính xác hơn khả năng chưng cất tri thức giữa chúng.

---

## Tổng kết Chương

Các thí nghiệm trong chương này chứng minh ba điều:

1. **On-policy luôn tốt hơn off-policy** — ngay cả với $\lambda$ nhỏ, on-policy đã cải thiện đáng kể.
2. **GKD chưng cất hiệu quả >80% tri thức teacher** — nhưng bị giới hạn bởi cùng tokenizer.
3. **GOLD mở rộng khả năng chưng cất ra khác tokenizer** — vượt trội ULD 5x về tỷ lệ khôi phục hiệu suất teacher (60% vs 10%).

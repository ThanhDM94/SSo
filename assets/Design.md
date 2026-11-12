# 🌿 SON CAKE - HỆ THỐNG QUY CHUẨN THIẾT KẾ (DESIGN SYSTEM)
> **Tài liệu đặc tả quy chuẩn giao diện & tỉ lệ hiển thị (Design Specification)**  
> **Dự án:** Tiệm Bánh SON - Cốm & Bánh Việt  
> **Phiên bản:** 1.2 (Bổ sung Quy chuẩn Image Ratio 16:9 & Responsive Image Scale)  
> **Ngày ban hành:** 10/11/2026  

---

## 1. MỤC TIÊU & TỔNG QUAN PHONG CÁCH
- **Phong cách chủ đạo:** Rõ ràng, thân thiện, mang tính **kể chuyện (storytelling)** mộc mạc, truyền tải nét đẹp văn hóa bánh cổ truyền Hà Nội xưa.
- **Tinh thần thương hiệu:** Giữ gìn tinh hoa làng nghề, tỉ mỉ, ấm áp, tinh tế và gần gũi.

---

## 2. QUY CHUẨN HÌNH ẢNH (IMAGE RATIO 16:9 SPECIFICATION)

### 2.1. Quy cách tỉ lệ ảnh (Aspect Ratio)
- **Tỉ lệ chuẩn bắt buộc:** **`Image ratio: 16:9`** (Chiều ngang 16 đơn vị : Chiều cao 9 đơn vị).
- **Quy tắc hiển thị (Scale & Crop):**
  - Luôn sử dụng `object-fit: cover` kết hợp `width: 100%` và `aspect-ratio: 16 / 9`.
  - Không cố định chiều cao bằng pixel cứng (`height: fixed px`) trên các khối hiển thị hình ảnh để tránh méo hình hoặc sai lệch tỉ lệ khi co giãn màn hình.

### 2.2. Cơ chế Responsive giữ nguyên tỉ lệ trên mọi thiết bị
Khi màn hình thay đổi từ Desktop sang Tablet và Mobile, chiều cao ảnh sẽ tự động co giãn theo công thức:
$$\text{Chiều cao ảnh (Height)} = \text{Chiều rộng khung (Width)} \times \frac{9}{16}$$

| Thiết Bị | Chiều Rộng Khung (Width) | Chiều Cao Tự Động (Height 16:9) | Tỉ Lệ Giữ Nguyên |
| :--- | :---: | :---: | :---: |
| **Desktop 4 Columns** | `260px` | `146.25px` | **16:9** |
| **Tablet 2 Columns** | `360px` | `202.5px` | **16:9** |
| **Mobile 1 Column** | `100% (~340px)` | `191.25px` | **16:9** |
| **Gallery 3 Columns** | `380px` | `213.75px` | **16:9** |

### 2.3. Mã CSS chuẩn hóa hình ảnh:
```css
/* Khung chứa hình ảnh chuẩn 16:9 */
.img-container-16-9,
.product-thumb,
.about-photo-card,
.team-photo-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9; /* Tỉ lệ 16:9 chuẩn */
  overflow: hidden;
  background-color: var(--color-ivory);
}

/* Ảnh bên trong khung */
.img-container-16-9 img,
.product-img,
.about-photo-img,
.team-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;      /* Giữ nguyên độ sắc nét, không méo hình */
  object-position: center;
  display: block;
}
```

---

## 3. QUY CHUẨN MÀU SẮC (COLOR PALETTE)

| Phân Loại | Tên Màu | Mã HEX | Mẫu Màu | Ý Nghĩa & Ứng Dụng |
| :--- | :--- | :--- | :---: | :--- |
| **Main Color** | Xanh Cốm | `#006837` | ![#006837](https://via.placeholder.com/20/006837/006837.png) | Màu sắc đại diện thương hiệu (Cốm non làng Vòng). Dùng cho Primary Buttons, Brand Logo, Tiêu đề nổi bật, Icon chính. |
| **Subcolor** | Vàng Lúa / Hoàng Kim | `#D2A548` | ![#D2A548](https://via.placeholder.com/20/D2A548/D2A548.png) | Màu đậu xanh, bánh phu thê, rơm vàng. Dùng cho Badges, Accent lines, Highlights, Rating stars, Hover states. |
| **White** | Trắng Thuần | `#FFFFFF` | ![#FFFFFF](https://via.placeholder.com/20/FFFFFF/FFFFFF.png) | Màu nền card sản phẩm, popup modal, text trên nền màu tối. |
| **Black / Dark Tone** | Đen Mềm (Soft Black) | `#A0A0A0` | ![#A0A0A0](https://via.placeholder.com/20/A0A0A0/A0A0A0.png) | Dùng cho văn bản thứ cấp, text ghi chú hoặc các chi tiết trung tính trầm. |
| **Stroke** | Đường Viền (Stroke) | `#CECECE` | ![#CECECE](https://via.placeholder.com/20/CECECE/CECECE.png) | Viền phân chia khối, viền card, border input form. |
| **Gray** | Xám Nhẹ (Background/Divider) | `#D9D9D9` | ![#D9D9D9](https://via.placeholder.com/20/D9D9D9/D9D9D9.png) | Dùng cho đường kẻ ngang, placeholder, nền icon trung tính. |

---

## 4. TYPOGRAPHY (KIỂU CHỮ & PHÂN CẤP NỘI DUNG)

### 4.1. Font Families
- **Tiêu đề (Title / Headings):** `Be Vietnam Pro` (Google Fonts) – Nét chữ Việt tiêu chuẩn, tròn trịa, hiện đại nhưng đậm chất bản địa.
- **Nội dung thân trang (Body & Paragraphs):** `Roboto` (Google Fonts) – Dễ đọc, trung tính, tối ưu hiển thị rõ ràng trên mọi độ phân giải màn hình.

### 4.2. Bảng Quy Chuẩn Typography Scale

| Cấp Bậc | Font Family | Font Size | Font Weight | Line Height Ratio | Line Height (px) | Phạm Vi Áp Dụng |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **H0 (Hero Display)** | Be Vietnam Pro | **84px** | Medium (500) | **100%** | `84px` | Tiêu đề lớn nhất trên Hero Banner, Slogan chủ đạo |
| **H1 (Page Title)** | Be Vietnam Pro | **64px** | Bold (700) | **100%** | `64px` | Tiêu đề trang chính, Header section lớn |
| **H2 (Section Title)** | Be Vietnam Pro | **48px** | Bold (700) | **130%** | `62.4px` | Tiêu đề các mục lớn (Sản phẩm, Câu chuyện, Nghệ nhân) |
| **H3 (Subsection Title)** | Be Vietnam Pro | **36px** | Bold (700) | **150%** | `54px` | Tiêu đề nhóm nội dung, Tiêu đề modal |
| **H4 (Card Title)** | Be Vietnam Pro | **24px** | Bold (700) | **150%** | `36px` | Tên sản phẩm, Tên nghệ nhân, Tiêu đề card nhỏ |
| **Subtitle** | Be Vietnam Pro | **24px** | Medium (500) | **150%** | `36px` | Đoạn dẫn nhập dưới tiêu đề, trích dẫn ngắn |
| **Body (Default)** | Roboto | **16px** | Regular (400) | **150%** | `24px` | Văn bản chính, mô tả sản phẩm, bài viết kể chuyện |
| **Subbody (Small/Meta)** | Roboto | **12px** | Regular (400) | **160%** | `19.2px` | Chú thích ảnh, giá đơn vị, tags, bản quyền footer |

---

## 5. STROKE, BORDER & HỆ THỐNG ICON
- **Quy chuẩn độ dày khung viền:** `1px`
- **Mã màu Stroke chuẩn:** `#DDDDDD` (hoặc Stroke Tone `#CECECE`)
- **Kiểu viền:** `solid`
- **Ứng dụng:** Viền thẻ sản phẩm, ô form nhập liệu, đường ngăn cách giỏ hàng.
- **Hệ thống Icon (`.stroke-icon`):** Toàn bộ icon trên website sử dụng **SVG nét mảnh (Regular `stroke-width: 1.5`)** và **bo tròn (`stroke-linecap: round; stroke-linejoin: round; fill: none`)**, không sử dụng icon emoji hay icon dạng 3D.

---

## 6. SPACING SYSTEM (KHOẢNG CÁCH / PADDING)

Quy chuẩn bước nhảy Padding sử dụng cố định theo 6 cấp bậc:
- **P1:** `8px`
- **P2:** `16px`
- **P3:** `24px`
- **P4:** `48px`
- **P5:** `84px` (Đã tăng +40% hai lần lên **`165px`** cho padding dọc giữa các section nội dung)
- **P6:** `124px` (Đã tăng +40% hai lần lên **`244px`** cho padding dọc Review Section)

---

## 7. MARGIN & ĐỘ RỘNG THÀNH PHẦN (15% SCREEN VIEW)

- **Căn lề hai bên (Horizontal Margin):** **`15vw`** mỗi bên màn hình.
- **Độ rộng nội dung thực tế (Content Width):** Chiếm chính xác **`70% Screen View`** ($100\% - 30\% = 70\text{vw}$).
- **Responsive:** Co giãn linh hoạt theo tỷ lệ màn hình thực tế, tự động chuyển về `16px` trên thiết bị di động để giữ trọn trải nghiệm đọc.

---

## 8. BORDER RADIUS (BO GÓC)
- **8px:** Nút phụ, input form, tag nguyên liệu, thumbnail
- **12px:** Nút hành động chính (Primary CTA), khung review
- **24px:** Thẻ sản phẩm lớn, ảnh nghệ nhân, khung modal đặt hàng

---

## 9. QUY CHUẨN HEADER MENU (FLOATING HEADER) & HERO BANNER
- **Header Menu (Floating trên Hero Banner):**
  - **Vị trí:** `position: fixed; top: 0; left: 0; width: 100%;` — luôn nổi lên trên Hero Banner.
  - **Sub-Menu (Topbar):** Padding trên dưới **`12px`**.
  - **Main-Menu:** Padding trên dưới **`24px`**.
  - **Hiệu ứng cuộn (Background Opacity):**
    - Khi ở đầu trang (`Top`): Toàn bộ Header không có background-box (`opacity = 0%`, chữ sáng nổi bật trên nền banner).
    - Khi cuộn xuống (`Scrolled`): Nền background-box bật lên (`opacity = 100%` với Sub-menu `#F3ECE0` và Main-menu `#FFFFFF`, chữ chuyển về màu tối chuẩn).
  - **Bố cục (Layout):**
    - **Bên trái:** Ảnh biểu tượng Logo thương hiệu (loại bỏ text, chiều cao tổng thể chuẩn `84px`).
    - **Bên phải:** Toàn bộ thông tin điều hướng gồm 4 Dropdown Sản phẩm, nút **Icon Giỏ hàng** (`.header-cart-btn` kèm `#cartBadge`) và nút **Icon Menu**.
- **Hero Banner:**
  - **Chiều cao:** **`94vh`** (`94% screen view`).
  - **Bố cục nội dung đáy (`align-items: end`, hệ lưới 8 cột):**
    - **Góc dưới bên trái (3 cột):** Hiển thị **4 hình ảnh preview nhỏ gọn trên 1 hàng** (`grid-template-columns: repeat(4, 1fr)`, tỉ lệ `16:9`, không tiêu đề ảnh và không text phụ), ảnh đang hiển thị được **highlight bằng viền màu phụ (`--color-sub` `#D2A548`)**.
    - **Góc dưới bên phải (4 cột):** Title và Sub-Title của slide hiện tại (**căn lề trái `text-align: left`**) cùng nút CTA **Mua Bánh Ngay** cuộn mượt xuống phần danh mục sản phẩm (`#products`).
  - **Điều khiển:** Loại bỏ icon Next/Back, tương tác trực tiếp trên 4 ảnh Preview và hỗ trợ chạm vuốt Mobile.
- **Category List & Product Cards:**
  - **Background-box của Category (`.product-section`):** Sử dụng ảnh nền màu nước `https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/category_bg.jpg` (`center bottom / cover no-repeat`) qua lớp `::before` với **`opacity: 0.48` (`48%`)**, kết hợp lớp hộp nội dung `.category-highlight-box` nền trắng mờ nhẹ giữ độ tương phản chữ.
  - **Khối Câu chuyện & Sản phẩm nổi bật (`.category-highlight-box`):** Với mỗi danh mục (kể cả `all`), hiển thị phần mô tả câu chuyện danh mục ở cột trái và 1 thẻ **Sản phẩm nổi bật nhất** (`Nổi bật nhất`) ở cột phải.
  - **Cấu trúc Card sản phẩm:** Đầy đủ **Image (`16:9`), Name, Detail, Price**, **CTA Chọn món** (thêm vào giỏ) và **CTA Mua ngay** (mở thẳng Form đặt bánh `#checkoutModal`).
  - **Form đặt mua bánh (`#checkoutForm` & `#bookingForm` - "Gửi Yêu Cầu Đặt Bánh"):** Đầy đủ 9 trường thông tin gồm **Họ tên**, **Số điện thoại**, **Email**, **Địa chỉ chi tiết**, **Loại bánh**, **Tên bánh**, **Số lượng**, **Ngày nhận hàng** và **Lời nhắn kèm theo** (liên kết động Loại bánh → Tên bánh; tự động điền sẵn theo bánh vừa bấm **Mua ngay**).
  - **Hiệu ứng hover ảnh trên Desktop (`min-width: 992px` & `pointer: fine`):** Khi hover vào `.product-thumb`, ảnh tự động chuyển đổi tuần tự giữa các ảnh của sản phẩm sau mỗi **`3s`** (`3000ms`), tự hoàn nguyên ảnh chính khi rời chuột; không kích hoạt trên Mobile/Touch.
- **About Us (`#about`):**
  - **Bố cục 2 phần (hệ lưới 12 cột):** Bên trái là **Content (`4 cột`, cột 1–4)**, ở giữa **cách nhau `2 cột` (cột 5–6)**, bên phải là **Video giới thiệu (`6 cột`, cột 7–12, tệp `videos/about_son.mp4`, tỉ lệ `16:9`, bo góc `24px`, poster `https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/story_artisan.png`)**.
  - **Nội dung Content:** Gồm **Title** (`Be Vietnam Pro`) và **Detail** (`Roboto`, cỡ chữ **`20px`**, giới hạn tối đa **`4 dòng`** bằng `-webkit-line-clamp: 4`).
- **Team Member (`#team`):**
  - **Ảnh nghệ nhân:** Sử dụng ảnh chân dung người thật (`https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.comteam_son.jpg`, `https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.comteam_hung.jpg`, `https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.comteam_thao.jpg`, `https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.comteam_duc.jpg`) với khung **tỉ lệ vuông `1:1`** (`aspect-ratio: 1 / 1`, bo góc `24px`, `object-position: center top`).
  - **Card không nền:** Bỏ `background-box`, viền và đổ bóng bao quanh `.team-card` (`background: transparent; border: none;`).
- **Chia sẻ của thực khách (`#reviews`):**
  - **Nền section:** Sử dụng ảnh nền `https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4369.jpg` (`center / cover no-repeat`) phủ lớp `.user-story-overlay` có **blur (`blur(8px)`)** và **mask màu đen (`rgba(0, 0, 0, 0.6)` — opacity 60%)** để làm nổi bật nội dung phía trên.
  - **Thông tin Card:** Hiển thị **Hình ảnh sản phẩm** (`.testimonial-product-thumb`, tỉ lệ `16:9`), **Rating** (5 sao nét mảnh), **Comment** và **Tên người đánh giá**.
- **Những câu hỏi thường gặp (`#faq` - ngay trước Form đặt bánh `#booking`):**
  - **Bố cục:** Căn giữa toàn bộ section (`.faq-header` với `text-align: center` cùng `.section-desc`, và danh sách `.faq-list` **1 hàng dọc / 1 cột** `max-width: 780px; margin: 48px auto 0`).
  - **Tương tác Dropdown (Accordion):** Các câu hỏi đóng/mở dạng dropdown mượt mà (`initFaqAccordion`) kèm mũi tên xoay `.stroke-icon`.
- **Footer (`.site-footer`):**
  - **Cột thông tin thương hiệu:** Hiển thị **Logo thương hiệu** (`https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/logo.png`, chiều cao `64px`) phía trên tiêu đề và mô tả thương hiệu.
  - **Đăng ký theo dõi cửa hàng:** Tích hợp biểu mẫu `#footerNewsletterForm` với `<label for="footerFollowEmail">` ("Theo dõi thông tin cửa hàng"), ô nhập email và nút gửi kèm icon nét mảnh (`stroke-icon`).

---

## 10. BẢNG MẪU BIẾN CSS TỔNG HỢP

```css
:root {
  /* Colors */
  --color-main: #006837;
  --color-sub: #D2A548;
  --color-white: #FFFFFF;
  --color-black: #A0A0A0;
  --color-stroke: #CECECE;
  --color-stroke-alt: #DDDDDD;
  --color-gray: #D9D9D9;

  /* Image Ratio */
  --image-ratio: 16 / 9;

  /* Typography Families */
  --font-title: 'Be Vietnam Pro', sans-serif;
  --font-body: 'Roboto', sans-serif;

  /* Typography Scale */
  --fs-h0: 84px;  --fw-h0: 500;  --lh-h0: 100%;
  --fs-h1: 64px;  --fw-h1: 700;  --lh-h1: 100%;
  --fs-h2: 48px;  --fw-h2: 700;  --lh-h2: 130%;
  --fs-h3: 36px;  --fw-h3: 700;  --lh-h3: 150%;
  --fs-h4: 24px;  --fw-h4: 700;  --lh-h4: 150%;
  --fs-subtitle: 24px; --fw-subtitle: 500; --lh-subtitle: 150%;
  --fs-body: 16px;     --fw-body: 400;     --lh-body: 150%;
  --fs-subbody: 12px;  --fw-subbody: 400;  --lh-subbody: 160%;

  /* Spacing */
  --pad-8: 8px;
  --pad-16: 16px;
  --pad-24: 24px;
  --pad-48: 48px;
  --pad-84: 84px;
  --pad-124: 124px;
  --section-pad-y: 165px;
  --section-pad-y-lg: 244px;

  /* Screen Margin */
  --screen-margin: 15vw;

  /* Border & Radius */
  --stroke-width: 1px;
  --radius-8: 8px;
  --radius-12: 12px;
  --radius-24: 24px;
}
```

---
*Tài liệu được lưu trữ tại:*  
- [`Design.md`](file:///d:/Dự%20án/SON/Design.md)  
- [`assets/Design.md`](file:///d:/Dự%20án/SON/assets/Design.md)

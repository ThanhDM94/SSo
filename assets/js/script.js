/**
 * SON CAKE - CỐM & BÁNH VIỆT
 * Main Interactive Script
 * - Hero Carousel with Touch/Swipe & Auto-slide
 * - Product Catalog Filter & Quick View Modal
 * - Full E-commerce Flow (Cart Drawer, Quantity Ctrl, Checkout Modal & Order confirmation)
 * - User Story Testimonial Slider
 * - Booking Form Validation
 * - Scroll Reveal Animations
 */

// 0. STROKE ICON HELPER (REGULAR 1.5PX, ROUNDED CAPS & JOINS)
const STROKE_ICONS = {
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  minus: '<path d="M5 12h14"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
  sparkles: '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
  book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>'
};

function getStrokeIcon(name, size = 18) {
  const paths = STROKE_ICONS[name] || '';
  return `<svg class="stroke-icon" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true">${paths}</svg>`;
}

// 1. DATA REPOSITORY: 8 SẢN PHẨM TRUYỀN THỐNG (BÁM SÁT WIREFRAME 4x2)
const PRODUCTS_DATA = [
  {
    id: 'banh-com-moc',
    name: 'Bánh Cốm Mộc Làng Vòng',
    category: 'banh-com',
    categoryName: 'Bánh Cốm',
    price: 30000,
    unit: 'chiếc',
    image: 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/product_banh_com.png',
    images: ['https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/product_banh_com.png', 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/hero_banh_com.png', 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4369.jpg'],
    desc: 'Vỏ nếp cái hoa vàng quện cốm non xanh mướt, ôm trọn nhân đậu xanh cốt dừa ngọt thanh thoang thoảng hương bưởi tự nhiên.',
    story: 'Mỗi chiếc bánh cốm mộc Son Cake được các nghệ nhân đồ và xào kĩ trên lửa nhỏ vào 4 giờ sáng, gói ghém trong lớp lá chuối tươi xanh mang trọn phong vị mùa thu Hà Nội.',
    ingredients: ['Cốm nếp mộc', 'Đậu xanh tuyển', 'Cốt dừa béo', 'Hương hoa bưởi']
  },
  {
    id: 'banh-dau-xanh-rong-vang',
    name: 'Bánh Đậu Xanh Hoàng Kim',
    category: 'banh-dau-xanh',
    categoryName: 'Bánh Đậu Xanh',
    price: 45000,
    unit: 'hộp 12 viên',
    image: 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4371.jpg',
    images: ['https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4371.jpg', 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4374.jpg', 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4414.jpg'],
    desc: 'Đậu xanh lòng vàng rang thơm, xay mịn tan ngay nơi đầu lưỡi với độ ngọt dịu thanh tao, thơm nồng mùi mỡ hoa tinh tế.',
    story: 'Bánh đậu xanh Son Cake kế thừa bí quyết phối trộn bột đậu xanh nguyên chất và đường phèn thanh khiết, thưởng trà sen thì không gì sánh bằng.',
    ingredients: ['Đậu xanh lòng vàng', 'Đường phèn kết tinh', 'Dầu thực vật cao cấp']
  },
  {
    id: 'banh-phu-the-truyen-thong',
    name: 'Bánh Phu Thê (Xu Xê) Son',
    category: 'banh-phu-the',
    categoryName: 'Bánh Phu Thê',
    price: 35000,
    unit: 'cặp 2 chiếc',
    image: 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4380.jpg',
    images: ['https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4380.jpg', 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4400.jpg', 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4417.jpg'],
    desc: 'Vỏ bánh trong vắt dai giòn từ bột dong riềng và hạt dành dành, nhân đậu xanh hạt sen biểu trưng cho tình duyên gắn kết mặn nồng.',
    story: 'Gói trọn ước nguyện sum vầy và thủy chung của đôi lứa. Sắc vàng hổ phách tự nhiên điểm xuyết sợi dừa tươi giòn sần sật.',
    ingredients: ['Tinh bột dong riềng', 'Màu quả dành dành', 'Hạt sen Huế', 'Dừa nạo']
  },
  {
    id: 'banh-gai-tu-tru',
    name: 'Bánh Gai Lá Gai Cổ Truyền',
    category: 'banh-gai',
    categoryName: 'Bánh Gai',
    price: 35000,
    unit: 'chiếc',
    image: 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4387.jpg',
    images: ['https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4387.jpg', 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4400.jpg', 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/story_artisan.png'],
    desc: 'Vỏ bánh đen nhánh từ lá gai giã nhuyễn quyện mật mía, nhân bùi bùi hạt sen, thịt mỡ ướp đường và dừa nạo thơm ngậy.',
    story: 'Lá gai tươi hái từ triền đồi được phơi khô rồi ninh kĩ thấu suốt một ngày một đêm để tạo nên màu đen tuyền huyền thoại cùng hương thơm nồng nàn.',
    ingredients: ['Lá gai phơi sương', 'Nếp cái hoa vàng', 'Mật mía Nghệ An', 'Mỡ đường']
  },
  {
    id: 'banh-com-xao-la-dua',
    name: 'Bánh Cốm Xào Dừa Non',
    category: 'banh-com',
    categoryName: 'Bánh Cốm',
    price: 35000,
    unit: 'chiếc',
    image: 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4395.jpg',
    images: ['https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4395.jpg', 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/product_banh_com.png', 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4374.jpg'],
    desc: 'Từng hạt cốm dẻo thơm được xào mềm dẻo bóng bẩy, rắc dừa nạo tươi sợi mảnh bùi bùi, ngọt thanh nhẹ nhàng.',
    story: 'Món quà vặt thanh tao gắn liền với kí ức của bao thế hệ người Hà Nội mỗi độ gió heo may ùa về.',
    ingredients: ['Cốm non đầu mùa', 'Dừa non bào sợi', 'Nước cốt dừa', 'Lá dứa']
  },
  {
    id: 'che-lam-pho-co',
    name: 'Chè Lam Gừng Già Phố Cổ',
    category: 'banh-khac',
    categoryName: 'Bánh Khác',
    price: 40000,
    unit: 'thanh 200g',
    image: 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4404.jpg',
    images: ['https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4404.jpg', 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/story_artisan.png', 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4410.jpg'],
    desc: 'Vị dẻo bùi của bột nếp nướng thơm lừng kết hợp vị cay ấm nồng của gừng già và ngọt dịu của mật mía nguyên chất.',
    story: 'Thức quà ấm áp xua tan cái lạnh đông giá, nhấp một ngụm trà đặc rồi cắn miếng chè lam thơm cay rộn rã.',
    ingredients: ['Bột nếp bỏng', 'Mật mía Kim Bảng', 'Gừng già đập dập', 'Lạc rang giòn']
  },
  {
    id: 'banh-khao-hat-sen',
    name: 'Bánh Khảo Hạt Sen Cung Đình',
    category: 'banh-khac',
    categoryName: 'Bánh Khác',
    price: 50000,
    unit: 'hộp 250g',
    image: 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4410.jpg',
    images: ['https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4410.jpg', 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4414.jpg', 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4371.jpg'],
    desc: 'Bột nếp ủ hương hoa bưởi nén vuông vức, nhân hạt sen ngào đường thơm phức, cắn một miếng tan xốp êm đềm.',
    story: 'Được chế biến theo công thức bánh tế lễ tiến vua xưa kia, tỉ mỉ từ khâu hạ thổ bột đến lúc đóng khuôn thủ công.',
    ingredients: ['Bột nếp hạ thổ', 'Hạt sen hồ Tây', 'Đường cát trắng', 'Hương hoa bưởi']
  },
  {
    id: 'hop-qua-ky-uc-ha-thanh',
    name: 'Hộp Quà "Ký Ức Hà Thành"',
    category: 'hop-qua',
    categoryName: 'Hộp Quà Biếu',
    price: 260000,
    unit: 'hộp quà sang trọng',
    image: 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4417.jpg',
    images: ['https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4417.jpg', 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4414.jpg', 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4369.jpg'],
    desc: 'Bộ sưu tập thượng hạng gồm 4 bánh cốm mộc, 2 bánh phu thê, 1 hộp bánh đậu xanh và trà sen cổ truyền cao cấp.',
    story: 'Gói trọn nghĩa tình và tinh hoa ẩm thực đất kinh kỳ, thiết kế hộp quà họa tiết sơn mài mộc mạc đẳng cấp để biếu tặng người thương quý.',
    ingredients: ['Đa dạng bánh truyền thống', 'Trà sen ướp hoa tươi', 'Hộp quà cao cấp']
  }
];

const CATEGORY_HIGHLIGHTS_DATA = {
  'all': {
    badge: 'Tinh hoa ba thập kỷ',
    title: 'Hồn Quà Kinh Kỳ Từ Hạt Nếp Non',
    story: 'Hơn ba mươi năm qua, tiệm bánh SON gìn giữ nhịp bếp than hồng từ 4 giờ sáng để chắt chiu hương thơm thảo của cốm non, đậu xanh lòng vàng, mật mía và lá sen hồ Tây vào từng thức bánh mộc mạc.',
    craftNote: '100% nguyên liệu tự nhiên · Làm tươi mỗi sáng',
    highlightProductId: 'banh-com-moc'
  },
  'banh-com': {
    badge: 'Câu chuyện Bánh Cốm',
    title: 'Hương Thu Làng Vòng Trong Từng Nếp Lá',
    story: 'Mỗi mùa lúa nếp cái hoa vàng trổ đòng, hạt cốm non đầu vụ được rang trên chảo gang và giã tay giữ nguyên màu xanh ngọc tự nhiên. Khi xào quyện đường phèn và nhân đậu xanh cốt dừa, từng chiếc bánh gợi trọn chiều thu phố Hàng Than xưa.',
    craftNote: 'Đặc sản trứ danh Phố Hàng Than',
    highlightProductId: 'banh-com-moc'
  },
  'banh-dau-xanh': {
    badge: 'Câu chuyện Bánh Đậu Xanh',
    title: 'Vị Thanh Tao Bên Chén Trà Sen Sớm',
    story: 'Những hạt đậu xanh lòng vàng được đãi sạch vỏ, rang nhỏ lửa cho dậy mùi thơm bùi rồi xay mịn như lụa. Phối cùng đường phèn kết tinh theo tỷ lệ gia truyền, từng viên bánh tan êm nơi đầu lưỡi bên ấm trà sen ướp xổi.',
    craftNote: 'Rang xay mịn mượt · Tan êm đầu lưỡi',
    highlightProductId: 'banh-dau-xanh-rong-vang'
  },
  'banh-phu-the': {
    badge: 'Câu chuyện Bánh Phu Thê',
    title: 'Sắc Vàng Hổ Phách & Lời Chúc Trăm Năm',
    story: 'Từ tinh bột dong riềng lọc kỹ hòa cùng sắc vàng tự nhiên của quả dành dành, lớp vỏ trong veo ôm trọn nhân đậu xanh hạt sen và sợi dừa giòn sần sật. Bao đời nay, thức bánh ấy vẫn là tín vật hỷ sự mang lời chúc duyên lành son sắt.',
    craftNote: 'Tín vật hỷ sự · Màu dành dành tự nhiên',
    highlightProductId: 'banh-phu-the-truyen-thong'
  },
  'banh-gai': {
    badge: 'Câu chuyện Bánh Gai',
    title: 'Đậm Đà Vị Lá Gai Phơi Sương & Mật Mía',
    story: 'Lá gai tươi hái từ triền đồi được phơi khô, ninh nhừ nhiều giờ liền rồi giã nhuyễn cùng bột nếp cái hoa vàng và mật mía sánh quyện. Bên trong lớp vỏ đen óng là nhân đậu xanh hạt sen béo bùi, gói gọn trong tàu lá chuối khô thơm nồng.',
    craftNote: 'Lá gai ninh kỹ · Mật mía nguyên chất',
    highlightProductId: 'banh-gai-tu-tru'
  },
  'hop-qua': {
    badge: 'Câu chuyện Hộp Quà Biếu',
    title: 'Trao Gửi Ký Ức Hà Thành Trang Nhã',
    story: 'Lấy cảm hứng từ những tráp quà cổ truyền đất kinh kỳ, mỗi hộp quà SON được sắp đặt hài hòa giữa bánh cốm mộc, bánh phu thê, bánh đậu xanh và trà sen ướp hoa tươi — món quà tri ân ấm áp dâng tặng gia đình và đối tác.',
    craftNote: 'Thiết kế trang nhã · Kèm trà sen ướp hoa',
    highlightProductId: 'hop-qua-ky-uc-ha-thanh'
  },
  'banh-khac': {
    badge: 'Câu chuyện Thức Quà Cổ Truyền',
    title: 'Ấm Áp Hương Gừng & Nếp Nướng Phố Cổ',
    story: 'Từ thanh chè lam gừng già ấm nồng ngày gió lạnh đến miếng bánh khảo hạ thổ ủ hương hoa bưởi tinh tế, mỗi thức bánh xưa đều lưu giữ nét tài hoa và sự kiên nhẫn của đôi tay người làm nghề đất Bắc.',
    craftNote: 'Công thức gia truyền · Hương hoa bưởi tự nhiên',
    highlightProductId: 'banh-khao-hat-sen'
  }
};

// 2. STATE MANAGEMENT (SHOPPING CART & LOCAL STORAGE)
let cart = [];

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('son_cake_cart');
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    console.warn('Could not read cart from localStorage', e);
  }
  updateCartUI();
}

function saveCartToStorage() {
  try {
    localStorage.setItem('son_cake_cart', JSON.stringify(cart));
  } catch (e) {
    console.warn('Could not save cart', e);
  }
}

function addToCart(productId, quantity = 1) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      unit: product.unit,
      image: product.image,
      quantity: quantity
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`Đã thêm "${product.name}" vào giỏ bánh!`);
}

function updateCartItemQty(productId, delta) {
  const index = cart.findIndex(item => item.id === productId);
  if (index > -1) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCartToStorage();
    updateCartUI();
  }
}

function removeCartItem(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCartToStorage();
  updateCartUI();
}

function calculateCartTotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN').format(amount) + ' ₫';
}

function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartTotalAmount = document.getElementById('cartTotalAmount');
  const cartEmptyState = document.getElementById('cartEmptyState');
  const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (badge) {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  }
  const sideCartCount = document.getElementById('sideCartCount');
  if (sideCartCount) {
    sideCartCount.textContent = totalCount;
  }

  if (cartTotalAmount) {
    cartTotalAmount.textContent = formatCurrency(calculateCartTotal());
  }

  if (!cartItemsList) return;

  if (cart.length === 0) {
    cartItemsList.innerHTML = '';
    if (cartEmptyState) cartEmptyState.style.display = 'block';
    if (cartCheckoutBtn) cartCheckoutBtn.disabled = true;
    return;
  }

  if (cartEmptyState) cartEmptyState.style.display = 'none';
  if (cartCheckoutBtn) cartCheckoutBtn.disabled = false;

  cartItemsList.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/product_banh_com.png'">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatCurrency(item.price)} <span style="font-size:0.75rem; color:#888;">/${item.unit}</span></div>
        <div class="cart-qty-ctrl">
          <button class="cart-qty-btn" onclick="updateCartItemQty('${item.id}', -1)" aria-label="Giảm">${getStrokeIcon('minus', 12)}</button>
          <span class="cart-item-qty">${item.quantity}</span>
          <button class="cart-qty-btn" onclick="updateCartItemQty('${item.id}', 1)" aria-label="Tăng">${getStrokeIcon('plus', 12)}</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeCartItem('${item.id}')" title="Xóa món" aria-label="Xóa món">${getStrokeIcon('x', 15)}</button>
    </div>
  `).join('');
}

// 3. UI CONTROLS: DRAWER & MODALS
function openSideNav() {
  document.getElementById('sideNavOverlay')?.classList.add('open');
  document.getElementById('sideNavDrawer')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSideNav() {
  document.getElementById('sideNavOverlay')?.classList.remove('open');
  document.getElementById('sideNavDrawer')?.classList.remove('open');
  document.body.style.overflow = '';
}

function filterAndScroll(category) {
  closeSideNav();
  // Kích hoạt nút filter tương ứng
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-category') === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderProducts(category);
}

function openCart() {
  document.getElementById('cartOverlay')?.classList.add('open');
  document.getElementById('cartDrawer')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartOverlay')?.classList.remove('open');
  document.getElementById('cartDrawer')?.classList.remove('open');
  document.body.style.overflow = '';
}

let checkoutMode = 'direct';

function getUniqueProductCategories() {
  const seen = new Map();
  PRODUCTS_DATA.forEach(p => {
    if (!seen.has(p.category)) {
      seen.set(p.category, p.categoryName);
    }
  });
  return Array.from(seen.entries()).map(([value, label]) => ({ value, label }));
}

function getTodayLocalISO() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function syncCategoryAndProductSelects(catSelectId, prodSelectId, categoryValue, productId) {
  const catSelect = document.getElementById(catSelectId);
  const prodSelect = document.getElementById(prodSelectId);
  if (!catSelect || !prodSelect) return;

  const categories = getUniqueProductCategories();
  catSelect.innerHTML = categories
    .map(c => `<option value="${c.value}">${c.label}</option>`)
    .join('');

  const targetCategory = categories.some(c => c.value === categoryValue)
    ? categoryValue
    : categories[0]?.value;
  if (targetCategory) catSelect.value = targetCategory;

  const matchingProducts = PRODUCTS_DATA.filter(p => p.category === catSelect.value);
  const optionsSource = matchingProducts.length ? matchingProducts : PRODUCTS_DATA;
  prodSelect.innerHTML = optionsSource
    .map(p => `<option value="${p.id}">${p.name} (${formatCurrency(p.price)}/${p.unit})</option>`)
    .join('');

  if (productId && optionsSource.some(p => p.id === productId)) {
    prodSelect.value = productId;
  } else if (optionsSource[0]) {
    prodSelect.value = optionsSource[0].id;
  }
}

function populateCheckoutSelects(categoryValue, productId) {
  syncCategoryAndProductSelects('buyerCategory', 'buyerProduct', categoryValue, productId);
}

function initDateInputMinToday(dateInputId) {
  const dateInput = document.getElementById(dateInputId);
  if (!dateInput) return;
  const today = getTodayLocalISO();
  dateInput.min = today;
  if (!dateInput.value || dateInput.value < today) {
    dateInput.value = today;
  }
}

function renderCheckoutSummaryBox() {
  const summaryBox = document.getElementById('checkoutSummaryBox');
  if (!summaryBox) return;

  if (checkoutMode === 'cart' && cart.length > 0) {
    summaryBox.innerHTML = `
      <div style="background:#FDFBF7; padding:1rem; border-radius:0.75rem; border:1px solid rgba(44,34,30,0.1); margin-bottom:1rem;">
        <div style="font-weight:600; font-size:0.9rem; margin-bottom:0.5rem; color:#006837;">Đơn bánh từ giỏ hàng (${cart.reduce((s, i) => s + i.quantity, 0)} món):</div>
        <div style="max-height:140px; overflow-y:auto; font-size:0.85rem; display:flex; flex-direction:column; gap:0.35rem;">
          ${cart.map(i => `
            <div style="display:flex; justify-content:space-between;">
              <span>${i.name} x <strong>${i.quantity}</strong></span>
              <span>${formatCurrency(i.price * i.quantity)}</span>
            </div>
          `).join('')}
        </div>
        <div style="display:flex; justify-content:space-between; margin-top:0.75rem; padding-top:0.5rem; border-top:1px dashed #ccc; font-weight:bold; color:#006837;">
          <span>Tổng thanh toán:</span>
          <span style="font-size:1.1rem;">${formatCurrency(calculateCartTotal())}</span>
        </div>
      </div>
    `;
    return;
  }

  const prodSelect = document.getElementById('buyerProduct');
  const qtyInput = document.getElementById('buyerQuantity');
  const product = PRODUCTS_DATA.find(p => p.id === prodSelect?.value) || PRODUCTS_DATA[0];
  const qty = Math.max(1, parseInt(qtyInput?.value || '1', 10) || 1);
  if (!product) return;

  summaryBox.innerHTML = `
    <div style="background:#FDFBF7; padding:1rem; border-radius:0.75rem; border:1px solid rgba(44,34,30,0.1); margin-bottom:1rem;">
      <div style="font-weight:600; font-size:0.9rem; margin-bottom:0.4rem; color:#006837;">Thông tin bánh đang chọn mua:</div>
      <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.9rem; gap:0.75rem;">
        <span><strong>${product.name}</strong> (${product.categoryName}) x <strong>${qty}</strong></span>
        <span style="font-weight:700; color:#006837; font-size:1.05rem; white-space:nowrap;">${formatCurrency(product.price * qty)}</span>
      </div>
    </div>
  `;
}

function initCheckoutDateInput() {
  initDateInputMinToday('buyerDeliveryDate');
}

function openBuyNowModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId) || PRODUCTS_DATA[0];
  if (!product) return;

  checkoutMode = 'direct';
  populateCheckoutSelects(product.category, product.id);
  const qtyInput = document.getElementById('buyerQuantity');
  if (qtyInput) qtyInput.value = '1';
  initCheckoutDateInput();
  renderCheckoutSummaryBox();

  document.getElementById('modalOverlay')?.classList.add('open');
  document.getElementById('checkoutModal')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Giỏ hàng của bạn đang trống!');
    return;
  }
  closeCart();
  checkoutMode = 'cart';

  const firstItem = PRODUCTS_DATA.find(p => p.id === cart[0].id) || PRODUCTS_DATA[0];
  if (firstItem) {
    populateCheckoutSelects(firstItem.category, firstItem.id);
  }
  const qtyInput = document.getElementById('buyerQuantity');
  if (qtyInput) {
    qtyInput.value = String(cart.reduce((s, i) => s + i.quantity, 0));
  }
  initCheckoutDateInput();
  renderCheckoutSummaryBox();

  document.getElementById('modalOverlay')?.classList.add('open');
  document.getElementById('checkoutModal')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  document.getElementById('modalOverlay')?.classList.remove('open');
  document.getElementById('checkoutModal')?.classList.remove('open');
  document.body.style.overflow = '';
}

function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const quickViewContent = document.getElementById('quickViewContent');
  if (quickViewContent) {
    quickViewContent.innerHTML = `
      <div style="display:grid; grid-template-columns:1fr; gap:1.5rem;" class="md:grid-cols-2">
        <div style="border-radius:1rem; overflow:hidden; aspect-ratio:16/9; width:100%;">
          <img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover; display:block;" onerror="this.src='https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/product_banh_com.png'">
        </div>
        <div>
          <span style="display:inline-block; background:rgba(0,104,55,0.1); color:#006837; padding:3px 10px; border-radius:999px; font-size:0.75rem; font-weight:600; margin-bottom:0.5rem;">
            ${product.categoryName}
          </span>
          <h3 style="font-family:'Playfair Display', serif; font-size:1.5rem; color:#2C221E; margin-bottom:0.5rem;">
            ${product.name}
          </h3>
          <div style="font-size:1.35rem; font-weight:700; color:#006837; margin-bottom:1rem;">
            ${formatCurrency(product.price)} <span style="font-size:0.85rem; font-weight:normal; color:#6B5B54;">/ ${product.unit}</span>
          </div>
          <p style="font-size:0.95rem; color:#444; line-height:1.6; margin-bottom:1rem;">
            ${product.story}
          </p>
          <div style="margin-bottom:1.5rem;">
            <div style="font-size:0.8rem; font-weight:600; color:#2C221E; text-transform:uppercase; margin-bottom:0.35rem;">Nguyên liệu chọn lọc:</div>
            <div style="display:flex; flex-wrap:wrap; gap:0.4rem;">
              ${product.ingredients.map(ing => `<span style="display:inline-flex; align-items:center; gap:5px; background:#F3ECE0; color:#2C221E; font-size:0.75rem; padding:4px 9px; border-radius:6px;">${getStrokeIcon('leaf', 13)} <span>${ing}</span></span>`).join('')}
            </div>
          </div>
          <button class="btn-primary" style="width:100%;" onclick="addToCart('${product.id}', 1); closeQuickView();">
            Thêm vào giỏ bánh (${formatCurrency(product.price)})
          </button>
        </div>
      </div>
    `;
  }

  document.getElementById('modalOverlay')?.classList.add('open');
  document.getElementById('quickViewModal')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  document.getElementById('modalOverlay')?.classList.remove('open');
  document.getElementById('quickViewModal')?.classList.remove('open');
  document.body.style.overflow = '';
}

// 4. TOAST NOTIFICATION
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toastNotice');
  const toastText = document.getElementById('toastNoticeText');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// 5. RENDER PRODUCT CATALOG, CATEGORY HIGHLIGHT STORY & HOVER IMAGE SWITCH (DESKTOP)
const desktopHoverQuery = window.matchMedia('(min-width: 992px) and (hover: hover) and (pointer: fine)');

function clearThumbHoverTimers(container) {
  if (!container) return;
  container.querySelectorAll('.product-thumb').forEach(thumb => {
    if (thumb._hoverTimer) {
      clearInterval(thumb._hoverTimer);
      thumb._hoverTimer = null;
    }
    if (thumb._swapTimeout) {
      clearTimeout(thumb._swapTimeout);
      thumb._swapTimeout = null;
    }
  });
}

function setupCardImageHoverSlideshow(container) {
  if (!container) return;
  container.querySelectorAll('.product-thumb[data-product-id]').forEach(thumb => {
    const productId = thumb.getAttribute('data-product-id');
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    const imgEl = thumb.querySelector('.product-img');
    if (!product || !imgEl) return;

    const gallery = (product.images && product.images.length > 1) ? product.images : [product.image];
    if (gallery.length < 2) return;

    let currentImgIdx = 0;

    const swapToImage = nextIdx => {
      currentImgIdx = nextIdx;
      if (thumb._swapTimeout) clearTimeout(thumb._swapTimeout);
      imgEl.style.opacity = '0.35';
      thumb._swapTimeout = setTimeout(() => {
        imgEl.src = gallery[currentImgIdx];
        imgEl.style.opacity = '1';
      }, 160);
    };

    thumb.addEventListener('mouseenter', () => {
      if (!desktopHoverQuery.matches) return; // Chỉ áp dụng trên bản Desktop
      gallery.slice(1).forEach(src => {
        const preload = new Image();
        preload.src = src;
      });
      if (thumb._hoverTimer) clearInterval(thumb._hoverTimer);
      thumb._hoverTimer = setInterval(() => {
        if (!desktopHoverQuery.matches) {
          clearInterval(thumb._hoverTimer);
          thumb._hoverTimer = null;
          return;
        }
        swapToImage((currentImgIdx + 1) % gallery.length);
      }, 3000);
    });

    thumb.addEventListener('mouseleave', () => {
      if (thumb._hoverTimer) {
        clearInterval(thumb._hoverTimer);
        thumb._hoverTimer = null;
      }
      if (currentImgIdx !== 0) {
        swapToImage(0);
      } else {
        imgEl.style.opacity = '1';
      }
    });
  });
}

function renderCategoryHighlight(category = 'all') {
  const wrap = document.getElementById('categoryHighlightWrap');
  if (!wrap) return;

  clearThumbHoverTimers(wrap);

  const info = CATEGORY_HIGHLIGHTS_DATA[category] || CATEGORY_HIGHLIGHTS_DATA['all'];
  const featured = PRODUCTS_DATA.find(p => p.id === info.highlightProductId) || PRODUCTS_DATA[0];

  wrap.innerHTML = `
    <div class="category-highlight-box">
      <div class="category-story-col">
        <span class="category-story-badge">
          ${getStrokeIcon('book', 14)}
          <span>${info.badge}</span>
        </span>
        <h3 class="category-story-title">${info.title}</h3>
        <p class="category-story-text">${info.story}</p>
        <div class="category-story-meta">
          ${getStrokeIcon('leaf', 15)}
          <span>${info.craftNote}</span>
        </div>
      </div>

      <div class="category-featured-card">
        <div class="product-thumb" data-product-id="${featured.id}">
          <img src="${featured.image}" alt="${featured.name}" class="product-img" onerror="this.src='https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/product_banh_com.png'">
          <span class="featured-highlight-badge">
            ${getStrokeIcon('award', 13)}
            <span>Sản phẩm nổi bật</span>
          </span>
          <button class="product-quick-btn" onclick="openQuickView('${featured.id}')" title="Xem nhanh" aria-label="Xem nhanh">
            ${getStrokeIcon('search', 16)}
          </button>
        </div>
        <div class="featured-product-body">
          <h4 class="product-title">${featured.name}</h4>
          <p class="featured-product-detail">${featured.desc}</p>
          <div class="product-bottom">
            <div class="product-price-row">
              <div class="product-price">${formatCurrency(featured.price)}</div>
              <div class="product-unit">/${featured.unit}</div>
            </div>
            <div class="product-actions">
              <button class="btn-add-cart" onclick="addToCart('${featured.id}', 1)">
                ${getStrokeIcon('plus', 14)}
                <span>Chọn món</span>
              </button>
              <button class="btn-buy-now" onclick="openBuyNowModal('${featured.id}')">
                ${getStrokeIcon('bag', 14)}
                <span>Mua ngay</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  setupCardImageHoverSlideshow(wrap);
}

function renderProducts(category = 'all') {
  renderCategoryHighlight(category);

  const grid = document.getElementById('productGrid');
  if (!grid) return;

  clearThumbHoverTimers(grid);

  const filtered = category === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === category);

  grid.innerHTML = filtered.map(product => `
    <div class="product-card reveal-init">
      <div class="product-thumb" data-product-id="${product.id}">
        <img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.src='https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/product_banh_com.png'">
        <span class="product-tag">${product.categoryName}</span>
        <button class="product-quick-btn" onclick="openQuickView('${product.id}')" title="Xem nhanh" aria-label="Xem nhanh">
          ${getStrokeIcon('search', 16)}
        </button>
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.desc}</p>
        <div class="product-bottom">
          <div class="product-price-row">
            <div class="product-price">${formatCurrency(product.price)}</div>
            <div class="product-unit">/${product.unit}</div>
          </div>
          <div class="product-actions">
            <button class="btn-add-cart" onclick="addToCart('${product.id}', 1)">
              ${getStrokeIcon('plus', 14)}
              <span>Chọn món</span>
            </button>
            <button class="btn-buy-now" onclick="openBuyNowModal('${product.id}')">
              ${getStrokeIcon('bag', 14)}
              <span>Mua ngay</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  setupCardImageHoverSlideshow(grid);

  // Re-init reveal observer for newly rendered items
  initScrollReveal();
}

function setupCategoryFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      renderProducts(cat);
    });
  });
}

// 6. HERO CAROUSEL CONTROLLER (94VH, TITLE/SUBTITLE CĂN TRÁI GÓC PHẢI & 4 PREVIEW SLIDES TIẾP THEO GÓC TRÁI)
const HERO_SLIDES_DATA = [
  {
    badge: 'Tinh hoa ẩm thực Hà Nội',
    title: 'Hương Cốm Xưa <br><span class="highlight">Trọn Vị Tình Quê</span>',
    subtitle: 'Từng hạt cốm non đầu mùa được rang xào thủ công trên than hồng, bọc trọn nhân đậu xanh thơm bùi và gói ghém dịu dàng trong tàu lá sen thơm ngát.',
    image: 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/hero_banh_com.png',
    shortLabel: '01 · Hương Cốm Xưa'
  },
  {
    badge: 'Ba thập kỷ lưu giữ lửa nghề',
    title: 'Nghệ Thuật Bánh Cổ <br><span class="highlight">Gói Trọn Nghĩa Tình</span>',
    subtitle: 'Không chất bảo quản, không phẩm màu hóa học. Mỗi tấm bánh ra lò là một khúc ca mùa thu mộc mạc gửi gắm từ đôi bàn tay nghệ nhân đất kinh kỳ.',
    image: 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4369.jpg',
    shortLabel: '02 · Nghệ Thuật Bánh Cổ'
  },
  {
    badge: 'Hộp quà biếu thượng hạng',
    title: 'Ký Ức Thăng Long <br><span class="highlight">Hòa Nhịp Trà Thơm</span>',
    subtitle: 'Món quà tinh tế trang nhã dâng tặng ông bà, cha mẹ và tri kỷ trong những dịp hỷ sự, lễ tết hay buổi tao ngộ thưởng trà đầm ấm.',
    image: 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4414.jpg',
    shortLabel: '03 · Ký Ức Thăng Long'
  },
  {
    badge: 'Làng nghề truyền thống',
    title: 'Đôi Bàn Tay Nghệ Nhân <br><span class="highlight">Giữ Trọn Hồn Quê</span>',
    subtitle: 'Từ 4 giờ sáng khi phố xá còn say ngủ, bếp than hồng tiệm bánh SON đã bập bùng rực lửa, chắt chiu hương vị thảo thơm cho từng mẻ cốm dẻo.',
    image: 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/story_artisan.png',
    shortLabel: '04 · Bàn Tay Nghệ Nhân'
  },
  {
    badge: 'Bánh hỷ sự trăm năm',
    title: 'Bánh Phu Thê Son <br><span class="highlight">Son Sắt Tình Đôi Lứa</span>',
    subtitle: 'Sắc vàng hổ phách tự nhiên từ quả dành dành ôm lấy nhân đậu xanh hạt sen bùi ngọt, biểu tượng cho tình nghĩa vợ chồng vẹn nguyên thủy chung.',
    image: 'https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/LAI_4380.jpg',
    shortLabel: '05 · Bánh Phu Thê Son'
  }
];

let currentSlide = 0;
let slideInterval = null;

function initHeroCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  const badgeEl = document.getElementById('heroBadge');
  const titleEl = document.getElementById('heroTitle');
  const subtitleEl = document.getElementById('heroSubtitle');
  const previewListEl = document.getElementById('heroPreviewList');

  if (!slides.length) return;

  function renderPreviewThumbnails() {
    if (!previewListEl) return;
    // Hiển thị 4 ảnh preview trên 1 hàng, đảm bảo ảnh đang hiển thị luôn nằm trong nhóm và được highlight viền Sub-color
    const maxStart = Math.max(0, HERO_SLIDES_DATA.length - 4);
    const startIdx = Math.min(Math.max(0, currentSlide - 3), maxStart);
    const previewIndices = [];
    for (let i = startIdx; i < Math.min(startIdx + 4, HERO_SLIDES_DATA.length); i++) {
      previewIndices.push(i);
    }

    previewListEl.innerHTML = previewIndices.map(idx => {
      const item = HERO_SLIDES_DATA[idx];
      const isActive = idx === currentSlide;
      return `
        <div class="hero-preview-card${isActive ? ' active' : ''}" onclick="goToHeroSlide(${idx})" aria-label="Slide ${idx + 1}">
          <img src="${item.image}" alt="${item.shortLabel}" onerror="this.src='https://zvmqbvu7sqzuwc0h.public.blob.vercel-storage.com/hero_banh_com.png'">
        </div>
      `;
    }).join('');
  }

  function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides.forEach((s, i) => {
      s.classList.toggle('active', i === currentSlide);
    });

    // Cập nhật nội dung Title & Sub-Title ở góc dưới bên phải
    const slideData = HERO_SLIDES_DATA[currentSlide];
    if (slideData) {
      if (badgeEl) badgeEl.innerHTML = `${getStrokeIcon('sparkles', 14)} <span>${slideData.badge}</span>`;
      if (titleEl) titleEl.innerHTML = slideData.title;
      if (subtitleEl) subtitleEl.textContent = slideData.subtitle;
    }

    // Cập nhật hình ảnh preview của các slide tiếp theo ở góc dưới bên trái
    renderPreviewThumbnails();
  }

  window.nextHeroSlide = function () {
    showSlide(currentSlide + 1);
  };

  window.prevHeroSlide = function () {
    showSlide(currentSlide - 1);
  };

  window.goToHeroSlide = function (i) {
    showSlide(i);
    startAutoplay();
  };

  function startAutoplay() {
    stopAutoplay();
    slideInterval = setInterval(window.nextHeroSlide, 5500);
  }

  function stopAutoplay() {
    if (slideInterval) clearInterval(slideInterval);
  }

  const carouselEl = document.querySelector('.hero-carousel');
  if (carouselEl) {
    carouselEl.addEventListener('mouseenter', stopAutoplay);
    carouselEl.addEventListener('mouseleave', startAutoplay);

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    carouselEl.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    carouselEl.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) window.nextHeroSlide();
      if (touchEndX - touchStartX > 50) window.prevHeroSlide();
    }, { passive: true });
  }

  showSlide(0);
  startAutoplay();
}

// 7. USER STORY / TESTIMONIAL SLIDER
let currentStory = 0;
function initStorySlider() {
  const cards = document.querySelectorAll('.testimonial-card');
  if (!cards.length) return;

  function showStory(index) {
    if (index >= cards.length) currentStory = 0;
    else if (index < 0) currentStory = cards.length - 1;
    else currentStory = index;

    cards.forEach((c, i) => {
      c.classList.toggle('active', i === currentStory);
    });
  }

  window.nextStory = function () {
    showStory(currentStory + 1);
  };

  window.prevStory = function () {
    showStory(currentStory - 1);
  };
}

// 8. SCROLL REVEAL (INTERSECTION OBSERVER)
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-init:not(.revealed)');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
}

// 9. FORM HANDLERS (CHECKOUT & BOOKING)
function setupFormHandlers() {
  // Mobile Nav Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
    document.querySelectorAll('.mobile-nav .nav-link').forEach(link => {
      link.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
  }

  // Navbar Sticky Scroll Shadow & Opacity Trigger
  function handleNavbarScroll() {
    const header = document.querySelector('.site-header');
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // Checkout Form Dynamic Fields & Submission
  const buyerCategoryEl = document.getElementById('buyerCategory');
  const buyerProductEl = document.getElementById('buyerProduct');
  const buyerQuantityEl = document.getElementById('buyerQuantity');
  const modalOverlayEl = document.getElementById('modalOverlay');

  if (buyerCategoryEl) {
    buyerCategoryEl.addEventListener('change', () => {
      if (checkoutMode !== 'cart') {
        populateCheckoutSelects(buyerCategoryEl.value, null);
        renderCheckoutSummaryBox();
      }
    });
  }
  if (buyerProductEl) {
    buyerProductEl.addEventListener('change', () => {
      if (checkoutMode !== 'cart') {
        renderCheckoutSummaryBox();
      }
    });
  }
  if (buyerQuantityEl) {
    buyerQuantityEl.addEventListener('input', () => {
      if (checkoutMode !== 'cart') {
        renderCheckoutSummaryBox();
      }
    });
  }
  if (modalOverlayEl) {
    modalOverlayEl.addEventListener('click', () => {
      closeCheckoutModal();
      closeQuickView();
      closeSuccessModal();
    });
  }

  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('buyerName')?.value.trim();
      const phone = document.getElementById('buyerPhone')?.value.trim();
      const email = document.getElementById('buyerEmail')?.value.trim();
      const deliveryDate = document.getElementById('buyerDeliveryDate')?.value;
      const address = document.getElementById('buyerAddress')?.value.trim();
      const categoryLabel = buyerCategoryEl?.options[buyerCategoryEl.selectedIndex]?.text || '';
      const selectedProduct = PRODUCTS_DATA.find(p => p.id === buyerProductEl?.value);
      const productLabel = selectedProduct ? selectedProduct.name : (buyerProductEl?.options[buyerProductEl.selectedIndex]?.text || '');
      const quantity = Math.max(1, parseInt(buyerQuantityEl?.value || '1', 10) || 1);
      const note = document.getElementById('buyerNote')?.value.trim();
      const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'COD';
      const orderCode = 'SON-' + Math.floor(100000 + Math.random() * 900000);

      if (checkoutMode === 'cart') {
        cart = [];
        saveCartToStorage();
        updateCartUI();
      }
      checkoutForm.reset();
      closeCheckoutModal();

      // Show Order Success Modal
      const successModalContent = document.getElementById('orderSuccessContent');
      if (successModalContent) {
        successModalContent.innerHTML = `
          <div style="text-align:center; padding:1rem 0;">
            <div style="width:68px; height:68px; border-radius:50%; background:rgba(0,104,55,0.12); color:#006837; display:flex; align-items:center; justify-content:center; margin:0 auto 1rem;">
              ${getStrokeIcon('check', 32)}
            </div>
            <h3 style="font-family:var(--font-title); font-size:1.5rem; color:#006837; margin-bottom:0.5rem;">
              Đặt Bánh Thành Công!
            </h3>
            <p style="color:#6B5B54; margin-bottom:1rem; font-size:0.9rem;">
              Cảm ơn <strong>${name}</strong>. Tiệm bánh SON đã ghi nhận đơn đặt bánh và sẽ gửi xác nhận qua email <strong>${email}</strong> cùng SĐT <strong>${phone}</strong>.
            </p>
            <div style="background:#FDFBF7; border:1px dashed #D2A548; padding:1rem; border-radius:0.75rem; text-align:left; font-size:0.85rem; margin-bottom:1.25rem; display:flex; flex-direction:column; gap:4px;">
              <div><strong>Mã đơn hàng:</strong> <span style="color:#006837; font-weight:700;">${orderCode}</span></div>
              <div><strong>Loại bánh:</strong> ${categoryLabel}</div>
              <div><strong>Tên bánh:</strong> ${productLabel} (SL: ${quantity})</div>
              <div><strong>Ngày nhận hàng:</strong> ${deliveryDate}</div>
              <div><strong>Địa chỉ:</strong> ${address}</div>
              <div><strong>Thanh toán:</strong> ${paymentMethod === 'COD' ? 'Tiền mặt khi nhận bánh (COD)' : 'Chuyển khoản ngân hàng'}</div>
              ${note ? `<div><strong>Lời nhắn:</strong> ${note}</div>` : ''}
            </div>
            <div>
              <button class="btn-primary" onclick="closeSuccessModal()">
                Tiếp tục xem tiệm bánh
              </button>
            </div>
          </div>
        `;
      }

      document.getElementById('modalOverlay')?.classList.add('open');
      document.getElementById('orderSuccessModal')?.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  // Booking Form ("Gửi Yêu Cầu Đặt Bánh") Setup & Submission
  const bookingCategoryEl = document.getElementById('bookingCategory');
  const bookingProductEl = document.getElementById('bookingProduct');
  if (bookingCategoryEl && bookingProductEl) {
    syncCategoryAndProductSelects('bookingCategory', 'bookingProduct', PRODUCTS_DATA[0]?.category, PRODUCTS_DATA[0]?.id);
    bookingCategoryEl.addEventListener('change', () => {
      syncCategoryAndProductSelects('bookingCategory', 'bookingProduct', bookingCategoryEl.value, null);
    });
  }
  initDateInputMinToday('bookingDate');

  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', e => {
      e.preventDefault();
      const guestName = document.getElementById('bookingName')?.value.trim();
      const guestPhone = document.getElementById('bookingPhone')?.value.trim();
      const selectedProduct = PRODUCTS_DATA.find(p => p.id === bookingProductEl?.value);
      const productName = selectedProduct ? selectedProduct.name : 'bánh SON';
      const quantity = Math.max(1, parseInt(document.getElementById('bookingQuantity')?.value || '1', 10) || 1);

      showToast(`Đã nhận yêu cầu đặt ${quantity} ${productName} cho anh/chị ${guestName}! Tiệm sẽ liên hệ qua số ${guestPhone}.`);
      bookingForm.reset();
      syncCategoryAndProductSelects('bookingCategory', 'bookingProduct', PRODUCTS_DATA[0]?.category, PRODUCTS_DATA[0]?.id);
      initDateInputMinToday('bookingDate');
    });
  }

  // Footer Newsletter Follow Form
  const newsletterForm = document.getElementById('footerNewsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
      e.preventDefault();
      const emailInput = document.getElementById('footerFollowEmail');
      const email = emailInput ? emailInput.value.trim() : '';
      if (!email) return;

      showToast(`Cảm ơn bạn đã theo dõi tiệm bánh SON qua email ${email}!`);
      newsletterForm.reset();
    });
  }
}

function closeSuccessModal() {
  document.getElementById('modalOverlay')?.classList.remove('open');
  document.getElementById('orderSuccessModal')?.classList.remove('open');
  document.body.style.overflow = '';
}

function initFaqAccordion() {
  const faqList = document.getElementById('faqAccordion');
  if (!faqList) return;

  const items = faqList.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      items.forEach(other => {
        other.classList.remove('active');
        other.querySelector('.faq-question-btn')?.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// 10. INITIALIZATION ON DOM READY
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  renderProducts('all');
  setupCategoryFilter();
  initHeroCarousel();
  initStorySlider();
  initFaqAccordion();
  setupFormHandlers();
  initScrollReveal();
});

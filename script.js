// Modal open/close logic
function openModal(id) {
    document.getElementById(id).classList.add("active");
}

function closeModal(id) {
    document.getElementById(id).classList.remove("active");
}

// Đóng modal khi click ra ngoài nội dung
window.addEventListener("click", function (e) {
    document.querySelectorAll(".modal.active").forEach(function (modal) {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
});

// Transparency Modal Functions
function openTransparencyModal() {
    document.getElementById('transparency-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeTransparencyModal() {
    document.getElementById('transparency-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('transparency-modal');
    if (e.target === modal) {
        closeTransparencyModal();
    }
});

// Functions for transparency buttons
function showFinancialReport() {
    alert('Báo cáo tài chính chi tiết sẽ được hiển thị tại đây.\n\n• Tổng thu: 100.000 VNĐ\n• Tổng chi: 0 VNĐ\n• Quỹ còn lại: 100.000 VNĐ\n• Hiệu suất sử dụng: 1%');
}

function showProgressReport() {
    alert('Báo cáo tiến độ trồng cây sẽ được hiển thị tại đây.\n\n• Tổng cây đã trồng: 0 cây\n• Tỷ lệ sống: 1%\n• Trường học đã triển khai: 1 trường\n• Khu vực: 1 quận/huyện');
}

function showPhotoGallery() {
    alert('Thư viện hình ảnh minh chứng sẽ được hiển thị tại đây.\n\n📸 Bao gồm:\n• Ảnh hoạt động trồng cây\n• Hóa đơn mua vật tư\n• Biên bản bàn giao\n• Hình ảnh cây phát triển');
}

// Toggle user menu
function toggleUserMenu() {
    var menu = document.querySelector(".user-menu");
    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
    } else {
        menu.classList.add("open");
    }
}

// Đóng dropdown khi click ra ngoài
window.addEventListener("click", function (e) {
    var menu = document.querySelector(".user-menu");
    if (menu && menu.classList.contains("open")) {
        if (!menu.contains(e.target)) {
            menu.classList.remove("open");
        }
    }
});

// Tạo card quyên góp động
function createDonationCard(type, amount) {
    var container = document.getElementById('created-donations');
    if (!container) return;

    // Tạo card mới
    var card = document.createElement('div');
    card.className = 'created-card enter';
    card.setAttribute('data-type', type);

    // Xác định tiêu đề và icon dựa trên loại quyên góp
    var title, icon;
    switch(type) {
        case 'money':
            title = 'Quyên góp tiền';
            icon = 'fa-money-bill-wave';
            break;
        case 'tree':
            title = 'Quyên góp cây giống';
            icon = 'fa-seedling';
            break;
        case 'supplies':
            title = 'Quyên góp vật tư';
            icon = 'fa-tools';
            break;
        case 'volunteer':
            title = 'Đăng ký tình nguyện';
            icon = 'fa-hands-helping';
            break;
        default:
            title = 'Quyên góp';
            icon = 'fa-gift';
    }

    // Tạo nội dung card
    card.innerHTML = `
        <div class="created-card-header">
            <div class="created-title">
                <i class="fas ${icon}"></i>
                ${title}
            </div>
            <button class="created-close">&times;</button>
        </div>
        <form class="created-form">
            ${type === 'money' ? `
                <div class="form-group">
                    <label>Số tiền quyên góp (VNĐ):</label>
                    <input type="number" class="created-amount" value="${amount || ''}" min="10000" required>
                </div>
                <div class="form-group">
                    <label>Số cây quy đổi:</label>
                    <div class="created-tree-count" style="font-weight:600;color:#16a34a">${amount ? Math.floor(amount / 25000) : 0} cây</div>
                </div>
            ` : ''}
            
            ${type === 'tree' ? `
                <div class="form-group">
                    <label>Loại cây giống:</label>
                    <input type="text" class="created-tree-type" placeholder="Ví dụ: Cây sao, cây bằng lăng..." required>
                </div>
                <div class="form-group">
                    <label>Số lượng:</label>
                    <input type="number" class="created-tree-quantity" min="1" required>
                </div>
            ` : ''}
            
            ${type === 'supplies' ? `
                <div class="form-group">
                    <label>Loại vật tư:</label>
                    <input type="text" class="created-supplies-type" placeholder="Ví dụ: Đất, phân, xẻng..." required>
                </div>
                <div class="form-group">
                    <label>Số lượng:</label>
                    <input type="text" class="created-supplies-quantity" required>
                </div>
            ` : ''}
            
            ${type === 'volunteer' ? `
                <div class="form-group">
                    <label>Thời gian tham gia:</label>
                    <input type="text" class="created-volunteer-time" placeholder="Ví dụ: Sáng CN, chiều T7..." required>
                </div>
            ` : ''}
            
            <div class="created-row">
                <div class="form-group">
                    <label>Họ và tên:</label>
                    <input type="text" class="created-name" required>
                </div>
                <div class="form-group">
                    <label>Liên hệ:</label>
                    <input type="text" class="created-contact" required>
                </div>
            </div>
            
            ${type === 'money' ? `
                <div class="form-group">
                    <label>Số tài khoản người gửi:</label>
                    <input type="text" class="created-sender-account" required>
                </div>
                <div class="form-group">
                    <label>Ngân hàng người gửi:</label>
                    <select class="created-sender-bank" required>
                        <option value="">-- Chọn ngân hàng --</option>
                        <option value="Vietcombank">Vietcombank</option>
                        <option value="VietinBank">VietinBank</option>
                        <option value="BIDV">BIDV</option>
                        <option value="Agribank">Agribank</option>
                        <option value="Techcombank">Techcombank</option>
                        <option value="MB Bank">MB Bank</option>
                        <option value="ACB">ACB</option>
                        <option value="Sacombank">Sacombank</option>
                        <option value="VPBank">VPBank</option>
                        <option value="TPBank">TPBank</option>
                        <option value="Other">Khác...</option>
                    </select>
                </div>
                <div class="form-group created-other-bank" style="display:none">
                    <label>Tên ngân hàng khác:</label>
                    <input type="text" class="created-other-bank-input">
                </div>
                <div class="form-group">
                    <label>Thông tin nơi nhận:</label>
                    <div style="background:#f0fdf4;padding:12px;border-radius:8px;font-size:0.9rem">
                        <p style="margin:0 0 8px 0"><strong>Số tài khoản:</strong> 123456789</p>
                        <p style="margin:0 0 8px 0"><strong>Ngân hàng:</strong> Ngân hàng TMCP XYZ</p>
                        <p style="margin:0"><strong>Chủ TK:</strong> GreenLife Trường học</p>
                    </div>
                </div>
            ` : ''}
            
            <div class="form-group">
                <label>Ghi chú (tuỳ chọn):</label>
                <textarea class="created-note" rows="2"></textarea>
            </div>
            
            <button class="created-submit" type="submit">
                <i class="fas fa-paper-plane"></i>
                Gửi thông tin
            </button>
            <div class="created-thank" style="display:none">
                <i class="fas fa-check-circle"></i>
                Cảm ơn bạn! Chúng tôi sẽ liên hệ xác nhận.
            </div>
        </form>
    `;

    // Thêm sự kiện cho nút đóng
    var closeBtn = card.querySelector('.created-close');
    closeBtn.addEventListener('click', function() {
        card.classList.remove('enter-active');
        card.classList.add('enter');
        setTimeout(() => card.remove(), 300);
    });

    // Thêm sự kiện cho form submit
    var form = card.querySelector('.created-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var submitBtn = card.querySelector('.created-submit');
        var thankMsg = card.querySelector('.created-thank');
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang gửi...';
        
        setTimeout(() => {
            submitBtn.style.display = 'none';
            thankMsg.style.display = 'block';
            
            // Hiển thị thông báo thành công
            showSuccessMessage('Cảm ơn bạn đã quyên góp! Chúng tôi sẽ liên hệ xác nhận.');
        }, 1500);
    });

    // Thêm sự kiện tính toán số cây cho quyên góp tiền
    if (type === 'money') {
        var amountInput = card.querySelector('.created-amount');
        var treeCount = card.querySelector('.created-tree-count');
        
        amountInput.addEventListener('input', function() {
            var amount = parseInt(this.value) || 0;
            var trees = Math.floor(amount / 25000);
            treeCount.textContent = trees + ' cây';
        });
    }

    // Thêm sự kiện cho select ngân hàng
    if (type === 'money') {
        var bankSelect = card.querySelector('.created-sender-bank');
        var otherBank = card.querySelector('.created-other-bank');
        
        bankSelect.addEventListener('change', function() {
            if (this.value === 'Other') {
                otherBank.style.display = 'block';
            } else {
                otherBank.style.display = 'none';
            }
        });
    }

    // Thêm card vào container
    container.prepend(card);
    
    // Kích hoạt animation
    setTimeout(() => {
        card.classList.remove('enter');
        card.classList.add('enter-active');
    }, 10);
}

// Hiển thị thông báo thành công
function showSuccessMessage(message) {
    // Tạo thông báo tạm thời
    var notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #16a34a, #15803d);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(22, 163, 74, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Tính đội hỗ trợ dựa trên số học sinh
function calculateTeam() {
    var studentCount = document.getElementById('student-count').value;
    var s = Math.max(0, Math.floor(Number(studentCount) || 0));
    if (s === 0) {
        document.getElementById('team-results').innerHTML = "<div style='color:#6b7280'>Nhập số học sinh và bấm 'Tính đội hỗ trợ'.</div>";
        return;
    }
    
    var hauluc = Math.ceil(s / 300);
    var giamSat = Math.ceil(s / 500);
    var tinhNguyen = Math.ceil(s / 20);
    var truyenThong = Math.max(1, Math.ceil(s / 1000));
    var keToan = Math.max(1, Math.ceil(s / 2000));
    
    var html = `
        <div class='team-card' style='background:#fff;border-radius:8px;padding:20px;border:2px solid #e6f4ea;box-shadow:0 6px 14px rgba(6,95,70,0.04)'>
            <div style='font-weight:600;color:#166534;margin-bottom:12px;font-size:1.1rem'>Đề xuất đội hỗ trợ cho ${s.toLocaleString()} học sinh/sinh viên</div>
            <ul style='list-style:none;padding:0;margin:0;color:#374151;font-size:0.95rem'>
                <li style='padding:8px 0;border-bottom:1px solid #f0f4f8'>Hậu cần: <strong style='color:#16a34a'>${hauluc} người</strong></li>
                <li style='padding:8px 0;border-bottom:1px solid #f0f4f8'>Giám sát: <strong style='color:#16a34a'>${giamSat} người</strong></li>
                <li style='padding:8px 0;border-bottom:1px solid #f0f4f8'>Tình nguyện viên: <strong style='color:#16a34a'>${tinhNguyen} người</strong></li>
                <li style='padding:8px 0;border-bottom:1px solid #f0f4f8'>Truyền thông: <strong style='color:#16a34a'>${truyenThong} người</strong></li>
                <li style='padding:8px 0'>Kế toán: <strong style='color:#16a34a'>${keToan} người</strong></li>
            </ul>
            <div style='margin-top:12px;padding:12px;background:#f0fdf4;border-radius:6px;font-size:0.9rem;color:#166534'>
                <strong>Tổng số thành viên đội hỗ trợ: ${hauluc + giamSat + tinhNguyen + truyenThong + keToan} người</strong>
            </div>
        </div>
    `;
    
    document.getElementById('team-results').innerHTML = html;
}

// Thêm CSS animation
var style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Khởi tạo team calculator
document.addEventListener('DOMContentLoaded', function() {
    calculateTeam();
});
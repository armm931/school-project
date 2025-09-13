// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

// Scroll to Subjects Section
function scrollToSubjects() {
    const subjectsSection = document.getElementById('subjects');
    subjectsSection.scrollIntoView({ behavior: 'smooth' });
}

// Modal Functions
function showLoginModal() {
    const loginModal = document.getElementById('loginModal');
    loginModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function showRegisterModal() {
    const registerModal = document.getElementById('registerModal');
    registerModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Switch between Login and Register Modals
function switchToRegister() {
    closeModal('loginModal');
    setTimeout(() => {
        showRegisterModal();
    }, 300);
}

function switchToLogin() {
    closeModal('registerModal');
    setTimeout(() => {
        showLoginModal();
    }, 300);
}

// Form Submissions
function handleLogin(event) {
    event.preventDefault();
    
    // Get form data
    const email = event.target.querySelector('input[type="email"]').value;
    const password = event.target.querySelector('input[type="password"]').value;
    
    // Simulate login process
    setTimeout(() => {
        closeModal('loginModal');
        showNotification('تم تسجيل الدخول بنجاح!', 'success');
        
        // Reset form
        event.target.reset();
    }, 1000);
}

function handleRegister(event) {
    event.preventDefault();
    
    // Get form data
    const fullName = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    const password = event.target.querySelector('input[type="password"]').value;
    const confirmPassword = event.target.querySelectorAll('input[type="password"]')[1].value;
    
    // Validate passwords match
    if (password !== confirmPassword) {
        showNotification('كلمات المرور غير متطابقة', 'error');
        return;
    }
    
    // Simulate registration process
    setTimeout(() => {
        closeModal('registerModal');
        showNotification('تم إنشاء الحساب بنجاح!', 'success');
        
        // Reset form
        event.target.reset();
    }, 1000);
}

function handleContactSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const name = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelectorAll('input[type="email"]')[0].value;
    const subject = event.target.querySelectorAll('input[type="text"]')[1].value;
    const message = event.target.querySelector('textarea').value;
    
    // Simulate form submission
    setTimeout(() => {
        showNotification('تم إرسال رسالتك بنجاح!', 'success');
        
        // Reset form
        event.target.reset();
    }, 1000);
}

// Notification System
function showNotification(message, type = 'success') {
    const notificationContainer = document.getElementById('notificationContainer');
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    // Add icon based on type
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
    
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="fas ${icon}"></i>
        </div>
        <div>${message}</div>
    `;
    
    // Add to container
    notificationContainer.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notificationContainer.removeChild(notification);
        }, 300);
    }, 5000);
}

// Subject Modal
function showSubjectModal(subjectName) {
    const subjectModal = document.getElementById('subjectModal');
    const subjectContent = document.getElementById('subjectContent');
    
    // Simulate loading subject content
    subjectContent.innerHTML = `
        <div class="text-center">
            <div class="spinner-border text-purple-600" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-3">جاري تحميل محتوى مادة ${subjectName}...</p>
        </div>
    `;
    
    // Show modal
    subjectModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Simulate content loading
    setTimeout(() => {
        subjectContent.innerHTML = `
            <h2 class="text-3xl font-bold mb-6">${subjectName}</h2>
            <div class="mb-6">
                <img src="https://picsum.photos/seed/${subjectName}/800/400.jpg" alt="${subjectName}" class="img-fluid rounded-lg mb-4">
            </div>
            <div class="mb-6">
                <h3 class="text-xl font-semibold mb-3">وصف المادة</h3>
                <p class="text-gray-600 mb-4">
                    هذا وصف تفصيلي لمادة ${subjectName}. تحتوي هذه المادة على محتوى تعليمي شامل يغطي جميع الجوانب الأساسية للموضوع.
                </p>
            </div>
            <div class="mb-6">
                <h3 class="text-xl font-semibold mb-3">المحتويات</h3>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">مقدمة في ${subjectName}</li>
                    <li class="list-group-item">المبادئ الأساسية</li>
                    <li class="list-group-item">التطبيقات العملية</li>
                    <li class="list-group-item">الدراسات المتقدمة</li>
                    <li class="list-group-item">التقييم النهائي</li>
                </ul>
            </div>
            <div class="text-center">
                <button class="btn btn-purple btn-lg" onclick="closeModal('subjectModal')">إغلاق</button>
            </div>
        `;
    }, 1500);
}

// Add event listeners to subject cards
document.addEventListener('DOMContentLoaded', function() {
    const subjectCards = document.querySelectorAll('.card');
    
    subjectCards.forEach(card => {
        const titleElement = card.querySelector('.card-title');
        if (titleElement) {
            const subjectName = titleElement.textContent;
            card.addEventListener('click', function() {
                showSubjectModal(subjectName);
            });
        }
    });
    
    // Close modals on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const openModal = document.querySelector('.fixed.inset-0.z-50:not(.hidden)');
            if (openModal) {
                closeModal(openModal.id);
            }
        }
    });
});
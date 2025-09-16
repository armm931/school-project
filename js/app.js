// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('show');
}

// Scroll to Subjects Section
function scrollToSubjects() {
    const subjectsSection = document.getElementById('subjects');
    subjectsSection.scrollIntoView({ behavior: 'smooth' });
}

// Modal Functions
function showLoginModal() {
    document.getElementById('loginModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function showRegisterModal() {
    document.getElementById('registerModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    document.body.style.overflow = 'auto';
}

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

// Form Handlers
function handleLogin(event) {
    event.preventDefault();
    
    // Get form values
    const email = event.target.querySelector('input[type="email"]').value;
    const password = event.target.querySelector('input[type="password"]').value;
    
    // Simple validation
    if (!email || !password) {
        showNotification('يرجى ملء جميع الحقول', 'error');
        return;
    }
    
    // Simulate login success
    showNotification('تم تسجيل الدخول بنجاح', 'success');
    closeModal('loginModal');
    
    // In a real app, you would send the data to a server
    console.log('Login attempt:', { email, password });
}

function handleRegister(event) {
    event.preventDefault();
    
    // Get form values
    const fullName = event.target.querySelectorAll('input')[0].value;
    const email = event.target.querySelectorAll('input')[1].value;
    const password = event.target.querySelectorAll('input')[2].value;
    const confirmPassword = event.target.querySelectorAll('input')[3].value;
    
    // Validation
    if (!fullName || !email || !password || !confirmPassword) {
        showNotification('يرجى ملء جميع الحقول', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showNotification('كلمات المرور غير متطابقة', 'error');
        return;
    }
    
    if (password.length < 6) {
        showNotification('كلمة المرور يجب أن تكون 6 أحرف على الأقل', 'error');
        return;
    }
    
    // Simulate registration success
    showNotification('تم إنشاء الحساب بنجاح', 'success');
    closeModal('registerModal');
    
    // In a real app, you would send the data to a server
    console.log('Registration attempt:', { fullName, email, password });
}

function handleContactSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const name = event.target.querySelectorAll('input')[0].value;
    const email = event.target.querySelectorAll('input')[1].value;
    const subject = event.target.querySelectorAll('input')[2].value;
    const message = event.target.querySelector('textarea').value;
    
    // Validation
    if (!name || !email || !subject || !message) {
        showNotification('يرجى ملء جميع الحقول', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('تم إرسال رسالتك بنجاح', 'success');
    event.target.reset();
    
    // In a real app, you would send the data to a server
    console.log('Contact form submission:', { name, email, subject, message });
}

// Notification System
function showNotification(message, type = 'info') {
    const container = document.getElementById('notificationContainer');
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Add icon based on type
    let icon = '';
    if (type === 'success') icon = '<i class="fas fa-check-circle"></i>';
    if (type === 'error') icon = '<i class="fas fa-exclamation-circle"></i>';
    if (type === 'info') icon = '<i class="fas fa-info-circle"></i>';
    
    notification.innerHTML = `${icon} <span>${message}</span>`;
    
    // Add to container
    container.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        
        setTimeout(() => {
            container.removeChild(notification);
        }, 300);
    }, 5000);
}

// Initialize tooltips and other Bootstrap components
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation to stat cards when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all stat cards
    document.querySelectorAll('.stat-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

// Close modals when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const loginModal = document.getElementById('loginModal');
        const registerModal = document.getElementById('registerModal');
        const subjectModal = document.getElementById('subjectModal');
        
        if (!loginModal.classList.contains('hidden')) {
            closeModal('loginModal');
        }
        
        if (!registerModal.classList.contains('hidden')) {
            closeModal('registerModal');
        }
        
        if (!subjectModal.classList.contains('hidden')) {
            closeModal('subjectModal');
        }
    }
});
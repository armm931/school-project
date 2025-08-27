// app.js - Main JavaScript file for EduHub Educational Platform

// DOM Elements
const mobileMenu = document.getElementById('mobileMenu');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const subjectModal = document.getElementById('subjectModal');
const notificationContainer = document.getElementById('notificationContainer');

// Mobile Menu Toggle
function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
}

// Modal Functions
function showLoginModal() {
    loginModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function showRegisterModal() {
    registerModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function switchToRegister() {
    closeModal('loginModal');
    showRegisterModal();
}

function switchToLogin() {
    closeModal('registerModal');
    showLoginModal();
}

// Subject Modal Functions
function showSubjectModal(subjectName) {
    // This would typically fetch subject data from an API
    // For demo purposes, we'll use static content
    const subjectContent = document.getElementById('subjectContent');
    
    // Sample subject content based on subject name
    let content = '';
    
    switch(subjectName) {
        case 'Chemistry':
            content = `
                <h2 class="text-3xl font-bold mb-6">الكيمياء</h2>
                <div class="mb-6">
                    <img src="/img/chemistry.jpg" alt="Chemistry" class="w-full h-64 object-cover rounded-lg mb-4">
                    <p class="text-lg mb-4">عِلْمُ الكِيمِيَاءِ هو العلم الذي يدرس المادة والتغيُّرات التي تطرأ عليها، تحديدًا بدراسة خواصها، بِنيتها، تركيبها، سلوكها، تفاعلاتها وما تحدثه من خلالها.</p>
                    <h3 class="text-xl font-semibold mb-3">الفروع الرئيسية:</h3>
                    <ul class="list-disc pl-6 mb-4">
                        <li>الكيمياء العضوية</li>
                        <li>الكيمياء غير العضوية</li>
                        <li>الكيمياء التحليلية</li>
                        <li>الكيمياء الفيزيائية</li>
                        <li>الكيمياء الحيوية</li>
                    </ul>
                </div>
                <div class="flex justify-end">
                    <button onclick="closeModal('subjectModal')" class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">إغلاق</button>
                </div>
            `;
            break;
        case 'Physics':
            content = `
                <h2 class="text-3xl font-bold mb-6">الفيزياء</h2>
                <div class="mb-6">
                    <img src="/img/physics.jpg" alt="Physics" class="w-full h-64 object-cover rounded-lg mb-4">
                    <p class="text-lg mb-4">الفِيزِيَاءُ أو علم الفيزياء أو الفِيزِيقَا هو العلم الذي يدرس المفاهيم الأساسية مثل الطاقة، القوة، والزمان، وكل ما ينبع من هذا، مثل الكتلة، المادة وحركتها.</p>
                    <h3 class="text-xl font-semibold mb-3">الفروع الرئيسية:</h3>
                    <ul class="list-disc pl-6 mb-4">
                        <li>الفيزياء الكلاسيكية</li>
                        <li>الفيزياء الحديثة</li>
                        <li>الكهرومغناطيسية</li>
                        <li>الفيزياء النووية</li>
                        <li>ميكانيكا الكم</li>
                    </ul>
                </div>
                <div class="flex justify-end">
                    <button onclick="closeModal('subjectModal')" class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">إغلاق</button>
                </div>
            `;
            break;
        case 'Mathematics':
            content = `
                <h2 class="text-3xl font-bold mb-6">الرياضيات</h2>
                <div class="mb-6">
                    <img src="/img/Noj7cPv62g-571.jpg_729x410.jpg" alt="Mathematics" class="w-full h-64 object-cover rounded-lg mb-4">
                    <p class="text-lg mb-4">الرِّيَاضِيَّات هي مجموعة من المعارف المجردة الناتجة عن الاستنتاجات المنطقية المطبقة على مُختلف الكائنات الرياضية مثل المجموعات، والأعداد، والأشكال والبنيات والتحويلات.</p>
                    <h3 class="text-xl font-semibold mb-3">الفروع الرئيسية:</h3>
                    <ul class="list-disc pl-6 mb-4">
                        <li>الجبر</li>
                        <li>التفاضل والتكامل</li>
                        <li>الهندسة</li>
                        <li>الإحصاء والاحتمالات</li>
                        <li>الرياضيات المتقدمة</li>
                    </ul>
                </div>
                <div class="flex justify-end">
                    <button onclick="closeModal('subjectModal')" class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">إغلاق</button>
                </div>
            `;
            break;
        default:
            content = `
                <h2 class="text-3xl font-bold mb-6">موضوع غير معروف</h2>
                <div class="mb-6">
                    <p class="text-lg mb-4">عذرًا، لا توجد معلومات متاحة حول هذا الموضوع حاليًا.</p>
                </div>
                <div class="flex justify-end">
                    <button onclick="closeModal('subjectModal')" class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">إغلاق</button>
                </div>
            `;
    }
    
    subjectContent.innerHTML = content;
    subjectModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Navigation Functions
function scrollToSubjects() {
    const subjectsSection = document.getElementById('subjects');
    subjectsSection.scrollIntoView({ behavior: 'smooth' });
}

// Form Handlers
function handleLogin(event) {
    event.preventDefault();
    
    // Get form values
    const email = event.target.querySelector('input[type="email"]').value;
    const password = event.target.querySelector('input[type="password"]').value;
    
    // Simple validation (in a real app, this would be server-side)
    if (email && password) {
        // Simulate login process
        showNotification('تم تسجيل الدخول بنجاح!', 'success');
        closeModal('loginModal');
        
        // In a real app, you would redirect or update the UI
        // window.location.href = '/dashboard';
    } else {
        showNotification('يرجى إدخال البريد الإلكتروني وكلمة المرور', 'error');
    }
}

function handleRegister(event) {
    event.preventDefault();
    
    // Get form values
    const fullName = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    const password = event.target.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = event.target.querySelectorAll('input[type="password"]')[1].value;
    
    // Simple validation
    if (!fullName || !email || !password || !confirmPassword) {
        showNotification('يرجى ملء جميع الحقول', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showNotification('كلمات المرور غير متطابقة', 'error');
        return;
    }
    
    // Simulate registration process
    showNotification('تم إنشاء الحساب بنجاح!', 'success');
    closeModal('registerModal');
    
    // In a real app, you might automatically log the user in
    // or redirect to a verification page
}

function handleContactSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const name = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    const subject = event.target.querySelectorAll('input[type="text"]')[1].value;
    const message = event.target.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        showNotification('يرجى ملء جميع الحقول', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.', 'success');
    
    // Reset form
    event.target.reset();
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Add icon based on type
    let icon = '';
    switch(type) {
        case 'success':
            icon = '<i class="fas fa-check-circle mr-2"></i>';
            break;
        case 'error':
            icon = '<i class="fas fa-exclamation-circle mr-2"></i>';
            break;
        case 'warning':
            icon = '<i class="fas fa-exclamation-triangle mr-2"></i>';
            break;
        default:
            icon = '<i class="fas fa-info-circle mr-2"></i>';
    }
    
    notification.innerHTML = `
        <div class="flex items-center">
            ${icon}
            <span>${message}</span>
            <button class="ml-4 text-gray-500 hover:text-gray-700" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    notificationContainer.appendChild(notification);
    
    // Auto-remove notification after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Add click event listeners to subject cards
document.addEventListener('DOMContentLoaded', function() {
    // Get all subject cards
    const subjectCards = document.querySelectorAll('.card');
    
    // Add click event to each card
    subjectCards.forEach(card => {
        const titleElement = card.querySelector('.card-title');
        if (titleElement) {
            const title = titleElement.textContent.trim();
            
            // Make the entire card clickable (except the footer button)
            card.addEventListener('click', function(e) {
                // Check if the click is on the footer button
                if (!e.target.closest('.card-footer')) {
                    // Map Arabic titles to English for the modal function
                    let subjectName = '';
                    switch(title) {
                        case 'الكيمياء':
                            subjectName = 'Chemistry';
                            break;
                        case 'الفيزياء':
                            subjectName = 'Physics';
                            break;
                        case 'الرياضيات':
                            subjectName = 'Mathematics';
                            break;
                        default:
                            subjectName = title;
                    }
                    showSubjectModal(subjectName);
                }
            });
            
            // Add cursor pointer to indicate clickable
            card.style.cursor = 'pointer';
        }
    });
    
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    toggleMobileMenu();
                }
            }
        });
    });
});

// Initialize tooltips if using Bootstrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});
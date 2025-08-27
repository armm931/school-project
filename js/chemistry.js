// Chemistry.js - Interactive features for the Chemistry subject page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize 3D card effects
    init3DCards();
    
    // Initialize parallax effects
    initParallaxEffect();
    
    // Initialize card interactions
    initCardInteractions();
    
    // Initialize search functionality
    initSearchFunctionality();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize animations on scroll
    initScrollAnimations();
});

// 3D Card Effects
function init3DCards() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            
            const mouseX = e.clientX - cardCenterX;
            const mouseY = e.clientY - cardCenterY;
            
            const rotateY = (mouseX / cardRect.width) * 20; // Max rotation 20 degrees
            const rotateX = -(mouseY / cardRect.height) * 20; // Max rotation 20 degrees
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(-5deg) translateZ(0)';
        });
    });
}

// Parallax Effect
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrollPosition * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Card Interactions
function initCardInteractions() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const nextButton = card.querySelector('button');
        
        if (nextButton) {
            nextButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const cardTitle = card.querySelector('.card-title').textContent;
                showNotification(`جاري تحميل معلومات عن ${cardTitle}`, 'info');
                
                // Simulate loading delay
                setTimeout(() => {
                    showNotification(`تم تحميل معلومات عن ${cardTitle} بنجاح`, 'success');
                }, 1500);
            });
        }
        
        // Add ripple effect on click
        card.addEventListener('click', function(e) {
            createRipple(e, card);
        });
    });
}

// Search Functionality
function initSearchFunctionality() {
    // Create search element if it doesn't exist
    if (!document.querySelector('#chemistry-search')) {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container mb-4';
        searchContainer.innerHTML = `
            <div class="input-group">
                <input type="text" id="chemistry-search" class="form-control" placeholder="ابحث في أقسام الكيمياء...">
                <button class="btn btn-primary" type="button">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        `;
        
        const mainHeading = document.querySelector('main h1');
        if (mainHeading) {
            mainHeading.parentNode.insertBefore(searchContainer, mainHeading.nextSibling);
        }
    }
    
    const searchInput = document.getElementById('chemistry-search');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.card');
            
            cards.forEach(card => {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                const text = card.querySelector('.card-text').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || text.includes(searchTerm)) {
                    card.style.display = 'block';
                    card.parentElement.style.display = 'block';
                    
                    // Highlight search term
                    if (searchTerm.length > 2) {
                        highlightSearchTerm(card, searchTerm);
                    } else {
                        removeHighlight(card);
                    }
                } else {
                    card.style.display = 'none';
                    card.parentElement.style.display = 'none';
                }
            });
            
            // Show message if no results
            const visibleCards = Array.from(cards).filter(card => card.style.display !== 'none');
            const noResults = document.getElementById('no-results');
            
            if (visibleCards.length === 0 && searchTerm.length > 0) {
                if (!noResults) {
                    const noResultsMsg = document.createElement('div');
                    noResultsMsg.id = 'no-results';
                    noResultsMsg.className = 'alert alert-info text-center';
                    noResultsMsg.textContent = 'لا توجد نتائج للبحث عن "' + searchTerm + '"';
                    document.querySelector('.container').appendChild(noResultsMsg);
                }
            } else if (noResults) {
                noResults.remove();
            }
        });
    }
}

// Highlight search term in text
function highlightSearchTerm(card, term) {
    const titleElement = card.querySelector('.card-title');
    const textElement = card.querySelector('.card-text');
    
    [titleElement, textElement].forEach(element => {
        const text = element.textContent;
        const regex = new RegExp(`(${term})`, 'gi');
        element.innerHTML = text.replace(regex, '<mark>$1</mark>');
    });
}

// Remove highlight from text
function removeHighlight(card) {
    const titleElement = card.querySelector('.card-title');
    const textElement = card.querySelector('.card-text');
    
    [titleElement, textElement].forEach(element => {
        element.innerHTML = element.textContent;
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const cards = document.querySelectorAll('.card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        // Set initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Observe element
        observer.observe(card);
    });
}

// Create Ripple Effect
function createRipple(event, element) {
    const circle = document.createElement('span');
    const diameter = Math.max(element.clientWidth, element.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - element.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - element.offsetTop - radius}px`;
    circle.classList.add('ripple');
    
    const ripple = element.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }
    
    element.appendChild(circle);
}

// Notification System
function showNotification(message, type = 'info') {
    // Create notification container if it doesn't exist
    let notificationContainer = document.getElementById('notification-container');
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.id = 'notification-container';
        notificationContainer.className = 'notification-container';
        document.body.appendChild(notificationContainer);
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    // Add icon based on type
    let icon = '';
    switch(type) {
        case 'success':
            icon = '<i class="fas fa-check-circle"></i>';
            break;
        case 'error':
            icon = '<i class="fas fa-exclamation-circle"></i>';
            break;
        case 'warning':
            icon = '<i class="fas fa-exclamation-triangle"></i>';
            break;
        default:
            icon = '<i class="fas fa-info-circle"></i>';
    }
    
    notification.innerHTML = `
        <div class="notification-content">
            ${icon}
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    notificationContainer.appendChild(notification);
    
    // Add close functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.classList.add('notification-hiding');
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.add('notification-hiding');
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .notification-container {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .notification {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        padding: 16px;
        display: flex;
        align-items: center;
        min-width: 300px;
        animation: slide-in 0.3s ease-out;
        transition: all 0.3s ease;
    }
    
    .notification-success {
        border-left: 4px solid #4caf50;
    }
    
    .notification-error {
        border-left: 4px solid #f44336;
    }
    
    .notification-warning {
        border-left: 4px solid #ff9800;
    }
    
    .notification-info {
        border-left: 4px solid #2196f3;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        width: 100%;
    }
    
    .notification-content i {
        margin-right: 12px;
        font-size: 20px;
    }
    
    .notification-success i {
        color: #4caf50;
    }
    
    .notification-error i {
        color: #f44336;
    }
    
    .notification-warning i {
        color: #ff9800;
    }
    
    .notification-info i {
        color: #2196f3;
    }
    
    .notification-close {
        margin-right: 0;
        margin-left: auto;
        background: none;
        border: none;
        font-size: 18px;
        cursor: pointer;
        color: #777;
    }
    
    .notification-hiding {
        opacity: 0;
        transform: translateX(100%);
    }
    
    @keyframes slide-in {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    mark {
        background-color: #ffeb3b;
        padding: 0;
    }
    
    .search-container {
        max-width: 600px;
        margin: 0 auto 2rem;
    }
`;
document.head.appendChild(style);

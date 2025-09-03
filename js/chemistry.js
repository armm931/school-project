document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.header-content').appendChild(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        const nav = document.querySelector('nav ul');
        nav.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // Active navigation link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Resource tabs functionality
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding content
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Category cards hover effect
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Feature cards animation on scroll
    const features = document.querySelectorAll('.feature');
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
    
    features.forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(30px)';
        feature.style.transition = 'all 0.6s ease';
        observer.observe(feature);
    });
    
    // Resource items animation
    const resourceItems = document.querySelectorAll('.resource-item');
    resourceItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });
    
    // Search functionality (placeholder)
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'ابحث في الموقع...';
    searchInput.style.cssText = `
        position: fixed;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 20px;
        border-radius: 25px;
        border: 1px solid #ddd;
        width: 300px;
        z-index: 999;
        display: none;
        background: white;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    `;
    
    document.body.appendChild(searchInput);
    
    // Add search icon to header
    const searchIcon = document.createElement('i');
    searchIcon.className = 'fas fa-search';
    searchIcon.style.cssText = `
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: 20px;
    `;
    
    document.querySelector('.logo').appendChild(searchIcon);
    
    searchIcon.addEventListener('click', function() {
        searchInput.style.display = searchInput.style.display === 'none' ? 'block' : 'none';
        if (searchInput.style.display === 'block') {
            searchInput.focus();
        }
    });
    
    // Close search when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchIcon.contains(e.target)) {
            searchInput.style.display = 'none';
        }
    });
    
    // Add to favorites functionality
    const addToFavoritesButtons = document.querySelectorAll('.resource-item button');
    addToFavoritesButtons.forEach(button => {
        button.innerHTML = '<i class="fas fa-heart"></i> أضف للمفضلة';
        button.addEventListener('click', function() {
            this.innerHTML = '<i class="fas fa-heart" style="color: red;"></i> تمت الإضافة';
            this.style.backgroundColor = '#27ae60';
            
            // Show notification
            const notification = document.createElement('div');
            notification.textContent = 'تمت الإضافة إلى المفضلة بنجاح!';
            notification.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: #27ae60;
                color: white;
                padding: 15px 25px;
                border-radius: 5px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                z-index: 1000;
                animation: slideIn 0.3s ease;
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        });
    });
    
    // Add notification animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
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
    
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
    
    // Add dark mode toggle
    const darkModeToggle = document.createElement('div');
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        background: var(--secondary);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        z-index: 999;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(darkModeToggle);
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            this.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            this.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('darkMode', 'disabled');
        }
    });
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Add dark mode styles
    const darkModeStyles = document.createElement('style');
    darkModeStyles.textContent = `
        body.dark-mode {
            background-color: #1a1a1a;
            color: #f0f0f0;
        }
        
        body.dark-mode .category-card,
        body.dark-mode .feature,
        body.dark-mode .resource-item {
            background-color: #2d2d2d;
            color: #f0f0f0;
        }
        
        body.dark-mode .topic-list li:hover {
            background-color: #3d3d3d;
        }
        
        body.dark-mode .topic-list li a {
            color: #f0f0f0;
        }
        
        body.dark-mode .section-title h2 {
            color: #f0f0f0;
        }
    `;
    document.head.appendChild(darkModeStyles);
}); 
  document.addEventListener('DOMContentLoaded', function() {
            // Tab functionality for resources section
            const tabs = document.querySelectorAll('.tab');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    // Remove active class from all tabs and contents
                    tabs.forEach(t => t.classList.remove('active'));
                    tabContents.forEach(c => c.classList.remove('active'));
                    
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // Show corresponding content
                    const tabId = this.getAttribute('data-tab');
                    document.getElementById(tabId).classList.add('active');
                });
            });
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Update active nav link
                        document.querySelectorAll('nav a').forEach(link => {
                            link.classList.remove('active');
                        });
                        this.classList.add('active');
                    }
                });
            });
            
            // Add animation to field cards on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            document.querySelectorAll('.field-card').forEach(card => {
                card.style.opacity = 0;
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(card);
            });
            
            // Add animation to path steps on scroll
            document.querySelectorAll('.path-step').forEach(step => {
                step.style.opacity = 0;
                step.style.transform = 'translateX(-20px)';
                step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(step);
            });
            
            // Add interactivity to language items
            document.querySelectorAll('.language-item').forEach(item => {
                item.addEventListener('click', function() {
                    const languageName = this.querySelector('.language-name').textContent;
                    const languageInfo = getLanguageInfo(languageName);
                    alert(`${languageName}: ${languageInfo}`);
                });
            });
            
            // Function to get language information
            function getLanguageInfo(languageName) {
                const info = {
                    'JavaScript': 'لغة برمجة ديناميكية تستخدم بشكل أساسي في تطوير الويب',
                    'Python': 'لغة برمجة متعددة الأغراض سهلة التعلم والاستخدام',
                    'Java': 'لغة برمجة قوية ومستقرة تستخدم في تطبيقات المؤسسات',
                    'HTML/CSS': 'لغات ترميز وتنسيق أساسية لإنشاء صفحات الويب',
                    'C++': 'لغة برمجة قوية تستخدم في تطوير الأنظمة和高性能 تطبيقات',
                    'PHP': 'لغة برمجة من جانب الخادم تستخدم في تطوير الويب',
                    'Swift': 'لغة برمجة من Apple لتطوير تطبيقات iOS',
                    'Kotlin': 'لغة برمجة حديثة لتطوير تطبيقات Android',
                    'React': 'مكتبة JavaScript لبناء واجهات المستخدم',
                    'SQL': 'لغة استعلام قواعد البيانات',
                    'Rust': 'لغة برمجة نظامية تركز على الأمان والأداء',
                    'Go': 'لغة برمجة من Google للتطبيقات السحابية'
                };
                return info[languageName] || 'معلومات غير متاحة';
            }
        });
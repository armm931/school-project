        // Sample data for periodic table (first 20 elements)
        const elements = [
            {number: 1, symbol: 'H', name: 'هيدروجين', weight: '1.008'},
            {number: 2, symbol: 'He', name: 'هيليوم', weight: '4.003'},
            {number: 3, symbol: 'Li', name: 'ليثيوم', weight: '6.941'},
            {number: 4, symbol: 'Be', name: 'بريليوم', weight: '9.012'},
            {number: 5, symbol: 'B', name: 'بورون', weight: '10.81'},
            {number: 6, symbol: 'C', name: 'كربون', weight: '12.01'},
            {number: 7, symbol: 'N', name: 'نيتروجين', weight: '14.01'},
            {number: 8, symbol: 'O', name: 'أكسجين', weight: '16.00'},
            {number: 9, symbol: 'F', name: 'فلور', weight: '19.00'},
            {number: 10, symbol: 'Ne', name: 'نيون', weight: '20.18'},
            {number: 11, symbol: 'Na', name: 'صوديوم', weight: '22.99'},
            {number: 12, symbol: 'Mg', name: 'مغنيسيوم', weight: '24.31'},
            {number: 13, symbol: 'Al', name: 'ألومنيوم', weight: '26.98'},
            {number: 14, symbol: 'Si', name: 'سيليكون', weight: '28.09'},
            {number: 15, symbol: 'P', name: 'فوسفور', weight: '30.97'},
            {number: 16, symbol: 'S', name: 'كبريت', weight: '32.07'},
            {number: 17, symbol: 'Cl', name: 'كلور', weight: '35.45'},
            {number: 18, symbol: 'Ar', name: 'أرجون', weight: '39.95'},
            {number: 19, symbol: 'K', name: 'بوتاسيوم', weight: '39.10'},
            {number: 20, symbol: 'Ca', name: 'كالسيوم', weight: '40.08'}
        ];
        
        // Generate periodic table
        document.addEventListener('DOMContentLoaded', function() {
            const periodicTable = document.getElementById('periodicTable');
            
            // Create empty cells for proper layout
            for (let i = 1; i <= 18; i++) {
                if (i === 1 || i === 18) {
                    // Add elements in first and last column
                    const element = elements.find(el => el.number === i);
                    if (element) {
                        const elementDiv = createElementDiv(element);
                        periodicTable.appendChild(elementDiv);
                    } else {
                        const emptyDiv = document.createElement('div');
                        emptyDiv.className = 'element';
                        periodicTable.appendChild(emptyDiv);
                    }
                } else {
                    // Add empty cells
                    const emptyDiv = document.createElement('div');
                    emptyDiv.className = 'element';
                    periodicTable.appendChild(emptyDiv);
                }
            }
            
            // Add second row
            for (let i = 1; i <= 18; i++) {
                if (i === 1 || i === 2 || (i >= 13 && i <= 18)) {
                    const elementNumber = i === 1 ? 3 : i === 2 ? 4 : i - 10;
                    const element = elements.find(el => el.number === elementNumber);
                    if (element) {
                        const elementDiv = createElementDiv(element);
                        periodicTable.appendChild(elementDiv);
                    } else {
                        const emptyDiv = document.createElement('div');
                        emptyDiv.className = 'element';
                        periodicTable.appendChild(emptyDiv);
                    }
                } else {
                    const emptyDiv = document.createElement('div');
                    emptyDiv.className = 'element';
                    periodicTable.appendChild(emptyDiv);
                }
            }
            
            // Add third row
            for (let i = 1; i <= 18; i++) {
                if (i === 1 || i === 2 || (i >= 13 && i <= 18)) {
                    const elementNumber = i === 1 ? 11 : i === 2 ? 12 : i + 2;
                    const element = elements.find(el => el.number === elementNumber);
                    if (element) {
                        const elementDiv = createElementDiv(element);
                        periodicTable.appendChild(elementDiv);
                    } else {
                        const emptyDiv = document.createElement('div');
                        emptyDiv.className = 'element';
                        periodicTable.appendChild(emptyDiv);
                    }
                } else {
                    const emptyDiv = document.createElement('div');
                    emptyDiv.className = 'element';
                    periodicTable.appendChild(emptyDiv);
                }
            }
            
            // Add fourth row
            for (let i = 1; i <= 18; i++) {
                const elementNumber = i + 18;
                const element = elements.find(el => el.number === elementNumber);
                if (element) {
                    const elementDiv = createElementDiv(element);
                    periodicTable.appendChild(elementDiv);
                } else {
                    const emptyDiv = document.createElement('div');
                    emptyDiv.className = 'element';
                    periodicTable.appendChild(emptyDiv);
                }
            }
            
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
            
            // Add animation to category cards on scroll
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
            
            document.querySelectorAll('.category-card').forEach(card => {
                card.style.opacity = 0;
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(card);
            });
        });
        
        // Function to create element div
        function createElementDiv(element) {
            const elementDiv = document.createElement('div');
            elementDiv.className = 'element';
            elementDiv.innerHTML = `
                <div class="element-number">${element.number}</div>
                <div class="element-symbol">${element.symbol}</div>
                <div class="element-name">${element.name}</div>
                <div class="element-weight">${element.weight}</div>
            `;
            return elementDiv;
        }
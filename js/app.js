// Subject data
const subjectsData = {
    chemistry: {
        title: 'Chemistry',
        icon: 'fa-flask',
        color: 'purple',
        departments: [
            {
                name: 'الكيمياء العضوية',
                description: 'Study of carbon-containing compounds and their properties.',
                courses: ['Introduction to Organic Chemistry', 'Reaction Mechanisms', 'Synthesis Methods']
            },
            {
                name: 'Inorganic Chemistry',
                description: 'Study of inorganic compounds, typically those lacking carbon-hydrogen bonds.',
                courses: ['Coordination Chemistry', 'Main Group Elements', 'Transition Metals']
            },
            {
                name: 'Physical Chemistry',
                description: 'Study of macroscopic and particulate phenomena in chemical systems.',
                courses: ['Thermodynamics', 'Quantum Chemistry', 'Kinetics']
            },
            {
                name: 'Analytical Chemistry',
                description: 'Science of obtaining, processing, and communicating information about matter.',
                courses: ['Spectroscopy', 'Chromatography', 'Electrochemistry']
            }
        ]
    },
    physics: {
        title: 'Physics',
        icon: 'fa-atom',
        color: 'blue',
        departments: [
            {
                name: 'Classical Mechanics',
                description: 'Study of motion of bodies under the influence of forces.',
                courses: ['Newtonian Mechanics', 'Lagrangian Mechanics', 'Hamiltonian Mechanics']
            },
            {
                name: 'Quantum Physics',
                description: 'Study of matter and energy at the most fundamental level.',
                courses: ['Quantum Mechanics', 'Quantum Field Theory', 'Quantum Computing']
            },
            {
                name: 'Thermodynamics',
                description: 'Study of heat, work, and energy transfer.',
                courses: ['Statistical Mechanics', 'Thermal Physics', 'Entropy']
            },
            {
                name: 'Electromagnetism',
                description: 'Study of electric and magnetic fields and their interactions.',
                courses: ['Electrostatics', 'Magnetism', 'Electromagnetic Waves']
            }
        ]
    },
    mathematics: {
        title: 'Mathematics',
        icon: 'fa-calculator',
        color: 'green',
        departments: [
            {
                name: 'Algebra',
                description: 'Study of mathematical symbols and rules for manipulating these symbols.',
                courses: ['Linear Algebra', 'Abstract Algebra', 'Number Theory']
            },
            {
                name: 'Calculus',
                description: 'Mathematical study of continuous change.',
                courses: ['Differential Calculus', 'Integral Calculus', 'Multivariable Calculus']
            },
            {
                name: 'Statistics',
                description: 'Collection, analysis, interpretation, and presentation of data.',
                courses: ['Probability Theory', 'Statistical Inference', 'Data Analysis']
            },
            {
                name: 'Geometry',
                description: 'Study of shapes, sizes, and properties of space.',
                courses: ['Euclidean Geometry', 'Differential Geometry', 'Topology']
            }
        ]
    },
    programming: {
        title: 'Programming',
        icon: 'fa-code',
        color: 'orange',
        departments: [
            {
                name: 'Web Development',
                description: 'Building websites and web applications.',
                courses: ['HTML/CSS', 'JavaScript', 'React', 'Node.js']
            },
            {
                name: 'Mobile Development',
                description: 'Creating applications for mobile devices.',
                courses: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
            },
            {
                name: 'Data Science',
                description: 'Extracting insights from structured and unstructured data.',
                courses: ['Python for Data Science', 'Machine Learning', 'Data Visualization']
            },
            {
                name: 'System Programming',
                description: 'Programming at the system level.',
                courses: ['C Programming', 'Operating Systems', 'Computer Architecture']
            }
        ]
    },
    design: {
        title: 'Design',
        icon: 'fa-palette',
        color: 'pink',
        departments: [
            {
                name: 'UI/UX Design',
                description: 'Creating intuitive and engaging user interfaces and experiences.',
                courses: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
            },
            {
                name: 'Graphic Design',
                description: 'Visual communication through typography, imagery, and layout.',
                courses: ['Typography', 'Brand Identity', 'Print Design', 'Digital Illustration']
            },
            {
                name: 'Web Design',
                description: 'Designing websites and web interfaces.',
                courses: ['Responsive Design', 'CSS Frameworks', 'Design Systems', 'Accessibility']
            },
            {
                name: 'Motion Design',
                description: 'Creating animated graphics and visual effects.',
                courses: ['After Effects', 'Animation Principles', 'Motion Graphics', 'VFX']
            }
        ]
    },
    '3ddesign': {
        title: '3D Design',
        icon: 'fa-cube',
        color: 'indigo',
        departments: [
            {
                name: '3D Modeling',
                description: 'Creating three-dimensional representations of objects.',
                courses: ['Polygonal Modeling', 'NURBS Modeling', 'Sculpting', 'Hard Surface Modeling']
            },
            {
                name: 'Animation',
                description: 'Bringing 3D models to life through movement.',
                courses: ['Character Animation', 'Rigging', 'Motion Capture', 'Physics Simulation']
            },
            {
                name: 'Rendering',
                description: 'Generating photorealistic images from 3D models.',
                courses: ['Lighting', 'Materials', 'Texturing', 'Compositing']
            },
            {
                name: 'Game Development',
                description: 'Creating interactive 3D experiences for games.',
                courses: ['Game Engines', 'Level Design', 'Character Design', 'Game Mechanics']
            }
        ]
    },
    languages: {
        title: 'Languages',
        icon: 'fa-language',
        color: 'red',
        departments: [
            {
                name: 'English Language',
                description: 'Master the English language for academic and professional success.',
                courses: ['Grammar', 'Vocabulary', 'Writing Skills', 'Business English']
            },
            {
                name: 'Arabic Language',
                description: 'Learn Arabic for communication and cultural understanding.',
                courses: ['Modern Standard Arabic', 'Classical Arabic', 'Dialects', 'Arabic Literature']
            },
            {
                name: 'Translation Studies',
                description: 'Study of translation theory and practice.',
                courses: ['Translation Theory', 'Technical Translation', 'Literary Translation', 'Interpretation']
            },
            {
                name: 'Linguistics',
                description: 'Scientific study of language and its structure.',
                courses: ['Phonetics', 'Syntax', 'Semantics', 'Sociolinguistics']
            }
        ]
    },
    biology: {
        title: 'Biology',
        icon: 'fa-dna',
        color: 'teal',
        departments: [
            {
                name: 'Genetics',
                description: 'Study of genes, genetic variation, and heredity.',
                courses: ['Molecular Genetics', 'Population Genetics', 'Genomics', 'Gene Therapy']
            },
            {
                name: 'Ecology',
                description: 'Study of organisms and their environment.',
                courses: ['Ecosystem Ecology', 'Conservation Biology', 'Marine Biology', 'Behavioral Ecology']
            },
            {
                name: 'Anatomy & Physiology',
                description: 'Study of the structure and function of living organisms.',
                courses: ['Human Anatomy', 'Comparative Anatomy', 'Physiology', 'Pathophysiology']
            },
            {
                name: 'Microbiology',
                description: 'Study of microscopic organisms.',
                courses: ['Bacteriology', 'Virology', 'Immunology', 'Parasitology']
            }
        ]
    },
    geology: {
        title: 'Geology',
        icon: 'fa-mountain',
        color: 'yellow',
        departments: [
            {
                name: 'Mineralogy',
                description: 'Study of minerals and their properties.',
                courses: ['Crystallography', 'Optical Mineralogy', 'X-ray Crystallography', 'Mineral Physics']
            },
            {
                name: 'Petrology',
                description: 'Study of rocks and their formation.',
                courses: ['Igneous Petrology', 'Metamorphic Petrology', 'Sedimentary Petrology', 'Petrography']
            },
            {
                name: 'Seismology',
                description: 'Study of earthquakes and seismic waves.',
                courses: ['Earthquake Mechanics', 'Seismic Wave Propagation', 'Seismotectonics', 'Hazard Assessment']
            },
            {
                name: 'Paleontology',
                description: 'Study of fossils and ancient life forms.',
                courses: ['Invertebrate Paleontology', 'Vertebrate Paleontology', 'Paleobotany', 'Evolutionary Biology']
            }
        ]
    },
    ai: {
        title: 'Artificial Intelligence',
        icon: 'fa-brain',
        color: 'purple',
        departments: [
            {
                name: 'Machine Learning',
                description: 'Algorithms that improve through experience.',
                courses: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Deep Learning']
            },
            {
                name: 'Neural Networks',
                description: 'Computational models inspired by the human brain.',
                courses: ['CNNs', 'RNNs', 'Transformers', 'GANs']
            },
            {
                name: 'Natural Language Processing',
                description: 'Interaction between computers and human language.',
                courses: ['Text Processing', 'Sentiment Analysis', 'Machine Translation', 'Chatbots']
            },
            {
                name: 'Computer Vision',
                description: 'Enabling computers to interpret and understand visual information.',
                courses: ['Image Processing', 'Object Detection', 'Facial Recognition', '3D Reconstruction']
            }
        ]
    }
};

// Modal functions
function showLoginModal() {
    document.getElementById('loginModal').classList.remove('hidden');
}

function showRegisterModal() {
    document.getElementById('registerModal').classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

function switchToRegister() {
    closeModal('loginModal');
    showRegisterModal();
}

function switchToLogin() {
    closeModal('registerModal');
    showLoginModal();
}

// Form handlers
function handleLogin(event) {
    event.preventDefault();
    showNotification('Login successful! Welcome back to EduHub.', 'success');
    closeModal('loginModal');
    // Here you would typically send the login data to your backend
}

function handleRegister(event) {
    event.preventDefault();
    showNotification('Registration successful! Welcome to EduHub.', 'success');
    closeModal('registerModal');
    // Here you would typically send the registration data to your backend
}

function handleContactSubmit(event) {
    event.preventDefault();
    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
    event.target.reset();
    // Here you would typically send the contact form data to your backend
}

// Subject details
function showSubjectDetails(subjectKey) {
    const subject = subjectsData[subjectKey];
    const content = document.getElementById('subjectContent');
    
    let departmentsHTML = subject.departments.map(dept => `
        <div class="mb-8">
            <h3 class="text-2xl font-semibold mb-3 text-${subject.color}-600">${dept.name}</h3>
            <p class="text-gray-600 mb-4">${dept.description}</p>
            <div class="bg-gray-50 rounded-lg p-4">
                <h4 class="font-semibold mb-2">Available Courses:</h4>
                <div class="flex flex-wrap gap-2">
                    ${dept.courses.map(course => `
                        <span class="bg-${subject.color}-100 text-${subject.color}-700 px-3 py-1 rounded-full text-sm">
                            ${course}
                        </span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    content.innerHTML = `
        <div class="text-center mb-8">
            <i class="fas ${subject.icon} text-6xl text-${subject.color}-600 mb-4"></i>
            <h2 class="text-4xl font-bold text-gray-800">${subject.title}</h2>
        </div>
        ${departmentsHTML}
        <div class="text-center mt-8">
            <button onclick="showRegisterModal(); closeModal('subjectModal');" class="bg-${subject.color}-600 text-white px-6 py-3 rounded-lg hover:bg-${subject.color}-700 transition">
                Enroll Now
            </button>
        </div>
    `;
    
    document.getElementById('subjectModal').classList.remove('hidden');
}

// Notification system
function showNotification(message, type = 'info') {
    const container = document.getElementById('notificationContainer');
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
    
    notification.className = `notification ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// Smooth scroll
function scrollToSubjects() {
    document.getElementById('subjects').scrollIntoView({ behavior: 'smooth' });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu if open
            document.getElementById('mobileMenu').classList.add('hidden');
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('shadow-lg');
    } else {
        header.classList.remove('shadow-lg');
    }
});

// Initialize animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

// Observe all cards
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.subject-card, .stat-card, .card').forEach(card => {
        observer.observe(card);
    });
});
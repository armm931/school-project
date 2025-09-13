# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

**Edstudy** is a comprehensive educational platform that provides Arabic-language educational content across multiple academic subjects. The platform features a bilingual interface (Arabic/English) with subject-specific modules for Chemistry, Physics, Mathematics, Programming, Biology, Geology, Languages, Design, and 3D Design.

## Technology Stack

- **Frontend**: Static HTML, CSS, JavaScript (Vanilla JS)
- **CSS Framework**: TailwindCSS (CDN) + Bootstrap 5.3.7 (CDN) + Custom CSS
- **Icons**: Font Awesome 6.4.0
- **Deployment**: Netlify (static site hosting)
- **Development Tools**: VS Code with Live Server extension

## Architecture

### Directory Structure
```
/
├── html/                    # All HTML pages organized by subject
│   ├── app.html            # Main landing page
│   ├── Biology/            # Biology subject pages
│   ├── Chemistry/          # Chemistry subject pages  
│   ├── Programming/        # Programming field pages
│   ├── Physics/            # Physics subject pages
│   ├── mathematics/        # Mathematics subject pages
│   ├── Geology/            # Geology subject pages
│   ├── Languages/          # Languages subject pages
│   ├── Design/             # Design subject pages
│   └── 3D Design/          # 3D Design subject pages
├── css/                    # Subject-specific stylesheets
│   ├── app.css            # Main application styles
│   ├── Biology.css        # Biology page styles
│   ├── Chemistry.css      # Chemistry page styles
│   ├── Programming.css    # Programming page styles
│   └── [subject].css      # Other subject-specific styles
├── js/                     # JavaScript modules
│   ├── app.js            # Main application logic
│   ├── Programming.js    # Programming page functionality
│   └── [subject].js      # Subject-specific JavaScript
├── img/                   # Static images and assets
├── my-app/               # Express.js backend (minimal setup)
└── netlify.toml          # Netlify deployment configuration
```

### Key Components

**Main Landing Page** (`html/app.html`)
- Hero section with platform introduction
- Statistics showcase (courses, students, instructors, success rate)
- Subject cards with navigation to specialized pages
- Modal system for login/registration
- Responsive navigation with mobile menu

**Subject-Specific Pages**
- Each subject has dedicated HTML, CSS, and JavaScript files
- Programming page features comprehensive field exploration (Web Dev, Mobile Dev, Data Science, AI, Game Development)
- Interactive elements with animation and smooth scrolling
- Subject-specific content and educational resources

**Styling Architecture**
- CSS Custom Properties (CSS Variables) for consistent theming
- Primary color scheme: Purple/violet gradient (`#7e22ce`, `#6b21a8`)
- Responsive design with mobile-first approach
- Animation systems (fade-in, hover effects, scroll animations)
- Card-based UI components with shadows and hover states

**JavaScript Functionality**
- Modal management system
- Smooth scrolling navigation
- Form handling (login, registration, contact)
- Notification system
- Intersection Observer for scroll animations
- Tab functionality for resource sections
- Mobile menu toggling

## Development Commands

### Local Development
```powershell
# Start development server using VS Code Live Server
# Right-click on html/app.html → "Open with Live Server"
# Or use the Live Server extension on port 5501 (configured in .vscode/settings.json)

# Alternative: Use any static file server
# Python (if installed)
python -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server . -p 8000
```

### Build and Deployment
```powershell
# No build step required - static files are served directly
# Deployment is handled by Netlify based on netlify.toml configuration

# Netlify will:
# - Publish from root directory (publish = ".")  
# - Redirect all routes to /html/app.html for SPA behavior
# - Serve static files directly
```

### Testing and Validation
```powershell
# Validate HTML files
# Use VS Code HTML validation or online validators

# Test responsive design
# Use browser developer tools device emulation

# Check accessibility
# Use browser accessibility tools or lighthouse
```

## Development Guidelines

### File Organization
- Keep subject-specific files in their respective directories
- Use consistent naming: `[Subject].html`, `[Subject].css`, `[Subject].js`
- Store all images in `/img/` directory with descriptive names
- Maintain Arabic RTL (`dir="rtl"`) support where needed

### CSS Standards  
- Use CSS Custom Properties defined in `:root` selector
- Follow BEM-like naming for component classes
- Maintain responsive design patterns (mobile-first)
- Use consistent spacing scale and color palette
- Implement smooth transitions (0.3s ease is standard)

### JavaScript Patterns
- Use event delegation for dynamic content
- Implement smooth scrolling for navigation
- Handle modal states consistently
- Use Intersection Observer for performance-efficient animations
- Follow Arabic language support in dynamic content

### Content Management
- All educational content is in Arabic
- Subject descriptions follow academic standards
- Programming content includes salary ranges and job market data
- Maintain consistent card layouts across subjects

### Accessibility Considerations
- Include proper ARIA labels for Arabic content
- Ensure keyboard navigation works across all modals
- Maintain color contrast ratios for readability
- Support screen readers with semantic HTML structure

### Deployment Notes
- Static site hosted on Netlify
- Main entry point: `/html/app.html`
- All routes redirect to main app for SPA-like behavior
- No server-side processing required
- CDN-based external dependencies (TailwindCSS, Bootstrap, Font Awesome)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- JavaScript ES6+ features used
- CSS Grid and Flexbox for layouts
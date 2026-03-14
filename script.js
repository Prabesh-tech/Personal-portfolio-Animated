// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Loading screen
  const loadingScreen = document.getElementById('loadingScreen');
  
  // Hide loading screen after 2 seconds with enhanced animation
  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    loadingScreen.style.transform = 'scale(1.2)';
    
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
      // After transition completes, remove from DOM
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        // Initialize animations after loading
        initAnimations();
      }, 500);
    }, 300);
  }, 2000);
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') 
      ? '<i class="fas fa-times"></i>' 
      : '<i class="fas fa-bars"></i>';
    
    // Add animation to menu items
    if (navLinks.classList.contains('active')) {
      const menuItems = document.querySelectorAll('.nav-links a');
      menuItems.forEach((item, index) => {
        item.style.animation = `slideInRight 0.5s ease-out ${index * 0.1}s both`;
      });
    }
  });
  
  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
  
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for background change
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 100) {
      // Scrolling down
      navbar.classList.add('hidden');
    } else {
      // Scrolling up
      navbar.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
  });
  
  // Set active nav link based on scroll position
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a');
  
  function setActiveNavLink() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href').substring(1) === current) {
        item.classList.add('active');
        // Add animation effect
        item.style.transform = 'scale(1.1)';
        setTimeout(() => {
          item.style.transform = '';
        }, 300);
      }
    });
  }
  
  window.addEventListener('scroll', setActiveNavLink);
  
  // Back to top button
  const backToTop = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Add bounce animation
    backToTop.style.animation = 'bounce 0.5s';
    setTimeout(() => {
      backToTop.style.animation = '';
    }, 500);
  });
  
  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('i');
  let isDarkTheme = true;
  
  themeToggle.addEventListener('click', () => {
    if (isDarkTheme) {
      // Switch to light theme
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      isDarkTheme = false;
      
      // Update CSS variables for light theme
      document.documentElement.style.setProperty('--dark', '#f5f5f5');
      document.documentElement.style.setProperty('--light', '#333333');
      document.documentElement.style.setProperty('--light-gray', '#666666');
    } else {
      // Switch to dark theme
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      isDarkTheme = true;
      
      // Reset to dark theme variables
      document.documentElement.style.setProperty('--dark', '#0d0d0d');
      document.documentElement.style.setProperty('--light', '#ffffff');
      document.documentElement.style.setProperty('--light-gray', '#cccccc');
    }
    
    // Add rotate animation
    themeToggle.style.animation = 'rotate 0.5s';
    setTimeout(() => {
      themeToggle.style.animation = '';
    }, 500);
  });
  
  // Download CV button
  const downloadCV = document.getElementById('downloadCV');
  downloadCV.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create a sample CV content
    const cvContent = `Prabesh Kafle - Frontend Developer & UI/UX Designer
=================================================

CONTACT INFORMATION
-------------------
Email: prabeshkafle363@gmail.com
Phone: +977-9849358446
Location: Kathmandu, Nepal
Portfolio: prabesh.dev
GitHub: github.com/Prabesh-tech
LinkedIn: linkedin.com/in/prabesh-kafle45

PROFESSIONAL SUMMARY
-------------------
Passionate Frontend Developer and UI/UX Designer with 2+ years of experience 
in creating modern, responsive web applications. Currently pursuing Computer 
Science degree with focus on web technologies and user experience design.

TECHNICAL SKILLS
----------------
• Frontend: HTML5, CSS3, JavaScript, React.js, Vue.js, Tailwind CSS
• UI/UX: Figma, Adobe XD, Responsive Design, Prototyping
• Tools: Git, VS Code, Webpack, npm, REST APIs
• Languages: JavaScript, TypeScript, Python

EXPERIENCE
----------
• Developed 15+ web applications and portfolio websites
• Created responsive e-commerce platforms with payment integration
• Designed intuitive user interfaces for various web applications
• Implemented modern frontend architectures and design systems

EDUCATION
---------
B.Sc. Computer Science (Ongoing)
Focus on Web Technologies and User Experience Design

PROJECTS
--------
1. Modern E-commerce Platform - React, Node.js, MongoDB
2. Financial Analytics Dashboard - Vue.js, Chart.js, Firebase
3. Weather Forecast App - JavaScript, OpenWeather API, PWA
4. Portfolio Website - HTML5, CSS3, GSAP Animations
5. Task Management Application - React, Redux, Express
6. Real-time Chat Application - Socket.io, React, MongoDB

AVAILABILITY
------------
Available for freelance projects and full-time opportunities.
Open to remote work and collaboration on exciting projects.

This CV was downloaded from prabesh.dev portfolio.`;
    
    // Create blob and download
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Prabesh_Kafle_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    // Show notification
    showNotification('CV downloaded successfully!', 'success');
    
    // Add download animation to button
    const originalHTML = downloadCV.innerHTML;
    downloadCV.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
    downloadCV.style.background = 'linear-gradient(45deg, #00cc00, #00ff00)';
    downloadCV.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
      downloadCV.innerHTML = originalHTML;
      downloadCV.style.background = '';
      downloadCV.style.transform = '';
    }, 2000);
  });
  
  // Contact form submission with EmailJS
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Validation
    if (!data.name || !data.email || !data.message) {
      showFormStatus('Please fill in all required fields.', 'error');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showFormStatus('Please enter a valid email address.', 'error');
      return;
    }
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate sending email (in production, connect to EmailJS or backend)
    setTimeout(() => {
      // In a real implementation, you would:
      // 1. Use EmailJS: emailjs.send(service_id, template_id, template_params)
      // 2. Or use Formspree: fetch('https://formspree.io/f/your-form-id', { method: 'POST', body: formData })
      
      // For demo purposes, we'll simulate success
      const isSuccess = Math.random() > 0.1; // 90% success rate for demo
      
      if (isSuccess) {
        showFormStatus('Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
        
        // Send email notification to yourself (using mailto as fallback)
        const mailtoLink = `mailto:prabeshkafle363@gmail.com?subject=New Contact from Portfolio&body=Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0ASubject: ${data.subject}%0D%0AMessage: ${data.message}`;
        window.open(mailtoLink, '_blank');
        
        // Show desktop notification
        if (Notification.permission === 'granted') {
          new Notification('Message Sent', {
            body: 'Thank you for your message!',
            icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png'
          });
        }
      } else {
        showFormStatus('Failed to send message. Please try again or email directly.', 'error');
      }
      
      // Reset button
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
  
  function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = type;
    
    // Add animation
    formStatus.style.animation = 'slideInUp 0.3s ease-out';
    
    // Auto hide after 5 seconds
    setTimeout(() => {
      formStatus.style.animation = 'slideOutUp 0.3s ease-out forwards';
      setTimeout(() => {
        formStatus.textContent = '';
        formStatus.className = '';
        formStatus.style.animation = '';
      }, 300);
    }, 5000);
  }
  
  // Initialize animations on scroll
  function initAnimations() {
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          
          // Add staggered animation for child elements
          const childElements = entry.target.querySelectorAll('.animate-child');
          childElements.forEach((child, index) => {
            child.style.animationDelay = `${index * 0.1}s`;
            child.classList.add('animated');
          });
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(element => observer.observe(element));
    
    // Add hover animations to elements
    document.querySelectorAll('.project-card, .service-card').forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  }
  
  // Copy email to clipboard
  window.copyEmail = function() {
    const email = document.getElementById('emailText').textContent;
    navigator.clipboard.writeText(email)
      .then(() => {
        showNotification('Email copied to clipboard!', 'success');
        
        // Animate the copy button
        const copyBtn = document.querySelector('.copy-btn');
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        copyBtn.style.background = 'rgba(0, 255, 0, 0.1)';
        copyBtn.style.borderColor = '#00ff00';
        
        setTimeout(() => {
          copyBtn.innerHTML = originalHTML;
          copyBtn.style.background = '';
          copyBtn.style.borderColor = '';
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy email: ', err);
        showNotification('Failed to copy email', 'error');
      });
  };
  
  // Notification system
  function showNotification(message, type) {
    const container = document.getElementById('notificationContainer');
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
      <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
      <span>${message}</span>
    `;
    
    container.appendChild(notification);
    
    // Remove notification after animation
    setTimeout(() => {
      notification.remove();
    }, 5000);
  }
  
  // Add hover effects to social icons
  document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1.1) rotate(10deg)';
    });
    
    icon.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1) rotate(0)';
    });
  });
  
  // Add click effects to circle nodes
  document.querySelectorAll('.circle-node').forEach(node => {
    node.addEventListener('click', function() {
      this.style.animation = 'pulse 0.5s';
      setTimeout(() => {
        this.style.animation = '';
      }, 500);
    });
  });
  
  // Add typing animation to title
  const title = document.querySelector('.typing-animation');
  if (title) {
    // Reset animation on hover
    title.addEventListener('mouseenter', () => {
      title.style.animation = 'none';
      setTimeout(() => {
        title.style.animation = 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite';
      }, 10);
    });
  }
  
  // Add parallax effect to background
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('body::before');
    
    if (parallax) {
      const rate = scrolled * -0.5;
      parallax.style.transform = `translate3d(0, ${rate}px, 0)`;
    }
  });
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search (contact form)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      document.getElementById('name').focus();
    }
    
    // Escape to close mobile menu
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
  
  // Add CSS for additional animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    @keyframes slideOutUp {
      from {
        transform: translateY(0);
        opacity: 1;
      }
      to {
        transform: translateY(-20px);
        opacity: 0;
      }
    }
    
    .animate-child {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-child.animated {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Light theme styles */
    .light-theme {
      background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 50%, #dcdcdc 100%);
      color: #333333;
    }
    
    .light-theme .content-box {
      background: rgba(255, 255, 255, 0.9);
      border-color: rgba(255, 0, 127, 0.2);
      color: #333333;
    }
    
    .light-theme .section-title {
      text-shadow: 0 0 10px rgba(255, 0, 127, 0.2);
    }
    
    .light-theme .highlight {
      text-shadow: 0 0 5px rgba(255, 0, 127, 0.3);
    }
    
    .light-theme .btn {
      box-shadow: 0 4px 15px rgba(255, 0, 127, 0.2);
    }
    
    .light-theme .social-icon {
      background: rgba(255, 255, 255, 0.8);
      color: #333333;
    }
    
    .light-theme .social-icon:hover {
      background: var(--primary);
      color: white;
    }
    
    .light-theme .footer {
      background: rgba(245, 245, 245, 0.95);
      color: #333333;
    }
    
    .light-theme .footer-column a {
      color: #666666;
    }
    
    .light-theme .footer-column a:hover {
      color: var(--primary);
    }
  `;
  document.head.appendChild(style);
  
  // Request notification permission
  if ('Notification' in window && Notification.permission === 'default') {
    setTimeout(() => {
      Notification.requestPermission();
    }, 3000);
  }
  
  // Initialize with active section
  setActiveNavLink();
  
  // Add welcome message in console
  console.log('%c👋 Welcome to Prabesh\'s Portfolio!', 'color: #ff007f; font-size: 18px; font-weight: bold;');
  console.log('%c🚀 Built with modern web technologies', 'color: #00ffff; font-size: 14px;');
  console.log('%c📧 Contact: prabeshkafle363@gmail.com', 'color: #ff3399; font-size: 14px;');
});

// Add window load event for additional animations
window.addEventListener('load', function() {
  // Animate particles
  const particles = document.querySelectorAll('.particle');
  particles.forEach((particle, index) => {
    particle.style.animationDelay = `${index * 2}s`;
  });
  
  // Add scroll to reveal animations
  const reveals = document.querySelectorAll('.section-title, .section-subtitle');
  reveals.forEach((reveal, index) => {
    reveal.style.animationDelay = `${index * 0.2}s`;
  });
});
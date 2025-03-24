document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
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
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            }
        });
    });

    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animate progress bars when they come into view
    const animateProgressBars = function() {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        progressBars.forEach(bar => {
            const width = bar.getAttribute('style');
            bar.style.width = '0';
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        bar.style = width;
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(bar);
        });
    };

    // Add this with other event listeners
    document.getElementById('downloadCv').addEventListener('click', function(e) {
        e.preventDefault();
        
        // Show preview modal
        const pdfModal = new bootstrap.Modal(document.getElementById('pdfModal'));
        pdfModal.show();
        
        // Alternative: Direct download without preview
        // window.open('your-cv.pdf', '_blank');
    });

    // For direct download (alternative approach)
    function generatePDF() {
        // This would use a library like jsPDF or html2pdf
        // For now we'll just link to an existing PDF
    }

    // If you want to generate PDF from HTML content
    function setupPDFGeneration() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Add content to PDF
        doc.text("Farhan Maulana Syidiq - CV", 10, 10);
        // Add more content as needed
        
        // Save the PDF
        doc.save('farhan_maulana_cv.pdf');
    }

    animateProgressBars();

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For demonstration, we'll just show an alert
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    // Add animation to hero image on scroll
    window.addEventListener('scroll', function() {
        const heroImg = document.querySelector('.hero-img');
        if (heroImg) {
            const scrollPosition = window.scrollY;
            heroImg.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        }
    });

    // Add hover effect to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.timeline-content').style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.timeline-content').style.transform = 'translateY(0)';
        });
    });
});
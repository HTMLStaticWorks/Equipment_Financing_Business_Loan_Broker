/**
 * CAPITALFORGE FINANCE — Core JavaScript Engine
 * Features:
 * 1. Dual Light/Dark Theme Switching with System Preference & localStorage
 * 2. Sticky Navbar & Active Navigation
 * 3. Mobile Navigation & Accessibility Keyboard Handling
 * 4. Interactive Business Loan Calculator Engine (Standard & 0% Amortization)
 * 5. Form Validation & Authentication UI Demonstrations (No Dashboard Redirect)
 * 6. Password Visibility Toggles
 * 7. Back-to-Top Button
 * 8. GSAP Entrance Micro-Animations
 * 9. Coming Soon Countdown Timer
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. Light / Dark Theme Engine
     ========================================================================== */
  const THEME_STORAGE_KEY = 'capitalforge_theme';
  const htmlElement = document.documentElement;

  const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const applyTheme = (theme) => {
    htmlElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    // Update all theme toggle buttons on the page
    document.querySelectorAll('.theme-toggle-btn').forEach((btn) => {
      const icon = btn.querySelector('i');
      if (theme === 'dark') {
        btn.setAttribute('aria-label', 'Switch to light mode');
        btn.setAttribute('title', 'Switch to light mode');
        if (icon) {
          icon.className = 'bi bi-sun-fill text-warning';
        }
      } else {
        btn.setAttribute('aria-label', 'Switch to dark mode');
        btn.setAttribute('title', 'Switch to dark mode');
        if (icon) {
          icon.className = 'bi bi-moon-stars-fill text-primary';
        }
      }
    });
  };

  // Initialize theme
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  // Attach click listeners to all theme toggle buttons
  document.querySelectorAll('.theme-toggle-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-bs-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  });

  // Listen for system theme changes if user has not set a preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_STORAGE_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  /* ==========================================================================
     1.5 Full Right-to-Left (RTL) Layout Engine
     ========================================================================== */
  const RTL_STORAGE_KEY = 'capitalforge_direction';

  const getPreferredDirection = () => {
    return localStorage.getItem(RTL_STORAGE_KEY) || 'ltr';
  };

  const applyDirection = (dir) => {
    if (dir === 'rtl') {
      htmlElement.setAttribute('dir', 'rtl');
    } else {
      htmlElement.removeAttribute('dir');
    }
    localStorage.setItem(RTL_STORAGE_KEY, dir);

    // Update all RTL buttons: only the text RTL or LTR is rendered
    document.querySelectorAll('.rtl-toggle-btn').forEach((btn) => {
      btn.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
      btn.setAttribute('aria-label', dir === 'rtl' ? 'Switch to Left to Right layout' : 'Switch to Right to Left layout');
      btn.setAttribute('title', dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL');
    });
  };

  // Initialize direction
  applyDirection(getPreferredDirection());

  // Attach click listener for RTL toggle
  document.addEventListener('click', (e) => {
    const rtlBtn = e.target.closest('.rtl-toggle-btn');
    if (!rtlBtn) return;
    const currentDir = htmlElement.getAttribute('dir') === 'rtl' ? 'rtl' : 'ltr';
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    applyDirection(newDir);
  });

  /* ==========================================================================
     2. Sticky Header & Active Nav Highlights
     ========================================================================== */
  const header = document.querySelector('.cf-header');
  const backToTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY || window.pageYOffset;
    if (header) {
      if (scrollPos > 25) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Highlight active link matching current page
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .dropdown-item').forEach((link) => {
    const href = link.getAttribute('href');
    if (href && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
      link.classList.add('active');
      // If inside dropdown, mark parent toggle active
      const parentDropdown = link.closest('.dropdown');
      if (parentDropdown) {
        const toggle = parentDropdown.querySelector('.dropdown-toggle');
        if (toggle) toggle.classList.add('active');
      }
    }
  });

  /* ==========================================================================
     3. Mobile Navigation & Keyboard ESC Handling
     ========================================================================== */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // Close any open bootstrap offcanvas or modals
      const openOffcanvas = document.querySelector('.offcanvas.show');
      if (openOffcanvas && window.bootstrap && window.bootstrap.Offcanvas) {
        const instance = window.bootstrap.Offcanvas.getInstance(openOffcanvas);
        if (instance) instance.hide();
      }
      const openModal = document.querySelector('.modal.show');
      if (openModal && window.bootstrap && window.bootstrap.Modal) {
        const modalInstance = window.bootstrap.Modal.getInstance(openModal);
        if (modalInstance) modalInstance.hide();
      }
    }
  });

  /* ==========================================================================
     4. Business Loan Calculator Engine
     ========================================================================== */
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  const currencyWithCentsFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  const calculateLoan = (amount, annualRatePercent, termMonths) => {
    const P = Math.max(0, parseFloat(amount) || 0);
    const n = Math.max(1, parseInt(termMonths, 10) || 12);
    const annualRate = Math.max(0, parseFloat(annualRatePercent) || 0);

    let monthlyPayment = 0;
    let totalRepayment = 0;
    let totalInterest = 0;

    if (P === 0) {
      return { monthlyPayment: 0, totalRepayment: 0, totalInterest: 0, principalShare: 100, interestShare: 0 };
    }

    if (annualRate === 0) {
      // Zero-interest financing
      monthlyPayment = P / n;
      totalRepayment = P;
      totalInterest = 0;
    } else {
      const r = (annualRate / 100) / 12; // Monthly interest rate
      // M = P * [r(1+r)^n] / [(1+r)^n - 1]
      const rateFactor = Math.pow(1 + r, n);
      monthlyPayment = P * (r * rateFactor) / (rateFactor - 1);
      totalRepayment = monthlyPayment * n;
      totalInterest = Math.max(0, totalRepayment - P);
    }

    const principalShare = (P / totalRepayment) * 100;
    const interestShare = (totalInterest / totalRepayment) * 100;

    return {
      monthlyPayment: Math.round(monthlyPayment),
      totalRepayment: Math.round(totalRepayment),
      totalInterest: Math.round(totalInterest),
      principalShare: Math.min(100, Math.max(0, principalShare)),
      interestShare: Math.min(100, Math.max(0, interestShare)),
    };
  };

  // Helper to generate full amortization table rows
  const generateAmortizationSchedule = (amount, annualRatePercent, termMonths) => {
    const P = parseFloat(amount) || 0;
    const n = parseInt(termMonths, 10) || 12;
    const annualRate = parseFloat(annualRatePercent) || 0;
    const r = (annualRate / 100) / 12;
    
    let monthlyPayment = 0;
    if (annualRate === 0) {
      monthlyPayment = P / n;
    } else {
      const rateFactor = Math.pow(1 + r, n);
      monthlyPayment = P * (r * rateFactor) / (rateFactor - 1);
    }

    let balance = P;
    const rows = [];
    const limit = Math.min(n, 12); // Display first 12 months for clean layout

    for (let month = 1; month <= limit; month++) {
      let interestPayment = balance * r;
      if (annualRate === 0) interestPayment = 0;
      let principalPayment = monthlyPayment - interestPayment;
      balance = Math.max(0, balance - principalPayment);

      rows.push({
        month,
        payment: monthlyPayment,
        principal: principalPayment,
        interest: interestPayment,
        balance: balance,
      });
    }

    return rows;
  };

  // Bind calculator instances (supports multiple on one page or dedicated page)
  const initCalculatorInstance = (container) => {
    const amountSlider = container.querySelector('.calc-amount-slider');
    const amountInput = container.querySelector('.calc-amount-input');
    const rateSlider = container.querySelector('.calc-rate-slider');
    const rateInput = container.querySelector('.calc-rate-input');
    const termSelect = container.querySelector('.calc-term-select');
    const termPills = container.querySelectorAll('.term-pill-btn');

    // Outputs
    const monthlyPaymentEl = container.querySelector('.calc-output-monthly');
    const totalRepaymentEl = container.querySelector('.calc-output-total');
    const totalInterestEl = container.querySelector('.calc-output-interest');
    const principalBar = container.querySelector('.breakdown-principal');
    const interestBar = container.querySelector('.breakdown-interest');
    const principalText = container.querySelector('.calc-text-principal');
    const interestText = container.querySelector('.calc-text-interest');
    const scheduleTbody = container.querySelector('.calc-schedule-tbody');

    const updateCalculations = () => {
      let amount = parseFloat(amountSlider ? amountSlider.value : (amountInput ? amountInput.value : 100000));
      let rate = parseFloat(rateSlider ? rateSlider.value : (rateInput ? rateInput.value : 8.5));
      let term = 36;

      if (termSelect) {
        term = parseInt(termSelect.value, 10);
      } else {
        const activePill = container.querySelector('.term-pill-btn.active');
        if (activePill) {
          term = parseInt(activePill.getAttribute('data-term'), 10) || 36;
        }
      }

      const results = calculateLoan(amount, rate, term);

      // Display outputs
      if (monthlyPaymentEl) monthlyPaymentEl.textContent = currencyFormatter.format(results.monthlyPayment);
      if (totalRepaymentEl) totalRepaymentEl.textContent = currencyFormatter.format(results.totalRepayment);
      if (totalInterestEl) totalInterestEl.textContent = currencyFormatter.format(results.totalInterest);

      if (principalBar) principalBar.style.width = `${results.principalShare.toFixed(1)}%`;
      if (interestBar) interestBar.style.width = `${results.interestShare.toFixed(1)}%`;

      if (principalText) principalText.textContent = `${results.principalShare.toFixed(1)}%`;
      if (interestText) interestText.textContent = `${results.interestShare.toFixed(1)}%`;

      // Render Amortization Preview Table if present
      if (scheduleTbody) {
        const schedule = generateAmortizationSchedule(amount, rate, term);
        scheduleTbody.innerHTML = schedule.map(row => `
          <tr>
            <td class="fw-semibold">Month ${row.month}</td>
            <td class="num-tabular">${currencyWithCentsFormatter.format(row.payment)}</td>
            <td class="num-tabular text-primary">${currencyWithCentsFormatter.format(row.principal)}</td>
            <td class="num-tabular text-success">${currencyWithCentsFormatter.format(row.interest)}</td>
            <td class="num-tabular text-muted">${currencyWithCentsFormatter.format(row.balance)}</td>
          </tr>
        `).join('');
      }
    };

    // Amount slider & input sync
    if (amountSlider && amountInput) {
      amountSlider.addEventListener('input', () => {
        amountInput.value = amountSlider.value;
        updateCalculations();
      });
      amountInput.addEventListener('input', () => {
        amountSlider.value = amountInput.value;
        updateCalculations();
      });
    }

    // Rate slider & input sync
    if (rateSlider && rateInput) {
      rateSlider.addEventListener('input', () => {
        rateInput.value = rateSlider.value;
        updateCalculations();
      });
      rateInput.addEventListener('input', () => {
        rateSlider.value = rateInput.value;
        updateCalculations();
      });
    }

    // Term select
    if (termSelect) {
      termSelect.addEventListener('change', updateCalculations);
    }

    // Term pill buttons
    termPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        termPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        if (termSelect) {
          termSelect.value = pill.getAttribute('data-term');
        }
        updateCalculations();
      });
    });

    // Preset chips ($50K, $150K, $500K, etc.)
    container.querySelectorAll('.preset-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        const val = chip.getAttribute('data-val');
        if (amountSlider) amountSlider.value = val;
        if (amountInput) amountInput.value = val;
        updateCalculations();
      });
    });

    // Initial run
    updateCalculations();
  };

  // Find and init all calculator containers
  document.querySelectorAll('.cf-calculator-instance').forEach(initCalculatorInstance);

  /* ==========================================================================
     5. Forms Validation & Demonstrations (No Dashboard Redirect)
     ========================================================================== */
  // Contact & Funding Inquiry Form
  const contactForms = document.querySelectorAll('.cf-consultation-form');
  contactForms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
      }
      form.classList.add('was-validated');

      // Submit feedback simulation
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span> Processing Request...`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();
        form.classList.remove('was-validated');

        // Show success alert card
        const alertBox = form.parentElement.querySelector('.form-success-banner');
        if (alertBox) {
          alertBox.classList.remove('d-none');
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          alert('Thank you! Your funding consultation inquiry has been submitted. A CapitalForge specialist will contact your business shortly.');
        }
      }, 900);
    });
  });

  // Login Form Demo
  const loginForm = document.querySelector('.cf-login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!loginForm.checkValidity()) {
        e.stopPropagation();
        loginForm.classList.add('was-validated');
        return;
      }
      loginForm.classList.add('was-validated');

      const submitBtn = loginForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span> Signing in...`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `Sign In`;
        const alertBox = document.querySelector('.auth-status-alert');
        if (alertBox) {
          alertBox.className = 'auth-status-alert alert alert-success mt-3 mb-0';
          alertBox.innerHTML = `<strong><i class="bi bi-check-circle-fill me-2"></i> Authentication Successful!</strong> Redirecting to dashboard...`;
          alertBox.classList.remove('d-none');
          setTimeout(() => {
            window.location.href = 'dashboard.html';
          }, 800);
        }
      }, 800);
    });
  }

  // Signup Form Demo
  const signupForm = document.querySelector('.cf-signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const pwd = signupForm.querySelector('#signupPassword');
      const confirmPwd = signupForm.querySelector('#signupConfirmPassword');
      
      if (pwd && confirmPwd && pwd.value !== confirmPwd.value) {
        confirmPwd.setCustomValidity('Passwords do not match');
      } else if (confirmPwd) {
        confirmPwd.setCustomValidity('');
      }

      if (!signupForm.checkValidity()) {
        e.stopPropagation();
        signupForm.classList.add('was-validated');
        return;
      }
      signupForm.classList.add('was-validated');

      const submitBtn = signupForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span> Creating Account...`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `Create Account`;
        const alertBox = document.querySelector('.auth-status-alert');
        if (alertBox) {
          alertBox.className = 'auth-status-alert alert alert-success mt-3 mb-0';
          alertBox.innerHTML = `<strong><i class="bi bi-check-circle-fill me-2"></i> Account Created!</strong> Your business account has been created. Redirecting to sign in...`;
          alertBox.classList.remove('d-none');
          setTimeout(() => {
            window.location.href = 'login.html';
          }, 1000);
        }
      }, 800);
    });
  }

  // Forgot Password Form Demo
  const forgotForm = document.querySelector('.cf-forgot-form');
  if (forgotForm) {
    forgotForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!forgotForm.checkValidity()) {
        e.stopPropagation();
        forgotForm.classList.add('was-validated');
        return;
      }
      forgotForm.classList.add('was-validated');

      const submitBtn = forgotForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span> Sending Link...`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `Send Reset Link`;
        const alertBox = document.querySelector('.auth-status-alert');
        if (alertBox) {
          alertBox.className = 'auth-status-alert alert alert-success mt-3 mb-0';
          alertBox.innerHTML = `<strong><i class="bi bi-envelope-check-fill me-2"></i> Reset Link Sent!</strong> If an account is associated with that email, instructions have been sent.`;
          alertBox.classList.remove('d-none');
        }
      }, 700);
    });
  }

  /* ==========================================================================
     6. Password Visibility Toggle
     ========================================================================== */
  document.querySelectorAll('.password-toggle-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const input = btn.previousElementSibling;
      if (!input || input.tagName !== 'INPUT') return;
      const icon = btn.querySelector('i');
      if (input.type === 'password') {
        input.type = 'text';
        if (icon) icon.className = 'bi bi-eye-slash';
      } else {
        input.type = 'password';
        if (icon) icon.className = 'bi bi-eye';
      }
    });
  });

  /* ==========================================================================
     7. Coming Soon Countdown Timer
     ========================================================================== */
  const countdownContainer = document.querySelector('.cf-countdown-timer');
  if (countdownContainer) {
    // 45 days from current date demo target
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 45);

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        countdownContainer.innerHTML = '<span class="fw-bold fs-4">Platform Launched</span>';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const dEl = countdownContainer.querySelector('.count-days');
      const hEl = countdownContainer.querySelector('.count-hours');
      const mEl = countdownContainer.querySelector('.count-minutes');
      const sEl = countdownContainer.querySelector('.count-seconds');

      if (dEl) dEl.textContent = String(days).padStart(2, '0');
      if (hEl) hEl.textContent = String(hours).padStart(2, '0');
      if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
      if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
    };

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  /* ==========================================================================
     8. Subtle GSAP Animations (Respects Reduced Motion)
     ========================================================================== */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
    // Subtle entrance for heroes
    gsap.from('.hero-animate-title', {
      duration: 0.9,
      y: 24,
      opacity: 0,
      ease: 'power3.out',
    });

    gsap.from('.hero-animate-lead', {
      duration: 0.9,
      y: 20,
      opacity: 0,
      delay: 0.2,
      ease: 'power3.out',
    });

    gsap.from('.hero-animate-card', {
      duration: 0.9,
      y: 30,
      opacity: 0,
      delay: 0.35,
      ease: 'power3.out',
    });
  }

  /* ==========================================================================
     9. Client Business Dashboard Interactive Controller
     ========================================================================== */
  const dashNavPills = document.querySelectorAll('.dash-nav-pills .nav-link, [data-dash-target]');
  const dashPanes = document.querySelectorAll('.dash-pane');

  if (dashNavPills.length > 0 && dashPanes.length > 0) {
    dashNavPills.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('data-dash-target') || btn.getAttribute('href');
        if (!targetId) return;

        // Update nav links
        document.querySelectorAll('.dash-nav-pills .nav-link').forEach((link) => {
          if (link.getAttribute('data-dash-target') === targetId || link.getAttribute('href') === targetId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        // Update panes
        dashPanes.forEach((pane) => {
          if (`#${pane.id}` === targetId || pane.id === targetId.replace('#', '')) {
            pane.classList.remove('d-none');
            pane.classList.add('active');
          } else {
            pane.classList.add('d-none');
            pane.classList.remove('active');
          }
        });

        // Smooth scroll to dashboard navigation
        const dashboardTop = document.getElementById('dashboardTabsNav');
        if (dashboardTop) {
          dashboardTop.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });

    // Loan Application Form Submission Handler
    const loanAppForm = document.getElementById('dashLoanAppForm');
    const loanAppFeedback = document.getElementById('dashAppSuccessAlert');

    if (loanAppForm) {
      loanAppForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!loanAppForm.checkValidity()) {
          loanAppForm.classList.add('was-validated');
          return;
        }

        const submitBtn = loanAppForm.querySelector('button[type="submit"]');
        const origText = submitBtn ? submitBtn.innerHTML : 'Submit';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Submitting to Underwriting...';
        }

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = origText;
          }
          loanAppForm.reset();
          loanAppForm.classList.remove('was-validated');

          if (loanAppFeedback) {
            loanAppFeedback.classList.remove('d-none');
            loanAppFeedback.scrollIntoView({ behavior: 'smooth' });
          }
        }, 1200);
      });
    }

    // Document Upload Center Simulation
    const docDropzone = document.getElementById('dashDocDropzone');
    const docFileInput = document.getElementById('dashDocInput');
    const docTableBody = document.getElementById('dashDocTableBody');
    const docUploadProgressBar = document.getElementById('dashDocProgressBar');

    if (docDropzone && docFileInput && docTableBody) {
      docDropzone.addEventListener('click', () => docFileInput.click());

      docDropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        docDropzone.classList.add('dragover');
      });

      docDropzone.addEventListener('dragleave', () => {
        docDropzone.classList.remove('dragover');
      });

      docDropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        docDropzone.classList.remove('dragover');
        if (e.dataTransfer.files.length > 0) {
          handleDocUpload(e.dataTransfer.files[0]);
        }
      });

      docFileInput.addEventListener('change', () => {
        if (docFileInput.files.length > 0) {
          handleDocUpload(docFileInput.files[0]);
        }
      });

      function handleDocUpload(file) {
        if (docUploadProgressBar) {
          docUploadProgressBar.parentElement.classList.remove('d-none');
          docUploadProgressBar.style.width = '0%';
          let progress = 0;
          const interval = setInterval(() => {
            progress += 25;
            docUploadProgressBar.style.width = `${progress}%`;
            if (progress >= 100) {
              clearInterval(interval);
              setTimeout(() => {
                docUploadProgressBar.parentElement.classList.add('d-none');
                addDocRow(file.name, (file.size / 1024 / 1024).toFixed(2));
              }, 400);
            }
          }, 150);
        } else {
          addDocRow(file.name, (file.size / 1024 / 1024).toFixed(2));
        }
      }

      function addDocRow(name, sizeMb) {
        const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        const tr = document.createElement('tr');
        tr.className = 'align-middle table-success-pulse';
        tr.innerHTML = `
          <td>
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-file-earmark-check-fill text-primary fs-5"></i>
              <div>
                <strong class="d-block text-heading">${name}</strong>
                <span class="small text-muted">${sizeMb > 0 ? sizeMb + ' MB' : '1.8 MB'} &bull; Uploaded ${today}</span>
              </div>
            </div>
          </td>
          <td><span class="badge bg-warning text-dark"><i class="bi bi-hourglass-split me-1"></i> Under Review</span></td>
          <td><span class="small text-muted">Awaiting Underwriter Verification</span></td>
          <td class="text-end">
            <button class="btn btn-sm btn-outline-custom p-1 px-2" title="Download"><i class="bi bi-download"></i></button>
          </td>
        `;
        docTableBody.prepend(tr);
      }
    }

    // Offer Selection Modal Actions
    document.querySelectorAll('.btn-accept-offer').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lender = btn.getAttribute('data-lender') || 'Selected Lender';
        const rate = btn.getAttribute('data-rate') || 'Commercial Rate';
        const amount = btn.getAttribute('data-amount') || '$280,000';
        
        const modalLenderEl = document.getElementById('acceptOfferLender');
        const modalDetailsEl = document.getElementById('acceptOfferDetails');
        if (modalLenderEl) modalLenderEl.textContent = lender;
        if (modalDetailsEl) modalDetailsEl.textContent = `Amount: ${amount} | Rate: ${rate}`;

        const offerModalEl = document.getElementById('acceptOfferModal');
        if (offerModalEl && typeof bootstrap !== 'undefined') {
          const modal = new bootstrap.Modal(offerModalEl);
          modal.show();
        }
      });
    });

    // Auto-Pay Toggle Handler
    const autopayToggle = document.getElementById('dashAutopayToggle');
    const autopayStatusText = document.getElementById('dashAutopayStatus');
    if (autopayToggle && autopayStatusText) {
      autopayToggle.addEventListener('change', () => {
        if (autopayToggle.checked) {
          autopayStatusText.innerHTML = '<span class="text-success"><i class="bi bi-check-circle-fill me-1"></i> Active (ACH Direct Debit)</span>';
        } else {
          autopayStatusText.innerHTML = '<span class="text-muted"><i class="bi bi-pause-circle me-1"></i> Paused (Manual Invoicing)</span>';
        }
      });
    }
  }
});

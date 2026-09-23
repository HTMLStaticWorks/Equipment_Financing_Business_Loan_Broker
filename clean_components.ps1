$headerBlock = @'
  <header class="cf-header">
    <nav class="navbar navbar-expand-xl py-3" aria-label="Main Navigation">
      <div class="container">
        <!-- Logo -->
        <a class="navbar-brand-logo" href="index.html">
          <svg width="34" height="34" viewBox="0 0 40 40" fill="none" class="me-1">
            <rect width="40" height="40" rx="10" fill="#0B192C"/>
            <path d="M12 28 L20 18 L28 28" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 28 L20 22 L24 28" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="20" cy="13" r="2.5" fill="#F59E0B"/>
          </svg>
          <span>CAPITAL<span class="text-primary">FORGE</span></span>
        </a>

        <!-- Mobile Controls: RTL, Theme Toggle & Hamburger -->
        <div class="d-flex align-items-center gap-2 d-xl-none ms-auto me-2">
          <button class="rtl-toggle-btn" aria-label="Toggle RTL or LTR layout" title="Toggle RTL/LTR">RTL</button>
          <button class="theme-toggle-btn" aria-label="Toggle theme" title="Toggle theme">
            <i class="bi bi-moon-stars-fill"></i>
          </button>
          <button class="navbar-toggler border-0 shadow-none p-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenuOffcanvas" aria-controls="mobileMenuOffcanvas" aria-label="Toggle navigation">
            <i class="bi bi-list fs-1 text-heading"></i>
          </button>
        </div>

        <!-- Desktop Navigation Menu -->
        <div class="collapse navbar-collapse d-none d-xl-flex">
          <ul class="navbar-nav mx-auto mb-2 mb-xl-0 align-items-center">
            
            <!-- Home Dropdown -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="homeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Home
              </a>
              <ul class="dropdown-menu shadow" aria-labelledby="homeDropdown">
                <li><a class="dropdown-item" href="index.html"><i class="bi bi-house-door me-2 text-primary"></i> Home</a></li>
                <li><a class="dropdown-item" href="home-2.html"><i class="bi bi-briefcase me-2 text-primary"></i> Home 2 (Executive)</a></li>
              </ul>
            </li>

            <!-- Direct Links -->
            <li class="nav-item">
              <a class="nav-link" href="financing.html">Financing</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="solutions.html">Solutions</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="loan-calculator.html">Loan Calculator</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="funding-process.html">How It Works</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="about.html">About</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="dashboard.html">Dashboard</a>
            </li>
          </ul>

          <!-- Right Action Area: RTL Toggle, Theme Toggle & Sign Up Button -->
          <div class="d-flex align-items-center gap-3">
            <button class="rtl-toggle-btn" aria-label="Toggle RTL or LTR layout" title="Toggle RTL/LTR">RTL</button>
            <button class="theme-toggle-btn" aria-label="Toggle theme" title="Toggle theme">
              <i class="bi bi-moon-stars-fill"></i>
            </button>
            <a href="signup.html" class="btn btn-primary btn-sm px-3">
              <i class="bi bi-person-plus me-1"></i> Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
'@

$offcanvasBlock = @'
  <div class="offcanvas offcanvas-end offcanvas-nav" tabindex="-1" id="mobileMenuOffcanvas" aria-labelledby="mobileMenuOffcanvasLabel">
    <div class="offcanvas-header border-bottom">
      <h5 class="offcanvas-title font-heading fw-bold" id="mobileMenuOffcanvasLabel">
        CAPITAL<span class="text-primary">FORGE</span>
      </h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body d-flex flex-column justify-content-between p-3">
      <div>
        <div class="accordion accordion-flush" id="mobileNavAccordion">
          
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingMobileHome">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMobileHome" aria-expanded="false" aria-controls="collapseMobileHome">
                Home Options
              </button>
            </h2>
            <div id="collapseMobileHome" class="accordion-collapse collapse" aria-labelledby="headingMobileHome" data-bs-parent="#mobileNavAccordion">
              <div class="accordion-body">
                <a href="index.html"><i class="bi bi-house me-2"></i> Home 1</a>
                <a href="home-2.html"><i class="bi bi-briefcase me-2"></i> Home 2 (Executive)</a>
              </div>
            </div>
          </div>

          <div class="py-2">
            <a href="financing.html" class="nav-link py-2"><i class="bi bi-grid-3x3-gap me-2 text-primary"></i> Financing</a>
            <a href="solutions.html" class="nav-link py-2"><i class="bi bi-rocket-takeoff me-2 text-primary"></i> Solutions</a>
            <a href="loan-calculator.html" class="nav-link py-2"><i class="bi bi-calculator me-2 text-primary"></i> Loan Calculator</a>
            <a href="funding-process.html" class="nav-link py-2"><i class="bi bi-arrow-repeat me-2 text-primary"></i> How It Works</a>
            <a href="about.html" class="nav-link py-2"><i class="bi bi-info-circle me-2 text-primary"></i> About CapitalForge</a>
            <a href="contact.html" class="nav-link py-2"><i class="bi bi-envelope me-2 text-primary"></i> Contact</a>
            <a href="dashboard.html" class="nav-link py-2"><i class="bi bi-speedometer2 me-2 text-primary"></i> Dashboard</a>
          </div>
        </div>
      </div>

      <div class="pt-4 border-top">
        <div class="d-grid gap-2 mb-3">
          <a href="signup.html" class="btn btn-primary py-2"><i class="bi bi-person-plus me-1"></i> Sign Up</a>
          <a href="loan-calculator.html" class="btn btn-outline-custom"><i class="bi bi-calculator me-1"></i> Calculate Payment</a>
        </div>
        <div class="d-flex justify-content-between align-items-center pt-2">
          <span class="small text-muted">RTL & Theme Controls</span>
          <div class="d-flex align-items-center gap-2">
            <button class="rtl-toggle-btn" aria-label="Toggle RTL or LTR layout" title="Toggle RTL/LTR">RTL</button>
            <button class="theme-toggle-btn" aria-label="Toggle theme" title="Toggle theme">
              <i class="bi bi-moon-stars-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
'@

$footerBlock = @'
  <footer class="cf-footer">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4">
          <a class="navbar-brand-logo mb-3" href="index.html">
            <svg width="34" height="34" viewBox="0 0 40 40" fill="none" class="me-1">
              <rect width="40" height="40" rx="10" fill="#0B192C"/>
              <path d="M12 28 L20 18 L28 28" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 28 L20 22 L24 28" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="20" cy="13" r="2.5" fill="#F59E0B"/>
            </svg>
            <span>CAPITAL<span class="text-primary">FORGE</span></span>
          </a>
          <p class="small text-muted mb-3" style="max-width: 320px;">
            CapitalForge Finance is an independent commercial financing brokerage partner helping growing enterprises explore equipment loans, working capital, and flexible lines of credit.
          </p>
          <div class="d-flex gap-3 text-body">
            <a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin fs-5"></i></a>
            <a href="#" aria-label="Twitter"><i class="bi bi-twitter-x fs-5"></i></a>
            <a href="#" aria-label="Facebook"><i class="bi bi-facebook fs-5"></i></a>
          </div>
        </div>

        <div class="col-6 col-lg-2">
          <h5>Financing</h5>
          <ul class="list-unstyled">
            <li><a href="equipment-financing.html">Equipment Financing</a></li>
            <li><a href="equipment-loans.html">Equipment Loans</a></li>
            <li><a href="working-capital.html">Working Capital</a></li>
            <li><a href="business-line-of-credit.html">Line of Credit</a></li>
            <li><a href="commercial-financing.html">Commercial Financing</a></li>
            <li><a href="financing.html">All Solutions</a></li>
          </ul>
        </div>

        <div class="col-6 col-lg-2">
          <h5>Company</h5>
          <ul class="list-unstyled">
            <li><a href="about.html">About Us</a></li>
            <li><a href="funding-process.html">How It Works</a></li>
            <li><a href="loan-calculator.html">Loan Calculator</a></li>
            <li><a href="solutions.html">Growth Solutions</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="dashboard.html">Client Dashboard</a></li>
            <li><a href="documentation/index.html">Template Docs</a></li>
          </ul>
        </div>

        <div class="col-lg-4">
          <h5>Contact</h5>
          <ul class="list-unstyled small text-muted">
            <li class="mb-2"><i class="bi bi-geo-alt text-primary me-2"></i> 100 Financial Plaza, Suite 1400, New York, NY 10005</li>
            <li class="mb-2"><i class="bi bi-telephone text-primary me-2"></i> (800) 555-0199</li>
            <li class="mb-2"><i class="bi bi-envelope text-primary me-2"></i> info@capitalforgefinance.demo</li>
            <li class="mb-2"><i class="bi bi-clock text-primary me-2"></i> Mon &ndash; Fri: 8:00 AM &ndash; 6:00 PM EST</li>
          </ul>
        </div>
      </div>

      <div class="footer-disclaimer-box mt-4">
        <strong>Commercial Brokerage Disclosure:</strong> Financing availability, rates, fees, terms, and eligibility are subject to lender criteria and may vary. CapitalForge Finance is an independent financing broker connecting business borrowers with potential commercial funding sources. We are not a direct lender, chartered bank, or government agency.
      </div>

      <div class="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div>&copy; 2026 CapitalForge Finance. All rights reserved.</div>
        <div class="d-flex gap-3 mt-2 mt-md-0 small">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Disclosures</a>
          <a href="dashboard.html">Client Portal</a>
        </div>
      </div>
    </div>
  </footer>
'@

$pages = @(
    'index.html',
    'home-2.html',
    'financing.html',
    'financing-details.html',
    'equipment-financing.html',
    'equipment-loans.html',
    'working-capital.html',
    'business-line-of-credit.html',
    'commercial-financing.html',
    'solutions.html',
    'funding-process.html',
    'loan-calculator.html',
    'about.html',
    'contact.html'
)

foreach ($page in $pages) {
    if (Test-Path $page) {
        $content = [System.IO.File]::ReadAllText($page, [System.Text.Encoding]::UTF8)

        # Replace Header
        $content = [regex]::Replace($content, '(?s)<header class="cf-header">.*?</header>', $headerBlock)
        
        # Replace Offcanvas
        $content = [regex]::Replace($content, '(?s)<div class="offcanvas offcanvas-end offcanvas-nav".*?</div>\s*</div>\s*</div>\s*</div>', $offcanvasBlock)

        # Replace Footer
        $content = [regex]::Replace($content, '(?s)<footer class="cf-footer">.*?</footer>', $footerBlock)

        [System.IO.File]::WriteAllText($page, $content, [System.Text.Encoding]::UTF8)
        Write-Host "Updated: $page"
    }
}

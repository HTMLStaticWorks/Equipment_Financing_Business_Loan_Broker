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

        <!-- Mobile Controls: Only Hamburger Menu in Header (RTL, Theme & Sign Up inside Menu Drawer) -->
        <div class="d-flex align-items-center d-xl-none ms-auto">
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
  <!-- Mobile Offcanvas Menu (Exact match to Navbar menus + All Controls inside) -->
  <div class="offcanvas offcanvas-end offcanvas-nav" tabindex="-1" id="mobileMenuOffcanvas" aria-labelledby="mobileMenuOffcanvasLabel">
    <div class="offcanvas-header border-bottom">
      <a class="navbar-brand-logo" href="index.html">
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" class="me-1">
          <rect width="40" height="40" rx="10" fill="#0B192C"/>
          <path d="M12 28 L20 18 L28 28" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 28 L20 22 L24 28" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="20" cy="13" r="2.5" fill="#F59E0B"/>
        </svg>
        <span>CAPITAL<span class="text-primary">FORGE</span></span>
      </a>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body d-flex flex-column justify-content-between p-3">
      <div>
        <div class="accordion accordion-flush" id="mobileNavAccordion">
          
          <!-- Home Accordion Item matching Home Dropdown -->
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingMobileHome">
              <button class="accordion-button collapsed py-2 px-1 fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMobileHome" aria-expanded="false" aria-controls="collapseMobileHome">
                <span><i class="bi bi-house-door me-2 text-primary"></i> Home</span>
              </button>
            </h2>
            <div id="collapseMobileHome" class="accordion-collapse collapse" aria-labelledby="headingMobileHome" data-bs-parent="#mobileNavAccordion">
              <div class="accordion-body py-2 ps-4 d-flex flex-column gap-2">
                <a href="index.html" class="nav-link py-1"><i class="bi bi-house me-2 text-primary"></i> Home</a>
                <a href="home-2.html" class="nav-link py-1"><i class="bi bi-briefcase me-2 text-primary"></i> Home 2 (Executive)</a>
              </div>
            </div>
          </div>

          <!-- Direct Links matching desktop Navbar exactly in order and names -->
          <div class="d-flex flex-column gap-1 pt-1">
            <a href="financing.html" class="nav-link py-2 px-1 d-flex align-items-center"><i class="bi bi-grid-3x3-gap me-2 text-primary"></i> Financing</a>
            <a href="solutions.html" class="nav-link py-2 px-1 d-flex align-items-center"><i class="bi bi-rocket-takeoff me-2 text-primary"></i> Solutions</a>
            <a href="loan-calculator.html" class="nav-link py-2 px-1 d-flex align-items-center"><i class="bi bi-calculator me-2 text-primary"></i> Loan Calculator</a>
            <a href="funding-process.html" class="nav-link py-2 px-1 d-flex align-items-center"><i class="bi bi-arrow-repeat me-2 text-primary"></i> How It Works</a>
            <a href="about.html" class="nav-link py-2 px-1 d-flex align-items-center"><i class="bi bi-info-circle me-2 text-primary"></i> About</a>
            <a href="contact.html" class="nav-link py-2 px-1 d-flex align-items-center"><i class="bi bi-envelope me-2 text-primary"></i> Contact</a>
            <a href="dashboard.html" class="nav-link py-2 px-1 d-flex align-items-center"><i class="bi bi-speedometer2 me-2 text-primary"></i> Dashboard</a>
          </div>
        </div>
      </div>

      <!-- Action Area Inside Menu Page: Sign Up, RTL & Theme Toggle Buttons -->
      <div class="pt-3 border-top mt-auto">
        <div class="mb-3">
          <a href="signup.html" class="btn btn-primary w-100 py-2 d-flex align-items-center justify-content-center gap-2">
            <i class="bi bi-person-plus"></i> Sign Up
          </a>
        </div>
        <div class="d-flex justify-content-between align-items-center px-1">
          <span class="small text-muted fw-semibold">Controls</span>
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
    'how-it-works.html',
    'loan-calculator.html',
    'about.html',
    'contact.html'
)

foreach ($page in $pages) {
    if (Test-Path $page) {
        $content = [System.IO.File]::ReadAllText($page, [System.Text.Encoding]::UTF8)

        # Replace Header cleanly
        if ($content -match '(?s)<header class="cf-header">.*?</header>') {
            $content = [regex]::Replace($content, '(?s)<header class="cf-header">.*?</header>', $headerBlock)
        }

        # Replace between </header> and the next <!-- HERO or <section
        if ($content -match '(?s)</header>.*?(?=<!-- HERO|<section)') {
            $content = [regex]::Replace($content, '(?s)</header>.*?(?=<!-- HERO|<section)', "</header>`r`n`r`n" + $offcanvasBlock + "`r`n`r`n  ")
        }

        [System.IO.File]::WriteAllText($page, $content, [System.Text.Encoding]::UTF8)
        Write-Host "Updated Header & Menu Drawer in: $page"
    }
}

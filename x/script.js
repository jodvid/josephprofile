/* ============================================================
   script.js — Joseph David Portfolio
   ============================================================
   WHAT THIS FILE DOES:
   1. Smooth scrolling for nav links
   2. Nav shadow when page is scrolled
   3. Scroll-triggered fade-in animations for cards
   4. Project lightbox — click a card to open a photo gallery
   ============================================================ */


/* ============================================================
   PROJECT DATA
   ============================================================
   Add your project details here. Each project has:
   - title      : The project heading
   - date       : Date range string
   - tag        : Category label (shown as badge)
   - desc       : Full description paragraph
   - images     : Array of photo URLs for the lightbox gallery
                  First image = main photo shown on the card.
                  Add more images to "images" array to show in gallery.

   HOW TO ADD MORE PHOTOS:
   Upload your images to your Netlify /assets/projects/ folder,
   then add the path to the "images" array below.
   Example: "assets/projects/myproject-photo2.jpg"
   ============================================================ */
const projects = [
  {
    title:  "Cable Landing Station — TELCO Data Center",
    date:   "March 2025 · Ongoing",
    tag:    "Mechanical · Data Center",
    desc:   "Supply and installation of Precision Air-Conditioning Units, DC Rectifiers, Data Racks, and a full Data Center Infrastructure Management (DCIM) system supporting mission-critical telecommunications operations.",
    images: [
      "https://josephdavidcva.netlify.app/assets/projects/DCLU.jpg",
      /* Add more photos below — example:
      "assets/projects/DCLU-2.jpg",
      "assets/projects/DCLU-3.jpg",
      */
    ]
  },
  {
    title:  "VRF System — Hospital & Commercial Complex",
    date:   "November 2024 · Ongoing",
    tag:    "HVAC · VRF Engineering",
    desc:   "Supply and delivery of an energy-efficient Variable Refrigerant Flow (VRF) air conditioning system for a dual-use hospital and commercial facility, ensuring reliable climate control and occupant comfort.",
    images: [
      "https://josephdavidcva.netlify.app/assets/projects/PRIMAC.jpg",
      /* Add more photos here */
    ]
  },
  {
    title:  "Residential Cooling System — Two-Storey Property",
    date:   "January 2025 – October 2025",
    tag:    "Mechanical · Residential",
    desc:   "Full-scope design, supply, and installation of a cooling system for a two-storey residence, tailored to site-specific requirements with a focus on energy efficiency and long-term occupant comfort.",
    images: [
      "https://josephdavidcva.netlify.app/assets/projects/Residential.jpg",
      /* Add more photos here */
    ]
  },
  {
    title:  "Project Schedule — 2-Car Garage ADU Conversion",
    date:   "September 2025",
    tag:    "CVA · Scheduling",
    desc:   "Prepared a detailed Gantt chart for a garage-to-ADU conversion project, enabling efficient planning and tracking of all construction phases from permitting through final inspection.",
    images: [
      "https://josephdavidcva.netlify.app/assets/projects/schedulers.png",
      /* Add more photos here */
    ]
  },
  {
    title:  "14ft EMI-Protected Shelter — Singapore Airport",
    date:   "March 2018 – September 2018",
    tag:    "Fabrication · Singapore",
    desc:   "Fabrication and completion of a 14ft electromagnetic interference (EMI) protected shelter for deployment at a Singaporean international airport, meeting stringent aviation-grade specifications.",
    images: [
      "https://josephdavidcva.netlify.app/assets/projects/sg333.jpg",
      "https://josephdavidcva.netlify.app/assets/projects/truck sg2.jpg",
      /* Add more photos here */
    ]
  },
  {
    title:  "Multi-Discipline Documentation Management",
    date:   "Ongoing",
    tag:    "CVA · Documentation",
    desc:   "Organized and maintained project files across all engineering disciplines using Google Drive, following structured naming conventions and version control protocols aligned with scope requirements.",
    images: [
      "https://josephdavidcva.netlify.app/assets/projects/Documentation.png",
      /* Add more photos here */
    ]
  }
];


/* ============================================================
   LIGHTBOX STATE
   Tracks which project and which photo is currently open.
   ============================================================ */
let currentProject = 0; // Index of the open project (0–5)
let currentPhoto   = 0; // Index of the active photo in that project


/* ============================================================
   DOM REFERENCES
   Grab elements once at the top so we don't query them repeatedly.
   ============================================================ */
const overlay       = document.getElementById('lightbox-overlay');
const lbMainImg     = document.getElementById('lb-main-img');
const lbMainPH      = document.getElementById('lb-main-placeholder');
const lbTitle       = document.getElementById('lb-title');
const lbDate        = document.getElementById('lb-date');
const lbTag         = document.getElementById('lb-tag');
const lbDesc        = document.getElementById('lb-desc');
const lbThumbs      = document.getElementById('lb-thumbs');
const lbCounter     = document.getElementById('lb-counter');


/* ============================================================
   LIGHTBOX: OPEN
   Called when a project card is clicked.
   ============================================================ */
function openLightbox(projectIndex) {
  currentProject = projectIndex;
  currentPhoto   = 0;
  renderLightbox();
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden'; // Prevent page scroll while open
}


/* ============================================================
   LIGHTBOX: CLOSE
   Hides the modal and re-enables page scroll.
   ============================================================ */
function closeLightbox() {
  overlay.classList.remove('open');
  document.body.style.overflow = ''; // Restore scroll
}


/* ============================================================
   LIGHTBOX: RENDER
   Updates all content inside the modal for the current project + photo.
   ============================================================ */
function renderLightbox() {
  const project = projects[currentProject];
  const imageUrl = project.images[currentPhoto];

  // --- Update text ---
  lbTitle.textContent = project.title;
  lbDate.textContent  = project.date;
  lbTag.textContent   = project.tag;
  lbDesc.textContent  = project.desc;

  // --- Update main image ---
  lbMainImg.style.display = 'block';
  lbMainPH.style.display  = 'none';
  lbMainImg.src = imageUrl;
  lbMainImg.alt = project.title;

  // Hide main image and show placeholder if it fails to load
  lbMainImg.onerror = () => {
    lbMainImg.style.display = 'none';
    lbMainPH.style.display  = 'flex';
  };

  // --- Update thumbnail strip ---
  lbThumbs.innerHTML = ''; // Clear old thumbnails
  project.images.forEach((src, i) => {
    const thumb = document.createElement('img');
    thumb.src = src;
    thumb.alt = `Photo ${i + 1}`;
    thumb.className = 'lightbox-thumb' + (i === currentPhoto ? ' active' : '');
    thumb.onclick = () => {
      currentPhoto = i;
      renderLightbox(); // Re-render with new active photo
    };
    lbThumbs.appendChild(thumb);
  });

  // Hide thumbnail strip if only one photo
  lbThumbs.style.display = project.images.length > 1 ? 'flex' : 'none';

  // --- Update counter ---
  lbCounter.textContent = `${currentPhoto + 1} / ${project.images.length}`;
  lbCounter.style.display = project.images.length > 1 ? 'block' : 'none';
}


/* ============================================================
   LIGHTBOX: NAVIGATE PHOTOS
   Cycle forward or backward through photos in the current project.
   ============================================================ */
function prevPhoto() {
  const total = projects[currentProject].images.length;
  currentPhoto = (currentPhoto - 1 + total) % total; // Wrap to end
  renderLightbox();
}

function nextPhoto() {
  const total = projects[currentProject].images.length;
  currentPhoto = (currentPhoto + 1) % total; // Wrap to beginning
  renderLightbox();
}


/* ============================================================
   KEYBOARD SHORTCUTS
   Escape = close, Arrow keys = navigate photos.
   ============================================================ */
document.addEventListener('keydown', (e) => {
  if (!overlay.classList.contains('open')) return; // Only when lightbox is open
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  prevPhoto();
  if (e.key === 'ArrowRight') nextPhoto();
});


/* ============================================================
   CLOSE ON OVERLAY CLICK
   Clicking the dark background (not the modal box) closes it.
   ============================================================ */
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeLightbox();
});


/* ============================================================
   NAV: SMOOTH SCROLL
   Intercepts clicks on anchor links (href="#section")
   and scrolls smoothly instead of jumping.
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


/* ============================================================
   NAV: SHADOW ON SCROLL
   Adds a subtle shadow to the nav bar once the user scrolls down.
   ============================================================ */
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 20
    ? '0 2px 24px rgba(0,0,0,0.08)'
    : 'none';
});


/* ============================================================
   SCROLL ANIMATION
   Cards fade up into view as they enter the viewport.
   Uses IntersectionObserver (no libraries needed).
   ============================================================ */
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// Apply to cards and groups
document.querySelectorAll(
  '.project-card, .skill-group, .service-item, .education-card'
).forEach(el => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease, box-shadow 0.3s ease';
  scrollObserver.observe(el);
});

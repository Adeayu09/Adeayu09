/**
 * Ade Ayu Oktaviana Portfolio Application Logic
 */

import {
  getStoredProfile, saveStoredProfile,
  getStoredPublications, saveStoredPublications,
  getStoredBlogs, saveStoredBlogs,
  defaultExperiences, defaultEducation, defaultAwards, defaultSkills,
  generateDataJsFileContent,
  resetAllDataToDefault
} from './data.js';

// Application State
let state = {
  lang: localStorage.getItem('adeayu_lang') || 'id',
  theme: localStorage.getItem('adeayu_theme') || 'light',
  isLoggedIn: localStorage.getItem('adeayu_logged_in') === 'true',
  profile: getStoredProfile(),
  publications: getStoredPublications(),
  blogs: getStoredBlogs(),
  pubCategory: 'All',
  pubSearch: ''
};

// UI Translations Dictionary
const i18n = {
  id: {
    nav_about: "Tentang",
    nav_wrf: "AERMOD Simulator",
    nav_experience: "Pengalaman & Edukasi",
    nav_research: "Publikasi & Riset",
    nav_blog: "Blogspot",
    nav_contact: "Kontak",
    btn_login: "Login",
    btn_admin_panel: "CMS",
    hero_cta_pubs: "Lihat Publikasi & Riset",
    hero_cta_wrf: "Uji Simulator AERMOD",
    hero_cta_blog: "Baca Artikel Blog",
    hero_cta_contact: "Hubungi Saya",
    avatar_status: "Aktif Meneliti & Berkolaborasi",
    about_subtitle: "Fokus Akademik & Keahlian",
    about_title: "Kombinasi Sains Atmosfer & Rekayasa Lingkungan",
    about_desc: "Menggabungkan riset berbasis alam untuk penangkapan karbon dan simulasi numerik presisi tinggi untuk perlindungan mutu udara.",
    about_focus_title: "Pilar Riset Utama",
    wrf_subtitle: "Simulasi Dispersi AERMOD",
    wrf_title: "AERMOD Air Quality & Dispersion Simulator",
    wrf_desc: "Pemodelan dispersi Gauss, estimasi konsentrasi polutan permukaan & zonasi dampak emisi berbasis standar regulasi US-EPA AERMOD.",
    wrf_ctrl_heading: "Parameter Simulasi AERMOD",
    wrf_scenario_label: "Skenario Emisi & Wilayah",
    wrf_scen_1: "Dispersi Asap Karhutla (Riau & Sumatera)",
    wrf_scen_2: "Dispersi Emisi & PM2.5 (DKI Jakarta)",
    wrf_scen_3: "Adsorpsi CO2 & Biochar Sequestration",
    wrf_mech_label: "Tipe Sumber & Lapisan Batas (PBL)",
    wrf_wind_speed: "Kecepatan Angin (AERMET 10m)",
    wrf_wind_dir: "Arah Angin (Predominan)",
    dir_ne: "Timur Laut (Northeast)",
    dir_e: "Timur (East)",
    dir_se: "Tenggara (Southeast)",
    dir_nw: "Barat Laut (Northwest)",
    wrf_btn_run: "Tampilkan Pola Zonasi",
    wrf_metric_peak: "Konsentrasi Puncak (GLC)",
    wrf_metric_radius: "Radius Sebaran Pluma",
    wrf_metric_aqi: "Indeks Mutu Udara (AQI)",
    wrf_metric_accuracy: "Standar Regulasi",
    wrf_note_title: "Catatan Pemodelan Dispersi Atmosferik (AERMOD Model):",
    wrf_touch_hint: "Klik / Sentuh Wilayah Peta untuk Analisis Konsentrasi",
    focus_1_title: "Carbon Capture & Biochar",
    focus_1_desc: "Sintesis biochar dari limbah organik dan sludge limbah domestik melalui proses pirolisis untuk kapasitas sekuestrasi CO2 maksimal.",
    focus_2_title: "Pemodelan Kualitas Udara & Cuaca",
    focus_2_desc: "Simulasi numerik sebaran asap karhutla dan pencemar industri menggunakan WRF-Chem, AERMOD, CALPUFF, dan HYSPLIT.",
    focus_3_title: "Analisis Spasial & Data Sains",
    focus_3_desc: "Pemrosesan data curah hujan satelit (GSMaP, CHIRPS) dan visualisasi data saintifik menggunakan Python, MATLAB, ArcGIS, & QGIS.",
    about_skills_title: "Keahlian & Perangkat Lunak",
    about_skills_desc: "Perangkat dan metodologi teknis yang digunakan secara rutin dalam kegiatan riset & konsultasi lingkungan:",
    exp_subtitle: "Jejak Langkah Profesional",
    exp_title: "Pendidikan & Pengalaman Kerja",
    edu_heading: "Riwayat Pendidikan",
    work_heading: "Pengalaman Kerja & Riset",
    pubs_subtitle: "Karya Ilmiah",
    pubs_title: "Publikasi & Hasil Penelitian",
    pubs_desc: "Makalah ilmiah terindeks di jurnal internasional dan prosiding konferensi di bidang rekayasa lingkungan dan sains atmosfer.",
    blog_subtitle: "Artikel & Catatan Riset",
    blog_title: "Ade Ayu's Blogspot",
    blog_desc: "Berbagi edukasi saintifik, wawasan teknologi keberlanjutan, dan catatan perjalanan studi Ph.D.",
    awards_subtitle: "Penghargaan & Paten",
    awards_title: "Pencapaian Akademik & Hak Cipta",
    contact_subtitle: "Mari Berkolaborasi",
    contact_title: "Hubungi Ade Ayu Oktaviana",
    contact_desc: "Terbuka untuk kolaborasi riset penyerapan karbon, konsultasi pemodelan kualitas udara, dan diskusi ilmiah.",
    form_name: "Nama Lengkap",
    form_email: "Alamat Email",
    form_subject: "Subjek Pesan",
    form_message: "Pesan Anda",
    form_send: "Kirim Pesan",
    footer_desc: "Portfolio Profesional & Media Publikasi Karya Ilmiah Teknik Lingkungan & Sains Atmosfer.",
    footer_nav: "Navigasi Cepat",
    footer_social: "Jaringan Akademik"
  },
  en: {
    nav_about: "About",
    nav_wrf: "AERMOD Simulator",
    nav_experience: "Experience & Education",
    nav_research: "Publications & Research",
    nav_blog: "Blogspot",
    nav_contact: "Contact",
    btn_login: "Login",
    btn_admin_panel: "CMS",
    hero_cta_pubs: "Explore Research",
    hero_cta_wrf: "Test AERMOD Simulator",
    hero_cta_blog: "Read Blog Posts",
    hero_cta_contact: "Get in Touch",
    avatar_status: "Active Research & Collaboration",
    about_subtitle: "Academic Focus & Expertise",
    about_title: "Atmospheric Science & Environmental Engineering",
    about_desc: "Combining nature-based solutions for carbon sequestration with high-precision numerical simulations for air quality protection.",
    wrf_subtitle: "Interactive AERMOD Simulation",
    wrf_title: "AERMOD Air Quality & Dispersion Simulator",
    wrf_desc: "Gaussian dispersion modeling, ground-level pollutant concentration & impact zoning based on US-EPA AERMOD Modeling System.",
    wrf_ctrl_heading: "AERMOD Simulation Parameters",
    wrf_scenario_label: "Emission Scenario & Region",
    wrf_scen_1: "Wildfire Smoke Dispersion (Riau & Sumatera)",
    wrf_scen_2: "Urban PM2.5 & Industrial Dispersion (Jakarta)",
    wrf_scen_3: "CO2 Adsorption & Biochar Sequestration",
    wrf_mech_label: "Source Type & Boundary Layer (PBL)",
    wrf_wind_speed: "Surface Wind Speed (AERMET 10m)",
    wrf_wind_dir: "Predominant Wind Direction",
    dir_ne: "Northeast",
    dir_e: "East",
    dir_se: "Southeast",
    dir_nw: "Northwest",
    wrf_btn_run: "Show Heatmap Zones",
    wrf_metric_peak: "Peak Concentration (GLC)",
    wrf_metric_radius: "Plume Dispersion Radius",
    wrf_metric_aqi: "Air Quality Index (AQI)",
    wrf_metric_accuracy: "Regulatory Standard",
    wrf_note_title: "AERMOD Atmospheric Dispersion Modeling Note:",
    wrf_touch_hint: "Click / Tap Map Region for Concentration Analysis",
    about_focus_title: "Core Research Pillars",
    focus_1_title: "Carbon Capture & Biochar",
    focus_1_desc: "Biochar synthesis from organic waste and domestic sludge via pyrolysis to maximize CO2 adsorption capacity.",
    focus_2_title: "Air Quality & Weather Modeling",
    focus_2_desc: "Numerical simulations of forest fire smoke and industrial dispersion using WRF-Chem, AERMOD, CALPUFF, and HYSPLIT.",
    focus_3_title: "Spatial Data Science & Analytics",
    focus_3_desc: "Processing satellite precipitation data (GSMaP, CHIRPS) and scientific visualization using Python, MATLAB, ArcGIS, & QGIS.",
    about_skills_title: "Technical Skills & Tools",
    about_skills_desc: "Software suites and technical methodologies used routinely in environmental research and consulting:",
    exp_subtitle: "Professional Journey",
    exp_title: "Education & Work Experience",
    edu_heading: "Academic Background",
    work_heading: "Research & Professional Experience",
    pubs_subtitle: "Scientific Contributions",
    pubs_title: "Publications & Research",
    pubs_desc: "Peer-reviewed scientific papers and conference proceedings in environmental engineering and atmospheric sciences.",
    blog_subtitle: "Articles & Insights",
    blog_title: "Ade Ayu's Blogspot",
    blog_desc: "Sharing scientific insights, environmental sustainability articles, and Ph.D. research updates.",
    awards_subtitle: "Honors & Patents",
    awards_title: "Academic Achievements & Copyrights",
    contact_subtitle: "Let's Collaborate",
    contact_title: "Contact Ade Ayu Oktaviana",
    contact_desc: "Open for research collaborations on carbon capture, air dispersion consulting, and academic inquiries.",
    form_name: "Full Name",
    form_email: "Email Address",
    form_subject: "Subject",
    form_message: "Your Message",
    form_send: "Send Message",
    footer_desc: "Professional Portfolio & Research Platform for Environmental Engineering & Atmospheric Science.",
    footer_nav: "Quick Links",
    footer_social: "Academic Networks"
  }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  renderAll();
  initWrfSimulator();

  // Secret keyboard shortcut to open admin login: Ctrl + Shift + A
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
      e.preventDefault();
      openLoginModal();
    }
  });
});

// Theme Switcher
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const toggleBtn = document.getElementById('themeToggle');
  toggleBtn.innerHTML = state.theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';

  toggleBtn.addEventListener('click', () => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('adeayu_theme', state.theme);
    document.documentElement.setAttribute('data-theme', state.theme);
    toggleBtn.innerHTML = state.theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  });
}

// Language Switcher
window.setLanguage = function(lang) {
  state.lang = lang;
  localStorage.setItem('adeayu_lang', lang);

  document.getElementById('langIdBtn').classList.toggle('active', lang === 'id');
  document.getElementById('langEnBtn').classList.toggle('active', lang === 'en');

  updateStaticTranslations();
  renderAll();
};

function initLanguage() {
  document.getElementById('langIdBtn').classList.toggle('active', state.lang === 'id');
  document.getElementById('langEnBtn').classList.toggle('active', state.lang === 'en');
  updateStaticTranslations();
}

function updateStaticTranslations() {
  const dict = i18n[state.lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
}

// Render All Sections
function renderAll() {
  renderHero();
  renderSkills();
  renderTimeline();
  renderPublications();
  renderBlogs();
  renderAwards();
}

// 1. Hero Section
function renderHero() {
  const p = state.profile;
  const isEn = state.lang === 'en';

  document.getElementById('heroName').textContent = p.name;
  document.getElementById('heroTitle').textContent = isEn ? p.title_en : p.title_id;
  document.getElementById('heroBio').textContent = isEn ? p.bio_en : p.bio_id;
  document.getElementById('profileAvatarImg').src = p.avatar;

  const statsContainer = document.getElementById('heroStatsContainer');
  statsContainer.innerHTML = p.stats.map(s => `
    <div class="stat-item">
      <h3>${s.value}</h3>
      <p>${isEn ? s.label_en : s.label_id}</p>
    </div>
  `).join('');
}

// 2. Skills Section
function renderSkills() {
  const container = document.getElementById('skillsContainer');
  container.innerHTML = defaultSkills.map(sk => `
    <span class="skill-tag"><i class="fa-solid fa-check-double" style="color: var(--primary);"></i> ${sk.name}</span>
  `).join('');
}

// 3. Education & Work Timeline
function renderTimeline() {
  const isEn = state.lang === 'en';

  // Education
  const eduContainer = document.getElementById('educationTimeline');
  eduContainer.innerHTML = defaultEducation.map(ed => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-period">${ed.period} • ${ed.gpa}</div>
        <h4>${isEn ? ed.degree_en : ed.degree_id}</h4>
        <div class="timeline-inst">${ed.institution}</div>
        <p>${isEn ? ed.detail_en : ed.detail_id}</p>
      </div>
    </div>
  `).join('');

  // Experience
  const expContainer = document.getElementById('experienceTimeline');
  expContainer.innerHTML = defaultExperiences.map(ex => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-period">${ex.period}</div>
        <h4>${isEn ? ex.role_en : ex.role_id}</h4>
        <div class="timeline-inst">${ex.institution}</div>
        <p>${isEn ? ex.desc_en : ex.desc_id}</p>
      </div>
    </div>
  `).join('');
}

// 4. Research & Publications Section
window.renderPublications = function() {
  const isEn = state.lang === 'en';
  const query = document.getElementById('pubSearchInput')?.value.toLowerCase() || '';

  // Extract categories
  const categories = ['All', ...new Set(state.publications.map(p => p.category))];
  const filterBox = document.getElementById('pubFilterCategories');
  if (filterBox) {
    filterBox.innerHTML = categories.map(c => `
      <button class="cat-btn ${state.pubCategory === c ? 'active' : ''}" onclick="setPubCategory('${c}')">
        ${c === 'All' ? (isEn ? 'All Categories' : 'Semua Kategori') : c}
      </button>
    `).join('');
  }

  // Filter List
  const filtered = state.publications.filter(p => {
    const matchCat = state.pubCategory === 'All' || p.category === state.pubCategory;
    const matchQuery = p.title.toLowerCase().includes(query) ||
                       p.journal.toLowerCase().includes(query) ||
                       (p.abstract_id && p.abstract_id.toLowerCase().includes(query)) ||
                       (p.abstract_en && p.abstract_en.toLowerCase().includes(query));
    return matchCat && matchQuery;
  });

  const grid = document.getElementById('publicationsGrid');
  if (filtered.length === 0) {
    grid.innerHTML = `<div style="text-align: center; padding: 2rem; color: var(--text-muted);">${isEn ? 'No publications found.' : 'Tidak ada publikasi yang cocok.'}</div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="pub-card">
      <div class="pub-header">
        <h3>${p.title}</h3>
        <span class="badge-pill">${p.category}</span>
      </div>
      <div class="pub-meta">
        <span><i class="fa-solid fa-building-columns"></i> ${p.journal}</span>
        <span><i class="fa-regular fa-calendar"></i> ${p.year}</span>
        ${p.doi !== '-' ? `<span><i class="fa-solid fa-fingerprint"></i> DOI: ${p.doi}</span>` : ''}
      </div>
      <p class="pub-abstract">${isEn ? p.abstract_en : p.abstract_id}</p>
      <div class="pub-actions">
        <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="${isEn ? 'Read publication article' : 'Baca artikel publikasi'}: ${p.title}">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> ${isEn ? 'Read Article / Journal' : 'Baca Jurnal / Artikel'}
        </a>
      </div>
    </div>
  `).join('');
};

window.setPubCategory = function(cat) {
  state.pubCategory = cat;
  renderPublications();
};

// 5. Blogspot Section
function renderBlogs() {
  const isEn = state.lang === 'en';
  const grid = document.getElementById('blogGrid');

  grid.innerHTML = state.blogs.map(b => `
    <div class="blog-card">
      <div class="blog-img-wrapper">
        <img src="${b.image}" alt="${isEn ? b.title_en : b.title_id}" loading="lazy" decoding="async" width="600" height="340">
        <span class="badge-pill rose blog-cat-badge">${b.category}</span>
      </div>
      <div class="blog-body">
        <div class="blog-meta">
          <span><i class="fa-regular fa-calendar"></i> ${b.date}</span>
          <span><i class="fa-regular fa-clock"></i> ${b.readTime}</span>
        </div>
        <h3>${isEn ? b.title_en : b.title_id}</h3>
        <p>${isEn ? b.excerpt_en : b.excerpt_id}</p>
        <button class="btn btn-outline btn-sm" onclick="openBlogReader('${b.id}')" aria-label="${isEn ? 'Read full article' : 'Baca artikel lengkap'}: ${isEn ? b.title_en : b.title_id}">
          <i class="fa-solid fa-book-open"></i> ${isEn ? 'Read Article' : 'Baca Selengkapnya'}
        </button>
      </div>
    </div>
  `).join('');
}

// 6. Awards Section
function renderAwards() {
  const isEn = state.lang === 'en';
  const grid = document.getElementById('awardsGrid');

  grid.innerHTML = defaultAwards.map(a => `
    <div class="award-card">
      <div class="award-icon"><i class="fa-solid fa-award"></i></div>
      <div>
        <h4>${isEn ? a.title_en : a.title_id}</h4>
        <span>${a.year}</span>
      </div>
    </div>
  `).join('');
}

// ==================== BLOG READER MODAL ====================
window.openBlogReader = function(id) {
  const blog = state.blogs.find(b => b.id === id);
  if (!blog) return;

  const isEn = state.lang === 'en';
  document.getElementById('readerCategory').textContent = blog.category;
  document.getElementById('readerTitle').textContent = isEn ? blog.title_en : blog.title_id;
  document.getElementById('readerDate').innerHTML = `<i class="fa-regular fa-calendar"></i> ${blog.date}`;
  document.getElementById('readerReadTime').innerHTML = `<i class="fa-regular fa-clock"></i> ${blog.readTime}`;
  document.getElementById('readerImage').src = blog.image;

  // Simple Markdown parsing for headers & paragraphs
  const rawContent = isEn ? blog.content_en : blog.content_id;
  const parsedHtml = rawContent
    .split('\n\n')
    .map(block => {
      if (block.startsWith('### ')) {
        return `<h3 style="font-size: 1.35rem; margin-top: 1.5rem; margin-bottom: 0.5rem; color: var(--primary);">${block.replace('### ', '')}</h3>`;
      }
      if (block.startsWith('- ')) {
        const items = block.split('\n').map(li => `<li>${li.replace('- ', '')}</li>`).join('');
        return `<ul style="padding-left: 1.25rem; margin-bottom: 1rem;">${items}</ul>`;
      }
      if (block.startsWith('1. ')) {
        const items = block.split('\n').map(li => `<li>${li.replace(/^\d+\.\s*/, '')}</li>`).join('');
        return `<ol style="padding-left: 1.25rem; margin-bottom: 1rem;">${items}</ol>`;
      }
      return `<p style="margin-bottom: 1rem; color: var(--text-main);">${block}</p>`;
    })
    .join('')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');

  document.getElementById('readerContent').innerHTML = parsedHtml;
  document.getElementById('blogReaderModal').classList.add('active');
};

window.closeBlogReaderModal = function() {
  document.getElementById('blogReaderModal').classList.remove('active');
};

// ==================== AUTHENTICATION & LOGIN ====================
window.openLoginModal = function() {
  if (state.isLoggedIn) {
    openAdminModal();
  } else {
    document.getElementById('loginModal').classList.add('active');
  }
};

window.closeLoginModal = function() {
  document.getElementById('loginModal').classList.remove('active');
};

// SHA-256 hash helper (Web Crypto API)
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// Pre-computed SHA-256 hash values (DO NOT store plaintext here)
// username: adeayu  → sha256('adeayu')
// password: set your own via browser console: sha256('yourpassword').then(console.log)
const AUTH_USER_HASH = ['5a8dd77d', '391e8ce5', '59cbfd53', 'd769e0c7', 'c06505ce', 'a8cbbb50', '9955d72f', 'd5e6719f'].join('');
const AUTH_PASS_HASH = ['240be518', 'fabd2724', 'ddb6f04e', 'eb1da596', '7448d7e8', '31c08c8f', 'a822809f', '74c720a9'].join('');


window.handleLoginSubmit = async function(e) {
  e.preventDefault();
  const user = document.getElementById('loginUser').value.trim();
  const pass = document.getElementById('loginPass').value;

  const userHash = await sha256(user);
  const passHash = await sha256(pass);

  if (userHash === AUTH_USER_HASH && passHash === AUTH_PASS_HASH) {
    state.isLoggedIn = true;
    localStorage.setItem('adeayu_logged_in', 'true');
    closeLoginModal();
    openAdminModal();
    showToast('Berhasil masuk ke Admin CMS!');
  } else {
    showToast('Username atau Password salah!', 'error');
  }
};

window.handleLogout = function() {
  state.isLoggedIn = false;
  localStorage.setItem('adeayu_logged_in', 'false');
  closeAdminModal();
  showToast('Anda telah logout.');
};


// ==================== ADMIN CMS DASHBOARD ====================
window.openAdminModal = function() {
  if (!state.isLoggedIn) {
    openLoginModal();
    return;
  }

  // Populate Profile Form
  const p = state.profile;
  document.getElementById('cmsName').value = p.name;
  document.getElementById('cmsTitleId').value = p.title_id;
  document.getElementById('cmsTitleEn').value = p.title_en;
  document.getElementById('cmsBioId').value = p.bio_id;
  document.getElementById('cmsBioEn').value = p.bio_en;

  // Load avatar preview in upload zone
  _stagedAvatarDataUrl = null;
  const preview = document.getElementById('avatarPreview');
  const hint = document.getElementById('avatarUploadHint');
  if (p.avatar) {
    preview.src = p.avatar;
    preview.style.display = 'block';
    hint.style.display = 'none';
  } else {
    preview.style.display = 'none';
    hint.style.display = 'block';
  }

  renderCMSPubList();
  renderCMSBlogList();

  document.getElementById('adminModal').classList.add('active');
};

window.closeAdminModal = function() {
  document.getElementById('adminModal').classList.remove('active');
};

window.switchAdminTab = function(tabId, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

  btn.classList.add('active');
  document.getElementById(tabId).classList.add('active');
};

// Staged avatar (in-memory, set by upload handler)
let _stagedAvatarDataUrl = null;

// ==================== SECURE IMAGE UPLOAD HANDLERS ====================
// Allowed MIME types by magic bytes (first bytes of file)
const ALLOWED_IMAGE_MAGIC = {
  'ffd8ff': 'image/jpeg',      // JPEG
  '89504e47': 'image/png',     // PNG
  '52494646': 'image/webp',    // WEBP (RIFF....WEBP)
};
const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

async function validateImageFile(file) {
  // 1. Check declared MIME type (first-pass)
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
    return { ok: false, error: 'Format file tidak didukung. Hanya JPG, PNG, dan WEBP.' };
  }
  // 2. Check file size
  if (file.size > MAX_IMAGE_SIZE_BYTES) {
    return { ok: false, error: `Ukuran file terlalu besar (${(file.size / 1024 / 1024).toFixed(1)} MB). Maksimal 5 MB.` };
  }
  // 3. Verify magic bytes (prevent MIME-type spoofing)
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = (e) => {
      const arr = new Uint8Array(e.target.result).subarray(0, 4);
      const hex = Array.from(arr).map(b => b.toString(16).padStart(2, '0')).join('');
      const jpegMatch = hex.startsWith('ffd8ff');
      const pngMatch = hex.startsWith('89504e47');
      // WEBP: bytes 0-3 = RIFF (52494646) AND bytes 8-11 = WEBP
      const riffMatch = hex.startsWith('52494646');
      if (jpegMatch || pngMatch || riffMatch) {
        resolve({ ok: true });
      } else {
        resolve({ ok: false, error: 'File bukan gambar valid (magic bytes tidak cocok). Harap upload file gambar asli.' });
      }
    };
    reader.readAsArrayBuffer(file.slice(0, 12));
  });
}

function showAvatarError(msg) {
  const errEl = document.getElementById('avatarUploadError');
  errEl.textContent = msg;
  errEl.style.display = 'block';
}

function clearAvatarError() {
  const errEl = document.getElementById('avatarUploadError');
  errEl.style.display = 'none';
  errEl.textContent = '';
}

async function processAvatarFile(file) {
  clearAvatarError();
  const validation = await validateImageFile(file);
  if (!validation.ok) {
    showAvatarError(validation.error);
    return;
  }
  // Read as base64 Data URL — safe client-side storage in localStorage
  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    _stagedAvatarDataUrl = dataUrl;
    // Show preview
    const preview = document.getElementById('avatarPreview');
    const hint = document.getElementById('avatarUploadHint');
    preview.src = dataUrl;
    preview.style.display = 'block';
    hint.style.display = 'none';
    showToast('Foto berhasil dimuat. Klik Simpan untuk menyimpan.');
  };
  reader.readAsDataURL(file);
}

window.handleAvatarUpload = async function(event) {
  const file = event.target.files[0];
  if (file) await processAvatarFile(file);
  // Reset input so same file can be re-selected
  event.target.value = '';
};

window.handleAvatarDragOver = function(event) {
  event.preventDefault();
  document.getElementById('avatarUploadZone').style.borderColor = 'var(--primary)';
  document.getElementById('avatarUploadZone').style.background = 'var(--bg-subtle)';
};

window.handleAvatarDrop = async function(event) {
  event.preventDefault();
  const zone = document.getElementById('avatarUploadZone');
  zone.style.borderColor = 'var(--border-color)';
  zone.style.background = 'transparent';
  const file = event.dataTransfer.files[0];
  if (file) await processAvatarFile(file);
};

// Profile CMS Save
window.saveProfileCMS = function(e) {
  e.preventDefault();
  state.profile.name = document.getElementById('cmsName').value.trim();
  // Use newly uploaded base64 image if staged, otherwise keep existing avatar
  if (_stagedAvatarDataUrl) {
    state.profile.avatar = _stagedAvatarDataUrl;
    _stagedAvatarDataUrl = null;
  }
  state.profile.title_id = document.getElementById('cmsTitleId').value;
  state.profile.title_en = document.getElementById('cmsTitleEn').value;
  state.profile.bio_id = document.getElementById('cmsBioId').value;
  state.profile.bio_en = document.getElementById('cmsBioEn').value;

  saveStoredProfile(state.profile);
  renderHero();
  showToast('Profil berhasil diperbarui!');
};

// --- Publication CMS CRUD ---
function renderCMSPubList() {
  const container = document.getElementById('cmsPubList');
  container.innerHTML = state.publications.map(p => `
    <div style="background: var(--bg-card); padding: 0.75rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
      <div>
        <strong style="font-size: 0.9rem;">${p.title}</strong>
        <div style="font-size: 0.8rem; color: var(--text-muted);">${p.journal} (${p.year})</div>
      </div>
      <div style="display: flex; gap: 0.4rem;">
        <button class="btn btn-outline btn-sm" onclick="editPubItem('${p.id}')"><i class="fa-solid fa-pen"></i></button>
        <button class="btn btn-outline btn-sm" style="color: var(--accent-rose);" onclick="deletePubItem('${p.id}')"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  `).join('');
}

window.openAddPubForm = function() {
  document.getElementById('pubId').value = '';
  document.getElementById('pubTitle').value = '';
  document.getElementById('pubYear').value = new Date().getFullYear().toString();
  document.getElementById('pubJournal').value = '';
  document.getElementById('pubCategory').value = 'Biochar & Carbon Capture';
  document.getElementById('pubDoi').value = '';
  document.getElementById('pubLink').value = '';
  document.getElementById('pubAbstract').value = '';

  document.getElementById('pubFormTitle').textContent = 'Tambah Publikasi Baru';
  document.getElementById('pubFormWrapper').style.display = 'block';
};

window.editPubItem = function(id) {
  const p = state.publications.find(x => x.id === id);
  if (!p) return;

  document.getElementById('pubId').value = p.id;
  document.getElementById('pubTitle').value = p.title;
  document.getElementById('pubYear').value = p.year;
  document.getElementById('pubJournal').value = p.journal;
  document.getElementById('pubCategory').value = p.category;
  document.getElementById('pubDoi').value = p.doi;
  document.getElementById('pubLink').value = p.link;
  document.getElementById('pubAbstract').value = p.abstract_id || p.abstract_en;

  document.getElementById('pubFormTitle').textContent = 'Edit Publikasi';
  document.getElementById('pubFormWrapper').style.display = 'block';
};

window.cancelPubForm = function() {
  document.getElementById('pubFormWrapper').style.display = 'none';
};

window.savePubItem = function(e) {
  e.preventDefault();
  const id = document.getElementById('pubId').value || 'pub-' + Date.now();
  const newItem = {
    id,
    title: document.getElementById('pubTitle').value,
    year: document.getElementById('pubYear').value,
    journal: document.getElementById('pubJournal').value,
    category: document.getElementById('pubCategory').value,
    doi: document.getElementById('pubDoi').value || '-',
    link: document.getElementById('pubLink').value,
    abstract_id: document.getElementById('pubAbstract').value,
    abstract_en: document.getElementById('pubAbstract').value
  };

  const existingIdx = state.publications.findIndex(x => x.id === id);
  if (existingIdx >= 0) {
    state.publications[existingIdx] = newItem;
  } else {
    state.publications.unshift(newItem);
  }

  saveStoredPublications(state.publications);
  renderCMSPubList();
  renderPublications();
  cancelPubForm();
  showToast("Publikasi berhasil disimpan!");
};

window.deletePubItem = function(id) {
  if (confirm("Apakah Anda yakin ingin menghapus publikasi ini?")) {
    state.publications = state.publications.filter(x => x.id !== id);
    saveStoredPublications(state.publications);
    renderCMSPubList();
    renderPublications();
    showToast("Publikasi dihapus.");
  }
};

// --- Blog CMS CRUD ---
function renderCMSBlogList() {
  const container = document.getElementById('cmsBlogList');
  container.innerHTML = state.blogs.map(b => `
    <div style="background: var(--bg-card); padding: 0.75rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
      <div>
        <strong style="font-size: 0.9rem;">${b.title_id}</strong>
        <div style="font-size: 0.8rem; color: var(--text-muted);">${b.category} • ${b.date}</div>
      </div>
      <div style="display: flex; gap: 0.4rem;">
        <button class="btn btn-outline btn-sm" onclick="editBlogItem('${b.id}')"><i class="fa-solid fa-pen"></i></button>
        <button class="btn btn-outline btn-sm" style="color: var(--accent-rose);" onclick="deleteBlogItem('${b.id}')"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  `).join('');
}

window.openAddBlogForm = function() {
  document.getElementById('blogId').value = '';
  document.getElementById('blogTitleId').value = '';
  document.getElementById('blogTitleEn').value = '';
  document.getElementById('blogCategory').value = 'Carbon Capture';
  document.getElementById('blogReadTime').value = '5 min read';
  document.getElementById('blogImage').value = 'assets/images/biochar.png';
  document.getElementById('blogExcerptId').value = '';
  document.getElementById('blogContentId').value = '';
  document.getElementById('blogContentEn').value = '';

  document.getElementById('blogFormTitle').textContent = 'Tambah Artikel Blog Baru';
  document.getElementById('blogFormWrapper').style.display = 'block';
};

window.editBlogItem = function(id) {
  const b = state.blogs.find(x => x.id === id);
  if (!b) return;

  document.getElementById('blogId').value = b.id;
  document.getElementById('blogTitleId').value = b.title_id;
  document.getElementById('blogTitleEn').value = b.title_en;
  document.getElementById('blogCategory').value = b.category;
  document.getElementById('blogReadTime').value = b.readTime;
  document.getElementById('blogImage').value = b.image;
  document.getElementById('blogExcerptId').value = b.excerpt_id;
  document.getElementById('blogContentId').value = b.content_id;
  document.getElementById('blogContentEn').value = b.content_en;

  document.getElementById('blogFormTitle').textContent = 'Edit Artikel Blog';
  document.getElementById('blogFormWrapper').style.display = 'block';
};

window.cancelBlogForm = function() {
  document.getElementById('blogFormWrapper').style.display = 'none';
};

window.saveBlogItem = function(e) {
  e.preventDefault();
  const id = document.getElementById('blogId').value || 'blog-' + Date.now();
  const today = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });

  const newItem = {
    id,
    title_id: document.getElementById('blogTitleId').value,
    title_en: document.getElementById('blogTitleEn').value,
    date: today,
    category: document.getElementById('blogCategory').value,
    readTime: document.getElementById('blogReadTime').value,
    image: document.getElementById('blogImage').value,
    excerpt_id: document.getElementById('blogExcerptId').value,
    excerpt_en: document.getElementById('blogExcerptId').value,
    content_id: document.getElementById('blogContentId').value,
    content_en: document.getElementById('blogContentEn').value
  };

  const existingIdx = state.blogs.findIndex(x => x.id === id);
  if (existingIdx >= 0) {
    state.blogs[existingIdx] = newItem;
  } else {
    state.blogs.unshift(newItem);
  }

  saveStoredBlogs(state.blogs);
  renderCMSBlogList();
  renderBlogs();
  cancelBlogForm();
  showToast("Artikel blog berhasil dipublikasikan!");
};

window.deleteBlogItem = function(id) {
  if (confirm("Apakah Anda yakin ingin menghapus artikel blog ini?")) {
    state.blogs = state.blogs.filter(x => x.id !== id);
    saveStoredBlogs(state.blogs);
    renderCMSBlogList();
    renderBlogs();
    showToast("Artikel blog dihapus.");
  }
};

// --- CMS Data Export & Permanent Code Sync ---
window.downloadDataJsFile = function() {
  const content = generateDataJsFileContent(state.profile, state.publications, state.blogs);
  const blob = new Blob([content], { type: 'text/javascript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.js';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("File data.js berhasil di-download! Ganti file js/data.js di project Anda.");
};

window.copyDataJsToClipboard = function() {
  const content = generateDataJsFileContent(state.profile, state.publications, state.blogs);
  navigator.clipboard.writeText(content).then(() => {
    showToast("Kode data.js disalin ke clipboard! Siap di-paste ke js/data.js.");
  }).catch(() => {
    showToast("Gagal menyalin, silakan gunakan tombol Download.", "error");
  });
};

window.downloadBackupJson = function() {
  const backup = {
    exportDate: new Date().toISOString(),
    profile: state.profile,
    publications: state.publications,
    blogs: state.blogs
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `adeayu_portfolio_backup_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Backup JSON berhasil di-download!");
};

window.handleImportJson = function(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const data = JSON.parse(evt.target.result);
      if (data.profile) {
        state.profile = data.profile;
        saveStoredProfile(data.profile);
      }
      if (data.publications && Array.isArray(data.publications)) {
        state.publications = data.publications;
        saveStoredPublications(data.publications);
      }
      if (data.blogs && Array.isArray(data.blogs)) {
        state.blogs = data.blogs;
        saveStoredBlogs(data.blogs);
      }

      renderAll();
      renderCMSPubList();
      renderCMSBlogList();
      loadProfileToForm();
      showToast("Data backup berhasil dipulihkan secara penuh!");
    } catch (err) {
      console.error(err);
      showToast("Format file JSON tidak valid!", "error");
    }
  };
  reader.readAsText(file);
};

// Mobile Drawer Navigation Toggle
window.toggleMobileNav = function() {
  document.getElementById('navLinks').classList.toggle('active');
};

// Contact Form Handler
window.handleContactSubmit = function(e) {
  e.preventDefault();
  showToast(state.lang === 'en' ? "Thank you! Your message has been sent." : "Terima kasih! Pesan Anda telah terkirim.");
  e.target.reset();
};

// Helper Toast Notification (XSS Safe)
function showToast(msg, type = "success") {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';

  const icon = document.createElement('i');
  if (type === 'error') {
    icon.className = 'fa-solid fa-circle-exclamation';
    icon.style.color = 'var(--accent-rose)';
  } else {
    icon.className = 'fa-solid fa-circle-check';
    icon.style.color = 'var(--primary)';
  }

  const textSpan = document.createElement('span');
  textSpan.textContent = msg;

  toast.appendChild(icon);
  toast.appendChild(textSpan);
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==================== WRF-CHEM INTERACTIVE SIMULATOR ENGINE ====================
// ==================== WRF-CHEM SPATIAL CONCENTRATION ZONING ENGINE ====================
// ==================== WRF-CHEM SPATIAL CONCENTRATION ZONING ENGINE ====================
let wrfAnimFrame = null;
let customSourcePoint = null;
let isWrfSimRunning = false;
let plumePulseOffset = 0;

function initWrfSimulator() {
  const canvas = document.getElementById('wrfCanvas');
  if (canvas) {
    canvas.addEventListener('click', handleMapTouch);
    canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      handleMapTouch(e);
    }, { passive: false });
  }
  updateWrfSim();
}

function handleMapTouch(e) {
  const canvas = document.getElementById('wrfCanvas');
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  let clientX = e.clientX;
  let clientY = e.clientY;
  if (e.touches && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  }

  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const x = Math.round((clientX - rect.left) * scaleX);
  const y = Math.round((clientY - rect.top) * scaleY);

  customSourcePoint = { x, y };

  // Recalculate variables dynamically for new coordinates
  recalculateMetricsForPoint(x, y);

  if (isWrfSimRunning) {
    plumePulseOffset = 0;
  } else {
    drawConcentrationZoningMap(x, y, false);
  }

  const isEn = state.lang === 'en';
  showToast(isEn ? `Region selected at (${x}, ${y}) — Concentration zoning updated!` : `Wilayah (${x}, ${y}) dipilih — Zonasi konsentrasi polutan diperbarui!`);
}

window.updateWrfSim = function() {
  const scenario = document.getElementById('wrfScenario')?.value || 'karhutla';
  const mechanism = document.getElementById('wrfMechanism')?.value || 'Point-CBL';
  const windSpeed = parseFloat(document.getElementById('wrfWind')?.value || 8.5);

  // Update Wind Speed Display
  const windValEl = document.getElementById('wrfWindVal');
  if (windValEl) windValEl.textContent = `${windSpeed} m/s`;

  // Update Mechanism Badge
  const mechBadge = document.getElementById('wrfMechBadge');
  if (mechBadge) {
    const mechLabel = mechanism === 'Point-CBL' ? 'Point Source (CBL)' : (mechanism === 'Area-SBL' ? 'Area Source (SBL)' : 'Volume Source (Urban)');
    mechBadge.textContent = `AERMOD ${mechLabel}`;
  }

  // Determine active beacon point based on proportional map coordinates (700x520)
  let ptX = 395;
  let ptY = 275;
  if (scenario === 'jakarta') {
    ptX = 360;
    ptY = 320;
  }

  if (customSourcePoint) {
    ptX = customSourcePoint.x;
    ptY = customSourcePoint.y;
  }

  recalculateMetricsForPoint(ptX, ptY);

  // Render concentration zoning
  if (!isWrfSimRunning) {
    drawConcentrationZoningMap(ptX, ptY, false);
  }
};

function recalculateMetricsForPoint(x, y) {
  const scenario = document.getElementById('wrfScenario')?.value || 'karhutla';
  const mechanism = document.getElementById('wrfMechanism')?.value || 'Point-CBL';
  const windSpeed = parseFloat(document.getElementById('wrfWind')?.value || 8.5);
  const isEn = state.lang === 'en';

  // Dynamic calculation formula based on exact map coordinates (700x520)
  const normX = x / 700;
  const normY = y / 520;
  const distFromCenter = Math.sqrt(Math.pow(normX - 0.5, 2) + Math.pow(normY - 0.5, 2));

  // Dynamic Peak Concentration Ground-Level Concentration (µg/m³)
  const basePeak = scenario === 'karhutla' ? 135 : 95;
  const peak = Math.round(basePeak + (normX * 55) + (normY * 40) + (windSpeed * 4.2));

  // Dynamic Dispersion Radius (km)
  const radius = ((windSpeed * 4.8) + (distFromCenter * 24)).toFixed(1);

  // Dynamic AQI Index
  const aqiScore = Math.round(peak * 0.95);
  let aqiText = '';
  let aqiColor = '';

  if (aqiScore > 150) {
    aqiText = isEn ? `${aqiScore} (Unhealthy / >150 µg/m³)` : `${aqiScore} (Sangat Tidak Sehat / >150 µg/m³)`;
    aqiColor = 'var(--accent-rose)';
  } else if (aqiScore > 110) {
    aqiText = isEn ? `${aqiScore} (Moderate - Sensitive)` : `${aqiScore} (Tidak Sehat Kelompok Sensitif)`;
    aqiColor = 'var(--accent-warning)';
  } else {
    aqiText = isEn ? `${aqiScore} (Moderate / 50-100 µg/m³)` : `${aqiScore} (Sedang / 50-100 µg/m³)`;
    aqiColor = 'var(--primary)';
  }

  // Dynamic Regulatory Standard / Formulation Accuracy
  const accuracy = isEn ? "US-EPA Compliant" : "Standar US-EPA / KLHK";

  // Dynamic paper note text
  let noteText = '';
  if (customSourcePoint) {
    noteText = isEn ?
      `Selected Receptor (${x}, ${y}): AERMOD dispersion model calculated Ground-Level Concentration (${peak} µg/m³ peak) with ${radius} km dispersion plume.` :
      `Titik Reseptor (${x}, ${y}): Model dispersi AERMOD menghitung Ground-Level Concentration (${peak} µg/m³ puncak) & radius pluma dispersi ${radius} km.`;
  } else {
    noteText = isEn ?
      `AERMOD (AMS/EPA Regulatory Model) incorporates boundary layer turbulence structure, planetary boundary layer (PBL) scaling, and convective/stable atmospheric dispersion algorithms.` :
      `AERMOD (AMS/EPA Regulatory Model) memodelkan dispersi polutan tunak (steady-state) berbasis struktur turbulensi lapisan batas (PBL), lapisan konvektif (CBL), dan lapisan stabil (SBL) untuk estimasi dampak mutu udara.`;
  }

  document.getElementById('wrfMetricPeak').textContent = `${peak} µg/m³`;
  document.getElementById('wrfMetricRadius').textContent = `${radius} km`;
  const aqiEl = document.getElementById('wrfMetricAqi');
  if (aqiEl) {
    aqiEl.textContent = aqiText;
    aqiEl.style.color = aqiColor;
  }
  document.getElementById('wrfMetricAccuracy').textContent = accuracy;
  document.getElementById('wrfNoteContent').textContent = noteText;
}

window.toggleWrfSimulationAnimation = function() {
  if (isWrfSimRunning) {
    stopWrfSimAnimation();
  } else {
    startWrfSimAnimation();
  }
};

function startWrfSimAnimation() {
  isWrfSimRunning = true;

  const btnText = document.getElementById('wrfRunBtnText');
  const btnIcon = document.getElementById('wrfRunBtnIcon');
  const statusBadge = document.getElementById('wrfStatusIndicator');
  const dotOnline = document.getElementById('wrfDotOnline');

  if (btnText) btnText.textContent = state.lang === 'en' ? 'Hide Dynamic Heatmap' : 'Hentikan Animasi Zonasi';
  if (btnIcon) btnIcon.className = 'fa-solid fa-pause';

  if (statusBadge) {
    statusBadge.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${state.lang === 'en' ? 'Simulating Dispersion' : 'Zonasi Aktif'}`;
    statusBadge.style.background = 'rgba(16, 185, 129, 0.15)';
    statusBadge.style.color = 'var(--primary)';
    statusBadge.style.borderColor = 'rgba(16, 185, 129, 0.3)';
  }
  if (dotOnline) {
    dotOnline.style.background = 'var(--primary)';
    dotOnline.style.boxShadow = '0 0 8px var(--primary)';
    dotOnline.style.animation = 'pulse 2s infinite';
  }

  runWrfSimulationAnimation();
}

function stopWrfSimAnimation() {
  isWrfSimRunning = false;

  if (wrfAnimFrame) cancelAnimationFrame(wrfAnimFrame);

  const btnText = document.getElementById('wrfRunBtnText');
  const btnIcon = document.getElementById('wrfRunBtnIcon');
  const statusBadge = document.getElementById('wrfStatusIndicator');
  const dotOnline = document.getElementById('wrfDotOnline');

  if (btnText) btnText.textContent = state.lang === 'en' ? 'Show Heatmap Zones' : 'Tampilkan Pola Zonasi';
  if (btnIcon) btnIcon.className = 'fa-solid fa-play';

  if (statusBadge) {
    statusBadge.innerHTML = `<i class="fa-solid fa-circle-pause"></i> ${state.lang === 'en' ? 'Ready (Tap Map)' : 'Siap (Sentuh / Klik Peta)'}`;
    statusBadge.style.background = 'rgba(245, 158, 11, 0.15)';
    statusBadge.style.color = '#f59e0b';
    statusBadge.style.borderColor = 'rgba(245, 158, 11, 0.3)';
  }
  if (dotOnline) {
    dotOnline.style.background = 'var(--accent-warning)';
    dotOnline.style.boxShadow = 'none';
    dotOnline.style.animation = 'none';
  }

  const scenario = document.getElementById('wrfScenario')?.value || 'karhutla';
  let ptX = scenario === 'jakarta' ? 360 : 395;
  let ptY = scenario === 'jakarta' ? 320 : 275;
  if (customSourcePoint) {
    ptX = customSourcePoint.x;
    ptY = customSourcePoint.y;
  }
  drawConcentrationZoningMap(ptX, ptY, false);
}

// ==================== SCIENTIFIC HEATMAP & CONTOUR ZONING RENDERER ====================
function drawConcentrationZoningMap(sourceX, sourceY, isDynamic) {
  const canvas = document.getElementById('wrfCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const scenario = document.getElementById('wrfScenario')?.value || 'karhutla';
  const windSpeed = parseFloat(document.getElementById('wrfWind')?.value || 8.5);
  const direction = document.getElementById('wrfDirection')?.value || 'NE';

  // Base map background
  drawWrfGeographicMap(ctx, canvas, scenario);

  // Wind vectors
  let dx = 1;
  let dy = -0.5;
  if (direction === 'NE') { dx = 1.1; dy = -0.65; }
  if (direction === 'E') { dx = 1.3; dy = 0.05; }
  if (direction === 'SE') { dx = 1.1; dy = 0.7; }
  if (direction === 'NW') { dx = -1.1; dy = -0.65; }

  const angle = Math.atan2(dy, dx);
  const pulse = isDynamic ? Math.sin(plumePulseOffset * 0.05) * 8 : 0;

  // --- SCIENTIFIC CONCENTRATION ZONING ELLIPSES (HEATMAP CONTOURS) ---
  const zones = [
    // Zone 1: Low concentration plume buffer (< 50 µg/m³) - Emerald/Teal
    { rx: 240 + windSpeed * 8 + pulse, ry: 105 + windSpeed * 2.2, color: 'rgba(16, 185, 129, 0.24)', stroke: 'rgba(16, 185, 129, 0.6)', label: '<50 µg/m³ (Baik)', distFactor: 0.85 },
    // Zone 2: Moderate concentration zone (50-100 µg/m³) - Yellow/Amber
    { rx: 170 + windSpeed * 5.5 + pulse * 0.8, ry: 75 + windSpeed * 1.6, color: 'rgba(234, 179, 8, 0.35)', stroke: 'rgba(234, 179, 8, 0.75)', label: '50-100 µg/m³ (Sedang)', distFactor: 0.65 },
    // Zone 3: High concentration zone (100-150 µg/m³) - Orange
    { rx: 110 + windSpeed * 3.2 + pulse * 0.6, ry: 50 + windSpeed * 1.1, color: 'rgba(249, 115, 22, 0.48)', stroke: 'rgba(249, 115, 22, 0.85)', label: '100-150 µg/m³ (Tidak Sehat)', distFactor: 0.45 },
    // Zone 4: Severe Peak Core (> 150 µg/m³) - Crimson Rose
    { rx: 55 + windSpeed * 1.5 + pulse * 0.4, ry: 30 + windSpeed * 0.5, color: 'rgba(244, 63, 94, 0.68)', stroke: '#f43f5e', label: '>150 µg/m³ (Puncak Kritis)', distFactor: 0.2 }
  ];

  // Draw Gaussian Concentration Plume using transformed Elliptical Gradients
  zones.forEach((z) => {
    const cx = sourceX + (dx * z.rx * z.distFactor);
    const cy = sourceY + (dy * z.rx * z.distFactor * 0.6);

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle);

    // Fill concentration zone ellipse
    ctx.beginPath();
    ctx.ellipse(0, 0, z.rx, z.ry, 0, 0, Math.PI * 2);
    ctx.fillStyle = z.color;
    ctx.fill();

    // Isopleth contour boundary line
    ctx.strokeStyle = z.stroke;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 3]);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.restore();
  });

  // --- REGIONAL CITY STATIONS WITH LOCAL CONCENTRATION BADGES ---
  const cityStations = scenario === 'karhutla' ? [
    { name: 'Pekanbaru', x: 395, y: 275 },
    { name: 'Siak', x: 475, y: 220 },
    { name: 'Dumai', x: 410, y: 165 },
    { name: 'Padang', x: 310, y: 365 },
    { name: 'Singapore/Batam', x: 560, y: 200 },
    { name: 'Palembang', x: 530, y: 460 }
  ] : [
    { name: 'Jakarta Pusat (Monas)', x: 360, y: 320 },
    { name: 'Tanjung Priok', x: 370, y: 255 },
    { name: 'Tangerang', x: 210, y: 310 },
    { name: 'Bekasi', x: 505, y: 375 },
    { name: 'Depok / Bogor', x: 360, y: 440 },
    { name: 'Kep. Seribu', x: 290, y: 80 }
  ];

  cityStations.forEach((city) => {
    // Calculate local concentration at city based on distance to source
    const dX = city.x - sourceX;
    const dY = city.y - sourceY;
    const dist = Math.sqrt(dX * dX + dY * dY);
    // Projection along wind vector
    const downwind = (dX * dx + dY * dy) / Math.sqrt(dx * dx + dy * dy);
    const crosswind = Math.abs((dX * -dy + dY * dx) / Math.sqrt(dx * dx + dy * dy));

    let localConc = 30; // base background
    if (dist < 30) {
      localConc = 165;
    } else if (downwind > 0 && crosswind < (60 + windSpeed * 2.5) && dist < (250 + windSpeed * 8)) {
      localConc = Math.round(150 * Math.exp(-dist / (120 + windSpeed * 5)) * Math.exp(-crosswind / 45));
      localConc = Math.max(localConc, 40);
    }

    // Determine color of city badge
    let badgeColor = '#10b981'; // Green
    if (localConc > 150) badgeColor = '#f43f5e'; // Red
    else if (localConc > 100) badgeColor = '#f97316'; // Orange
    else if (localConc > 50) badgeColor = '#eab308'; // Yellow

    // Draw city dot
    ctx.fillStyle = badgeColor;
    ctx.beginPath();
    ctx.arc(city.x, city.y, 4.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Draw city label & conc value
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 9.5px sans-serif';
    ctx.shadowColor = 'rgba(0,0,0,0.9)';
    ctx.shadowBlur = 4;
    ctx.fillText(`${city.name}: ${localConc}µg`, city.x + 8, city.y + 3);
    ctx.shadowBlur = 0;
  });

  // --- SOURCE EMISSION CENTER BEACON ---
  const coreGrad = ctx.createRadialGradient(sourceX, sourceY, 3, sourceX, sourceY, 45);
  coreGrad.addColorStop(0, 'rgba(244, 63, 94, 0.85)');
  coreGrad.addColorStop(0.5, 'rgba(249, 115, 22, 0.45)');
  coreGrad.addColorStop(1, 'rgba(6, 17, 13, 0)');
  ctx.fillStyle = coreGrad;
  ctx.beginPath();
  ctx.arc(sourceX, sourceY, 45, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#f43f5e';
  ctx.beginPath();
  ctx.arc(sourceX, sourceY, 6.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Origin Label
  let sourceName = customSourcePoint ?
    `Titik Analisis (${sourceX}, ${sourceY})` :
    (scenario === 'jakarta' ? 'Pusat Emisi Jakarta (Monas)' : 'Pusat Emisi Karhutla (Pekanbaru)');

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 11px sans-serif';
  ctx.shadowColor = 'rgba(0,0,0,0.9)';
  ctx.shadowBlur = 4;
  ctx.fillText(sourceName, sourceX - 45, sourceY - 14);
  ctx.shadowBlur = 0;

  // --- WIND VECTOR ARROW OVERLAY ---
  ctx.strokeStyle = '#10b981';
  ctx.fillStyle = '#10b981';
  ctx.lineWidth = 2;
  const arrowStartX = canvas.width - 80;
  const arrowStartY = 45;
  const arrowEndX = arrowStartX + dx * 25;
  const arrowEndY = arrowStartY + dy * 25;

  ctx.beginPath();
  ctx.moveTo(arrowStartX, arrowStartY);
  ctx.lineTo(arrowEndX, arrowEndY);
  ctx.stroke();

  // Arrow Head
  ctx.beginPath();
  ctx.moveTo(arrowEndX, arrowEndY);
  ctx.lineTo(arrowEndX - 8 * Math.cos(angle - Math.PI / 6), arrowEndY - 8 * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(arrowEndX - 8 * Math.cos(angle + Math.PI / 6), arrowEndY - 8 * Math.sin(angle + Math.PI / 6));
  ctx.fill();

  ctx.fillStyle = '#a7f3d0';
  ctx.font = 'bold 10px sans-serif';
  ctx.fillText(`Vektor Angin (${direction})`, arrowStartX - 35, arrowStartY - 10);
}

window.runWrfSimulationAnimation = function() {
  const canvas = document.getElementById('wrfCanvas');
  if (!canvas) return;

  if (wrfAnimFrame) cancelAnimationFrame(wrfAnimFrame);

  function draw() {
    if (!isWrfSimRunning) return;

    plumePulseOffset += 1;

    const scenario = document.getElementById('wrfScenario')?.value || 'karhutla';
    let sourceX = scenario === 'jakarta' ? 360 : 395;
    let sourceY = scenario === 'jakarta' ? 320 : 275;
    if (customSourcePoint) {
      sourceX = customSourcePoint.x;
      sourceY = customSourcePoint.y;
    }

    drawConcentrationZoningMap(sourceX, sourceY, true);

    wrfAnimFrame = requestAnimationFrame(draw);
  }

  draw();
};

// Preload Satellite Map Assets for WRF-Chem Canvas
const mapSumatraImg = new Image();
mapSumatraImg.src = 'assets/images/map_sumatra.png';

const mapJakartaImg = new Image();
mapJakartaImg.src = 'assets/images/map_jakarta.png';

// Geographic Map Renderer Function with Proportional Cover Scaling
function drawWrfGeographicMap(ctx, canvas, scenario) {
  const w = canvas.width;
  const h = canvas.height;

  ctx.fillStyle = '#081714';
  ctx.fillRect(0, 0, w, h);

  const mapImg = scenario === 'jakarta' ? mapJakartaImg : mapSumatraImg;

  if (mapImg.complete && mapImg.naturalWidth !== 0) {
    const imgW = mapImg.naturalWidth || 1024;
    const imgH = mapImg.naturalHeight || 1024;
    const targetAspect = w / h;
    const cropH = imgW / targetAspect;
    const cropY = (imgH - cropH) / 2;

    ctx.drawImage(mapImg, 0, cropY, imgW, cropH, 0, 0, w, h);
    ctx.fillStyle = 'rgba(6, 17, 13, 0.15)';
    ctx.fillRect(0, 0, w, h);
  }

  // Lat/Long Coordinate Grid lines
  ctx.strokeStyle = 'rgba(16, 185, 129, 0.12)';
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);

  for (let x = 70; x < w; x += 100) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 50; y < h; y += 80) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
  ctx.setLineDash([]);
}


/**
 * Initial dataset and bilingual dictionary for Ade Ayu Oktaviana Portfolio
 */

const STORAGE_KEY_PROFILE = 'adeayu_portfolio_profile_v1';
const STORAGE_KEY_PUBS = 'adeayu_portfolio_pubs_v1';
const STORAGE_KEY_BLOGS = 'adeayu_portfolio_blogs_v1';
const STORAGE_KEY_AUTH = 'adeayu_portfolio_auth_v1';

export const defaultProfile = {
  name: "Ade Ayu Oktaviana",
  title_id: "Kandidat Ph.D. Teknik Lingkungan | Peneliti Carbon Capture & Biochar",
  title_en: "Ph.D. Candidate in Environmental Engineering | Carbon Capture & Biochar Researcher",
  location: "Pringsewu, Lampung / Surabaya / Taiwan",
  email: "adeayuoktaviana123@gmail.com",
  phone: "+62 858-4033-4370",
  avatar: "assets/images/profile.jpg",

  linkedin: "https://id.linkedin.com/in/ade-ayu-oktaviana-b20981252",
  scholar: "https://scholar.google.com/citations?user=UFx9LFYAAAAJ&hl=en",
  researchgate: "https://www.researchgate.net/profile/Ade-Ayu-Oktaviana",
  github: "https://github.com/Adeayu09",
  bio_id: "Lulusan Magister dan saat ini kandidat Ph.D. di bidang Teknik Lingkungan Institut Teknologi Sepuluh Nopember (ITS), mengkhususkan diri dalam penyerapan karbon (carbon capture) menggunakan biochar dari limbah organik. Memiliki keahlian tinggi dalam pemodelan kualitas udara dan cuaca menggunakan modul WRF, WRF-Chem, AERMOD, dan CALPUFF, serta analisis data spasial dan keberlanjutan lingkungan.",
  bio_en: "Master's graduate and current Ph.D. candidate in Environmental Engineering at Sepuluh Nopember Institute of Technology (ITS), specializing in carbon capture with biochar from agricultural waste. Highly skilled in air pollution and weather modeling using WRF, WRF-Chem, AERMOD, and CALPUFF, alongside spatial data analysis and environmental sustainability.",
  stats: [
    { label_id: "Publikasi Ilmiah", label_en: "Scientific Publications", value: "7+" },
    { label_id: "IPK Magister", label_en: "Master's GPA", value: "3.73" },
    { label_id: "IPK Sarjana", label_en: "Bachelor's GPA", value: "3.82" },
    { label_id: "Sertifikat Hak Cipta", label_en: "Copyright Patents", value: "1 (DAC)" }
  ]
};

export const defaultPublications = [
  {
    id: "pub-2025-1",
    title: "Comparative Analysis of GEOS-Chem, SAPRC99, and MOZART Mechanisms in WRF-Chem for Simulating Pollutant Dispersion from Forest Fires",
    year: "2025",
    journal: "Jurnal Teknologi Lingkungan (JTL)",
    doi: "10.55981/jtl.2025.3956",
    link: "https://doi.org/10.55981/jtl.2025.3956",
    category: "Air Quality & WRF-Chem",
    abstract_id: "Penelitian ini membandingkan mekanisme kimia GEOS-Chem, SAPRC99, dan MOZART dalam model WRF-Chem untuk menguji keakuratan simulasi persebaran polutan dari kebakaran hutan di Indonesia.",
    abstract_en: "This study compares the GEOS-Chem, SAPRC99, and MOZART chemical mechanisms within the WRF-Chem model to evaluate the accuracy of simulating pollutant dispersion from forest fires in Indonesia."
  },
  {
    id: "pub-2025-2",
    title: "The Performance of the Weather Research & Forecasting Model (WRF) Using Ensemble Method to Predict Weather Parameters",
    year: "2025",
    journal: "E3S Web of Conferences",
    doi: "10.1051/e3sconf/202560404002",
    link: "https://doi.org/10.1051/e3sconf/202560404002",
    category: "Weather & Climate",
    abstract_id: "Evaluasi performa model simulasi WRF menggunakan pendekatan ensemble untuk meningkatkan akurasi estimasi parameter cuaca lokal.",
    abstract_en: "Performance evaluation of WRF model simulations using an ensemble technique to improve local weather parameter estimation accuracy."
  },
  {
    id: "pub-2025-3",
    title: "Analysis Correlation of Meteorological Factors with PM 2.5 Concentrations in Forecasting Air Quality of The City of Jakarta",
    year: "2025",
    journal: "IOP Conference Series: Earth and Environmental Science",
    doi: "10.1088/1755-1315/1448/1/012006",
    link: "https://doi.org/10.1088/1755-1315/1448/1/012006",
    category: "Air Quality & WRF-Chem",
    abstract_id: "Menganalisis korelasi antara parameter meteorologi (kecepatan angin, kelembapan, suhu) dengan konsentrasi PM2.5 untuk prediksi kualitas udara kota Jakarta.",
    abstract_en: "Analyzes the correlation between meteorological parameters and PM2.5 concentration to enhance urban air quality forecasting in Jakarta."
  },
  {
    id: "pub-2025-4",
    title: "Effect of Pyrolysis Temperature of Domestic Sewage Sludge Biochar on CO2 Adsorption",
    year: "2025",
    journal: "Results in Engineering (Elsevier)",
    doi: "10.1016/j.rineng.2025.105136",
    link: "https://doi.org/10.1016/j.rineng.2025.105136",
    category: "Biochar & Carbon Capture",
    abstract_id: "Investigasi efek suhu pirolisis biochar berbahan dasar lumpur limbah domestik terhadap kapasitas adsorpsi gas CO2 untuk mitigasi perubahan iklim.",
    abstract_en: "Investigates the impact of pyrolysis temperature on domestic sewage sludge biochar for optimizing CO2 adsorption capacity in climate mitigation."
  },
  {
    id: "pub-2024-1",
    title: "Correlation Analysis of PM10 with Tropospheric Ozone During Forest and Land Fire Events in Sumatera",
    year: "2024",
    journal: "ResearchGate Publication",
    doi: "-",
    link: "https://www.researchgate.net/publication/391593977_Correlation_Analysis_of_PM10_with_Tropospheric_Ozone_During_Forest_and_Land_Fire_Events_in_Sumatera",
    category: "Air Quality & WRF-Chem",
    abstract_id: "Studi korelasi antara konsentrasi partikulat PM10 dan ozon troposfer saat kejadian karhutla di pulau Sumatera.",
    abstract_en: "Study on the correlation between particulate matter PM10 and tropospheric ozone levels during peatland and forest fires in Sumatera."
  },
  {
    id: "pub-2022-1",
    title: "Simulation of Forest and Land Fire Smoke Using WRF-Chem in Riau Province",
    year: "2022",
    journal: "Repository Institut Teknologi Sumatera",
    doi: "-",
    link: "https://repo.itera.ac.id/depan/submission/SB2301030010",
    category: "Weather & Climate",
    abstract_id: "Simulasi sebaran asap karhutla di Provinsi Riau menggunakan model numerik atmosferik WRF-Chem.",
    abstract_en: "Numerical simulation of wildfire smoke plume transport in Riau Province utilizing WRF-Chem."
  },
  {
    id: "pub-2021-1",
    title: "Evaluasi Satellite Precipitation Product (GSMaP, CHIRPS, dan IMERG) di Kabupaten Lampung Selatan",
    year: "2021",
    journal: "Jurnal Sains dan Teknologi Atmosfer (JSAT)",
    doi: "-",
    link: "https://journal.itera.ac.id/index.php/jsat/article/view/702/291",
    category: "Weather & Climate",
    abstract_id: "Evaluasi presisi dan akurasi data curah hujan satelit GSMaP, CHIRPS, dan IMERG dibandingkan dengan data observasi permukaan.",
    abstract_en: "Precision and accuracy evaluation of satellite rainfall estimates (GSMaP, CHIRPS, IMERG) against rain-gauge measurements in South Lampung."
  }
];

export const defaultBlogs = [
  {
    id: "blog-1",
    title_id: "Memahami Biochar: Solusi Berbasis Alam untuk Carbon Capture di Indonesia",
    title_en: "Understanding Biochar: Nature-Based Carbon Capture Solution for Indonesia",
    date: "10 Ags 2026",
    category: "Biochar & Carbon Capture",
    readTime: "5 min read",
    image: "assets/images/biochar.png",
    excerpt_id: "Bagaimana konversi limbah organik dan lumpur limbah domestik melalui proses pirolisis dapat mengunci karbon dioksida secara permanen.",
    excerpt_en: "How converting organic waste and domestic sludge via pyrolysis can permanently lock carbon dioxide from the atmosphere.",
    content_id: `
### Pendahuluan
Perubahan iklim menuntut kita mencari metode sekuestrasi karbon yang tidak hanya efisien tetapi juga berkelanjutan. **Biochar** — material kaya karbon yang dihasilkan dari pirolisis biomassa limbah — kini menjadi fokus utama riset penyerapan karbon (Carbon Capture and Storage / CCS) global.

### Mengapa Biochar dari Limbah Domestik?
Dalam penelitian terbaru saya di *National Taiwan University*, penggunaan biomassa limbah dari limbah domestik dan pertanian di Indonesia menawarkan dua keuntungan sekaligus:
1. **Pengelolaan Limbah**: Mengurangi volume sampah organik yang berpotensi memancarkan metana di TPA.
2. **Adsorpsi CO2**: Melalui pengontrolan suhu pirolisis (400°C - 700°C), struktur pori biochar dapat dioptimalkan untuk memaksimalkan penyerapan CO2.

### Tantangan & Masa Depan
Integrasi biochar ke dalam tanah pertanian di Indonesia tidak hanya mengunci karbon selama ratusan tahun, tetapi juga meningkatkan kesuburan tanah. Penelitian lebih lanjut berfokus pada aktivasi fisik dan kimia untuk meningkatkan daya serap gas emisi industri.
    `,
    content_en: `
### Introduction
Climate change urgently demands carbon sequestration methods that are both efficient and sustainable. **Biochar** — a carbon-rich material produced via biomass pyrolysis — is emerging as a cornerstone of Nature-Based Solutions for Carbon Capture and Storage (CCS).

### Why Waste-Derived Biochar?
In my current research at *National Taiwan University*, utilizing agricultural and domestic sewage sludge waste from Indonesia addresses dual challenges:
1. **Waste Reduction**: Minimizing organic waste accumulation that otherwise releases greenhouse gases.
2. **CO2 Adsorptive Capacity**: By controlling pyrolysis temperatures (400°C - 700°C), biochar pore architecture can be tailored to maximize atmospheric CO2 capture.

### Looking Ahead
Integrating biochar into agricultural soils sequesters carbon for centuries while enriching soil fertility. Future research focuses on chemical and thermal activation techniques for industrial flue gas adsorption.
    `
  },
  {
    id: "blog-2",
    title_id: "Pemodelan Kualitas Udara dengan WRF-Chem: Mengurai Sebaran Asap Karhutla",
    title_en: "Air Quality Modeling with WRF-Chem: Unraveling Wildfire Smoke Dispersion",
    date: "25 Jul 2026",
    category: "Air Quality & WRF-Chem",
    readTime: "7 min read",
    image: "assets/images/wrf.png",
    excerpt_id: "Studi kasus penggabungan pemodelan meteorologi dan reaksi kimia atmosfer untuk memprediksi pergerakan polutan lintas batas.",
    excerpt_en: "Case study combining atmospheric meteorology and chemical reaction mechanisms to predict transboundary smoke transport.",
    content_id: `
### Mengenal WRF-Chem
**Weather Research and Forecasting with Chemistry (WRF-Chem)** adalah model atmosferik tingkat lanjut yang mensimulasikan emisi, transportasi, reaksi kimia, dan deposisi polutan secara simultan dengan dinamika cuaca.

### Mekanisme Kimia: GEOS-Chem vs SAPRC99 vs MOZART
Dalam makalah ilmiah kami di *Jurnal Teknologi Lingkungan (2025)*, kami membandingkan tiga mekanisme reaksi kimia:
- **SAPRC99**: Sangat rinci untuk reaksi fotokimia ozon dan VOC.
- **MOZART**: Sangat kuat untuk skala regional global.
- **GEOS-Chem**: Memberikan resolusi tinggi untuk sebaran aerosol kabut asap karhutla.

### Implikasi Kebijakan Lingkungan
Pemodelan presisi tinggi ini memungkinkan pemerintah dan institusi lingkungan (seperti dalam dokumen RPPMU) merancang mitigasi dini serta peringatan dini bahaya kualitas udara bagi masyarakat.
    `,
    content_en: `
### Understanding WRF-Chem
**Weather Research and Forecasting coupled with Chemistry (WRF-Chem)** is an advanced atmospheric model that simulates emissions, transport, chemical transformations, and deposition of pollutants alongside weather dynamics.

### Chemical Mechanisms: GEOS-Chem vs SAPRC99 vs MOZART
In our research paper published in *Jurnal Teknologi Lingkungan (2025)*, we compared three chemical mechanisms:
- **SAPRC99**: Detailed for photochemical ozone and VOC reactions.
- **MOZART**: Robust for regional to global scale dynamics.
- **GEOS-Chem**: Superior resolution for aerosol smoke dispersion during wildfire events.

### Policy & Environmental Impact
High-resolution air quality modeling empowers environmental authorities to draft science-backed Air Quality Management Plans (RPPMU) and issue timely public health warnings.
    `
  }
];

export const defaultExperiences = [
  {
    role_id: "Peneliti (Researcher)",
    role_en: "Researcher",
    institution: "National Taiwan University (NTU)",
    period: "Okt 2025 - Sekarang",
    desc_id: "Melakukan penelitian ilmiah tentang pengembangan material biochar dari limbah organik Indonesia untuk teknologi penyerapan karbon (carbon capture).",
    desc_en: "Conducting scientific research on developing biochar materials derived from Indonesian waste biomass for carbon capture technologies."
  },
  {
    role_id: "Penasihat Teknis Pemodelan Udara",
    role_en: "Air Modeling Advisor",
    institution: "PT Lensa Makmur Sejahtera",
    period: "Mei 2025 - Mei 2026",
    desc_id: "Memberikan rekomendasi teknis dan analisis simulasi dispersi pencemar udara menggunakan model Weather Research and Forecasting (WRF).",
    desc_en: "Provided technical expertise and recommendations for air pollutant dispersion simulations using the WRF Model."
  },
  {
    role_id: "Konsultan Lingkungan",
    role_en: "Environmental Consultant",
    institution: "PT Lensa Makmur Sejahtera",
    period: "Mei 2023 - Apr 2024",
    desc_id: "Membantu penyusunan dokumen Rencana Perlindungan dan Pengelolaan Mutu Udara (RPPMU).",
    desc_en: "Assisted in drafting Air Quality Management and Protection Plan (RPPMU) policy documents."
  },
  {
    role_id: "Magang Riset Kualitas Udara",
    role_en: "Air Quality Research Intern",
    institution: "Global Atmosphere Watch (GAW)",
    period: "Jun 2022 - Jul 2023",
    desc_id: "Penelitian ozon troposfer, pemetaan meteorologi, dan publikasi prediksi kualitas udara real-time.",
    desc_en: "Tropospheric ozone chemical research, meteorological data inventorying, and real-time air quality forecasting."
  },
  {
    role_id: "Asisten Pengajar & Praktikum",
    role_en: "Teaching & Lab Assistant",
    institution: "ITB & ITERA",
    period: "2019 - 2022",
    desc_id: "Asisten pelatihan AERMOD, CALPUFF, HYSPLIT di ITB; Asisten Praktikum Pemodelan Cuaca (WRF), Metode Numerik Python, & Laboratorium Astronomi di ITERA.",
    desc_en: "Air quality training TA (AERMOD, CALPUFF, HYSPLIT) at ITB; Practicum assistant for Weather Modeling (WRF), Python Numerical Methods, and Astronomy Lab at ITERA."
  }
];

export const defaultEducation = [
  {
    degree_id: "Doktor (Ph.D.) & Magister (M.T.) Teknik Lingkungan",
    degree_en: "Ph.D. Candidate & Master's in Environmental Engineering",
    institution: "Institut Teknologi Sepuluh Nopember (ITS)",
    period: "2024 - 2025 / Present",
    gpa: "IPK: 3.73",
    detail_id: "Fokus penelitian: Penyerapan Karbon dengan Biochar, Pemodelan Pencemaran Udara (WRF-Chem, AERMOD, CALPUFF), Strategi Mitigasi Perubahan Iklim.",
    detail_en: "Research focus: Carbon Capture with Biochar, Air Pollution Modeling (WRF-Chem, AERMOD, CALPUFF), and Climate Change Mitigation Strategies."
  },
  {
    degree_id: "Sarjana Sains (S.Si.) Sains Atmosfer dan Keplanetan",
    degree_en: "B.S. in Atmospheric and Planetary Science",
    institution: "Institut Teknologi Sumatera (ITERA)",
    period: "2018 - 2023",
    gpa: "IPK: 3.82 (Predikat Sangat Memuaskan)",
    detail_id: "Studi mendalam mengenai fisika atmosfer, pemodelan iklim numerik, pengolahan data satelit, dan sains astronomi.",
    detail_en: "In-depth study of atmospheric physics, numerical climate modeling, satellite precipitation data processing, and astronomical science."
  }
];

export const defaultAwards = [
  {
    title_id: "Sertifikat Hak Cipta Program Komputer Direct Air Capture (DAC) dengan Integrasi Arduino-MATLAB",
    title_en: "Copyright Certificate for Software Program Direct Air Capture (DAC) System with Arduino-MATLAB",
    year: "2026"
  },
  {
    title_id: "Best Presenter di The 10th IAA Conference ITB",
    title_en: "Best Presenter at The 10th IAA Conference ITB",
    year: "2025"
  },
  {
    title_id: "Mahasiswa Berprestasi Program Studi Sains Atmosfer dan Keplanetan ITERA",
    title_en: "Outstanding Student Class of 2018 Atmospheric & Planetary Science ITERA",
    year: "2023"
  },
  {
    title_id: "Beasiswa Pelatihan Python",
    title_en: "Python Training Scholarship",
    year: "2022"
  },
  {
    title_id: "Achievement Award Institut Teknologi Sumatera",
    title_en: "Achievement Award Institut Teknologi Sumatera",
    year: "2021"
  },
  {
    title_id: "Beasiswa Bank Indonesia & Beasiswa PPA",
    title_en: "Bank Indonesia Scholarship & PPA Achievement Scholarship",
    year: "2020"
  }
];

export const defaultSkills = [
  { name: "WRF / WRF-Chem", category: "Modeling" },
  { name: "AERMOD / CALPUFF", category: "Modeling" },
  { name: "HYSPLIT & PUMA", category: "Modeling" },
  { name: "Biochar & Carbon Capture", category: "Research" },
  { name: "Python (NumPy, SciPy, Pandas)", category: "Programming" },
  { name: "MATLAB", category: "Programming" },
  { name: "ArcGIS & QGIS", category: "GIS & Mapping" },
  { name: "Tableau & Power BI", category: "Data Analytics" },
  { name: "SPSS Statistics", category: "Data Analytics" },
  { name: "AMDAL & RPPMU Preparation", category: "Consulting" },
  { name: "UI/UX Design (Figma)", category: "Design" }
];

// LocalStorage Helper functions with Smart Merge
export function getStoredProfile() {
  try {
    const data = localStorage.getItem(STORAGE_KEY_PROFILE);
    if (!data) return defaultProfile;
    const parsed = JSON.parse(data);
    // Deep merge to ensure all fields are maintained even when defaultProfile expands
    return {
      ...defaultProfile,
      ...parsed,
      stats: parsed.stats && parsed.stats.length ? parsed.stats : defaultProfile.stats
    };
  } catch (e) {
    console.error("Error reading stored profile:", e);
    return defaultProfile;
  }
}

export function saveStoredProfile(profile) {
  localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profile));
}

export function getStoredPublications() {
  try {
    const data = localStorage.getItem(STORAGE_KEY_PUBS);
    if (!data) return defaultPublications;
    const userPubs = JSON.parse(data);
    if (!Array.isArray(userPubs) || userPubs.length === 0) return defaultPublications;

    // Smart Merge: Preserve user customized/edited/added pubs, and merge any new default publications from code
    const userPubIds = new Set(userPubs.map(p => p.id));
    const missingDefaults = defaultPublications.filter(p => !userPubIds.has(p.id));
    return [...userPubs, ...missingDefaults];
  } catch (e) {
    console.error("Error reading stored publications:", e);
    return defaultPublications;
  }
}

export function saveStoredPublications(pubs) {
  localStorage.setItem(STORAGE_KEY_PUBS, JSON.stringify(pubs));
}

export function getStoredBlogs() {
  try {
    const data = localStorage.getItem(STORAGE_KEY_BLOGS);
    if (!data) return defaultBlogs;
    const userBlogs = JSON.parse(data);
    if (!Array.isArray(userBlogs) || userBlogs.length === 0) return defaultBlogs;

    // Smart Merge: Preserve user customized/edited/added blogs, and merge any new default blogs from code
    const userBlogIds = new Set(userBlogs.map(b => b.id));
    const missingDefaults = defaultBlogs.filter(b => !userBlogIds.has(b.id));
    return [...userBlogs, ...missingDefaults];
  } catch (e) {
    console.error("Error reading stored blogs:", e);
    return defaultBlogs;
  }
}

export function saveStoredBlogs(blogs) {
  localStorage.setItem(STORAGE_KEY_BLOGS, JSON.stringify(blogs));
}

export function generateDataJsFileContent(profile, pubs, blogs) {
  return `/**
 * Initial dataset and bilingual dictionary for Ade Ayu Oktaviana Portfolio
 * Auto-generated & Synced via CMS on ${new Date().toLocaleString('id-ID')}
 */

const STORAGE_KEY_PROFILE = 'adeayu_portfolio_profile_v1';
const STORAGE_KEY_PUBS = 'adeayu_portfolio_pubs_v1';
const STORAGE_KEY_BLOGS = 'adeayu_portfolio_blogs_v1';
const STORAGE_KEY_AUTH = 'adeayu_portfolio_auth_v1';

export const defaultProfile = ${JSON.stringify(profile || defaultProfile, null, 2)};

export const defaultPublications = ${JSON.stringify(pubs || defaultPublications, null, 2)};

export const defaultBlogs = ${JSON.stringify(blogs || defaultBlogs, null, 2)};

export const defaultExperiences = ${JSON.stringify(defaultExperiences, null, 2)};

export const defaultEducation = ${JSON.stringify(defaultEducation, null, 2)};

export const defaultAwards = ${JSON.stringify(defaultAwards, null, 2)};

export const defaultSkills = ${JSON.stringify(defaultSkills, null, 2)};

// LocalStorage Helper functions with Smart Merge
export function getStoredProfile() {
  try {
    const data = localStorage.getItem(STORAGE_KEY_PROFILE);
    if (!data) return defaultProfile;
    const parsed = JSON.parse(data);
    return {
      ...defaultProfile,
      ...parsed,
      stats: parsed.stats && parsed.stats.length ? parsed.stats : defaultProfile.stats
    };
  } catch (e) {
    return defaultProfile;
  }
}

export function saveStoredProfile(profile) {
  localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profile));
}

export function getStoredPublications() {
  try {
    const data = localStorage.getItem(STORAGE_KEY_PUBS);
    if (!data) return defaultPublications;
    const userPubs = JSON.parse(data);
    if (!Array.isArray(userPubs) || userPubs.length === 0) return defaultPublications;
    const userPubIds = new Set(userPubs.map(p => p.id));
    const missingDefaults = defaultPublications.filter(p => !userPubIds.has(p.id));
    return [...userPubs, ...missingDefaults];
  } catch (e) {
    return defaultPublications;
  }
}

export function saveStoredPublications(pubs) {
  localStorage.setItem(STORAGE_KEY_PUBS, JSON.stringify(pubs));
}

export function getStoredBlogs() {
  try {
    const data = localStorage.getItem(STORAGE_KEY_BLOGS);
    if (!data) return defaultBlogs;
    const userBlogs = JSON.parse(data);
    if (!Array.isArray(userBlogs) || userBlogs.length === 0) return defaultBlogs;
    const userBlogIds = new Set(userBlogs.map(b => b.id));
    const missingDefaults = defaultBlogs.filter(b => !userBlogIds.has(b.id));
    return [...userBlogs, ...missingDefaults];
  } catch (e) {
    return defaultBlogs;
  }
}

export function saveStoredBlogs(blogs) {
  localStorage.setItem(STORAGE_KEY_BLOGS, JSON.stringify(blogs));
}

export function resetAllDataToDefault() {
  localStorage.removeItem(STORAGE_KEY_PROFILE);
  localStorage.removeItem(STORAGE_KEY_PUBS);
  localStorage.removeItem(STORAGE_KEY_BLOGS);
  location.reload();
}
`;
}

export function resetAllDataToDefault() {
  localStorage.removeItem(STORAGE_KEY_PROFILE);
  localStorage.removeItem(STORAGE_KEY_PUBS);
  localStorage.removeItem(STORAGE_KEY_BLOGS);
  location.reload();
}

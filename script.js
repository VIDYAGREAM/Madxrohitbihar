const activeApps = [
    { id: 58, name: "1. APNA COLLEGE", tag: "Coding & tech", img: "https://i.postimg.cc/jS76CFc0/image-search-1783748117436.png", link: "https://apnacollgegpro.madxrohitbihar-1ce.workers.dev/" },
    { id: 1, name: "2. CAREER WILL", tag: "Competitive exams", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmYE_faasYwfAs0rQKDf4GcuoV7_Ws6ZUqWwmIpuHVSw&s", link: "https://sangam.free.nf/CW/course_index.html" },
    { id: 19, name: "3. CDS JOURNEY", tag: "Defence exam study", img: "https://i.postimg.cc/tRKNBNTh/image-search-1787230401173.webp", link: "https://cds.streamfiles.eu.org/" },
    { id: 6, name: "4. FUTUREKUL", tag: "Expert faculty classes", img: "https://i.postimg.cc/CK0zWrN0/image-search-1784218678678.png", link: "https://futurekulpro.madxrohitbihar-1ce.workers.dev/" },
    { id: 10, name: "5. IFAS ACADEMY", tag: "CSIR NET & GATE", img: "https://i.postimg.cc/XJdZmMRz/image-search-1784219774648.png", link: "https://sangam.free.nf/IFAS/" },
    { id: 2, name: "6. KHAN GLOBAL STUDIES", tag: "GS & competitive", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCiwfy76ica73byqKIURXqN2Zi2h2Sdw0VJooGkXsyg&s", link: "https://www.study-mate.in/batches" },
    { id: 60, name: "7. MAGNET BRAIN", tag: "Free school education", img: "https://i.postimg.cc/J4VMkfDz/image-search-1788171765952.png", link: "https://www.magnetbrains.com/" },
    { id: 72, name: "8. MISSION JEET", tag: "Targeted exam batches", img: "https://i.postimg.cc/V6j70XqJ/image-search-1792039762960.png", link: "https://missionjeet.madxrohitbihar-1ce.workers.dev/" },
    { id: 13, name: "9. NEXT TOPPERS", tag: "Focused fast batches", img: "https://i.postimg.cc/PqjZCyfr/image-search-1785225080041.jpg", link: "https://nexttopperspro.madxrohitbihar-1ce.workers.dev/" },
    { id: 101, name: "10. PARMAR ACADEMY", tag: "SSC & Railway prep", img: "https://i.postimg.cc/sxYz6q2p/image-search-1792562519230.webp", link: "https://parmar.madxrohitbihar-1ce.workers.dev/" },
    { id: 105, name: "11. PARMAR ACADEMY 2", tag: "SSC & Railway prep 2", img: "https://i.postimg.cc/65gXYjC5/image-search-1793367333359.jpg", link: "https://modeduzone.netlify.app/" },
    { id: 102, name: "12. PHYSICS PI", tag: "Conceptual courses", img: "https://i.postimg.cc/ZRMVR91P/image-search-1791519463252.webp", link: "http://pi.studyparcham.site" },
    { id: 100, name: "13. PHYSICS WALLAH", tag: "Premium batches & tests", img: "https://i.postimg.cc/ZRMVR91P/image-search-1791519463252.webp", link: "https://physicspro.madxrohitbihar-1ce.workers.dev/" },
    { id: 20, name: "14. RG VIKRAMJEET", tag: "Maths & reasoning", img: "https://i.postimg.cc/cLqhCJVD/image-search-1791011678203.png", link: "https://learnbyakp.site/vikaram" },
    { id: 4, name: "15. ROJGAR WITH ANKIT", tag: "Affordable exam prep", img: "https://i.postimg.cc/fTfdSHbT/image-search-1783668281136.png", link: "https://ais-pre-puxho4o57upkknekv3mgg7-49225910278.asia-east1.run.app/" },
    { id: 3, name: "16. SELECTION WAY", tag: "Dedicated selection classes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRquIqVyakcgsPuAsFkSm34nPLKZ_IY2W0-Rj5sd1-T-g&s=10", link: "https://selectionway.madxrohitbihar-1ce.workers.dev/" },
    { id: 59, name: "17. STUDY IQ", tag: "UPSC & Civil services", img: "https://i.postimg.cc/850xN6Wz/image-search-1788171724038.jpg", link: "https://spidyiq.vercel.app/" },
    { id: 8, name: "18. TEST SERIES", tag: "Mock tests & practice", img: "https://i.postimg.cc/Bb9C4KYz/image-search-1785225815998.png", link: "https://repeatermock.com/" },
    { id: 12, name: "19. UNACADEMY", tag: "Comprehensive learning", img: "https://i.postimg.cc/Wz6xPX4L/image-search-1785224943445.jpg", link: "https://unacdemy-pro1.madxrohitbihar-1ce.workers.dev/" },
    { id: 71, name: "20. UNACADEMY ONLINE", tag: "Live interactive classes", img: "https://i.postimg.cc/Wz6xPX4L/image-search-1785224943445.jpg", link: "https://unacdemypro.madxrohitbihar-1ce.workers.dev/" },
    { id: 17, name: "21. VIBRANT ACADEMY", tag: "JEE advanced coaching", img: "https://i.postimg.cc/mgx3mfCs/image-search-1785251111107.png", link: "https://learnbyakp.site/vibrant" },
    {
        id: 108,
        name: "22. VIDYAGRAM",
        tag: "Online learning platform",
        img: "https://i.postimg.cc/PqbrQWnH/image-search-1791123215735.png",
        link: "https://studybeepro.site/vidyagram/",
        servers: [
            { name: "Server 1 (Fast)", url: "https://studybeepro.site/vidyagram/" },
            { name: "Server 2 (Backup)", url: "https://ais-pre-a5hvjqc66aerxlyco5jzkx-49225910278.asia-east1.run.app/" }
        ]
    },
    { id: 61, name: "23. VIDYAKHUL", tag: "Online school boards", img: "https://i.postimg.cc/9Qr5MJ2g/image-search-1787482867101.png", link: "https://vidyakool.streamfiles.eu.org/" }
];

// Upcoming apps yahan add kar sakte hain
const upcomingApps = [];

let favorites = JSON.parse(localStorage.getItem('userFavs')) || [];

// External URL opener (WebView & Browser safe)
function openExternal(url) {
    window.open(url, '_blank');
}

// Generic Outer Click Modal Closer
function closeModalOnOuter(event, modalId) {
    if (event.target.id === modalId) {
        document.getElementById(modalId).classList.remove('show');
    }
}

// Server Modal Logic
function openServerModal(app) {
    const modal = document.getElementById('serverModal');
    const title = document.getElementById('modalAppTitle');
    const icon = document.getElementById('modalAppIcon');
    const list = document.getElementById('serverOptionsList');

    title.innerText = app.name;
    icon.src = app.img || 'https://via.placeholder.com/44/0d1424/fff?text=App';
    icon.onerror = function() {
        this.src = 'https://via.placeholder.com/44/0d1424/fff?text=App';
    };

    list.innerHTML = app.servers.map((srv, idx) => `
        <button type="button" class="server-opt-btn" onclick="selectServer('${encodeURIComponent(srv.url)}')">
            <span><i class="fa-solid fa-server"></i> &nbsp;${srv.name || `Server ${idx + 1}`}</span>
            <span>Open <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
        </button>
    `).join('');

    modal.classList.add('show');
}

function selectServer(encodedUrl) {
    const url = decodeURIComponent(encodedUrl);
    closeServerModal();
    openExternal(url);
}

function closeServerModal() {
    document.getElementById('serverModal').classList.remove('show');
}

// Notifications Modal
function openNotifications() {
    document.getElementById('notificationModal').classList.add('show');
}

function closeNotifications() {
    document.getElementById('notificationModal').classList.remove('show');
}

// Theme Drawer & Switching
function toggleThemeDrawer() {
    const modal = document.getElementById('themeDrawerModal');
    modal.classList.toggle('show');
}

function setAppTheme(theme) {
    document.body.classList.remove('theme-gold-mode', 'theme-black-mode', 'theme-white-mode');

    if (theme === 'gold') document.body.classList.add('theme-gold-mode');
    if (theme === 'black') document.body.classList.add('theme-black-mode');
    if (theme === 'white') document.body.classList.add('theme-white-mode');

    localStorage.setItem('selectedAppTheme', theme);
    document.getElementById('themeDrawerModal').classList.remove('show');
    showToast(`Theme changed to ${theme.toUpperCase()}`);
}

// Community Popup
function closePopup() {
    document.getElementById('popupModal').classList.remove('show');
    sessionStorage.setItem('popupShown', 'true');
}

// Open App Handler
function openApp(id) {
    const app = activeApps.find(a => a.id === id);
    if (!app) return;

    if (app.servers && app.servers.length > 1) {
        openServerModal(app);
    } else {
        openExternal(app.link);
    }
}

// Toast Notification
let toastTimeout;
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.innerText = msg;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 2000);
}

// Build Single Card HTML
function createAppCardHTML(app) {
    const isFav = favorites.includes(app.id);
    const hasMultiServer = app.servers && app.servers.length > 1;
    return `
        <div class="app-card" onclick="openApp(${app.id})" data-name="${app.name.toLowerCase()}" data-tag="${(app.tag || '').toLowerCase()}">
            <div class="app-info">
                <img src="${app.img}" class="app-icon" alt="${app.name}" onerror="this.src='https://via.placeholder.com/48/0d1424/fff?text=App'">
                <div class="app-details">
                    <span class="app-name">${app.name}</span>
                    <span class="app-tag">${app.tag || ''}</span>
                </div>
            </div>
            <div class="app-actions">
                <button type="button" class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${app.id})" aria-label="Favorite">
                    <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
                </button>
                <button type="button" class="open-btn">
                    ${hasMultiServer ? 'Servers ▾' : 'Open'}
                </button>
            </div>
        </div>
    `;
}

// Render Active, Upcoming & Favorites
function renderApps() {
    const activeContainer = document.getElementById('active-apps-list');
    document.getElementById('active-count').innerText = `${activeApps.length} Available`;
    activeContainer.innerHTML = activeApps.map(createAppCardHTML).join('');

    renderUpcoming();
    renderFavorites();
    filterApps();
}

function renderUpcoming() {
    const upcomingContainer = document.getElementById('upcoming-apps-list');
    document.getElementById('upcoming-count').innerText = `${upcomingApps.length} Coming Soon`;

    if (upcomingApps.length === 0) {
        upcomingContainer.innerHTML = `<div class="no-data"><i class="fa-solid fa-clock"></i> &nbsp;New servers coming soon. Stay tuned!</div>`;
        return;
    }
    upcomingContainer.innerHTML = upcomingApps.map(createAppCardHTML).join('');
}

function renderFavorites() {
    const favContainer = document.getElementById('favorites-apps-list');
    const favApps = activeApps.filter(app => favorites.includes(app.id));
    document.getElementById('fav-count').innerText = `${favApps.length} Saved`;

    if (favApps.length === 0) {
        favContainer.innerHTML = `<div class="no-data"><i class="fa-regular fa-heart"></i> &nbsp;No favorite apps saved yet. Tap the heart icon on any app!</div>`;
        return;
    }
    favContainer.innerHTML = favApps.map(createAppCardHTML).join('');
}

function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
        showToast("Removed from Favorites");
    } else {
        favorites.push(id);
        showToast("Added to Favorites");
    }
    localStorage.setItem('userFavs', JSON.stringify(favorites));
    renderApps();
}

// Tab Switching
function switchTab(tabName, element) {
    document.querySelectorAll('.bottom-nav .nav-item').forEach(item => item.classList.remove('active'));
    if (element) element.classList.add('active');

    ['apps', 'upcoming', 'favorites'].forEach(tab => {
        document.getElementById(`tab-${tab}`).classList.add('hidden');
    });

    document.getElementById(`tab-${tabName}`).classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    sessionStorage.setItem('currentActiveTab', tabName);
}

// Search Filter
function filterApps() {
    const input = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    const query = input.value.trim().toLowerCase();

    if (query.length > 0) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
    }

    document.querySelectorAll('#active-apps-list .app-card').forEach(card => {
        const name = card.getAttribute('data-name') || '';
        const tag = card.getAttribute('data-tag') || '';
        const matches = name.includes(query) || tag.includes(query);
        card.style.display = matches ? 'flex' : 'none';
    });
}

function clearSearch() {
    const input = document.getElementById('searchInput');
    input.value = '';
    filterApps();
    input.focus();
}

// Initialization
document.addEventListener("DOMContentLoaded", () => {
    // Load saved theme
    const savedTheme = localStorage.getItem('selectedAppTheme');
    if (savedTheme && savedTheme !== 'cyan') {
        if (savedTheme === 'gold') document.body.classList.add('theme-gold-mode');
        if (savedTheme === 'black') document.body.classList.add('theme-black-mode');
        if (savedTheme === 'white') document.body.classList.add('theme-white-mode');
    }

    // Splash screen logic
    const splash = document.getElementById("splash-screen");
    if (!sessionStorage.getItem('splashShown')) {
        setTimeout(() => {
            splash.classList.add("hide-splash");
            sessionStorage.setItem('splashShown', 'true');
        }, 2500);
    } else {
        splash.style.display = 'none';
    }

    // Community popup logic
    if (!sessionStorage.getItem('popupShown')) {
        setTimeout(() => {
            document.getElementById('popupModal').classList.add('show');
        }, 600);
    }

    // Restore active tab
    const savedTab = sessionStorage.getItem('currentActiveTab');
    if (savedTab && ['apps', 'upcoming', 'favorites'].includes(savedTab)) {
        const targetNav = document.getElementById(`nav-${savedTab}`);
        switchTab(savedTab, targetNav);
    }

    renderApps();
});

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
            { name: "Server 1", url: "https://studybeepro.site/vidyagram/" },
            { name: "Server 2", url: "https://ais-pre-a5hvjqc66aerxlyco5jzkx-49225910278.asia-east1.run.app/" }
        ]
    },
    { id: 61, name: "23. VIDYAKHUL", tag: "Online school boards", img: "https://i.postimg.cc/9Qr5MJ2g/image-search-1787482867101.png", link: "https://vidyakool.streamfiles.eu.org/" }
];  

let favorites = JSON.parse(localStorage.getItem('userFavs')) || [];  
let currentFilter = 'all';

function initServerModal() {
    if (document.getElementById('serverSelectModal')) return;

    const style = document.createElement('style');
    style.textContent = `
        #serverSelectModal {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(4px);
            z-index: 99999;
            align-items: center;
            justify-content: center;
            padding: 16px;
        }
        #serverSelectModal.show {
            display: flex;
        }
        .server-box {
            width: 100%;
            max-width: 340px;
            background: #0d1424;
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 16px;
            padding: 20px;
            color: #ffffff;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            animation: serverPop 0.18s ease-out;
        }
        @keyframes serverPop {
            from { transform: scale(0.94); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        .server-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 16px;
        }
        .server-header img {
            width: 44px;
            height: 44px;
            border-radius: 10px;
            object-fit: cover;
            background: #162038;
        }
        .server-title {
            font-size: 16px;
            font-weight: 600;
            line-height: 1.3;
        }
        .server-sub {
            font-size: 12px;
            color: #94a3b8;
            margin-top: 2px;
        }
        .server-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .server-btn {
            width: 100%;
            padding: 12px 14px;
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 12px;
            background: #152036;
            color: #ffffff;
            font-size: 14px;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            transition: background 0.15s ease, border-color 0.15s ease;
        }
        .server-btn:hover {
            background: #1e2e4d;
            border-color: #3b82f6;
        }
        .server-cancel {
            margin-top: 12px;
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 10px;
            background: transparent;
            color: #94a3b8;
            font-size: 13px;
            cursor: pointer;
        }
        .server-cancel:hover {
            color: #ffffff;
            background: rgba(255, 255, 255, 0.06);
        }
    `;
    document.head.appendChild(style);

    const modal = document.createElement('div');
    modal.id = 'serverSelectModal';
    modal.innerHTML = `
        <div class="server-box" onclick="event.stopPropagation()">
            <div class="server-header">
                <img id="serverModalIcon" src="" alt="">
                <div>
                    <div id="serverModalTitle" class="server-title"></div>
                    <div class="server-sub">Select a server to open</div>
                </div>
            </div>
            <div id="serverModalList" class="server-list"></div>
            <button type="button" class="server-cancel" onclick="closeServerModal()">Cancel</button>
        </div>
    `;
    modal.addEventListener('click', closeServerModal);
    document.body.appendChild(modal);
}

function openServerModal(app) {
    initServerModal();
    const modal = document.getElementById('serverSelectModal');
    const title = document.getElementById('serverModalTitle');
    const icon = document.getElementById('serverModalIcon');
    const list = document.getElementById('serverModalList');

    title.innerText = app.name;
    icon.src = app.img || 'https://via.placeholder.com/44/0d1424/fff?text=App';
    icon.onerror = function() {
        this.src = 'https://via.placeholder.com/44/0d1424/fff?text=App';
    };

    list.innerHTML = app.servers.map((srv, idx) => `
        <button type="button" class="server-btn" onclick="selectServer('${encodeURIComponent(srv.url)}')">
            <span>${srv.name || `Server ${idx + 1}`}</span>
            <span>Open &rarr;</span>
        </button>
    `).join('');

    modal.classList.add('show');
}

function selectServer(encodedUrl) {
    const url = decodeURIComponent(encodedUrl);
    closeServerModal();
    window.open(url, '_blank');
}

function closeServerModal() {
    const modal = document.getElementById('serverSelectModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

function openApp(id) {
    const app = activeApps.find(a => a.id === id);
    if (!app) return;

    if (app.servers && app.servers.length > 1) {
        openServerModal(app);
    } else {
        window.open(app.link, '_blank');
    }
}

function showToast(msg) {  
    const toast = document.getElementById('toast');  
    toast.innerText = msg;  
    toast.classList.add('show');  
    setTimeout(() => toast.classList.remove('show'), 2000);  
}  

function renderApps() {  
    const activeContainer = document.getElementById('active-apps-list');  
    document.getElementById('active-count').innerText = `${activeApps.length} Available`;  

    activeContainer.innerHTML = activeApps.map(app => `  
        <div class="app-card" onclick="openApp(${app.id})" data-name="${app.name.toLowerCase()}" data-category="${getAppCategory(app.name)}">  
            <button class="fav-btn ${favorites.includes(app.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${app.id})">  
                <i class="fa-${favorites.includes(app.id) ? 'solid' : 'regular'} fa-heart"></i>  
            </button>  
            <img src="${app.img}" class="app-icon" alt="${app.name}" onerror="this.src='https://via.placeholder.com/48/0d1424/fff?text=App'">  
            <div class="app-details">  
                <span class="app-name">${app.name}</span>  
                <span class="app-tag">${app.tag || ''}</span>  
            </div>  
        </div>  
    `).join('');  
      
    renderFavorites();  
    filterApps();
}  

function getAppCategory(name) {
    const n = name.toUpperCase();
    if (n.includes('PHYSICS') || n.includes('APNA') || n.includes('VIBRANT') || n.includes('IFAS')) return 'jee';
    if (n.includes('CAREER') || n.includes('PARMAR') || n.includes('RG') || n.includes('STUDY IQ') || n.includes('KHAN')) return 'govt';
    if (n.includes('MAGNET') || n.includes('VIDYAKHUL') || n.includes('VIDYAGRAM')) return 'board';
    return 'govt';
}

function filterCategory(category, element) {
    currentFilter = category;
    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    element.classList.add('active');
    filterApps();
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

function renderFavorites() {  
    const favContainer = document.getElementById('favorites-apps-list');  
    const favApps = activeApps.filter(app => favorites.includes(app.id));  
      
    if (favApps.length === 0) {  
        favContainer.innerHTML = `<div class="no-data">No favorite apps saved yet.</div>`;  
        return;  
    }  

    favContainer.innerHTML = favApps.map(app => `  
        <div class="app-card" onclick="openApp(${app.id})">  
            <button class="fav-btn active" onclick="event.stopPropagation(); toggleFavorite(${app.id})">  
                <i class="fa-solid fa-heart"></i>  
            </button>  
            <img src="${app.img}" class="app-icon" alt="${app.name}" onerror="this.src='https://via.placeholder.com/48/0d1424/fff?text=App'">  
            <div class="app-details">  
                <span class="app-name">${app.name}</span>  
                <span class="app-tag">${app.tag || ''}</span>  
            </div>  
        </div>  
    `).join('');  
}  

function switchTab(tabName, element) {  
    document.querySelectorAll('.bottom-nav .nav-item').forEach(item => item.classList.remove('active'));  
    if(element) element.classList.add('active');  

    ['apps', 'favorites'].forEach(tab => {  
        document.getElementById(`tab-${tab}`).classList.add('hidden');  
    });  

    document.getElementById(`tab-${tabName}`).classList.remove('hidden');  
    window.scrollTo({ top: 0, behavior: 'smooth' });  
    
    sessionStorage.setItem('currentActiveTab', tabName);
}  

function filterApps() {  
    const query = document.getElementById('searchInput').value.toLowerCase();  
    document.querySelectorAll('#active-apps-list .app-card').forEach(card => {  
        const name = card.getAttribute('data-name');  
        const category = card.getAttribute('data-category');
        const matchesQuery = name && name.includes(query);
        const matchesCategory = (currentFilter === 'all' || category === currentFilter);
        
        card.style.display = (matchesQuery && matchesCategory) ? 'flex' : 'none';  
    });
}  

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    return false;
});

document.addEventListener("DOMContentLoaded", () => {  
    initServerModal();
    const splash = document.getElementById("splash-screen");  
      
    if (!sessionStorage.getItem('splashShown')) {  
        setTimeout(() => {  
            splash.classList.add("hide-splash");  
            sessionStorage.setItem('splashShown', 'true');  
        }, 4000);  
    } else {  
        splash.style.display = 'none';  
    }  

    if (!sessionStorage.getItem('popupShown')) {
        setTimeout(() => {  
            document.getElementById('popupModal').style.display = 'flex';  
        }, 500);
    }

    const savedTab = sessionStorage.getItem('currentActiveTab');
    if (savedTab) {
        const targetNav = document.getElementById(`nav-${savedTab}`);
        if (targetNav) {
            switchTab(savedTab, targetNav);
        }
    }
});  

function closePopup() {  
    document.getElementById('popupModal').style.display = 'none';  
    sessionStorage.setItem('popupShown', 'true'); 
}  

renderApps();

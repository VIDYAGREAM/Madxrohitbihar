// AroLinks Integration for Get Key
function openAroLinks() {
    const apiToken = "0aa19e644db340e405f3b7654cdc70f70d705966";
    const targetUrl = "https://newgetkey.madxrohitbihar-1ce.workers.dev/";
    const apiUrl = `https://arolinks.com/api?api=${apiToken}&url=${encodeURIComponent(targetUrl)}`;

    const msgDiv = document.getElementById("status-msg");
    msgDiv.style.color = "var(--accent-gold)";
    msgDiv.innerText = "Generating Link...";
    showToast("Generating Access Link...");

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === "success" && data.shortenedUrl) {
                window.location.href = data.shortenedUrl;
            } else {
                msgDiv.style.color = "#ff4444";
                msgDiv.innerText = "Error generating link!";
                showToast("Error generating link!");
            }
        })
        .catch(() => {
            msgDiv.style.color = "#ff4444";
            msgDiv.innerText = "Network Error!";
            showToast("Network Error!");
        });
}

// High Security Key Verification Logic (33 Characters + MAD prefix & AAP suffix)
function verifyUserKey() {
    const userKey = document.getElementById("accessKeyInput").value.trim().toUpperCase();
    const msgDiv = document.getElementById("status-msg");

    const targetLen = 33;
    if (userKey.length !== targetLen || !userKey.startsWith("MAD") || !userKey.endsWith("AAP")) {
        msgDiv.style.color = "#ff4444";
        msgDiv.innerText = "⚠️ Invalid key format!";
        showToast("⚠️ Invalid key format!");
        return;
    }

    let usedKeys = JSON.parse(localStorage.getItem("usedKeysRegistry")) || {};
    const currentTime = new Date().getTime();

    if (usedKeys[userKey]) {
        msgDiv.style.color = "#ff4444";
        msgDiv.innerText = "⚠️ This key has already been used! Please get a new key.";
        showToast("⚠️ Key already used! Get a new key");
        return;
    }

    usedKeys[userKey] = currentTime;
    localStorage.setItem("usedKeysRegistry", JSON.stringify(usedKeys));

    const keyExpiryDuration = 24 * 60 * 60 * 1000;
    const globalExpiryTime = currentTime + keyExpiryDuration;
    localStorage.setItem("appAuthExpiry", globalExpiryTime);

    msgDiv.style.color = "var(--neon-green)";
    msgDiv.innerText = "Portal Unlocked Successfully!";
    showToast("Portal Unlocked Successfully!");

    setTimeout(() => {
        document.getElementById("authScreenWrapper").style.display = "none";
    }, 600);
}

const activeApps = [
    { id: 58, name: "1. APNA COLLEGE", tag: "Coding & tech", img: "https://i.postimg.cc/jS76CFc0/image-search-1783748117436.png", link: "https://ac.spidystudy.eu.cc/" },
    { id: 112, name: "2. APPX ROHIT", tag: "All-in-one study batches", img: "https://i.postimg.cc/Y9zBn9N4/image-search-1795662876631.jpg", link: "https://madxrohitbihar.ai.studio/home" },
    { id: 1, name: "3. CAREER WILL", tag: "Competitive exams", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmYE_faasYwfAs0rQKDf4GcuoV7_Ws6ZUqWwmIpuHVSw&s", link: "https://sangam.free.nf/CW/course_index.html" },
    { id: 19, name: "4. CDS JOURNEY", tag: "Defence exam study", img: "https://i.postimg.cc/tRKNBNTh/image-search-1787230401173.webp", link: "https://cds.streamfiles.eu.org/" },
    { id: 6, name: "5. FUTUREKUL", tag: "Expert faculty classes", img: "https://i.postimg.cc/CK0zWrN0/image-search-1784218678678.png", link: "https://futurekulpro.madxrohitbihar-1ce.workers.dev/" },
    { id: 10, name: "6. IFAS ACADEMY", tag: "CSIR NET & GATE", img: "https://i.postimg.cc/XJdZmMRz/image-search-1784219774648.png", link: "https://sangam.free.nf/IFAS/" },
    { id: 60, name: "7. MAGNET BRAIN", tag: "Free school education", img: "https://i.postimg.cc/J4VMkfDz/image-search-1788171765952.png", link: "https://www.magnetbrains.com/" },
    { id: 72, name: "8. MISSION JEET", tag: "Targeted exam batches", img: "https://i.postimg.cc/V6j70XqJ/image-search-1792039762960.png", link: "https://missionjeet.madxrohitbihar-1ce.workers.dev/" },
    { id: 13, name: "9. NEXT TOPPERS", tag: "Focused fast batches", img: "https://i.postimg.cc/PqjZCyfr/image-search-1785225080041.jpg", link: "https://nexttopperspro.madxrohitbihar-1ce.workers.dev/" },
    { id: 101, name: "10. PARMAR ACADEMY", tag: "SSC & Railway prep", img: "https://i.postimg.cc/sxYz6q2p/image-search-1792562519230.webp", link: "https://parmar.madxrohitbihar-1ce.workers.dev/" },
    { id: 105, name: "11. PARMAR ACADEMY 2", tag: "SSC & Railway prep 2", img: "https://i.postimg.cc/65gXYjC5/image-search-1793367333359.jpg", link: "https://modeduzone.netlify.app/" },
    { id: 102, name: "12. PHYSICS PI", tag: "Conceptual courses", img: "https://i.postimg.cc/ZRMVR91P/image-search-1791519463252.webp", link: "http://pi.studyparcham.site" },
    { id: 100, name: "13. PHYSICS WALLAH", tag: "Premium batches & tests", img: "https://i.postimg.cc/ZRMVR91P/image-search-1791519463252.webp", link: "https://physicspro.madxrohitbihar-1ce.workers.dev/" },
    { id: 20, name: "14. RG VIKRAMJEET", tag: "Maths & reasoning", img: "https://i.postimg.cc/cLqhCJVD/image-search-1791011678203.png", link: "https://learnbyakp.site/vikaram" },
    { id: 4, name: "15. ROJGAR WITH ANKIT", tag: "Affordable exam prep", img: "https://i.postimg.cc/fTfdSHbT/image-search-1783668281136.png", link: "https://ais-pre-puxho4o57upkknekv3mgg7-49225910278.asia-east1.run.app/" },
    {
        id: 3,
        name: "16. SELECTION WAY",
        tag: "Dedicated selection classes",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRquIqVyakcgsPuAsFkSm34nPLKZ_IY2W0-Rj5sd1-T-g&s=10",
        link: "https://selectionway.madxrohitbihar-1ce.workers.dev/",
        servers: [
            { name: "Server 1", url: "https://selectionway.madxrohitbihar-1ce.workers.dev/" },
            { name: "Server 2", url: "https://selection-way2.madxrohitbihar-1ce.workers.dev/" }
        ]
    },
    { id: 8, name: "17. TEST SERIES", tag: "Mock tests & practice", img: "https://i.postimg.cc/Bb9C4KYz/image-search-1785225815998.png", link: "https://repeatermock.com/" },
    { id: 12, name: "18. UNACADEMY", tag: "Comprehensive learning", img: "https://i.postimg.cc/Wz6xPX4L/image-search-1785224943445.jpg", link: "https://unacdemy-pro1.madxrohitbihar-1ce.workers.dev/" },
    { id: 71, name: "19. UNACADEMY ONLINE", tag: "Live interactive classes", img: "https://i.postimg.cc/Wz6xPX4L/image-search-1785224943445.jpg", link: "https://unacdemypro.madxrohitbihar-1ce.workers.dev/" },
    { id: 17, name: "20. VIBRANT ACADEMY", tag: "JEE advanced coaching", img: "https://i.postimg.cc/mgx3mfCs/image-search-1785251111107.png", link: "https://learnbyakp.site/vibrant" },
    { id: 61, name: "21. VIDYAKHUL", tag: "Online school boards", img: "https://i.postimg.cc/9Qr5MJ2g/image-search-1787482867101.png", link: "https://vidyakool.streamfiles.eu.org/" },
    { id: 109, name: "22. TEST RANKING", tag: "Mock tests & ranking", img: "https://i.postimg.cc/DyrjSJyL/image-search-1795490544628.png", link: "https://test-ranking.madxrohitbihar-1ce.workers.dev/" },
    {
        id: 110,
        name: "23. GYAN BINDU GS ACADEMY",
        tag: "GS & competitive study",
        img: "https://i.postimg.cc/HxxhmqSF/image-search-1795578310141.png",
        link: "https://gyanbindu.madxrohitbihar-1ce.workers.dev/",
        servers: [
            { name: "Server 1", url: "https://gyanbindu.madxrohitbihar-1ce.workers.dev/" },
            { name: "Server 2", url: "https://madxrohitbihar.ai.studio/gyan" }
        ]
    },
    {
        id: 111,
        name: "24. MD CLASSES",
        tag: "Online courses & batches",
        img: "https://i.postimg.cc/gjrynd8j/image-search-1795579769252.png",
        link: "https://omegax.in.net/md-classes/courses"
    }
];

const upcomingApps = [];

let favorites = JSON.parse(localStorage.getItem("userFavs")) || [];

function renderWatermark() {
    const grid = document.getElementById("watermarkGrid");
    if (!grid) return;
    const label = "MODEDUZONE ✦ MADXROHITBIHAR";
    const totalItems = 48;
    grid.innerHTML = Array.from({ length: totalItems }, () =>
        `<div class="watermark-item">${label}</div>`
    ).join("");
}

function openExternal(url) {
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) {
        window.location.href = url;
    }
}

function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.innerText = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
}

function handleAppOpen(appId) {
    const app = activeApps.concat(upcomingApps).find(item => item.id === appId);
    if (!app) return;

    if (window.history && window.history.pushState) {
        window.history.pushState({ portalGuard: true }, "", window.location.href);
    }

    if (Array.isArray(app.servers) && app.servers.length > 0) {
        openServerModal(app);
    } else {
        openExternal(app.link);
    }
}

function openServerModal(app) {
    document.getElementById("serverModalTitle").innerText = `${app.name} - Servers`;
    const container = document.getElementById("serverListContainer");
    container.innerHTML = app.servers.map(srv => `
        <button class="server-btn" onclick="openExternal('${srv.url}'); closeServerModal();">
            <span><i class="fa-solid fa-link"></i> ${srv.name}</span>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
    `).join("");
    document.getElementById("serverModal").classList.remove("hidden");
}

function closeServerModal() {
    document.getElementById("serverModal").classList.add("hidden");
}

function closeServerOnBackdrop(e) {
    if (e.target.id === "serverModal") closeServerModal();
}

function toggleNotifications(show) {
    const modal = document.getElementById("notificationModal");
    if (show) modal.classList.remove("hidden");
    else modal.classList.add("hidden");
}

function closeNotificationsOnBackdrop(e) {
    if (e.target.id === "notificationModal") toggleNotifications(false);
}

function toggleThemeModal(show) {
    const modal = document.getElementById("themeModal");
    if (show) modal.classList.remove("hidden");
    else modal.classList.add("hidden");
}

function closeThemeOnBackdrop(e) {
    if (e.target.id === "themeModal") toggleThemeModal(false);
}

function applyTheme(themeName) {
    const validThemes = ["theme-white", "theme-black", "theme-gold", "theme-cyan"];
    const selected = validThemes.includes(themeName) ? themeName : "theme-gold";

    document.body.classList.remove(...validThemes);
    document.body.classList.add(selected);
    localStorage.setItem("selectedTheme", selected);

    document.querySelectorAll(".theme-option").forEach(btn => {
        btn.classList.toggle("active-theme", btn.getAttribute("data-theme") === selected);
    });

    toggleThemeModal(false);
}

function renderApps() {
    const activeContainer = document.getElementById("active-apps-list");
    document.getElementById("active-count").innerText = `${activeApps.length} Available`;

    activeContainer.innerHTML = activeApps.map(app => `
        <div class="app-card" data-name="${app.name.toLowerCase()} ${(app.tag || "").toLowerCase()}">
            <div class="app-info">
                <img src="${app.img}" class="app-icon" alt="${app.name}" onerror="this.src='https://via.placeholder.com/48/0d1424/fff?text=App'">
                <div class="app-details">
                    <span class="app-name">${app.name}</span>
                    <span class="app-tag">${app.tag || "Free Server Active"}</span>
                </div>
            </div>
            <div class="app-actions">
                <button class="fav-btn ${favorites.includes(app.id) ? "active" : ""}" onclick="toggleFavorite(${app.id})">
                    <i class="fa-${favorites.includes(app.id) ? "solid" : "regular"} fa-heart"></i>
                </button>
                <span onclick="handleAppOpen(${app.id})" class="open-btn">Open</span>
            </div>
        </div>
    `).join("");

    const upcomingContainer = document.getElementById("upcoming-apps-list");
    document.getElementById("upcoming-count").innerText = `${upcomingApps.length} Coming Soon`;

    if (upcomingApps.length === 0) {
        upcomingContainer.innerHTML = `<div class="no-data">No upcoming servers right now.</div>`;
    } else {
        upcomingContainer.innerHTML = upcomingApps.map(app => `
            <div class="app-card" data-name="${app.name.toLowerCase()} ${(app.tag || "").toLowerCase()}">
                <div class="app-info">
                    <img src="${app.img}" class="app-icon" alt="${app.name}" onerror="this.src='https://via.placeholder.com/48/0d1424/fff?text=App'">
                    <div class="app-details">
                        <span class="app-name">${app.name}</span>
                        <span class="app-tag">${app.tag || "Coming Soon"}</span>
                    </div>
                </div>
                <div class="app-actions">
                    <button class="fav-btn ${favorites.includes(app.id) ? "active" : ""}" onclick="toggleFavorite(${app.id})">
                        <i class="fa-${favorites.includes(app.id) ? "solid" : "regular"} fa-heart"></i>
                    </button>
                    <span onclick="handleAppOpen(${app.id})" class="open-btn">Open</span>
                </div>
            </div>
        `).join("");
    }

    renderFavorites();
}

function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
        showToast("Removed from Favorites");
    } else {
        favorites.push(id);
        showToast("Added to Favorites");
    }
    localStorage.setItem("userFavs", JSON.stringify(favorites));
    renderApps();
}

function renderFavorites() {
    const favContainer = document.getElementById("favorites-apps-list");
    const favApps = activeApps.concat(upcomingApps).filter(app => favorites.includes(app.id));

    if (favApps.length === 0) {
        favContainer.innerHTML = `<div class="no-data">No favorite apps saved yet.</div>`;
        return;
    }

    favContainer.innerHTML = favApps.map(app => `
        <div class="app-card">
            <div class="app-info">
                <img src="${app.img}" class="app-icon" alt="${app.name}" onerror="this.src='https://via.placeholder.com/48/0d1424/fff?text=App'">
                <div class="app-details">
                    <span class="app-name">${app.name}</span>
                    <span class="app-tag">${app.tag || "Saved Item"}</span>
                </div>
            </div>
            <div class="app-actions">
                <button class="fav-btn active" onclick="toggleFavorite(${app.id})">
                    <i class="fa-solid fa-heart"></i>
                </button>
                <span onclick="handleAppOpen(${app.id})" class="open-btn">Open</span>
            </div>
        </div>
    `).join("");
}

function switchTab(tabName, element) {
    document.querySelectorAll(".bottom-nav .nav-item").forEach(item => item.classList.remove("active"));
    if (element) element.classList.add("active");

    ["apps", "upcoming", "favorites"].forEach(tab => {
        document.getElementById(`tab-${tab}`).classList.add("hidden");
    });

    document.getElementById(`tab-${tabName}`).classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });

    sessionStorage.setItem("currentActiveTab", tabName);
}

function filterApps() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    document.querySelectorAll(".app-card").forEach(card => {
        const name = card.getAttribute("data-name");
        card.style.display = (!name || name.includes(query)) ? "flex" : "none";
    });
}

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    return false;
});

function checkAuthStatus() {
    const expiryTime = localStorage.getItem("appAuthExpiry");
    const currentTime = new Date().getTime();
    const isVerified = expiryTime && currentTime < expiryTime;

    if (isVerified) {
        document.getElementById("authScreenWrapper").style.display = "none";
    } else {
        document.getElementById("authScreenWrapper").style.display = "flex";
    }
}

function showLaunchPopupOnce() {
    if (sessionStorage.getItem("launchPopupDone") === "1") return;
    sessionStorage.setItem("launchPopupDone", "1");
    document.getElementById("popupModal").style.display = "flex";
}

function closePopupModal() {
    document.getElementById("popupModal").style.display = "none";
}

window.addEventListener("popstate", function() {
    const serverModal = document.getElementById("serverModal");
    const notifModal = document.getElementById("notificationModal");
    const themeModal = document.getElementById("themeModal");

    if (serverModal && !serverModal.classList.contains("hidden")) {
        closeServerModal();
        window.history.pushState({ portalGuard: true }, "", window.location.href);
        return;
    }
    if (notifModal && !notifModal.classList.contains("hidden")) {
        toggleNotifications(false);
        window.history.pushState({ portalGuard: true }, "", window.location.href);
        return;
    }
    if (themeModal && !themeModal.classList.contains("hidden")) {
        toggleThemeModal(false);
        window.history.pushState({ portalGuard: true }, "", window.location.href);
        return;
    }
});

window.addEventListener("pageshow", function() {
    const splash = document.getElementById("splash-screen");
    const popup = document.getElementById("popupModal");
    if (sessionStorage.getItem("splashDone") === "1" && splash) {
        splash.style.display = "none";
    }
    if (sessionStorage.getItem("launchPopupDone") === "1" && popup) {
        popup.style.display = "none";
    }
    checkAuthStatus();
});

document.addEventListener("DOMContentLoaded", () => {
    renderWatermark();

    if (window.history && window.history.pushState) {
        window.history.pushState({ portalGuard: true }, "", window.location.href);
    }

    const savedTheme = localStorage.getItem("selectedTheme") || "theme-gold";
    applyTheme(savedTheme);

    checkAuthStatus();

    const splash = document.getElementById("splash-screen");
    if (sessionStorage.getItem("splashDone") === "1") {
        splash.style.display = "none";
        showLaunchPopupOnce();
    } else {
        setTimeout(() => {
            splash.classList.add("hide-splash");
            sessionStorage.setItem("splashDone", "1");
            setTimeout(() => {
                splash.style.display = "none";
                showLaunchPopupOnce();
            }, 400);
        }, 3000);
    }

    const savedTab = sessionStorage.getItem("currentActiveTab");
    if (savedTab && ["apps", "upcoming", "favorites"].includes(savedTab)) {
        const targetNav = document.getElementById(`nav-${savedTab}`);
        if (targetNav) {
            switchTab(savedTab, targetNav);
        }
    }
});

renderApps();

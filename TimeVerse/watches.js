// // const INSTAGRAM_USERNAME = "timeverse_official";
// // let productsData = [];
// // const watchesGrid = document.getElementById('watches-grid');
// // const paginationDiv = document.getElementById('pagination');
// // const watchesPerPage = 15;
// // let currentPage = 1;

// // document.addEventListener('DOMContentLoaded', function () {
// //     const themeBtn = document.getElementById('theme-toggle');
// //     if (!localStorage.getItem('theme')) {
// //         document.documentElement.setAttribute('data-theme', 'dark');
// //         themeBtn.innerText = "☀️";
// //         localStorage.setItem('theme', 'dark');
// //     } else if (localStorage.getItem('theme') === 'dark') {
// //         document.documentElement.setAttribute('data-theme', 'dark');
// //         themeBtn.innerText = "☀️";
// //     } else {
// //         document.documentElement.setAttribute('data-theme', 'light');
// //         themeBtn.innerText = "🌙";
// //     }

// //     themeBtn.onclick = function () {
// //         if (document.documentElement.getAttribute('data-theme') === 'dark') {
// //             document.documentElement.setAttribute('data-theme', 'light');
// //             themeBtn.innerText = "🌙";
// //             localStorage.setItem('theme', 'light');
// //         } else {
// //             document.documentElement.setAttribute('data-theme', 'dark');
// //             themeBtn.innerText = "☀️";
// //             localStorage.setItem('theme', 'dark');
// //         }
// //     };
// // });

// // function toggleMenu() {
// //     const nav = document.querySelector('header nav');
// //     nav.classList.toggle('active');
// // }

// // function renderWatchesPage(page) {
// //     watchesGrid.innerHTML = '';
// //     let start = (page - 1) * watchesPerPage;
// //     let end = start + watchesPerPage;
// //     let watches = productsData.slice(start, end);
// //     watches.forEach((product, idx) => {
// //         const card = document.createElement('div');
// //         card.className = 'product-card visible';
// //         card.innerHTML = `
// //       <img src="${product.image}" alt="${product.title}" onclick="zoomImage('${product.image}')">
// //       <h3>${product.title}</h3>
// //       <div class="price">&#8377;${product.price}</div>
// //       <p>${product.description}</p>
// //       <button class="enquire-btn" onclick="enquireProduct('${product.id}','${product.title}')">Enquire / Order</button>
// //     `;
// //         watchesGrid.appendChild(card);
// //     });
// //     renderPagination(page);
// // }

// // function renderPagination(page) {
// //     paginationDiv.innerHTML = '';
// //     const totalPages = Math.ceil(productsData.length / watchesPerPage);
// //     if (totalPages <= 1) return;

// //     for (let i = 1; i <= totalPages; i++) {
// //         const btn = document.createElement('button');
// //         btn.innerText = i;
// //         if (i === page) btn.classList.add('active');
// //         btn.onclick = () => {
// //             currentPage = i;
// //             renderWatchesPage(i);
// //             window.scrollTo({ top: 0, behavior: 'smooth' });
// //         };
// //         paginationDiv.appendChild(btn);
// //     }
// // }

// // // function enquireProduct(productId, productTitle) {
// // //     const msg = `Hi, I'm interested in ordering this watch (ID: ${productId}, "${productTitle}") from TimeVerse!`;
// // //     const modal = document.createElement('div');
// // //     modal.style.position = "fixed";
// // //     modal.style.inset = "0";
// // //     modal.style.background = "rgba(0,0,0,0.85)";
// // //     modal.style.display = "flex";
// // //     modal.style.alignItems = "center";
// // //     modal.style.justifyContent = "center";
// // //     modal.style.zIndex = 9999;
// // //     modal.innerHTML = `
// // //     <div style="background:#222;padding:2rem 2.5rem;border-radius:22px;max-width:94vw;box-shadow:0 8px 36px #ff5e1535;text-align:center;">
// // //       <h3 style="color:#fff">Send us this message on Instagram DM:</h3>
// // //       <textarea style="width:100%;margin:1rem 0 1.2rem 0;padding:1rem;border-radius:10px;font-size:1.07rem;" rows="3" readonly>${msg}</textarea>
// // //       <div>
// // //         <button onclick="navigator.clipboard.writeText('${msg.replace(/'/g, "\\'")}');this.innerText='Copied!';" style="margin-right:1.5rem;padding:0.45rem 1.5rem;border-radius:12px;background:#ff5e15;color:#fff;font-weight:bold;border:none;font-size:1rem;cursor:pointer;">Copy Message</button>
// // //         <a href="https://instagram.com/${INSTAGRAM_USERNAME}" target="_blank" style="padding:0.45rem 1.5rem;border-radius:12px;background:#dd2a7b;color:#fff;font-weight:bold;font-size:1rem;text-decoration:none;">Open Instagram</a>
// // //       </div>
// // //       <div style="margin-top:1.2rem;">
// // //         <button onclick="this.closest('div').parentNode.remove();" style="background:none;color:#fff;font-size:1.7rem;border:none;cursor:pointer;">Close</button>
// // //       </div>
// // //     </div>
// // //   `;
// // //     document.body.appendChild(modal);
// // // }

// // window.zoomImage = function (imgUrl) {
// //     const modal = document.createElement('div');
// //     modal.style.position = "fixed"; modal.style.inset = "0";
// //     modal.style.background = "rgba(0,0,0,0.86)";
// //     modal.style.display = "flex"; modal.style.alignItems = "center"; modal.style.justifyContent = "center";
// //     modal.style.zIndex = 9999;
// //     modal.innerHTML = `<img src="${imgUrl}" style="max-width:90vw;max-height:85vh;border-radius:18px;box-shadow:0 8px 36px #ff5e1535;">
// //     <span style="position:fixed;top:31px;right:40px;font-size:2.8rem;color:#fff;cursor:pointer;" onclick="this.parentNode.remove()">×</span>`;
// //     modal.onclick = e => { if (e.target === modal) modal.remove(); }
// //     document.body.appendChild(modal);
// // }

// // fetch('products.json')
// //     .then(response => response.json())
// //     .then(products => {
// //         productsData = products;
// //         renderWatchesPage(1);
// //     })
// //     .catch(() => {
// //         watchesGrid.innerHTML = "<p style='color:red'>Failed to load watches.</p>";
// //     });

// // function enquireProduct(productId, productTitle) {
// //     const msg = `Hi, I'm interested in ordering this watch (ID: ${productId}, "${productTitle}") from TimeVerse!`;
// //     const modal = document.createElement('div');
// //     modal.style.position = "fixed";
// //     modal.style.inset = "0";
// //     modal.style.background = "rgba(0,0,0,0.85)";
// //     modal.style.display = "flex";
// //     modal.style.alignItems = "center";
// //     modal.style.justifyContent = "center";
// //     modal.style.zIndex = 9999;
// //     modal.innerHTML = `
// //         <div style="background:#222;padding:2rem 2.5rem;border-radius:22px;max-width:94vw;box-shadow:0 8px 36px #ff5e1535;text-align:center;">
// //             <h3 style="color:#fff">Send us this message on Instagram DM:</h3>
// //             <textarea id="insta-msg" style="width:100%;margin:1rem 0 1.2rem 0;padding:1rem;border-radius:10px;font-size:1.07rem;" rows="3" readonly>${msg}</textarea>
// //             <div>
// //                 <button id="copy-btn" style="margin-right:1.5rem;padding:0.45rem 1.5rem;border-radius:12px;background:#ff5e15;color:#fff;font-weight:bold;border:none;font-size:1rem;cursor:pointer;">Copy Message</button>
// //                 <a href="https://instagram.com/timeverse_official" target="_blank" style="padding:0.45rem 1.5rem;border-radius:12px;background:#dd2a7b;color:#fff;font-weight:bold;font-size:1rem;text-decoration:none;">Open Instagram</a>
// //             </div>
// //             <div style="margin-top:1.2rem;">
// //                 <button id="close-btn" style="background:none;color:#fff;font-size:1.7rem;border:none;cursor:pointer;">Close</button>
// //             </div>
// //         </div>
// //     `;
// //     document.body.appendChild(modal);

// //     // Attach event listeners
// //     modal.querySelector("#copy-btn").onclick = function () {
// //         const text = modal.querySelector("#insta-msg").value;
// //         navigator.clipboard.writeText(text)
// //             .then(() => { this.innerText = "Copied!"; })
// //             .catch(() => { this.innerText = "Failed!"; });
// //     };
// //     modal.querySelector("#close-btn").onclick = function () {
// //         modal.remove();
// //     };
// // }

// // watches.js - handles loading, searching, and paginating all watches

// const WATCHES_PER_PAGE = 8;
// let allWatches = [];
// let filteredWatches = [];
// let currentPage = 1;

// // DOM elements
// const watchesGrid = document.getElementById('watches-grid');
// const pagination = document.getElementById('pagination');

// // ---------- FETCH & INITIAL RENDER ----------
// fetch('products.json')
//     .then(response => response.json())
//     .then(products => {
//         allWatches = products;
//         filteredWatches = allWatches;
//         renderWatches();
//         renderPagination();
//     })
//     .catch(() => {
//         watchesGrid.innerHTML = "<p style='color:red;'>Failed to load watches.</p>";
//     });

// // ---------- SEARCH BAR (Responsive, Live) ----------
// function createSearchBar() {
//     const container = document.createElement('div');
//     container.className = 'searchbar-container';
//     container.style.marginBottom = "1.7rem";
//     container.innerHTML = `
//     <input type="text" id="allwatch-search" class="responsive-search" placeholder="Search watches by name or description...">
//     <button type="button" class="search-btn" aria-label="Search">
//       <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//         <circle cx="11" cy="11" r="8"/>
//         <line x1="21" y1="21" x2="16.65" y2="16.65"/>
//       </svg>
//     </button>
//   `;
//     watchesGrid.parentNode.insertBefore(container, watchesGrid);

//     const searchInput = container.querySelector('input');
//     searchInput.addEventListener('input', function () {
//         const query = this.value.trim().toLowerCase();
//         filteredWatches = allWatches.filter(watch =>
//             watch.title.toLowerCase().includes(query) ||
//             (watch.description && watch.description.toLowerCase().includes(query))
//         );
//         currentPage = 1;
//         renderWatches();
//         renderPagination();
//     });
// }
// createSearchBar();

// // ---------- RENDER WATCHES ----------
// function renderWatches() {
//     watchesGrid.innerHTML = '';
//     if (filteredWatches.length === 0) {
//         watchesGrid.innerHTML = "<p style='color:var(--text-muted)'>No watches found.</p>";
//         return;
//     }
//     const start = (currentPage - 1) * WATCHES_PER_PAGE;
//     const end = start + WATCHES_PER_PAGE;
//     const watchesToShow = filteredWatches.slice(start, end);

//     watchesToShow.forEach((watch, idx) => {
//         const card = document.createElement('div');
//         card.className = 'product-card';
//         setTimeout(() => card.classList.add('visible'), 70 + idx * 55);
//         card.innerHTML = `
//       <img src="${watch.image}" alt="${watch.title}" onclick="zoomImage('${watch.image}')">
//       <h3>${watch.title}</h3>
//       <div class="price">&#8377;${watch.price}</div>
//       <p>${watch.description}</p>
//       <button class="enquire-btn" onclick="enquireProduct('${watch.id}','${watch.title}')">Enquire / Order</button>
//     `;
//         watchesGrid.appendChild(card);
//     });
// }

// // ---------- PAGINATION ----------
// function renderPagination() {
//     pagination.innerHTML = '';
//     const totalPages = Math.ceil(filteredWatches.length / WATCHES_PER_PAGE);
//     if (totalPages <= 1) return;
//     for (let i = 1; i <= totalPages; i++) {
//         const btn = document.createElement('button');
//         btn.textContent = i;
//         if (i === currentPage) btn.classList.add('active');
//         btn.onclick = function () {
//             currentPage = i;
//             renderWatches();
//             renderPagination();
//             window.scrollTo({ top: watchesGrid.parentNode.offsetTop - 50, behavior: 'smooth' });
//         };
//         pagination.appendChild(btn);
//     }
// }

// // ---------- ENQUIRE & ZOOM MODALS (reuse from main.js) ----------
// window.enquireProduct = function (productId, productTitle) {
//     const INSTAGRAM_USERNAME = "timeverse_official";
//     const msg = `Hi, I'm interested in ordering this watch (ID: ${productId}, "${productTitle}") from TimeVerse!`;
//     const modal = document.createElement('div');
//     modal.style.position = "fixed";
//     modal.style.inset = "0";
//     modal.style.background = "rgba(0,0,0,0.85)";
//     modal.style.display = "flex";
//     modal.style.alignItems = "center";
//     modal.style.justifyContent = "center";
//     modal.style.zIndex = 9999;
//     modal.innerHTML = `
//     <div style="background:#222;padding:2rem 2.5rem;border-radius:22px;max-width:94vw;box-shadow:0 8px 36px #ff5e1535;text-align:center;">
//       <h3 style="color:#fff">Send us this message on Instagram DM:</h3>
//       <textarea id="insta-msg" style="width:100%;margin:1rem 0 1.2rem 0;padding:1rem;border-radius:10px;font-size:1.07rem;" rows="3" readonly>${msg}</textarea>
//       <div>
//         <button id="copy-btn" style="margin-right:1.5rem;padding:0.45rem 1.5rem;border-radius:12px;background:#ff5e15;color:#fff;font-weight:bold;border:none;font-size:1rem;cursor:pointer;">Copy Message</button>
//         <a href="https://instagram.com/${INSTAGRAM_USERNAME}" target="_blank" style="padding:0.45rem 1.5rem;border-radius:12px;background:#dd2a7b;color:#fff;font-weight:bold;font-size:1rem;text-decoration:none;">Open Instagram</a>
//       </div>
//       <div style="margin-top:1.2rem;">
//         <button id="close-btn" style="background:none;color:#fff;font-size:1.7rem;border:none;cursor:pointer;">Close</button>
//       </div>
//     </div>
//   `;
//     document.body.appendChild(modal);

//     modal.querySelector("#copy-btn").onclick = function () {
//         const text = modal.querySelector("#insta-msg").value;
//         navigator.clipboard.writeText(text)
//             .then(() => { this.innerText = "Copied!"; })
//             .catch(() => { this.innerText = "Failed!"; });
//     };
//     modal.querySelector("#close-btn").onclick = function () {
//         modal.remove();
//     };
// };

// window.zoomImage = function (imgUrl) {
//     const modal = document.createElement('div');
//     modal.style.position = "fixed"; modal.style.inset = "0";
//     modal.style.background = "rgba(0,0,0,0.86)";
//     modal.style.display = "flex"; modal.style.alignItems = "center"; modal.style.justifyContent = "center";
//     modal.style.zIndex = 9999;
//     modal.innerHTML = `<img src="${imgUrl}" style="max-width:90vw;max-height:85vh;border-radius:18px;box-shadow:0 8px 36px #ff5e1535;">
//     <span style="position:fixed;top:31px;right:40px;font-size:2.8rem;color:#fff;cursor:pointer;" onclick="this.parentNode.remove()">×</span>`;
//     modal.onclick = e => { if (e.target === modal) modal.remove(); }
//     document.body.appendChild(modal);
// };

const WATCHES_PER_PAGE = 8;
let allWatches = [];
let filteredWatches = [];
let currentPage = 1;

// DOM elements
const watchesGrid = document.getElementById('watches-grid');
const pagination = document.getElementById('pagination');

// Fetch watches
fetch('products.json')
    .then(response => response.json())
    .then(products => {
        allWatches = products;
        filteredWatches = allWatches;
        renderWatches();
        renderPagination();
    })
    .catch(() => {
        watchesGrid.innerHTML = "<p style='color:red;'>Failed to load watches.</p>";
    });

function renderWatches() {
    watchesGrid.innerHTML = '';
    if (filteredWatches.length === 0) {
        watchesGrid.innerHTML = "<p style='color:var(--text-muted)'>No watches found.</p>";
        return;
    }
    const start = (currentPage - 1) * WATCHES_PER_PAGE;
    const end = start + WATCHES_PER_PAGE;
    const watchesToShow = filteredWatches.slice(start, end);

    watchesToShow.forEach((watch, idx) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        setTimeout(() => card.classList.add('visible'), 70 + idx * 55);
        card.innerHTML = `
      ${product.discount ? `<div class="discount-badge">${product.discount} OFF</div>` : ''}
       ${product.limited ? `<div class="limited-badge">LIMITED EDITION</div>` : ''}
      <img src="${watch.image}" alt="${watch.title}" onclick="zoomImage('${watch.image}')">
      <h3>${watch.title}</h3>
      <div class="price">&#8377;${watch.price}</div>
      <p>${watch.description}</p>
      <button class="enquire-btn" onclick="enquireProduct('${watch.id}','${watch.title}')">Enquire / Order</button>
    `;
        watchesGrid.appendChild(card);
    });
}

function renderPagination() {
    pagination.innerHTML = '';
    const totalPages = Math.ceil(filteredWatches.length / WATCHES_PER_PAGE);
    if (totalPages <= 1) return;
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        if (i === currentPage) btn.classList.add('active');
        btn.onclick = function () {
            currentPage = i;
            renderWatches();
            renderPagination();
            window.scrollTo({ top: watchesGrid.parentNode.offsetTop - 50, behavior: 'smooth' });
        };
        pagination.appendChild(btn);
    }
}

// ----- Keep your existing enquireProduct and zoomImage functions -----
window.enquireProduct = function (productId, productTitle) {
    const INSTAGRAM_USERNAME = "timeverse_official";
    const msg = `Hi, I'm interested in ordering this watch (ID: ${productId}, "${productTitle}") from TimeVerse!`;
    const modal = document.createElement('div');
    modal.style.position = "fixed";
    modal.style.inset = "0";
    modal.style.background = "rgba(0,0,0,0.85)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = 9999;
    modal.innerHTML = `
    <div style="background:#222;padding:2rem 2.5rem;border-radius:22px;max-width:94vw;box-shadow:0 8px 36px #ff5e1535;text-align:center;">
      <h3 style="color:#fff">Send us this message on Instagram DM:</h3>
      <textarea id="insta-msg" style="width:100%;margin:1rem 0 1.2rem 0;padding:1rem;border-radius:10px;font-size:1.07rem;" rows="3" readonly>${msg}</textarea>
      <div>
        <button id="copy-btn" style="margin-right:1.5rem;padding:0.45rem 1.5rem;border-radius:12px;background:#ff5e15;color:#fff;font-weight:bold;border:none;font-size:1rem;cursor:pointer;">Copy Message</button>
        <a href="https://instagram.com/${INSTAGRAM_USERNAME}" target="_blank" style="padding:0.45rem 1.5rem;border-radius:12px;background:#dd2a7b;color:#fff;font-weight:bold;font-size:1rem;text-decoration:none;">Open Instagram</a>
      </div>
      <div style="margin-top:1.2rem;">
        <button id="close-btn" style="background:none;color:#fff;font-size:1.7rem;border:none;cursor:pointer;">Close</button>
      </div>
    </div>
  `;
    document.body.appendChild(modal);

    modal.querySelector("#copy-btn").onclick = function () {
        const text = modal.querySelector("#insta-msg").value;
        navigator.clipboard.writeText(text)
            .then(() => { this.innerText = "Copied!"; })
            .catch(() => { this.innerText = "Failed!"; });
    };
    modal.querySelector("#close-btn").onclick = function () {
        modal.remove();
    };
};

window.zoomImage = function (imgUrl) {
    const modal = document.createElement('div');
    modal.style.position = "fixed"; modal.style.inset = "0";
    modal.style.background = "rgba(0,0,0,0.86)";
    modal.style.display = "flex"; modal.style.alignItems = "center"; modal.style.justifyContent = "center";
    modal.style.zIndex = 9999;
    modal.innerHTML = `<img src="${imgUrl}" style="max-width:90vw;max-height:85vh;border-radius:18px;box-shadow:0 8px 36px #ff5e1535;">
    <span style="position:fixed;top:31px;right:40px;font-size:2.8rem;color:#fff;cursor:pointer;" onclick="this.parentNode.remove()">×</span>`;
    modal.onclick = e => { if (e.target === modal) modal.remove(); }
    document.body.appendChild(modal);
};
document.addEventListener('DOMContentLoaded', function () {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return;
    if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeBtn.innerText = "☀️";
        localStorage.setItem('theme', 'dark');
    } else if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeBtn.innerText = "☀️";
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeBtn.innerText = "🌙";
    }
    themeBtn.onclick = function () {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeBtn.innerText = "🌙";
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeBtn.innerText = "☀️";
            localStorage.setItem('theme', 'dark');
        }
    };
});

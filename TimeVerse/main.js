// const INSTAGRAM_USERNAME = "timeverse_official";
// const featuredGrid = document.getElementById('featured-grid');

// document.addEventListener('DOMContentLoaded', function () {
//     const themeBtn = document.getElementById('theme-toggle');
//     if (!localStorage.getItem('theme')) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         themeBtn.innerText = "☀️";
//         localStorage.setItem('theme', 'dark');
//     } else if (localStorage.getItem('theme') === 'dark') {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         themeBtn.innerText = "☀️";
//     } else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         themeBtn.innerText = "🌙";
//     }
//     themeBtn.onclick = function () {
//         if (document.documentElement.getAttribute('data-theme') === 'dark') {
//             document.documentElement.setAttribute('data-theme', 'light');
//             themeBtn.innerText = "🌙";
//             localStorage.setItem('theme', 'light');
//         } else {
//             document.documentElement.setAttribute('data-theme', 'dark');
//             themeBtn.innerText = "☀️";
//             localStorage.setItem('theme', 'dark');
//         }
//     };
// });

// function toggleMenu() {
//     const nav = document.querySelector('header nav');
//     nav.classList.toggle('active');
// }

// function fadeInOnScroll() {
//     document.querySelectorAll('.fade-in').forEach(el => {
//         const pos = el.getBoundingClientRect();
//         if (pos.top < window.innerHeight - 60) {
//             el.classList.add('visible');
//         }
//     });
// }
// window.addEventListener('scroll', fadeInOnScroll);
// window.addEventListener('DOMContentLoaded', fadeInOnScroll);





// function enquireProduct(productId, productTitle) {
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
//         <div style="background:#222;padding:2rem 2.5rem;border-radius:22px;max-width:94vw;box-shadow:0 8px 36px #ff5e1535;text-align:center;">
//             <h3 style="color:#fff">Send us this message on Instagram DM:</h3>
//             <textarea id="insta-msg" style="width:100%;margin:1rem 0 1.2rem 0;padding:1rem;border-radius:10px;font-size:1.07rem;" rows="3" readonly>${msg}</textarea>
//             <div>
//                 <button id="copy-btn" style="margin-right:1.5rem;padding:0.45rem 1.5rem;border-radius:12px;background:#ff5e15;color:#fff;font-weight:bold;border:none;font-size:1rem;cursor:pointer;">Copy Message</button>
//                 <a href="https://instagram.com/${INSTAGRAM_USERNAME}" target="_blank" style="padding:0.45rem 1.5rem;border-radius:12px;background:#dd2a7b;color:#fff;font-weight:bold;font-size:1rem;text-decoration:none;">Open Instagram</a>
//             </div>
//             <div style="margin-top:1.2rem;">
//                 <button id="close-btn" style="background:none;color:#fff;font-size:1.7rem;border:none;cursor:pointer;">Close</button>
//             </div>
//         </div>
//     `;
//     document.body.appendChild(modal);

//     // Attach event listeners for copy and close
//     modal.querySelector("#copy-btn").onclick = function () {
//         const text = modal.querySelector("#insta-msg").value;
//         navigator.clipboard.writeText(text)
//             .then(() => { this.innerText = "Copied!"; })
//             .catch(() => { this.innerText = "Failed!"; });
//     };
//     modal.querySelector("#close-btn").onclick = function () {
//         modal.remove();
//     };
// }

// window.enquireProduct = enquireProduct;

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
// }

// fetch('products.json')
//     .then(response => response.json())
//     .then(products => {
//         showFeatured(products);
//     })
//     .catch(() => {
//         featuredGrid.innerHTML = "<p style='color:red'>Failed to load featured watches.</p>";
//     });








// document.addEventListener('DOMContentLoaded', function () {
//     const themeBtn = document.getElementById('theme-toggle');
//     if (!localStorage.getItem('theme')) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         themeBtn.innerText = "☀️";
//         localStorage.setItem('theme', 'dark');
//     } else if (localStorage.getItem('theme') === 'dark') {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         themeBtn.innerText = "☀️";
//     } else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         themeBtn.innerText = "🌙";
//     }
//     themeBtn.onclick = function () {
//         if (document.documentElement.getAttribute('data-theme') === 'dark') {
//             document.documentElement.setAttribute('data-theme', 'light');
//             themeBtn.innerText = "🌙";
//             localStorage.setItem('theme', 'light');
//         } else {
//             document.documentElement.setAttribute('data-theme', 'dark');
//             themeBtn.innerText = "☀️";
//             localStorage.setItem('theme', 'dark');
//         }
//     };

//     // Make logo always go home (redundant if <a>, but safe for SPA)
//     const logoLink = document.getElementById('home-logo');
//     if (logoLink) {
//         logoLink.onclick = function (e) {
//             window.location.href = "index.html";
//         };
//     }
// });

// function toggleMenu() {
//     const nav = document.querySelector('header nav');
//     nav.classList.toggle('active');
// }

// function fadeInOnScroll() {
//     document.querySelectorAll('.fade-in').forEach(el => {
//         const pos = el.getBoundingClientRect();
//         if (pos.top < window.innerHeight - 60) {
//             el.classList.add('visible');
//         }
//     });
// }
// window.addEventListener('scroll', fadeInOnScroll);
// window.addEventListener('DOMContentLoaded', fadeInOnScroll);

// function showFeatured(products) {
//     featuredGrid.innerHTML = '';
//     // Show only watches marked as featured, and limit to 6
//     let featuredProducts = products.filter(p => p.featured).slice(0, 6);
//     featuredProducts.forEach((product, idx) => {
//         const card = document.createElement('div');
//         card.className = 'product-card';
//         setTimeout(() => card.classList.add('visible'), 80 + idx * 60);
//         card.innerHTML = `
//             <img src="${product.image}" alt="${product.title}" onclick="zoomImage('${product.image}')">
//             <h3>${product.title}</h3>
//             <div class="price">&#8377;${product.price}</div>
//             <p>${product.description}</p>
//             <button class="enquire-btn" onclick="enquireProduct('${product.id}','${product.title}')">Enquire / Order</button>
//         `;
//         featuredGrid.appendChild(card);
//     });
// }

// function enquireProduct(productId, productTitle) {
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
//       <textarea style="width:100%;margin:1rem 0 1.2rem 0;padding:1rem;border-radius:10px;font-size:1.07rem;" rows="3" readonly>${msg}</textarea>
//       <div>
//         <button onclick="navigator.clipboard.writeText('${msg.replace(/'/g, "\\'")}');this.innerText='Copied!';" style="margin-right:1.5rem;padding:0.45rem 1.5rem;border-radius:12px;background:#ff5e15;color:#fff;font-weight:bold;border:none;font-size:1rem;cursor:pointer;">Copy Message</button>
//         <a href="https://instagram.com/${INSTAGRAM_USERNAME}" target="_blank" style="padding:0.45rem 1.5rem;border-radius:12px;background:#dd2a7b;color:#fff;font-weight:bold;font-size:1rem;text-decoration:none;">Open Instagram</a>
//       </div>
//       <div style="margin-top:1.2rem;">
//         <button onclick="this.closest('div').parentNode.remove();" style="background:none;color:#fff;font-size:1.7rem;border:none;cursor:pointer;">Close</button>
//       </div>
//     </div>
//   `;
//     document.body.appendChild(modal);
// }

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
// }

// // --- SEARCH BAR LIVE FILTER (for featured products on home) ---
// let allFeaturedProducts = [];
// fetch('products.json')
//     .then(response => response.json())
//     .then(products => {
//         allFeaturedProducts = products;
//         showFeatured(allFeaturedProducts);
//     })
//     .catch(() => {
//         featuredGrid.innerHTML = "<p style='color:red'>Failed to load featured watches.</p>";
//     });

// const searchInput = document.getElementById('responsive-search');
// if (searchInput) {
//     searchInput.addEventListener('input', function () {
//         const query = this.value.trim().toLowerCase();
//         const filtered = allFeaturedProducts.filter(product =>
//             product.title.toLowerCase().includes(query) ||
//             (product.description && product.description.toLowerCase().includes(query))
//         );
//         showFeatured(filtered);
//     });
// }

// // ---- Review form code remains unchanged ----
// // ... your review JS as provided ...








// // FOR THE COPY MESSAGE SYSTEM

// function enquireProduct(productId, productTitle) {
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
//         <div style="background:#222;padding:2rem 2.5rem;border-radius:22px;max-width:94vw;box-shadow:0 8px 36px #ff5e1535;text-align:center;">
//             <h3 style="color:#fff">Send us this message on Instagram DM:</h3>
//             <textarea id="insta-msg" style="width:100%;margin:1rem 0 1.2rem 0;padding:1rem;border-radius:10px;font-size:1.07rem;" rows="3" readonly>${msg}</textarea>
//             <div>
//                 <button id="copy-btn" style="margin-right:1.5rem;padding:0.45rem 1.5rem;border-radius:12px;background:#ff5e15;color:#fff;font-weight:bold;border:none;font-size:1rem;cursor:pointer;">Copy Message</button>
//                 <a href="https://instagram.com/${INSTAGRAM_USERNAME}" target="_blank" style="padding:0.45rem 1.5rem;border-radius:12px;background:#dd2a7b;color:#fff;font-weight:bold;font-size:1rem;text-decoration:none;">Open Instagram</a>
//             </div>
//             <div style="margin-top:1.2rem;">
//                 <button id="close-btn" style="background:none;color:#fff;font-size:1.7rem;border:none;cursor:pointer;">Close</button>
//             </div>
//         </div>
//     `;
//     document.body.appendChild(modal);

//     // Attach event listeners for copy and close
//     modal.querySelector("#copy-btn").onclick = function () {
//         const text = modal.querySelector("#insta-msg").value;
//         navigator.clipboard.writeText(text)
//             .then(() => { this.innerText = "Copied!"; })
//             .catch(() => { this.innerText = "Failed!"; });
//     };
//     modal.querySelector("#close-btn").onclick = function () {
//         modal.remove();
//     };
// }






const INSTAGRAM_USERNAME = "timeverse_official";
const featuredGrid = document.getElementById('featured-grid');
const searchInput = document.getElementById('responsive-search');

let allProducts = []; // Store all watches

// Theme toggle logic
document.addEventListener('DOMContentLoaded', function () {
    const themeBtn = document.getElementById('theme-toggle');
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

    // Make logo always go home (redundant if <a>, but safe for SPA)
    const logoLink = document.getElementById('home-logo');
    if (logoLink) {
        logoLink.onclick = function (e) {
            window.location.href = "index.html";
        };
    }
});

// Responsive nav menu
function toggleMenu() {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('active');
}

// Fade-in animation on scroll
function fadeInOnScroll() {
    document.querySelectorAll('.fade-in').forEach(el => {
        const pos = el.getBoundingClientRect();
        if (pos.top < window.innerHeight - 60) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('DOMContentLoaded', fadeInOnScroll);

// Show only the featured products (max 6) or any given product list
function showFeatured(products) {
    featuredGrid.innerHTML = '';
    products.forEach((product, idx) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        setTimeout(() => card.classList.add('visible'), 80 + idx * 60);
        card.innerHTML = `
    ${product.discount ? `<div class="discount-badge">${product.discount} OFF</div>` : ''}
    <img src="${product.image}" alt="${product.title}" onclick="zoomImage('${product.image}')">
    <h3>${product.title}</h3>
    <div class="price">&#8377;${product.price}</div>
    <p>${product.description}</p>
    <button class="enquire-btn" onclick="enquireProduct('${product.id}','${product.title}')">Enquire / Order</button>
`;
        featuredGrid.appendChild(card);
    });
}

// Helper for getting top 6 featured
function getFeatured(products) {
    return products.filter(p => p.featured).slice(0, 6);
}

// Fetch products only once on load
fetch('products.json')
    .then(response => response.json())
    .then(products => {
        allProducts = products;
        showFeatured(getFeatured(allProducts)); // Show only featured on landing
        setupSearch(); // Set up search after products loaded
    })
    .catch(() => {
        featuredGrid.innerHTML = "<p style='color:red'>Failed to load featured watches.</p>";
    });

// Search bar logic: search ALL products, display in featured grid
function setupSearch() {
    if (!searchInput) return;
    searchInput.addEventListener('input', function () {
        const query = this.value.trim().toLowerCase();
        if (!query) {
            // Show only featured watches if search is empty
            showFeatured(getFeatured(allProducts));
        } else {
            // Show ALL matching watches (not just featured)
            const filtered = allProducts.filter(product =>
                product.title.toLowerCase().includes(query) ||
                (product.description && product.description.toLowerCase().includes(query))
            );
            showFeatured(filtered);
        }
    });
}

// Enquire modal for Instagram DM
function enquireProduct(productId, productTitle) {
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

    // Attach event listeners for copy and close
    modal.querySelector("#copy-btn").onclick = function () {
        const text = modal.querySelector("#insta-msg").value;
        navigator.clipboard.writeText(text)
            .then(() => { this.innerText = "Copied!"; })
            .catch(() => { this.innerText = "Failed!"; });
    };
    modal.querySelector("#close-btn").onclick = function () {
        modal.remove();
    };
}

window.enquireProduct = enquireProduct;

// Zoom image modal
window.zoomImage = function (imgUrl) {
    const modal = document.createElement('div');
    modal.style.position = "fixed";
    modal.style.inset = "0";
    modal.style.background = "rgba(0,0,0,0.86)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = 9999;
    modal.innerHTML = `<img src="${imgUrl}" style="max-width:90vw;max-height:85vh;border-radius:18px;box-shadow:0 8px 36px #ff5e1535;">
    <span style="position:fixed;top:31px;right:40px;font-size:2.8rem;color:#fff;cursor:pointer;" onclick="this.parentNode.remove()">×</span>`;
    modal.onclick = e => { if (e.target === modal) modal.remove(); }
    document.body.appendChild(modal);
}


// --- Review Section Logic (Global, Backend) ---

const JSONBIN_URL = "https://api.jsonbin.io/v3/b/684fc8948a456b7966aee782";
let isAdmin = !!sessionStorage.getItem("tv_admin");

const reviewForm = document.getElementById('review-form');
const reviewsList = document.getElementById('reviews-list');
const adminLoginBtn = document.getElementById('admin-login-btn');

// ...your other code above...

async function getReviews() {
    try {
        const res = await fetch(JSONBIN_URL + "/latest");
        if (!res.ok) throw new Error("Could not fetch reviews");
        const data = await res.json();
        return Array.isArray(data.record) ? data.record : [];
    } catch {
        return [];
    }
}

async function saveReviews(reviews) {
    const res = await fetch(JSONBIN_URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "X-Master-Key": "$2a$10$D1mVuT82MByS5Z3ZI6X1LO/ckD09iO1Y9e2CFX1f.aPXQj8mNgMYy"
        },
        body: JSON.stringify(reviews)
    });
    if (!res.ok) {
        const err = await res.text();
        alert("Failed to update reviews. Status: " + res.status + "\n" + err);
    }
}

async function renderReviews() {
    const reviews = await getReviews();
    reviewsList.innerHTML = "";
    reviews.slice().reverse().forEach(review => {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
            <span class="reviewer">${review.name}</span>
            <span class="review-email">${review.email}</span>
            <span class="review-date">${new Date(review.date).toLocaleString()}</span>
            <div class="review-text">"${review.text.replace(/</g, "&lt;")}"</div>
            <button class="delete-btn" title="Delete Review" style="display:none;">🗑</button>
        `;
        const userEmail = sessionStorage.getItem("tv_email");
        if (isAdmin || (userEmail && review.email === userEmail)) {
            const delBtn = card.querySelector('.delete-btn');
            delBtn.style.display = "block";
            delBtn.onclick = async () => {
                if (confirm("Are you sure you want to delete this review?")) {
                    let all = await getReviews();
                    all = all.filter(r => r.id !== review.id);
                    await saveReviews(all);
                    renderReviews();
                }
            };
        }
        reviewsList.appendChild(card);
    });
}

if (reviewForm) {
    reviewForm.onsubmit = async function (e) {
        e.preventDefault();
        const name = document.getElementById('reviewer-name').value.trim();
        const email = document.getElementById('reviewer-email').value.trim().toLowerCase();
        const text = document.getElementById('review-text').value.trim();
        if (!name || !email || !text) return alert("Please fill all fields.");

        let reviews = await getReviews();
        reviews.push({
            id: Date.now() + Math.random().toString(36).slice(2), // Ensure unique ID!
            name,
            email,
            text,
            date: new Date().toISOString()
        });
        await saveReviews(reviews);
        sessionStorage.setItem("tv_email", email);
        renderReviews();
        reviewForm.reset();
    };
}

if (adminLoginBtn) {
    adminLoginBtn.style.display = "inline-block";
    adminLoginBtn.onclick = function () {
        const email = prompt("Enter admin email to manage all reviews:");
        if (email && email.toLowerCase() === "ekanshshweta07@gmail.com") {
            isAdmin = true;
            sessionStorage.setItem("tv_admin", "1");
            alert("Admin mode enabled. You can now delete any review.");
            renderReviews();
        } else {
            alert("Incorrect admin email.");
        }
    };
}

if (reviewsList) renderReviews();

// ...existing code above...

// Search bar logic: search ALL products, display in featured grid
function setupSearch() {
    if (!searchInput) return;
    searchInput.addEventListener('input', function () {
        const query = this.value.trim().toLowerCase();
        if (!query) {
            // Show only featured watches if search is empty
            showFeatured(getFeatured(allProducts));
        } else {
            // Show ALL matching watches (not just featured)
            const filtered = allProducts.filter(product =>
                product.title.toLowerCase().includes(query) ||
                (product.description && product.description.toLowerCase().includes(query))
            );
            if (filtered.length === 0) {
                featuredGrid.innerHTML = `
                    <div style="text-align:center; padding:2.5rem 1rem;">
                        <h3 style="color:#ff5e15;margin-bottom:1.2rem;">Sorry, your watch is not available</h3>
                        <div style="margin-bottom:1.3rem;">Send us a photo of your watch on Instagram to make it available!</div>
                        <a href="https://instagram.com/timeverse_official" target="_blank" 
                            style="display:inline-block;padding:0.8rem 2.1rem;background:#dd2a7b;color:#fff;border-radius:22px;font-weight:bold;font-size:1.07rem;text-decoration:none;box-shadow:0 2px 12px #f5852922;transition:background 0.3s,transform 0.2s;">
                            Open Instagram
                        </a>
                    </div>
                `;
            } else {
                showFeatured(filtered);
            }
        }
    });
}

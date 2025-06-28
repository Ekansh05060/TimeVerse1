const INSTAGRAM_USERNAME = "timeverse_official";
const featuredGrid = document.getElementById('featured-grid');

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
});

function toggleMenu() {
  const nav = document.querySelector('header nav');
  nav.classList.toggle('active');
}

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

function showFeatured(products) {
  featuredGrid.innerHTML = '';
  let featuredProducts = products.slice(0, 6);
  featuredProducts.forEach((product, idx) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    setTimeout(() => card.classList.add('visible'), 80 + idx * 60);
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" onclick="zoomImage('${product.image}')">
      <h3>${product.title}</h3>
      <div class="price">&#8377;${product.price}</div>
      <p>${product.description}</p>
      <button class="enquire-btn" onclick="enquireProduct('${product.id}','${product.title}')">Enquire / Order</button>
    `;
    featuredGrid.appendChild(card);
  });
}

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
      <textarea style="width:100%;margin:1rem 0 1.2rem 0;padding:1rem;border-radius:10px;font-size:1.07rem;" rows="3" readonly>${msg}</textarea>
      <div>
        <button onclick="navigator.clipboard.writeText('${msg.replace(/'/g, "\\'")}');this.innerText='Copied!';" style="margin-right:1.5rem;padding:0.45rem 1.5rem;border-radius:12px;background:#ff5e15;color:#fff;font-weight:bold;border:none;font-size:1rem;cursor:pointer;">Copy Message</button>
        <a href="https://instagram.com/${INSTAGRAM_USERNAME}" target="_blank" style="padding:0.45rem 1.5rem;border-radius:12px;background:#dd2a7b;color:#fff;font-weight:bold;font-size:1rem;text-decoration:none;">Open Instagram</a>
      </div>
      <div style="margin-top:1.2rem;">
        <button onclick="this.closest('div').parentNode.remove();" style="background:none;color:#fff;font-size:1.7rem;border:none;cursor:pointer;">Close</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

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
}

fetch('products.json')
  .then(response => response.json())
  .then(products => {
    showFeatured(products);
  })
  .catch(() => {
    featuredGrid.innerHTML = "<p style='color:red'>Failed to load featured watches.</p>";
  });




  
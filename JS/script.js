// ===== MOBILE MENU =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});





// Show More Button
document.addEventListener('DOMContentLoaded', function() {
    let isExpanded = false;
    const showMoreBtn = document.querySelector('.btn-show-more');
    const allCards = document.querySelectorAll('.package .product-card');
    
    // Hide items after first 4 initially
    allCards.forEach((card, index) => {
        if (index >= 4) card.style.display = 'none';
    });
    
    showMoreBtn?.addEventListener('click', function() {
        isExpanded = !isExpanded;
        allCards.forEach((card, index) => {
            card.style.display = (isExpanded || index < 4) ? 'block' : 'none';
        });
        showMoreBtn.textContent = isExpanded ? 'Show less' : 'Show more';
    });
});

// Search Function
function searchProduct() {
    const search = document.getElementById('searchInput').value.toLowerCase().trim();
    if (!search) return alert('Enter a product name');
    
    let found = null;
    document.querySelectorAll('.product-card').forEach(card => {
        const name = card.querySelector('h4').textContent.toLowerCase();
        if (name.includes(search)) {
            if (!found) found = card;
        }
    });
    
    if (found) {
        setTimeout(() => found.scrollIntoView({ behavior: 'smooth', block: 'center' }), 200);
    } else {
        alert('Product not found');
    }
}

// Enter key search
document.getElementById('searchInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchProduct();
});



// slide2
  const track = document.querySelector('.slidetrack');
  track.addEventListener('mouseenter', () => {
  track.style.animationPlayState = 'paused';
});

track.addEventListener('mouseleave', () => {
  track.style.animationPlayState = 'running';
});






// Show More Button
document.addEventListener('DOMContentLoaded', function() {
    let isExpanded = false;
    const showMoreBtn = document.querySelector('.btn-show-more');
    const allCards = document.querySelectorAll('.package .product-card');
    
    allCards.forEach((card, index) => {
        if (index >= 5) card.style.display = 'none';
    });
    
    showMoreBtn?.addEventListener('click', function() {
        isExpanded = !isExpanded;
        allCards.forEach((card, index) => {
            card.style.display = (isExpanded || index < 5) ? 'block' : 'none';
        });
        showMoreBtn.textContent = isExpanded ? 'Show less' : 'Show more';
    });
});

// Product Popup
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('.product-card')) {
            const card = e.target.closest('.product-card');
            const img = card.querySelector('img').src;
            const title = card.querySelector('h4').textContent;
            const price = card.querySelector('.price').textContent;
            const oldPrice = card.querySelector('.original-price')?.textContent || 'N/A';
            
            // Remove existing popup
            const existing = document.getElementById('popup-overlay');
            if (existing) existing.remove();
            
            const html = `
                <div id="popup-overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);display:flex;justify-content:center;align-items:center;z-index:1000;">
                    <div style="background:white;padding:30px;border-radius:10px;max-width:400px;text-align:center;position:relative;">
                        <button onclick="document.getElementById('popup-overlay').remove()" style="position:absolute;top:10px;right:10px;background:none;border:none;font-size:24px;cursor:pointer;">×</button>
                        <img src="${img}" style="max-width:250px;max-height:250px;margin-bottom:15px;">
                        <h3>${title}</h3>
                        <p style="font-size:14px;color:#666;margin:10px 0;">High quality product with best features</p>
                        <div style="margin:15px 0;">
                            <span style="font-size:24px;font-weight:bold;color:#2e3cb8;">${price}</span>
                            <span style="text-decoration:line-through;color:#999;margin-left:10px;">${oldPrice}</span>
                        </div>
                        <button style="background:#2e3cb8;color:white;padding:10px 30px;border:none;border-radius:5px;cursor:pointer;font-size:16px;">Add to Cart</button>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', html);
            
            // Close on overlay click
            document.getElementById('popup-overlay').addEventListener('click', function(e) {
                if (e.target.id === 'popup-overlay') this.remove();
            });
        }
    });
});

// Search Function
function searchProduct() {
    const search = document.getElementById('searchInput').value.toLowerCase().trim();
    if (!search) return alert('Enter a product name');
    
    let found = null;
    document.querySelectorAll('.product-card').forEach(card => {
        const name = card.querySelector('h4').textContent.toLowerCase();
        if (name.includes(search)) {
            if (!found) found = card;
        }
    });
    
    if (found) {
        setTimeout(() => found.scrollIntoView({ behavior: 'smooth', block: 'center' }), 200);
    } else {
        alert('Product not found');
    }
}

// Enter key search
document.getElementById('searchInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchProduct();
});

















//search

function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const grid = document.getElementById('productsGrid');
    
    let filtered = query === '' 
        ? allProducts 
        : allProducts.filter(p => p.name.toLowerCase().includes(query));

    if (filtered.length === 0) {
        grid.innerHTML = '<div class="no-products">No products found</div>';
        return;
    }

    displayFilteredProducts(filtered);
}

function displayFilteredProducts(filtered) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = filtered.map(product => `
        <div class="product-item">
            <img src="${product.img}" alt="${product.name}">
            <h4>${product.name}</h4>
            <div style="color: #ff6b35; font-weight: bold; margin: 10px 0;">$${product.price}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})"><i class="fas fa-cart-plus"></i> Add</button>
        </div>
    `).join('');
}

// profuct
        const allProducts = [
            { id: 1, name: "Smartphone", category: "electronics", price: 199, img: "../Image/pngwing.com (27).png" },
            { id: 2, name: "DSLR Camera", category: "electronics", price: 699, img: "../Image/pngwing.com (19).png" },
            { id: 3, name: "Tablet", category: "electronics", price: 399, img: "../Image/pngwing.com (15).png" },
            { id: 4, name: "Gaming Laptop", category: "computers", price: 999, img: "../Image/pngwing.com (16).png" },
            { id: 5, name: "Desktop PC", category: "computers", price: 1200, img: "../Image/pngwing.com (20).png" },
            { id: 6, name: "4K Monitor", category: "computers", price: 299, img: "../Image/pngwing.com (17).png" },
            { id: 7, name: "Wireless Mouse", category: "accessories", price: 25, img: "../Image/pngwing.com (13).png" },
            { id: 8, name: "Wireless Headphones", category: "accessories", price: 149, img: "../Image/pngwing.com (12).png" },
            { id: 9, name: "USB-C Cable", category: "accessories", price: 15, img: "../Image/pngwing.com (11).png" },
            { id: 10, name: "Gaming Chair", category: "gaming", price: 299, img: "../Image/pngwing.com (26).png" },
            { id: 11, name: "Mechanical Keyboard", category: "gaming", price: 89, img: "../Image/pngwing.com (25).png" },
            { id: 12, name: "Gaming Mouse Pad", category: "gaming", price: 35, img: "../Image/pngwing.com (4).png" },
        ];

        let cart = [];
        let currentFilter = 'all';

        function loadCart() {
            const saved = localStorage.getItem('cart');
            if (saved) cart = JSON.parse(saved);
            updateCartBadge();
        }

        function saveCart() {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartBadge();
        }

        function addToCart(id) {
            const product = allProducts.find(p => p.id === id);
            const item = cart.find(p => p.id === id);
            if (item) item.quantity++;
            else cart.push({...product, quantity: 1});
            saveCart();
        }

        function updateCartBadge() {
            const total = cart.reduce((sum, item) => sum + item.quantity, 0);
            document.getElementById('cartBadge').textContent = total;
        }

        function openCart() {
            document.getElementById('cartModal').classList.add('show');
            displayCart();
        }

        function closeCart() {
            document.getElementById('cartModal').classList.remove('show');
        }

        function displayCart() {
            const container = document.getElementById('cartItemsContainer');
            const summary = document.getElementById('cartSummary');

            if (cart.length === 0) {
                container.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-cart"></i><p>Cart is empty</p></div>';
                summary.innerHTML = '';
                return;
            }

            container.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price}</div>
                    </div>
                    <div>
                        <button class="quantity-btn" onclick="updateQty(${item.id}, -1)">−</button>
                        <span style="margin: 0 8px;">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQty(${item.id}, 1)">+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            `).join('');

            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const tax = subtotal * 0.1;
            const total = subtotal + tax;

            summary.innerHTML = `
                <div class="summary-row"><span>Subtotal:</span><span>$${subtotal.toFixed(2)}</span></div>
                <div class="summary-row"><span>Tax:</span><span>$${tax.toFixed(2)}</span></div>
                <div class="summary-row" style="border-top: 1px solid #ddd; padding-top: 8px; font-weight: bold;"><span>Total:</span><span>$${total.toFixed(2)}</span></div>
            `;
        }

        function updateQty(id, change) {
            const item = cart.find(p => p.id === id);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) removeFromCart(id);
                else { saveCart(); displayCart(); }
            }
        }

        function removeFromCart(id) {
            cart = cart.filter(item => item.id !== id);
            saveCart();
            displayCart();
        }

        function checkout() {
            alert('Thank you! Total: $' + cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2));
            cart = [];
            saveCart();
            closeCart();
        }

        function filterProducts(category) {
            currentFilter = category;
            document.querySelectorAll('.category-item').forEach(el => el.classList.remove('active'));
            event.target.closest('.category-item').classList.add('active');
            displayProducts();
        }

        function displayProducts() {
            const grid = document.getElementById('productsGrid');
            let filtered = currentFilter === 'all' ? allProducts : allProducts.filter(p => p.category === currentFilter);

            grid.innerHTML = filtered.map(product => `
                <div class="product-item">
                    <img src="${product.img}" alt="${product.name}">
                    <h4>${product.name}</h4>
                    <div style="color: #ff6b35; font-weight: bold; margin: 10px 0;">$${product.price}</div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})"><i class="fas fa-cart-plus"></i> Add</button>
                </div>
            `).join('');
        }

        window.addEventListener('DOMContentLoaded', () => {
            loadCart();
            displayProducts();
        });

        window.onclick = function(e) {
            const modal = document.getElementById('cartModal');
            if (e.target == modal) closeCart();
        }
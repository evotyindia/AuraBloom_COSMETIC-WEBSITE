document.addEventListener('DOMContentLoaded', () => {

    // ── Navbar: hamburger toggle & scroll shadow ──
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const siteNav = document.getElementById('siteNav');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
        // Close menu when a link is clicked (mobile)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navLinks.classList.remove('open'));
        });
    }
    if (siteNav) {
        window.addEventListener('scroll', () => {
            siteNav.classList.toggle('scrolled', window.scrollY > 10);
        }, { passive: true });
    }

    // 1. Dynamic Shopping Cart Logic  ── with localStorage persistence ──────────
    const cartCounterText = document.getElementById('cart-counter');
    const CART_KEY = 'aurabloom_cart_v2'; // { productId: qty }

    // ── Storage helpers ────────────────────────────────────────────────────────
    function loadCart() {
        try {
            return JSON.parse(localStorage.getItem(CART_KEY)) || {};
        } catch(e) { return {}; }
    }
    function saveCart(cart) {
        try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch(e) {}
    }

    // ── Badge ──────────────────────────────────────────────────────────────────
    /** Sum every visible qty-count span — single source of truth. */
    function recalcCartCount() {
        let total = 0;
        document.querySelectorAll('.cart-quantity-toggle .qty-count').forEach(span => {
            total += parseInt(span.textContent, 10) || 0;
        });
        return total;
    }
    /** Also add cart items that belong to pages NOT currently displayed (not rendered). */
    function totalFromStorage() {
        return Object.values(loadCart()).reduce((s, q) => s + q, 0);
    }

    function updateGlobalCartBadge() {
        // Sum page-visible spinners + items stored from OTHER pages
        const currentCart   = loadCart();
        const visibleIds    = new Set();
        document.querySelectorAll('.product-item[data-id]').forEach(el => {
            visibleIds.add(el.getAttribute('data-id'));
        });
        let total = recalcCartCount(); // what's rendered on THIS page
        Object.entries(currentCart).forEach(([id, qty]) => {
            if (!visibleIds.has(id)) total += qty; // add items from other pages
        });
        if (cartCounterText) {
            cartCounterText.textContent = total;
            cartCounterText.style.transform = 'scale(1.4)';
            setTimeout(() => { cartCounterText.style.transform = 'scale(1)'; }, 200);
        }
    }

    // ── Spinner builder (shared by click handler & restore) ────────────────────
    function buildSpinner(qty = 1) {
        const toggleUI = document.createElement('div');
        toggleUI.className = 'cart-quantity-toggle';
        toggleUI.style.cssText = [
            'display:flex', 'align-items:center', 'justify-content:space-between',
            'border:1px solid var(--primary-color)', 'border-radius:50px',
            'overflow:hidden', 'min-width:120px'
        ].join(';');
        toggleUI.innerHTML = `
            <button class="qty-btn minus" style="border:none;background:none;padding:0.5rem 1rem;color:var(--primary-color);cursor:pointer;">−</button>
            <span class="qty-count" style="font-weight:bold;padding:0.5rem 0;">${qty}</span>
            <button class="qty-btn plus" style="border:none;background:none;padding:0.5rem 1rem;color:var(--primary-color);cursor:pointer;">+</button>
        `;
        return toggleUI;
    }

    // ── Save the current page's spinner state back to localStorage ─────────────
    function persistPageCart() {
        const cart = loadCart();
        document.querySelectorAll('.product-item[data-id]').forEach(item => {
            const id       = item.getAttribute('data-id');
            const countSpan = item.querySelector('.cart-quantity-toggle .qty-count');
            if (countSpan) {
                cart[id] = parseInt(countSpan.textContent, 10) || 0;
            } else {
                delete cart[id]; // removed from cart on this page
            }
        });
        saveCart(cart);
    }

    // ── Restore saved state on page load ──────────────────────────────────────
    (function restoreCart() {
        const cart = loadCart();
        document.querySelectorAll('.product-item[data-id]').forEach(item => {
            const id  = item.getAttribute('data-id');
            const qty = cart[id];
            if (!qty || qty <= 0) return;

            const btn = item.querySelector('.add-to-cart-btn');
            if (!btn) return;

            const spinner = buildSpinner(qty);
            btn.parentElement.insertBefore(spinner, btn);
            btn.style.display = 'none';
        });
        updateGlobalCartBadge();
    })();

    // ── Delegated click handler ────────────────────────────────────────────────
    document.body.addEventListener('click', (e) => {

        // "Add to Cart" button
        if (e.target.classList.contains('add-to-cart-btn')) {
            e.preventDefault();
            const btn    = e.target;
            const parent = btn.parentElement;
            const spinner = buildSpinner(1);
            parent.insertBefore(spinner, btn);
            btn.style.display = 'none';
            persistPageCart();
            updateGlobalCartBadge();
        }

        // "+" button
        if (e.target.classList.contains('plus')) {
            e.preventDefault();
            const countSpan = e.target.closest('.cart-quantity-toggle').querySelector('.qty-count');
            countSpan.textContent = parseInt(countSpan.textContent, 10) + 1;
            persistPageCart();
            updateGlobalCartBadge();
        }

        // "−" button
        if (e.target.classList.contains('minus')) {
            e.preventDefault();
            const toggleUI  = e.target.closest('.cart-quantity-toggle');
            const countSpan = toggleUI.querySelector('.qty-count');
            const newVal    = parseInt(countSpan.textContent, 10) - 1;

            if (newVal <= 0) {
                const parent     = toggleUI.parentElement;
                const originalBtn = parent.querySelector('.add-to-cart-btn');
                toggleUI.remove();
                if (originalBtn) {
                    originalBtn.style.display = '';
                    originalBtn.textContent = 'Add to Cart';
                }
            } else {
                countSpan.textContent = newVal;
            }
            persistPageCart();
            updateGlobalCartBadge();
        }
    });

    // 2. Product Filtering and Sorting
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-item');
    const searchInput = document.getElementById('productSearch');
    const sortSelect = document.getElementById('sortSelect');
    const productsGrid = document.getElementById('productsGrid');

    if (productsGrid) {
        // Init products array for sorting
        let productsArray = Array.from(productItems);

        // Filter by Category
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // remove active class from all
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');
                filterProducts(filterValue, searchInput.value.toLowerCase());
            });
        });

        // Search Input
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const searchValue = e.target.value.toLowerCase();
                const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
                filterProducts(activeFilter, searchValue);
            });
        }

        // Sort Select
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                const sortType = e.target.value;
                sortProducts(sortType);
            });
        }

        function filterProducts(category, searchTerm) {
            productsArray.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                const itemName = item.querySelector('.product-card-title').textContent.toLowerCase();
                
                const matchesCategory = category === 'all' || itemCategory === category;
                const matchesSearch = itemName.includes(searchTerm);

                if (matchesCategory && matchesSearch) {
                    item.style.display = 'block';
                    item.classList.add('fade-in');
                } else {
                    item.style.display = 'none';
                    item.classList.remove('fade-in');
                }
            });
        }

        function sortProducts(sortType) {
            if (sortType === 'default') {
                productsArray.sort((a, b) => a.getAttribute('data-id') - b.getAttribute('data-id'));
            } else if (sortType === 'price-low') {
                productsArray.sort((a, b) => parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price')));
            } else if (sortType === 'price-high') {
                productsArray.sort((a, b) => parseFloat(b.getAttribute('data-price')) - parseFloat(a.getAttribute('data-price')));
            }

            // re-append to DOM
            productsGrid.innerHTML = '';
            productsArray.forEach(item => {
                productsGrid.appendChild(item);
            });
        }
    }

    // 3. Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const formAlert = document.getElementById('formAlert');

            if (name === '' || email === '' || message === '') {
                formAlert.innerHTML = '<div class="alert alert-danger">Please fill in all fields.</div>';
                return;
            }

            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formAlert.innerHTML = '<div class="alert alert-danger">Please enter a valid email address.</div>';
                return;
            }

            // Success
            formAlert.innerHTML = '<div class="alert alert-success">Thank you for Reaching out! Your message has been sent successfully.</div>';
            contactForm.reset();
            
            setTimeout(() => {
                formAlert.innerHTML = '';
            }, 5000);
        });
    }

    // 4. Scroll Animations (Fade-In)
    const fadeElements = document.querySelectorAll('.animate-on-scroll');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    fadeElements.forEach(el => {
        appearOnScroll.observe(el);
    });

    // 5. Newsletter Subscription Logic
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = newsletterForm.querySelector('button');
            const alertBox = document.getElementById('newsletterAlert');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
            
            setTimeout(() => {
                alertBox.innerHTML = '<div class="alert alert-success mt-3 small">Subscribed! Welcome to the AuraBloom family.</div>';
                btn.innerHTML = originalText;
                newsletterForm.reset();
                
                setTimeout(() => {
                    alertBox.innerHTML = '';
                }, 4000);
            }, 1000);
        });
    }

});

document.addEventListener('DOMContentLoaded', () => {

    // 1. Dynamic Shopping Cart Logic
    const cartCounterText = document.getElementById('cart-counter');
    let globalCartCount = 0;

    function updateGlobalCartBadge() {
        if(cartCounterText) {
            cartCounterText.textContent = globalCartCount;
            cartCounterText.style.transform = 'scale(1.5)';
            setTimeout(() => {
                cartCounterText.style.transform = 'scale(1)';
            }, 200);
        }
    }

    // Attach logic dynamically to all "Add to Cart" buttons
    // We use a delegated listener on the body to support elements that might load later
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            e.preventDefault();
            const btn = e.target;
            const parent = btn.parentElement;
            
            // First time adding
            globalCartCount++;
            updateGlobalCartBadge();

            // Transform button into +/- toggle
            const toggleUI = document.createElement('div');
            toggleUI.className = 'cart-quantity-toggle';
            toggleUI.style.display = 'flex';
            toggleUI.style.alignItems = 'center';
            toggleUI.style.justifyContent = 'space-between';
            toggleUI.style.border = '1px solid var(--primary-color)';
            toggleUI.style.borderRadius = '50px';
            toggleUI.style.overflow = 'hidden';
            toggleUI.style.minWidth = '120px';
            toggleUI.innerHTML = `
                <button class="qty-btn minus" style="border:none; background:none; padding: 0.5rem 1rem; color: var(--primary-color); cursor:pointer;">-</button>
                <span class="qty-count" style="font-weight: bold; padding: 0.5rem 0;">1</span>
                <button class="qty-btn plus" style="border:none; background:none; padding: 0.5rem 1rem; color: var(--primary-color); cursor:pointer;">+</button>
            `;
            
            // Swap node
            parent.insertBefore(toggleUI, btn);
            btn.style.display = 'none';

            let localCount = 1;

            // Handle plus/minus
            const minusBtn = toggleUI.querySelector('.minus');
            const plusBtn = toggleUI.querySelector('.plus');
            const countSpan = toggleUI.querySelector('.qty-count');

            plusBtn.addEventListener('click', (ev) => {
                ev.preventDefault();
                localCount++;
                globalCartCount++;
                countSpan.textContent = localCount;
                updateGlobalCartBadge();
            });

            minusBtn.addEventListener('click', (ev) => {
                ev.preventDefault();
                localCount--;
                globalCartCount--;
                updateGlobalCartBadge();

                if (localCount === 0) {
                    toggleUI.remove();
                    btn.style.display = '';
                    btn.textContent = 'Add to Cart';
                } else {
                    countSpan.textContent = localCount;
                }
            });
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

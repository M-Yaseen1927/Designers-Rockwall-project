// Mobile Navigation Drawer Toggle
            const drawerOpen = document.getElementById('drawerOpen');
            const drawerClose = document.getElementById('drawerClose');
            const mobileDrawer = document.getElementById('mobileDrawer');
            const drawerBackdrop = document.getElementById('drawerBackdrop');
            const drawerNavLinks = document.querySelectorAll('.drawer-nav-link');
            function toggleDrawer() {
            mobileDrawer.classList.toggle('open');
            drawerBackdrop.classList.toggle('active');
            }
            drawerOpen.addEventListener('click', toggleDrawer);
            drawerClose.addEventListener('click', toggleDrawer);
            drawerBackdrop.addEventListener('click', toggleDrawer);
            drawerNavLinks.forEach(link => {
            link.addEventListener('click', () => {
            mobileDrawer.classList.remove('open');
            drawerBackdrop.classList.remove('active');
            });
            });
            // Modal Logic
            const projectModal = document.getElementById('projectModal');
            const modalImg = document.getElementById('modalImg');
            const modalTitle = document.getElementById('modalTitle');
            const modalDesc = document.getElementById('modalDesc');
            function openModal(title, desc, imgSrc) {
            modalTitle.innerText = title;
            modalDesc.innerText = desc;
            modalImg.src = imgSrc;
            projectModal.classList.add('active');
            }
            function closeModal() {
            projectModal.classList.remove('active');
            }
            projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
            closeModal();
            }
            });
            // Consultation Form Handler
            const consultationForm = document.getElementById('consultationForm');
            const successAlert = document.getElementById('successAlert');
            consultationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            successAlert.classList.add('visible');
            consultationForm.reset();
            setTimeout(() => {
            successAlert.classList.remove('visible');
            }, 6000);
            });
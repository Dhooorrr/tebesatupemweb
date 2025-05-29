function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  navLinks.classList.toggle('active');
  
  // Toggle ikon
  if (navLinks.classList.contains('active')) {
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  } else {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
}
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  const slideTrack = document.getElementById('slideTrack');

  function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slideTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  setInterval(nextSlide, 6000);

  // Dot indikator
  const dotsContainer = document.getElementById('dots');
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => showSlide(i));
    dotsContainer.appendChild(dot);
  }

  function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
  }

  showSlide(0);
  const quotes = [
    "Cerdas, Tangguh, Peduli.",
    "Berprestasi dalam Akademik dan Non-Akademik.",
    "Mewujudkan Generasi Emas Indonesia.",
    "Disiplin adalah Kunci Sukses.",
    "Sekolah adalah Rumah Kedua."
  ];

  let quoteIndex = 0;
  const quoteText = document.getElementById('quote-text');

  setInterval(() => {
    quoteText.style.opacity = 0;
    setTimeout(() => {
      quoteIndex = (quoteIndex + 1) % quotes.length;
      quoteText.textContent = quotes[quoteIndex];
      quoteText.style.opacity = 1;
    }, 500);
  }, 5000);

  // ngitung
  const counters = document.querySelectorAll('.stat-number');
  const speed = 400; 

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target + '+'; // Tambahin tanda +
      }
    };

    updateCount();
  });

  // Guru

  // Scroll ke atas
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Tampilkan tombol back-to-top saat scroll
  window.addEventListener('scroll', function () {
    const btn = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });

  const galleryItems = document.querySelectorAll(".gallery-item");
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalImg = document.getElementById("modalImg");
  const modalDesc = document.getElementById("modalDesc");
  const closeModal = document.getElementById("closeModal");

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      modalTitle.textContent = item.dataset.title;
      modalImg.src = item.dataset.img;
      modalDesc.textContent = item.dataset.desc;
      modal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", () => modal.style.display = "none");

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
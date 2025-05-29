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

    //ekskul
    const daftarEkskul = [
        { nama: "Pramuka", deskripsi: "Kegiatan kepanduan untuk melatih kemandirian dan kepemimpinan.", gambar: "https://4.bp.blogspot.com/-Y3v9sXBW4s8/XNCiiEGkFoI/AAAAAAAAADw/vUp16OWNHa4vof-LMGYoKjHaiurLe9cMgCLcBGAs/s1600/ilustrasi-pramuka.jpg" },
        { nama: "Paskibra", deskripsi: "Pasukan pengibar bendera yang disiplin dan tangguh.", gambar: "https://hariane.com/file/2023/02/paskibra.jpg" },
        { nama: "PMR", deskripsi: "Palang Merah Remaja, membantu dalam kegiatan sosial dan kesehatan.", gambar: "https://1.bp.blogspot.com/-NdqfiPdjtLQ/VnKFn7dELnI/AAAAAAAAADc/tzhkgdt3-5o/s1600/LOGO-PMR%2BWIRA.png" },
        { nama: "Basket", deskripsi: "Ekskul olahraga basket untuk mengasah fisik dan strategi.", gambar: "https://cdn-2.tstatic.net/wartakota/foto/bank/images/Laga-big-match-antara-SMA-Kanisius-Jakarta-melawan-SMA-PSKD-1-Jakarta.jpg" },
        { nama: "Futsal", deskripsi: "Permainan bola dengan tim kecil di dalam ruangan.", gambar: "https://www.futsalfocus.net/wp-content/uploads/2022/10/Game-2-of-the-OFC-Futsal-Cup-2022-vs-Vanuatu.-scaled.jpeg" },
        { nama: "Tari Tradisional", deskripsi: "Melestarikan budaya melalui gerakan tari daerah.", gambar: "https://www.futsalfocus.net/wp-content/uploads/2022/10/Game-2-of-the-OFC-Futsal-Cup-2022-vs-Vanuatu.-scaled.jpeg" },
        { nama: "Modern Dance", deskripsi: "Tari modern yang energik dan kreatif.", gambar: "https://www.futsalfocus.net/wp-content/uploads/2022/10/Game-2-of-the-OFC-Futsal-Cup-2022-vs-Vanuatu.-scaled.jpeg" },
        { nama: "English Club", deskripsi: "Mengasah kemampuan bahasa Inggris melalui diskusi dan lomba.", gambar: "https://www.futsalfocus.net/wp-content/uploads/2022/10/Game-2-of-the-OFC-Futsal-Cup-2022-vs-Vanuatu.-scaled.jpeg" },
        { nama: "Teater", deskripsi: "Belajar seni peran dan drama panggung.", gambar: "https://www.futsalfocus.net/wp-content/uploads/2022/10/Game-2-of-the-OFC-Futsal-Cup-2022-vs-Vanuatu.-scaled.jpeg" },
        { nama: "Karya Ilmiah Remaja", deskripsi: "Meneliti dan menulis karya ilmiah remaja.", gambar: "https://www.futsalfocus.net/wp-content/uploads/2022/10/Game-2-of-the-OFC-Futsal-Cup-2022-vs-Vanuatu.-scaled.jpeg" },
        { nama: "Fotografi", deskripsi: "Mengekspresikan diri lewat lensa kamera.", gambar: "https://www.futsalfocus.net/wp-content/uploads/2022/10/Game-2-of-the-OFC-Futsal-Cup-2022-vs-Vanuatu.-scaled.jpeg" },
        { nama: "Pencak Silat", deskripsi: "Belajar seni bela diri tradisional Indonesia.", gambar: "https://www.futsalfocus.net/wp-content/uploads/2022/10/Game-2-of-the-OFC-Futsal-Cup-2022-vs-Vanuatu.-scaled.jpeg" },
        { nama: "Musik Band", deskripsi: "Bermain musik dalam kelompok band sekolah.", gambar: "https://www.futsalfocus.net/wp-content/uploads/2022/10/Game-2-of-the-OFC-Futsal-Cup-2022-vs-Vanuatu.-scaled.jpeg" },
        { nama: "Robotik", deskripsi: "Eksplorasi teknologi dan pemrograman robot.", gambar: "https://www.futsalfocus.net/wp-content/uploads/2022/10/Game-2-of-the-OFC-Futsal-Cup-2022-vs-Vanuatu.-scaled.jpeg" }
      ];
  
      const wadah = document.getElementById("wadahEkskul");
      const popup = document.getElementById("popup");
      const judulPopup = document.getElementById("judulPopup");
      const deskripsiPopup = document.getElementById("deskripsiPopup");
  
      daftarEkskul.forEach(eksul => {
        const kartu = document.createElement("div");
        kartu.className = "kartu-eksul";
  
        const gambar = document.createElement("img");
        gambar.src = eksul.gambar;
        gambar.alt = eksul.nama;
  
        const nama = document.createElement("h3");
        nama.innerText = eksul.nama;
  
        kartu.appendChild(gambar);
        kartu.appendChild(nama);
        kartu.onclick = () => {
          judulPopup.innerText = eksul.nama;
          deskripsiPopup.innerText = eksul.deskripsi;
          popup.style.display = "flex";
        };
  
        wadah.appendChild(kartu);
      });
  
      function tutupPopup() {
        popup.style.display = "none";
      }
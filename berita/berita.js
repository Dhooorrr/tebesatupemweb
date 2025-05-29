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

    const dataBerita = [
        {
          judul: "Upacara Hari Pendidikan Nasional",
          tanggal: "2 Mei 2025",
          isi: "Upacara Hari Pendidikan Nasional dilaksanakan di lapangan utama pukul 07.00 WIB. Semua siswa wajib hadir dengan seragam lengkap.",
          gambar: "https://i.ytimg.com/vi/ExvRDSw8HVs/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEogZSgsMA8=&rs=AOn4CLCFv3G8zeIksspaY3P35o_Qr_HyRw"
        },
        {
          judul: "Pengumuman Libur Semester",
          tanggal: "10 Mei 2025",
          isi: "Libur semester akan dimulai dari 15 Mei hingga 30 Mei. Sekolah akan aktif kembali pada 2 Juni. Harap cek kalender akademik.",
          gambar: "https://cms.disway.id/uploads/4617676abb8efdc37d840d01d87aea2e.png"
        },
        {
          judul: "Pendaftaran Ekstrakurikuler Dibuka",
          tanggal: "5 Mei 2025",
          isi: "Siswa dapat mendaftar ekstrakurikuler melalui portal siswa sampai tanggal 12 Mei 2025. Banyak pilihan kegiatan menarik tersedia.",
          gambar: "https://materi.co.id/wp-content/uploads/2020/08/Ekstrakurikuler-768x403.jpg"
        }
      ];
  
      const kontainer = document.getElementById("kontainer-berita");
      const popup = document.getElementById("popup");
      const gambarPopup = document.getElementById("gambar-popup");
      const judulPopup = document.getElementById("judul-popup");
      const tanggalPopup = document.getElementById("tanggal-popup");
      const isiTeksPopup = document.getElementById("isi-teks-popup");
  
      function tampilkanPopup(berita) {
        gambarPopup.src = berita.gambar;
        judulPopup.textContent = berita.judul;
        tanggalPopup.textContent = berita.tanggal;
        isiTeksPopup.textContent = berita.isi;
        popup.style.display = "flex";
      }
  
      function tutupPopup() {
        popup.style.display = "none";
      }
  
      dataBerita.forEach((item) => {
        const kartu = document.createElement("div");
        kartu.className = "kartu-berita";
        kartu.innerHTML = `
          <img src="${item.gambar}" alt="Gambar ${item.judul}">
          <h3>${item.judul}</h3>
          <small>${item.tanggal}</small>
          <p>${item.isi.substring(0, 60)}...</p>
        `;
        kartu.onclick = () => tampilkanPopup(item);
        kontainer.appendChild(kartu);
      });
  
      // Tutup popup jika klik di luar area isi
      popup.addEventListener("click", function(e) {
        if (e.target === popup) {
          tutupPopup();
        }
      });
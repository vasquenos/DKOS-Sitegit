// Sayfa yüklendiğinde çalışacak kod
document.addEventListener('DOMContentLoaded', function() {
    console.log('DKOS Web Sitesi Yüklendi!');
    
    // Slider otomatik değişim başlat
    startAutoSlider();
    
    // Scroll event listener ekle - sayaç animasyonu için
    window.addEventListener('scroll', function() {
        animateCounters();
    });
});

// Slider Fonksiyonları
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let autoSliderInterval;

// Slide değiştirme fonksiyonu
function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    
    currentSlide += direction;
    
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    slides[currentSlide].classList.add('active');
    
    // Otomatik slider'ı sıfırla
    clearInterval(autoSliderInterval);
    startAutoSlider();
}

// Otomatik slider başlatma
function startAutoSlider() {
    autoSliderInterval = setInterval(function() {
        changeSlide(1);
    }, 4000); // 4 saniyede bir değişir
}

// Sayaç Animasyon Fonksiyonu
let countersAnimated = false;

function animateCounters() {
    const statsSection = document.querySelector('.stats');
    const sectionTop = statsSection.offsetTop;
    const sectionHeight = statsSection.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;
    
    // Stats bölümü görünür hale geldiğinde animasyonu başlat
    if (scrollTop + windowHeight > sectionTop + 100 && !countersAnimated) {
        countersAnimated = true;
        
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 100; // 100 adımda tamamla
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    if (current > target) current = target;
                    counter.textContent = Math.floor(current);
                    setTimeout(updateCounter, 20); // 20ms aralıklarla güncelle
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    }
}

// Ürün kartları hover efektleri
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Smooth Scroll için (eğer menü eklerseniz)
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
const iller = document.querySelectorAll('.il');
const bilgiKutu = document.getElementById('bilgi-kutu');

// Adana bölge bayisi (Akdeniz)
const bolgeBayileri = {
  akdeniz: {
    bayi: 'Adana Bölge Bayisi',
    telefon: '0 322 123 45 67',
    email: 'adana@bayi.com'
  },
  'ic-anadolu': {
    bayi: 'Ankara Bölge Bayisi',
    telefon: '0 312 456 78 90',
    email: 'ankara@bayi.com'
  }
};

// Hover efektiyle bölgeyi kırmızıya yay
iller.forEach(il => {
  il.addEventListener('mouseenter', () => {
    const bolge = il.dataset.bolge;
    iller.forEach(i => {
      if (i.dataset.bolge === bolge) {
        i.classList.add('akdeniz-hover');
      }
    });
  });

  il.addEventListener('mouseleave', () => {
    iller.forEach(i => i.classList.remove('akdeniz-hover'));
  });

  // Tıklanma ile bilgi göster
  il.addEventListener('click', () => {
    const bolge = il.dataset.bolge;
    const bayi = bolgeBayileri[bolge];
    if (bayi) {
      bilgiKutu.innerHTML = `
        <strong>${bayi.bayi}</strong><br>
        Telefon: ${bayi.telefon}<br>
        E-posta: ${bayi.email}
      `;
    } else {
      bilgiKutu.innerHTML = 'Bayi bilgisi bulunamadı.';
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
    // Tüm navigasyon linklerini seçin (resimlerin etrafındaki 'a' etiketleri dahil)
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Varsayılan link davranışını engelle (sayfanın anında zıplamasını)

            const targetId = this.getAttribute('href'); // Tıklanan linkin hedef ID'sini al
            const targetSection = document.querySelector(targetId); // Hedef bölümü bul

            if (targetSection) {
                // window.scrollTo() kullanarak yumuşak kaydırma animasyonunu tetikle
                // Buradaki 'behavior: "smooth"' ile tarayıcı kendi yumuşak geçişini yapar.
                // Eğer Baykar'daki gibi *çok hassas* bir süre kontrolü istiyorsan,
                // daha önce konuştuğumuz wheel event dinleyicili JS kodunu kullanmalısın.
                window.scrollTo({
                    top: targetSection.offsetTop, // Hedef bölümün sayfa üstünden uzaklığı
                    behavior: 'smooth' // Yumuşak kaydırma animasyonu
                });
            }
        });
    });
    });
// Sayfa yüklenme efekti
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});


// Responsive menü için (mobil)
function toggleMobileMenu() {
    // Bu fonksiyon daha sonra menü eklenirse kullanılabilir
    console.log('Mobil menü toggle');
}

// Klavye ile slider kontrolü
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (event.key === 'ArrowRight') {
        changeSlide(1);
    }
});
document.addEventListener("DOMContentLoaded", () => {
  // Gözlemlemek istediğin elementleri seç
  const targets = document.querySelectorAll(
    '.bizkimiz-text, .info-text p, .referanslarimiz , .calistiklarimiz , .products'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1 // %10 görünürlükte tetikleme
  });

  targets.forEach(el => observer.observe(el));
});
// Konsola bilgi mesajları
console.log('DKOS JavaScript Dosyası Yüklendi');
console.log('Slider Otomatik Değişim: 4 saniye');
console.log('Sayaç Animasyonu: Scroll ile aktif');
console.log('Klavye Kontrolü: Sol/Sağ ok tuşları');
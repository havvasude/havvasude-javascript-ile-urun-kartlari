// Örnek ürün listesi (resim dosyalarını kendin eklemelisin)
const urunler = [
  { ad: "Dior Allık", fiyat: 4190, resim: em },
  { ad: "Lenovo ThinkPad", fiyat: 18000, resim: "img/thinkpad.jpg" },
  { ad: "HP Pavilion", fiyat: 14000, resim: "img/hp.jpg" },
  { ad: "Asus Vivobook", fiyat: 11500, resim: "img/asus.jpg" },
  { ad: "Acer Aspire", fiyat: 9500, resim: "img/acer.jpg" },
];

function olustur() {
  const adet = Number(document.getElementById("adet").value);
  const alan = document.getElementById("kartAlani");

  // Eski kartları temizle
  alan.innerHTML = "";

  // Kullanıcı yanlış sayı girdiyse uyar
  if (adet < 1 || adet > urunler.length) {
    alan.innerHTML = `<p>Lütfen 1 ile ${urunler.length} arasında bir değer giriniz.</p>`;
    return;
  }

  // Kartları oluştur
  for (let i = 0; i < adet; i++) {
    const urun = urunler[i];

    // Pahalı ürün kontrolü
    const kartClass = urun.fiyat > 10000 ? "kart pahali" : "kart";

    // Kart HTML'i
    const kart = `
            <div class="${kartClass}">
                <img src="${urun.resim}" alt="${urun.ad}">
                <h3>${urun.ad}</h3>
                <p>${urun.fiyat} TL</p>
            </div>
        `;

    // Sayfaya ekle
    alan.innerHTML += kart;
  }
}

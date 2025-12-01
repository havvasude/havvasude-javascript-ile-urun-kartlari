const urunler = [
  { ad: "Dior Allık", fiyat: 4190, resim: "img/dior.jpeg" },
  {
    ad: "Victoria's Secret Bombshell",
    fiyat: 5000,
    resim: "img/bombshell2.jpg",
  },
  { ad: "Kiko Milano Glos", fiyat: 2000, resim: "img/kiko.jpeg" },
  {
    ad: "Maybelline New York Kapatıcı",
    fiyat: 1500,
    resim: "img/kapaatıcı.jpg",
  },
  { ad: "YSL Mascara", fiyat: 9500, resim: "img/maskara.jpg" },
  {
    ad: "Rare Beauty Highlighter",
    fiyat: 1500,
    resim: "img/aydınlatıcı.jpeg",
  },
  { ad: "Chanel Pudra", fiyat: 2950, resim: "img/pudra.jpg" },
  { ad: "Estee Lauder Fondöten", fiyat: 3000, resim: "img/fondoten.jpg" },
  { ad: "Note Far Paleti", fiyat: 1200, resim: "img/far.jpg" },
  { ad: "MAC Bronzer", fiyat: 3500, resim: "img/bronzer.jpeg" },
  { ad: "Advent Calendar", fiyat: 65000, resim: "img/set.jpg" },
];

function olustur() {
  const adet = Number(document.getElementById("adet").value);
  const alan = document.getElementById("kartAlani");

  alan.innerHTML = "";

  if (adet < 1 || adet > urunler.length) {
    alan.innerHTML = `<p>Lütfen 1 ile ${urunler.length} arasında bir değer giriniz.</p>`;
    return;
  }

  for (let i = 0; i < adet; i++) {
    const urun = urunler[i];
    const kartClass = urun.fiyat > 10000 ? "kart pahali" : "kart";

    const kart = `
      <div class="${kartClass}">
        <img src="${urun.resim}" alt="${urun.ad}">
        <h3>${urun.ad}</h3>
        <p>${urun.fiyat} TL</p>
      </div>
    `;

    alan.innerHTML += kart;
  }
}

// ====== CONFIG: ubah data di sini ======
const CONFIG = {
  whatsapp: "6282324102206",
  telpTampil: "0823 2410 2206",
  // Foto galeri: file ada di folder images/. Tambah/ubah baris untuk mengganti foto.
  // Tambah/ubah baris untuk menambah foto, "ket" = keterangan (boleh kosong).
  galeri: [
    { src: "images/galeri-1.jpg", ket: "Berpose dengan latar Gunung Merapi" },
    { src: "images/galeri-2.jpg", ket: "Tankaman Natural Park" },
    { src: "images/galeri-3.jpg", ket: "Gerbang Kaliurang Explore" },
    { src: "images/galeri-4.jpg", ket: "Trek lumpur" },
    { src: "images/galeri-5.jpg", ket: "Menerjang aliran sungai" },
    {
      src: "images/galeri-6.jpg",
      ket: "Bukit Songo Papat Dengan Pemandangan Gunung Merapi",
    },
    { src: "images/galeri-7.jpg", ket: "View Gunung Merapi" },
    { src: "images/galeri-8.jpg", ket: "Melewati Sungai Tempuran" },
    { src: "images/galeri-9.jpg", ket: "Berpose Dengan View Merapi" },
    { src: "images/galeri-10.jpg", ket: "Bukit Songo Papat" },
    { src: "images/galeri-11.jpg", ket: "Lewat Trek Air" },
    { src: "images/galeri-12.jpg", ket: "Bukit Songo Papat View Merapi" },
    { src: "images/galeri-13.jpg", ket: "Bukit Songopapat" },
    { src: "images/galeri-14.jpg", ket: "Pose bersama di Sungai tempuran" },
    { src: "images/galeri-15.jpg", ket: "Seru-seruan di sungai" },
    { src: "images/galeri-16.jpg", ket: "" },
    { src: "images/galeri-17.jpg", ket: "" },
    { src: "images/galeri-18.jpg", ket: "" },
    { src: "images/galeri-19.jpg", ket: "" },
    { src: "images/galeri-20.jpg", ket: "" },
  ],
  hero: "images/hero.jpg", // foto latar bagian atas (opsional)
  paket: [
    {
      nama: "Paket 1",
      durasi: "1,5 – 2 jam",
      sendiri: "300K",
      tandem: "350K",
      trek: [
        "Bukit Songo Papat",
        "Gardu Pandang",
        "Omah Putih",
        "Kaliurang Explore Entrance",
        "Lorong Oxygen",
        "Trek Lumpur",
        "Sungai Tempuran",
      ], // daftar trek paket ini
      info: [
        "Trip ATV (150 cc) explore Kaliurang full trek, hanya berhenti di Bukit Songo Papat",
        "Open trip",
        "Bisa dipesan on the spot atau reservasi via WhatsApp",
      ],
      fasilitas: [
        "Pemandu profesional",
        "Helm & boots",
        "Dokumentasi (foto & video)",
        "Loker barang",
        "Pelindung HP anti air",
        "Camilan ringan & coffee break",
        "Kamar mandi, mushola, kantin",
      ],
    },
    {
      nama: "Paket 2",
      durasi: "2 – 2,5 jam",
      sendiri: "400K",
      tandem: "450K",
      trek: [
        "Nawang Jagad",
        "Bukit Songo Papat",
        "Gardu Pandang",
        "Omah Putih",
        "Kaliurang Explore Entrance",
        "Lorong Oxygen",
        "Tankaman Natural Park",
        "Trek Lumpur",
        "Sungai Tempuran",
      ], // daftar trek paket ini
      info: [
        "Trip ATV (150 cc) explore Kaliurang full trek, berhenti di Nawang Jagad & Tankaman Kaliurang",
        "Open trip dan private trip (menyesuaikan keadaan)",
        "Wajib reservasi via WhatsApp minimal H-2 jam 13.00 WIB",
        "Menyesuaikan jadwal operasional destinasi wisata (hari & jam buka/tutup)",
      ],
      fasilitas: [
        "Pemandu profesional",
        "Helm & boots",
        "Dokumentasi (foto & video)",
        "Loker barang",
        "Pelindung HP anti air",
        "Snack khas Kaliurang & coffee break",
        "Kamar mandi, mushola, kantin",
      ],
    },
  ],
  slot: [
    "Trip 1|08.00 – 10.00",
    "Trip 2|10.00 – 12.00",
    "Trip 3|13.00 – 15.00",
    "Trip 4|15.00 – 17.00",
  ],
  slotNote: [
    "Semua slot (Trip 1–4) berlaku untuk Paket 1.",
    "Paket 2 hanya Trip 1, Trip 2, dan Trip 3.",
    "Pindah waktu keberangkatan: konfirmasi admin minimal H-1 trip.",
  ],
  extra: [
    {
      judul: "Snack",
      harga: "Mulai Rp10.000/pax",
      poin: [
        "4 jenis snack (gorengan, kue, pudding, camilan)",
        "Bisa dengan box / tanpa box",
        "Bisa request harga atau jenis snack",
      ],
    },
    {
      judul: "Paket Makan Rp25.000/pax",
      harga: "",
      poin: [
        "Nasi putih",
        "Sayur: lodeh, tumis kangkung, pecel sayur",
        "Lauk: tempe, tahu, telur dadar, ayam goreng",
        "Buah iris semangka / melon, kerupuk, sambal",
      ],
    },
    {
      judul: "Paket Makan Rp30.000/pax",
      harga: "",
      poin: [
        "Nasi putih",
        "Sayur: lodeh, asem, sop",
        "Lauk: tempe, tahu, ayam bakar, lele goreng",
        "Buah iris semangka / melon, kerupuk, sambal",
      ],
    },
    {
      judul: "Fun Games",
      harga: "Mulai Rp50.000/pax",
      poin: [
        "Durasi 1 – 1,5 jam",
        "Pemandu games, alat games, dokumentasi",
        "Dilaksanakan sebelum trip",
        "Wajib reservasi minimal H-2 trip",
        "Harga menyesuaikan durasi dan jumlah peserta",
      ],
    },
  ],
  extraNote: [
    "Makan: wajib reservasi dan konfirmasi minimal H-2 trip.",
    "Jika fix order, wajib DP makan 50%.",
    "Makan disajikan setelah trip, bisa prasmanan atau dengan box.",
    "Bisa request jenis makanan dengan harga menyesuaikan.",
  ],
  syarat: [
    "Penyewa wajib melakukan pelunasan sebelum trip dilaksanakan.",
    "Penyewa wajib memahami & menerima bahwa trip ini belum memiliki asuransi.",
    "Pengendara ATV bertanggung jawab penuh terhadap diri sendiri dan unit yang dikendarai.",
    "Pengendara wajib berusia 16 tahun ke atas & bisa mengendarai kendaraan bermotor.",
    "ATV maksimal digunakan 2 orang dengan beban maksimal 120 kg.",
    "Anak di bawah 16 tahun wajib diboncengkan (bisa sewa pemandu +Rp50K, berlaku usia 5 tahun ke atas).",
    "Penyewa wajib menaati instruksi pemandu selama trip.",
    "Pengendara wajib memakai helm & boots yang disediakan.",
    "Penyewa wajib datang 1 jam / 30 menit sebelum trip karena ada persiapan.",
    "Maksimal keterlambatan kedatangan 15 menit.",
    "Trip dimulai tepat waktu. Tamu yang terlambat dianggap mengundurkan diri dan tidak berhak atas pengembalian dana (non-refundable).",
    "Perubahan jadwal trip dapat dilakukan jika slot trip masih tersedia.",
    "Jika terlambat / pindah jam trip, wajib konfirmasi ke admin minimal 2 jam sebelum trip.",
    "ATV Tempuran berhak mengubah atau menjadwal ulang trip jika terjadi force majeure (cuaca ekstrem, kendala teknis kendaraan, atau alasan operasional lain). Perubahan akan diinformasikan secepat mungkin.",
    "ATV Tempuran berhak membatalkan trip jika penyewa tidak menaati peraturan yang diberikan.",
    "Pengendara wajib sehat fisik dan mental. Wanita hamil dilarang mengikuti trip.",
    "Pengendara wajib menjaga ketertiban dan sopan santun selama trip.",
    "Pengendara wajib memakai pakaian yang nyaman selama trip.",
    "Penyewa wajib membawa pakaian ganti karena berisiko basah dan kotor.",
    "Sanksi dapat diberikan jika penyewa: tidak menaati aturan & membahayakan keselamatan; mengubah jadwal sepihak tanpa konfirmasi admin (denda Rp50.000/ATV); merusak unit atau sarana dengan sengaja; tidak memakai helm/boots; mengendara di bawah pengaruh alkohol atau obat-obatan; berboncengan lebih dari 2 orang; ugal-ugalan atau keluar dari jalur trek.",
  ],
};
// =======================================

const $ = (id) => document.getElementById(id);
const wa = (t) =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(t)}`;
const ul = (a) => a.map((x) => `<li>${x}</li>`).join("");

$("paketList").innerHTML = CONFIG.paket
  .map(
    (p) => `
  <div class="card pkg">
    <h3>${p.nama}</h3><span class="badge">⏱ ${p.durasi}</span>
    <ul class="list">${ul(p.info)}</ul>
    <h4>Trek</h4><div class="chips">${p.trek.map((t) => `<i>${t}</i>`).join("")}</div>
    <h4>Fasilitas</h4><ul class="list">${ul(p.fasilitas)}</ul>
    <div class="prices"><div><b>${p.sendiri}</b><small>Sendiri</small></div><div><b>${p.tandem}</b><small>Tandem</small></div></div>
    <a class="btn sm" target="_blank" rel="noopener" href="${wa("Halo, saya tertarik " + p.nama)}">Pesan ${p.nama}</a>
  </div>`,
  )
  .join("");

$("slotList").innerHTML = CONFIG.slot
  .map((s) => {
    const [a, b] = s.split("|");
    return `<div class="slot"><b>${a}</b><span>${b}</span></div>`;
  })
  .join("");
$("slotNote").innerHTML = ul(CONFIG.slotNote);

$("extraList").innerHTML = CONFIG.extra
  .map(
    (e) => `
  <div class="card"><h3>${e.judul}</h3>${e.harga ? `<div class="price">${e.harga}</div>` : ""}<ul class="list">${ul(e.poin)}</ul></div>`,
  )
  .join("");
$("extraNote").innerHTML = ul(CONFIG.extraNote);

$("syaratList").innerHTML =
  `<details open><summary>Lihat semua ketentuan</summary><ol class="list">${ul(CONFIG.syarat)}</ol></details>`;

$("telp").textContent = CONFIG.telpTampil;
document.querySelectorAll("[data-wa]").forEach((a) => {
  a.href = wa(a.dataset.wa);
  a.target = "_blank";
  a.rel = "noopener";
});
$("year").textContent = new Date().getFullYear();

const menu = $("menu");
$("burger").addEventListener("click", () => menu.classList.toggle("open"));
menu.addEventListener("click", () => menu.classList.remove("open"));

const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.08 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Navbar: tetap di atas, berubah solid saat di-scroll
const navbar = $("navbar");
const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Galeri foto (kotak kosong tampil jika foto belum ada)
$("galleryList").innerHTML = CONFIG.galeri
  .map(
    (g, i) => `
  <figure class="ph" data-i="${i}"><img loading="lazy" src="${g.src}" alt="${g.ket || "Foto ATV Tempuran Kaliurang"}">
  <span class="ph-note">Taruh foto di<br><code>${g.src}</code></span>${g.ket ? `<figcaption>${g.ket}</figcaption>` : ""}</figure>`,
  )
  .join("");
document.querySelectorAll("#galleryList img").forEach((img) => {
  img.addEventListener("load", () => img.parentElement.classList.remove("ph"));
  img.addEventListener("error", () => img.remove());
  if (img.complete && img.naturalWidth)
    img.parentElement.classList.remove("ph");
});
const lb = $("lightbox");
$("galleryList").addEventListener("click", (e) => {
  const img = e.target.closest("figure:not(.ph)")?.querySelector("img");
  if (img) {
    lb.querySelector("img").src = img.src;
    lb.classList.add("open");
  }
});
lb.addEventListener("click", () => lb.classList.remove("open"));

// Foto latar hero (aktif otomatis jika file ada)
const hi = new Image();
hi.onload = () => {
  document
    .querySelector(".hero")
    .style.setProperty("--hero-img", `url("${CONFIG.hero}")`);
  document.querySelector(".hero").classList.add("has-img");
};
hi.src = CONFIG.hero;

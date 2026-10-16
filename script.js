function toggleMenu(btn) {
  const nav = document.querySelector(".navbar");
  const open = nav.classList.toggle("active");
  btn.setAttribute("aria-expanded", open);
}

document.querySelectorAll(".nav-links a").forEach((a) =>
  a.addEventListener("click", () => {
    document.querySelector(".navbar").classList.remove("active");
  }),
);

const grid = document.getElementById("galeri-grid");
const more = document.getElementById("more");
more.addEventListener("click", () => {
  const open = grid.classList.toggle("open");
  more.textContent = open
    ? "Tampilkan lebih sedikit"
    : "Lihat semua foto";
});

const lb = document.getElementById("lb");
const lbImg = lb.querySelector("img");
grid.addEventListener("click", (e) => {
  const img = e.target.closest("button")?.querySelector("img");
  if (!img) return;
  lbImg.src = img.src;
  lbImg.alt = img.alt;
  lb.showModal();
});
document
  .getElementById("lb-close")
  .addEventListener("click", () => lb.close());
lb.addEventListener("click", (e) => {
  if (e.target === lb) lb.close();
});

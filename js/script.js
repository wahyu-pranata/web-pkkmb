// For index.html
let i = 0;
let j = 0;
const logoElement = document.getElementById("logo-pkkmb");
const logoDescElement = document.getElementById("logo-desc");
const logoDescTitleElement = document.getElementById("logo-desc-title");
const dharmaImage = document.getElementById("dharma-image");
const patniImage = document.getElementById("patni-image");

window.addEventListener('load', () => {
  const overlay = document.getElementById("overlay");
  overlay.classList.add('hidden');
});

const logos = [
  "../assets/img/pkkmb-logos/1.png",
  "../assets/img/pkkmb-logos/2.png",
  "../assets/img/pkkmb-logos/3.png",
  "../assets/img/pkkmb-logos/4.png",
  "../assets/img/pkkmb-logos/5.png",
  "../assets/img/pkkmb-logos/6.png",
  "../assets/img/pkkmb-logos/7.png",
];

const dharmaImages = [
  "../assets/img/dharmapatni/dharma salam.png",
  "../assets/img/dharmapatni/dharma mengarahkan.png",
  "../assets/img/dharmapatni/dharma kaget.png",
  "../assets/img/dharmapatni/dharma menyapa.png",
  "../assets/img/dharmapatni/dharma marah.png",
  "../assets/img/dharmapatni/dharma mikir.png",
  "../assets/img/dharmapatni/dharma semangat.png",
];

const patniImages = [
  "../assets/img/dharmapatni/patni salam.png",
  "../assets/img/dharmapatni/patni mengarahkan.png",
  "../assets/img/dharmapatni/patni kaget.png",
  "../assets/img/dharmapatni/patni menyapa.png",
  "../assets/img/dharmapatni/patni marah.png",
  "../assets/img/dharmapatni/patni mikir.png",
  "../assets/img/dharmapatni/patni semangat.png",
];

const logoDescriptionTitles = [
  "Daun Hijau",
  "Logo Universitas Udayana",
  "Kuncup Merah",
  "13 Kelopak Bunga",
  "Daun Biru",
  "Daun Kuning",
  "Bunga Teratai"
];

const logoDescription = [
  "Daun yang berbentuk orang yang menjadi bagian dari pemekaran atau evolusi dari teratai. Daun hijau yang berjumlah 3 melambangkan 3 bidang penting pada mahasiswa yakni Akademik, Organisasi, dan Pengabdian.",
  "Logo Universitas Udayana sebagai Poros dari PKKMB Prabhu Udayana 2024 yang merupakan identitas serta simbol almamater.",
  "Pada kuncup ini, terdapat 3 bagian yang melambangkan Tri Dharma Perguruan Tinggi, yaitu Pendidikan dan Pengajaran, Penelitian dan Pengembangan, serta Pengabdian Kepada Masyarakat.",
  "13 Fakultas yang bersatu sebagai pelengkap dari PKKMB-Prabhu Udayana 2024 (Bunga Teratai). Karena sebuah bunga tidak akan bisa disebut bunga tanpa kelopaknya, oleh karena itu ke-13 Fakultas menjadi bagian penting pada PKKMB-Prabhu Udayana 2024.",
  "Melambangkan mahasiswa sebagai wujud fleksibilitas yang mengalir melalui celah-celah perubahan dan tantangan, membentuk dirinya sesuai dengan kontur kehidupan yang terus berubah. Dalam bentuk yang abstrak, mahasiswa berkembang dengan dinamika zaman, menyesuaikan, dan beradaptasi, tanpa kehilangan esensi sejatinya.",
  "Mahkota bunga yang berwarna kuning merupakan evolusi dari daun paling gelap ke terang. Daun yang mekar itu melambangkan pendewasaan yang merupakan bagian dari evolusi secara holistik, mulai dari berwarna gelap, kemudian menjadi terang, dan pada akhirnya mekar sempurna.",
  "Bunga teratai menjadi simbol evolusi, menggambarkan perjalanan yang penuh transformasi dan pertumbuhan. Mahasiswa baru Universitas Udayana memulai perjalanan penuh semangat dan siap menghadapi rintangan. Mereka menyerap ilmu dan pengalaman, berkembang. Dengan tekad dan ketekunan, mereka mencapai kesuksesan, bagaikan bunga teratai yang memancarkan keindahan di tengah air."
];

setInterval(function () {
  setTimeout(function () {
    logoElement.style.opacity = 0;
    logoDescElement.style.opacity = 0;
    logoDescTitleElement.style.opacity = 0;

    logoElement.src = logos[i % 7];
    logoDescElement.innerHTML = logoDescription[i % 7];
    logoDescTitleElement.innerHTML = logoDescriptionTitles[i % 7];
    i++;
    setTimeout(function () {
      logoElement.style.opacity = 100;
      logoDescElement.style.opacity = 100;
      logoDescTitleElement.style.opacity = 100;
    }, 500);
  }, 2000);
}, 5000);

setInterval(function () {
  dharmaImage.src = dharmaImages[j & 6];
  patniImage.src = patniImages[j & 6];
  j++;
}, 500);
import { pkkmbFakultasDescs, pkkmbFakultasTitles, pkkmbFakultasTimelines, pkkmbFakultasContacts, pkkmbFakultasImages } from "./pkkmb-fakultas.data.js";
import { logos, logoDescription, logoDescriptionTitles } from "./logo-pkkmb.data.js";
import { dharmaImages, patniImages } from "./mascot.data.js";
import { instagramIcon, lineIcon, whatsappIcon } from "./icons.js"

let i = 0, j = 0, k = 0, l = 0;
let isNavActive = false;

const logoElement = document.getElementById("logo-pkkmb");
const logoDescElement = document.getElementById("logo-desc");
const logoDescTitleElement = document.getElementById("logo-desc-title");
const dharmaImage = document.getElementById("dharma-image");
const patniImage = document.getElementById("patni-image");
const heroBackground = document.getElementById("hero-bg");
const pkkmbFakultasImage = document.getElementById("pkkmb-fakultas-image");
const pkkmbFakultasTitle = document.getElementById("pkkmb-fakultas-title")
const pkkmbFakultasDesc = document.getElementById("pkkmb-fakultas-desc");
const pkkmbFakultasContact = document.getElementById("pkkmb-fakultas-contacts");
const pkkmbFakultasTimeline = document.getElementById("pkkmb-fakultas-timeline");
const pkkmbNextButton = document.getElementById("pkkmb-next");
const pkkmbPrevButton = document.getElementById("pkkmb-prev");
const pkkmbFakultasCard = document.getElementById("pkkmb-fakultas-card");
const navMenu = document.getElementById("nav-menu");
const navToggler = document.getElementById("nav-toggler");

const navTogglerLine1 = navToggler.childNodes[1];
const navTogglerLine2 = navToggler.childNodes[3];

navToggler.addEventListener('click', function () {
  if (!isNavActive) {
    navTogglerLine1.classList.remove("toggler-line-1-inactive")
    navTogglerLine1.classList.add("toggler-line-1-active");
    navTogglerLine2.classList.remove("toggler-line-2-inactive")
    navTogglerLine2.classList.add("toggler-line-2-active");
    navMenu.classList.remove("translate-x-[100vw]");
    navMenu.classList.add("navbar-active")

    document.body.style.overflowY = `hidden`;
  } else {
    navTogglerLine1.classList.remove("toggler-line-1-active");
    navTogglerLine1.classList.add("toggler-line-1-inactive")
    navTogglerLine2.classList.remove("toggler-line-2-active");
    navTogglerLine2.classList.add("toggler-line-2-inactive")
    navMenu.classList.add("translate-x-[100vw]");
    navMenu.classList.remove("navbar-active")

    document.body.style.overflowY = `visible`;

  }
  isNavActive = !isNavActive;
});

Number.prototype.mod = function (n) {
  "use strict";
  return ((this % n) + n) % n;
};

if (logoElement) {
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
}

if (dharmaImage) {
  setInterval(function () {
    dharmaImage.src = dharmaImages[j & 6];
    patniImage.src = patniImages[j & 6];
    j++;
  }, 500);
}

if (heroBackground) {
  setInterval(function () {
    setTimeout(function () {
      heroBackground.style.filter = `blur(32px)`;
      heroBackground.style.transition = `all 1s`
      heroBackground.style.transform = `scale(1.1)`;

      k++;
      setTimeout(function () {
        heroBackground.style.filter = `blur(0)`;
        heroBackground.style.transform = `scale(1)`;
        heroBackground.classList.remove(`hero-bg${k % 5}`);
        heroBackground.classList.add(`hero-bg${(k + 1) % 5}`);
      }, 1000);
    }, 3000);

  }, 4000);
}

function changePkkmbFakultasContent() {
  if (pkkmbFakultasCard) {
    let contactList = "";

    pkkmbFakultasContacts[l.mod(12)].whatsapp.forEach(function (whatsapp) {
      contactList += `
      <li>
        ${whatsappIcon}
        <a href="https://wa.me/${whatsapp.number}">
          ${whatsapp.name.length ? `${whatsapp.number} (${whatsapp.name})` : whatsapp.number}
        </a>
      </li>
    `;
    });
    pkkmbFakultasContacts[l.mod(12)].line.forEach(function (line) {
      if (line.id.length) {
        contactList += `
        <li>
          ${lineIcon}
          ${line.name.length ? `${line.id} (${line.name})` : line.id}  
        </li>
      `;
      }
    });

    const instagram = pkkmbFakultasContacts[l.mod(12)].instagram;

    instagram.forEach(function (insta) {
      contactList += `
      <li class="flex gap-1">
        ${instagramIcon}
        <a href="https://instagram.com/${insta.username}">${insta.username}</a>
        </li>
        `;
    })
    pkkmbFakultasContact.innerHTML = contactList;
    pkkmbFakultasTitle.innerHTML = pkkmbFakultasTitles[l.mod(12)]
    pkkmbFakultasDesc.innerHTML = pkkmbFakultasDescs[l.mod(12)]
    pkkmbFakultasImage.src = pkkmbFakultasImages[l.mod(12)];
    pkkmbFakultasTimeline.innerHTML = pkkmbFakultasTimelines[l.mod(12)]
  }
}
changePkkmbFakultasContent();

if (pkkmbFakultasCard) {
  pkkmbNextButton.addEventListener('click', function () {
    l++;
    pkkmbFakultasCard.style.transform = `translateX(-100vw)`;
    pkkmbFakultasCard.style.filter = `blur(4px)`;

    setTimeout(function () {
      changePkkmbFakultasContent();
      pkkmbFakultasCard.classList.remove("transition-all");
      pkkmbFakultasCard.style.transform = `translateX(100vw)`;
    }, 250)

    setTimeout(function () {
      pkkmbFakultasCard.classList.add("transition-all");
      pkkmbFakultasCard.style.transform = `translateX(0)`;
      pkkmbFakultasCard.style.filter = `blur(0)`;
    }, 300)

  });

  pkkmbPrevButton.addEventListener('click', function () {
    l--;

    pkkmbFakultasCard.style.transform = `translateX(100vw)`;
    pkkmbFakultasCard.style.filter = `blur(4px)`;

    setTimeout(function () {
      changePkkmbFakultasContent();
      pkkmbFakultasCard.classList.remove("transition-all");
      pkkmbFakultasCard.style.transform = `translateX(-100vw)`;
    }, 250)

    setTimeout(function () {
      pkkmbFakultasCard.classList.add("transition-all");
      pkkmbFakultasCard.style.transform = `translateX(0)`;
      pkkmbFakultasCard.style.filter = `blur(0)`;
    }, 300)

  })
}
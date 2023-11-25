const media = [
  { src: "./hasan gambar/dicoding.png", alt: "DICODING" },
  { src: "./hasan gambar/myskill.png", alt: "MYSKILL" },
  { src: "./hasan gambar/skilvul.png", alt: "SKILVUL" },
  { src: "./hasan gambar/dev google.png", alt: "GOOGLE DEVELOPER STUDENT CLUBS" },
  { src: "./hasan gambar/codepolitan.png", alt: "CODEPOLITAN", },
  { src: "./hasan gambar/deaftodev.png", alt: "DEAF TO DEV" },
  { src: "./hasan gambar/duniacoding.png", alt: "DUNIA CODING" },
  { src: "./hasan gambar/idcamp.png", alt: "IDcamp" },
  { src: "./hasan gambar/digital.png", alt: "DIGITAL TALENT SCHOLARSHIP" },
  { src: "./hasan gambar/cloudeka.png", alt: "CLOUDEKA DIGISCHOOL" },
  { src: "./hasan gambar/udacity.png", alt: "UDACITY" },
  { src: "./hasan gambar/ayobermimpi.png", alt: "AYO BERMIMPI" },
  { src: "./hasan gambar/difabel.png", alt: "DIFFABLE ACADEMY" },
];

const projects = [
  {
    title: "belajar pemrogramar untuk pemula",
    description:
      "saya membuat web site dengan aplikasi Visual Code Studio ",
    link: "https://www.dicoding.com/users/rahmathasan7/academies",
    image: "./hasan gambar/coding pemula.png",
  },
  {
    title: "Belajar membuat Aplikasi menggunakan DOM dan Web Stroge",
    description: "saya belajar membuat aplikasi dengan DOM dan Web Stroge bersama IDCamp Dicoding",
    link: "https://www.dicoding.com/users/rahmathasan7/academies",
    image: "./hasan gambar/bookapp.png",
  },
  {
    title: "Membuat aplikasi ",
    description: "aplikasi web dengan ES6, Custom Element, NPM, Module Bundler dan AJAX pertama yang saya buat.",
    link: "https://www.dicoding.com/users/rahmathasan7/academies",
    image: "./hasan gambar/ajax.png",
  },
  {
    title: "Mengikuti Acara Cyber-Smart: Learning, Protecting, and Thriving in the Digital Era",
    description:
      "Dalam era digital yang terus berkembang, kesadaran tentang cybersecurity sangat penting untuk kita pahami dan pelajari. Didukung dengan laporan National Cyber Security Index (NCSI) yang mencatat, skor indeks keamanan siber Indonesia berada di peringkat ke-3 terendah di antara negara-negara G20.",
    link: "https://www.dicoding.com/users/rahmathasan7/academies",
    image: "./hasan gambar/cyber.png",
  },
  {
    title: "Tech Talk #4 - The Opportunity of a Digital World",
    description: "Mengusung tagline Accelerate Your New Jobs, Dicoding Career Fair tahun ini hadir dengan fokus utama membantu mempercepat industri teknologi memperoleh tenaga kerja yang berkualitas, terampil, dan profesional. Hal ini tentunya tak terlepas dari misi Dicoding untuk mengakselerasi transisi Indonesia menuju dunia digital melalui pendidikan teknologi yang mentransformasi kehidupan.",
    link: "https://www.dicoding.com/users/rahmathasan7/academies",
    image: "./hasan gambar/44.png",
  },
  {
    title: "Machine Learning | Meramal Masa Depan Menggunakan Time Series",
    description: "Dicoding Developer Coaching kali ini akan membahas materi dan pertanyaan seputar Machine Learning Developer dengan tema Meramal Masa Depan Menggunakan Time Series",
    link: "https://www.dicoding.com/users/rahmathasan7/academies",
    image: "./hasan gambar/14.png",
  },
  {
    title: "Membangun Masa Depan Karier Digital yang Inklusif",
    description: "IDCamp Virtual Roadshow 2023 adalah sebuah acara yang dirancang untuk menjembatani kesenjangan antara kebutuhan industri terhadap talenta digital berkualitas dan kesiapan para calon talenta digital khususnya untuk teman-teman penyandang disabilitas. Tema acara ini adalah Membangun Masa Depan Karier Digital yang Inklusif",
    link: "https://www.dicoding.com/users/rahmathasan7/academies",
    image: "./hasan gambar/tuli.png",
  },
  {
    title: "akan bergabung dengan cloudeka digischool",
    description: "Saya pertama kali mendaftarkan Cloudeka Digischool dan mencoba belajar hal yang baru",
    link: "https://www.dicoding.com/users/rahmathasan7/academies",
    image: "./hasan gambar/bannercloudeka.png",
  },
];
const listElement = document.querySelector(".list");
media.forEach((image) => {
  const listItem = document.createElement("div");
  listItem.classList.add("list_item");
  const imgElement = document.createElement("img");
  imgElement.src = image.src;
  imgElement.alt = image.alt;
  listItem.appendChild(imgElement);
  listElement.appendChild(listItem);
});

const projectListElement = document.getElementById("projectList");

projects.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  const imageElement = document.createElement("img");
  imageElement.src = project.image;
  projectCard.appendChild(imageElement);

  const projectCardInfo = document.createElement("div");
  projectCardInfo.classList.add("project-card-info");

  const projectTitle = document.createElement("h3");
  projectTitle.textContent = project.title;
  projectCardInfo.appendChild(projectTitle);

  const projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;
  projectCardInfo.appendChild(projectDescription);

  const projectLinkList = document.createElement("div");
  projectLinkList.classList.add("project-link-list");

  const projectLink = document.createElement("a");
  projectLink.href = project.link;
  projectLink.classList.add("project-link");

  const githubIcon = document.createElement("img");
  githubIcon.src = "./hasan gambar/dicoding.png";
  projectLink.appendChild(githubIcon);

  projectLinkList.appendChild(projectLink);
  projectCardInfo.appendChild(projectLinkList);

  projectCard.appendChild(projectCardInfo);
  projectListElement.appendChild(projectCard);
});
const moreButton = document.createElement("a");
moreButton.href = "https://www.dicoding.com/users/rahmathasan7/academies";
moreButton.classList.add("more-button");
moreButton.textContent = "Buka Web Dicoding Saya";
projectListElement.appendChild(moreButton);


const schoolURLs = [
  "../static/IndexPage/img/LXS/school/Barnard.png",
  "../static/IndexPage/img/LXS/school/Bentley.png",
  "../static/IndexPage/img/LXS/school/BC.png",
  "../static/IndexPage/img/LXS/school/BU.png",
  "../static/IndexPage/img/LXS/school/CMU.png",
  "../static/IndexPage/img/LXS/school/CMC.jpg",
  "../static/IndexPage/img/LXS/school/Cornell.png",
  "../static/IndexPage/img/LXS/school/Emerson.png",
  "../static/IndexPage/img/LXS/school/Emory.png",
  "../static/IndexPage/img/LXS/school/HMC.png",
  "../static/IndexPage/img/LXS/school/NYU.png",
  "../static/IndexPage/img/LXS/school/Northwestern.png",
  "../static/IndexPage/img/LXS/school/Pomona.png",
  "../static/IndexPage/img/LXS/school/TuftsU.jpg",
  "../static/IndexPage/img/LXS/school/Tulane.png",
  "../static/IndexPage/img/LXS/school/UCB.png",
  "../static/IndexPage/img/LXS/school/UNC.png",
  "../static/IndexPage/img/LXS/school/UChicago.png",
  "../static/IndexPage/img/LXS/school/UGeorgia.png",
  "../static/IndexPage/img/LXS/school/UMichigan.png",
  "../static/IndexPage/img/LXS/school/UPenn.png",
  "../static/IndexPage/img/LXS/school/USC.png",
  "../static/IndexPage/img/LXS/school/UW-Madison.png",
  "../static/IndexPage/img/LXS/school/Villanova.jpg",
  "../static/IndexPage/img/LXS/school/Wesleyan.png",
];

const companyURLs = [
  "../static/IndexPage/img/LXS/company/Alibaba.png",
  "../static/IndexPage/img/LXS/company/ByteDance.png",
  "../static/IndexPage/img/LXS/company/Deloitte.png",
  "../static/IndexPage/img/LXS/company/Goldman Sachs.png",
  "../static/IndexPage/img/LXS/company/Google.png",
  "../static/IndexPage/img/LXS/company/Hana.png",
  "../static/IndexPage/img/LXS/company/InterMF.jpg",
  "../static/IndexPage/img/LXS/company/Info.jpg",
  "../static/IndexPage/img/LXS/company/Lyft.png",
  "../static/IndexPage/img/LXS/company/McKinseyCompany.png",
  "../static/IndexPage/img/LXS/company/Milliman.png",
  "../static/IndexPage/img/LXS/company/Snap.png",
  "../static/IndexPage/img/LXS/company/Truist.png",
];

// 学校 Logo Section
const schoolSection = document.querySelector("#schoolLogoSection2");
const sl = schoolURLs.length;
const schoolRowNum = sl % 4 === 0 ? Math.floor(sl / 4) : Math.floor(sl / 4) + 1;

for (let i = 0; i < schoolRowNum; i++) {
  const logoRow = document.createElement("div");
  logoRow.classList.add("row", "logo-row");
  for (let j = 0; j < 4; j++) {
    const col = document.createElement("div");
    col.classList.add("col-6", "col-md-3", "SCimg-parent");
    logoRow.append(col);
    if (!schoolURLs.length) {
      break;
    } else {
      const img = document.createElement("img");
      img.src = schoolURLs.shift();
      img.classList.add("SCimg-mp");
      col.append(img);
    }
  }
  schoolSection.append(logoRow);
}
const schoolDesc = document.createElement("p")
schoolDesc.classList.add("text-center", "logo-row")
schoolDesc.innerText = "练习生学校分布（按学校首字母排列）"
schoolSection.append(schoolDesc)
const firstSchoolRow = schoolSection.querySelector(".logo-row")
firstSchoolRow.classList.remove("logo-row")


// 公司 Logo Section
const companySection = document.querySelector("#companyLogoSection2");
const cl = companyURLs.length
const companyRowNum = cl % 4 === 0 ? Math.floor(cl / 4) : Math.floor(cl / 4) + 1;
for (let i = 0; i < companyRowNum; i++) {
  const logoRow = document.createElement("div");
  logoRow.classList.add("row", "logo-row");
  for (let j = 0; j < 4; j++) {
    const col = document.createElement("div");
    col.classList.add("col-6", "col-md-3", "SCimg-parent");
    logoRow.append(col);
    if (!companyURLs.length) {
      break;
    } else {
      const img = document.createElement("img");
      img.src = companyURLs.shift();
      img.classList.add("SCimg-mp");
      col.append(img);
    }
  }
  companySection.append(logoRow);
}
const companyDesc = document.createElement("p")
companyDesc.classList.add("text-center", "logo-row")
companyDesc.innerText = "领队公司分布（按公司首字母排列）"
companySection.append(companyDesc)
const firstCompanyRow = companySection.querySelector(".logo-row")
firstCompanyRow.classList.remove("logo-row")


// Slideshow (works for 4 slideshow windows)
let slideIndex = [1, 1, 1, 1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}

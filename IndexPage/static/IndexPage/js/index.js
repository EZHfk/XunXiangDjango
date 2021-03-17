const schoolURLs = [
  "static/IndexPage/img/LXS/school/Barnard.png",
  "static/IndexPage/img/LXS/school/Bentley.png",
  "static/IndexPage/img/LXS/school/BC.png",
  "static/IndexPage/img/LXS/school/BU.png",
  "static/IndexPage/img/LXS/school/CMU.png",
  "static/IndexPage/img/LXS/school/CMC.jpg",
  "static/IndexPage/img/LXS/school/Cornell.png",
  "static/IndexPage/img/LXS/school/Emerson.png",
  "static/IndexPage/img/LXS/school/Emory.png",
  "static/IndexPage/img/LXS/school/HMC.png",
  "static/IndexPage/img/LXS/school/mainpage/mountHcollege.png",
  "static/IndexPage/img/LXS/school/NYU.png",
  "static/IndexPage/img/LXS/school/Northwestern.png",
  "static/IndexPage/img/LXS/school/Pomona.png",
  "static/IndexPage/img/LXS/school/TuftsU.jpg",
  "static/IndexPage/img/LXS/school/Tulane.png",
  "static/IndexPage/img/LXS/school/UCB.png",
  "static/IndexPage/img/LXS/school/mainpage/ucsb.jpg",
  "static/IndexPage/img/LXS/school/UNC.png",
  "static/IndexPage/img/LXS/school/UChicago.png",
  "static/IndexPage/img/LXS/school/UGeorgia.png",
  "static/IndexPage/img/LXS/school/mainpage/iowa.png",
  "static/IndexPage/img/LXS/school/UMichigan.png",
  "static/IndexPage/img/LXS/school/UPenn.png",
  "static/IndexPage/img/LXS/school/USC.png",
  "static/IndexPage/img/LXS/school/UW-Madison.png",
  "static/IndexPage/img/LXS/school/Villanova.jpg",
  "static/IndexPage/img/LXS/school/Wesleyan.png",
];

const companyURLs = [
  "static/IndexPage/img/LXS/company/Alibaba.png",
  "static/IndexPage/img/LXS/company/mainpage/BCG.png",
  "static/IndexPage/img/LXS/company/ByteDance.png",
  "static/IndexPage/img/LXS/company/Deloitte.png",
  "static/IndexPage/img/LXS/company/mainpage/godaddy.png",
  "static/IndexPage/img/LXS/company/Goldman Sachs.png",
  "static/IndexPage/img/LXS/company/Google.png",
  "static/IndexPage/img/LXS/company/Hana.png",
  "static/IndexPage/img/LXS/company/InterMF.jpg",
  "static/IndexPage/img/LXS/company/Info.jpg",
  "static/IndexPage/img/LXS/company/Lyft.png",
  "static/IndexPage/img/LXS/company/McKinseyCompany.png",
  "static/IndexPage/img/LXS/company/mainpage/Microsoft.png",
  "static/IndexPage/img/LXS/company/Milliman.png",
  "static/IndexPage/img/LXS/company/mainpage/PwC.png",
  "static/IndexPage/img/LXS/company/Snap.png",
  "static/IndexPage/img/LXS/company/mainpage/tripadvisor.png",
  "static/IndexPage/img/LXS/company/Truist.png",
  "static/IndexPage/img/LXS/company/mainpage/Tuixiang.png",
  "static/IndexPage/img/LXS/company/mainpage/WIstateInvestmentBoard.png",
  "static/IndexPage/img/LXS/company/mainpage/Zhenfund.png",
];

const schoolSection = document.querySelector("#schoolLogoSection");
const sl = schoolURLs.length;
const schoolRowNum = sl % 3 === 0 ? Math.floor(sl / 3) : Math.floor(sl / 3) + 1;

for (let i = 0; i < schoolRowNum; i++) {
  const logoRow = document.createElement("div");
  logoRow.classList.add("row", "logo-row");
  for (let j = 0; j < 3; j++) {
    const col = document.createElement("div");
    col.classList.add("col-6", "col-md-4", "SCimg-parent");
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

const companySection = document.querySelector("#companyLogoSection");
const cl = companyURLs.length
const companyRowNum = cl % 3 === 0 ? Math.floor(cl / 3) : Math.floor(cl / 3) + 1;
for (let i = 0; i < companyRowNum; i++) {
  const logoRow = document.createElement("div");
  logoRow.classList.add("row", "logo-row");
  for (let j = 0; j < 3; j++) {
    const col = document.createElement("div");
    col.classList.add("col-6", "col-md-4", "SCimg-parent");
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

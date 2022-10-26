const projects = [
  {
    id: 1,
    name: "Restaurant page",
    img: "images/Restaurant-page.png",
    websiteLink: "",
    githubLink: "https://github.com/AlexanderLucasWolf/Restaurant-Page",
    cssIcon: '<ion-icon name="logo-css3" class="css-icon" ></ion-icon>',
    jsIcon: '<ion-icon name="logo-javascript" class="js-icon" ></ion-icon>',
    reactIcon: '',
    vueIcon: '',
    cssOnly: false,
    js: true,
    react: false,
    vue: false,
  },

  {
    id: 2,
    name: "Czuprin Website",
    img: "images/Czuprin-website.png",
    websiteLink: "",
    githubLink: "",
    cssIcon: '<ion-icon name="logo-css3" class="css-icon" ></ion-icon>',
    jsIcon: '<ion-icon name="logo-javascript" class="js-icon" ></ion-icon>',
    reactIcon: '',
    vueIcon: '',
    cssOnly: false,
    js: true,
    react: false,
    vue: false,
  },

  {
    id: 3,
    name: "Watch Shopsite",
    img: "images/The-Ticker.png",
    websiteLink: "",
    githubLink: "https://github.com/AlexanderLucasWolf/Simple-Shopsite-Landing-Page-using-Vue",
    cssIcon: '<ion-icon name="logo-css3" class="css-icon" ></ion-icon>',
    jsIcon: '<ion-icon name="logo-javascript" class="js-icon" ></ion-icon>',
    reactIcon: '',
    vueIcon: '<ion-icon name="logo-vue" class="vue-icon" ></ion-icon>',
    cssOnly: false,
    js: true,
    react: false,
    vue: true,
  },

  {
    id: 4,
    name: "My Website",
    img: "images/My-website.png",
    websiteLink: "https://www.alexanderlucaswolf.com",
    githubLink: "",
    cssIcon: '<ion-icon name="logo-css3" class="css-icon" ></ion-icon>',
    jsIcon: '<ion-icon name="logo-javascript" class="js-icon" ></ion-icon>',
    reactIcon: '',
    vueIcon: '',
    cssOnly: false,
    js: true,
    react: false,
    vue: false,
  },

  {
    id: 5,
    name: "Czuprin Webapp",
    img: "images/Czuprin-webapp.png",
    websiteLink: "#",
    githubLink: "",
    cssIcon: '<ion-icon name="logo-css3" class="css-icon" ></ion-icon>',
    jsIcon: '',
    reactIcon: '',
    vueIcon: '',
    cssOnly: true,
    js: false,
    react: false,
    vue: false,
  },

  {
    id: 6,
    name: "Manage Landing Page",
    img: "images/Manage-Landing-Page.png",
    websiteLink: "",
    githubLink: "https://github.com/AlexanderLucasWolf/Manage-Landing-Page",
    cssIcon: '<ion-icon name="logo-css3" class="css-icon" ></ion-icon>',
    jsIcon: '<ion-icon name="logo-javascript" class="js-icon" ></ion-icon>',
    reactIcon: '',
    vueIcon: '',
    cssOnly: false,
    js: true,
    react: false,
    vue: false,
  },

  {
    id: 7,
    name: "Developer Akademie",
    img: "images/Developer-Akademie.png",
    websiteLink: "",
    githubLink: "",
    cssIcon: '<ion-icon name="logo-css3" class="css-icon" ></ion-icon>',
    jsIcon: '',
    reactIcon: '',
    vueIcon: '',
    cssOnly: true,
    js: false,
    react: false,
    vue: false,
  },

  {
    id: 8,
    name: "Abstract",
    img: "images/Abstract.png",
    websiteLink: "",
    githubLink: "https://github.com/AlexanderLucasWolf/WebsiteCloningAbstract",
    cssIcon: '<ion-icon name="logo-css3" class="css-icon" ></ion-icon>',
    jsIcon: '',
    reactIcon: '',
    vueIcon: '',
    cssOnly: true,
    js: false,
    react: false,
    vue: false,
  },

  {
    id: 9,
    name: "Rock Paper Scissor",
    img: "images/schere-stein-papier.png",
    websiteLink: "",
    githubLink: "https://github.com/AlexanderLucasWolf/Schere-Stein-Paper",
    cssIcon: '<ion-icon name="logo-css3" class="css-icon" ></ion-icon>',
    jsIcon: '<ion-icon name="logo-javascript" class="js-icon" ></ion-icon>',
    reactIcon: '',
    vueIcon: '',
    cssOnly: false,
    js: true,
    react: false,
    vue: false,
  },

  {
    id: 10,
    name: "My Projects",
    img: "images/My-Projects.png",
    websiteLink: "",
    githubLink: "",
    cssIcon: '<ion-icon name="logo-css3" class="css-icon" ></ion-icon>',
    jsIcon: '<ion-icon name="logo-javascript" class="js-icon" ></ion-icon>',
    reactIcon: '',
    vueIcon: '',
    cssOnly: false,
    js: true,
    react: false,
    vue: false,
  },

]

let dropdown = document.querySelector(".dropdown-menu");
const article = document.querySelector(".grid");

function dropdownAll(){
  document.querySelector(".dropdown-menu-text-box").value = `Show All    (Total: ${projects.length})`
  displayProjects = " "
  article.innerHTML = displayProjects;
  for (var i = 0; i < projects.length; i++) {
      console.log(projects[i])
      displayProjects += `<article class="project | ">
          <img class="project-image" src="${projects[i].img}">
          <div class="project-information">
          <div class="made-with">
            ${projects[i].cssIcon}
            ${projects[i].jsIcon}
            ${projects[i].reactIcon}
            ${projects[i].vueIcon}
          </div>
          <div class="inner-grid">
            <div class="inner-grid-element"><a class="inner-grid-element-text" href="${projects[i].websiteLink}">Visit</a></div>
            <div class="inner-grid-element"><a class="inner-grid-element-text" href="${projects[i].githubLink}">GitHub</a></div>
          </div>
          </div>
        </article>`;

      article.innerHTML = displayProjects;
  }
}

function dropdownCSS(){
  document.querySelector(".dropdown-menu-text-box").value = "CSS only"
  displayProjects = " "
  article.innerHTML = displayProjects;
  for (var i = 0; i < projects.length; i++) {
    if (projects[i].cssOnly == true) {
      console.log(projects[i])
      displayProjects += `<article class="project | ">
          <img class="project-image" src="${projects[i].img}">
          <div class="project-information">
          <div class="made-with">
            ${projects[i].cssIcon}
            ${projects[i].jsIcon}
            ${projects[i].reactIcon}
            ${projects[i].vueIcon}
          </div>
          <div class="inner-grid">
            <div class="inner-grid-element"><a class="inner-grid-element-text" href="${projects[i].websiteLink}">Visit</a></div>
            <div class="inner-grid-element"><a class="inner-grid-element-text" href="${projects[i].githubLink}">GitHub</a></div>
          </div>
          </div>
        </article>`;
      };

      article.innerHTML = displayProjects;
  }
  }

function dropdownJS(){
  document.querySelector(".dropdown-menu-text-box").value = "Javascript"
  displayProjects = " "
  article.innerHTML = displayProjects;
  for (var i = 0; i < projects.length; i++) {
    if (projects[i].js == true) {
      console.log(projects[i])
      displayProjects += `<article class="project | ">
          <img class="project-image" src="${projects[i].img}">
          <div class="project-information">
          <div class="made-with">
            ${projects[i].cssIcon}
            ${projects[i].jsIcon}
            ${projects[i].reactIcon}
            ${projects[i].vueIcon}
          </div>
          <div class="inner-grid">
            <div class="inner-grid-element"><a class="inner-grid-element-text" href="${projects[i].websiteLink}">Visit</a></div>
            <div class="inner-grid-element"><a class="inner-grid-element-text" href="${projects[i].githubLink}">GitHub</a></div>
          </div>
          </div>
        </article>`;
      };

      article.innerHTML = displayProjects;
  }
}

function dropdownReact(){
  document.querySelector(".dropdown-menu-text-box").value = "ReactJS"
  displayProjects = " "
  article.innerHTML = displayProjects;
  for (var i = 0; i < projects.length; i++) {
    if (projects[i].react == true) {
      console.log(projects[i])
      displayProjects += `<article class="project | ">
          <img class="project-image" src="${projects[i].img}">
          <div class="project-information">
          <div class="made-with">
            ${projects[i].cssIcon}
            ${projects[i].jsIcon}
            ${projects[i].reactIcon}
            ${projects[i].vueIcon}
          </div>
          <div class="inner-grid">
            <div class="inner-grid-element"><a class="inner-grid-element-text" href="${projects[i].websiteLink}">Visit</a></div>
            <div class="inner-grid-element"><a class="inner-grid-element-text" href="${projects[i].githubLink}">GitHub</a></div>
          </div>
          </div>
        </article>`;
      };

      article.innerHTML = displayProjects;
  }
}

function dropdownVue(){
  document.querySelector(".dropdown-menu-text-box").value = "Vue"
  displayProjects = " "
  article.innerHTML = displayProjects;
  for (var i = 0; i < projects.length; i++) {
    if (projects[i].vue == true) {
      console.log(projects[i])
      displayProjects += `<article class="project | ">
          <img class="project-image" src="${projects[i].img}">
          <div class="project-information">
          <div class="made-with">
            ${projects[i].cssIcon}
            ${projects[i].jsIcon}
            ${projects[i].reactIcon}
            ${projects[i].vueIcon}
          </div>
          <div class="inner-grid">
            <div class="inner-grid-element"><a class="inner-grid-element-text" href="${projects[i].websiteLink}">Visit</a></div>
            <div class="inner-grid-element"><a class="inner-grid-element-text" href="${projects[i].githubLink}">GitHub</a></div>
          </div>
          </div>
        </article>`;
      };

      article.innerHTML = displayProjects;
  }
}

dropdown.onclick = function(){
  dropdown.classList.toggle("active");
}

dropdownAll();

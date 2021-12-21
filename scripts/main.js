/* window.addEventListener("resize", function (e) {
    const brWatcher = document.getElementById("breakpoint-watcher");
    if (brWatcher) {
      brWatcher.innerHTML = `${window.innerWidth} x ${
        window.innerHeight
      } <i>(${breakpoint(window.innerWidth)})</i>`;
    }
  });
  
  function breakpoint(width) {
    if (width < 576) {
      return "xs";
    } else if (width < 768) {
      return "sm";
    } else if (width < 992) {
      return "md";
    } else if (width < 1200) {
      return "lg";
    } else if (width < 1400) {
      return "xl";
    } else {
      return "xxl";
    }
} */

const news = [
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "esportes",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "esportes",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "esportes",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "esportes",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "saude",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "saude",
  },
  {
    titulo: "Notícia bombástica",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum nihil dignissimos odio eum?",
    img: "./img/draw2.png",
    categoria: "saude",
  },
];

class NewsBuilder {
  build(categoria){
    let newsHtml = "";
    news
    .filter((news) => news.categoria === categoria )
    .forEach((news)=> {
      newsHtml += 
              `
                <div czlass="col-md-6 col-lg-4 col-xl-3 mt-3">
                  <div class="card" >
                    <div class="cardHeader" >
                        <img src="${news.img}" class="img-fluid">
                    </div>
                    <div class="cardBody">
                        <h5 class="cardTitle">${news.titulo}</h5>
                        <p class="cardText">${news.desc}</p>
                        <button class="btn btn-primary" onclick="openModel('${news.img}', '${news.titulo}', '${news.desc}')">Read more!</button>
                    </div>
                  </div>
                </div>
              `
    });
    return newsHtml;
  }
}

function openModel(img, title, desc){
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  const bodyNews = document.getElementById("modal-noticia");
  
  bodyNews.innerHTML = `<img src="${img}" class="img-fluid"/> <h2>${title}</h2><p>${desc}</p>`;
  console.log(bodyNews);
  modal.show();

}

function listNewsBuild(){
  const listNews = new NewsBuilder();

const gridSports = document.getElementById("gridSports");
const gridSaude = document.getElementById("gridSaude");

if(gridSports) gridSports.innerHTML = listNews.build("esportes");
if(gridSaude) gridSaude.innerHTML = listNews.build("saude");

}

function openToast(){
  const el = document.getElementById("liveToast");
  if(el){
    const toast = new bootstrap.Toast(el, {autohide: false});
    toast.show();
  }
  
}

listNewsBuild();
openToast();

const addNews = document.forms.add_noticia;

if(addNews){
  addNews.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = addNews.title.value;
    const desc = addNews.desc.value;
    const categoria = addNews.categoria.value;
    const img = addNews.img.files[0];

    console.log(addNews);

    let reader = new FileReader();

    reader.onload = function (e){
      news.push({
        titulo: title,
        desc: desc,
        categoria: categoria,
        img: e.target.result,
      });

      listNewsBuild();   
     
    }
    reader.readAsDataURL(img);
  });
}




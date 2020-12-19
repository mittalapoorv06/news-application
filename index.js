// f74440ce4ee04db6bd29ce4d6c144f35
//grab news div
let news = document.getElementById("news");
let key = "f74440ce4ee04db6bd29ce4d6c144f35";
let country = "google-news-in";
//create ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  `GET`,
  `http://newsapi.org/v2/top-headlines?sources=${country}&apiKey=${key}`,
  true
);
//what to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let article=json.articles;
    let html="";
    console.log(article);
    article.forEach(function(element,index){
      
        let card = `<div class="card">
        <div class="card-header" id="heading${index}">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
             <b>Breaking News${index+1}</b> ${element["title"]}
            </button>
          </h2>
        </div>
    
        <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#news">
          <div class="card-body">
            ${element["content"]}.<a href=${element["url"]} target="_blank">Read more here<a>
          </div>
        </div>
      </div>`;
 html+=card
    });
    news.innerHTML=html;
  } else {
    console.log("some error occured");
  }
}



xhr.send();


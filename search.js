import css from "./search.css";
let mainWrapperDiv = document.createElement("div");
mainWrapperDiv.setAttribute("class", "mainWrapperDiv");
let searchDiv = document.createElement("div");
searchDiv.setAttribute("class", "searchDiv");
searchDiv.innerHTML = `<input type="text" class="searchBar" placeholder="Enter your search term here..."/>
    <button class="searchButton"><i class="fa fa-search"></i> Search</button>`;
mainWrapperDiv.appendChild(searchDiv);
document.body.replaceChild(mainWrapperDiv, document.body.children[0]);
let contentWrapperDiv = document.createElement("div");
contentWrapperDiv.setAttribute("class", "contentWrapperDiv");
const searchBar = document.querySelector(".searchBar");
searchBar.addEventListener("keydown", e => import(/* webpackChunkName: "searchFunction" */ './searchFunction').then(module => {

  const searchFunction = module.default;

  if(e.keyCode === 13)
    searchFunction(searchBar).then((data)=>{
      result = data;
      if(data.items)
        displayCards();
      else
        displayError();
    });

}));
const searchButton = document.querySelector(".searchButton");
let result;

searchButton.addEventListener("click",  e => import(/* webpackChunkName: "searchFunction" */ './searchFunction').then(module => {

  const searchFunction = module.default;

  searchFunction(searchBar).then((data)=>{
    result = data;
    if(data.items)
      displayCards();
    else
      displayError();
  });

}));

let numberOfCards = 15;

function displayCards() {
  console.log(result);

  for(let i= 0;i<result.items.length;i++){
    let element = result.items[i];
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = `<img src="${element.snippet.thumbnails.medium.url}"/>`;
    let cardDetails = document.createElement("div");
    cardDetails.setAttribute("class", "cardDetails");
    cardDetails.innerHTML =
      "<p>" +
      element.snippet.title +
      "</p>" +
      "<p>" +
      element.snippet.description +
      "</p>" +
      "<p>" +
      new Date(element.snippet.publishTime).toUTCString() +
      "</p>" +
      "<p>" +
      element.snippet.channelTitle +
      "</p>";
    card.appendChild(cardDetails);
    contentWrapperDiv.appendChild(card);
  }
  if(mainWrapperDiv.children[1]){
    mainWrapperDiv.replaceChild(contentWrapperDiv,mainWrapperDiv.children[1]);
  }
  else{
    mainWrapperDiv.appendChild(contentWrapperDiv);
  }
}

function displayError(err){
  console.log(result);
  let p = document.createElement("p");
  p.setAttribute("class","errorMessage");
  p.innerHTML = err;
  if(mainWrapperDiv.children[1])
  mainWrapperDiv.replaceChild(p,mainWrapperDiv.children[1]);
  else
  mainWrapperDiv.appendChild(p);
  let navigationDiv = document.querySelector(".navigationDiv");
  if(navigationDiv)
    navigationDiv.parentNode.removeChild(navigationDiv);
}

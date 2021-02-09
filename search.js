mainWrapperDiv = document.createElement("div");
mainWrapperDiv.setAttribute("class", "mainWrapperDiv");
searchDiv = document.createElement("div");
searchDiv.setAttribute("class", "searchDiv");
searchDiv.innerHTML = `<input type="text" class="searchBar" placeholder="Enter your search term here..."/>
    <button class="searchButton"><i class="fa fa-search"></i> Search</button>`;
mainWrapperDiv.appendChild(searchDiv);
document.body.replaceChild(mainWrapperDiv, document.body.children[0]);
contentWrapperDiv = document.createElement("div");
contentWrapperDiv.setAttribute("class", "contentWrapperDiv");
const searchBar = document.querySelector(".searchBar");
const searchButton = document.querySelector(".searchButton");
let result;
const searchFunction = async () => {
  let queryText = searchBar.value;
  console.log(queryText);
  await fetch(
    "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCk2ddyZVjqWUiLlsk5H4A3KXXLrLygsoc&type=video&part=snippet&maxResults=15&q=" +
      queryText
  )
    .then((response) => response.json())
    .then((data) => {
      result = data;
      displayCards();
    })
    .catch((err) => {
      result = err;
      displayError(err);
    });
};
searchButton.addEventListener("click", searchFunction);

let pageIndex = 0;
let numberOfCards = 3;

function displayCards(oldAnimation,newAnimation) {
  numberOfCards = parseInt(document.querySelector(".mainWrapperDiv").offsetWidth/340);
  console.log(numberOfCards);
  let cards = document.querySelectorAll(".card");
  if(cards[0]){
    
      [...cards].forEach((p) => {
        p.parentNode.removeChild(p);})
    }

  
  for(let i= pageIndex*numberOfCards;i<pageIndex*numberOfCards+numberOfCards&&i<result.items.length;i++){
    let element = result.items[i];
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    if(newAnimation)
    card.classList.add(newAnimation);
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
    
    displayNavDiv();
  }
  else{

    mainWrapperDiv.appendChild(contentWrapperDiv);
    displayNavDiv();
  }
}

function nextHandler(){
  if(pageIndex+1<Math.ceil(15/numberOfCards)){
  pageIndex= pageIndex+1;
  displayCards(null,'new-item');
  }
}

function prevHandler(){
  if(pageIndex>0){
    pageIndex = pageIndex-1;
    displayCards(null,'new-itemP');
  }
}

function displayNavDiv(){
  if(!mainWrapperDiv.children[2]){
    
  let navigationDiv = document.createElement("div");
  navigationDiv.setAttribute("class", "navigationDiv");
  navigationDiv.innerHTML = `<a href="#" class="previous round">&#8249;</a>
      <a href="#" class="pageNumber round">0</a>
      <a href="#" class="next round">&#8250;</a>`;
  mainWrapperDiv.appendChild(navigationDiv);
  let next = document.querySelector(".next");
  next.addEventListener("click",nextHandler);
  let previous = document.querySelector(".previous");
  previous.addEventListener("click",prevHandler);
  let pageNumber = document.querySelector(".pageNumber");
  pageNumber.innerHTML = pageIndex+1;

  }
  else{
    let pageNumber = document.querySelector(".pageNumber");
    pageNumber.innerHTML = pageIndex+1;
  }
}

function displayError(err){
  let p = document.createElement("p");
  p.innerHTML = err;
  if(mainWrapperDiv.children[1])
  mainWrapperDiv.replaceChild(p,mainWrapperDiv.children[1]);
  else
  mainWrapperDiv.appendChild(p);
}

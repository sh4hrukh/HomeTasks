import 'whatwg-fetch';
export default async function searchFunction(searchBar,displayCards,displayError) {
    let queryText = searchBar.value;
    let result;
    console.log(queryText);
    await window.fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCk2ddyZVjqWUiLlsk5H4A3KXXLrLygsoc&type=video&part=snippet&maxResults=15&q=" +
        queryText
    )
      .then((response) => response.json())
      .then((data) => {
        result =  data;
      })
      .catch((err) => {
        result = err;
      });
      return result;
  };
export function createPageElement() {
  const actualPageContainer = document.createElement("div");
  actualPageContainer.classList.add("actual-page");
  return actualPageContainer;
}

export function createOneNewsEl(
  newsTitle,
  newsLink,
  newsHumanTime,
  newsAuthor,
  PageEl
) {
  // DIV FOR 1 NEWS CREATE
  const oneNewsElement = document.createElement("div");
  oneNewsElement.classList.add("one-news-div");
  // DIV CONTAINER FOR DETAILS
  const detailTopBoxElement = document.createElement("div");
  detailTopBoxElement.classList.add("detail-div-top");

  // TIME SECTION
  const timeEl = document.createElement("div");
  timeEl.classList.add("news-time");

  const timeElp = document.createElement("p");
  timeElp.classList.add("ptime");

  let str = "Masteringjs.ioF";
  str.slice(0, -1); // Masteringjs.io
  timeElp.innerHTML = newsHumanTime;
  timeEl.appendChild(timeElp);
  detailTopBoxElement.appendChild(timeEl);

  // LINK SECTION
  const divLink = document.createElement("div");
  divLink.classList.add("div-link");
  const newsLinkEl = document.createElement("a");
  newsLinkEl.id = "url-value";
  newsLinkEl.href = newsLink;
  newsLinkEl.target = "blank";
  if (!newsLink) {
    const pNewsForNotLinked = document.createElement("p");
    pNewsForNotLinked.innerHTML = "n" + "&#47" + "a";
    divLink.appendChild(pNewsForNotLinked);
  } else {
    newsLinkEl.innerHTML = "source";
    divLink.appendChild(newsLinkEl);
  }
  detailTopBoxElement.appendChild(divLink);

  // SECTION FOR 1 NEWS TITLE-CREATE
  const oneNewsTitleContainer = document.createElement("div");
  oneNewsTitleContainer.classList.add("one-news-title-container"); // vedere se serve questa classe altrimenti toglierla

  const newsTitleEl = document.createElement("h2");
  newsTitleEl.classList.add("news-title"); // vedere se serve questa classe altrimenti toglierla
  newsTitleEl.innerHTML = newsTitle;

  oneNewsTitleContainer.appendChild(newsTitleEl);

  /////////////////////////////////////////////////////////////////////

  // AUTHOR
  const newsAuthEl = document.createElement("p");
  newsAuthEl.classList.add("news-author");
  newsAuthEl.innerHTML = "By : " + newsAuthor;

  oneNewsElement.appendChild(detailTopBoxElement);
  oneNewsElement.appendChild(oneNewsTitleContainer);
  oneNewsElement.appendChild(newsAuthEl);

  PageEl.appendChild(oneNewsElement);
}

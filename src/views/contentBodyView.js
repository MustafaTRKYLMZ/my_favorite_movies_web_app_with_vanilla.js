"use-strict";

export const contentBodyView = () => {
  const contentBodyDiv = document.createElement("div");
  contentBodyDiv.classList.add("content-body");
  //left sidebar
  const leftSidebarDiv = document.createElement("div");
  leftSidebarDiv.classList.add("left-sidebar");
  //movie list sidebar
  const movieListDiv = document.createElement("div");
  movieListDiv.classList.add("movie-list");
  //bookmark list
  const bookmarkDiv = document.createElement("div");
  bookmarkDiv.classList.add("bookmark");

  //footer
  const footerDiv = document.createElement("div");
  footerDiv.classList.add("footer");
  const footerText = document.createElement("p");
  footerText.innerHTML = `<p>2024 <a href="https://github.com/MustafaTRKYLMZ">Mustafa T</a>. All rights reserved.</p>`;
  footerDiv.append(footerText);

  contentBodyDiv.append(leftSidebarDiv, movieListDiv, bookmarkDiv);

  document.body.append(contentBodyDiv);
  document.body.append(footerDiv);
};

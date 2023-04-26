// Display around 10 books.
// Display the name and isbn of each book.
// Display the number of pages in the book.
// Also display the authors of the book.
// Display the publisher name and the released date.
// Also display at least 5 characters for each book.
const title = document.createElement("h1");
title.id ="title";
title.innerText ="WEBCODE PROJECT ";
document.body.appendChild(title);

const list = document.createElement("ul");
list.id="books";
list.innerText = "";
document.body.appendChild(list);

const about = document.createElement("h3");
about.id ="about";
about.innerText =`This webcode fetch data from the API https://www.anapioficeandfire.com/api and
 displays the book names,its isbn,Number of pages, Author,release data and some characters from the books`;
document.body.appendChild(about);

 fetch("https://www.anapioficeandfire.com/api/books")
			.then(response => response.json())
			.then(data => {
                console.log(data);
				const books = data.slice(0, 10);
				const booksList = document.getElementById("books");
				books.forEach(book => {
					const listItem = document.createElement("li");
					listItem.setAttribute("id"="list")
					listItem.innerText = (`Book:  ${book.name}
                                            isbn  :${book.isbn}
                                            Number of Pages: ${book.numberOfPages}
                                            Author Name:  ${book.authors}
                                            Publisher name:${book.publisher}
                                            Release Date:  ${book.released}
											
                                            -------------------------------`

                        );
					booksList.appendChild(listItem);
				});
			})
			.catch(error => console.error(error));     
			

			function myFunction() {
				var input, filter, ul, li, a, i, txtValue;
				input = document.getElementById("myInput");
				filter = input.value.toUpperCase();
				ul = document.getElementById("books");
				li = ul.getElementsByTagName("li");
				for (i = 0; i < li.length; i++) {
					a = li[i].getElementsByClassName("page-item")[0];
					txtValue = a.textContent || a.innerText;
					if (txtValue.toUpperCase().indexOf(filter) > -1) {
						li[i].style.display = "";
					} else {
						li[i].style.display = "none";
					}
				}
			}

		
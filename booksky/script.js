var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Select cancel button
var cancelbutton = document.getElementById("cancel-popup");

cancelbutton.addEventListener("click", function(event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Select container, addbook, book-title-input, book-author-input, book-description-input
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click", function(event) {
    event.preventDefault();
    
    // Create a new div for the book entry
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");

    // Insert the book details into the div
    div.innerHTML = `
        <h1>${booktitleinput.value}</h1>
        <p><strong>Author:</strong> ${bookauthorinput.value}</p>
        <p><strong>Description:</strong> ${bookdescriptioninput.value}</p>
    `;

    // Append the new book entry to the container
    container.append(div);

    // Hide the popup overlay and box
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

    // Clear input fields for new entries
    booktitleinput.value = '';
    bookauthorinput.value = '';
    bookdescriptioninput.value = '';
});

// Add an event listener to the link to show the image and paragraph when clicked
weatherLink.addEventListener("click", function (event) {
  event.preventDefault();
  weatherImage.style.display = "block";
  weatherParagraph.style.display = "block";
});

const copyLink = document.getElementById("copy-link");

copyLink.addEventListener("click", (event) => {
  // Prevent the default link behavior
  event.preventDefault();

  // Get the email address from the data-clipboard-text attribute
  const email = copyLink.getAttribute("data-clipboard-text");

  // Create a temporary textarea element
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = email;
  document.body.appendChild(tempTextarea);

  // Select the email in the textarea
  tempTextarea.select();

  // Copy the email to the clipboard
  document.execCommand("copy");

  // Remove the textarea element
  document.body.removeChild(tempTextarea);

  // Update the link text to show that the email has been copied
  copyLink.textContent = "copied!";
});

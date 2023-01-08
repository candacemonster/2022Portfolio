// Add an event listener to the link to copy the text to the clipboard when clicked
const copyLink = document.getElementById("copy-link");

copyLink.addEventListener("click", (event) => {
  // Prevent the default link behavior
  event.preventDefault();

  // Get the text to copy from the data-clipboard-text attribute
  const textToCopy = copyLink.getAttribute("data-clipboard-text");

  // Create a temporary textarea element
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = textToCopy;
  document.body.appendChild(tempTextarea);

  // Select the text in the textarea
  tempTextarea.select();

  // Copy the text to the clipboard
  document.execCommand("copy");

  // Remove the textarea element
  document.body.removeChild(tempTextarea);

  // Update the link text to show that the text has been copied
  copyLink.textContent = "copied!";
});

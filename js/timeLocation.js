function updateTime() {
  // Create a new Date object and convert it to PST
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
  );
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Determine AM or PM suffix
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours from 24-hour to 12-hour format
  hours = hours % 12;
  // The hour '0' should be '12'
  hours = hours ? hours : 12;

  // Format the time to display as 2 digits
  const formattedTime =
    [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(":") +
    " " +
    ampm;

  // Update the time element on the page
  document.getElementById("time").textContent = formattedTime;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initialize the time display
updateTime();

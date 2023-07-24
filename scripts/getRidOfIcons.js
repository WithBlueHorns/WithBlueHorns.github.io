let isClicked = false; // Flag variable to keep track of the first click

function handleVideoClick() {
  if (!isClicked) {
    // Set the flag to true to indicate that the click has been detected
    isClicked = true;
    const elementsToDelete = document.querySelectorAll(".videoIcon");

    // Loop through the selected elements and add the fade-out class to trigger the transition
    elementsToDelete.forEach((element) => {
      element.classList.add("fade-out");
    });

    // Remove the elements from the DOM after the transition is complete
    setTimeout(() => {
      elementsToDelete.forEach((element) => {
        element.parentNode.removeChild(element);
      });
    }, 1000); // 1000ms (1 second) is the duration of the transition

    // Remove the event listeners to prevent further detection
    const videoElement = document.getElementById("vid");
    videoElement.removeEventListener("click", handleVideoClick);
    videoElement.removeEventListener("play", handleVideoClick);
  }
}

// Get the video element by its ID
const videoElement = document.getElementById("vid");

// Add the click event listener to the video element
videoElement.addEventListener("click", handleVideoClick);

// Add the click event listener to the controls
videoElement.addEventListener("play", handleVideoClick);

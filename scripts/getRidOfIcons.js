let isClicked = false;

function handleVideoClick() {
  if (!isClicked) {
    isClicked = true;
    const elementsToDelete = document.querySelectorAll(".videoIcon");

    elementsToDelete.forEach((element) => {
      element.classList.add("fade-out");
    });

    setTimeout(() => {
      elementsToDelete.forEach((element) => {
        element.parentNode.removeChild(element);
      });
    }, 1000);

    const videoElement = document.getElementById("vid");
    videoElement.removeEventListener("click", handleVideoClick);
    videoElement.removeEventListener("play", handleVideoClick);
  }
}

const videoElement = document.getElementById("vid");

videoElement.addEventListener("click", handleVideoClick);

videoElement.addEventListener("play", handleVideoClick);

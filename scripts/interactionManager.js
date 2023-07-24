const mainContainer = document.getElementById("image-viewer");

const Image = document.getElementById("pic-img");
const Title = document.getElementById("pic-title");
const Description = document.getElementById("pic-des");

function interact(Input) {
  if (Input === "exit") {
    mainContainer.style.visibility = "hidden";
  } else {
      switch (Input) {
        case "lantern":
          Title.textContent = "Lantern, 02.05.2023";
          Description.textContent = `A 3d model of old-school lantern in a style of eastern europe, in a hexagon like shape.
          It has a little bit of dirt on it's glass. Give it a wipe.`;
          Image.src = "/images/gallery/Lantern.jpg";
          break;
        case "spaceship":
          Title.textContent = "Unnamed spaceship,  28.08.2022 ";
          Description.textContent = `Little "cargo" ship. Maybe I did indeed overdid turrets.
              Use a gun. And if that don't work, use more gun.`;
          Image.src = "/images/gallery/Spaceship.png";
          break;
        case "serpulo":
          Title.textContent = "Serpulo, 24.08.2022";
          Description.textContent = `A scene a showing off planet, Serpulo, Mindustry's first planet you play on.`;
          Image.src = "/images/gallery/Serpulo.png";
          break;
        case "mindustry-core":
          Title.textContent = "Ejection of core, 2022(?)";
          Description.textContent = `Human character standing in front of core of ship, before ejecting it and himself.
                  Supposed to be series, turned out to be abandoned. I never uploaded that wip animation to the youtube.
                  Yes mindustry releated.`;
          Image.src = "/images/gallery/Mindus.jpg";
          break;
        case "cubes":
          Title.textContent = "Cubes, 2022(?)";
          Description.textContent =
            "Human with full clothes, rigged, back then, date is unknown";
          Image.src = "/images/gallery/Cubes.png";
          break;
        case "sculpted-face":
          Title.textContent = "Sculpted and textured face, 2022(?)";
          Description.textContent =
           `Second try at making human with such details. I guess I like work of an organic artist. 
            "shaggy" — Konniv 30.06.2022`;
            
          Image.src = "/images/gallery/Human.jpg";
          break;
        default:
          console.log(`I fucked up something if you see this.`);
          Title.textContent = "I fucked up something if you see this.";
          Description.textContent = `Something went wrong.`;
          break;
      }
   
    mainContainer.style.visibility = "visible";
  }
  console.log(Input);
}
document.addEventListener("DOMContentLoaded", function () {
    fetch("class.json")
      .then((response) => response.json())
      .then((data) => {
        const gridContainer = document.getElementById("gridContainer");
        data.forEach((item) => {
          const gridItem = document.createElement("div");
          gridItem.classList.add("grid-item");

          const img = document.createElement("img");
          img.src = item.ImageUrl;
          img.alt = item.ID;
          gridItem.appendChild(img);

          const heading = document.createElement("h3");
          heading.textContent = item.Name;
          gridItem.appendChild(heading);

          const paragraph = document.createElement("p");
          paragraph.textContent = item.ShortDesc;
          gridItem.appendChild(paragraph);

          const button = document.createElement("button");
          button.textContent = "View";
          gridItem.appendChild(button);

          gridContainer.appendChild(gridItem);
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  });
const header = document.querySelector("header");

// Main header container
const headerContainer = document.createElement("div");
headerContainer.className = "header-container";
headerContainer.style.display = "flex";
headerContainer.style.justifyContent = "space-between";
headerContainer.style.alignItems = "center";
headerContainer.style.padding = "0.5rem 1rem";

// Left side: logo + title
const headerLeft = document.createElement("div");
headerLeft.className = "header-left";
headerLeft.style.display = "flex";
headerLeft.style.alignItems = "center";

// Logo
const headerLogo = document.createElement("img");
headerLogo.src = "logo.png";
headerLogo.style.height = "125px";
headerLogo.style.marginRight = "1rem";
headerLogo.style.marginTop = "-5rem";

// Title
const headerTitle = document.createElement("h1");
headerTitle.textContent = "Vault Hunters";
headerTitle.style.color = "#B8860B";
headerTitle.style.margin = "0";
headerTitle.style.flex = "1";
headerTitle.style.textAlign = "center";
headerTitle.style.paddingLeft = "230px";
headerTitle.style.fontFamily = '"Bungee", cursive';

headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);

// Right side: button
const headerRight = document.createElement("div");
headerRight.className = "header-right";

const headerButton = document.createElement("button");
headerButton.textContent = "All Vault Hunters";
headerButton.style.fontFamily = '"Bungee", cursive';
headerButton.style.marginTop = "-4rem";
headerButton.addEventListener("click", () => {
  window.location.href = "/";
});

headerRight.appendChild(headerButton);

// Assemble header
headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);
header.appendChild(headerContainer);

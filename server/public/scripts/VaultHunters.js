const renderVaultHunters = async () => {
  const response = await fetch("/vaulthunters");
  const data = await response.json();

  const mainContent = document.getElementById("main-content");
  mainContent.style.marginLeft = "4rem";

  mainContent.style.display = "grid";
  mainContent.style.gridTemplateColumns = "repeat(5, 1fr)";
  mainContent.style.gap = "1rem";

  if (data) {
    data.map((vaulthunter) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.style.background = "#808080";
      card.style.borderRadius = "8px";
      card.style.marginBottom = "1.5rem";
      card.style.padding = "1rem";
      card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";

      document.body.style.backgroundImage =
        "url('/public/images/homeBackground.jpg')";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundAttachment = "fixed";

      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");

      const topImg = document.createElement("img");
      topImg.src = vaulthunter.image;
      topImg.alt = vaulthunter.name;
      topImg.style.width = "100%";
      topImg.style.height = "200px";
      topImg.style.objectFit = "contain";
      topImg.style.borderRadius = "8px 8px 0 0";

      topContainer.appendChild(topImg);

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");

      const name = document.createElement("h3");
      name.textContent = vaulthunter.name;
      name.style.fontFamily = "Bungee";
      name.style.fontSize = "1.3rem";
      bottomContainer.appendChild(name);

      const type = document.createElement("p");
      type.textContent = "Class: " + vaulthunter.type;
      type.style.fontFamily = "Comic Sans MS";
      bottomContainer.appendChild(type);

      const signatureAbility = document.createElement("p");
      signatureAbility.textContent =
        "Signature Ability: " + vaulthunter.signatureAbility;
      signatureAbility.style.fontFamily = "Comic Sans MS";
      bottomContainer.appendChild(signatureAbility);

      const link = document.createElement("a");
      link.textContent = "More Info";
      link.style.fontFamily = "Bungee";
      link.style.fontSize = "20px";
      link.setAttribute("role", "button");
      link.href = `/public/vaulthunter.html?id=${vaulthunter.id}`;
      bottomContainer.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);

      mainContent.appendChild(card);
    });
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Vault Hunters Available 😞";
    mainContent.appendChild(message);
  }
};

const renderVaultHunter = async () => {
  const params = new URLSearchParams(window.location.search);
  const requestedID = parseInt(params.get("id"));

  // Redirect to 404 if no ID
  if (!requestedID || isNaN(requestedID)) {
    window.location.href = "../404.html";
    return;
  }

  const response = await fetch("/vaulthunters");
  const data = await response.json();

  const VaultHunterContent = document.getElementById("VaultHunter-content");

  const VaultHunter = data.find((vh) => vh.id === requestedID);

  if (!VaultHunter) {
    window.location.href = "../404.html";
    return;
  }

  document.body.style.backgroundImage =
    "url('/public/images/BorderlandsBG.png')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";

  const vhImage = document.getElementById("image");
  vhImage.src = VaultHunter.image;
  vhImage.alt = VaultHunter.name;

  vhImage.style.marginBottom = "2rem";
  vhImage.style.width = "100%";
  vhImage.style.height = "400px";
  vhImage.style.objectFit = "contain";
  vhImage.style.display = "block";

  document.getElementById("name").textContent =
    "Vault Hunter - " + VaultHunter.name;
  document.getElementById("type").textContent = "Class: " + VaultHunter.type;
  document.getElementById("SignatureAbility").textContent =
    "Action Skill: " + VaultHunter.signatureAbility;
  document.getElementById("description").textContent =
    "Description: " + VaultHunter.description;

  document.getElementById("name").style.fontFamily = "Bungee";
  document.getElementById("type").style.fontFamily = "Comic Sans MS";
  document.getElementById("SignatureAbility").style.fontFamily =
    "Comic Sans MS";
  document.getElementById("description").style.fontFamily = "Comic Sans MS";
};

if (document.getElementById("main-content")) {
  renderVaultHunters();
} else if (document.getElementById("VaultHunter-content")) {
  renderVaultHunter();
}

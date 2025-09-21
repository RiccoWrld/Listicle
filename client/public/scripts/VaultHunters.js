const renderVaultHunters = async () => {
  const response = await fetch("/vaulthunters");
  const data = await response.json();

  const mainContent = document.getElementById("main-content");

  if (data) {
    data.map((vaulthunter) => {
      const card = document.createElement("div");
      card.classList.add = "card";

      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");

      topContainer.style.backgroundImage = `url(${vaulthunter.image})`;

      const name = document.createElement("h3");
      name.textContent = vaulthunter.name;
      bottomContainer.appendChild(name);

      const type = document.createElement("p");
      type.textContent = "Class: " + vaulthunter.type;
      bottomContainer.appendChild(type);

      const signatureAbility = document.createElement("p");
      signatureAbility.textContent =
        "Signature Ability: " + vaulthunter.signatureAbility;
      bottomContainer.appendChild(signatureAbility);

      const link = document.createElement("a");
      link.textContent = "Read More >";
      link.setAttribute("role", "button");
      link.href = `/vaulthunters/${vaulthunter.id}`;
      bottomContainer.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);

      mainContent.appendChild(card);
    });
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Vaults Hunters Available 😞";
    mainContent.appendChild(message);
  }
};

renderVaultHunters();

const renderVaultHunter = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop());

  const response = await fetch("/vaulthunters");
  const data = response.json();

  const VaultHunterContent = document.getElementById("VaultHunter-content");

  let VaultHunter;

  VaultHunter.data.find((VaultHunter) => VaultHunter.id === requestedID);

  if (VaultHunter) {
    document.getElementById("image").src = VaultHunter.image;
    document.getElementById("name").textContent = VaultHunter.name;
    document.getElementById("type").textContent = VaultHunter.type;
    document.getElementById("SignatureAbility").textContent =
      VaultHunter.signatureAbility;
    document.getElementById("description").textContent =
      VaultHunter.description;
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Vault Hunters Available 😞";
    giftContent.appendChild(message);
  }
};

renderVaultHunter();

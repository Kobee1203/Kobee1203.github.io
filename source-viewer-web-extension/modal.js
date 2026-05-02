const modal = document.getElementById("media-modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll(".thumb").forEach(thumb => {
  thumb.style.cursor = "pointer";
  
  if (thumb.querySelector("iframe")) {
    const overlay = document.createElement("div");
    overlay.style.position = "absolute";
    overlay.style.inset = "0";
    overlay.style.zIndex = "10";
    thumb.appendChild(overlay);
  }

  thumb.addEventListener("click", () => {
    modalBody.innerHTML = "";
    const content = thumb.firstElementChild.cloneNode(true);
    if (content.tagName === 'IFRAME') {
      content.style.pointerEvents = "auto";
    }
    modalBody.appendChild(content);
    modal.style.display = "flex";
  });
});

const closeModal = () => {
  modal.style.display = "none";
  modalBody.innerHTML = ""; 
};

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target === modalBody) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") {
    closeModal();
  }
});

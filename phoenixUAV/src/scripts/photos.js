document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".gallery-card");
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImage");
  const lightboxCounter = document.getElementById("lightboxCounter");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");

  if (!lightboxModal || !lightboxImg) return;

  const cardList = Array.from(cards);
  let currentIndex = 0;

  function openLightbox(index) {
    if (cardList.length === 0) return;
    currentIndex = (index + cardList.length) % cardList.length;
    const targetCard = cardList[currentIndex];

    const src = targetCard.getAttribute("data-src") || "";

    lightboxImg.src = src;
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentIndex + 1} / ${cardList.length}`;
    }

    lightboxModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightboxModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  cardList.forEach((card, index) => {
    card.addEventListener("click", () => {
      openLightbox(index);
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener("click", (e) => {
      e.stopPropagation();
      openLightbox(currentIndex - 1);
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener("click", (e) => {
      e.stopPropagation();
      openLightbox(currentIndex + 1);
    });
  }

  lightboxModal.addEventListener("click", (e) => {
    if (e.target === lightboxModal) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!lightboxModal.classList.contains("active")) return;

    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowLeft") {
      openLightbox(currentIndex - 1);
    } else if (e.key === "ArrowRight") {
      openLightbox(currentIndex + 1);
    }
  });
});

function goTo(link) {
    window.location.href = link;
  }
  
  document.querySelectorAll(".card").forEach((card) => {
    const link = card.dataset.link;
  
    card.addEventListener("click", () => goTo(link));
  
    const btn = card.querySelector(".btn");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      goTo(link);
    });
  });
  
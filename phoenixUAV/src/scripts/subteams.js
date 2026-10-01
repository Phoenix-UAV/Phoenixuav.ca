document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".subteamTab");
  const panels = document.querySelectorAll(".subteamPanel");

  if (!tabs.length || !panels.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-target");

      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));

      tab.classList.add("active");
      const targetPanel = document.getElementById(`panel-${targetId}`);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });
});

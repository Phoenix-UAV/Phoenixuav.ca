document.addEventListener("DOMContentLoaded", () => {
  const copyBtns = document.querySelectorAll(".copyEmailBtn");
  if (!copyBtns.length) return;

  // Create toast notification container if not present
  let toast = document.getElementById("emailCopyToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "emailCopyToast";
    toast.className = "emailCopyToast";
    document.body.appendChild(toast);
  }

  let toastTimeout;

  copyBtns.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      const email = btn.getAttribute("data-email");

      if (!email) return;

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback for browsers without Clipboard API support
          const textarea = document.createElement("textarea");
          textarea.value = email;
          textarea.style.position = "fixed";
          textarea.style.opacity = "0";
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
        }

        // Show toast notification
        toast.innerHTML = `<span class="toastCheck">✓</span> Copied <strong class="toastEmail">${email}</strong> to clipboard`;
        toast.classList.add("show");

        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
          toast.classList.remove("show");
        }, 3000);
      } catch (err) {
        console.error("Failed to copy email: ", err);
      }
    });
  });
});

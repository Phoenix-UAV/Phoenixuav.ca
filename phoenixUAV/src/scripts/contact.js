// Contact Page Script - Copy Email & Background Form Submit

const EMAIL = "contact@phoenixuav.ca";


const handleCopyEmail = () => {
  navigator.clipboard.writeText(EMAIL).then(() => {
    const badge = document.getElementById("copyBadge");
    if (badge) {
      badge.textContent = "Copied!";
      badge.classList.add("copied");
      setTimeout(() => {
        badge.textContent = "Copy";
        badge.classList.remove("copied");
      }, 2000);
    }
  }).catch(() => {
    // Fallback if clipboard API is blocked
    const temp = document.createElement("input");
    document.body.appendChild(temp);
    temp.value = EMAIL;
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
  });
};

document.getElementById("copyEmailBtn")?.addEventListener("click", handleCopyEmail);
document.getElementById("socialCopyEmailBtn")?.addEventListener("click", handleCopyEmail);

// Form submission via AJAX to FormSubmit service (no mailto popup)
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");

if (form && status && submitBtn) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");

    if (!emailInput?.value || !messageInput?.value) return;

    const firstName = firstNameInput?.value.trim() || "";
    const lastName = lastNameInput?.value.trim() || "";
    const fullName = `${firstName} ${lastName}`.trim() || "Website Inquiry";
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    status.className = "form-status visible info";
    status.textContent = "Sending your message...";

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: fullName,
          email: email,
          message: message,
          _subject: `New Contact Form Inquiry from ${fullName}`
        })
      });

      if (response.ok) {
        status.className = "form-status visible success";
        status.textContent = "Thank you! Your message has been sent successfully. We'll get back to you soon.";
        form.reset();
      } else {
        throw new Error("Form submission error");
      }
    } catch (err) {
      status.className = "form-status visible error";
      status.textContent = "Oops! Something went wrong while sending your message. Please try again or email us directly at " + EMAIL;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
  });
}

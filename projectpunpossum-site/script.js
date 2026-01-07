// ======= EDIT THESE =======
const SITE_EMAIL = "your-email@example.com";
const DONATION_URL = "https://example.com/your-donation-link"; // PayPal/Stripe/Ko-fi/etc.

const counters = {
  buildCount: 3,
  reuseCount: 42,
  learnCount: 7
};
// ==========================

function byId(id){ return document.getElementById(id); }

(function init(){
  const year = byId("year");
  if (year) year.textContent = new Date().getFullYear();

  const emailSlot = byId("emailSlot");
  if (emailSlot) emailSlot.textContent = SITE_EMAIL;

  const donateLink = byId("donateLink");
  if (donateLink){
    donateLink.href = DONATION_URL;
  }

  for (const [id,val] of Object.entries(counters)){
    const el = byId(id);
    if (el) el.textContent = String(val);
  }

  const navBtn = byId("navBtn");
  const navLinks = byId("navLinks");
  if (navBtn && navLinks){
    navBtn.addEventListener("click", () => {
      const open = navLinks.classList.toggle("show");
      navBtn.setAttribute("aria-expanded", String(open));
    });
  }
})();

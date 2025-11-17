document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });

//   document.getElementById("menuToggle").addEventListener("click", function() {
//     document.getElementById("navMenu").classList.toggle("active");
// });

// Mobile menu toggle for header
const header = document.querySelector('.site-header');
const menuToggle = document.getElementById('menuToggle');

if (header && menuToggle) {
  menuToggle.addEventListener('click', () => {
    header.classList.toggle('is-open');

    const isOpen = header.classList.contains('is-open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}


// Dropdown ToC: open/close whole box
const tocToggle = document.querySelector('.toc-toggle');
const tocList   = document.querySelector('.toc-list');
if (tocToggle && tocList){
  tocToggle.addEventListener('click', () => {
    tocList.style.display = (tocList.style.display === 'block') ? 'none' : 'block';
  });
}

// Expand/collapse H2 groups
document.querySelectorAll('.toc .has-children > .toc-h2').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('open');
  });
});

// Optional: close ToC after clicking any link on small screens
document.querySelectorAll('.toc a[href^="#"]').forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth < 768 && tocList){
      tocList.style.display = 'none';
    }
  });
});

document.querySelectorAll('.tab').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.tab').forEach(b=>b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.card').forEach(c=>{
      c.style.display = (f==='all' || c.dataset.cat===f) ? '' : 'none';
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Toggle visibility of entire TOC block
  const toggleBtn = document.querySelector(".toc-toggle-btn");
  const tocList = document.querySelector(".toc-list");

  if (toggleBtn && tocList) {
    toggleBtn.addEventListener("click", () => {
      const isVisible = tocList.style.display !== "none";
      tocList.style.display = isVisible ? "none" : "block";
      toggleBtn.textContent = isVisible ? "+" : "–";
    });
  }

  // Toggle nested TOC sections
  document.querySelectorAll(".toc-h2").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("open");
    });
  });
});

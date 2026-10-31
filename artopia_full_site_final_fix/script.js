


// JOin Us Form 
document.addEventListener("DOMContentLoaded", function () {
  // existing code...
  const joinForm = document.getElementById("joinForm");
  if (joinForm) {
    joinForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("🎉 Thank you for joining Artopia! We'll contact you soon.");
      joinForm.reset();
    });
  }

  // existing FAQ toggle code...
  document.querySelectorAll(".faq-q").forEach(button => {
    button.addEventListener("click", () => {
      const item = button.parentElement;
      item.classList.toggle("active");
      const span = button.querySelector("span");
      span.textContent = item.classList.contains("active") ? "−" : "+";
    });
  });

  // ==========================
  // SLIDER CODE STARTS HERE
  // ==========================
  const slides = document.querySelectorAll(".slide");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  let index = 0;

  function showSlide(i) {
    if (i < 0) index = slides.length - 1;
    else if (i >= slides.length) index = 0;
    else index = i;

    const offset = -index * 100;
    document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
  }

  // Arrows click
  if (prev && next) {
    prev.addEventListener("click", () => showSlide(index - 1));
    next.addEventListener("click", () => showSlide(index + 1));
  }

  // Auto-slide every 5s
  setInterval(() => showSlide(index + 1), 5000);
});

// All events
function showTab(tabId) {
  // Hide all contents
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });

  // Remove active from all buttons
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('active');
  });

  // Show selected tab + mark button active
  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

// Galleries
const galleries = {
  gallery1: ["images/HIKE.png", "images/hi1.jpeg", "images/hi2.jpeg"],
  gallery2: ["images/dance.jpeg", "images/dan1.jpeg", "images/dan2.jpeg"],
  gallery3: ["images/w1.jpg", "images/w2.jpeg", "images/w3.jpg"]
};

let currentGallery = [];
let currentIndex = 0;

function openGallery(name) {
  currentGallery = galleries[name];
  currentIndex = 0;
  document.getElementById("galleryImage").src = currentGallery[currentIndex];
  document.getElementById("galleryModal").style.display = "block";
}

function closeGallery() {
  document.getElementById("galleryModal").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentGallery.length;
  document.getElementById("galleryImage").src = currentGallery[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  document.getElementById("galleryImage").src = currentGallery[currentIndex];
}

//contact 
const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('preview');

imageInput.addEventListener('change', () => {
  preview.innerHTML = '';
  const file = imageInput.files[0];
  if (!file) return;
  const img = document.createElement('img');
  img.src = URL.createObjectURL(file);
  img.onload = () => URL.revokeObjectURL(img.src);
  preview.appendChild(img);
});

/* Submit handler */
const form = document.getElementById('feedbackForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for feedback!');
  form.reset();
  preview.innerHTML = '';
});
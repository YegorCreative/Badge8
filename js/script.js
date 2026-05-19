// Badge 8 — script.js

(function () {
  'use strict';

  // --- Smooth scroll for all anchor links ---

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Nav: add .scrolled class on scroll ---

  var nav = document.getElementById('nav');

  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // --- Contact form submission ---

  var form    = document.getElementById('contact-form');
  var confirm = document.getElementById('form-confirm');
  var emailInput = document.getElementById('email');

  if (form && confirm && emailInput) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var value = emailInput.value.trim();
      if (!value) return;

      // Basic email format validation
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        confirm.textContent = 'Please enter a valid email address.';
        return;
      }

      emailInput.value = '';
      confirm.textContent = 'Thank you. We will be in touch within one business day.';
    });
  }

  // --- Scroll-aware video autoplay with IntersectionObserver ---

  var reel = document.querySelector('#reel');
  var video = reel ? reel.querySelector('.scroll-video') : null;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reel && video && !reduceMotion) {
    video.pause();

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio >= 0.7) {
          var playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.then(function () {
              reel.classList.add('video-playing');
            }).catch(function () {
              // Suppress blocked autoplay errors
            });
          }
        } else {
          video.pause();
          reel.classList.remove('video-playing');
        }
      });
    }, { threshold: [0, 0.7, 1] });

    observer.observe(reel);
  } else if (video && reduceMotion) {
    video.pause();
  }

})();

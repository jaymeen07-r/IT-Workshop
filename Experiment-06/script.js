const imageBackgrounds = {
    "adalaj_small.jpg": { bg: "adalaj_large.jpg", theme: "theme-adalaj" },
    "kankaria_small.jpg": { bg: "kankaria_large.jpg", theme: "theme-kankaria" },
    "lal_darwaja_small.jpg": { bg: "lal_darwaja_large.jpg", theme: "theme-laldarwaja" },
    "sidi_saiyyed_small.jpg": { bg: "sidi_saiyyed_large.jpg", theme: "theme-sidi" }
  };

  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => {
      const smallSrc = img.getAttribute("src").split("/").pop();
      const config = imageBackgrounds[smallSrc];

      if (config) {
        document.body.style.backgroundImage = `url('img/${config.bg}')`;

        // Remove any existing theme classes
        document.body.classList.remove("theme-adalaj", "theme-kankaria", "theme-laldarwaja", "theme-sidi");

        // Add the new theme class
        document.body.classList.add(config.theme);
      }
    });
  });

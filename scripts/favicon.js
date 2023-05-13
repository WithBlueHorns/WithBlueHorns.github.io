var darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var favicon = document.getElementById('favicon');
      if (darkMode) {
        favicon.style.filter = 'invert(1) grayscale(100%)';
      } else {
        favicon.style.filter = 'none';
      }
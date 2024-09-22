    // Spara den ursprungliga titeln
    var originalTitle = document.title;

    // Lyssna på när användaren lämnar fliken (när fönstret inte längre är aktivt)
    document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
        // Ändra titeln när användaren lämnar fliken
        document.title = "COME BAAACK 😭😭😭!!!";
      } else {
        // Återställ titeln när användaren återvänder till fliken
        document.title = originalTitle;
      }
    });
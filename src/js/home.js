fetch("../components/header.html")
    .then(Response => Response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;

              // Ensuite, charger le script JS de ton filtre
      const script = document.createElement("script");
      script.src = "../js/header.js";
      document.body.appendChild(script);
    });

    fetch("../components/footer.html")
    .then(Response => Response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });
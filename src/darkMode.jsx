(function () {

    const root = document.documentElement;
  
    function toggleDarkMode() {
      const currentTheme = root.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      //Switch this theme
      switchTheme(currentTheme);

      root.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    }

    function switchTheme(currentTheme) {
      if(currentTheme === "dark"){
        let ulElement = document.querySelectorAll(".link-list");
        for (let i = 0; i < ulElement.length; i++) { ulElement[i].style.color = "black";}
        document.getElementById("light").style.display = "inline";
        document.getElementById("dark").style.display = "none";
      }
      else{
        let ulElement = document.querySelectorAll(".link-list");
        for (let i = 0; i < ulElement.length; i++) { ulElement[i].style.color = "white";}
        document.getElementById("dark").style.display = "inline";
        document.getElementById("light").style.display = "none";
      }
    }
  
    function init() {
      const storedPreference = localStorage.getItem("theme");
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = storedPreference || (systemPrefersDark ? "dark" : "light");
      root.setAttribute("data-theme", theme);    
    }
  
    init();
  
    document.addEventListener("DOMContentLoaded", function () {
      const togglers = document.querySelectorAll("[data-theme-toggler]");
      togglers.forEach((toggler) => {
        toggler.addEventListener("click", toggleDarkMode);
      });
    });
  
  })();
  
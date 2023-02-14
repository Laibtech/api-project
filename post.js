fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    console.log(json[0]);
    for (let index = 0; index < 15; index++) {
      const markup = `
        <li class="card-container">
            </div>
             <div class="name-container">
                 <span class="firstName">${json[index].title}</span>
                 <span class="lastName">${json[index].body}</span>
             </div>
             <p class="email"></p>
            </li>
    `;
      document.querySelector(".list-container").innerHTML += markup;
    }
  });
console.log(markup);
document.querySelector(".list-container").innerHTML = markup.join("")(



  //navbar
  function ($) {
    $(function () {
      //  open and close nav
      $("#navbar-toggle").click(function () {
        $("nav ul").slideToggle();
      });

      // Hamburger toggle
      $("#navbar-toggle").on("click", function () {
        this.classList.toggle("active");
      });

      // If a link has a dropdown, add sub menu toggle.
      $("nav ul li a:not(:only-child)").click(function (e) {
        $(this).siblings(".navbar-dropdown").slideToggle("slow");

        // Close dropdown when select another dropdown
        $(".navbar-dropdown").not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });

      // Click outside the dropdown will remove the dropdown class
      $("html").click(function () {
        $(".navbar-dropdown").hide();
      });
    });
  }
)(jQuery);




//Display Header
$("#header").append(generate_header());




function generate_header() {
  let url = document.URL;
  let index = url.lastIndexOf('/');
  var path = url.substr(index + 1);
  path = path == ""? "index.html" : path;

  return `<ul class="nav nav-pills py-3 ps-5 header-bar">
            <li class="nav-item mx-3 mx-md-5">
              <img src="images/OniCartoon.png" class="img-fluid icon" alt="Personal Logo">
            </li>
            <li class="nav-item">
              <a class="nav-link tab ${path == "index.html"? "selected-tab" : ""}" aria-current="page" href="index.html">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link tab ${path == "contact_details.html"? "selected-tab" : ""}" tabindex="-1" href="contact_details.html">Contact</a>
            </li>
          </ul>
          <hr>`;

}


/*
 *
        <!-- <li class="nav-item"> -->
        <!--   <a class="nav-link tab" href="#">Link</a> -->
        <!-- </li> -->
        <!-- <li class="nav-item"> -->
        <!--   <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> -->
        <!-- </li> -->
        */

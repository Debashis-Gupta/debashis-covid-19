/* ---------------------------------------------- */
/*            CODE EXPLAINED TUTORIALS            */
/*         www.youtube.com/CodeExplained          */
/* ---------------------------------------------- */

/* ---------------------------------------------- */
/*                API URL AND KEY                 */
/* ---------------------------------------------- */

const country_name_element = document.querySelector(".country .name");
const total_cases_element = document.querySelector(".total-cases .value");
const new_cases_element = document.querySelector(".total-cases .new-value");
const recovered_element = document.querySelector(".recovered .value");
const new_recovered_element = document.querySelector(".recovered .new-value");
const deaths_element = document.querySelector(".deaths .value");
const new_deaths_element = document.querySelector(".deaths .new-value");
const total_test_element = document.querySelector(".total-test .value");
const new_test_element = document.querySelector(".total-test .new-value");
const critical_element = document.querySelector(".critical-cases .value");

const ctx = document.getElementById("axes_line_chart").getContext("2d");

// App variable

let app_data = [],
  cases_list = [],
  recovered_list = [],
  deaths_list = [],
  dates = [],
  formatedDates = [];

// Get user country code
let user_country, try_data;
let country_code = geoplugin_countryCode();
country_list.forEach((country) => {
  if (country.code == country_code) {
    user_country = country.name;
  }
});
let country_data;
function fetchData(user_country) {
  (app_data = []),
    (cases_list = []),
    (recovered_list = []),
    (deaths_list = []),
    (dates = []),
    (formatedDates = []);
  fetch(`https://www.trackcorona.live/api/countries`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      try_data = data["data"];
      console.log("Try Data");
      console.log(try_data);
      console.log(user_country);

      try_data.forEach((d) => {
        if (user_country == d["location"]) {
          country_data = d;
        }
      });
      console.log("Bahire Push Data");
      console.log(country_data);
      country_name_element.innerHTML = country_data["location"];
      total_cases_element.innerHTML = country_data["confirmed"] || 0;

      recovered_element.innerHTML = country_data["recovered"] || 0;

      deaths_element.innerHTML = country_data["dead"] || 0;
    })
    .then( () => {
		
		axesLinearChart();
	})
	.catch(error => {
		// alert(error);
	})
}

fetchData(user_country);

let my_chart;
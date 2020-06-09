// SELECT ALL ELEMENTS

const country_name_element = document.querySelector(".country .name");
const total_cases_element = document.querySelector(".total-cases .value");
const new_cases_element = document.querySelector(".total-cases .new-value");
const recovered_element = document.querySelector(".recovered .value");
const new_recovered_element = document.querySelector(".recovered .new-value");
const deaths_element = document.querySelector(".deaths .value");
const new_deaths_element = document.querySelector(".deaths .new-value");

const ctx = document.getElementById("axes_line_chart").getContext("2d");

let user_country;
let user_code;
let country_code = geoplugin_countryCode();
country_list.forEach((country) => {
  if (country.code == country_code) {
    user_country = country.name;
    user_code = country.code;
  }
});

let think_data, my_data;
// APP VARIABLES
let app_data = [],
  dataset = [],
  total_cases_my = [],
  total_recoveries_my = [],
  total_deaths_my = [],
  deaths = [],
  new_cases = [],
  new_deaths = [],
  normal_date = [],
  formatedDates = [];

let individual_data,
  individual_dataset,
  country_title,
  total_active_cases,
  total_cases_indv,
  total_deaths_indv,
  total_new_cases_today,
  total_new_deaths_today,
  total_recovered_indv,
  total_serious_cases;

function my_stuff(user_code) {
	country_name_element.innerHTML = "Loading...";
  fetch(`https://api.thevirustracker.com/free-api?countryTotal=${user_code}`)
    .then((response) => response.json())
    .then((data) => {
      individual_data = data;
      individual_dataset = individual_data.countrydata;
	  console.log(individual_dataset);
	  country_title=individual_dataset[0]["info"]["title"];
	  total_active_cases=individual_dataset[0].total_active_cases;
	  total_cases_indv=individual_dataset[0].total_cases;
	  total_deaths_indv=individual_dataset[0].total_deaths;
	  total_new_cases_today=individual_dataset[0].total_new_cases_today;
	  total_recovered_indv=individual_dataset[0].total_recovered;
	  total_serious_cases=individual_dataset[0].total_serious_cases;
	  total_new_deaths_today=individual_dataset[0].total_new_deaths_today;
	  updateStatsTwo();
    });
}
my_stuff(user_code);

function workout(user_code) {
  
  (app_data = []),
    (dataset = []),
    (total_cases_my = []),
    (total_recoveries_my = []),
    (total_deaths_my = []),
    (deaths = []),
    (new_cases = []),
    (new_deaths = []),
    (normal_date = []),
    (formatedDates = []);
  fetch(`https://api.thevirustracker.com/free-api?countryTimeline=${user_code}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   console.log(data);
      think_data = data.timelineitems;
      normal_date = Object.keys(data.timelineitems[0]);
      normal_date.forEach((items) => {
        formatedDates.push(formatDate(items));
      });
      //   console.log(Object.keys(data.timelineitems[0]));

      normal_date.forEach((items) => {
        dataset.push(think_data[0][items]);
        total_cases_my.push(think_data[0][items]["total_cases"]);
        total_recoveries_my.push(think_data[0][items]["total_recoveries"]);
        total_deaths_my.push(think_data[0][items]["total_deaths"]);
        new_cases.push(think_data[0][items]["new_daily_cases"]);
        new_deaths.push(think_data[0][items]["new_daily_deaths"]);
        updateUI();
      });
    });

  // })
}
workout(user_code);
// UPDATE UI FUNCTION
function updateUI() {
  updateStats();
  axesLinearChart();
}

function updateStats() {
	new_recovered_element.innerHTML = `+${
	  total_recoveries_my[total_recoveries_my.length - 2] -
	  total_recoveries_my[total_recoveries_my.length - 3]
	}`;
//   let last_entry = app_data[app_data.length - 1];
//   let before_last_entry = app_data[app_data.length - 2];

//   country_name_element.innerHTML = user_country;

//   total_cases_element.innerHTML =
//     total_cases_my[total_cases_my.length - 2] || 0;
//   new_cases_element.innerHTML = `+${new_cases[new_cases.length - 2] || 0}`;

//   recovered_element.innerHTML =
//     total_recoveries_my[total_recoveries_my.length - 2] || 0;

//   deaths_element.innerHTML = total_deaths_my[total_deaths_my.length - 2];
//   new_deaths_element.innerHTML = `+${new_deaths[new_deaths.length - 2] || 0}`;
}
function updateStatsTwo() {
	//   let last_entry = app_data[app_data.length - 1];
	//   let before_last_entry = app_data[app_data.length - 2];
	
	  country_name_element.innerHTML = country_title;
	
	  total_cases_element.innerHTML =total_cases_indv || 0;
	  new_cases_element.innerHTML = `+${total_new_cases_today || 0}`;
	
	  recovered_element.innerHTML = total_recovered_indv || 0;
		
		deaths_element.innerHTML = total_deaths_indv || 0;
		new_deaths_element.innerHTML = `+${total_new_deaths_today || 0}`;
				//   new_recovered_element.innerHTML = `+${
				// 	total_recoveries_my[total_recoveries_my.length - 2] -
				// 	total_recoveries_my[total_recoveries_my.length - 3]
				//   }`;
	}

let my_chart;
function axesLinearChart() {
  if (my_chart) {
    my_chart.destroy();
  }

  my_chart = new Chart(ctx, {
    type: "line",
    data: {
      datasets: [
        {
          label: "Cases",
          data: total_cases_my,
          fill: false,
          borderColor: "#FFF",
          backgroundColor: "#FFF",
          borderWidth: 1,
        },
        {
          label: "Recovered",
          data: total_recoveries_my,
          fill: false,
          borderColor: "#009688",
          backgroundColor: "#009688",
          borderWidth: 1,
        },
        {
          label: "Deaths",
          data: total_deaths_my,
          fill: false,
          borderColor: "#f44336",
          backgroundColor: "#f44336",
          borderWidth: 1,
        },
      ],
      labels: formatedDates,
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}

// FORMAT DATES
const monthsNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function formatDate(dateString) {
  let date = new Date(dateString);

  return `${date.getDate()} ${monthsNames[date.getMonth()]}`;
}

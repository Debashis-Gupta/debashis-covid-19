// fetching the header dataset
const country_name_element = document.querySelector(".country .name");
const total_cases_element = document.querySelector(".total-cases .value");
const new_cases_element = document.querySelector(".total-cases .new-value");
const recovered_element = document.querySelector(".recovered .value");
const new_recovered_element = document.querySelector(".recovered .new-value");
const deaths_element = document.querySelector(".deaths .value");
const new_deaths_element = document.querySelector(".deaths .new-value");
const danger_rank = document.querySelector(".danger-rank .value");
const critical_element = document.querySelector(".critical-cases .value");
const ctx = document.getElementById("axes_line_chart").getContext("2d");
const ctx_two = document.getElementById("axes_line_chart_two").getContext("2d");

// setting for the country code from geopluging

let user_country;
let user_code;
let country_code = geoplugin_countryCode();
country_list.forEach((country) => {
  if (country.code == country_code) {
    user_country = country.name;
    user_code = country.code;
  }
});

/**
 * This Section is for working only with fixed country section
 *  from ip address and change on user demand
 * this section is only for header
 */

// declaring variable for fetching specific dataset
let user_country_name,
  total_danger_rank,
  total_cases_fixed,
  total_deaths_fixed,
  total_new_cases_today,
  total_new_deaths_today,
  total_recovered_fixed,
  total_serious_cases,
  fixed_dataset;

 // function to show the header dataset accourding to geoplugin and on demand
function countryData(user_code) {
  country_name_element.innerHTML = "Loading...";
  $(function () {
    $.ajax({
      url: `https://api.thevirustracker.com/free-api?countryTotal=${user_code}`,
       dataType: "json",
       success: function (data) {
         fixedCountryData(data);
       }, // success function
     }); //ajax function
   }); // bahirer function
 }
 countryData(user_code);
 function fixedCountryData(data) {
   fixed_dataset= data.countrydata;
// console.log(fixed_dataset);
   user_country_name=fixed_dataset[0]["info"]["title"];
   total_cases_fixed=fixed_dataset[0].total_cases;
   total_new_cases_today=fixed_dataset[0].total_new_cases_today;
   total_recovered_fixed=fixed_dataset[0].total_recovered;
   total_deaths_fixed=fixed_dataset[0].total_deaths;
   total_new_deaths_today=fixed_dataset[0].total_new_deaths_today;
   total_serious_cases=fixed_dataset[0].total_serious_cases;
   total_danger_rank=fixed_dataset[0].total_danger_rank;
   // assinging values
   country_name_element.innerHTML = user_country_name || 0;
   total_cases_element.innerHTML = total_cases_fixed || 0;
   new_cases_element.innerHTML = `+${total_new_cases_today || 0}`;
   recovered_element.innerHTML = total_recovered_fixed || 0;
   deaths_element.innerHTML = total_deaths_fixed || 0;
   new_deaths_element.innerHTML = `+${total_new_deaths_today || 0}`;
  danger_rank.innerHTML = total_danger_rank || 0;
  critical_element.innerHTML = total_serious_cases || 0;
}

/**
 * End of fixed Country Section
 */

/**
 * This Section is for working only with fixed country section with timelineData
 *  from ip address and change on user demand
 * this section is only for header
 */
// setting the needed variables

let timeline_dataset,
  normal_date = [],
  total_cases_timeline = [],
  daily_cases =[],
  daily_deaths =[],
  daily_recoveries=[],
  total_recoveries_timeline = [];
(total_deaths_timeline = []), (formatedDates = []);

function countryTimeline(user_code) {
  $(function () {
    $.ajax({
      url: `https://api.thevirustracker.com/free-api?countryTimeline=${user_code}`,
      dataType: "json",
      success: function (data) {
        timelineCountryData(data);
      }, // success function
    }); //ajax function
  }); // bahirer function
}

countryTimeline(user_code);

function timelineCountryData(data) {
  timeline_dataset,normal_date = [],total_cases_timeline = [],daily_cases =[],daily_deaths =[],daily_recoveries=[],total_recoveries_timeline = [],total_deaths_timeline = [],formatedDates = [];
  // console.log(data.timelineitems);
  console.log(total_cases_timeline);
  timeline_dataset=data.timelineitems;
  normal_date = Object.keys(data.timelineitems[0]);
  normal_date.forEach((items) => {
    formatedDates.push(formatDate(items));
  });
  normal_date.forEach((itmes)=>{
    total_cases_timeline.push(timeline_dataset[0][itmes]["total_cases"]);
    total_recoveries_timeline.push(timeline_dataset[0][itmes]["total_recoveries"]);
    total_deaths_timeline.push(timeline_dataset[0][itmes]["total_deaths"]);
    updateUI();
  });
}

function updateUI() {
  new_recovered_element.innerHTML = `+${
	  total_recoveries_timeline[total_recoveries_timeline.length - 2]
  }`;
  axesLinearChart();
}

let my_chart;
formatedDates.pop();

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
          data: total_cases_timeline,
          fill: false,
          borderColor: "#FFF",
          backgroundColor: "#FFF",
          borderWidth: 1,
        },
        {
          label: "Recovered",
          data: total_recoveries_timeline,
          fill: false,
          borderColor: "#009688",
          backgroundColor: "#009688",
          borderWidth: 1,
        },
        {
          label: "Deaths",
          data: total_deaths_timeline,
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
      scales: {
        xAxes: [{
            gridLines: {
                display:false
            }
        }],
        yAxes: [{
            gridLines: {
                display:false
            },   
            display: true,
            ticks: {
                beginAtZero: true,
                steps: 1000,
                stepValue: 1,
                // max:total_cases_fixed
            }
        }]
    }
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

/**
 * End of fixed Country Section with timeline
 */

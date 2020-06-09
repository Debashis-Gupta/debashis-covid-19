let fetched;
// all_dataset=[];
let setCodeOne, setCodeTwo;
let detailsOne, detailsTwo;
let array_details_One = [];
let array_details_Two = [];

// detail first country

let first_country_title,
  first_country_total_active_cases,
  first_country_total_cases,
  first_country_deaths,
  first_country_new_cases,
  first_country_new_deaths,
  first_country_recover;

// detail second country
let second_country_title,
  second_country_total_active_cases,
  second_country_total_cases,
  second_country_deaths,
  second_country_new_cases,
  second_country_new_deaths,
  second_country_recover;

const compare_btn = document.getElementById("clk_compare");
const comparision = document.querySelector(".comparision_details");
const comparisionTwo = document.querySelector(".comparision_details_two");
const clear_all = document.querySelector("#clk_clear");
const comparision_section = document.querySelector("#comp");

clear_all.addEventListener("click", function () {
  select_country_two.innerHTML = "Select Your Country";
  select_country_one.innerHTML = "Select Your Country";
  compare_btn.classList.toggle("hide");
  comparision.classList.toggle("hide");
  comparisionTwo.classList.toggle("hide");
  clear_all.classList.toggle("hide");
  comparision_section.classList.toggle("hide");
});

function setOneCode(user_code) {
  setCodeOne = user_code;
  console.log(setCodeOne);
}
function setTwoCode(user_code) {
  setCodeTwo = user_code;
  console.log(setCodeTwo);
}

function buttonCompare() {
  if (setCodeOne == setCodeTwo) {
    alert("Same Country Selected. Operation will be terminated");
    return true;
  }
}
function clickCompare() {
  if (buttonCompare()) {
    return false;
  } else {
    compare_btn.classList.add("hide");
    comparision_section.classList.add("hide");
    comparision.classList.remove("hide");
    comparisionTwo.classList.remove("hide");

    clear_all.classList.remove("hide");

    datafetched(setCodeOne, setCodeTwo);
    showRatioChart();
    setRatio();
  }
}

function allStatistics() {
  $(function () {
    $.ajax({
      url: "https://api.thevirustracker.com/free-api?countryTotals=ALL",
      dataType: "json",
      success: function (data) {
        allCountryDataStatistics(data); //success
      },
    }); //ajax function
  }); // bahirer function
}
function allCountryDataStatistics(data) {
  fetched = data.countryitems[0];
  // console.log(fetched)
}

allStatistics();
// here we will fetched data
function datafetched(setCodeOne, setCodeTwo) {
  for (i = 1; i < 183; i++) {
    if (setCodeOne == fetched[i]["code"]) {
      detailsOne = fetched[i];
      array_details_One.push(fetched[i]);
    } else if (setCodeTwo == fetched[i]["code"]) {
      detailsTwo = fetched[i];
      array_details_Two.push(fetched[i]);
    }
  }

  printDetailOne(detailsOne);
  printDetailTwo(detailsTwo);
}

function printDetailOne(detailsOne) {
  first_country_title = detailsOne.title;
  first_country_total_active_cases = detailsOne.total_active_cases;
  first_country_total_cases = detailsOne.total_cases;
  first_country_new_cases = detailsOne.total_new_cases_today;
  first_country_new_deaths = detailsOne.total_new_deaths_today;
  first_country_deaths = detailsOne.total_deaths;
  first_country_recover = detailsOne.total_recovered;

  document.querySelector(".detailsOne").innerHTML = `
    
    <p style="border-bottom: 1px solid black; width: fit-content;">${first_country_title}</p>
    <p>Active Cases : ${first_country_total_active_cases}</p>
    <p>Total Cases : ${first_country_total_cases}</p>
    <p>Daily New Cases : ${first_country_new_cases}</p>
    <p>Total Deaths : ${first_country_deaths}</p>
    <p>Daily New Deaths : ${first_country_new_deaths}</p>
    <p>Total Recover : ${first_country_recover}</p>
    
    `;
}
function printDetailTwo(detailsTwo) {
  second_country_title = detailsTwo.title;
  second_country_total_active_cases = detailsTwo.total_active_cases;
  second_country_total_cases = detailsTwo.total_cases;
  second_country_new_cases = detailsTwo.total_new_cases_today;
  second_country_new_deaths = detailsTwo.total_new_deaths_today;
  second_country_deaths = detailsTwo.total_deaths;
  second_country_recover = detailsTwo.total_recovered;

  document.querySelector(".detailsTwo").innerHTML = `
    
    <p style="border-bottom: 1px solid black; width: fit-content;">${second_country_title}</p>
    <p>Active Cases : ${second_country_total_active_cases}</p>
    <p>Total Cases : ${second_country_total_cases}</p>
    <p>Daily New Cases : ${second_country_new_cases}</p>
    <p>Total Deaths : ${second_country_deaths}</p>
    <p>Daily New Deaths : ${second_country_new_deaths}</p>
    <p>Total Recover : ${second_country_recover}</p>
    
    `;
}
let my_chart_two;
function showRatioChart() {
  if (my_chart_two) {
    my_chart_two.destroy();
  }
  my_chart_two = new Chart(ctx_two, {
    type: "bar",
    data: {
      labels: ["Cases", "Deaths", "Recoveries"],
      datasets: [
        {
          label: first_country_title,
          backgroundColor: "#3e95cd",
          data: [
            first_country_total_cases,
            first_country_deaths,
            first_country_recover,
          ],
        },
        {
          label: second_country_title,
          backgroundColor: "#8e5ea2",
          data: [
            second_country_total_cases,
            second_country_deaths,
            second_country_recover,
          ],
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: `${first_country_title} VS ${second_country_title}`,
      },
      responsive: true,
      maintainAspectRatio: true,
    },
  });
}

function setRatio() {
  console.log(first_country_title);
  console.log(first_country_total_active_cases);
  console.log(first_country_total_cases);
  console.log(first_country_new_cases);
  console.log(first_country_new_deaths);
  console.log(first_country_deaths);
  console.log(first_country_recover);
  console.log(second_country_title);
  console.log(second_country_total_active_cases);
  console.log(second_country_total_cases);
  console.log(second_country_new_cases);
  console.log(second_country_new_deaths);
  console.log(second_country_deaths);
  console.log(second_country_recover);
  let active_cases_one,active_cases_two,cases_ratio_one,cases_ratio_two,new_case_one,new_case_two,cases_death_two,cases_death_one,daily_death_cases_two,daily_death_cases_one,cases_recover_one,cases_recover_two;
  if (
    first_country_total_active_cases == 0 &&
    second_country_total_active_cases == 0
  ) {
    active_cases_one = 0;
    active_cases_two = 0;
  } else if (first_country_total_active_cases == 0) {
    active_cases_one = 0;
    active_cases_two = 1;
  } else if (second_country_total_active_cases == 0) {
    active_cases_one = 1;
    active_cases_two = 0;
  } else if (
    first_country_total_active_cases > second_country_total_active_cases
  ) {
    active_cases_one = Math.round(
      first_country_total_active_cases / second_country_total_active_cases
    );
    active_cases_two = 1;
  } else if (
    first_country_total_active_cases < second_country_total_active_cases
  ) {
    active_cases_two = Math.round(
      second_country_total_active_cases / first_country_total_active_cases
    );
    active_cases_one = 1;
  }

  // end of total active cases

  // total cases
  if (first_country_total_cases == 0 && second_country_total_cases == 0) {
    cases_ratio_one = 0;
    cases_ratio_two = 0;
  } else if (first_country_total_cases == 0) {
    cases_ratio_one = 0;
    cases_death_two = 1;
  } else if (second_country_total_cases == 0) {
    cases_ratio_one = 1;
    cases_death_two = 0;
  } else if (first_country_total_cases > second_country_total_cases) {
    cases_ratio_one = Math.round(
      first_country_total_cases / second_country_total_cases
    );
    cases_ratio_two = 1;
  } else if (first_country_total_cases < second_country_total_cases) {
    cases_ratio_two = Math.round(
      second_country_total_cases / first_country_total_cases
    );
    cases_ratio_one = 1;
  }
  // end total cases
  // new cases
  if (first_country_new_cases == 0 && second_country_new_cases == 0) {
    new_case_two = 0;
    new_case_one = 0;
  } else if (first_country_new_cases == 0) {
    new_case_two = 1;
    new_case_one = 0;
  } else if (second_country_new_cases == 0) {
    new_case_two = 0;
    new_case_one = 1;
  } else if (first_country_new_cases > second_country_new_cases) {
    new_case_one = Math.round(
      first_country_new_newcases / second_country_new_cases
    );
    new_case_two = 1;
  } else if (first_country_new_cases < second_country_new_cases) {
    new_case_two = Math.round(
      second_country_new_cases / first_country_new_cases
    );
    new_case_one = 1;
  }

  // end new cases

  //  total death
  if (first_country_deaths == 0 && second_country_deaths == 0) {
    cases_death_two = 0;
    cases_death_one = 0;
  } else if (second_country_deaths == 0) {
    cases_death_two = 0;
    cases_death_one = 1;
  } else if (first_country_deaths == 0) {
    cases_death_one = 0;
    cases_death_two = 1;
  } else if (first_country_deaths > second_country_deaths) {
    cases_death_one = Math.round(first_country_deaths / second_country_deaths);
    cases_death_two = 1;
  } else if (first_country_deaths < second_country_deaths) {
    cases_death_two = Math.round(second_country_deaths / first_country_deaths);
    cases_death_one = 1;
  }
  //end total death
  // new death
  if (first_country_new_deaths == 0 && second_country_new_deaths == 0) {
    daily_death_cases_two = 0;
    daily_death_cases_one = 0;
  } else if (second_country_new_deaths == 0) {
    daily_death_cases_two = 0;
    daily_death_cases_one = 1;
  } else if (first_country_new_deaths == 0) {
    daily_death_cases_one = 0;
    daily_death_cases_two = 1;
  } else if (first_country_new_deaths > second_country_new_deaths) {
    daily_death_cases_one = Math.round(
      first_country_new_deaths / second_country_new_deaths
    );
    daily_death_cases_two = 1;
  } else if (first_country_new_deaths < second_country_new_deaths) {
    daily_death_cases_two = Math.round(
      second_country_new_deaths / first_country_new_deaths
    );
    daily_death_cases_one = 1;
  }

  // end new deaths

  // total recoveries
  if (first_country_recover > second_country_recover) {
    cases_recover_one = Math.round(
      first_country_recover / second_country_recover
    );
    cases_recover_two = 1;
  } else if (first_country_recover == 0 && second_country_recover == 0) {
    cases_recover_one = 0;
    cases_recover_two = 0;
  } else if (first_country_recover == 0) {
    cases_recover_one = 0;
    cases_recover_two = 1;
  } else if (second_country_recover == 0) {
    cases_recover_one = 1;
    cases_recover_two = 0;
  } else if (first_country_recover < second_country_recover) {
    cases_recover_two = Math.round(
      second_country_recover / first_country_recover
    );
    cases_recover_one = 1;
  }

  // end recoveries
  document.querySelector(".detailsThree").innerHTML = `
    <p style="border-bottom: 1px solid black; width: fit-content;">${first_country_title} Vs ${second_country_title}</p>
    <p>Active Cases Ratio : ${active_cases_one}:${active_cases_two}</p>
    <p>Total Cases Ratio : ${cases_ratio_one}:${cases_ratio_two}</p>
    <p>Daily New Cases Ratio : ${new_case_one}:${new_case_two}</p>
    <p>Total Death Ratio : ${cases_death_one}:${cases_death_two}</p>
    <p>Daily New Death Ratio : ${daily_death_cases_one}:${daily_death_cases_two}</p>
    <p>Total Recovery Ratio : ${cases_recover_one}:${cases_recover_two}</p>
    `;
}

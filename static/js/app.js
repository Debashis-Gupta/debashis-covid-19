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

let app_data =[],
cases_list=[],
recovered_list=[],
deaths_list=[],
dates=[],
formatedDates = [];


// Get user country code
let user_country;
let user_code;
let country_code = geoplugin_countryCode();
country_list.forEach(country => {
	if(country.code == country_code){
		user_country = country.name;
		user_code = country.code;
	}
});

console.log(user_country);
let test_data,main_data;

function fetchData(user_country) {
	console.log(user_code);
	app_data =[],cases_list=[],recovered_list=[],deaths_list=[],dates=[],formatedDates = [];
	fetch(`https://api.thevirustracker.com/free-api?countryTimeline=${user_code}`)
	.then(response => response.json())
	.then(data=>test_data=data)
	.then( data => {
		dates = Object.keys(data);
		// console.log(dates);
		dates.forEach( date => {
			// dataset.push(data);
			let DATA = data[date];
			formatedDates.push(formatDate(date));
			app_data.push(DATA);
			cases_list.push(parseInt(DATA.total_cases.replace(/,/g,"")));
			recovered_list.push(parseInt(DATA.total_recovered.replace(/,/g,"")));
			deaths_list.push(parseInt(DATA.total_deaths.replace(/,/g,"")));
		})
	})
	.then( () => {
		updateUI();
		axesLinearChart();
	})
	.catch(error => {
		// alert(error);
	})


}
fetchData(user_code);


// create update ui function

function updateUI() {
	updateStats();
}

let last_entry;
function updateStats() {
	last_entry = app_data[app_data.length -1];
	let before_last_entry = app_data[app_data.length -2];
	
	// console.log(last_entry);
	// console.log(before_last_entry);

	country_name_element.innerHTML = last_entry.country_name;
	total_cases_element.innerHTML = last_entry.total_cases || 0;
	new_cases_element.innerHTML = `+${last_entry.new_cases || 0 }`;
	recovered_element.innerHTML = last_entry.total_recovered || 0;
	new_recovered_element.innerHTML = `+${parseInt(last_entry.total_recovered.replace(/,/g, "")) - parseInt(before_last_entry.total_recovered.replace(/,/g, ""))}`;
	// new_recovered_element.innerHTML = last_entry.total_recovered - before_last_entry.total_recovered;
	deaths_element.innerHTML = last_entry.total_deaths || 0;
	new_deaths_element.innerHTML = `+${parseInt(last_entry.total_deaths.replace(/,/g, "")) - parseInt(before_last_entry.total_deaths.replace(/,/g, ""))}`;
	total_test_element.innerHTML = last_entry.total_tests || 0;
	new_test_element.innerHTML = `+${parseInt(last_entry.total_tests.replace(/,/g, "")) - parseInt(before_last_entry.total_tests.replace(/,/g, ""))}`;
	critical_element.innerHTML = last_entry.serious_critical || 0;

}


// linear chart
let my_chart;
function axesLinearChart() {
	if (my_chart) {
		my_chart.destroy();
	}
	 my_chart = new Chart(ctx, {
		type: 'line',
		data: {
			datasets: [{
				label: 'Cases',
				data: cases_list,
				fill:false,
				borderColor:'#FFF',
				backgroundColor:'#FFF',
				borderWidth:1 
			},{
				label: 'Recoverd',
				data: recovered_list,
				fill:false,
				borderColor:'#009688',
				backgroundColor:'#009688',
				borderWidth:1 
			},{
				label: 'Deaths',
				data: deaths_list,
				fill:false,
				borderColor:'#f44336',
				backgroundColor:'#f44336',
				borderWidth:1 
			}],
			labels: formatedDates
		},
		options: {
			responsive:true,
			maintainAspectRatio: false
		}
	});
}

// format date

const monthsNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatDate(dateString){
	let date = new Date(dateString);

	return `${date.getDate()} ${monthsNames[date.getMonth()]}`;
}



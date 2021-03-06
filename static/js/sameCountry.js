// ALL COUNTRY NAMES WITH THEIR ISO CODE
let country_list = [
  { name: "Afghanistan", code: "AF" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "Angola", code: "AO" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bangladesh", code: "BD" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Brazil", code: "BR" },
  { name: "Brunei Darussalam", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Colombia", code: "CO" },
  { name: "Congo", code: "CG" },
  { name: "Democratic Republic of Congo", code: "CD" },
  { name: "Costa Rica", code: "CR" },
  { name: "Ivory Coast", code: "CI" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Cyprus", code: "CY" },
  { name: "Czechia", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Ethiopia", code: "ET" },
  { name: "Falkland Islands", code: "FK" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "French Guiana", code: "GF" },
  { name: "French Southern Territories", code: "TF" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Greece", code: "GR" },
  { name: "Greenland", code: "GL" },
  { name: "Guatemala", code: "GT" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Honduras", code: "HN" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Korea", code: "KP" },
  { name: "South Korea", code: "KR" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Lao", code: "LA" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libya", code: "LY" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Macedonia", code: "MK" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Mali", code: "ML" },
  { name: "Mauritania", code: "MR" },
  { name: "Mexico", code: "MX" },
  { name: "Moldova", code: "MD" },
  { name: "Mongolia", code: "MN" },
  { name: "Montenegro", code: "ME" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "New Caledonia", code: "NC" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palestine", code: "PS" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Qatar", code: "QA" },
  { name: "Romania", code: "RO" },
  { name: "Rwanda", code: "RW" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia", code: "RS" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Sudan", code: "SS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Svalbard and Jan Mayen", code: "SJ" },
  { name: "Swaziland", code: "SZ" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syrian Arab Republic", code: "SY" },
  { name: "Taiwan", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Kingdom", code: "GB" },
  { name: "USA", code: "US" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Venezuela", code: "VE" },
  { name: "Western Sahara", code: "EH" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" },
  { name: "Singapore", code: "SG" },
  { name: "Hong Kong", code: "HK" },
  { name: "DR Congo", code: "CD" },
  { name: "Kosovo", code: "XK" },
  { name: "Diamond Princess", code: "DP" },
  { name: "Iran", code: "IR" },
  { name: "North Korea", code: "KP" },
  { name: "Russia", code: "RU" },
  { name: "UAE", code: "AE" },
  { name: "Vietnam", code: "VN" },
];

// Select search country elements
const search_country_element = document.querySelector(".search-country");
const country_list_element = document.querySelector(".country-list");
const change_country_btn = document.querySelector(".change-country");
const close_list_btn = document.querySelector(".close");
const input = document.getElementById("search-input");

// create country list
function createCountryList() {
  const num_countries = country_list.length;

  let i = 0,
    ul_list_id;

  country_list.forEach((country, index) => {
    if (index % Math.ceil(num_countries / num_of_ul_lists) == 0) {
      ul_list_id = `list-${i}`;
      country_list_element.innerHTML += `<ul id=${ul_list_id}></ul>`;
      i++;
    }
    document.getElementById(`${ul_list_id}`).innerHTML += `
        <li onclick="countryData('${country.code}');countryTimeline('${country.code}')" id="${country.name}"> 
        ${country.name} 
        </li>
        `;
  });
}

let num_of_ul_lists = 3;
createCountryList();
// Show /hide country list on click
change_country_btn.addEventListener("click", function () {
  input.value = "";
  resetCountryList();
  search_country_element.classList.toggle("hide");
  search_country_element.classList.add("fadeIn");
});

close_list_btn.addEventListener("click", function () {
  search_country_element.classList.toggle("hide");
});
country_list_element.addEventListener("click", function () {
  search_country_element.classList.toggle("hide");
});

// country filter

input.addEventListener("input", function () {
  let value = input.value.toUpperCase();
  console.log(value);
  country_list.forEach((country) => {
    if (country.name.toUpperCase().startsWith(value)) {
      document.getElementById(country.name).classList.remove("hide");
    } else {
      document.getElementById(country.name).classList.add("hide");
    }
  });
});

// reset country list

function resetCountryList() {
  country_list.forEach((country) => {
    document.getElementById(country.name).classList.remove("hide");
    document.getElementById(`${country.name}One`).classList.remove("hide");
    document.getElementById(`${country.name}two`).classList.remove("hide");
  });
}

// for comparision stuff
// for first country

const search_country_element_one = document.querySelector(
  ".search-country_one"
);

const close_list_btn_one = document.querySelector(".close_one");
const input_one = document.getElementById("search-input_one");
const country_list_element_one = document.querySelector(".country-list_one");
const change_country_btn_one = document.querySelector(".change-country_one");
const select_country_one = document.querySelector(".nameOne");
const select_country_two = document.querySelector(".nameTwo");
function createCountryListOne() {
    const num_countries = country_list.length;
  
    let i = 0,
      ul_list_id;
  
    country_list.forEach((country, index) => {
        
      if (index % Math.ceil(num_countries / num_of_ul_lists) == 0) {
        ul_list_id = `listOne-${i}`;
        country_list_element_one.innerHTML += `<ul id=${ul_list_id}></ul>`;
        i++;
      }
      document.getElementById(`${ul_list_id}`).innerHTML += `
          <li onclick="setOneCode('${country.code}');changeOneCode('${country.name}')" id="${country.name}One"> 
          ${country.name} 
          </li>
          `;
    });
  }
createCountryListOne();
// Show /hide country list on click

function changeOneCode(country) {
  select_country_one.innerHTML=country;
}

change_country_btn_one.addEventListener("click", function(){
    input_one.value = "";
    resetCountryList();
    search_country_element_one.classList.toggle("hide");
    search_country_element_one.classList.add("fadeIn");
  });

close_list_btn_one.addEventListener("click", function () {
  search_country_element_one.classList.toggle("hide");
});
country_list_element_one.addEventListener("click", function () {
  search_country_element_one.classList.toggle("hide");
});
input_one.addEventListener("input", function () {
  let valueOne = input_one.value.toUpperCase();
  console.log(valueOne);
  country_list.forEach((country) => {
    if (country.name.toUpperCase().startsWith(valueOne)) {
      document.getElementById(`${country.name}One`).classList.remove("hide");
    } else {
      document.getElementById(`${country.name}One`).classList.add("hide");
    }
  });
});

// for second country

const search_country_element_Two = document.querySelector(".search-country_two");
  
  const close_list_btn_two = document.querySelector(".close_two");
  const input_two = document.getElementById("search-input_two");
  const country_list_element_two = document.querySelector(".country-list_two");
  const change_country_btn_two = document.querySelector(".change-country_two");
  
  function createCountryListtwo() {
      const num_countries = country_list.length;
    
      let i = 0,
        ul_list_id;
    
      country_list.forEach((country, index) => {
          
        if (index % Math.ceil(num_countries / num_of_ul_lists) == 0) {
          ul_list_id = `listtwo-${i}`;
          country_list_element_two.innerHTML += `<ul id=${ul_list_id}></ul>`;
          i++;
        }
        document.getElementById(`${ul_list_id}`).innerHTML += `
            <li onclick="setTwoCode('${country.code}');changeTwoCode('${country.name}')" id="${country.name}two"> 
            ${country.name} 
            </li>
            `;
      });
    }
  createCountryListtwo();
  // Show /hide country list on click
  
function changeTwoCode(country) {
  select_country_two.innerHTML=country;
}
  change_country_btn_two.addEventListener("click", function(){
      input_two.value = "";
      resetCountryList();
      search_country_element_Two.classList.toggle("hide");
      search_country_element_Two.classList.add("fadeIn");
    });
  
  close_list_btn_two.addEventListener("click", function () {
    search_country_element_Two.classList.toggle("hide");
  });
  country_list_element_two.addEventListener("click", function () {
    search_country_element_Two.classList.toggle("hide");
  });
  input_two.addEventListener("input", function () {
    let valuetwo = input_two.value.toUpperCase();
    console.log(valuetwo);
    country_list.forEach((country) => {
      if (country.name.toUpperCase().startsWith(valuetwo)) {
        document.getElementById(`${country.name}two`).classList.remove("hide");
      } else {
        document.getElementById(`${country.name}two`).classList.add("hide");
      }
    });
  });

 
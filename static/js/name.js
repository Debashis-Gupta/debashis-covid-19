let countryData=[];
let fetch_data=[];
let show_dataset;

let value_store=[];



$(function () {
    $.ajax({
      url: `https://api.thevirustracker.com/free-api?countryTotals=ALL`,
      dataType: "json",
      success: function (data) {
        setCountryData(data);
      }, // success function
    }); //ajax function
  }); // bahirer function

function setCountryData(data) {
    show_dataset=data;
    value_store.push(Object.keys(show_dataset.countryitems[0]));
    value_store[0].forEach(items => {
        // console.log(show_dataset.countryitems[0][items]["title"])
        countryData.push(
            { name:show_dataset.countryitems[0][items]["title"],code:show_dataset.countryitems[0][items]["code"] }
        );
    })
}


// let tryarray=[];
// tryarray.push(
//     { name: 'United States', code: 'US' },
//     { name: 'Bangladesh', code: 'BD' },
// );
countryData.forEach(country=>{
    console.log(country.name);
    console.log(country_code);
})
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  var countryName = $('#country-name').val();

  if(!countryName.length) {
    countryName = 'Poland';
  }

  $.ajax({
    url: url + countryName,
    method: 'GET',
    success: showCountriesList
  });
}

function showCountriesList(resp) {
  var coutry = "";
  countriesList.empty();
  resp.forEach(function(item){
    country = $('<li>').text(' ');
    $('<p class="name">').text('Country: ' + item.name).appendTo(country);
    $('<p>').text('Language: ' + item.languages).appendTo(country);
    $('<p>').text('Population: ' + item.population).appendTo(country);
    $('<p>').text('Region: ' + item.region).appendTo(country);
    country.appendTo(countriesList);
  });
}
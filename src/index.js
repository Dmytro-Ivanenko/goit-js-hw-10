import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { countryList, countryFullInfo } from './infoMarkup';
var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const refs = {
  search: document.querySelector('#search-box'),
  countryInfo: document.querySelector('.country-info'),
};

// functions

function renderCountries(countriesArr) {
  if (countriesArr.length > 10) {
    // alert('Too many matches found. Please enter a more specific name.');
  } else if (countriesArr.length >= 2 && countriesArr.length <= 10) {
    refs.countryInfo.innerHTML = countryList(countriesArr);
  } else {
    refs.countryInfo.innerHTML = countryFullInfo(countriesArr);
  }
}

// Handlers
const onInput = e => {
  if (refs.search.value === '') {
    refs.countryInfo.innerHTML = '';
    return;
  } else {
    fetchCountries(refs.search.value)
      .then(countries => {
        renderCountries(countries);
      })
      .catch(error => {});
  }
};

refs.search.addEventListener('input', debounce(onInput, 300));

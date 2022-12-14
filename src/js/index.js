import '../css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
var debounce = require('lodash.debounce');

import { fetchCountries } from './fetchCountries';
import { countryList, countryFullInfo } from './infoMarkup';

const DEBOUNCE_DELAY = 300;

const refs = {
  search: document.querySelector('#search-box'),
  countryInfo: document.querySelector('.country-info'),
  countryList: document.querySelector('.country-list'),
};

// functions

function renderCountries(countriesArr) {
  if (countriesArr.length > 10) {
    // alert('Too many matches found. Please enter a more specific name.');
    Notify.info('Too many matches found. Please enter a more specific name.', {
      timeout: 6000,
      position: 'center-top',
    });
  } else if (countriesArr.length >= 2 && countriesArr.length <= 10) {
    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = countryList(countriesArr);
  } else {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = countryFullInfo(countriesArr);
  }
}

// Handlers
const onInput = e => {
  if (refs.search.value.trim() === '') {
    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
    return;
  } else {
    fetchCountries(refs.search.value.trim())
      .then(countries => {
        renderCountries(countries);
      })
      .catch(error => {
        Notify.failure('Oops, there is no country with that name', {
          timeout: 6000,
          position: 'center-top',
        });
      });
  }
};

refs.search.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

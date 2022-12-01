function countryList(countryArr) {
  return countryArr
    .map(({ name, flags }) => {
      return `<li class = "country-item"><img src=${flags.svg} alt="flag of ${name.official}" height = "100px"><p>${name.official}</p></li>`;
    })
    .join('');
}

function countryFullInfo(countryArr) {
  return countryArr
    .map(({ name, flags, capital, population, languages }) => {
      return `<div><img src = ${flags.svg} alt="flag of ${
        name.official
      }" height = "200px"><h2>${
        name.official
      }</h2></div><ul><li><p><span>Capital:</span> ${capital}</p></li><li><p><span>Population:</span> ${population}</p></li><li><p><span>Languages:</span> ${Object.values(
        languages
      ).join(', ')}</p></li></ul>`;
    })
    .join('');
}

export { countryList, countryFullInfo };

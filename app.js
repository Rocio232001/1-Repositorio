const countries = require('./countries.json');
function getCountryByIso3(isoCode){
    for(var k in countries) {
        if(countries[k].iso3==isoCode){
            return countries[k].name;
        }
     }
}
function getCountryTranslatedName(isoCode, language){
    for(var k in countries) {
        if(countries[k].iso3==isoCode){
            return countries[k].translations[language];
        }
     }
}
function getCountriesBySubregion(subregion){
    var lista = []
    for(var k in countries) {
        if(countries[k].subregion==subregion){
            lista.push(countries[k].name);
        }
     }
}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountryTranslatedName('ARG', 'ja'),
        '\n');
    console.log(
        '///// Ejercicio 3 /////\n',
        getCountriesBySubregion('South America'),
        '\n');

}

main();
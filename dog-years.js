const earthYearInSeconds = 31557600;
const dogYearsPerHumanYear = 7;

const orbitalPeriods = {
    earth: 1,
 mercury: 0.2408467,
 venus: 0.61519726,
 mars: 1.8808158,
 jupiter: 11.862615,
 saturn: 29.447498,
 uranus: 84.016846,
 neptune: 164.79132,
};

function dogYears(planet, ageInSeconds) {
 const ageInEarthYears = ageInSeconds / earthYearInSeconds;
 const ageInDogYears = ageInEarthYears * dogYearsPerHumanYear;
 const orbitalPeriod = orbitalPeriods[planet];

 const ageOnPlanetInYears = ageInDogYears / orbitalPeriod;
 return Math.round(ageOnPlanetInYears * 100) / 100;
}

console.log(dogYears("earth", 1000000000)); // 221.82
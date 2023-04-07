const SumDate = new Date("2023-6-23");
const ExDate = new Date("2023-5-23");
const currentDate = new Date();
const timeDiffSum = SumDate.getTime() - currentDate.getTime();
const timeDiffEx = ExDate.getTime() - currentDate.getTime();

const daysLeftSum = Math.ceil(timeDiffSum / (1000 * 3600 * 24));
const daysLeftEx = Math.ceil(timeDiffEx / (1000 * 3600 * 24));
document.getElementById("summer").innerHTML = `Zostało ${daysLeftSum} dni do końca roku szkolnego.`;
document.getElementById("exam8").innerHTML = `Zostało ${daysLeftEx} dni do egzaminu 8 klasisty.`;

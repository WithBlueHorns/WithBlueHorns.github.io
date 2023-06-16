
const UpdateDate = new Date("2022-1-4");
const currentDate = new Date();
const timeDiffSum = currentDate.getTime() - UpdateDate.getTime();

const daysLeftUpdate = Math.ceil(timeDiffSum / (1000 * 3600 * 24));
document.querySelector('span.bb-text').innerHTML = daysLeftUpdate;


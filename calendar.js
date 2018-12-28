// calendar

const calendar = function(startDate, days) {
  console.log(startDate);
  console.log(typeof startDate);
  let result = [];
  let currDate = startDate;
  console.log(currDate);
  for (let offset=0; offset < days; offset++) {
    result.push(currDate);
    let nextDate = new Date(currDate);
    nextDate.setDate(currDate.getDate()+1);
    currDate = nextDate;
  }
  return result;
};

const dates = calendar(new Date(2018,0,1), 3650);
dates.forEach((date, index) => {
  console.log(`${index}: ${date}`);
})

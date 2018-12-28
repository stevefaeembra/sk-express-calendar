// calendar

const calendar = function *(startDate, days) {

  // this is a generator function, returns a series of dates
  // one day at a time, for the specified number of days
  // for simplicity, rounds down provided date to sunday of the same week

  let result = [];
  // change it to go back to start of week (0=sun)
  let startDate2 = new Date(startDate);
  startDate2.setDate(startDate.getDate()-startDate.getDay());
  let currDate = startDate2;
  for (let offset=0; offset < days; offset++) {
    yield currDate;
    let nextDate = new Date(currDate);
    nextDate.setDate(currDate.getDate()+1);
    currDate = nextDate;
  };
};

const calendarIterator = function(startDate, days) {
  //
  // returns an array of arrays
  // each subarray represents one week
  // each week starts with Sunday
  // each day has a day/month/year value
  //
  const cal = calendar(startDate, 90);
  let week = 0;
  let result=[];
  let weekString="";
  let currWeek = [];
  for (var thisDay of cal) {
    if (thisDay.getDay()===0) {
      result.push(currWeek);
      currWeek = [];
    }
    let toDay = (thisDay.getDate()<10) ? "0" : "";
    toDay += thisDay.getDate();
    let toMonth = (thisDay.getMonth()+1);
    let toYear = (thisDay.getFullYear());
    currWeek.push({
      day: toDay,
      month: toMonth,
      year: toYear
    })
  };
  result.shift(); // get rid of empty first row
  return result;
}

module.exports = calendarIterator;

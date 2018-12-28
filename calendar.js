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
  const cal = calendar(startDate, days);
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
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
    let toMonth = months[thisDay.getMonth()];
    let toYear = (thisDay.getFullYear());


    // work out css class hints

    // first day of a month
    let cssClasses = "day";
    if (thisDay.getDate()=== 1) {
      cssClasses += " day--first-of-month";
    };

    // check to see if the day 1 week before this date is in a different month
    let oneWeekBefore = new Date(thisDay);
    oneWeekBefore.setDate(thisDay.getDate()-7);
    if (oneWeekBefore.getMonth() != thisDay.getMonth()) {
      cssClasses += " day--border-top";
    }

    // thick borders to left of sunday and right of saturday
    if (thisDay.getDay()==0) {
      cssClasses += " day--border-left";
      cssClasses += " day--weekend";
    }
    if (thisDay.getDay()==6) {
      cssClasses += " day--border-right";
      cssClasses += " day--weekend";
    }

    // is it today?
    const today = new Date();
    if (thisDay.getDate() == today.getDate() &&
        thisDay.getMonth() == today.getMonth() &&
        thisDay.getFullYear() == today.getFullYear()
    ) {
      cssClasses += " day--today";
    }

    // add to list
    currWeek.push({
      day: toDay,
      month: toMonth,
      year: toYear,
      classes: cssClasses
    })
  };
  result.shift(); // get rid of empty first row
  return result;
}

module.exports = calendarIterator;

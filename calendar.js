// calendar

const calendar = function *(startDate, days) {
  let result = [];
  let currDate = startDate;
  for (let offset=0; offset < days; offset++) {
    yield currDate;
    let nextDate = new Date(currDate);
    nextDate.setDate(currDate.getDate()+1);
    currDate = nextDate;
  };
};


const cal = calendar(new Date(2018,0,1), 30);
for (var day of cal) {
  console.log(day);
}

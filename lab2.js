// 1. implement another method getTime and print out current time;

const calendar = {
  getDate: function () {
    return new Date().toDateString();
  },

  getTime: function () {
    return new Date().toTimeString();
  }
};

console.log(calendar.getDate());
console.log(calendar.getTime());
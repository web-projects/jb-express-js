module.exports = {
  getTimeStamp: function () {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var date = new Date();
    var day = date.getDate();
    day = ((day < 10) ? '0' : '') + day;
    var month = date.getMonth();
    month = ((month < 10) ? '0' : '') + (month + 1);
    var year = date.getFullYear();

    var hour = date.getHours();
    hour = ((hour < 10) ? '0' : '') + hour;
    var min = date.getMinutes();
    min = ((min < 10) ? '0' : '') + min;
    var sec = date.getSeconds();
    sec = ((sec < 10) ? '0' : '') + sec;

    //return day + ' ' + monthNames[month] + ' ' + year;
    var format = month + day + year + '-' + hour + ':'  + min + ':' + sec;

    return format;
  },
};

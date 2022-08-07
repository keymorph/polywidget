function getTime() {
    let date = new Date();

    let weekday = date.getDay();        // 0-6
    let day = date.getDate();           // 1-31
    let month = date.getMonth() + 1;    // 0-11
    let year = date.getFullYear();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ms = date.getMilliseconds();

    let timePeriod = "AM";

    let timezone = date.getTimezoneOffset();

    switch(0 < h || h <= 23) { 
        //0 < h <= 23
        case (h == 0):
            h = 12;
            break;
        case (h < 10): // 0-9
            h = "0" + h;
            break;
        case (h < 13): //10-12
            break;
        default:
            h = h % 12;
            timePeriod = "PM";
            break;
    }

    m = (m < 10 ? "0" + m : m);
    s = (s < 10 ? "0" + s : s);
    // ms = (ms < 100 ? "0" + ms : ms);

    let pickDay = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    }

    // future improvement, add all of the timezones to object
    // https://www.timeanddate.com/time/zones/gmt
    var timezoneString = {
        240 : "EDT",
        300 : "EST",
        420 : "PDT",
        480 : "PST",
    };

    // date.toString()
    var now = date.toString() + "\n\n" + "(" + month + "/" + day + "/" + year + ")" + "\n" + pickDay[weekday] + "\n" + h + ":" + m + ":" + s + " " + timePeriod + " " + timezoneString[timezone];

    document.querySelector("#clock").innerText = now;
}

window.onload = getTime;
setInterval(getTime, 100);
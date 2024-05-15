// Select clock elements
var clockTime = document.getElementById('clock-time');
var clockDate = document.getElementById('clock-date');

// Array of week days
var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Update time every second
var timerID = setInterval(updateTime, 1000);
updateTime();

// Function to update time
function updateTime() {
    var cd = new Date();
    var time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    var date = zeroPadding(cd.getDate(), 2) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getFullYear(), 4) + ' ' + week[cd.getDay()];
    clockTime.textContent = time;
    clockDate.textContent = date;
}

// Function to add zero padding
function zeroPadding(num, digit) {
    var zero = '';
    for (var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}

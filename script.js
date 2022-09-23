setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	Time_chng = "AM";

	if (hour > 12) {
		hour -= 12;
		Time_chng = "PM";
	}
	if (hour == 0) {
		hr = 12;
		Time_chng = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = hour + ":"
			+ min + ":" + sec + Time_chng;

	document.getElementById("p1")
			.innerHTML = currentTime;
}
showTime();

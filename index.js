let clearAlarm = document.getElementById("clearbutton");
    clearAlarm.onclick = function () {
        location.reload();
    }

    function time() {
        let date = new Date();

        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let session = "AM";

        if (hour == 0) {
            hour = 12;
        }
        if (hour >= 12) {
            hour = hour;
            session = "PM";

        }
        if (hour > 12) {
            hour = hour - 12;
        }
        hour = (hour < 10) ? "0" + hour : hour;
        minute = (minute < 10) ? "0" + minute : minute;
        second = (second < 10) ? "0" + second : second;


        let hours = document.getElementById("hours");
        let minutes = document.getElementById("minutes");
        let seconds = document.getElementById("seconds");
        let sessions = document.getElementById("session");

        hours.innerText = hour + ":";
        minutes.innerText = minute + ":";
        seconds.innerText = second;
        sessions.innerText = session;
        setTimeout(time, 1000);
    }
    time();

    //RingBell function
    function ringBell() {
        let audio = new Audio("alarm.mp3")
        audio.play();
    }


    function menuHour() {
        let alarmHour = document.getElementById("selectHour");
        let hrs = 12;
        for (let i = 0; i <= hrs; i++) {
            alarmHour.options[alarmHour.options.length] = new Option(i < 10 ? "0" + i : i, i);
        }
    }
    menuHour();

    function menuMinute() {
        const alarmMinute = document.getElementById("selectMinute");

        let min = 59;
        for (let i = 0; i <= min; i++) {
            alarmMinute.options[alarmMinute.options.length] = new Option(i < 10 ? "0" + i : i, i);
        }
    }
    menuMinute();

    function menuSecond() {
        const alarmSecond = document.getElementById("selectSecond")
        let sec = 59;
        for (let i = 0; i <= sec; i++) {
            alarmSecond.options[alarmSecond.options.length] = new Option(i < 10 ? "0" + i : i, i);
        }
    }
    menuSecond();

    let btn = document.getElementById("btn");

    btn.addEventListener("click", function (e) {
        e.preventDefault();
        alarmSet();
        function alarmSet() {
            const alarmMinute = document.getElementById("selectMinute");
            const alarmHour = document.getElementById("selectHour");
            const alarmSecond = document.getElementById("selectSecond")
            const alarmSession = document.getElementById("selectSession")

            let selectedHour = alarmHour.options[alarmHour.selectedIndex].value;
            let selectedMin = alarmMinute.options[alarmMinute.selectedIndex].value;
            let selectedSec = alarmSecond.options[alarmSecond.selectedIndex].value;
            let selectedSession = alarmSession.options[alarmSession.selectedIndex].value;

            let alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + selectedSession;

            let setalarm = document.getElementById("setalarm");
            setalarm.innerText = alarmTime;

            console.log('alarmTime:' + alarmTime);

            setInterval(function () {

                let date = new Date();
                let hour = date.getHours();
                let minute = date.getMinutes();
                let second = date.getSeconds();
                let session = "AM";

                if (hour == 0) {
                    hour = 12;
                }
                if (hour >= 12) {
                    hour = hour;
                    session = "PM";

                }
                if (hour > 12) {
                    hour = hour - 12;
                }
                hour = (hour < 10) ? "0" + hour : hour;
                minute = (minute < 10) ? "0" + minute : minute;
                second = (second < 10) ? "0" + second : second;


                let currentTime = addZero(hour) + ":" + addZero(minute) + ":" + addZero(second) + "" + session;
                console.log(currentTime)
                if (alarmTime == currentTime) {
                    let setAlarm = document.getElementById("setalarm");
                    setalarm.className = "active";
                    ringBell();
                }

            }, 1000);

        }
        let form = document.querySelector("form");
        form.reset();
    })
    function addZero(time) {
        return (time < 10) ? "0" + time : time;
    }

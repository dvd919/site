// 디데이 날짜 설정 (YYYY-MM-DD 형식)
const ddayDate = '2023-09-19';
const ddayDate_2 = '2024-04-30';
const ddayDate_3 = '2023-08-11';

function updateCountdown() {
    const ddayTime = new Date(ddayDate).getTime();
    const now = new Date().getTime();
    const timeRemaining = ddayTime - now;

    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    const ddayTime_2 = new Date(ddayDate_2).getTime();
    const timeRemaining_2 = ddayTime_2 - now;

    const seconds_2 = Math.floor((timeRemaining_2 % (1000 * 60)) / 1000);
    const minutes_2 = Math.floor((timeRemaining_2 % (1000 * 60 * 60)) / (1000 * 60));
    const hours_2 = Math.floor((timeRemaining_2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days_2 = Math.floor(timeRemaining_2 / (1000 * 60 * 60 * 24));

    document.getElementById('days_2').textContent = days_2;
    document.getElementById('hours_2').textContent = hours_2;
    document.getElementById('minutes_2').textContent = minutes_2;
    document.getElementById('seconds_2').textContent = seconds_2;

    const ddayTime_3 = new Date(ddayDate_3).getTime();
    const timeRemaining_3 = ddayTime_3 - now;

    const seconds_3 = Math.floor((timeRemaining_3 % (1000 * 60)) / 1000);
    const minutes_3 = Math.floor((timeRemaining_3 % (1000 * 60 * 60)) / (1000 * 60));
    const hours_3 = Math.floor((timeRemaining_3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days_3 = Math.floor(timeRemaining_3 / (1000 * 60 * 60 * 24));

    document.getElementById('days_3').textContent = days_3;
    document.getElementById('hours_3').textContent = hours_3;
    document.getElementById('minutes_3').textContent = minutes_3;
    document.getElementById('seconds_3').textContent = seconds_3;
}

// 초당 한 번씩 디데이 업데이트
setInterval(updateCountdown, 1000);
// 디데이 날짜 설정 (YYYY-MM-DD 형식)
const ddayDate = '2023-09-19';
const ddayDate_2 = '2024-04-30';

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
    const now_2 = new Date().getTime();
    const timeRemaining_2 = ddayTime_2 - now_2;

    const seconds_2 = Math.floor((timeRemaining_2 % (1000 * 60)) / 1000);
    const minutes_2 = Math.floor((timeRemaining_2 % (1000 * 60 * 60)) / (1000 * 60));
    const hours_2 = Math.floor((timeRemaining_2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days_2 = Math.floor(timeRemaining_2 / (1000 * 60 * 60 * 24));

    document.getElementById('days').textContent = days_2;
    document.getElementById('hours').textContent = hours_2;
    document.getElementById('minutes').textContent = minutes_2;
    document.getElementById('seconds').textContent = seconds_2;
}

// 초당 한 번씩 디데이 업데이트
setInterval(updateCountdown, 1000);
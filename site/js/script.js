// 디데이 날짜 설정 (YYYY-MM-DD 형식)
const ddayDate = '2023-09-19';

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
}

// 초당 한 번씩 디데이 업데이트
setInterval(updateCountdown, 1000);
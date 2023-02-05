/*new Date로 현재 날짜 가져오기*/
const date = new Date();
const currentYear = new Date(date).getFullYear();
const currentMonth = new Date(date).getMonth() + 1;


/*이번달 시작 요일 , 마지막 날짜 가져오기*/
const firstDay = new Date(date.setDate(1)).getDay();
const lastDate = new Date(currentYear, currentMonth, 0).getDate();
const lastDay = new Date(currentYear, currentMonth, 0).getDay();
const toDay = date.getDate();
console.log(toDay);
console.log(date);
/*지난달 만들기*/

function calendar(firstDay, lastDay, lastDate){
    let htmlDummy = '';
    for(let i = 0; i < firstDay; i++){
        htmlDummy += `<div class="no-color"></div>`;
    }
    
    /*이번달 날짜 만들기*/
    for(let i = 1; i <= lastDate; i++){
        htmlDummy += `<div>${i}</div>`;
    }
    
    /*다음달 날짜 만들기*/
    for(let i = lastDay+1; i < 7; i++){
        htmlDummy += `<div class="no-color"></div>`;
    }
    
    /*날짜 출력*/
    const paintDate = document.querySelector(".date");
    paintDate.innerHTML = htmlDummy;
    
    document.querySelector(".calendar__year-month").innerText = `${currentYear}년 ${currentMonth}월`;
    
}

calendar(firstDay, lastDay, lastDate);
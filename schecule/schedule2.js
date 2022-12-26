var arr = "";
var toYear = date.getFullYear();
var toMonth = date.getMonth();
// var toMonth = 11;

//이달 구하기
var firstDay = new Date(toYear, toMonth, 1).getDay(); //이 달 1일 요일 구하기
var lastDate = new Date(toYear, toMonth + 1, 0).getDate(); // 이 달의 마지막 날짜 구하기
var lastDay = new Date(toYear, toMonth, lastDate).getDay(); // 이 달의 마지막 요일 구하기

console.log("1일 요일", firstDay);
console.log("이달 마지막 날짜", lastDate);
console.log("마지막 요일", lastDay);

//해당 월
var month = toYear + "년" + (toMonth + 1) + "월";
$(".month").text(month);
console.log("해당 월", month);

// 첫번째 줄 빈칸 5개
for (var bin = 0; bin < firstDay; bin++) {
    arr += "[ ]";
    $(".calendar-body").append("<li></li>");
}
console.log("빈칸", bin);

//날짜
for (var i = 1; i <= lastDate; i++) {
    $(".calendar-body").append("<li class='date'>" + i + "</li>");

    getday = new Date(toYear, toMonth, i).getDay(); // 요일을 얻어낸다. (일요일=0, 토요일=6)

    // 다음행 이동
    if (getday == 0) {
        arr += "\n";
        $(".calendar-body").append("<br/>");
    }
    arr += " " + i;
}

console.log(arr);

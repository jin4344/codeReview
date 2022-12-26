// 전 달로 이동
function prevMonth(date) {
    let target = new Date(date);
    target.setDate(1);
    target.setMonth(target.getMonth() - 1);

    return getYmd(target);
}

// 다음 달로 이동
function nextMonth(date) {
    let target = new Date(date);
    target.setDate(1);
    target.setMonth(target.getMonth() + 1);

    return getYmd(target);
}

// 월 계산
function getYmd(target) {
    // IE에서 날짜 문자열에 0이 없으면 인식 못함
    let month = ("0" + (target.getMonth() + 1)).slice(-2);
    return [target.getFullYear(), month, "01"].join("-");
}

// 날짜 계산
function fullDays(date) {
    let target = new Date(date);
    let year = target.getFullYear();
    let month = target.getMonth();

    let firstWeekDay = new Date(year, month, 1).getDay();
    let thisDays = new Date(year, month + 1, 0).getDate();

    // 달력 칸수 지정
    let cell = [28, 35, 42]
        .filter(function (n) {
            return n >= firstWeekDay + thisDays;
        })
        .shift();

    // 셀 초기화, IE에서 Array.fill()을 지원하지 않아서 변경
    // let days = new Array(cell).fill({date: '', dayNum: '', today: false});
    let days = [];
    for (let i = 0; i < cell; i++) {
        days[i] = {
            date: "",
            dayNum: "",
            today: false,
        };
    }

    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let inDate;
    for (let index = firstWeekDay, i = 1; i <= thisDays; index++, i++) {
        inDate = new Date(year, month, i);
        days[index] = {
            date: i,
            dayNum: inDate.getDay(),
            today: inDate.getTime() === today.getTime(),
        };
    }

    return days;
}

// 달력 생성
function drawMonth(date) {
    $("#month-this").text(date.substring(0, 7).replace("-", "."));
    $("#month-prev").data("ym", prevMonth(date));
    $("#month-next").data("ym", nextMonth(date));

    $("#tbl-month").empty();

    let td = '<td class="__REST__ __TODAY__"><a __HREF__>__DATE__</a></td>';
    let href = "/depart/schedule?date=" + date.substring(0, 8);
    let hasEvent;
    let tdClass;
    let week = null;
    let days = fullDays(date);
    for (let i = 0, length = days.length; i < length; i += 7) {
        // 전체 셀을 주단위로 잘라서 사용
        week = days.slice(i, i + 7);

        let $tr = $("<tr></tr>");

        // 이벤트 설정, 이거 수정하면 날짜 선택하고 계획잡기 가능 할듯
        // 우선 달력을 클릭 가능하게 바꿔야함
        // 클릭 정보를 어딘가에 담아야함
        // 클릭 시 시간선택도 나와야 할 듯함
        week.forEach(function (obj, index) {
            // 매주 수요일에 이벤트가 있다고 가정
            hasEvent = index === 6;
            tdClass = index === 0 ? "sun" : "";
            tdClass = index === 6 ? "sat" : tdClass;

            $tr.append(
                td
                    .replace("__REST__", tdClass)
                    .replace("__TODAY__", obj["today"] ? "today" : "")
                    .replace("__HREF__", hasEvent ? 'href="' + href + ("0" + obj["date"]).slice(-2) + '"' : "")
                    .replace("__DATE__", obj["date"])
            );
        });
        $("#tbl-month").append($tr);
    }
}

$(function () {
    let date = new Date().toISOString().substring(0, 10);
    drawMonth(date);

    $(".month-move").on("click", function (e) {
        e.preventDefault();

        drawMonth($(this).data("ym"));
    });
});

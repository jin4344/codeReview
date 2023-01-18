$(document).ready(function () {
    // 로그인시 처음 띄워질 main html
    // 이러면 새로고침하면 main만 나오는데....
    // state 좀 공부 해야 할듯
    document.getElementById("window").src = "../지인씨/view/profile/img/profile1.html";
});

// 로그인 성공하면 "로그인하러 가기"를 간단 프로필로 만들기
window.onload = function () {
    // if(/*로그인 성공 */){
    $("#profileBox").css({
        width: "30%",
        height: "90px",
        margin: "8px",
    });

    $("#profileBox").append("<img src ='../지인씨/view/profile/img/0.png'/>");
    $("#profileBox").append("<p>" + /*서버에서 사용자 이름 가져오기*/ +"</p>");
    // }
};
//

$(document).ready(function () {
    // 로그인시 처음 띄워질 main html
    // 이러면 새로고침하면 main만 나오는데....
    // state 좀 공부 해야 할듯
    document.getElementById("window").src = "../지인씨/view/profile/img/profile1.html";
});

// 로그인 성공하면 "로그인하러 가기"를 간단 프로필로 만들기
window.onload = function () {
    // if(/*로그인 성공 */){
    // 로그인 후 로그인하러가기 사이즈 변경
    $("#profileBox").css({
        width: "30%",
        height: "90px",
        margin: "8px",
    });

    // 간단 프로필에 나올 프로필 사진과 사용자 닉네임 설정
    /* 나중에 개인이 설정한 프로필사진 나오게 하기 */
    $("#profileBox").append("<img src ='../지인씨/view/profile/img/0.png'/>"); //프로필 사진
    $("#profileBox").append("<p>" + /*서버에서 사용자 이름 가져오기*/ "sf" + "</p>"); // 닉네임
    $("#profileBox > p").css({
        marginRight: "2vh",
    });
    $("#profileBox > a").remove();
    //
    // 간단 프로필에 나올 메일함 설정
    const mailBox = document.createElement("div"); //메일함 wrap
    const profilePoto = document.createElement("img"); // 메일함 사진
    // const mailCheck = document.createElement("input"); // 메일 왔다는 신호 줄 input

    // mailCheck.setAttribute("type", "checkbox");
    profilePoto.setAttribute("src", "../img/imgForCss/mail.png");

    $("#profileBox").append(mailBox);
    $("#profileBox > div").append(profilePoto);
    // $("#profileBox > div").append(mailCheck);
    //  }
};

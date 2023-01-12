// $(document).ready(function () {
//     // 로그인시 처음 띄워질 html로 바꿔 넣기
//     $("#bodys").load("프로필.html");
// });

// $("#toProfile").click(function () {
//     $.ajax({
//         url: "/test.html",
//         success: function (result) {
//             alert("성공");
//             $("#body").load("test.html");
//         },
//     });
// });

let goProgile = document.getElementById("toProfile");

function gotoProfile() {
    goProgile.addEventListener("click", function () {
        $("#bodys").load("test.html");
    });
}

//
// 네비게이션 바의 목록 클릭 시 바디에 불러올 html 바꾸기
// 아직 구상 중, ajax 말고는 없는 듯
// $(() => {
//     $("#toProfile").onClick(() => {
//         $("#body").load("test.html");
//     });
// });

//ajax으로 불러오기, 이건 서버랑 통신해야하는데
// 이게 맞나?
// $(document).ready(function () {
//     $("#toProfile").click(function () {
//         $.ajax({
//             url: "/test.html",
//             success: function (result) {
//                 alert("성공");
//                 $("#body").load("test.html");
//             },
//         });
//     });
// });
$(document).ready(function () {
    $("#menu2").click(function () {
        $.ajax({
            url: "menu.html",
            success: function (result) {
                var refine = $("#message2").html(result).find("li");
                console.log(result);
                console.log(refine);
                console.log(typeof refine);
                $("#message2").html(refine);
            },
        });
    });
});

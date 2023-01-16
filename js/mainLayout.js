// 로그인시 처음 띄워질 main html
// 이러면 새로고침하면 main만 나오는데....
// state 좀 공부 해야 할듯
$(document).ready(function () {
    document.getElementById("window").src = "프로필.html";
});

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
// $(document).ready(function () {
//     $("#menu2").click(function () {
//         $.ajax({
//             url: "menu.html",
//             success: function (result) {
//                 var refine = $("#message2").html(result).find("li");
//                 console.log(result);
//                 console.log(refine);
//                 console.log(typeof refine);
//                 $("#message2").html(refine);
//             },
//         });
//     });
// });

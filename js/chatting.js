const Chat = (function () {
    // 나중에 사용자 이름 나오게 바꾸기
    const myName = "blue";

    // init 함수
    function init() {
        // enter 키 이벤트
        $(document).on("keydown", "div.input-div input", function (e) {
            if (e.keyCode == 13 && !e.shiftKey) {
                e.preventDefault();
                const message = $(this).val();

                // 메시지 전송
                if (message === "") {
                    // 이러면 입력한게 없을 때 전송 안함
                } else {
                    sendMessage(message);
                    // 입력창 clear
                    clearTextarea();
                }
            }
        });
    }

    // 메세지 태그 생성
    function createMessageTag(LR_className, senderName, message) {
        // 형식 가져오기
        let chatLi = $("div.chat.format ul li").clone();

        // 값 채우기
        chatLi.addClass(LR_className);
        chatLi.find(".sender span").text(senderName);
        chatLi.find(".message span").text(message);

        return chatLi;
    }

    // 메세지 태그 append
    function appendMessageTag(LR_className, senderName, message) {
        const chatLi = createMessageTag(LR_className, senderName, message);

        $("div.chat:not(.format) ul").append(chatLi);

        // 스크롤바 아래 고정, 이거 왜 안됨??
        $("body").scrollTop($("body").prop("scrollHeight"));
        // $(".chat").scrollTop($("div.chat")[0].scrollLow);
        // $(".chat").scrollTop = $("div.chat").scrollHeight;
    }

    // 여기 수정하기%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // 메세지 전송
    function sendMessage(message) {
        // 서버에 전송하는 코드로 후에 대체
        const data = {
            senderName: "blue",
            message: message,
        };
        // 통신하는 기능이 없으므로 여기서 receive
        resive(data);
    }

    // 메세지 입력박스 내용 지우기
    function clearTextarea() {
        $("div.input-div input").val("");
    }

    // 메세지 수신
    function resive(data) {
        const LR = data.senderName != myName ? "left" : "right";
        appendMessageTag("right", data.senderName, data.message);
    }

    return {
        init: init,
    };
})();

// 새로고침해도 스크롤 유지하는 명령어
// 이거 어디에 넣지?
history.scrollRestoration = "auto";

// 실행 함수
$(function () {
    Chat.init();
});

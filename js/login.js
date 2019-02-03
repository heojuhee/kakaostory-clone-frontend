
window.onload = init;

function init() {

    $(document).ready(function () {
        var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
        $(function () {
            $.backstretch(['assets/image1.jpg', 'assets/image2.jpg', 'assets/image3.jpg'], { duration: 3500, fade: 750 });
        }); // function
    }); // ready function

    // 아이디/비밀번호 공백 확인


    $('#loginForm').submit(function () {

        $("#errorBox").fadeOut(0);


        let id = document.getElementById("textid").value;
        let pw = document.getElementById("textpassword").value;

        let haveID = true;
        let havePw = true;

        // 아이디랑 비밀번호 검색해서 없으면 false로 바꿔주세여!!!


        if (!id.match(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i)
            && !id.match(/^\d{11}$/)) {
            document.getElementById("errorBox").innerHTML = "이메일 형식이 올바르지 않습니다.";

        } // if
        else if (haveID === false || havePw === false) {
            document.getElementById("errorBox").innerHTML = "카카오계정 혹은 비밀번호가 일치하지 않습니다. 입력한 내용을 다시 확인해 주세요.";
        } // else if
        else {
            login();
        } // else 
        $("#errorBox").fadeIn(500);
        return false;

    }); // submit

} // init

function login() {
    alert("로그인 성공");
}
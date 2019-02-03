window.onload = main;

function main() {

    // 도메인 선택한 것을 자동으로 채워주는 함수(제이쿼리)
    $('#domainSelect').change(function () {
        let idx = $('#domainSelect option:selected').val();
        $('#texteDaum').val(idx);
    });

    // submit시 비밀번호, 이메일 유효성 검사
    if (document.getElementById('joinForm'))
        document.getElementById('joinForm').onsubmit = function () {

            let UserPassword = document.getElementById("passwordTextId").value;
            let UserEmail = document.getElementById("textemail").value + "@" + document.getElementById("texteDaum").value;

            if (!UserEmail.match(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i)) {
                layerPopUp(1);
                return false;
            }
            else if (UserPassword.length < 8 || !UserPassword.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~,-])|([!,@,#,$,%,^,&,*,?,_,~,-].*[a-zA-Z0-9])/)) {
                layerPopUp(2);
                return false;
            } // if
            else if (UserPassword != document.getElementById("passwordareaok").value) {
                layerPopUp(3);
                return false;
            }
            else signUp();
        };
} // function main

function signUp() { // 회원가입
    alert("회원가입 성공 :)");
}

function layerPopUp(val) { // 레이어팝업

    $(document).ready(function () {

        wrapWindowByMask(val);

        $("#popUpWindow #close").click(function (e) { //닫기 버튼을 눌렀을 때
            e.preventDefault();
            $("#popUpmask, #popUpWindow").hide();
        });

        $("#popUpmask").click(function () { //검은 막을 눌렀을 때
            $(this).hide();
            $("#popUpWindow").hide();
        });
    });
}

function wrapWindowByMask(val) { // 레이어팝업 - 띄워주기

    //화면의 높이와 너비
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    //전체 화면을 채우기
    $("#popUpmask").css({ "width": maskWidth, "height": maskHeight });

    //애니메이션 효과
    $("#popUpmask").fadeIn(0);
    $("#popUpmask").fadeTo("slow", 0.6);
    $("#popUpWindow").show();

    if (val === 1) {
        document.getElementById("popUpContent").innerHTML = "이메일 형식이 올바르지 않습니다.";
    }
    else if (val === 2) {
        document.getElementById("popUpContent").innerHTML = "비밀번호는 8~32자리로 입력할 수 있어요!";
    }
    else if (val === 3) {
        document.getElementById("popUpContent").innerHTML = "입력한 비밀번호와 재입력한 비밀번호가 일치하지 않습니다. 다시 확인해 주세요.";
    }
}
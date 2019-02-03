window.onload = init;

function init() {
    main();
}

function main() {

    // 도메인 선택한 것을 자동으로 채워주는 함수(제이쿼리)
    $('#domainSelect').change(function () {
        var idx = $('#domainSelect option:selected').val();
        $('#texteDaum').val(idx);
    });


    // submit시 비밀번호 유효성 검사
    if (document.getElementById('joinForm'))
        document.getElementById('joinForm').onsubmit = function () {

            var UserPassword = document.getElementById("passwordTextId").value;
            alert(UserPassword);

            if (UserPassword.length < 8 || !UserPassword.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~,-])|([!,@,#,$,%,^,&,*,?,_,~,-].*[a-zA-Z0-9])/)) {
                alert("비밀번호는 8~32자리로 입력할 수 있어요!");
                return false;
            }
            else if (UserPassword != document.getElementById("passwordareaok").value) {
                alert("입력한 비밀번호와 재입력한 비밀번호가 일치하지 않습니다. 다시 확인해 주세요.");
                return false;
            }
            else signUp();
        };



} // function main



function signUp() { // 회원가입



}

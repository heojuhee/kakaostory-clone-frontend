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



}

function autoFillEmail() { // 아이디 중복 체크

    // $(document).ready(function() {

    //     #texteDaum = $("#domainSelect option:selected").val();

    // });

}


// $('#prod_type').change(function(){
//     var idx = $('#prod_type option').index( $(this).find('option:selected') );
//     $('#prod_type_idx').val(idx);
//     if ($(this).val() != "") {
//       var duty_per = $(this).val().split("|");
//       $('#duty_per').html("관세 : "+duty_per[0]+"% 부가세 : "+duty_per[1]+"%");
//     }
//   });

//   var prod_type_idx = "";
//   if (prod_type_idx != "") {
//     $('#prod_type option:eq('+prod_type_idx+')').attr("selected",true);
//     var duty_per = $('#prod_type option:eq('+prod_type_idx+')').val().split("|");
//     $('#duty_per').html("관세 : "+duty_per[0]+"% 부가세 : "+duty_per[1]+"%");

//                 // if - End
//               }
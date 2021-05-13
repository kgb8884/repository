// 아이디
function idcheck(){
    var exp = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,10}$/;
    var id = document.getElementById('id').value;
    var idresult = document.getElementById('id-check');
    if(id.length==0){
        idresult.style.color = 'red';
        idresult.innerHTML = '필수입력입니다.'
    } else if(!id.match(exp)){
        idresult.style.color = 'red';
        idresult.innerHTML = '유효하지 않은 형식입니다.';
    } else {
        idresult.style.color = 'green';
        idresult.innerHTML = '사용가능합니다.';
    }
}
// 비밀번호
function pwcheck() {
    var exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@!%*?&])[A-Za-z\d$@!%*#?&]{8,16}$/;
    var pw = document.getElementById('pw').value;
    var pwcheck = document.getElementById('pw-check');
    if(pw.length==0){
        pwcheck.style.color = 'red';
        pwcheck.innerHTML = '필수입력입니다.';
    } else if(!pw.match(exp)){
        pwcheck.style.color = 'red';
        pwcheck.innerHTML = '형식에 맞지 않습니다.';
    } else {
        pwcheck.style.color = 'green';
        pwcheck.innerHTML = '사용가능합니다.';
    }
}
// 비밀번호 확인
function pwconfirm() {
    var pw = document.getElementById('pw').value;
    var pwconfirm = document.getElementById('pw-hwag').value;
    var confirmresult = document.getElementById('pw-check');
    if(pw == pwconfirm){
        confirmresult.style.color = 'green';
        confirmresult.innerHTML = '일치합니다';
    } else {
        confirmresult.style.color = 'red';
        confirmresult.innerHTML = '일치하지 않습니다.';
    }
}
// 이름
function namecheck(){
    var name = document.getElementById('name').value;
    var nameresult = document.getElementById('name-check');
    if(name.length==0){
        nameresult.style.color = 'red';
        nameresult.innerHTML = '필수입력입니다.';
    } else {
        nameresult.style.color = 'green';
        nameresult.innerHTML = '사용가능합니다.';
    }
}
// 이메일
function emailselect(){
    var ele = document.getElementById('email-select').value;
    var emailmain = document.getElementById('email-main');
    document.getElementById('email-main').value = ele;
}
//전화번호
function phonecheck(){
    var exp = /^\d{3}-\d{4}-\d{4}$/;
    var phone = document.getElementById('phone').value;
    var result = document.getElementById('phone-check');
    if(phone.length==0){
        result.style.color = 'red';
        result.innerHTML = '필수입력입니다.';
    } else if(phone.match(exp)){
        result.style.color = 'green';
        result.innerHTML = '유효합니다.';
    } else {
        result.style.color = 'red';
        result.innerHTML = '유효하지 않습니다..';
    }
}
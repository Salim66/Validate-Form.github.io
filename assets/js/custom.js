// grap all elements
const sign_up_form = document.querySelector('#sign_up');
const msg = document.querySelector('.msg');



//submit form 
sign_up_form.addEventListener('submit', function (e) {
    e.preventDefault();

    let name = this.querySelector('input[name=name]').value;
    let email = this.querySelector('input[name=email]').value;
    let cell = this.querySelector('input[name=cell]').value;
    let uname = this.querySelector('input[name=uname]').value;
    let pass = this.querySelector('input[name=pass]').value;
    let cpass = this.querySelector('input[name=cpass]').value;
    let agree = this.querySelector('input[name=agree]').value;
    

    // empty fields check 
    if(Validate.empty(name) || Validate.empty(email) || Validate.empty(cell) || Validate.empty(uname) || Validate.empty(pass) || Validate.empty(cpass)){

        msg.innerHTML = Validate.setMsg('All fields are required!');

    }else if(!Regx.checkEmail(email)){

        msg.innerHTML = Validate.setMsg('Invalid email address!', 'warning');

    }else if(!Regx.checkPhoneNum(cell)){

        msg.innerHTML = Validate.setMsg('Invalid cell number!', 'warning');

    }else if(!Validate.passConfirm(pass, cpass)){

        msg.innerHTML = Validate.setMsg('Confirm password does not match!', 'info');

    }else {

        msg.innerHTML = Validate.setMsg('Data stable', 'success');

    }

});
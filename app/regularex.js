
class Regx {

    // Check validate email address
    static checkEmail(email){

        // set email pattern
        const pattern = /^[a-z0-9_.]*@[a-z0-9]*\.[a-z]{2,5}$/;
        
        return pattern.test(email);

    }

    // Check validate phone number
    static checkPhoneNum(phone){

        // set phone number pattern
        const pattern = /^(01|8801|\+8801)[0-9]{9}$/;

        return pattern.test(phone);

    }

}
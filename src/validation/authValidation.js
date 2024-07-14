import {check} from 'express-validator';

let validateRegister = [
    check("email", "Invalid email address").isEmail().trim(),
    check("password", "Invalid password. Password must be at least 5 chars long").isLength({
        min: 5
    }),
    check("confirmPassword", "Password confirm does not match").custom(
        (value, {req})=>{
            return value === req.body.password;
        }
    )
];

module.exports = {
    validateRegister: validateRegister
};
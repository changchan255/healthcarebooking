import db from "../models";
import bcrypt from "bcryptjs";

let createNewUser = (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            // check if user's email exists
            // return true if the email already exists
            let isEmailExists = await checkEmailUser(user);

            if (isEmailExists) {
                resolve(`Email ${user.email} already exists`);
            } else {
                // hash the user's password
                    let salt = bcrypt.genSaltSync(10);

                // update user's password
                    user.password = await bcrypt.hashSync(user.password, salt);

                // create a new user
                await db.User.create(user);
                resolve("done!");
            }

        } catch (e) {
            reject(e);
        }
    });
};

let checkEmailUser = (userCheck) => {
    return new Promise(async (resolve, reject) => {
        try {
            let currentUser = await db.User.findOne({
                where: { email: userCheck.email }
            });
            if(currentUser) resolve(true);
            resolve(false);
        }catch(e) {
            reject(e);
        }
    })
}

module.exports =
{
    createNewUser: createNewUser
};
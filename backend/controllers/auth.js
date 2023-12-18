const query = require("../database");
const bcryptjs = require("bcryptjs");
const { json } = require("body-parser");
const jwt = require("jsonwebtoken");

async function register(req, res) {
    const { firstName, lastName, email, phoneNumber, password, confPassword } = req.body;

    if (
        firstName === undefined ||
        firstName === "" ||
        lastName === undefined ||
        lastName === "" ||
        email === undefined ||
        email === "" ||
        phoneNumber === undefined ||
        isNaN(+phoneNumber) ||
        password === undefined ||
        password === "" ||
        confPassword === undefined ||
        confPassword === ""
    )
        return res.status(400).json("Invalid data register!");

    if (password !== confPassword) return res.status(400).json("Password not match!");

    try {
        // logic handling
        const isDuplicate = await query(
            `
        SELECT id FROM users WHERE email = ? OR phone_number = ? 
    `,
            [email, phoneNumber]
        );

        if (isDuplicate.length > 0) return res.status(400).json("User already exists!");

        const salt = await bcryptjs.genSalt(12);
        const hash = await bcryptjs.hash(password, salt);

        await query(
            `
        INSERT INTO users (
            firstname, lastname, email, phone_number, password
        ) VALUES (
            ?, ?, ?, ?, ?
        );
    `,
            [firstName, lastName, email, phoneNumber, hash]
        );

        return res.status(200).json("Register success!");
    } catch (error) {
        return res.status(400).json("Something went wrong!");
    }
}

async function login(req, res) {
    const { email, password } = req.body;

    if (
        email === undefined ||
        email === "" ||
        password === undefined ||
        password === ""
    )
        return res.status(400).json("Invalid Data");

    try {
        // logic handling
        const userData = await query(
            `SELECT * FROM users WHERE email = ?`,
            [email]
        );

        if (userData.length > 0) {
            // Cek Password
            bcryptjs.compare(password, userData[0].password, function (err, response) {
                if (err) return res.status(400).json("Error Compare Password")
                if (response) {
                    const token = jwt.sign({ email }, "jwt-secret-key", { expiresIn: "1d" });
                    res.cookie('token', token);
                    return res.status(200).json("Success")
                } else {
                    return res.status(400).json("Password Invalid")
                }
            });
        } else {
            return res.status(400).json("User Not Existed")
        }
    } catch (error) {
        return res.status(400).json("Something went wrong!");
    }
}

function verifyUser(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(400).json("You Are Not Authenticated")
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) {
                return res.status(400).json("Token Error")
            } else {
                req.email = decoded.email;
                next();
            }
        })
    }
}

function logout(req, res) {
    res.clearCookie('token');
    return res.json({ Status: "Success Logout" })
}

module.exports = {
    register,
    login,
    verifyUser,
    logout,
};

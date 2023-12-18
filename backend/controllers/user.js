const query = require("../database");
const bcryptjs = require("bcryptjs");

async function getUser(req, res) {
    try {
        const user = await query(
            `SELECT * FROM users WHERE id = ?`,
            [req.id]
        );
        return res.json({ Status: "Success", userData: user })
    } catch (error) {
        return res.status(400).json("Something Went Wrong!")
    }
}

async function updateUser(req, res) {
    const { id, firstName, lastName, email, phoneNumber, password } = req.body;

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
        password === ""
    )
        return res.status(400).json("Invalid data Update User!");

    try {
        // logic handling

        const salt = await bcryptjs.genSalt(12);
        const hash = await bcryptjs.hash(password, salt);

        await query(
            `
        UPDATE users SET 
            firstname=?,
            lastname=?,
            email=?,
            phone_number=?,
            password=?
        WHERE id = ?;
    `,
            [firstName, lastName, email, phoneNumber, hash, id]
        );

        return res.status(200).json("Update User success!");
    } catch (error) {
        return res.status(400).json("Something went wrong!");
    }
}

module.exports = {
    getUser,
    updateUser
}
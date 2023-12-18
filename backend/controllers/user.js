const query = require("../database");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function getUser(req, res) {
    try {
        const user = await query(
            `SELECT * FROM users WHERE email = ?`,
            [req.email]
        );
        return res.json({ Status: "Success", userData: user })
    } catch (error) {
        return res.status(400).json("Something Went Wrong!")
    }
}

module.exports = {
    getUser,
}
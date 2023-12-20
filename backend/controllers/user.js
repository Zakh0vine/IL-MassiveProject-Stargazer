const query = require("../database");
const multer = require("multer");
const path = require("path");

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
    const { id, firstName, lastName, email, phoneNumber } = req.body;

    if (
        firstName === undefined ||
        firstName === "" ||
        lastName === undefined ||
        lastName === "" ||
        email === undefined ||
        email === "" ||
        phoneNumber === undefined ||
        isNaN(+phoneNumber)
    )
        return res.status(400).json("Invalid data Update User!");

    try {
        // logic handling

        await query(
            `
        UPDATE users SET 
            firstname=?,
            lastname=?,
            email=?,
            phone_number=?
        WHERE id = ?;
    `,
            [firstName, lastName, email, phoneNumber, id]
        );

        return res.status(200).json("Update User success!");
    } catch (error) {
        return res.status(400).json("Something went wrong!");
    }
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/avatar')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    },
})

const upload = multer({
    storage: storage
})

async function updateAvatar(req, res) {
    const image = req.file.filename;
    const id = req.id;

    try {
        // logic handling

        await query(
            `
        UPDATE users SET 
            image=?
        WHERE id = ?;
    `,
            [image, id]
        );

        return res.status(200).json("Profile Update Success!");
    } catch (error) {
        return res.status(400).json("Something went wrong!");
    }
}


module.exports = {
    getUser,
    updateUser,
    updateAvatar,
    upload
}
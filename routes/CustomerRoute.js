const express = require("express")
const app = express()
const { customer } = require("../models/Customer")
const bcrypt = require("bcryptjs")
const router = express.Router()
const jsonWebToken = require("jsonwebtoken")



//registration api
router.post("/registration", async (req, res) => {

    let User = new customer({
        name: req.body.name,
        passwordHash: bcrypt.hashSync(req.body.passwordHash, 10),
        email: req.body.email,
        phone_number: req.body.phone_number,
        address: req.body.address,
        street: req.body.street,
        apartment: req.body.apartment,
        city: req.body.city,
        isAdmin: req.body.isAdmin

    })

    User = await User.save()

    if (!User) {
        res.status(400).json({ success: false, message: "User cannot be created" })
    }

    res.send(User)

})




//get allUser
router.get("/alluser", async (req, res) => {

    let allUsers = await customer.find()

    if (!allUsers) {
        res.status(400).json({ success: false, message: 'users not found' })
    }
    res.status(200).send(allUsers)

})




//delete request to delete a user by specific id
router.delete("/:id", (req, res) => {
    const deleteUser = customer.findByIdAndRemove(req.params.id).then(user => {

        if (deleteUser) {
            res.status(200).json({
                success: true,
                message: "user is deleted"
            })
        }
        else {
            res.status(400).json({
                success: false,
                message: "user not found"
            })
        }

    }).catch(e => {
        res.status(400).send(e)
    })
})




// Update a User
router.put("/:id", async (req, res) => {

    const User = await customer.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            passwordHash: bcrypt.hashSync(req.body.passwordHash, 10),
            email: req.body.email,
            phone_number: req.body.phone_number,
            address: req.body.address,
            street: req.body.street,
            apartment: req.body.apartment,
            city: req.body.city,
            isAdmin: req.body.isAdmin
        },
        {
            new: true,
            useFindAndModify: false
        }
    )

    if (!User) {
        return res.status(400).json({ success: false, message: "User is not Updated" })
    }
    res.status(200).json({ success: true, message: "User is Updated" })
})




//Login Request
router.post("/login", async (req, res) => {
    const user = await customer.findOne({ email: req.body.email })
    const secret = process.env.secret;

    if (!user) {
        return res.status(400).json({ success: false, message: "User Not Found" })
    }

    if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
        const token = jsonWebToken.sign(
            {
                user: user.name,
                isAdmin: user.isAdmin     //sign method has three paramters first payloadobject,next a secret, objectwith expiration
            },
            secret,
            {
                expiresIn: "1d"
            }
        )
        return res.status(200).json({ success: true, message: "Login Successfully", user: user, token: token })
    }
    else {
        return res.status(400).json({ success: false, message: "Password Incorrect" })
    }
})





module.exports = router

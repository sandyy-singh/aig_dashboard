const User = require('../models/userModels')

const signupUser = async (req, res) => {
    const { name, email, password } = req.body
    try {
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'fill all fields' })
        }
        const existingUser = await User.findOne({ email })

        if (existingUser) {
            return res.status(400).json({ message: 'user already exist please login' })
        }
        const user = await User.create({
            name,
            email,
            password
        })
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({ Error: error.message });
    }
}

const loginUser = async (req, res) => {
    // console.log(req.body)
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email });
        // console.log(user.password)
        // console.log(password)
        if (user) {
            // console.log(user)
            if (user.password === password) {
                return res.status(201).json({ status: 201, user })
            } else {
                return res.status(400).send('wrong password');
            }
        } else {
            return res.status(400).send('Email not found');
        }

    } catch (error) {
        console.error(error);
        return res.status(400).send(error.message);
    }
}
module.exports = { loginUser, signupUser }
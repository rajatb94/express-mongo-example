const User = require("../models/user");

module.exports = async function(req, res, next){
    let user = new User({
        name: {
            first: "Chunnu",
            last: "Di"
        },
        age: 28,
        family: [
            {
                name: "Puja",
                relation: "sister"
            },
            {
                name: "Khushu",
                relation: "chulbul sister"
            }
        ],
        friends: [
            "Anish Bro",
            "Billi",
            "Sleep",
            "Bank"
        ],
        isMarried: false
    })

    await user.save()

    res.send("here is your pnr status")
}

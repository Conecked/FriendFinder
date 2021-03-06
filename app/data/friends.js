// ===============================================================================
// DATA
// Below data will hold all of the "friends".
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
    name: "Bob",
    photo: "https://vignette.wikia.nocookie.net/spongebob/images/a/ac/Spongebobwithglasses.jpeg/revision/latest?cb=20121014113150",
    scores: [
        "5",
        "1",
        "4",
        "4",
        "5",
        "1",
        "2",
        "5",
        "4",
        "1"
    ]
}
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
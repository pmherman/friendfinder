var friendDataArray = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req,res) {
        res.json(friendDataArray);
    });

    app.post("/api/friends", function(req, res) {
        var perfectMatch = {
            name: "",
            image: "",
            matchDifference: ""
        };
        
        var userResponse = req.body;
        console.log("User Response " + JSON.stringify(userResponse));

        var userResName = userResponse.name;
        var userResPhoto = userResponse.photo;
        var userResQues = userResponse.ques;

        var totalDifference = 0;
        
        friendDataArray.push(userResponse);

    });
}
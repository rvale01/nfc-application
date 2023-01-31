const CognitoExpress = require('cognito-express')

// Setup CognitoExpress
const cognitoExpress = new CognitoExpress({
    region: process.env.AWS_API_REGION,
    cognitoUserPoolId: process.env.COGNITO_USER_POOL_ID,
    tokenUse: "access",
    tokenExpiration: 3600
  })

//check if the api call was authorised
exports.validateAuth = (req, res, next) => {
    // This 
    if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
    const token = req.headers.authorization.split(" ")[1]
    cognitoExpress.validate(token, function (err, response) {
        if (err) {
            res.status(401).send(err)
        } else {
            next();
        }
    });
    } else {
        res.status(401).send("No token provided.")
    }
}
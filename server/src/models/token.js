const jwt = require("jsonwebtoken");

const createToken = async() => {
    const token = await jwt.sign({_id: "787ybjyyn8t7vuh89tyv843f"}, 'mynameisdileepsingh', {
            expiresIn: "2 seconds"
    });
    console.log(token);

    const userVerify = await jwt.verify(token, "mynameisdileepsingh");
    console.log(userVerify);
}
createToken();

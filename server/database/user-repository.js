const baseRepository = require("./base-repository");

const userRepository = baseRepository("users");
// Add any custom repository methods here
module.exports = userRepository;

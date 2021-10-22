const Cheesecake = artifacts.require("Cheesecake");

module.exports = function(deployer) {
  deployer.deploy(Cheesecake);
};

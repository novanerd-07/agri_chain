
const { ethers } = require("hardhat");

async function main() {
    const AgriChain = await ethers.getContractFactory("agri_chain");

    const agriChain = await AgriChain.deploy();

    await agriChain.waitForDeployment();

    console.log(
        "AgriChain deployed to:",
        await agriChain.getAddress()
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

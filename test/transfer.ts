import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Duongnd", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    const INITIAL = 1_000_000_000;

    const VALUE = 1_000;
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const DUONGND_FACTORY = await ethers.getContractFactory("Duongnd");
    const DUONGND = await DUONGND_FACTORY.deploy(INITIAL);

    return { DUONGND, VALUE, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const {DUONGND, owner, VALUE, otherAccount } = await loadFixture(deployOneYearLockFixture);
        for (let i =0; i < 10; i++){
            DUONGND.transfer(otherAccount.address, VALUE);
        }
    });

    // it("Should set the right unlockTime", async function () {
    //     const {DUONGND, owner, VALUE, otherAccount } = await loadFixture(deployOneYearLockFixture);
    //       for (let i =0; i < 10; i++){
    //           DUONGND.transfer(otherAccount.address, VALUE -1);
    //       }
    // });

    });
});

const crypto = require("crypto");
const fs = require("fs");



var signer, sign, verifier, result;



// The `generateKeyPairSync` method accepts two arguments:
// 1. The type ok keys we want, which in this case is "rsa"
// 2. An object with the properties of the key
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  // The standard secure default length for RSA keys is 2048 bits
  modulusLength: 2048,
});

signer = crypto.createSign("RSA-SHA256");
signer.update("hello world!");
sign = signer.sign(privateKey, "hex");
console.log(sign);//from  w ww . j  a  va  2  s.  c  om

const signtest = "57d68391d86795eae5c9cb1c8c67df67262ab6252690f7dd33470d4f47997cdbe47f196f2668918f14e99d5eff9181a455c4f4f71b740bbb2c479364b65ca4c07e3bf2eb350a025df3f9a3fc0e6a63277406a0dde311769e7fcfe0b5b4f18ea4582d66ca10a66681b21e71d0616554c0f8007d6e37283ce18558e69ee3bb0ee76d7f7e2e75531a8f086a01724ce64216055ff974d2eb6ba67562b6ed4ceeedb956f0c0ad28c0055e19e5f3d7049dc29a6bacb206f6798c348975e2fcf2794e941a60f93710d49502601be65559b8bd2faf0b21c0cee92351e8bc91a8367bfdb94ce010a1013e2f7f9a06ee36e14b7dca49aad87073252342cbd46abf6499595";

verifier = crypto.createVerify("RSA-SHA256");
verifier.update("hello world!");
result = verifier.verify(publicKey, sign, "hex");
console.log(result);//true
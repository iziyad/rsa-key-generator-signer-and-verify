const crypto = require('crypto');
const fs = require('fs')

    //generate a key pair RSA type encryption with a .pem format
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096, // shortened from 4096
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        }
        })
    
        // print out the generated keys
        console.log(`PublicKey: ${publicKey}`)
        console.log(`PrivateKey: ${privateKey}`)
        let data = "This is a file containing a collection of books.";
  
        fs.writeFile("publickey.pem", publicKey, (err) => {
          if (err)
            console.log(err);
          else {
            console.log("File written successfully\n");
            console.log("The written has the following contents:");
          }
        });
        fs.writeFile("privatekey.pem", privateKey, (err) => {
              if (err)
                console.log(err);
              else {
                console.log("File written successfully\n");
                console.log("The written has the following contents:");
              }
            });
        

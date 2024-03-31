const crypto = require('crypto');
const fs = require('fs');

function generateKeyPair() {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,  // bits - standard for RSA keys
        publicKeyEncoding: {
            type: 'spki',       // Public Key Cryptography Standards #1
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',      // Public Key Cryptography Standards #8
            format: 'pem',
            // cipher: 'aes-256-cbc',   // Optional encryption for the private key
            // passphrase: 'top secret' // Optional passphrase for the encrypted private key
        }
    });

    // Write the keys to files
    fs.writeFileSync('private_key.pem', privateKey);
    fs.writeFileSync('public_key.pem', publicKey);
}

generateKeyPair();
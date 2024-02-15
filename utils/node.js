const crypto = require('crypto');
const jwt =require('jsonwebtoken')

const generateSecureKey = () => {
    return crypto.randomBytes(32).toString('hex'); 
};

const secretKey = generateSecureKey();
console.log('Secret Key:', secretKey);
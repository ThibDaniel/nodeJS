const crypto = require('crypto');
undefined
Object.keys(crypto)
//[...]
const id = crypto.randomBytes(16).toString('hex');
undefined
console.log(id);
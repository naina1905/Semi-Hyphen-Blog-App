import cryptoRandomString from 'crypto-random-string';

const secretKey = cryptoRandomString({ length: 32 });
console.log('Secret key:', secretKey);
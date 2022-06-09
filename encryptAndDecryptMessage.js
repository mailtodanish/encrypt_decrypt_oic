function encrypt_decrypt(method, message, secratekey) {
    if (method.toUpperCase() == "ENCRYPT") {
        return CryptoJS.AES.encrypt(message, secratekey);
    } else if (method.toUpperCase() == "DECRYPT") {
        return CryptoJS.AES.decrypt(message, secratekey).toString(CryptoJS.enc.Utf8);
    }
    
    return ""
}

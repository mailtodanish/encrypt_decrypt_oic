function encrypt_decrypt(method, message, secratekey) {
    var responseVar = "";
    if (method.toUpperCase() == "ENCRYPT") {
        responseVar = CryptoJS.AES.encrypt(message, secratekey);
    } else if (method.toUpperCase() == "DECRYPT") {
        responseVar = CryptoJS.AES.decrypt(message, secratekey).toString(CryptoJS.enc.Utf8);
    }
    return responseVar;
}
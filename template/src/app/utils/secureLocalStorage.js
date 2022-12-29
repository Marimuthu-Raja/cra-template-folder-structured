import SecureStorage from "secure-web-storage"
import CryptoJS from "crypto-js"

const SECRET_KEY = process.env.REACT_APP_SECRET_KEY

const secureStorage = new SecureStorage(localStorage, {
  hash: function hash(key) {
    key = CryptoJS.SHA256(key, SECRET_KEY)

    return key.toString()
  },
  encrypt: function encrypt(data) {
    data = CryptoJS.AES.encrypt(data, SECRET_KEY)

    data = data.toString()

    return data
  },
  decrypt: function decrypt(data) {
    data = CryptoJS.AES.decrypt(data, SECRET_KEY)

    data = data.toString(CryptoJS.enc.Utf8)

    return data
  },
})

export default secureStorage

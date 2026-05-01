function encryptData(data) {
  return btoa(JSON.stringify(data)); // base64 encode
}

function decryptData(data) {
  return JSON.parse(atob(data));
}

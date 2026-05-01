function privateComputeEncrypted(encryptedInput) {
  const data = decryptData(encryptedInput);

  const pnl = (data.exit - data.entry) * data.size;

  // generate "proof" (hash sederhana)
  const proof = btoa(pnl.toString());

  return { pnl, proof };
}

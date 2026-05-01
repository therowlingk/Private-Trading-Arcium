async function sendProofToSolana(proof) {
  console.log("Sending proof to Solana Devnet:", proof);

  // simulasi transaksi
  return "TX-" + Math.random().toString(36).substring(2);
}

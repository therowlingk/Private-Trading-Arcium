async function calculate() {
  const entry = parseFloat(document.getElementById("entry").value);
  const exit = parseFloat(document.getElementById("exit").value);
  const size = parseFloat(document.getElementById("size").value);

  const encrypted = encryptData({ entry, exit, size });

  const result = privateComputeEncrypted(encrypted);

  const tx = await sendProofToSolana(result.proof);

  document.getElementById("result").innerHTML = `
    💰 PnL: <b>${result.pnl}</b><br><br>
    🔐 Proof: ${result.proof}<br><br>
    ⛓️ Tx: ${tx}
  `;
}

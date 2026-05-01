# Private Trading Simulator with Arcium

## Overview
This project demonstrates how confidential computation can be applied to trading systems using Arcium.

Unlike traditional platforms where positions and orders are publicly visible, this application simulates private computation where sensitive inputs are encrypted and only the final result is revealed.

## Key Features
- Encrypted user inputs before computation
- Private PnL calculation
- Proof generation (simulated)
- Solana Devnet transaction simulation

## Problem
Public DeFi systems expose:
- Trader positions
- Order strategies
- Liquidation levels

This creates opportunities for:
- Front-running
- Targeted liquidations
- Market manipulation

## Solution
Using Arcium:
- Computation happens on encrypted data
- Only final outputs are revealed
- Proofs can be verified on-chain

## Architecture
1. User inputs data
2. Data is encrypted
3. Private computation is executed
4. Proof is generated
5. Proof is sent to Solana

## How Arcium is Used
This project simulates Arcium's confidential compute:
- `encryptData()` represents secure input handling
- `privateComputeEncrypted()` represents confidential execution
- Proof generation mimics verifiable computation

## Privacy Benefits
- Protects trading strategies
- Prevents adversarial behavior
- Enables deeper liquidity

## Tech Stack
- HTML / JavaScript
- Solana (Devnet simulation)
- Arcium (conceptual integration)

## Future Improvements
- Integrate real Arcium SDK
- Deploy smart contract on Solana
- Add zero-knowledge proofs
- Build full private order book

## How to Run
1. Clone repo
2. Open index.html
3. Input values
4. Click "Run Private Compute"

## Demo
Shows how encrypted trading data can be computed privately.

---

Built for Arcium Privacy Challenge

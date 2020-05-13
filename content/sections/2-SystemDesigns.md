---
anchor: "System"
header: "PIEOS System Design"
subheader: "PIEOS Smart Contract System on EOSIO Blockchain"
systemDesigns: [
  {
    imageFileName: "system/01-thumbnail.png",
    imageFileNameDetail: "system/01-full.png",
    header: "PIEOS System Architecture",
    subheader: "PIEOS System & PIE PIEOS Tokens",
    content: "The PIEOS smart contracts system implements crypto-backed stablecoin and optional privacy token transaction service on the EOS Public Blockchain. EOS (native system token) holders can issue (borrow) USD-pegged PIE stablecoins by locking EOS as collateral. The total supply of PIE stablecoin should be fully backed by the on-chain crypto collateral funds (EOS) without the counterparty risks of IOU-type stablecoins (e.g. USDT), through the automatic liquidation of loan positions having insufficient collateral value according to the collateral price feed from price-oracles. Privacy-protecting token transfer service for the PIE and PIEOS governance tokens implements the Monero-style privacy technology (ring-signature, one-time stealth address, bulletproofs) as the smart contracts in EOS blockchain. PIE stablecoin can be deposited to the on-chain PIE savings account service to gain stable and profitable interest earnings. PIEOS system is designed to maximize the interest-earning rate of PIE savings account service by distributing the large portion of PIEOS on-chain system profits from various sources of system revenue such as EOS staking profits from the locked EOS collaterals, PIE stablecoin paying-off fee (loan interest), liquidation penalty fee from liquidated PIE loan positions, privacy-protecting token transaction fee and transaction fee for large-amount PIE token transfer. The crypto-backed PIE stablecoin yielding high savings interest rate is expected to be a core underlying asset for other EOS DeFi services like DEX, lending services and derivatives. PIEOS governance token holders can manage the PIEOS system in a decentralized manner by participating in the governance votings, and can make the profits from a portion of PIEOS system revenues and increasing value of PIEOS ecosystem. PIEOS community will launch a DeFi-centric EOSIO-based public blockchain from the snapshot of PIEOS token distribution after establishing a good PIEOS ecosystem on EOS mainnet. The PIEOS governance tokens will be distributed through the PIEOS SCO (Stake-Coin-Offering) token distribution process, where EOS holders who stake their EOS tokens can receive PIEOS tokens without spending their crypto asset.",
    extraInfo: []
  },
  {
    imageFileName: "system/02-thumbnail.png",
    imageFileNameDetail: "system/02-full.png",
    header: "PIE Stablecoin",
    subheader: "Issuing, paying-off and liquidation of EOS-collateral backed USD-pegged PIE stablecoin",
    content: "Above figure shows an example of issuing (borrowing) 100 PIE with collateralized 10 EOS at a price of $15/EOS. With 130% liquidation-ratio, the loan position in the example is liquidated at the price of $12.5/EOS. There are two liquidation options (SELL-TO-ARBITRAGEUR, LOAN-TAKE-OVER) with 15% liquidation penalty fee rate, 5% discount rate for the arbitrageur and 9% discount rate for the loan-taker. The PIEOS system parameters like liquidation-ratio, loan interest rate, discount rates for arbitrageurs and loan-takers are managed by PIEOS governance token holders to keep the PIEOS system secure and stable.",
    extraInfo: []
  },
  {
    imageFileName: "system/03-thumbnail.png",
    imageFileNameDetail: "system/03-full.png",
    header: "Privacy-Protecting Transactions",
    subheader: "Optional Privacy-Protecting Transactions of PIE and PIEOS Token",
    content: "PIEOS smart contracts provides the optional privacy-protecting token transfer feature for the PIE stablecoin and the PIEOS governance token. Crypto-backed stablecoin with the privacy-protecting feature can be used as an secure alternative electronic-cash not revealing the whole transaction history of payment participants without centralized entities (e.g. IOU issuer and token-mixing service) having counterparty risks. The PIEOS system charges transaction fees for the PIE/PIEOS private token transfers. The on-chain private transaction fee is another sound source for the PIEOS token holders profits and the savings-interest distributed to the on-chain PIE stablecoin savings(staking) accounts. PIEOS system implements the Monero-style privacy token transaction technology conformed to the EOSIO blockchain protocol.",
    extraInfo: []
  }
]
---

window.APP_CONFIG = {
  // ===== Network =====
  CHAIN_ID_DEC: 56,
  CHAIN_ID_HEX: "0x38",
  CHAIN_NAME: "BSC Mainnet",
  RPC_URL: "https://bsc-dataseed.binance.org/",
  BLOCK_EXPLORER: "https://bscscan.com",

  // ===== Addresses =====
  USDT: "0x55d398326f99059fF775485246999027B3197955", // BSC USDT
  DF: "0x36579d7eC4b29e875E3eC21A55F71C822E03A992",   // 365DF

  CORE: "0x342d668401572175C21972aF34d0Dc38Aa57F81D", // CoreV5
  VAULT: "0x2bc3dB5AdB26ef1F192f7Bd6b0B3359d0E796D9a", // VaultV6
  BINARY: "0xD78043E993D0F6cC95F5f81eE927883BbFc41Ac6", // BinaryV4
  STAKING: "0x4Dfa9EFEAc6069D139CF7ffEe406FAB78d7410A7", // StakingV4

  DEFAULT_SPONSOR: "0x85EFe209769B183d41A332872Ac1cF57bd3d8300",

  // ===== ABI =====
  BINARY_ABI: [
    {
      "inputs":[
        {"internalType":"address","name":"upline","type":"address"},
        {"internalType":"bool","name":"sideRight","type":"bool"},
        {"internalType":"uint256","name":"volEq","type":"uint256"}
      ],
      "name":"addVolume",
      "outputs":[],
      "stateMutability":"nonpayable",
      "type":"function"
    },
    {
      "inputs":[{"internalType":"address","name":"u","type":"address"}],
      "name":"volumesOf",
      "outputs":[
        {"internalType":"uint256","name":"l","type":"uint256"},
        {"internalType":"uint256","name":"r","type":"uint256"},
        {"internalType":"uint256","name":"p","type":"uint256"}
      ],
      "stateMutability":"view",
      "type":"function"
    }
  ],

  STAKING_ABI: [
    {
      "inputs":[
        {"internalType":"address","name":"user","type":"address"},
        {"internalType":"uint8","name":"pkg","type":"uint8"},
        {"internalType":"uint256","name":"principal","type":"uint256"}
      ],
      "name":"stakeFor",
      "outputs":[],
      "stateMutability":"nonpayable",
      "type":"function"
    },
    {
      "inputs":[{"internalType":"address","name":"user","type":"address"}],
      "name":"pendingReward",
      "outputs":[{"internalType":"uint256","name":"","type":"uint256"}],
      "stateMutability":"view",
      "type":"function"
    },
    {
      "inputs":[],
      "name":"claimStake",
      "outputs":[],
      "stateMutability":"nonpayable",
      "type":"function"
    },
    {
      "inputs":[{"internalType":"address","name":"","type":"address"}],
      "name":"stakes",
      "outputs":[
        {"internalType":"uint8","name":"pkg","type":"uint8"},
        {"internalType":"uint256","name":"principal","type":"uint256"},
        {"internalType":"uint64","name":"start","type":"uint64"},
        {"internalType":"uint64","name":"end","type":"uint64"},
        {"internalType":"bool","name":"claimed","type":"bool"}
      ],
      "stateMutability":"view",
      "type":"function"
    }
  ]
};

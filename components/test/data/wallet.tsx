import { Wallet } from "../interface/wallet";


export var walletTest: Wallet[] = [
  {
    id: 0,
    address: "0x0000000000000000000000000000000000000000",
    name: "Wallet1",
    ledger: false,
    assets: [
      {
        name: "BNB",
        address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
        amount: 2.3,
        dollarVallue: 291.58,
        icon: "/token/bnb.svg"
      },
      {
        name: "USDT",
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        amount: 172,
        dollarVallue: 1.02,
        icon: "/token/tether.svg"
      },
      {
        name: "USDC",
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        amount: 53,
        dollarVallue: 1.02,
        icon: "/token/usdc.svg"
      },
    ],
    history: [
      {
        address: "0xa6f0Bc300F703d1220Fc2b629AA4E312035f5311",
        status: "confirmed",
        gasLimit: 21000,
        gasPrice: 0.31,
        type: "sent",
        from: "0x4esfdh2637dkagE4A739339e5ED18dB25c27AC89",
        to: "0x2897c1bbe293C2c07A7b2A1208a1C0a895A18f11",
        date: "29 Sep",
        token: {
          name: "BNB",
          address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
          amount: 1,
          dollarVallue: 291.58,
          icon: "/token/bnb.svg"
        },
      },
      {
        address: "0xa6f0Bc300F703d1220Fc2b629AA4E312035f5311",
        status: "confirmed",
        gasLimit: 1800,
        gasPrice: 0.12,
        type: "received",
        from: "0xf6BdF25a7B07B64B77Bd6bC5e1dC8d12dA5755b6",
        to: "0x4esfdh2637dkagE4A739339e5ED18dB25c27AC89",
        date: "25 Sep",
        token: {
          name: "USDC",
          address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          amount: 20,
          dollarVallue: 1.02,
          icon: "/token/usdc.svg"
        },
      },
      {
        address: "0xa6f0Bc300F703d1220Fc2b629AA4E312035f5311",
        status: "confirmed",
        gasLimit: 3000,
        gasPrice: 0.05,
        type: "approved",
        from: "0x4esfdh2637dkagE4A739339e5ED18dB25c27AC89",
        to: "0x737901bea3eeb88459df9ef1BE8fF3Ae1B42A2ba",
        date: "22 Sep",
        site: "aztec.io"
      },
      {
        address: "0xa6f0Bc300F703d1220Fc2b629AA4E312035f5311",
        status: "rejected",
        gasLimit: 0,
        gasPrice: 0,
        type: "approved",
        from: "0x4esfdh2637dkagE4A739339e5ED18dB25c27AC89",
        to: "0x737901bea3eeb88459df9ef1BE8fF3Ae1B42A2ba",
        date: "22 Sep",
        site: "aztec.io"
      }
    ],
    recently: [
      {
        address: "0x2897c1bbe293C2c07A7b2A1208a1C0a895A18f11",
        date: "29 Sep"
      },
      {
        address: "0xf6BdF25a7B07B64B77Bd6bC5e1dC8d12dA5755b6",
        date: "25 Sep"
      },
      {
        address: "0x56CaEFCaD91B2a033E68A96f3aC23b6829EC531e",
        date: "21 Sep"
      },
      {
        address: "0xA6ef2D5F266d60dD6034c01262Fd37728139142d",
        date: "12 Sep"
      },
      {
        address: "0x959BFab686076e4C4317f6e91E2CCd020e519A28",
        date: "8 Sep"
      },
      {
        address: "0x9c80b3CFfE9Dc0c6D645fA10F91D7c78EA423344",
        date: "2 Sep"
      },
      {
        address: "0x3160a7c843FFC562dd9a4b22aA37f3a30fe0538a",
        date: "25 Jul"
      },
      {
        address: "0x596D32732403054BCF1b9F1601Db719e8465E531",
        date: "15 Jul"
      },
    ],
    connected: [{
      id: 0,
      site: "app.uniswap.org",
      icon: "/brand/uniswap.svg"
    },
    {
      id: 1,
      site: "sandbox.io",
      icon: "/brand/sandbox.svg"
    },
    {
      id: 2,
      site: "thegraph.com",
      icon: "/brand/thegraph.svg"
    },
    {
      id: 3,
      site: "monero.exchange",
      icon: "/brand/monero.svg"
    },
    {
      id: 4,
      site: "1inch.network",
      icon: "/brand/1inch.svg"
    },
    {
      id: 5,
      site: "app.lido.link",
      icon: "/brand/lido.svg"
    },
    {
      id: 6,
      site: "biswap.limo",
      icon: "/brand/biswap.svg"
    },],
    approved: [
      {
        id: 0,
        asset: {
          name: "BNB",
          address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
          amount: 123.5,
          dollarVallue: 291.58,
          icon: "/token/bnb.svg"
        },
        tx: "0x0000000000000000000000000000000000000000",
        date: "Sep 29",
        spenderName: "app.uniswap.org",
        spenderAddress: "0x0000000000000000000000000000000000000000",
        allowance: 100
      },
      {
        id: 1,
        asset: {
          name: "USDC",
          address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          amount: 53,
          dollarVallue: 1.02,
          icon: "/token/usdc.svg"
        },
        tx: "0x0000000000000000000000000000000000000000",
        date: "Sep 27",
        spenderName: "lido.app",
        spenderAddress: "0x0000000000000000000000000000000000000000",
        allowance: undefined
      },
      {
        id: 2,
        asset: {
          name: "BNB",
          address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
          amount: 123.5,
          dollarVallue: 291.58,
          icon: "/token/bnb.svg"
        },
        tx: "0x0000000000000000000000000000000000000000",
        date: "Sep 27",
        spenderName: "1inch.eth.link",
        spenderAddress: "0x0000000000000000000000000000000000000000",
        allowance: 1000
      },
      {
        id: 3,
        asset: {
          name: "USDT",
          address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          amount: 172,
          dollarVallue: 1.02,
          icon: "/token/tether.svg"
        },
        tx: "0x0000000000000000000000000000000000000000",
        date: "Sep 27",
        spenderName: "lido.app",
        spenderAddress: "0x0000000000000000000000000000000000000000",
        allowance: 105000
      },
      {
        id: 4,
        asset: {
          name: "USDC",
          address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          amount: 53,
          dollarVallue: 1.02,
          icon: "/token/usdc.svg"
        },
        tx: "0x0000000000000000000000000000000000000000",
        date: "Sep 27",
        spenderName: "biswap.com",
        spenderAddress: "0x0000000000000000000000000000000000000000",
        allowance: undefined
      }
    ]
  },
  {
    id: 1,
    address: "0x000000000000et4567dilM00000000000002r34f",
    name: "Wallet2",
    ledger: false,
    assets: [
      {
        name: "DAI",
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        amount: 1720,
        dollarVallue: 1.02,
        icon: "/token/dai.svg"
      },
      {
        name: "BNB",
        address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
        amount: 1.4,
        dollarVallue: 291.58,
        icon: "/token/bnb.svg"
      },
    ],
    history: [
      {
        address: "0xa6f0Bc300F703d1220Fc2b629AA4E312035f5311",
        status: "confirmed",
        gasLimit: 3000,
        gasPrice: 0.05,
        type: "contractInteraction",
        from: "0x4esfdh2637dkagE4A739339e5ED18dB25c27AC89",
        to: "0x737901bea3eeb88459df9ef1BE8fF3Ae1B42A2ba",
        date: "29 Sep",
        site: "aztec.io"
      },
      {
        address: "0xa6f0Bc300F703d1220Fc2b629AA4E312035f5311",
        status: "confirmed",
        gasLimit: 21000,
        gasPrice: 0.31,
        type: "sent",
        from: "0x4esfdh2637dkagE4A739339e5ED18dB25c27AC89",
        to: "0x2897c1bbe293C2c07A7b2A1208a1C0a895A18f11",
        date: "29 Sep",
        token: {
          name: "BNB",
          address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
          amount: 1,
          dollarVallue: 291.58,
          icon: "/token/bnb.svg"
        },
      },
      {
        address: "0xa6f0Bc300F703d1220Fc2b629AA4E312035f5311",
        status: "confirmed",
        gasLimit: 1800,
        gasPrice: 0.12,
        type: "received",
        from: "0xf6BdF25a7B07B64B77Bd6bC5e1dC8d12dA5755b6",
        to: "0x4esfdh2637dkagE4A739339e5ED18dB25c27AC89",
        date: "25 Sep",
        token: {
          name: "DAI",
          address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          amount: 1000,
          dollarVallue: 1.02,
          icon: "/token/dai.svg"
        },
      },
    ],
    recently: [
      {
        address: "0xb1d6501deDFCfB663cCB7BDF7Cd8F7947db41Be7",
        date: "29 Sep"
      },
      {
        address: "0x7B254B2773e95366CBCf21C7E365538704e62010",
        date: "24 Sep"
      },
      {
        address: "0x3Cd61241adb17C641452BCD327e832f86AeB472c",
        date: "17 Sep"
      }
    ],
    connected: [{
      id: 0,
      site: "app.uniswap.org",
      icon: "/brand/uniswap.svg"
    },
    {
      id: 1,
      site: "sandbox.io",
      icon: "/brand/sandbox.svg"
    },
    {
      id: 2,
      site: "thegraph.com",
      icon: "/brand/thegraph.svg"
    },],
    approved: [
      {
        id: 0,
        asset: {
          name: "BNB",
          address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
          amount: 123.5,
          dollarVallue: 291.58,
          icon: "/token/bnb.svg"
        },
        tx: "0x0000000000000000000000000000000000000000",
        date: "Sep 29",
        spenderName: "app.uniswap.org",
        spenderAddress: "0x0000000000000000000000000000000000000000",
        allowance: 100
      },
      {
        id: 1,
        asset: {
          name: "BNB",
          address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
          amount: 123.5,
          dollarVallue: 291.58,
          icon: "/token/bnb.svg"
        },
        tx: "0x0000000000000000000000000000000000000000",
        date: "Sep 27",
        spenderName: "lido.app",
        spenderAddress: "0x0000000000000000000000000000000000000000",
        allowance: 100
      },
      {
        id: 2,
        asset: {
          name: "USDT",
          address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          amount: 172,
          dollarVallue: 1.02,
          icon: "/token/tether.svg"
        },
        tx: "0x0000000000000000000000000000000000000000",
        date: "Sep 27",
        spenderName: "lido.app",
        spenderAddress: "0x0000000000000000000000000000000000000000",
        allowance: undefined
      }
    ]
  },
  {
    id: 2,
    address: "0x7708DB92c47008cD6C289FFB62866543AC736371",
    name: "Wallet3",
    ledger: false,
    connected: [{
      id: 0,
      site: "app.uniswap.org",
      icon: "/brand/uniswap.svg"
    },],
    assets: [
      {
        name: "BNB",
        address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
        amount: 123.5,
        dollarVallue: 291.58,
        icon: "/token/bnb.svg"
      },
      {
        name: "DAI",
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        amount: 478,
        dollarVallue: 1.02,
        icon: "/token/dai.svg"
      },
      {
        name: "USDT",
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        amount: 172,
        dollarVallue: 1.02,
        icon: "/token/tether.svg"
      },
      {
        name: "USDC",
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        amount: 53,
        dollarVallue: 1.02,
        icon: "/token/usdc.svg"
      },
    ],
    history: [
      {
        address: "0xa6f0Bc300F703d1220Fc2b629AA4E312035f5311",
        status: "confirmed",
        gasLimit: 1800,
        gasPrice: 0.12,
        type: "received",
        from: "0xf6BdF25a7B07B64B77Bd6bC5e1dC8d12dA5755b6",
        to: "0x4esfdh2637dkagE4A739339e5ED18dB25c27AC89",
        date: "25 Sep",
        token: {
          name: "BNB",
          address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
          amount: 1.5,
          dollarVallue: 291.58,
          icon: "/token/bnb.svg"
        },
      },
      {
        address: "0xa6f0Bc300F703d1220Fc2b629AA4E312035f5311",
        status: "confirmed",
        gasLimit: 1500,
        gasPrice: 0.10,
        type: "received",
        from: "0xf6BdF25a7B07B64B77Bd6bC5e1dC8d12dA5755b6",
        to: "0x4esfdh2637dkagE4A739339e5ED18dB25c27AC89",
        date: "25 Sep",
        token: {
          name: "BNB",
          address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
          amount: 0.7,
          dollarVallue: 291.58,
          icon: "/token/bnb.svg"
        },
      },
      {
        address: "0xa6f0Bc300F703d1220Fc2b629AA4E312035f5311",
        status: "confirmed",
        gasLimit: 18000,
        gasPrice: 0.42,
        type: "received",
        from: "0xf6BdF25a7B07B64B77Bd6bC5e1dC8d12dA5755b6",
        to: "0x4esfdh2637dkagE4A739339e5ED18dB25c27AC89",
        date: "25 Sep",
        token: {
          name: "BNB",
          address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
          amount: 7,
          dollarVallue: 291.58,
          icon: "/token/bnb.svg"
        },
      },
      {
        address: "0xa6f0Bc300F703d1220Fc2b629AA4E312035f5311",
        status: "confirmed",
        gasLimit: 7500,
        gasPrice: 0.31,
        type: "received",
        from: "0xf6BdF25a7B07B64B77Bd6bC5e1dC8d12dA5755b6",
        to: "0x4esfdh2637dkagE4A739339e5ED18dB25c27AC89",
        date: "25 Sep",
        token: {
          name: "BNB",
          address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
          amount: 3.7,
          dollarVallue: 291.58,
          icon: "/token/bnb.svg"
        },
      },
    ],
    recently: [
      {
        address: "0x4691533D70b0667159a7743A98780476F7333ACe",
        date: "29 Sep"
      }
    ],
    approved: [
      {
        id: 0,
        asset: {
          name: "BNB",
          address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
          amount: 123.5,
          dollarVallue: 291.58,
          icon: "/token/bnb.svg"
        },
        tx: "0x0000000000000000000000000000000000000000",
        date: "Sep 29",
        spenderName: "app.uniswap.org",
        spenderAddress: "0x0000000000000000000000000000000000000000",
        allowance: 172
      },
    ]
  },
  {
    id: 3,
    address: "0x848cAaB1249DFE1d4eA6dc05E37E961a9dcccC77",
    name: "Wallet4",
    ledger: true,
    assets: [],
    history: []
  },
]

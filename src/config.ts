import * as Dapp from '@elrondnetwork/dapp';

export const walletConnectBridge: string =
  process.env.REACT_APP_WALLET_CONNECT_BRIDGE || '';
export const walletConnectDeepLink: string =
  process.env.REACT_APP_WALLET_CONNECT_DEEP_LINK || '';

export const network: Dapp.NetworkType = {
  id: process.env.REACT_APP_NETWORK_ID || '',
  name: process.env.REACT_APP_NETWORK_NAME || '',
  egldLabel: process.env.REACT_APP_NETWORK_EGLD_LABEL || '',
  walletAddress: process.env.REACT_APP_NETWORK_WALLET_ADDRESS,
  apiAddress: process.env.REACT_APP_NETWORK_API_ADDRESS,
  gatewayAddress: process.env.REACT_APP_NETWORK_GATEWAY_ADDRESS,
  explorerAddress: process.env.REACT_APP_NETWORK_EXPLORER_ADDRESS,
};

export const piggybankScAddress = process.env.REACT_APP_PIGGYBANK_SC_ADDRESS;
export const nftmintScAddress = process.env.REACT_APP_NFTMINT_SC_ADDRESS;

export const minTime = 60000;
export const mintPrice = 0.02;

export const siteName = 'Angry Bully City';

export const mainLaunchDate = new Date('2022-01-01');

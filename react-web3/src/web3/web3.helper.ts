const win = window as any;

function isMetamaskInstalled() {
  return win.ethereum && win.ethereum.isMetaMask;
}

function isReady() {
  return isMetamaskInstalled();
}

function isMetamaskEnabled() {
  return win.ethereum.isConnected();
}

async function enable() {
  await win.ethereum.enable();
}

const web3Helper = {
  isMetamaskInstalled,
  isReady,
  isMetamaskEnabled,
  enable
};

export {web3Helper};
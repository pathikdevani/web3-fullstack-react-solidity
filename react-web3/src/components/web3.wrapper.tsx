import React from 'react';
import { web3Helper } from '../web3/web3.helper';



function Web3Wrapper(props: any) {
  const { children } = props;

  const isMetamaskInstalled = web3Helper.isMetamaskInstalled();
    if (!isMetamaskInstalled) {
      return (
        <>
          <div className="error">Please Install MetaMask plugin.</div>
        </>
      );
    }
    const isMetamaskEnabled = web3Helper.isMetamaskEnabled();
    if (!isMetamaskEnabled) {
      return (
        <>
          <div className="error">
            MetaMask is not connected. connect by clicking below button.
          </div>
          <div
            style={{
              cursor: 'pointer'
            }}
            onClick={async () => {
              try {
                await web3Helper.enable();
                window.location.reload();
              } catch (error) {
                console.error(error);
                alert("Failed to connect Metamask. please try again.");
              }
            }}
            className="enable-button"
          >
            Connect
          </div>
        </>
      );
    }

  return <>{children}</>
}

export default Web3Wrapper;

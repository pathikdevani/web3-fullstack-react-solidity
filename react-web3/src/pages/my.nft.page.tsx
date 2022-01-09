import React, { useCallback, useEffect } from 'react';

import { myNFTWeb3 as web3} from '../web3/index.web3';
import { web3Helper } from '../web3/web3.helper';
import Web3Wrapper from '../components/web3.wrapper';


function MyNFTPage() {

  const loadWeb3 = useCallback(async() => {
    await web3.load();
    const data = await web3.getNFTs();
    console.log(data);
  }, []);
  

  useEffect(() => {
    if(web3Helper.isReady()) {
      loadWeb3();
    }
  }, [loadWeb3]);
  
  return (
    <div>
      <Web3Wrapper>
        WIP
      </Web3Wrapper>
    </div>
  );
}

export default MyNFTPage;

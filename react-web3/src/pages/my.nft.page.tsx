import React, { useCallback, useEffect, useState } from 'react';
import { message, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { myNFTWeb3 as web3} from '../web3/index.web3';
import { web3Helper } from '../web3/web3.helper';
import Web3Wrapper from '../components/web3.wrapper';
import MyNFTCard from '../components/my.nft.card';
import MyNFTAdd from '../components/my.nft.add';


function MyNFTPage() {
  const [nfts, setNfts] = useState([] as any);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadWeb3 = useCallback(async() => {
    await web3.load();
    const data = await web3.getNFTs();
    setNfts(data);
  }, []);
  

  useEffect(() => {
    if(web3Helper.isReady()) {
      loadWeb3();
    }
  }, [loadWeb3]);
  
  return (
    <div>
      <Web3Wrapper>
      <div>
          <Button 
            type="primary" 
            icon={<PlusOutlined />} size={"middle"}
            onClick={async() => {
              setIsModalOpen(true);
            }}
          >
            Add NFT
          </Button>
          <MyNFTAdd
            isVisible={isModalOpen}
            onSubmit={async (data:any) => { 
              try {
               await web3.addNFT({
                name: data.name,
                symbol: data.symbol,
                color: data.color,
               });
               message.success('NFT created successfully!');
               setIsModalOpen(false);


               // after succes we have to reload employee
             } catch(error) {
               console.log(error);
               message.error('Error while create NFT!');
             }
           }}
           onCancel={() => { setIsModalOpen(false); }}
          >

          </MyNFTAdd>
        </div>
        <div>
          {nfts.map((nft:any) => {
            return (
              <MyNFTCard
                key={nft.symbol}
                color={nft.color}
                name={nft.name}
                symbol={nft.symbol}
              />
            )
          })}
        </div>
      </Web3Wrapper>
    </div>
  );
}

export default MyNFTPage;

import React from 'react';
import { Card } from "antd";

function MyNFTCard(props: any) {
  const { color, name, symbol } = props;
  return (
		<Card
			style={{ 
				width: 300,
				marginTop: 10,
				marginLeft: 10,
				float: 'left',
				background: `${color}`
			}}
			actions={[
				<div>{`${name}(${symbol} - ${color})`}</div>
			]}
		>
  	</Card>
  );
}

export default MyNFTCard;

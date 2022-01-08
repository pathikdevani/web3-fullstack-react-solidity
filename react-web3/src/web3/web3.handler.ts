import Web3 from "web3";

const win = window as any;

class Web3Handler {
	contract?: any;
	web3?: any;    

	abi?: any;
	address?: string;

	constructor(abi: any, address: string) {
		this.abi = abi;
		this.address = address;	
	}

	load() {
		this.web3 = new (Web3 as any)(win.ethereum);
    this.web3.eth.defaultAccount = win.ethereum.selectedAddress;
    this.contract = new this.web3.eth.Contract(
      this.abi as any[],
      this.address
    );
	}
}

export {Web3Handler};
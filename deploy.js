const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
  'daring box glory poem math flip world public silly loan edge nice',
  'https://rinkeby.infura.io/1gI9DT8OOfMzWzoF21xH'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account ', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
                    .deploy({data: '0x'+bytecode, arguments:['Hey there!']})
                    .send({from:accounts[0], gas:'1000000'});

  console.log('Contract deployed to ', result.options.address);
};

deploy();

//contract address
//0x189EE234e2057f6145E658929C5DBf5568178C77

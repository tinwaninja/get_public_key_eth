# Ethereum Transaction Hash to PublicKey Node JS

## Installation
    $ git clone https://github.com/tinwaninja/get_public_key_eth
    $ cd get_public_key_eth
	$ yarn install

For example, address **0xFffFffFB5c79E42fA9Bb34f80A701872d5FA75e5**
To get the publicKey from that address, it will use transaction [https://etherscan.io/tx/0x4a61da70eb0e80cf54450240e1b44c5c38d9c57dcc572099bd6599694864ce87](https://etherscan.io/tx/0x4a61da70eb0e80cf54450240e1b44c5c38d9c57dcc572099bd6599694864ce87 "https://etherscan.io/tx/0x4a61da70eb0e80cf54450240e1b44c5c38d9c57dcc572099bd6599694864ce87") (any **out transaction**)

so open **index.js** and **change line 5 and enter the transaction hash**, 
you need to register **infura.io** to get the key to access the rpc ethereum mainnet, after getting the infura key, **edit the 4th line in the index.js script**, after saving it then run:

    $ node index.js
	
The result should be as follows:

    address: 0xFffFffFB5c79E42fA9Bb34f80A701872d5FA75e5
	publicKey: 0xab98c8dfcfa1655da5265550c34196442a5ac44882ebece9d83b817dda822a5ff040fb786d187ed0fb81d1031addadecdb97a2899c02a11f1ffd413ed465cd85
 

Please note that the publicKey can only be extracted on transactions EIP-1559, you can read the details of the Ethereum update in [this article](https://consensys.net/blog/quorum/what-is-eip-1559-how-will-it-change-ethereum/ "this article") (meaning the transaction must be more than August 5th, 2021)
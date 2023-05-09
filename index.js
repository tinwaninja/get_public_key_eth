const ethers = require("ethers")

const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/XXXXXX")
 // https://etherscan.io/tx/0x4a61da70eb0e80cf54450240e1b44c5c38d9c57dcc572099bd6599694864ce87
get_publicKey("0x4a61da70eb0e80cf54450240e1b44c5c38d9c57dcc572099bd6599694864ce87");


async function get_publicKey(tx){
    const transactionResponse = await provider.getTransaction(tx);
    //console.log('transactionResponse', transactionResponse);
    const signature = ethers.utils.joinSignature({
        r: transactionResponse.r,
        s: transactionResponse.s,
        v: transactionResponse.v
    });
    
    const txData = {
        gasLimit: transactionResponse.gasLimit,
        value: transactionResponse.value,
        nonce: transactionResponse.nonce,
        data: transactionResponse.data,
        chainId: transactionResponse.chainId,
        to: transactionResponse.to,
        type: transactionResponse.type,
        maxFeePerGas: transactionResponse.maxFeePerGas,
        maxPriorityFeePerGas: transactionResponse.maxPriorityFeePerGas,
        gasLimit: transactionResponse.gasLimit,
    };

    const transaction = await ethers.utils.resolveProperties(txData);
    const rawTransaction = ethers.utils.serializeTransaction(transaction);
    const hashedTransaction = ethers.utils.keccak256(rawTransaction);
    const hashedTransactionBytes = ethers.utils.arrayify(hashedTransaction);
    const publicKey = ethers.utils.recoverPublicKey(hashedTransactionBytes, signature)
    const originalAddress = ethers.utils.recoverAddress(hashedTransactionBytes, signature);
    
    console.log('address: ' + originalAddress);
    //console.log('publicKey Raw', publicKey);
    console.log('publicKey: 0x'+publicKey.slice(4));
}
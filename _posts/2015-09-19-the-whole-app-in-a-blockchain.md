---
layout: post
title: The Whole App in a Blockchain
image-link: the-whole-app-in-a-blockchain
category: blog
external-link: https://medium.com/@AppBlockchain_/the-whole-app-in-a-blockchain-ce2e953cb0ff
headline: A smart contract describes the make-up of a blockchain transaction.  The contract defines the actors in a transaction (e.g. Bitcoin accounts), the logic (e.g. transfer cryptocurrency from one account to another), and the data (e.g. update the values in each account following the transactions).</p>
---

<p class="post__title">Cryptocurrency Smart Contract</p>

<p class="post__content">Initially smart contracts only included the logic for cryptocurrency transfer between accounts.</p>

<p class="post__title">Asset Smart Contract</p>

<p class="post__content">Next came the representation of an asset on a blockchain, with blockchain transactions representing transfer of asset ownership between account.</p>

<p class="post__title">Open Smart Contract</p>

<p class="post__content">More recently we’ve seen the emergence of smart contracts that are completely flexible, and can be defined by the application developer. The Ethereum virtual machine (EVM) with its Turing-complete smart contract code is the finest example of this.</p>
<p class="post__content">This final piece is a revolution. Why? Because it allows full blown apps to be developed and deployed on-chain.</p>
<p class="post__content">Why is this important? Convenience, simplicity, elegance.</p>
<p class="post__content">The need to use a Blockchain to solve a problem usually stems from a requirement to hold a transaction or at least a reference to it in an immutable ledger agreed through consensus.</p>
<p class="post__content">Asset-based blockchains allow you to store a reference – usually in the form of a hash – to the original data or asset. This is great for proof of ownership of the asset or data – but it is very inconvenient. The reason? Because the data related to the transaction needs to be stored in a seperate data store.</p>
<p class="post__content">Let’s take an example.  Let’s say you have a mortgage conveyancing process that you would like represented on a Blockchain.</p>
<p class="post__content">With an asset based Blockchain all of the data related to the mortgage would need to reside outside the Blockchain – you could keep a hash of that data or a reference to it in a Blockchain transaction. That would enable anyone to check that the transaction does indeed refer to that data. However, it doesn’t enable the other parties in the Blockchain to retrieve that data – because the data itself is not actually stored in the Blockchain.</p>
<p class="post__content">In the mortgages example – a bank might create a mortgage smart contract and expect the seller and buyer to transact with that contract.  With an asset based Blockchain the buyer and seller would need to access the data outside the Blockchain, update it outside the Blockchain and then put a reference of their change (e.g. their approval of the mortgage agreement) into the Blockchain.  There would need to be a shared data store outside the Blockchain that holds the actual mortgage contract data. That data store would need to be shared and synchronised between the parties participating in the Blockchain. That’s not a trivial task.</p>

<p class="post__title">Blockchain as a Synchronized Datastore</p>

<p class="post__content">But wait a minute? Isn’t that what the Blockchain does already? Hold a data store that is synchronised and agreed between the participating parties? Why not use the Blockchain itself to hold and distribute all of the data, rather than just a reference to that data?</p>

<p class="post__title">Smart Contract Blockchains</p>

<p class="post__content">With a full smart contract solution (e.g. Ethereum, Tendermint) – the mortgage data resides in the Blockchain. It is an integral part of the transactions – and this provides a far simpler, more elegant design, where there is no need for an external shared data store.</p>
<p class="post__content">The Blockchain IS the data store.</p>
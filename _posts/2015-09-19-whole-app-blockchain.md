---
layout: post
title: The Whole App in a Blockchain
image-link: whole-app-blockchain
category: blog
---

A smart contract describes the make-up of a blockchain transaction.  The contract defines the actors in a transaction (e.g. Bitcoin accounts), the logic (e.g. transfer cryptocurrency from one account to another), and the data (e.g. update the values in each account following the transactions).

Cryptocurrency Smart Contract
Initially smart contracts only included the logic for cryptocurrency transfer between accounts.

Asset Smart Contract
Next came the representation of an asset on a blockchain, with blockchain transactions representing transfer of asset ownership between account.

Open Smart Contract
More recently we’ve seen the emergence of smart contracts that are completely flexible, and can be defined by the application developer. The Ethereum virtual machine (EVM) with its Turing-complete smart contract code is the finest example of this.

This final piece is a revolution. Why? Because it allows full blown apps to be developed and deployed on-chain.

Why is this important? Convenience, simplicity, elegance.

The need to use a Blockchain to solve a problem usually stems from a requirement to hold a transaction or at least a reference to it in an immutable ledger agreed through consensus.

Asset-based blockchains allow you to store a reference – usually in the form of a hash – to the original data or asset. This is great for proof of ownership of the asset or data – but it is very inconvenient. The reason? Because the data related to the transaction needs to be stored in a seperate data store.

Let’s take an example.  Let’s say you have a mortgage conveyancing process that you would like represented on a Blockchain.

With an asset based Blockchain all of the data related to the mortgage would need to reside outside the Blockchain – you could keep a hash of that data or a reference to it in a Blockchain transaction. That would enable anyone to check that the transaction does indeed refer to that data. However, it doesn’t enable the other parties in the Blockchain to retrieve that data – because the data itself is not actually stored in the Blockchain.

In the mortgages example – a bank might create a mortgage smart contract and expect the seller and buyer to transact with that contract.  With an asset based Blockchain the buyer and seller would need to access the data outside the Blockchain, update it outside the Blockchain and then put a reference of their change (e.g. their approval of the mortgage agreement) into the Blockchain.  There would need to be a shared data store outside the Blockchain that holds the actual mortgage contract data. That data store would need to be shared and synchronised between the parties participating in the Blockchain. That’s not a trivial task.

Blockchain as a Synchronized Datastore
But wait a minute? Isn’t that what the Blockchain does already? Hold a data store that is synchronised and agreed between the participating parties? Why not use the Blockchain itself to hold and distribute all of the data, rather than just a reference to that data?

Smart Contract Blockchains
With a full smart contract solution (e.g. Ethereum, Tendermint) – the mortgage data resides in the Blockchain. It is an integral part of the transactions – and this provides a far simpler, more elegant design, where there is no need for an external shared data store.

The Blockchain IS the data store.

About Applied Blockchain

Applied Blockchain is an innovative applications development company, focusing on distributed ledger technology and smart contracts. Based in London at Level39 Fintech hub in Canary Wharf, Applied Blockchain has an expert team of blockchain developers that have been building cutting-edge solutions for disruptive startups and corporate clients in banking and finance, e-commerce, energy trading, telecommunications and social impact sectors. We are building a new generation of decentralised applications working through some of the most interesting problems in this field such as KYC, identity management, transactions anonymity, encryption and data security.
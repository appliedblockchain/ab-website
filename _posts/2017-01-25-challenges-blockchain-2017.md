---
layout: post
title: Outstanding Challenges in Blockchain Technology in 2017
image-link: challenges-blockchain-2017
category: blog
---

It’s been a great year with real progress in Blockchain technology. Below is a subset of key questions and approaches that remain unsolved:

Data On-Chain or Off-Chain
The first generation of blockchain applications, mainly Bitcoin derivatives do not store real (non-cryptocurrency) data in the blockchain itself. Instead, they a store hash (digital fingerprint). These hashes represent digital assets on-chain. In this way the blockchain can be used to track ownership of digital assets, or to act as an immutable log of activity. The advantage of this approach is that it is simple and privacy preserving, as the data itself is off-chain and not exposed to the nodes in the network. The disadvantage is that application business logic and data permissions cannot be enforced on-chain (except for cryptocurrency/tokens). Another disadvantage is that data does need to be stored somewhere, and that somewhere remains a point of vulnerability. If someone made a change they were not permitted to make, we would only really know there was a problem or inconsistency in the data if we compared the hash on-chain to the one we keep (or regenerate) off-chain. Examples of this approach: Bitcoin, Factom (https://www.factom.com/), Multichain (http://www.multichain.com/).

The second approach uses so-called smart contracts to store data, and the evolving state of that data in the blockchain itself. I like to think of this as ‘Data Underwriting’. One disadvantage of this approach is that more storage is required by each node, as it stores the data and historical (state) changes. Each node will also need to execute smart contract processing. A second disadvantage is data privacy. If each node holds all of the data, and can see all of the data, then we’ve lost data privacy. Both of these disadvantages are mitigated if data is only shared with a subset of nodes. The advantage of this approach is that permissions and potentially business/workflow logic/token and/or asset transfer can be enforced in real time on-chain in a decentralised solution. Example: Ethereum, Hyperledger Fabric, R3 Corda.

Data Privacy: Encryption vs Selective Sharing
Assuming data is stored on-chain, there are two emerging approaches to data privacy on the blockchain.

Encryption of Private Data
Data is encrypted before being stored in the smart contracts. If data is shared with all nodes, then each will have a copy of the encrypted data, but they won’t necessarily have the key required to decrypt the data. The potential issue with this approach is that data on a blockchain is immutable and could potentially be held for many years. At some point, computing power, specifically quantum computing may evolve to the point where today’s encryptions can be compromised, and the data that was once considered to be held privately is now exposed on all of the nodes. This is potentially more of an issue on a public Blockchain where there is no control or governance. In a private chain this could be mitigated with all of the nodes adopting a migration strategy. Example of a blockchain that uses encryption for data privacy: Hyperledger Fabric (https://hyperledger-fabric.readthedocs.io/en/latest/).

Selective Sharing of Private Data
Data is stored on-chain, but is only shared with the nodes that are party to the transaction, and possibly one or more notaries. This solves the problem of data privacy, as the data is never shared with unintended participants. It also solves scalability, as each node is no longer required to store the entire chain. The potential issue with this approach is that there is no single, agreed chain of transactions, and provenance and immutability are only as strong as the number of participants party to a transaction. For example, if two parties transact and include a notary in the transaction, then only those three parties will receive a copy of the data and transaction. If those three parties were to collude to remove the historical transaction and data, no one else in the network could detect this, as the others would have no record of its existence. This is mitigated, however, by increasing the number of notaries. The nature of these notaries is also very important. If the notaries are independent and have no incentive to collude (a regulator, or watchdog, for example), then immutability is considered strong. This selective sharing approach appears to be the current preferred approach for banks. Example: R3 Corda (https://www.corda.net/).

Encrypted Data with Computation
If we encrypt the data we store on chain, there is very little we can do with it on-chain while it is encrypted.

Data Storage and Permissions Enforcement
If we write business logic into a smart contract where data is stored in encrypted form, each node executing and validating the contract will fail to do so on the encrypted data, as the data will remain encrypted during this process, and the node will not have the key to decrypt it. So while every node has to execute the smart contract logic, not every node will have a key to decrypt the data. This potentially limits the use of smart contracts for encrypted data to storage only (no business logic). As a note, thanks to an InnovateUK government grant (https://www.gov.uk/government/organisations/innovate-uk), we’ve developed a technique for implementing permission checking logic in the contract even though data may be encrypted and parties are anonymous. Example: Applied Blockchain (http://appliedblockchain.com/framework/).

Data and Full Smart Contract Processing
Processing of encrypted on-chain data can be achieved by delegating computation to off chain participants without disclosing context of data. This technique splits the data processing into unrecognisable chunks and distributes different parts of the processing to different nodes. Each node does not have enough information to be able to understand the context of the data it is processing. A potential weakness of this approach is that nodes may collude to piece together the data. This was pioneered by the MIT Media Lab Enigma project (http://www.enigma.co/).

Zero Knowledge Proofs: ZK-SNARKS
The hottest topic in cryptography right now is zero knowledge proofs. These are very limited mathematical functions that can be performed on fully encrypted data while it remains in encrypted form such that results can be validated without exposure to the unencrypted data. This potentially allows different nodes to run limited computational in a smart contract without revealing encrypted data to those nodes. This technology is a game changer, in that it potentially allows execution of smart contracts on encrypted data. zCash (https://z.cash/), a cryptocurrency implementation similar to Bitcoin, is one of the first example of this technology in action.

Transaction Anonymity
If a privacy key is used to sign a transaction, and everyone on the network can check that a specific key was used to sign a transaction, this implies that everyone can see the volume of transactions that a key has signed. In a network where there are dominant parties, it might be relatively straight forward to identity the key belonging to specific parties based on transaction volumes.

One solution to this is transaction level keys. This involves a key issuing authority (centralised, although there may be a number of these) that generates a different key for each transaction from a core private key. The mapping between the core key and transaction keys is never revealed to the other participants — they only see the individual transactions keys. Example: Hyperledger Fabric (https://hyperledger-fabric.readthedocs.io/en/latest/).

Stateless vs Stateful Smart Contracts
Stateless Conditional Logic
A simple version of smart contracts is included in Bitcoin. This implementation is more of a scripting paradigm where additional logic and conditions can be attached to a payment transaction — the classic example is multi-sig — requiring multiple signatures before a transaction is executed. This type of smart contract is stateless — in the sense that it accepts a set of inputs, runs some logic, and the result is that the transaction either executes or it doesn’t. This type of model is extremely useful if we are simply adding a set of one or more stateless conditions to a transaction. The advantage of this model is that it is very simple. The disadvantage is that the only state, or thing that we’re tracking, is the native token or asset being transferred between accounts.

Stateful Smart Contracts
A more complex smart contracts paradigm is the one implemented in Ethereum (https://ethcore.io/parity.html). This includes state. In this case a smart contract also has the ability to store data on chain. Each transaction can change that data, and the resulting changes data is again stored/frozen on chain. The next transaction can then pick up the data as its as frozen after the last transaction and introduce the next change, and so on. At any point we can traverse the blockchain and wonder through the previous states, seeing the data as it was before and after every change introduced in a transaction. The advantage of this model is that we can actually use the blockchain as database, where blockchain transactions change the data. This final point is still very controversial.

Stateful smart contracts can be implemented in different ways, for example the state data can be stored within the blockchain’s own internal data structures, or it can be stored externally in a database, where the start and end state surrounding each transaction (or a hash of) is stored on chain. The latter option maintains state integrity, while allowing us to access the data directly. Example: R3 Corda (https://www.corda.net/).

Smart Contract Code Encrypted or Open
Ethereum (and Bitcoin) are designed as public open chains. As we do not trust any other party on the system, we need to trust the system, i.e. the code. The code must therefore be revealed to all parties, be it the underlying blockchain platform code, which is open source, or individual smart contracts, which must be visible to all parties partaking in a transaction workflow.

Private Smart Contract Source Code
In private blockchain implementations where privacy is required, that privacy can be applied to the data, but it could also be provided for the smart contract source code. Meaning that if I hold a node in a private blockchain network, even though I hold all of the smart contracts and ledger data, some of the contract source code is encrypted, and I therefore cannot see nor execute the code. This reduces the number of parties that can attest that a contract was executed as planned — because only those parties involved in the transactions can decrypt the smart contract, execute it and validate it. Example: Hyperledger Fabric (https://hyperledger-fabric.readthedocs.io/en/latest/).

Token: Native or in Smart Contract
Blockchains started as cryptocurrencies, even though they have now also evolved into general purpose distributed databases and state machines. Incidentally, it is my own personal belief that we will eventually come full circle, as most of the non-cryptocurrency use cases that we are looking at today will ultimately require some form of payment or token exchange, and if this could be implemented on-chain this would very, very efficient (whether as fiat currency represented in tokenised form on a ledger, or a regulated cryptocurrency). As such, the public blockchain source code that many of us are using today includes a native token implementation (e.g. Bitcoin, Ether in Ethereum).

If we build a solution that includes a token, for example, to represent fiat currency, or rewards/point, we could choose to use the native token mechanisms of the platform, or we could create our own token using smart contracts. Ethereum even offers a smart contract Token standard (https://www.ethereum.org/token).

If the platform has a native cryptocurrency, then the first approach, of using the native token mechanisms inherent in the platform should really only be used when using the public token the platform (i.e. Ether on Ethereum). This is because the mechanisms of generating tokens are tied to cryptocurrency incentive schemes (e.g. Proof of Work, Proof of Stake). If the native token implementation is not tied to cryptocurrency mechanisms, then this should be explored. Similarly, non-native token schemes such as the Ethereum smart contract Token standard offer great flexibility as well as support by external, third party and open wallet software.

Provenance vs Privacy
Open Tokens
In cryptocurrency token platforms, native tokens are created by the blockchain through proof of work mining. The Blockchain provides complete transparency regarding the history of every bitcoin, so that everyone can see when/where it was created, and which accounts have transferred it (mixers are the exception, where there’s an external mix of tokens across accounts/wallets). This provides us with provenance of every cryptocurrency token, so that we can check that tokens weren’t created out of thin air, nor were they double spent.

Private Tokens
In zCash, we have a cryptocurrency where token transactions are fully encrypted and not revealed to validating nodes, so we retain privacy and anonymity. The solution provides reassurance that the tokens were not created out of thin air, nor double spent without ever revealing any information about the accounts involved in the transactions, nor the origin of the token.

Private Fiat Tokens
In a fiat currency banking system cash is issued by a central bank. For fiat currency to be issued on a blockchain, we would require full transparency and provenance of the token in order to ascertain that a token was not created out of thin air by anyone other than the central bank, and that it has not been double spent.

However, in a fiat currency blockchain solution, we would require data privacy and anonymity (banks do not wish to reveal their level of activity, nor their customer data), therefore the data will either need to be encrypted, or shared only with the transacting counter-parties, and possibly one or more notaries. In either case, for anyone receiving this token, and wishing to validate its provenance, a reassurance of its provenance will be required, and this implies revealing the entire history of that token. This implies providing that party the ability to decrypt or have access to every historical transaction involving that token since it was minted. This implies that details of each transaction will need to be shared with many more parties, going forward, than simply those that are party to the transaction itself, OR, proof of provenance will need to be provided without revealing the historical data nor the parties involved.

This problem applies to any token, asset or data that requires both privacy and provenance.

Scalability
Many blockchain solutions require storage of large volumes of transactions and data, and fast transaction throughput/performance. Fully functional, traditional blockchain stacks are relatively slow in this regard. Below are three approaches being looked at to improve scalability:

Big Data Store
One innovative approach is to split the blockchain process into two distinct layers: replication and chaining. The latter has already been solved for big data stores that can scale across large synchronised clusters of servers. Consensus algorithms, such as RAFT (https://raft.github.io/) and Paxos solve this problem efficiently. The second part is chaining. This can be added on top of a clustered big data store to produce a super fast and scalable clustered store of chained data. An example of this is BigChainDB (https://www.bigchaindb.com/).

Selective Sharing
By default, blockchains require each node to store a complete replica of all transactions and data. This can be the source of scalability issues, especially in use cases requiring large volumes of transactions and data, or where we look at consolidating a number of application on to a chain. If transactions and data are only shared with parties to the transaction, and possibly one or more notaries, then the volume of data stored by each node is a fraction of the overall volume of transactions and data on the network. This obviously allows the network as a whole to process much larger volumes of transactions. Example: R3 Corda (https://www.corda.net/).

Side Chains / Channels
A very different approach to scalability is side chains. In this approach a number of chains are integrated, where one or more chains are considered the main chains, while others are considered side chains (also known as channels). The idea is that the main chain or chains are slower, as they require robust consensus over a large network of participants. In the meantime the side chains provide weaker integrity and immutablity, and the consensus is across a much smaller group, but they can transact at much higher speeds and volumes. The two can be combined by regularly aligning at intervals. Examples: Lightening Network (https://lightning.network/), Radien Network (http://raiden.network/).

Interconnected Ledgers
Economic, corporate, and regulatory requirements are such that most blockchain projects are designed and implemented on private blockchain networks. This is fine in the short term, and may well be the way things remain for a very long time.

This immediately raises questions about ledger interconnectivity. For example, what if we have two competitive ledger solutions within the same industry solving the same problem — could the two solutions interconnect? Or what if an organisation is using two complementary solutions that reside on different technology platforms and networks. Or what if a very powerful organisation or group consolidates all of its distributed ledger activity on to a single technology platform, and forces anyone that deals with it onto that platform? Could different platforms talk to each other?

The short answer is yes, technically this is possible. However, whether it is efficient or desirable is another matter.

There are already a number of emerging technical solutions out there to solve ledger interconnectivity.

Ripple’s Interledger (https://interledger.org/), for example, is an open standard for inter-ledger token exchange. It was primarily designed to allow the Ripple network to connect directly to other blockchain networks so that tokens of value could be exchanged across the networks. This does solve the problem for tokens. However, many blockchain solutions are not token based. For example, we may be using blockchain smart contracts, storing data, enforcing permissions and business rules etc. These more complex mechanisms cannot be easily bridged across different ledger technologies.

EthCore recently published a white paper for Polkadot (https://ethcore.io/press.html) as an underlying mechanism that connects different ledger implementations. This is an excellent albeit ambitious proposition, as the different ledgers would need to be designed to be integrated in this way.

There are numerous other areas of debate and exploration in the space, including different architecture patterns, which I will cover in the next article.
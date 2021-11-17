---
layout: "post"
title: "14 Blockchain Predictions for 2016"
subtitle: "Wishing you a happy, healthy and successful 2016! Here are my 14 blockchain predictions for the coming year."
image: "blockchain-predictions-for-2016.jpg"
category: "Blog"
tags: ["Blockchain", "Innovation", "Predictions"]
---

# The hype won’t last

This time next year, not everyone will be talking about Blockchain. The hype will not last. Blockchain is at the peak of a tech hype cycle. As with any hype cycle, this will not last forever. In fact, by the end of 2016 it’s unlikely to be centre stage. I do however believe that over time, some aspects of Blockchain technology will enable meaningful changes in a number of verticals including financial services.

# Reality will be hard for today’s blockchain players

There is a lot of experimentation and learning taking place, and proof of concepts are being created. However, the transition to production grade, real world applications is going to be a long hard slog. The networked nature of Blockchain solutions means that it’s not just a case of installing Blockchain technology within one organisation, but rather getting many organisations to adopt, and integrate their existing systems with the technology – not to mention the business process and organisational changes. This will be no easy challenge and will take years to implement.

# Blockchain will scale

Smart contracts will scale. The Blockchain was originally designed to be public and open. In this sense it was designed to scale across a very wide network with thousands, if not millions of participants. However, individual nodes were never really designed to scale. This means that the quantity of transactions, data and processing that each node can undertake, and the throughput that each node can provide is limited. This is because each nodes stores and processes every transaction on the entire blockchain. It’s also because the blockchain itself is a single thread of linked transactions and blocks, and  doesn’t therefore lend itself to parallel processing. In 2016, many smart individuals and companies will continue to work on making the blockchain scale. This will include, but not be limited to, ideas such as sharding, where not every node takes on all of the work/transactions/data, but the work is spread to ‘enough’ nodes for redundancy and trust to be maintained. The underlying data storage of a node, and eventually the processing will also be improved to enable more work to be done in parallel / in memory and ultimately to improve throughput and scalability to tens of thousands of transactions / second. For blockchain implementations supporting complex smart contracts (e.g. those implementing the Ethereum Virtual Machine specification), there is an additional challenge of incorporating and improving VM performance. This is especially required when retrieving data from a contract, or traversing the Blockchain to query its history.

# Blockchain will speed up

Public blockchains (Bitcoin, Ethereum) where the blockchain technology originated rely on slow consensus algorithms known as proof of work or mining. These are necessary on large networks where participants are not known or trusted. Innovative consensus algorithms that don’t require proof of work will continue to evolve and become more prominent. These will lead to faster confirmation time and increased throughout of transactions.

# The ‘block’ may be removed from the chain

There is a growing consensus among some developers that the grouping of transactions into blocks may not be necessary, and that the individual transactions should be directly chained together. This should be possible in scenarios where consensus is simplified by requiring confirmation from a limited subset of trusted nodes. In private blockchain scenarios this should lead to much faster confirmation times.

# Blockchain will be used to store data…

…rather than just provide a platform for validating data. There are currently two patterns emerging: use a Blockchain 1.0 implementation (no complex smart contracts) and store data off chain – using the Blockchain to store only a hash, that can be validated by other parties at a later stage, or, use a Blockchain 2.0 implementation and store your data in complex smart contracts. This second approach simplified overall application design as data does not need to be stored/managed/synchronised between the parties off chain. My prediction is that the second pattern will become more prominent in 2016.

# Smart contract solutions will grow in popularity…

…and will revolutionise cross organization workflows (see [article](https://medium.com/applied-blockchain/blockchain-for-cross-organisation-workflow-1efebc838dc3)) in a number of industries. The smart contracts standard will build on the foundations of the Ethereum smart contract i.e. Turing complete, maybe on another VM, maybe native. The Ethereum platform revolutionised Blockchain application development by providing a fully programmable smart contract environment. While I won’t attempt to predict the future of the Ethereum project (or even Bitcoin for that matter), I do believe that the ground-breaking work achieved by Ethereum will lead to many other innovations in 2016, although these may not be on the Ethereum platform itself. There are a number of companies and groups either porting the Ethereum virtual machine to other Blockchain implementations, or creating their own alternative rich smart contract environments that extend the the Ethereum ideas.

# Smart contract data will be private

The Blockchain was designed to be public and open to validation. This means that any node in the Blockchain can see the addresses of the accounts that transact, as well as the values of the transactions. In the case of smart contract applications, this includes all of the data that was stored in a smart contract. Many applications require data privacy, such that only specified recipients of smart contract data should be permitted access. There are a number of projects looking to add privacy to smart contacts including Enigma and Hawk. I’ve also developed a (patent pending) technique for managing smart contract data item privacy.

# There will be a standard, open source, enterprise ready, private blockchain for smart contracts

By the end of 2016 there will be a single dominant leading, open source, scalable, enterprise ready, distributed ledger optimised for private blockchains with full support for Turing-complete smart contracts. There are a number of organisations, both large and small, working on development of an open source Blockchain implementation that supports enterprise requirements. These generally include network privacy (creation of a private Blockchain network with control over onboarding of participants), high transaction volumes and throughout, complex smart contract capability (e.g. Ethereum style, Turing complete smart contracts), data and transaction privacy, fast data retrieval for analytics, security, auditing and monitoring, and enterprise integration.  Given the number of people and organisations working on this goal, I predict that this will be available before the end of 2016.

# More private, less public

The blockchain started life as a public chain. Many of the clever solutions in the Satoshi Nakamoto paper (proof of work / mining), and later in Ethereum (gas), addressed the problem of dealing with unknown untrusted participants. However, in the past 12-18 months there has been growing interest in Blockchain technology by the corporate world, especially the banking world. The banks are heavily regulated, making adoption of public blockchain technology a challenge. In addition, the banks require scale, and storing copies of all of their transactions on every node in a public network just doesn’t work (even in a private one this will be a major challenge). This is why, for the time being, many companies are looking at private blockchain networks. There is the possibility that as the technology matures, scaling solutions like sharding become available, and data privacy issues are resolved, that solutions may eventually make their way over to a public chain – but this is a long way off. For now, we’re all going private.

# More data, less cryptocurrency

The blockchain started life as a solution for the creation of anonymous, decentralised digital cash. However, the last 12-18 months have seen a great deal of interest in applying the technology to non-currency, even non-financial solutions. Digital currency is only one application of the blockchain, and I believe that many others will emerge throughout 2016.

# More industry networks

The blockchain is a network technology, and blockchain solutions are networks. In order to gain value from blockchain technology (in my view) you need to be implementing cross-organisation workflow, and for this you need a network of organisations. Let’s say you create a blockchain network for businesses to invoice each other (see Tallysticks), or for managing the home purchase mortgage conveyancing process – each of these networks will start by recruiting businesses / clients / organizations to the network. Other competing networks may emerge, but for each ‘problem’ that is being addressed using a blockchain shared ledger, a dominant network is likely to emerge.

# More industry consortia

In order to create industry networks, you need to bring together the different players in an industry – organisations that may or may not normally work together. In fact, there is a high likelihood that these organisations are competing. R3 is the most visible blockchain consortium for the banking industry, although there are already numerous examples of attempts to bring together a number of players in an industry to gain the efficiencies offered by blockchain solutions through collaboration. One side note: these consortia are not only difficult to construct, but they are likely to be slow moving. Design by committee is not optimal, especially with the involvement of large, often politically charged, organisations. In parallel, more agile start-ups looking for a slice of the existing business model are likely to emerge. Then again, the consortium, may agree as a group to adopt technology from one or more startups.

# Network consolidation

As pockets of activity begin to emerge, whether these are solving a specific problem in an industry, or a consortia attempting to agree an overall strategy and approach, there will come a point when these networks will begin to grow and become prominent. At that point there may be multiple networks each connecting a subset of industry players. Those networks will either need to talk to each other (through some sort of standard, or cross-blockchain technology), converge or battle it out until there is one outright winner. There is also a danger that some organisations will find themselves dealing with multiple networks – e.g. one for KYC, one for mortgages, one for payments. Here too, consolidation, or cross network interchange may be required.
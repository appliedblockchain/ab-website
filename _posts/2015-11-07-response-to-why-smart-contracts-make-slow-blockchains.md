---
layout: "post"
title: "Why Smart Contracts Make Slow Blockchains"
lead: "You have raised some real issues with the current implementation of Ethereum. However, I think that most of organisations playing and building with Ethereum as a private chain today don’t believe that Ethereum, certainly not in it’s current form, will be their target platform."
image: "response-to-why-smart-contracts-make-slow-blockchains.jpg"
category: "Blog"
---

The reason they’ve chosen Ethereum is because they see the potential of one particular feature: The Ethereum Virtual Machine. This smart contract implementation, together with it’s developer friendly Solidity programming language has sparked a great deal of interest as you know.

Why? Because it is an almost perfect paradigm for designing decentralized permission-based cross-organisational workflow (see [here](https://medium.com/applied-blockchain/blockchain-for-cross-organisation-workflow-1efebc838dc3)) – without the need for a trusted/centralised intermediary of course. This is achieved by providing a template for sharing and modifying data, and following a sequence of permission-based interactions/transactions in a controlled, accountable way. It’s a layer of abstraction at just the right level.

It’s true that it may not be the most technically efficient method – and in fact, as you point out, it still has numerous technical flaws. However, it is a beautifully elegant solution to a very real problem.

I’d go as far as to compare it to relational database design, when that was first devised. Organising data into normalised tables with relationships provided a superb paradigm for the design of data storage in a structured, efficient and easy to comprehend manner. Were relational database tables technically required? Not really. Did they facilitate mass adoption of database technology? Absolutely. Smart contracts, as they have been implemented in Ethereum, have the potential to do the same for cross-organisational workflow.

# Performance

It is true that the public Ethereum chain takes (much) longer than 12s to confirm transactions. However, we’ve got a number of private Ethereum nodes running on commodity hardware (8GB RAM) confirming transactions in fractions of a second (mining difficulty set to easy). As you know, in a private blockchain, mining as proof of work is not even required – so performance isn’t really an issue here. There are already a number of organisations working on creating performant private blockchains that run Ethereum Virtual Machine smart contracts.

Another important point is that writing data into a smart contract requires consensus. Reading data does not. The reading of data from a smart contract is a local activity, and isn’t subject to the performance overheads of consensus.

# Endless Loop

As you mentioned, the endless loop can be controlled by placing an arbitrary limit on the processing of a transaction. The use of Gas in Ethereum is a public chain only requirement. While an arbitrary limit is not ideal, it is in fact similar in behaviour to most of the systems we use today. All web applications, and most messaging systems and database connectors include a time-out. One could argue that these time-outs are implemented by clients, rather than servers, however, ultimately they lead to the same effect – if processing takes too long an exception is raised.

# Computation

It is also worth noting that in our experience, most of the use cases we’ve looked at require very little computation within the smart contracts. The smart contract code is used mainly to define the data structures, populate and retrieve data from the structures, implement access control, and enforce workflow step sequence. Occasionally there is some basic arithmetic, but not much more. This renders the contracts computationally light. However, the permissions and workflow logic is important enough to justify the smart contract computational processing overhead.

# Computation Off Chain

The problem with moving smart contract computation off chain is that there’s no agreed template and controlled environment for executing and validating it. How do you know what was executed unless you can replicate computation? And if you need to replicate computation in order to validate it, then you need an identical execution environment (e.g. a controlled shared virtual machine locked down through the consensus model of the blockchain). It is true that this can ultimately be achieved off-chain by validating input and output state. However, the same could be argued for storing data in a smart contract, and in both cases, the solution is far easier, more convenient and more elegant on chain.

# Concurrency

This is a perfectly valid point. It hasn’t been solved yet (as far as I’m aware) – although I don’t see why this wouldn’t be solved in the future. Concurrency is prevented due to the unpredictability of the smart contract and lack of control over the state resources (i.e. the data). However, as smart contracts encapsulate data, why couldn’t a future blockchain implementation be sophisticated enough to lock a specific contract (and therefore the data inside it), in a similar way to a row in a database – and therefore enable concurrent processing around it? In SQL an update statement could update an entire table, just as a smart contract could in theory contain all of the data. I assume that the sequential nature of the chain is another obstacle to truly concurrent transactional activity.

# Ordering

This appears to be a genuine problem. I’d be interested to hear other views, especially from Ethereum devs. I wonder whether a smart contract, or even the data items within a smart contract, couldn’t be tagged with an order enforcing attribute while in pending state. Transactions may still be dropped in such a solution, but presumably that could also happen in Bitcoin, and that wouldn’t necessarily be an issue as long an exception was raised and the calling client could react accordingly.

# Precedence

I’d draw a parallel to the big data world. Hadoop and other unstructured database technologies have become widely adopted as they are good at handling vast quantities of unstructured data, despite being almost primitive in their functionality and completeness compared to standard relational database technology. A new technology doesn’t always have to surpass every aspect of its predecessor. But if it solves a real problem in a more useful way, then it is a valid option.

# Enabler

In sum, while it is true that the current Ethereum design and implementation has many shortcomings – some fundamental, and some due to optimisation for a public chain, I don’t believe that any of these are truly unsurmountable. On the other hand, I do think that the elegant design of the Ethereum smart contract represents a genuine and meaningful innovation, and is, in itself, an enabler for many more innovations.

---

## Update (12/11/2015), Update (30/12/2015)

I’ve been speaking to the Ethereum developers at DEVCON1 regarding ordering. This is my understanding:

1. When you retrieve data from a contract, you only see the state of confirmed transactions – so you are not aware of pending transactions that you or others have sent, regardless of their order. You, and others are therefore not aware of the order until the block is confirmed and shared. This means that you will never make changes based on the state resulting from  transactions in an unconfirmed order. When the block is confirmed, you will see the result with the transactions in a fixed order, so at that point you are sharing the same resulting state, and any subsequent transactions that anyone makes will be based on that state. You may find that someone entered a transaction that follows yours in the confirmed block order of transactions, but that is fine, you will become aware of this at the same time as everyone else when the block is confirmed. You may also find that someone entered a transaction the precedes yours. That could be a problem, as you may have made a decision based on the last confirmed state, but now your code is executing based on something that happened in between the confirmed state and your code running (e.g. you’re putting in an order to buy an item at a price you saw, but someone increased the price in a new pending transaction that precedes yours – so your ‘buy’ transaction will execute at a different price) – I need to check this. There are two solutions to this:
    - When you apply changes, include the state values that you change depends on. For example, if you’re putting in a order to buy, include the bid price that you last retrieved (from last confirmed state).
    - Include a ‘locking’ transaction and ensure this is confirmed prior to your main transaction. There is no reason why you can’t programmatically lock some data in your smart contract. This lock, once confirmed, will present anyone else from updating your data item in the subsequent blocks – until your main transaction that modifies the state is confirmed. Others reading the data will see the lock and will be programmatically prevented from making any changes.
2. A problem may occur if there is a fork, and two nodes are looking at a different confirmed state with blocks containing the transactions in a different order. That could also happen in Bitcoin. In the post above I mentioned a number of initiatives to build Byzantine Fault Tolerant Consensus – which appears to be more suited to private chains (no mining). One of the Ethereum developers at the conference demonstrated HydraChain, and there is of course Eris with Tendermint. If BZFT is used, then there can be no forks – so this problem is eliminated.

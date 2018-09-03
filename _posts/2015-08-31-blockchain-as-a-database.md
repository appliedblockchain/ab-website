---
layout: post
title: Blockchain as a Database
image-link: blockchain-as-a-database
category: blog
external-link: https://medium.com/@AppBlockchain_/blockchain-as-a-database-6e81f915f207
---

<p class="post__headline">Much has been written about the merits of private blockchains. including articles by Richard Brown of IBM, as well as the founders of Eris.</p>

<p class="post__title">Private Blockchains</p>

<p class="post__content">A private blockchain involves a separate, essentially closed network, of blockchain participants (also known as nodes). Each participant has their own copy of the blockchain, essentially a ledger, with a locked down history of all of the transactions that took place in the network.</p>

<p class="post__title">Blockchain Advantage</p>

<p class="post__content">The advantage that the blockchain offers over traditional databases is that the history of transactions (essentially a transaction log) is shared between participants, and locked down using cryptographic layers. This is immutable data storage.</p>

<p class="post__title">Levels of Trust</p>

<p class="post__subtitle">Level 1: Participant Identification</p>
<p class="post__content">Much has been written about trust-less model that the public blockchain enables. This is a true innovation. However, in the context of private blockchains, the participants are all known – this is because they need to be on-boarded and brought into the private blockchain network. So knowing your participants gives one level of trust – and actually negates the need for mining – the Proof of Work activity that makes it difficult for ‘bad’ participants to take over and control the blockchain network.</p>

<p class="post__subtitle">Level 2: Transaction Integrity</p>
<p class="post__content">Transaction integrity in a blockchain is achieved through the locked down history provided by the ledger. No single participant can modify or ‘rewrite’ this history once it has been agreed and locked down in the blockchain (unless they gain control of 51% of the network).</p>
<p class="post__content">This second level of trust is the added value of the blockchain over traditional databases. Not only is data encrypted and shared, but the transaction log is locked down and agreed in a way that it cannot be modified by any one participant, yet it can be easily inspected at any time by any participant.</p>

<p class="post__title">Smart Contracts</p>

<p class="post__content">We’ve been experimenting with Ethereum. The reason we love Ethereum is that the smart contract capability is far richer than that of other blockchain implementations we have come across. Why is this important?</p>
<p class="post__content">You can define data structures within the smart contracts, essentially turning the blockchain into a database.</p>
<p class="post__content">You can build a permissions capability into smart contracts – essentially baking your security model into the blockchain itself in a way that cannot be modified without majority consensus.
You can define workflow for a number of participants.</p>
<p class="post__content">Again, much has been written about the potential of rich Smart Contracts. In this article we will focus on the database aspects.</p>

<p class="post__title">Blockchain as a Database</p>

<p class="post__content">Let’s assume that the advantages described above are a good fit for a particular use case. Now we would like to store our data in the blockchain, as if it were a regular database. This would allow us to build and integrate applications over the blockchain.</p>

<p class="post__title">Horizontal vs Vertical Blockchain Scale</p>

<p class="post__content">Blockchains were designed to scale horizontally, that is to increase the number of instances running the blockchain. However, each instance holds a complete copy of all of the data, and repeats all of the processing. This is great for integrity and security, but not very good if you need to store and process large quantities of data. For the latter, you need each blockchain node to scale vertically. That is, each node must have the capacity to process and store large quantities of data.</p>

<p class="post__title">Heavy Blockchain Nodes</p>

<p class="post__content">This brings us to a concept I’m calling the ‘heavy’ blockchain node. But how can a single node be scaled?</p>
<p class="post__content">There are two dimensions:</p>
<p class="post__content body--bold">Processing</p>
<p class="post__content body--bold">Storage</p>
<p class="post__content">A blockchain node, such as Ethereum, runs as a single process. There may be some multi-threading internally, but it is essentially one process, and presumably it can’t do too much in parallel due to the sequential nature of block and transaction management. So for now, let’s assume that processing can’t really be scaled.</p>
<p class="post__content">That brings us on to data storage. Blockchains currently use local files to store their data. These could, in theory, be switched to a more scalable data store. This isn’t strictly vertical scaling, since we’re actually taking a single node and installing a horizontally scaled data store below it.</p>

<p class="post__title">Querying the Data in the Blockchain</p>

<p class="post__content">Anyone with hands-on experience of blockchains will know that inserting data / transactions into a blockchain is slow – you need to wait for the block with your transaction to be confirmed, and this takes a few seconds on Ethereum.</p>
<p class="post__content">Retrieving data from a smart contract on a blockchain is much quicker. All you are doing is retrieving data from the local copy in your blockchain instance – you don’t need ‘consensus’ or involvement of other blockchain nodes.</p>

<p class="post__title">Indexing Data in the Blockchain</p>

<p class="post__content">The main problem with any database is query performance. In relational databases this is solved using predefined indexes. In non-relational no-SQL databases indexes are also created. In big data analytics platforms, such as Hadoop, vast quantities of structured/unstructured data are scanned in parallel – this is still very slow, even with newer incarnations such as Apache Spark.</p>
<p class="post__content">In the blockchain, the way you define your smart contracts should be driven by the way you intend to query your data.</p>

<p class="post__title">Individual Smart Contracts</p>

<p class="post__content">If you’re storing data in smart contracts, you can have a different instance of the smart contract for each row of data. This approach sounds clean and simple. The disadvantage is that every time you create a new instance of a smart contract, for a different row of data, you will receive a key. The key enables you to access that specific smart contract instance (and data) in the future.</p>
<p class="post__content">The key will need to be stored somewhere – either in an external database, or in another contract, and doesn’t lend itself to querying.</p>

<p class="post__title">Container Contracts</p>

<p class="post__content">A container contract contains an array or map of data. So in theory, you could store the equivalent of a table within one contract. The advantage of this approach is that you can store the data in a map with a key, and use that key to query your data in the future. In fact, there’s no reason why you couldn’t create multiple keys, to allow you to query the data using different parameters.</p>

<p class="post__title">Index Contracts</p>

<p class="post__content">A third approach is to combine the first two approaches. Store individual ‘data entities’ in individual contracts, but reference them from another contract which contains an array or map structure allowing the data items to be looked up, but also holding the keys to the individual data entity contracts.</p>
<p class="post__content">The third approach appears to be the most elegant, as it allows all of the data and querying to occur within the blockchain, while allowing for elegant individual contracts holding the data entities.</p>
---
layout: post
title: '4 pragmatic blockchain design patterns for business'
image: four-blockchain-design-patterns
category: blog
headline: In 2020 we’re beginning to see the emergence of the second generation of blockchain business applications that take a more pragmatic approach.
---

There are many ways that blockchain can be used in a business context and perhaps shouldn’t. It is a complex multi-party system that can become a burden if used incorrectly, but can also open up new efficiencies, markets and opportunities if well understood and executed in an optimal way.

![Diagram]({{ site.base-url }}{{ site.imageurl }}/posts/four-blockchain-design-patterns/intro.svg)	

In software design and architecture it is common to refer to design patterns when solving a particular problem. These are reusable high-level technical design templates that can be applied to many different use cases, and follow a well-trodden path in designing a solution. This is very common in [enterprise integration](https://www.enterpriseintegrationpatterns.com/).

As we’ve designed and developed 100+ blockchain applications for startups and global companies, we’ve condensed five years of learning into four “pragmatic” blockchain patterns that we use to guide our client projects. If your project doesn’t fall into one of these categories, then it probably won’t benefit from using a blockchain.

The patterns are also useful in guiding the type of blockchain platform required, as these also range in capability, complexity and suitability.

At its core, a blockchain provides “group security”. In other words, historical data secured by a group of parties is considered more secure and less prone to tampering than if it were stored and secured by a single party.

# 1. Time Stamping

This is a very simple pattern where an entire application and database reside outside the blockchain, and we use the blockchain to simply store and “group-secure” “evidence” of documents or activity that took place in the application.

![Diagram]({{ site.base-url }}{{ site.imageurl }}/posts/four-blockchain-design-patterns/1.svg)	

## How does it work?

This evidence takes the form of a digital snapshot “fingerprint” (also known as a cryptographic hash) that does not reveal anything about the document, data, activity or parties involved, but can be used to prove the state of the application data at a given point in time, and may be handy in resolving disputes, where there may be suspicion that data may have been modified or manipulated post agreement.

## Why is this better than using a regular application and database?

A regular database can be updated or modified (tampered with) by the application owner/developer. If additional reassurance is required that this is not happening, because the data is sensitive, and has important, perhaps high value implications, then a group secured blockchain network can provide this. Users suspecting foul play will need to check and compare the hashes in the blockchain to understand if an unexpected change has been made to the data.

## Who’s it for?

Anyone with an existing application wishing to extend the security and trust in its data by leveraging a larger group.

## What are the use cases?

Time stamping agreements, documents, certificates, contracts, prices, trades.

## Which blockchain?

Blockchain adds “group security”, and typically the more broad and diverse the group members, the more secure the blockchain record is likely to be. Public blockchains (e.g. Bitcoin, Ethereum) are large networks that are already established and are perfect for storing application privacy-preserving hashes for a minimal network fee. No need to create your own network.

## What about data privacy?

Hashes are small and succinct (typically 32 characters per “data snapshot”), and reveal no context nor data.

## Real life example?

An example of this pattern can be found in [Emsurge](https://appliedblockchain.com/projects/emsurge), a platform for managing liquefied natural gas (LNG) trades. Once a trade has been agreed in Emsurge, a privacy-preserving hash of the agreement is submitted to the [Energy Web blockchain](https://www.energyweb.org/), a public network based on Ethereum technology secured by a group of 100+ global energy companies. This type of integration is very light, simple, flexible and privacy-preserving.

# 2. Enterprise Business Process Integration

Large enterprises can often benefit from better “synchronising” their multi-party business processes (e.g. supply chain, invoices), in particular those that lead to payments and may be disputed. This is where we often see the term “DLT” used to describe the technology and solution.

![Diagram]({{ site.base-url }}{{ site.imageurl }}/posts/four-blockchain-design-patterns/2.svg)	

## How does it work?

In this case, it is assumed that all transacting parties are large enterprises and form a consortium (e.g. group of banks, insurers, retailers and large suppliers) and will each independently host a blockchain node that will store a copy of their own transactions.

## Why is this better than using a regular application and database?

The synchronisation of processes across multiple enterprises may be achieved through direct point-to-point integration, or through an intermediary service (e.g. a cloud/SaaS platform). However, if the data/transactions are particularly sensitive or high value in nature and a central intermediary is not desirable because it may see or access, or worse still tamper with the sensitive records, then a blockchain may offer the most efficient and secure solution.

## Who’s it for?

This pattern is useful for large enterprises, as they are more likely to form a consortium and take on the cost of hosting a blockchain node.

## What are the use cases?

Supply chains, contracts, purchase orders, invoices, letters of credit, bills of leading, syndicated loans, conveyancing, insurance, KYC, KYS.

## Which blockchain?

This is the realm of the private/consortium enterprise blockchains including R3’s Corda, Hyperledger Fabric and Ethereum Quorum.

## What about data privacy?

A transaction is only shared between the transacting parties, and perhaps a notary, thereby maintaining data privacy from other parties in the network. The advantage of this approach is that data can be stored and processed on the blockchain. The disadvantage of this approach is that the “group security” provided by the blockchain for each transaction is limited to that small group involved in a particular transaction, and they may collude to remove or tamper with the historical record. If the small group is sufficient for the additional trust required in a particular business process application, then this is not a problem.

Another potential issue is that these privacy groups don’t lend themselves to data that needs to be shared across different privacy groups (e.g. supply chain tracking, where a transaction should remain private to the transacting parties, but there is a desire to trace the evidence of product provenance across multiple historical transacting parties).

There are cryptographic techniques available that can be overlaid onto the various blockchain platforms for providing historical provenance of data while maintaining data privacy. A novel approach is being explored in project Baseline using zero-knowledge proofs to maintain a privacy-preserving trail of business process activity on the public Ethereum blockchain, where the entire public Ethereum network provides “group security”, while data remains hidden.

## Real life example?

[A blockchain solution](https://appliedblockchain.com/projects/shell) that was built and went live in 2018 enabled Shell’s energy trading team to record and share trades across multiple independent business units.

# 3. Simple Assets

Basic blockchains are first and foremost asset registers. Bitcoin itself is a distributed registry of digital asset ownership.

![Diagram]({{ site.base-url }}{{ site.imageurl }}/posts/four-blockchain-design-patterns/3.svg)	

## How does it work?

In blockchains, assets are expressed as tokens that belong to accounts, and can be transferred to other accounts through transactions. The asset could be purely digital, a representation of money, or a representation of a physical asset such as a commodity or property.

## Why is this better than using a regular application and database?

Master records of ownership secured by a group of parties are in theory more secure than master ownership records secured by a single party.

## Who’s it for?

Anyone wishing to use a blockchain as a more secure primary registry of ownership for an asset. The blockchain must be the master record of asset ownership. If there’s another record elsewhere that prevails in terms of legal ownership it will undermine the added security of a blockchain representation. The reason to use a blockchain master record is to “group-secure” the record of ownership, to reduce the likelihood of theft or tampering with the ownership records.

## What are the use cases?

Tokenised assets, fractional ownership of real estate, luxury goods, commodities, vouchers and loyalty schemes, digital twins of physical products, crypto assets.

## Which blockchain?

Unlike the “Enterprise Business Process Integration” pattern that requires users of the application to host nodes, the “Simple Assets” pattern enables separation between those parties hosting nodes and providing “group security”, and those users entrusting their asset ownership record to the blockchain network. In the case of asset ownership, the broader and more diverse the node hosting group, the less likely they are to collude, and therefore the more secure the asset ownership record. Public blockchains that facilitate simple custom tokens are a good place to start (e.g. Stellar, Elements). These can also be deployed in a private network, although the security of assets on the private network will be subject to the parties hosting nodes, and their propensity to collude, and they will likely need to be compensated for their hosting costs, which further complicates matters. We recommend keeping things simple, so if you only require a simple asset ownership record, then use a blockchain that is optimised for that.

## What about data privacy?

Asset registers don’t always require data privacy, but if they do, zero-knowledge proofs can be used (e.g. Elements using bulletproofs), or secure enclave hosted blockchains.

## Real life example?

[Wyzepay](https://appliedblockchain.com/projects/wyzepay) is a great example of an application that offers users redeemable retail tokens, and uses a token-based blockchain network in order to secure a user’s token assets.

# 4. Assets with Rules

This pattern is the same as the “Simple Assets” pattern, with one very important difference: Rules that determine when an asset can be transferred are encoded in smart contracts. This is really the original and primary purpose of smart contracts. That is, use the “group security” of the blockchain to add security to enforcement of rules leading to asset transfer, so that no single party can undermine the rules.

## How does it work?

In the previous “Simple Assets” pattern, an asset can only be transferred when the asset owner holding their private key provides a digitally signed transaction to do so. In “Assets with Rules” an asset can be sent to a smart contract by the owner, where a set of rules enforced by the blockchain networks of nodes determine further movement or exchange of the asset. For example, a smart contract could act as an escrow service, and only release one set of assets upon receipt of another set (delivery vs payment: DvP or payment vs payment PvP).

## Why is this better than using a regular application and database?

The added “group security” not only for the master record of asset ownership, but also for group-enforcement of rules and restrictions guiding when assets can and should move, is in theory greater than the security provided in an application where asset movement rules are enforced by a single party.

## Who’s it for?

Anyone requiring a master asset register that will be made more secure by a group of parties, where there are complex rules determining asset transfer, and these would benefit from being automatically enforced and secured by the group rather than by a single party.

## What are the use cases?

Asset purchase and exchange(atomic swaps), trade, insurance, financing, investment (e.g. DAO), company shares and asset management, real estate and conveyancing.

## Which blockchain?

As with the “Simple Assets” pattern, the “Assets with Rules” enables separation of the node hosting parties from asset owners (users). The simplest, and (arguably) most secure network for records of assets is arguably a public network that supports complex smart contracts such as Ethereum or Algorand. A private network can also be deployed using the same or similar technologies, although the security of assets on the private network will be subject to the parties hosting nodes, and their propensity to collude, and they will also need to be compensated for their hosting costs, which further complicates matters.

Enterprise blockchains (R3 Corda, Hyperledger Fabric, Ethereum Quorum) may also be used for this purpose, as they do offer the ability to configure a secure network of nodes, and they offer smart contract capabilities to enforce rules, although attention should be paid to the privacy vs security compromise in network design and implementation. For example, if only a small subset of the network can see or know about a transaction for an asset, how small (and unlikely to collude) is the group practically providing transaction security and tamper-proofing? Similarly, how is asset provenance maintained across transaction privacy groups?

## What about data privacy?

In this pattern, it is not recommended to store any data on the blockchain unless it is absolutely required in order to identify an asset or to drive the rules governing asset movement. Asset registers don’t always need data privacy, but if they do, and a large and diverse group of parties is adding “group security”, then zero-knowledge proofs can be used to provide asset and transaction privacy (e.g. [ZKAT](https://developer.ibm.com/tutorials/cl-blockchain-private-confidential-transactions-hyperledger-fabric-zero-knowledge-proof/) on Hyperledger Fabric, [Aztec](https://www.aztecprotocol.com/) on Ethereum), or secure enclave hosted blockchains (e.g. [Microsoft Azure Confidential Computing Framework](https://www.microsoft.com/en-us/research/project/confidential-consortium-framework/) or Corda with Conclave).

## Real life example?

[TravelLedger](https://appliedblockchain.com/projects/travel-ledger) is an example of a blockchain application that uses payment tokens to represent financial obligations and funds on a blockchain, and business rules in smart contracts, all secured by a group of parties, to ensure that business to business invoices and payments are executed more securely in the travel industry.

# Summary

Below is a summary of the four patterns described in this article:

![Diagram]({{ site.base-url }}{{ site.imageurl }}/posts/four-blockchain-design-patterns/summary.svg)	

## Can I mix and match?

We’re big believers in the [KISS principle](https://en.wikipedia.org/wiki/KISS_principle). There’s a lot to be said for maintaining a simple and elegant design, and only deploying selective, optimal technology as required to solve a particular problem.

In the complex world of blockchain, there are many concepts and use cases, and it is very easy to mix and confuse different properties and aspects of the technology. That was the motivation for defining and carefully delineating these four blockchain patterns.

## What else?

Blockchain is only one of a growing number of cryptographic tools available to businesses to add trust and privacy to their applications. In the next article we’ll begin to cover some of the others.

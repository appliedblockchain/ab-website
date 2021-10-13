---
layout: "post"
title: "Blockchain for Cross-Organisation Workflow"
lead: "Everyone is looking for the perfect blockchain use case. There’s a lot of talk about blockchains, and there are a number of smart people working on improving the underlying blockchain platform technology (consensus algorithms, throughput). However, there are very few good use cases actually being built and realised using blockchain technology."
image: "blockchain-for-cross-organisation-workflow.jpg"
category: "Blog"
---

# Smart Contracts

A blockchain smart contract is a piece of code that defines the rules of a transaction. In the original Bitcoin blockchain, a transaction was defined as the transfer of cryptocurrency value from one account to another.

In asset based blockchains, a transaction may be defined as the transfer of an asset (or part of an asset) from one account to another. Smart Contracts allow you to extend that model. Rather than simply transferring cryptocurrency value or other assets, the blockchain allows users the ability to create a contract, which may contain data, permissions and workflow logic which permits accounts on the blockchain to interact with such contract.


# Smart Contracts are NOT Stored Procedures

There is a growing consensus (pun intended) around the value of blockchain technology as a new type of database with unique properties.

A good friend, Dr Gideon Greenspan, Founder & CEO of Coin Sciences, recently described the private blockchain:

> Shared write database of limited trust

A common perception is that if data stored in smart contracts is analogous to data stored in a database, then surely logic coded into smart contracts is equivalent to database stored procedures. That’s missing a very important point. In a standard database there is clear separation between the data, and the stored procedure code. The stored procedure code implements logic, and can be used to read/write/access the underlying data, but it can also be bypassed.

With a blockchain smart contract, the data and code co-exist. Consequently, the code can control and restrict how the data is accessed and used. This is very important, especially when there are multiple parties/organisations sharing a database! With blockchain, not only can no party change history, but no party can bi-pass the smart contract permissioning logic as they might with a database stored procedure.

So a smart contract enables restrictions to be placed around which account(s) can create or update the data. At the same time, smart contracts also allow accounts to write workflow logic, and create steps in a process where different parties/accounts have different roles to play, that must be played out in a predefined order.


# Blockchain for Cross-Organisation Workflow

In today’s world, when one or more organisations are interacting, there are two options:

## 1. APIs/Messaging

Each organisation sends the other a message when they need to share information. This works well in many scenarios, but it is not very reliable. What if either system in the API connection goes out of sync – how could that be reconciled? Who would hold the most valid copy of an interaction/transaction history? This is especially important where financial/legal interactions/transactions are stored which may be challenged at a later date.

## 2. A shared intermediary cloud service

Where it is important to keep an accurate shared view of the state of interactions/transactions, a trusted intermediary can resolve the problem. Each party interacts directly with a trusted intermediary, rather than directly with the counterpart. In such arrangement, the trusted intermediary holds the master copy of interactions/transactions history. This may seem like an excellent solution but it is less than ideal because an organisation’s own internally hosted copy of the interactions/transactions history may still desynchronise with the trusted intermediary’s (cloud hosted) copy.

Blockchain solves the above problems through the distributed ledger. No intermediary is required as a trusted, shared ledger of interactions/transactions resides within each organisation. So, with a distributed ledger, there is no danger of individual systems becoming desynchronised with the counterparty. The result is an agreed, immutable history of interactions/transactions.

Add smart contracts, and the blockchain becomes a platform for immutable cross-organisation workflow, as Casey Kuhlman, CEO of Eris Industries, recently described this:

> Business process automation in a consortium

# A Perfect Use Case

Most companies have suppliers. In today’s world, the suppliers provide a product or service and then issue an invoice. The invoice is usually either paper based, or in the form of a PDF or Word document.

Companies typically store their accounting data in their own siloed accounting/ERP systems. This is great for managing the activity of a company, however, it isn’t ideal for managing and capturing a company’s financial interactions/workflow with suppliers and clients.

Armies of accounts personnel are often employed to pay, track and reconcile invoices in order to paint an accurate picture of a company’s financial position and exposure.

Invoice reconciliation is a classic cross-organisation workflow that’s broken.

Enter the blockchain. Why not create an invoice reconciliation network on the blockchain? If invoices and payments were tracked on a shared private blockchain, invoices could be automatically reconciled and their payments tracked. A reliable, immutable, shared record of invoice activity could be recorded on the distributed ledger which would be automatically shared, propagated and agreed with the other parties to render the data immutable. The data would feed from the blockchain into each company’s internal accounting systems and vice versa, feed from each company’s internal accounting system onto the blockchain which would act as the master source for invoice related activity. Therefore, if any party later attempted to challenge the status of an invoice, the distributed ledger would serve as an immutable reference to resolve any disputes.

With Blockchain, there is no cloud API nor cloud synchronisation issues; No third party to reconcile the data or manage the workflow; No armies of accounts personnel.

There would also be other advantages. Having an accurate view of invoice related activity could provide more accurate picture of a company’s accounts to management as well as to auditors. At the same time, fraudulent invoice payments (i.e. routing payments to fraudulent accounts) could be reduced. So, the benefits of a blockchain-based invoice reconciliation solution are obvious.

This is a use case that was presented to us by Kush Patel, of Tallysticks, a number of months ago and we’ve now built the first prototype.

Tallysticks was announced and presented on stage at the recent Blockchain New York conference.

Even though Tallysticks will facilitate and ensure the smooth running of this service, it will not be able to manipulate the data. Unlike traditional cloud based services, the Blockchain smart contracts will not allow anyone other than the transacting parties to change any data. This adds a significant trust layer, removing the need to trust third parties or their employees.

Most importantly, it is our working assumption that the immutable nature of this shared data platform will stand up to scrutiny and potential legal challenges between parties better than traditional, more exposed, and editable historical ledgers and databases currently in use today.

On a technical note, in reference to a previous post “Blockchain as a Database“, we followed the ‘Index Contracts’ pattern. This allows us to store the invoices in individual smart contracts, whilst having ‘container’ contracts hold ‘indexes’ for querying and searching for invoices.

In reference to ‘The Whole App in a Blockchain’, we followed this mantra, and refrained from using any other data stores. So all of the data in our invoice reconciliation application resides in smart contracts on the blockchain. The reason for this is that we then don’t need to find any other solution for sharing reference or other non-transactional data between the parties – we use the blockchain as a convenient distributor of data for that purpose.

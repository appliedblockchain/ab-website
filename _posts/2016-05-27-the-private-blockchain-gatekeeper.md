---
layout: "post"
title: "The Private Blockchain Gatekeeper"
lead: "This piece proposes concepts for designing a Private Blockchain Smart Contract Application."
image: "the-private-blockchain-gatekeeper.jpg"
category: "Blog"
---

**Private**: because we don’t want the whole world to access it, or take on the load

**Blockchain**: because different entities that don’t necessarily trust each other need to transact

**Smart Contract**: because we’re going to be implementing a workflow and share data between organisations that do not trust each other

**Application**: because it’s going to do something useful

At Applied Blockchain we’ve designed and built a number of private blockchain smart contract applications, and we thought it was time share some of the lessons we’ve learned. We’ve pioneered an approach we’re simply calling: BApp (Blockchain Application). It is a general approach that can be applied to a wide range of problems. We’ve also shared a light, simple open source private blockchain application development framework of the same name. 

[Feel free to try it](https://github.com/appliedblockchain/bapp).

I believe that this technology only really adds value for a group of participants who do not necessarily trust each other but need to share and transact (financial or otherwise). If this is true for a problem that you need to solve, one approach is to look at creating a private blockchain network. You’ll need a number of participants (usually different organisations) who will each hold their own copy of a blockchain (aka shared ledger / distributed ledger). You will act as the gatekeeper.

# The Gatekeeper

This is an organisation that creates the application and manages the on-boarding process for participants. As this is a private blockchain network, there needs to be a way for new participants to gain access, and the Gatekeeper is responsible for this process.

[Tallysticks](http://tallysticks.io), for example, is an invoicing, invoice financing and invoice trading blockchain solution. When new companies would like to join the network to send and/or receive invoices they need to be on-boarded, and this is where Tallysticks Limited will act as the Gatekeeper. Each company will go through a KYC vetting process before being granted access the Tallysticks private blockchain network.

In the case of a consortium, the Gatekeeper is an organisation that represents the consortium members.

It is important to note that the Gatekeeper is not responsible for managing the transactions, and in fact, has no visibility of the data in the transactions. This is very different to a cloud service (think Tungsten or TradeShift in the invoicing world) – those cloud based services hold, manage and secure transactional data. That means that companies using those systems are entrusting their core data in their hands. In our case, the Gatekeeper manages access to the network, and provides the software for parties to transact directly with each other. Each party holds their own copy of the ledger which only they can access.

Once a new participant has been accepted into the network, keys can be issued and signed by the Gatekeeper. The keys will enable the new participant to interact (i.e. transact) with the private blockchain ledger.

The Gatekeeper is also responsible for allowing new participants to have their own copy of the shared ledger. This must be managed because each copy (also known as a node) is also a vote in the consensus process for validating blocks of transactions. This function of the Gatekeeper negates the need for mining, as the threat of a Sybil attack (where a rouge entity attempts to undermine the network by gaining 51% of the voting rights)  is mitigated. Ah, but this makes the Gatekeeper a corruptible trusted entity and single point of failure, I hear you cry. This too can be mitigated by providing visibility of all approved nodes (note that this information is presented in a way that provides assurance, and does not compromise privacy). In the case of a consortium, members may also vote-in (or block) new members.

The Gatekeeper and participants can each monitor the integrity of the shared ledger by monitoring and validating their own copy of the entire ledger.

# Gatekeeper vs Service Provider

You’ll have noticed that the roles and responsibilities of the Gatekeeper are radically different to those of a regular software service provider. The Gatekeeper does not host the data on behalf of other organisations, nor is Gatekeeper responsible for the integrity of that data. They are in fact one step removed, and this changes their role from trusted intermediary (with all of the risks associated with managing the master ledger on behalf of others), to a facilitator.

This may seem like a subtle, technical difference, but it is in fact the fundamental difference that enables the organisations to transact directly with each other, without giving a third party access to their sensitive data. While it is true that all participants in the network hold a copy of the entire ledger, including the transactional data of other organisations, we’ve developed a privacy framework that dynamically encrypts all sensitive data such that only the intended participants can decrypt and access the data at a given point in time.

# Cloud Anti-Pattern

Over the last ten years, the software industry has been emigrating to centrally managed cloud hosted solutions. At this point I’d like to distinguish between two concepts associated with cloud computing:

Hosting your own software in the cloud (e.g. using Amazon AWS, Microsoft Azure etc.). Using a centrally managed cloud hosted software service (e.g. using the Salesforce.com CRM application). The first point is merely about the location of the software owned by an organisation. The second point is very different. It is about giving your data to a third party to run in their centrally hosted cloud application (e.g. entrusting your customer data to Salesforce.com).

A private blockchain network is the anti-pattern of this second point. Rather than pulling everyone’s data into one location managed by a trusted intermediary (a cloud software service provider such as Salesforce.com), the data is held and distributed by the parties themselves. The intermediary software-as-a-service provider is disintermediated, and their role becomes that of a Gatekeeper.

Note that each party may still choose to host their own copy of the ledger in the cloud (as per first point above), and the Gatekeeper may set this up for them initially before handing over keys, but it be their own copy in their control, with no access or control by a third party intermediary (including the Gatekeeper).

In terms of storage efficiency this goes against all of the gains made by having a centrally hosted cloud solution. Instead of a single copy of the data in the centre, now everyone on the network has a copy of the entire ledger. This inefficiency is offset by the gains in trust and security.

# Own Node vs Gatekeeper Node

Participants in the blockchain can choose to have their own copy of the distributed ledger (aka a node). The more copies there are in the network, the stronger the integrity of the private blockchain network, so this is something that should be encouraged. However, we don’t expect small organisations or individuals who may still interact with our blockchain network to each host their own copy of the ledger, as this would be unreasonable (not to mention uneconomical), and for this reason we’ve designed a shared, Gatekeeper Node.

# Own Node

The node doesn’t necessarily need to be physically hosted by the organisation, but for integrity, it does need to be ‘owned’ by the organisation. This means that the organisation is the only one that can access/control the node. The Gatekeeper, for example, should NOT be granted free access to the organisation’s node.

This allows the organisation to independently monitor everything that happens on the Blockchain, and gives it equal and independent voting rights on the transactions in the network, as well as Blockchain fabric and smart contract software upgrades.

# Internal Integration

In this design pattern, a node that is ‘owned’ and controlled by an organisation is also well placed to be directly integrated with the organisation’s internal systems. An IT department is more likely to permit its systems to be connected to a copy of the ledger that is controlled by the organisation itself.

To bring this to life, let’s look at the example of [APPII](http://www.appii.io/), a venture we’re involved in, with a private blockchain application for the recruitment industry where candidate profiles are stored in smart contracts controlled by the candidates, and candidate educational achievements and work placements are recorded and signed by the those institutions. In this case, a company with it’s own node can integrate it’s own copy of the blockchain with it’s own corporate HR systems in order to automatically validate/confirm candidate placements, as well as search for candidates.

Another venture we’re involved in is RoboCoupon where a manufacturer, distributor or retailer can create, manage, and settle coupons redeemed by consumers. In this case a retailer may hold it’s own copy of the ledger and integrate this directly with their point of sale system.

Similarly with Tallysticks, and organization can integrate its copy of the ledger with its ERP / accounting system.

# Gatekeeper Node

Most solutions that we design and build involve users that will not have their own node. They may be individuals or SME’s that will interact with the private Blockchain network, but it does not economic make sense for them to have their own copy of the private Blockchain ledger.

In Tallysticks this might be an SME buyer or supplier. In Appii this may be an individual job candidate, and in RoboCoupon this could be a consumer.

How do we allow these parties to engage with our private Blockchain network? The answer is a Gatekeeper hosted node. It must be stressed a Gatekeeper hosted shared node compromises the integrity of the Blockchain network. It moves us back towards a centrally hosted solution. For this reason it must be accompanied by a robust network of nodes owned and hosted by other organisations. The Gatekeeper has no visibility of transactions, and shares equal power and voting rights as other nodes in the network.

It should also be stressed that additional keys will be required by those users accessing the Blockchain network via the Gatekeeper’s node. This is to ensure that the Gatekeeper cannot access their private data or transactions.

In sum, we’ve presented a new paradigm of the private blockchain Gatekeeper to replace the traditional role of software service provider. As private blockchain solutions, including the ones mentioned in this article, migrate from proof of concept to live production systems (Tallysticks going live in April this year), we intend to test this paradigm in the real world, and no doubt learn more lessons on the way.

---
layout: "post"
subtitle: "What the Damien Hirst Project The Currency Gets Right about Physical NFTs"
title: "Physical NFTs"
image: "physical-nfts.jpg"
category: "Blog"
tags: ["NFT", "Currency", "Blockchain"]
---

In March we wrote about [The Growing Ecosystem of Non-Fungible Tokens (NFTs)](https://appliedblockchain.com/growing-ecosystem-non-fungible-tokens). As often happens in the blockchain world a lot has changed in the past few months. With the launch of the high profile [Damien Hirst “The Currency”](https://www.heni.com/) NFTs have expanded beyond purely digital art and towards physical NFT artwork. We've been working on NFT marketplaces with major artists . Here we will summarise some of our findings and clarify some common incorrect assumptions, in particular we focus on how we think The Currency project got it right.

# What is a physical NFT artwork?

A physical NFT artwork (Non-Fungible Token) is a token which represents a real world physical artwork.

# Can a digital NFT be linked to a physical artwork?

One common mistake people make is to assume that an NFT can exist and be traded alongside the physical asset. In practice, unless the physical asset is held in custody, it will be very difficult to track both the physical artwork and digital NFT. For example, I could buy an NFT online, but in the meantime the holder of the physical asset may have sold it for cash without updating the digital record. It is fair to assume that without a trusted custodian of the physical asset, it is impossible to ensure that the physical art and the digital NFT remain in sync.

We therefore have two options:
1. Place the physical asset in custody with a trusted custodian while the digital NFT is trading, whereby the custodian commits to delivering the physical artwork to the NFT owner on the terms agreed, or
2. Treat the digital NFT as a separate piece in its own right that may accompany the physical artwork, but can be separately priced, bought and sold. In this case, the value of the NFT is independent of the physical piece.

In the remainder of this article we shall focus on option 1, as this was demonstrated in The Currency project.

# Why do physical NFT artworks add value over traditional physical artworks?

Why would someone want to create a tokenized version of a real world asset? There are a few reasons below:

## Simple trading

The primary venue for buying or selling a physical art piece is an auction house where the piece is assessed for condition and value and then sold at auction to the highest bidder. If the buyer of the asset wishes to sell it themselves they would typically go through the same process. Other alternatives might be direct sales, or sales through art dealers. In all cases, the physical item must be packaged and transported in order for the sale to complete. By contrast, an NFT can be sold instantly on numerous online marketplaces. As the condition and custody is vouched for by a third party, there is requirement for revaluation or transportation of the physical asset.

## Availability

An NFT can be sold at any point and bought at any point. Where a traditional piece of art may change hands every few years or decades due to the need to inspect and transport the physical item, an NFT representing ownership of the physical artwork can change hands instantly several times in a day or hour with different owners across the globe.

## Liquidity

Where a traditional art piece sale is limited to customers of the auction house an NFT piece can be bought or sold by anybody with a crypto wallet. This opens up pieces to be traded by a much wider global pool of buyers and sellers.

## Logistics (Or lack of logistics)

Transferring high value physical assets is complicated, the process usually involves some or all of the following: shipping, insurance, escrow for the funds, a dispute resolution process. The transfer of an NFT is instant and funds can be transferred as part of an atomic swap ensuring both parties get what they bought/sold.

## Fraud Protection

Fraudulent copies of works being sold is a major problem with physical works with even The National Gallery in London under suspicion of inadvertently displaying fraudulent pieces. Once the ownership of the artist private key is established (e.g. the artist has published their public key to the public through a reliable source), then the blockchain provenance of the NFT of the artwork will be very difficult to undermine.

# What is The Currency Project?

The latest project by British artist Damien Hirst, "The Currency", is a work of art in two forms. The physical form consists of 10,000 hand-painted A4 sheets covered with colored dots. The back of each artwork features a unique phrase, the artist's signature and a watermark of the artist. The second part of the artwork is a corresponding digital NFT for each of the physica pieces.  
The way "The Currency" works is that collectors will not immediately purchase the physical artwork. Instead, they'll pay $ 2,000 for the NFT and then have a year to decide if they want the digital or physical version. Once the collector selects one, the other will be destroyed.

By creating 10,000 individual units that mimic real-world currencies, Hirst is highlighting with the unique markings of each work that even fungible currencies have some non-fungible properties - for example, most currencies will have a different serial number and issue date on each banknote. This helps to emphasize that money is a concept that becomes even more difficult to define when you look at it more closely. The work further challenges our sense of what money is by raising questions about another of its essential properties: that of a medium of exchange. Producing 10,000 works in the style of a currency, he is clearly enjoying showing how money is malleable and can change shape depending on the context.

There are many things we believe this project got right about physical NFT artworks and we will use it as a case study here.

# How can I trust that the NFT can be exchanged for a real world asset?

With a digital NFT the hash points to a file giving a natural link between the asset and the NFT. With a physical asset a custodian must attest to the asset’s condition and existence, the owner of the NFT must trust that this custodian will deliver the physical asset in exchange for the NFT. In the case of The Currency project a physical artwork will be issued by the custodian when the corresponding NFT is given in exchange. It is key that the NFT is burned (destroyed) when the physical asset is released from custody to prevent double spending (selling the asset twice, once in digital and once in physical). You can learn more about this project and view the history of transactions here: [Stats](https://currency.nft.heni.com/stats).

A common misconception that we encounter in our conversations about NFTs is that an NFT referencing a physical asset has value without custodianship, or that issuing an NFT alongside a physical asset adds value. If holding an NFT “linked” to a physical asset gives you no right to the physical asset or you already have the physical asset then the NFT may not be considered to hold much value.

# The challenge with custody?

Securing and maintaining a physical asset is not cheap nor easy since there are specific rules to follow. Indeed, the physical custody of important works and art collections during the transfer and removal phases, mainly concerns a careful packaging activity. In addition to the "packaging", which is of great importance for the safety of a specific work, it has the surveillance and the setting up of control systems, to avoid theft or voluntary damage.

# The Currency solution and other solutions to paying for custody?

The Currency project has its own secondary market and charges a fee (5%). At the time of writing In the last week alone there have been more than [seven million dollars in trades](https://nft.heni.com/stats). These fees allow the project to pay for the costs incurred in custody of the asset. As with other token projects, users are free to move their NFTs to other marketplaces but the convenience of being able to sell on the same platform the token was issued leads many not to. Parties may be tempted to try to lock an NFT to only be tradable on a single marketplace or charge a fee for transfer between wallets. While these may be tempting both of these methods are against the spirit of the technology and may cause the community not to value the tokens. In fact, if an asset can only ever be bought and sold in a single marketplace then we would question the value of storing the asset as a blockchain NFT. The value of the blockchain is that the asset can be freely traded beyond the original marketplace, and knowing that the asset will outlive the marketplace. This also opens the asset to other blockchain based services such as DeFi lending using the NFT as collateral. The Currency project shows that a well implemented marketplace easily available can cover the cost of custodianship and ensure the artist and the marketplace can get paid an ongoing fee with exponentially more activity and liquidity than would normally take place after the original sale of the artwork.

# Summary

The core points to consider when creating an NFT representing physical world assets:
- Who will be the custodian? Why will people know to trust them?
- What mechanism will be used to link the physical asset to the NFT?
- Will the additional activity and liquidity provided by an NFT lead to additional revenues?

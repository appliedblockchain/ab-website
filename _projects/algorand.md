---
layout: project
order: 2
case_study: true
title: Algorand
subtitle: Randomness Oracle
industry: Blockchain
short_summary: Algorand is a decentralised network built to solve the Blockchain Trilemma of simultaneously achieving speed, security, and decentralisation. Launched in June 2019 by computer scientist and MIT professor Silvio Micali, Algorand is a permissionless, open-source blockchain network upon which anyone can build.
summary: Algorand is a decentralised network built to solve the Blockchain Trilemma of simultaneously achieving speed, security, and decentralisation. Launched in June 2019 by computer scientist and MIT professor Silvio Micali, Algorand is a permissionless, open-source blockchain network upon which anyone can build. Applied Blockchain has been working closely with the Algorand Foundation since 2019, including developing a range of leading Algorand decentralised applications from Opulous music rights financing, to Aorist high-end digital art marketplace, and core infrastructure such as London Bridge, a secure token bridge between Ethereum and Algorand, and Silent Data, a privacy-preserving data oracle.
link: https://www.algorand.com/
background_color: white

challenge:
     - paragraph: Generating a source of trusted and secure randomness is difficult, especially on-chain. Yet having one is necessary for decentralised applications that depend on randomised processes, such as lotteries, random NFT drops, games, etc. Crucially, it is not enough for most on-chain applications to use "random-looking" quantities (such as the block seed) as sources of randomness. Instead, block proposers have partial control over these quantities, making it possible for rogue block proposers to break applications that depend on these sources being unpredictable.
challenge-video: true
challenge-video-lead: Video Case Study
challenge-video-title: randomnessoracle

delivery:
     - item:
         - paragraph: With all the above in mind and with the commission from the Algorand Foundation, Applied Blockchain was able to design, build, and host the very first randomness Oracle for the Algorand blockchain. The Oracle calls the same VRF used by the Algorand consensus protocol to generate verifiable pseudo-random values stored on-chain.

results:
    - paragraph: These random values can now be used by any smart contract deployed on the Algorand blockchain for free and utilised for various use cases such as on-chain gaming, NFTs, lottery etc. The Applied Blockchain Algorand Randomness Oracle was successfully launched into production on the 17th of November 2022 and is now the official source of randomness on the Algorand blockchain.

testimonial:
  - quote: It was impressive how competent and professional the [Applied Blockchain] team members were, as well as how well we communicated. We had a great experience working with them, since they always understood the importance of the project, and shared our views. Also whenever we requested a change or fix, we usually got quick responses and solutions, so all in all, the experience was excellent.  
    author: Ori Shem-Tov
    company: Algorand Foundation
---

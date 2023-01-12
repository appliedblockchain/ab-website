---
layout: project
order: 2
case_study: true
title: Algorand
subtitle: Randomness Oracle
industry: Blockchain
short_summary: Algorand is a decentralised network built to solve the Blockchain Trilemma of simultaneously achieving speed, security, and decentralisation. Launched in June 2019 by computer scientist and MIT professor Silvio Micali, Algorand is a permissionless, open-source blockchain network upon which anyone can build.

summary: 'Applied Blockchain has been working closely with the Algorand Foundation since 2019, including developing a range of leading Algorand decentralised applications from <a class="giveaway--link" target="_blank" href="https://appliedblockchain.com/projects/opulous">Opulous</a> music rights financing, to <a class="giveaway--link" target="_blank" href="https://appliedblockchain.com/projects/aorist">Aorist<a/> high-end digital art marketplace, and core infrastructure such as <a class="giveaway--link" target="_blank" href="https://londonbridge.io">London Bridge</a>, a secure token bridge between Ethereum and Algorand, and <a class="giveaway--link" target="_blank" href="https://silentdata.com">Silent Data</a>, a privacy-preserving data oracle.'

link: https://www.algorand.com/
background_color: white

challenge:
     - paragraph: 'Generating a source of trusted and secure randomness is difficult, especially on-chain. Yet having one is necessary for decentralised applications that depend on randomised processes, such as lotteries, random NFT drops, games, etc. Crucially, it is not enough for most on-chain applications to use “random-looking” quantities (such as the block seed) as sources of randomness. Instead, block proposers have partial control over these quantities, making it possible for rogue block proposers to break applications that depend on these sources being unpredictable.</br>
     An external randomness oracle service is therefore required in order to post random values into the blockchain in a cryptographically trusted manner. Full details of the challenge can be found <a href="https://developer.algorand.org/articles/randomness-on-algorand/" target="_blank" class="giveaway--link">here</a>.'

challenge-video: true
challenge-video-lead: Video Case Study
challenge-video-title: randomnessoracle

delivery:
     - item:
         - paragraph: 'Applied Blockchain was selected by the Algorand Foundation to design, build, host and operate the very first independent Randomness Oracle for the Algorand blockchain. The cryptographic function implemented in the oracle is referred to as a <a class="giveaway--link" target="_blank" href="https://en.wikipedia.org/wiki/Verifiable_random_function">Verifiable Random Function (VRF)</a>, and its authenticity is verified by Algorand smart contracts.'

results:
    - paragraph: 'The Algorand Randomness Oracle service developed, hosted and operated by Applied Blockchain was launched in mainnet on 17th November 2022, and is now the official source of randomness on the Algorand blockchain. It can be seen providing random numbers at regular intervals in the Algorand blockchain explorer <a class="giveaway--link" target="_blank" href="https://algoexplorer.io/address/APPLDMEYQTPYA25IGZLM5OBRWIGWYBJEPXRSKXKJTGEGYI2TJDC33SEZNU">here</a>, and these random values are available to be used by any smart contract deployed on the Algorand blockchain, including in games, generative NFTs, lotteries etc. A guide to using the Randomness Oracle can be found <a class="giveaway--link" target="_blank" href="https://developer.algorand.org/articles/usage-and-best-practices-for-randomness-beacon/">here</a>.'

resources:
  - item:
    - paragraph: '
    <ul class="ul-inside-position">
      <li>Tal Rabin, Algorand Head of Research at Algorand Foundation announces the launch of the Algorand Randomness Oracle developed by Applied Blockchain: <a target="_blank" class="giveaway--link" href="https://www.algorand.foundation/news/randomness-has-arrived">01101011110101… — Randomness Has Arrived on Algorand</a>
      </li>
      <li>
      <a target="_blank" class="giveaway--link" href="https://github.com/appliedblockchain/algorand-randomness-beacon">GitHub</a>
      </li>
    </ul>'

testimonial:
    - quote: We are grateful to Applied Blockchain for implementing and maintaining the backend service. 
      author: Tal Rabin
      company: Algorand Foundation
      position: Head of Research
    - quote: It was impressive how competent and professional the [Applied Blockchain] team members were, as well as how well we communicated. We had a great experience working with them, since they always understood the importance of the project, and shared our views. Also whenever we requested a change or fix, we usually got quick responses and solutions, so all in all, the experience was excellent.  
      author: Ori Shem-Tov
      company: Algorand Foundation
---

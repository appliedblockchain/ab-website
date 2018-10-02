---
layout: post
title: Public Blockchain’s First Killer Use Case
category: blog
social: medium
link: https://medium.com/@AppBlockchain_/public-blockchains-first-killer-use-case-9dcc27c62207
headline: For a few years people have been speculating whether public blockchains might become platforms of choice for money and payments. Although some payment use cases and solutions have emerged, especially around FX, public blockchain technology is often dismissed due to scalability issues, obvious lack of regulation, and a lack of general public adoption — in other words, it was still missing the killer use case.
---

<p class="post__title">ICO</p>

<p class="post__content">An ICO is the launch/sale of a new public token, with a view to the token forming an integral part of the proposed application, and therefore backed by the expectation that as the application becomes successful, so the token will gain in value.</p>
<p class="post__content">The advantages of ICO’s is that they’re open to anyone, and the amount of invested can be very small. This is true democratisation of investment, and is fuelling both investment in the sector, and the creation and growth of new companies. To date almost $500m have been raised in a few short months, far exceeding traditional VC funding in the space over the same period. <a target="blank" href="https://medium.com/r/?url=http%3A%2F%2Fwww.coindesk.com%2Ftoo-easy-critics-take-aim-at-ethereum-token-standard-amid-ico-boom%2F">Source</a></p>
<p class="post__content">You need only look at this <a target="blank" href="https://medium.com/r/?url=https%3A%2F%2Ftokenmarket.net%2Fico-calendar">ICO calendar</a> to understand the phenomenon.</p>
<p class="post__content">Companies are already starting to provide an ICO-in-a-box service: <a target="blank" href="https://ambisafe.com/">AmbiSafe</a>, <a target="blank" href="https://www.shellpay2.com/">ShellPay</a>, <a target="blank" href="https://tokenmarket.net/">TokenMarket</a>, <a target="blank" href="https://wavesplatform.com/">Waves</a> (disclaimer: this is in no way an endorsement or validation of any of their products or services).</p>

<p class="post__title">ERC-20</p>

<p class="post__content">Ethereum, which brought a new dimension to public cryptocurrency platforms by introducing smart contract applications, also introduced a token standard ERC-20, whereby a ‘standard’ token can be created and managed by smart contracts running on the Ethereum platform. These tokens run inside the smart contracts, which are still ultimately powered by Ether, Ethereum’s native cryptocurrency. However, by residing in a smart contract that complies with the ERC-20 standard, the new tokens are automatically recognised and are compatible with standard Ethereum wallets and exchanges.</p>
<p class="post__content">For those technically inclined, the ERC-20 token specification <a target="blank" href="https://github.com/ethereum/EIPs/issues/20">can be found here</a>.</p>
<p class="post__content">A good example of an ERC-20 implementation can be found in <a target="blank" href="https://github.com/OpenZeppelin/openzeppelin-solidity">Open Zeppelin</a>.</p>

<p class="post__title">Lack of Accountability</p>

<p class="post__content">The obvious major issue with current ICO’s is lack of accountability. Two types of accountability are generally available:</p>
<p class="post__subtitle">Legal / Regulatory Accountability</p>
<p class="post__content">I.e. a legal framework that ensures that the tokens raised will be used for the proposed venture, and that revenues / profits / shares from the proposed venture will be shared as promised. Many ICO’s today are not covered by this type of accountability. Some ICO’s, in some jurisdictions do offer a some sort of limited legal framework.</p>
<p class="post__subtitle">Technical Accountability</p>
<p class="post__content">This is really the raison d’être of smart contracts and Ethereum. In other words, you don’t necessarily need to rely on legal and regulatory accountability (or any central/trusted authority) because the technology ensures that returns will always be automatically provided to investors (if available). This technical assurance is driven by code logic that automatically drives token movements including payouts to investors.</p>
<p class="post__content">Some ICO’s provide technical accountability by following the pattern of the original DAO, whereby the token issued is directly linked to one or more smart contracts which include the mechanics for collecting revenues from the application and distributing those to the investors / token owners. This is technical assurance of a return. You move your tokens into a contract that follows predefined rules, that can be automatically inspected to ensure that our investment is protected.</p>
<p class="post__content">However, some ICO’s do not appear to contain this technical assurance for the original token that is purchased. In other words, the token is issued without a technical guarantee or assurance, and the initial token is not automatically linked to an application. That may be fine, but investors should be aware that they placing trust in the team to eventually link the tokens to a blockchain application that will provide the return they expect.</p>
<p class="post__content">Investing in ICO’s is easy but risky. It is already risky without legal/regulatory assurance. It is even riskier with neither legal nor technical assurance.</p>
<p class="post__content">Shlomi Zeltsinger created a set of <a target="blank" href="https://www.youtube.com/watch?v=N77DCD0A5V8">YouTube videos</a>, the first of which highlights that some ICO tokens are not actually bound to any application smart contracts, and/or contracts that technically guarantee the return to investors should the application prove successful.</p>
<p class="post__content">William Mouayar published an <a target="blank" href="https://medium.com/@wmougayar/the-reality-quadrant-in-ico-projects-and-token-sales-part-ii-fee324274f93">interesting blog post</a> categorising some of the recent ICO’s, describing some of them as being ‘in the dark’. This is more of an attempt to track visible progress of ICO projects, rather than technical integrity and assurance mechanisms.</p>

<p class="post__title">Future Proof Applications</p>

<ul class="post__content">At Applied Blockchain we’ve always taken the following approach for the solutions we build:
<li>Build using standard open blockchain technology.</li>
<li>Keep applications as agnostic as possible to the underlying blockchain implementation. Protect your investment by making the application relatively future proof with the ability to switch platforms if/when required by keeping smart contract functionality very simple and standard. Our key management and data privacy framework supports this.</li>
<li>It often makes sense to start with private blockchain networks, especially for corporates / enterprise applications, but keep the solution flexible / future proof, so that it could work on a public chain as/when required (using Ethereum, for example, makes this easier).</li></ul>
<p class="post__content">This approach is already paying off, where two of the solutions we started building almost a year ago for clients were initially designed as private blockchain deployments for enterprise. By choosing to use an open and optionally public platform, such as Ethereum, the solutions could now be deployed to the public chain with relatively few changes. Similarly, by following industry standards, such as ERC-20, the solutions already included embedded standard tokens ready to be issued by ICO, and this was all long before ICO’s became popular.</p>

<p class="post__content">It should be noted, we are already starting to see hybrid models whereby tokens are issued / managed on one platform (e.g. Ethereum with ERC-20), and applications are implemented on another (e.g. Hyperledger Fabric). Care must be taken to ensure that technical integrity and assurance is provided across the platforms / deployments.</p>

<p class="post__title">ICO Hackathon</p>

<p class="post__content">If anyone is interested in learning more, we’re running a Hackathon as a part of London Fintech Week 2017, where the challenge is to create your own ICO-compatible blockchain smart contract application.</p>
<p class="post__content">If you’re in need of an intro to smart contract development, we’re also offering a <a target="blank" href="https://www.eventbrite.com/e/applied-blockchain-lab-developing-smart-contracts-selling-out-fast-tickets-35304768513">pre-hackathon workshop here</a>, and in the meantime, one of our developers, Vladimir, has created some great online <a target="blank" href="https://www.youtube.com/watch?v=R_CiemcFKis&t=3s">beginners’ tutorial videos</a> for smart contract programming.</p>

<p class="post__title">Killer Use Case</p>

<p class="post__content">So, in sum, what makes the ICO the first killer use case for the public blockchain?</p>
<p class="post__subtitle">Scale</p>
<p class="post__content">Coin offerings do not (yet) involve VISA levels of transaction volumes or throughput (i.e billions of transactions per day). Yes, there are surges of activity during some of the shorter ICO windows (Vitalik provided a characteristically <a target="blank" href="https://vitalik.ca/general/2017/06/09/sales.html">analytical and in-depth analysis</a> on recent ICOs: on the recent BAT token sale: “185 purchases were successful, and over 10,000 failed… the Ethereum blockchain’s capacity was full for 3 hours after the sale started”), but in general there isn’t a constant demand on the network (yet) as a result of these ICO’s. Issues may start to arise when applications linked to the tokens are deployed on the public Ethereum network alongside the token contracts, and those applications grow in popularity and involve very large volumes of transactions.</p>
<p class="post__subtitle">Standards</p>
<p class="post__content">Both Ethereum and ERC-20 have gained reasonable momentum and developer community support (e.g. broad range of exchanges, wallets, miners)</p>
<p class="post__subtitle">Smart Contracts.</p>
<p class="post__content">The ability to host the token, the application and preconfigure investor payouts/returns on the same platform is compelling (although not necessarily mandatory).</p>
<p class="post__subtitle">Ease of Use</p>
<p class="post__content">The relative ease of ICO creation, low cost, almost non-existent barriers to entry for both investors and companies, and the ease and speed at which people can simply transfer their crypto assets into ICO’s, all compared to the extremely arduous process of raising angel and VC investment, all contribute to this extremely compelling use case.</p>

<p class="post__content">Of course, the road ahead for ICO’s in general is unlikely to be smooth, as lack of legal/regulatory and technical accountability, coupled with a lack of due diligence on the part of investors, mean that inevitably there will be cases of fraud. The regulators will, most likely, step in at some point and burden the process (and reduce risk, of course).</p>

<p class="post__content">Until then we can all enjoy a very pure and open form of capitalism enabled and brought to life by Blockchain technology.</p>
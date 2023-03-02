import React from 'react'

export const faqData = [
	{
		title: 'What is DIVA Donate?',
		body: (
			<>
					DIVA Donate is a platform that utilizes the blockchain technology to 
					enable cost-efficient, effective and transparent donations. The platform is a joint collaboration between 
					three parties:
					<br></br>
					<br></br>
					<ul>
						<li> > <b><a 
							href='https://fortuneconnectltd.com/'
							className='underline mx-1'
							target={'_blank'} rel="noreferrer">
						Fortune Connect</a>:</b> A financial inclusion hub for farmers in Kenya.</li>
						<li> > <b><a 
							href='https://www.divaprotocol.io/'
							className='underline mx-1'
							target={'_blank'} rel="noreferrer">							
						DIVA Technologies AG</a>:</b> A Swiss based software consulting firm focused on Web3.</li>
						<li> > <b><a 
							href='https://shamba.network/'
							className='underline mx-1'
							target={'_blank'} rel="noreferrer">
						Shamba Network</a>:</b> An oracle provider serving geospatial data to smart contracts.</li>
					</ul>			
					<br></br>
					Our mission is to empower the most vulnerable communities impacted by climate change utilizing 
					the transformative power of blockchain technology.
			</>
		),
	},
	{
		title: 'What are conditional donations?',
		body: (
			<>
					Conditional donations differ from direct donations in that they come with 
					certain conditions attached. These conditions specify under which circumstances 
					funds will be released to the recipient. For example, a donation may be 
					conditioned on the rain amount over a certain period of time in a given 
					region. If it falls below a predefined level that is associated with drought, 
					the donation will be triggered to financially support the people affected. 
					If it stays above that level, no donation will be triggered. Conditional donations
					are comparable to insurance with the difference that former is free of charge for the recipient
					and payoff profiles can be non-binary.
			</>
		),
	},
	{
		title: 'What are the benefits of conditional donations?',
		body: (
			<>
				Conditional donations can provide a number of benefits compared to direct donations:
				<br></br>
				<br></br>
				<ul>
					<li> > <b>Greater control:</b> Because the terms of the donation are specified upfront, donors can ensure that 
					their funds are used in a way that aligns with their values and priorities. This can be particularly 
					useful for donors who want to support specific causes or who have specific goals in mind for their donation.</li>
					<li> > <b>Based on need:</b> Conditional donations are only released if recipient’s are in actual need. This 
					can help to ensure that the funds are used in the most effective way possible and can help to 
					maximize the positive impact of the donation.</li>
					<li> > <b>Greater impact:</b> Unused funds can be redeployed into new conditional donation campaigns, thereby 
					maximizing the impact and reach of the donation.</li>
					<li> > <b>Verifiable:</b> The underlying trigger events are publicly verifiable and the release of the donation 
					is detached from any potential external bias.</li>
				</ul>			
      		</>
		),
	},
	{
		title: 'What is DIVA Protocol?',
		body: (
			<>					
					<a
						href='https://docs.divaprotocol.io/'
						className='underline mx-1'
						target={'_blank'} rel="noreferrer">
					DIVA Protocol
					</a> is a highly flexible and universal blockchain based operating system
					to create and settle derivative products.					
					DIVA Donate is utilizing DIVA Protocol to manage 
					the donations and their release in a programmatic and predictibale manner, eliminating the need for trusted centralized intermediaries.

			</>
		),
	},
	{
		title: 'How does it work?',
		body: (
			<>
				Donors deposit funds into DIVA Protocol in the form of digital stablecoins such as USDT or USDC. 
				Once the funds are deposited, they are held in a programmatic escrow, and beneficiaries are issued 
				tokenized contingent claims on the deposited funds. At the end of the campaign, the data provider reports the outcome to 
				the DIVA smart contract, which then determines the payout based on the specific campaign's payoff profile. 
				Beneficiaries can then claim their share of the donation by returning their contingent claim. Donors 
				can redeem any unused funds and redeploy them into a new conditional donation campaign.
				Thanks to blockchain technology, the process is fully automated and doesn't involve any central intermediary to custody and manage the funds, 
				making the donation process cost-efficient and effective.
      		</>
		),
	},
	{
		title: 'How can I start donating?',
		body: (
			<>
				Participating in a campaign is simple if you have a browser wallet already funded with USDT and MATIC on Polygon. 
				Just visit the campaign page, enter the amount you wish to donate, press the "Donate" button, 
				and confirm the transaction in your browser wallet. Note that you may be asked to "Approve" the 
				transfer first in order to grant DIVA protocol the permission to move the donation asset on your behalf.				
				<br></br>
				<br></br>
				For those new to crypto, there is a one-time setup process to go through to set up a wallet and 
				convert your local currency into crypto assets in order to move into the blockchain world and start 
				leveraging its full potential. This involves the following steps:
				<br></br>
				<br></br>
				<ul>
					<li> > <b>Get wallet:</b> In order to transact on the blockchain, you need to install an application, a so-called wallet, 
					that allows you to create accounts and initiate transactions.
					One of the most popular browser wallets is Metamask. You can find a detailed installation guide <a
					href='https://wiki.polygon.technology/docs/develop/metamask/hello/'
					className='underline mx-1'
					target={'_blank'} rel="noreferrer">
					here.
				</a></li>				
					<li> > <b>Fund wallet:</b> Moving to the blockchain is like moving into a new country with their own currency.
					As DIVA Donate is running on the Polygon network, the first asset you will need are MATIC tokens in order to cover transaction fees. To participate as a donor in campaigns, you will also need
					some USDT. The easiest way to acquire crypto assets is asking friends or using a 
					<a
						href='https://www.coinbase.com/'
						className='underline mx-1'
						target={'_blank'} rel="noreferrer">
						crypto exchange
					</a>.</li>					
				</ul>			
      		</>
		),
	},
	{
		title: 'What is an oracle?',
		body: (
			<>
				An oracle in the blockchain world is a service that provides real-world data to a blockchain-based smart contract
				like DIVA Protocol. 
				It retrieves and verifies data from external sources, then sends it to the blockchain for use in executing 
				the terms of the smart contract. Oracles can be centralized or decentralized, with latter
				being more secure but potentially more difficult to implement and more costly.
      		</>
		),
	},
]

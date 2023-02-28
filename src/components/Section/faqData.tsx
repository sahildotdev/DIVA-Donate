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
						DIVA Technologies AG</a>:</b> A Swiss based software consulting focused on Web3.</li>
						<li> > <b><a 
							href='https://shamba.network/'
							className='underline mx-1'
							target={'_blank'} rel="noreferrer">
						Shamba Network</a>:</b> An oracle provider serving geospatial data to smart contracts.</li>
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
		title: 'What are conditional donations?',
		body: (
			<>
					Conditional donations differ from direct donations in that they come with 
					certain conditions attached. These conditions specify under which circumstances 
					funds will be released to the recipient. For example, a donation may be 
					conditioned on the rain amount over a certain period of time in a given 
					area. If it falls below a predefined level that is associated with drought, 
					the donation will be triggered to financially support the people affected. 
					If it stays above that level, no donation will be triggered. Conditional donations
					are comparable to insurance with the difference that former is free of charge for the recipient.
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
		title: 'How does it work?',
		body: (
			<>
				Donors can contribute funds to DIVA Protocol in the form of digital stablecoins such as USDT or USDC. 
				Once the funds are deposited, they are held in a programmatic escrow, and beneficiaries are issued 
				tokenized contingent claims. At the end of the campaign, the data provider Shamba Network reports to 
				the DIVA smart contract, which determines the payout based on the specific campaign's payoff profile. 
				Beneficiaries can then claim their share of the donation by returning their contingent claim. Donors 
				can redeem any unused funds and redeploy them into a new conditional donation campaign.
				The process is fully automated and doesn't involve any central intermediary to custody and manage the funds.
      		</>
		),
	},
	{
		title: 'How can I start donating?',
		body: (
			<>
				To leverage the full power of the blockchain technology, there is a one-time setup process that users will have 
				to go through. This involves the following steps:
				
				<ul>
					<li> > <b>Install Metamask:</b> Metamask is your wallet that will hold your assets and that you will use to initiate transactions on the blockchain. 
					You can download the Chrome browser extension <a
					href='https://metamask.io/'
					className='underline mx-1'
					target={'_blank'} rel="noreferrer">
					here
				</a>.</li>
					<li> > <b>Get MATIC:</b> Transacting on the blockchain requires the payment of a small fee amount. As DIVA Donate is running on Polygon, the fee amount
					is paid in the native MATIC token. Reach out to us and we will send you a bit to save you this step. </li>
					<li> > <b>Fund your wallet:</b> To participate as a donor in campaigns, you will require a stablecoin such as USDT or USDC. </li>
				</ul>			
      		</>
		),
	},
	{
		title: 'Why do I have to approve before donating?',
		body: (
			<>
				In order to donate, 
				Pick one of the <a
					href='https://www.divadonate.xyz'
					className='underline mx-1'
					target={'_blank'} rel="noreferrer">
					campaigns
				</a> page to explore all the
				applications that have been already built on top of DIVA Protocol.
				<br></br>
				<br></br>
				If you want to develop an application yourself, head over to our <a
					href='https://docs.divaprotocol.io/'
					className='underline mx-1'
					target={'_blank'} rel="noreferrer">
					docs
				</a>.		
      </>
		),
	},
	{
		title: 'What are the utilities of the $DIVA Token?',
		body: (
			<>
				$DIVA is the native token that is used to govern the DIVA Protocol. The
				token model was designed to enable efficient and effective governance
				and offer flexibility to adapt to the various stages of the protocol
				lifecycle and constantly changing market conditions. There will be a
				maximum of 100m tokens in circulation. 40% will be released over 2 years
				and the remaining 60% over 30 years.
      </>
		),
	},
]

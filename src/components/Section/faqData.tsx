import React from 'react'

export const faqData = [
	{
		title: 'What is DIVA Donate?',
		body: (
			<>
					DIVA Donate is a platform that utilizes the blockchain technology to 
					enable cost-efficient, transparent and trustless donations. DIVA Donate is a collaboration
					between Fortune connect, a financial inclusion hub for farmers in Kenya,
					DIVA Technologies AG, a 
					Donations are 
					released depending on the outcome of a pre-defined publicly verifiable metric.
			</>
		),
	},
	{
		title: 'What is DIVA Protocol?',
		body: (
			<>					
					DIVA Protocol is a highly flexible and universal smart contract
					based operating system for derivative applications. It is used in DIVA Donate to manage 
					the transactional layer of the donation cycle. <a
						href='https://docs.divaprotocol.io/'
						className='underline mx-1'
						target={'_blank'} rel="noreferrer">
						Learn more
					</a>.
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
					is comparable to an insurance that doesn't require the recipient to pay a premium.
			</>
		),
	},
	{
		title: 'What are the benefits of conditional donations?',
		body: (
			<>
				Conditional donations can provide a number of benefits compared to direct donations:
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
				The DIVA smart contract manages the full conditional donation cycle in a trustless 
				and predictable manner. It allows donors to deposit funds (e.g., in 
				the form of stablecoins such as USDT or other digital assets) and issue tokenized 
				contingent claims to beneficiaries, data providers to report event outcomes 
				and beneficiaries to claim their share in the donation after the outcome has been 
				reported and the payout has been determined by the DIVA smart contract. Any 
				unused funds can be claimed by the donor and redeployed into a new conditional donation campaign.
      		</>
		),
	},
	{
		title: 'How can I start donating?',
		body: (
			<>
				In order to start donating or interacting with decentralized applications, there is a one-off setup process.
				To start donating, you will need three things: <a
					href='https://metamask.io/'
					className='underline mx-1'
					target={'_blank'} rel="noreferrer">
					Metamask
				</a> installed.
				
				MATIC to cover the transaction fees. Reach out and we will send you a bit to save you this step.

				Fund your wallet with USDT.
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

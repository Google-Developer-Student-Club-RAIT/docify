import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	resume: {
		width: '90%',
		height: '90%',
		boxShadow: '0px 0px 1px 4px rgba(0,0,0,0.1)',
		margin: 'auto',
		marginTop: '5%',
	},
}));

export function ResumeResult({ state }) {
	const {
		// Profile-Information
		firstname,
		lastname,
		email,
		phone,
		website,
		github,
		linkedin,
		twitter,
		facebook,
		instagram,

		// Education Information
		college,
		fromyear1,
		toyear1,
		qualification1,
		description1,
		school,
		fromyear2,
		toyear2,
		qualification2,
		description2,

		// Project Information...
		title1,
		link1,
		projectDescription1,
		title2,
		link2,
		projectDescription2,
		title3,
		link3,
		projectDescription3,

		// Experience Information
		institute1,
		position1,
		duration1,
		experienceDescription1,
		institute2,
		position2,
		duration2,
		experienceDescription2,

		// Extra Information
		skill1,
		skill2,
		skill3,
		skill4,
		skill5,
		skill6,
		interest1,
		interest2,
		interest3,
		interest4,
		interest5,
		interest6,
	} = state;

	const classes = useStyles();
	return (
		<div>
			<div class='rela-block page'>
				<div class='rela-block top-bar'>
					<div class='caps name'>
						<div class='abs-center'>
							{firstname} {lastname || ''}
						</div>
					</div>
				</div>
				<div class='side-bar'>
					<div class='mugshot'>
						<div class='logo'>
							<svg viewbox='0 0 80 80' class='rela-block logo-svg'>
								<path
									d='M 10 10 L 52 10 L 72 30 L 72 70 L 30 70 L 10 50 Z'
									stroke-width='2.5'
									fill='none'
								/>
							</svg>
						</div>
					</div>
					<p class='mb-1'>
						<span
							style={{
								paddingRight: '10px',
							}}
						>
							<i class='fas fa-envelope'></i>
						</span>
						{email}
					</p>
					<p class='mb-1'>
						<span
							style={{
								paddingRight: '10px',
							}}
						>
							<i class='fas fa-phone-square-alt'></i>
						</span>
						{phone}
					</p>
					<p class='rela-block caps side-header'>Skills</p>
					{skill1 === '' || skill1 === null ? (
						<p class='rela-block list-thing'>{skill1}</p>
					) : null}
					{skill2 === '' || skill2 === null ? (
						<p class='rela-block list-thing'>{skill2}</p>
					) : null}
					{skill3 === '' || skill3 === null ? (
						<p class='rela-block list-thing'>{skill3}</p>
					) : null}
					{skill4 === '' || skill4 === null ? (
						<p class='rela-block list-thing'>{skill4}</p>
					) : null}
					{skill5 === '' || skill5 === null ? (
						<p class='rela-block list-thing'>{skill5}</p>
					) : null}
					{skill6 === '' || skill6 === null ? (
						<p class='rela-block list-thing'>{skill6}</p>
					) : null}
					<p class='rela-block caps side-header'>Interests</p>
          {interest1 === '' || interest1 === null ? (
						<p class='rela-block list-thing'>{interest1}</p>
					) : null}
					{interest2 === '' || interest2 === null ? (
						<p class='rela-block list-thing'>{interest2}</p>
					) : null}
					{interest3 === '' || interest3 === null ? (
						<p class='rela-block list-thing'>{interest3}</p>
					) : null}
					{interest4 === '' || interest4 === null ? (
						<p class='rela-block list-thing'>{interest4}</p>
					) : null}
					{interest5 === '' || interest5 === null ? (
						<p class='rela-block list-thing'>{interest5}</p>
					) : null}
					{interest6 === '' || interest6 === null ? (
						<p class='rela-block list-thing'>{interest6}</p>
					) : null}
				</div>
				<div class='rela-block content-container'>
					<div class='rela-block caps greyed'>Profile</div>
					<p class='rela-block social mb-0'>
						<span
							style={{
								paddingRight: '15px',
								fontSize: '20px',
							}}
						>
							<i class='fas fa-globe'></i>
						</span>
						{website}
					</p>
					<p class='rela-block social mb-0'>
						<span
							style={{
								paddingRight: '15px',
								fontSize: '20px',
							}}
						>
							<i class='fab fa-github'></i>
						</span>
						{github}
					</p>
					<p class='rela-block social mb-0'>
						<span
							style={{
								paddingRight: '15px',
								fontSize: '20px',
							}}
						>
							<i class='fab fa-facebook'></i>
						</span>
						{facebook}
					</p>
					<p class='rela-block social mb-0'>
						<span
							style={{
								paddingRight: '15px',
								fontSize: '20px',
							}}
						>
							<i class='fab fa-twitter-square'></i>
						</span>
						{twitter}
					</p>
					<p class='rela-block social mb-0'>
						<span
							style={{
								paddingRight: '15px',
								fontSize: '20px',
							}}
						>
							<i class='fab fa-instagram'></i>
						</span>
						{instagram}
					</p>
					<p class='rela-block social mb-4'>
						<span
							style={{
								paddingRight: '15px',
								fontSize: '20px',
							}}
						>
							<i class='fab fa-linkedin'></i>
						</span>
						{linkedin}
					</p>
					<div class='rela-block caps greyed'>Education</div>
					<h3 class='mb-0'>{college}</h3>
					<p class='text-muted light mt-0 mb-1'>
						{fromyear1}
						<span class='mx-2'>to</span>
						{toyear1}
					</p>
					<p
						class='justified mt-0 mb-1'
						style={{
							fontSize: '17px',
						}}
					>
						{qualification1}
					</p>
					<p
						class='justified mt-0 mb-3'
						style={{
							fontSize: '17px',
						}}
					>
						{description1}
					</p>
					<h3 class='mb-0'>{school}</h3>
					<p class='text-muted light mt-0 mb-1'>
						{fromyear2}
						<span class='mx-2'>to</span>
						{toyear2}
					</p>
					<p
						class='justified mt-0 mb-1'
						style={{
							fontSize: '17px',
						}}
					>
						{qualification2}
					</p>
					<p
						class='justified mt-0 mb-1'
						style={{
							fontSize: '17px',
						}}
					>
						{description2}
					</p>
					<div class='rela-block caps greyed'>Experience</div>
					<h3>{institute1}</h3>
					<p
						class='text-muted light mt-1 mb-2'
						style={{
							fontSize: '17px',
						}}
					>
						{position1}
						<span class='ml-5 pl-5'>Duration: {duration1}</span>
					</p>
					<p
						class='justified'
						style={{
							fontSize: '17px',
						}}
					>
						{experienceDescription1}
					</p>
					<h3>{institute2}</h3>
					<p
						class='text-muted light mt-1 mb-2'
						style={{
							fontSize: '17px',
						}}
					>
						{position2}
						<span class='ml-5 pl-5'>Duration: {duration2}</span>
					</p>
					<p
						class='justified'
						style={{
							fontSize: '17px',
						}}
					>
						{experienceDescription2}
					</p>
					<div class='rela-block caps greyed'>Projects</div>
					<h3>{title1}</h3>
					<p
						class='light mt-1 mb-2'
						style={{
							fontSize: '17px',
						}}
					>
						<span class='mr-2'>
							<i class='fas fa-link'></i>
						</span>
						{link1}
					</p>
					<p
						class='justified'
						style={{
							fontSize: '17px',
						}}
					>
						{experienceDescription1}
					</p>
					<h3>{title2}</h3>
					<p
						class='light mt-1 mb-2'
						style={{
							fontSize: '17px',
						}}
					>
						<span class='mr-2'>
							<i class='fas fa-link'></i>
						</span>
						{link1}
					</p>
					<p
						class='justified'
						style={{
							fontSize: '17px',
						}}
					>
						{experienceDescription2}
					</p>
				</div>
			</div>
		</div>
	);
}

export default ResumeResult;

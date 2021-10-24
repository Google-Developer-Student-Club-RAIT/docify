import React, { Component } from 'react';
import { TextField, Button, Container } from '@material-ui/core';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Paper, withStyles, Grid } from '@material-ui/core';

const styles = (theme) => ({
	margin: {
		margin: theme.spacing.unit * 1,
	},
	padding: {
		padding: theme.spacing.unit,
	},
});

function Profile(props) {
	function continueEdit(e) {
		e.preventDefault();
		props.nextStep();
	}

	const { values } = props;
	const { classes } = props;
	return (
		<Paper className={classes.padding}>
			<Card>
				<CardHeader title='Personal Details' />
			</Card>
			<CardContent>
				<div className={classes.margin}>
					<Grid container spacing={2} alignItems='center' lg={12}>
						<Grid item lg={12}>
							<TextField
								margin='dense'
								variant='outlined'
								name='firstname'
								label='First Name'
								style={{ width: '80%' }}
								required
								value={values.firstname}
								onChange={props.handleChange}
							/>
						</Grid>
						<Grid item lg={12}>
							<TextField
								margin='dense'
								label='Last Name'
								variant='outlined'
								style={{ width: '80%' }}
								name='lastname'
								required
								value={values.lastname}
								onChange={props.handleChange}
							/>
						</Grid>

						<Grid item lg={12}>
							<TextField
								margin='dense'
								label='Email'
								variant='outlined'
								name='email'
								required
								style={{ alignItems: 'left', width: '80%' }}
								value={values.email}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<EmailIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>

						<Grid item lg={12}>
							<TextField
								margin='dense'
								label='Phone Number'
								variant='outlined'
								name='phone'
								style={{ alignItems: 'left', width: '80%' }}
								value={values.phone}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<PhoneIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>

						<Grid item lg={12}>
							<TextField
								margin='dense'
								label='Your Website'
								variant='outlined'
								name='website'
								style={{ alignItems: 'left', width: '80%' }}
								value={values.website}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<LanguageIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item lg={12}>
							<TextField
								margin='dense'
								label='GitHub'
								variant='outlined'
								name='github'
								style={{ alignItems: 'left', width: '80%' }}
								value={values.github}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<GitHubIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item lg={12}>
							<TextField
								margin='dense'
								label='Linked In'
								variant='outlined'
								name='linkedin'
								style={{ alignItems: 'left', width: '80%' }}
								value={values.linkedin}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<LinkedInIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item lg={12}>
							<TextField
								margin='dense'
								label='Twitter'
								variant='outlined'
								name='twitter'
								style={{ alignItems: 'left', width: '80%' }}
								value={values.twitter}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<TwitterIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item lg={12}>
							<TextField
								margin='dense'
								label='Facebook'
								variant='outlined'
								name='facebook'
								style={{ alignItems: 'left', width: '80%' }}
								value={values.facebook}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<FacebookIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item lg={12}>
							<TextField
								margin='dense'
								label='Instagram'
								variant='outlined'
								name='instagram'
								style={{ alignItems: 'left', width: '80%' }}
								value={values.instagram}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<InstagramIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
					</Grid>
					<Container className={classes.margin}>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<Button
								variant='contained'
								color='secondary'
								disabled={true}
								startIcon={<NavigateBeforeIcon />}
							>
								Back
							</Button>
							<Button
								variant='contained'
								color='secondary'
								onClick={continueEdit}
								endIcon={<NavigateNextIcon />}
							>
								Next
							</Button>
						</div>
					</Container>
				</div>
			</CardContent>
			<p className='text-center text-muted'>Page 1 </p>
		</Paper>
	);
}

export default withStyles(styles)(Profile);

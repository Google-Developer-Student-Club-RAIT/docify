import React, { Component } from 'react';
import { TextField, Button, Container, Divider } from '@material-ui/core';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import axios from 'axios';
import { saveAs } from 'file-saver';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import LinkIcon from '@material-ui/icons/Link';
import TitleIcon from '@material-ui/icons/Title';
import DescriptionIcon from '@material-ui/icons/Description';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Paper, withStyles, Grid } from '@material-ui/core';

const styles = (theme) => ({
	margin: {
		margin: theme.spacing.unit * 1.5,
	},
	padding: {
		padding: theme.spacing.unit,
	},
});

function Projects(props) {
	function continueEdit(e) {
		e.preventDefault();
		props.nextStep();
	}

	function back(e) {
		e.preventDefault();
		props.prevStep();
	}

	const { values } = props;
	const { classes } = props;
	return (
		<Paper className={classes.padding}>
			<Card>
				<CardHeader title='Projects Developed' />
			</Card>
			<CardContent>
				<div className={classes.margin}>
					<Grid container spacing={2} alignItems='center' lg={12}>
						<Grid item xs={12} lg={12}>
							<h5>Project 1</h5>
						</Grid>
						<Grid item md={12} sm={12} xs={12} lg={12}>
							<TextField
								margin='dense'
								variant='outlined'
								name='title1'
								label='Title'
								style={{ width: '80%' }}
								required
								value={values.title1}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='start'>
											<TitleIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item md={4} sm={6} xs={12} lg={12}>
							<TextField
								margin='dense'
								variant='outlined'
								name='link1'
								label='Link'
								style={{ width: '80%' }}
								required
								value={values.link1}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='start'>
											<LinkIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>

						<Grid item md={12} sm={12} xs={12} lg={12}>
							<TextField
								margin='dense'
								variant='outlined'
								name='projectDescription1'
								label='Description'
								style={{ width: '80%' }}
								required
								value={values.projectDescription1}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='start'>
											<DescriptionIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
					</Grid>
					<br />
					<Divider />
					<br />
					<Grid container spacing={2} alignItems='center' lg={12}>
						<Grid item xs={12} lg={12}>
							<h5>Project 2</h5>
						</Grid>
						<Grid item md={12} sm={12} xs={12} lg={12}>
							<TextField
								margin='dense'
								variant='outlined'
								name='title2'
								label='Title'
								style={{ width: '80%' }}
								required
								value={values.title2}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='start'>
											<TitleIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item md={4} sm={6} xs={12} lg={12}>
							<TextField
								margin='dense'
								variant='outlined'
								name='link2'
								label='Link'
								style={{ width: '80%' }}
								required
								value={values.link2}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='start'>
											<LinkIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>

						<Grid item md={12} sm={12} xs={12} lg={12}>
							<TextField
								margin='dense'
								variant='outlined'
								name='projectDescription2'
								label='Description'
								style={{ width: '80%' }}
								required
								value={values.projectDescription2}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='start'>
											<DescriptionIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
					</Grid>
					<br />
					<Divider />
					<br />
					<Grid container spacing={2} alignItems='center' lg={12}>
						<Grid item xs={12} lg={12}>
							<h5>Project 3</h5>
						</Grid>
						<Grid item md={12} sm={12} xs={12} lg={12}>
							<TextField
								margin='dense'
								variant='outlined'
								name='title3'
								label='Title'
								style={{ width: '80%' }}
								value={values.title3}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='start'>
											<TitleIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item md={12} sm={12} xs={12} lg={12}>
							<TextField
								margin='dense'
								variant='outlined'
								name='link3'
								label='Link'
								style={{ width: '80%' }}
								value={values.link3}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='start'>
											<LinkIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>

						<Grid item md={12} sm={12} xs={12} lg={12}>
							<TextField
								margin='dense'
								variant='outlined'
								name='projectDescription3'
								label='Description'
								style={{ width: '80%' }}
								value={values.projectDescription3}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='start'>
											<DescriptionIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
					</Grid>
				</div>
			</CardContent>
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
						onClick={back}
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
			<p className='text-center text-muted'>Page 3</p>
		</Paper>
	);
}

export default withStyles(styles)(Projects);

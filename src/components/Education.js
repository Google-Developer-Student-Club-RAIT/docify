import React, { Component } from 'react';
import { TextField, Button, Container, Divider } from '@material-ui/core';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import SchoolIcon from '@material-ui/icons/School';
import DateRangeIcon from '@material-ui/icons/DateRange';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Paper, withStyles, Grid } from '@material-ui/core';
import 'date-fns';

const styles = (theme) => ({
	margin: {
		margin: theme.spacing.unit * 1.5,
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

	function back(e) {
		e.preventDefault();
		props.prevStep();
	}
	const { values } = props;
	const { classes } = props;

	return (
		<Paper className={classes.padding}>
			<Card>
				<CardHeader title='Education Details' />
			</Card>
			<CardContent>
				<div className={classes.margin}>
					<Grid container spacing={2} alignItems='center' lg={12}>
						<Grid item md={4} sm={12} xs={12} lg={4}>
							<TextField
								margin='dense'
								variant='outlined'
								name='college'
								label='College/Unviersity'
								style={{ width: '80%' }}
								required
								value={values.college}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='start'>
											<SchoolIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item md={4} sm={6} xs={12} lg={4}>
							<TextField
								margin='dense'
								variant='outlined'
								name='fromyear1'
								label='From Year'
								type='date'
								style={{ width: '80%' }}
								required
								value={values.fromyear1}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='start'>
											<DateRangeIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>

						<Grid item md={4} sm={6} xs={12} lg={4}>
							<TextField
								margin='dense'
								variant='outlined'
								name='toyear1'
								type='date'
								label='To Year'
								style={{ width: '80%' }}
								required
								value={values.toyear1}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='start'>
											<DateRangeIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>

						<Grid item md={4} sm={12} xs={12} lg={4}>
							<TextField
								margin='dense'
								label='Qualification'
								variant='outlined'
								style={{ width: '80%' }}
								name='qualification1'
								required
								value={values.qualification1}
								onChange={props.handleChange}
							/>
						</Grid>

						<Grid item md={8} sm={12} xs={12} lg={8}>
							<TextField
								margin='dense'
								label='Description'
								variant='outlined'
								style={{ width: '90%' }}
								name='description1'
								required
								value={values.description1}
								onChange={props.handleChange}
							/>
						</Grid>
					</Grid>
					<br />
					<Divider />
					<br />
					<Grid container spacing={2} alignItems='center' lg={12}>
						<Grid item md={4} sm={12} xs={12} lg={4}>
							<TextField
								margin='dense'
								variant='outlined'
								name='school'
								label='School'
								style={{ width: '80%' }}
								required
								value={values.school}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<SchoolIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item md={4} sm={6} xs={12} lg={4}>
							<TextField
								margin='dense'
								variant='outlined'
								name='fromyear2'
								label='From Year'
								type='date'
								style={{ width: '80%' }}
								required
								value={values.fromyear2}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='start'>
											<DateRangeIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>

						<Grid item md={4} sm={6} xs={12} lg={4}>
							<TextField
								margin='dense'
								variant='outlined'
								name='toyear2'
								label='To Year'
								type='date'
								style={{ width: '80%' }}
								required
								value={values.toyear2}
								onChange={props.handleChange}
								InputProps={{
									endAdornment: (
										<InputAdornment position='start'>
											<DateRangeIcon />
										</InputAdornment>
									),
								}}
							/>
						</Grid>

						<Grid item md={4} sm={12} xs={12} lg={4}>
							<TextField
								margin='dense'
								label='Qualification'
								variant='outlined'
								style={{ width: '80%' }}
								name='qualification2'
								required
								value={values.qualification2}
								onChange={props.handleChange}
							/>
						</Grid>

						<Grid item md={8} sm={8} xs={8} lg={8}>
							<TextField
								margin='dense'
								label='Description'
								variant='outlined'
								style={{ width: '90%' }}
								name='description2'
								required
								value={values.description2}
								onChange={props.handleChange}
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
						marginLeft: '20%',
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
			<p className='text-center text-muted'>Page 2</p>
		</Paper>
	);
}

export default withStyles(styles)(Profile);

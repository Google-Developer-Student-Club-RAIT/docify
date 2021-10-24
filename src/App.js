import React from 'react';
import './App.css';
import ResumePage from './components/ResumePage';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export function App() {
	const classes = useStyles();
	return (
		<div className='App'>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' className={classes.title}>
						Resume
					</Typography>
				</Toolbar>
			</AppBar>
			<ResumePage />
		</div>
	);
}

export default App;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Resume from './Resume';
import ResumeResult from './ResumeResult';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		display: 'flex',
	},
	resumeForm: {
		width: '30%',
	},
	resultDiv: {
		width: '70%',
		margin: 'auto',
	},
}));

export function App() {
	const [state, setState] = useState({
		step: 1,
		// Personal Profile Details...
		firstname: '',
		lastname: '',
		email: '',
		phone: '',
		github: '',
		linkedin: '',
		facebook: '',
		instagram: '',

		// Education Information
		college: '',
		fromyear1: '',
		toyear1: '',
		qualification1: '',
		description1: '',
		school: '',
		fromyear2: '',
		toyear2: '',
		qualification2: '',
		description2: '',

		// Project Information...
		title1: '',
		link1: '',
		projectDescription1: '',
		title2: '',
		link2: '',
		projectDescription2: '',
		title3: '',
		link3: '',
		projectDescription3: '',

		// Experience Information
		institute1: '',
		position1: '',
		duration1: '',
		experienceDescription1: '',
		institute2: '',
		position2: '',
		duration2: '',
		experienceDescription2: '',

		// Extra Information
		skill1: '',
		skill2: '',
		skill3: '',
		skill4: '',
		skill5: '',
		skill6: '',
		interest1: '',
		interest2: '',
		interest3: '',
		interest4: '',
		interest5: '',
		interest6: '',
	});
	const classes = useStyles();

	function nextStep() {
		const { step } = state;
		setState({
			...state,
			step: step + 1,
		});
	}

	function prevStep() {
		const { step } = state;
		setState({
			...state,
			step: step - 1,
		});
	}

	function handleChange({ target: { value, name } }) {
		setState({
			...state,
			[name]: value,
		});
	}

	console.log(state.step);

	return (
		<div className={classes.root}>
			<div className={classes.resumeForm}>
				<Resume
					state={state}
					prevStep={prevStep}
					nextStep={nextStep}
					handleChange={handleChange}
				/>
			</div>
			<div className={classes.resultDiv}>
				<ResumeResult state={state} />
			</div>
		</div>
	);
}

export default App;

import React from 'react';
import Profile from './Profile';
import Education from './Education';
import Projects from './Projects';
import Experience from './Experience';
import Extras from './Extras';

function Resume({ state, handleChange, prevStep, nextStep }) {
	const { step } = state;

	return (
		<>
			{step === 1 ? (
				<div className='App mt-3'>
					<div className='container col-lg-10 mx-auto text-center'>
						<Profile
							nextStep={nextStep}
							handleChange={handleChange}
							values={state}
						/>
					</div>
				</div>
			) : null}
			{step === 2 ? (
				<div className='App mt-3'>
					<div className='container col-lg-10 mx-auto text-center'>
						<Education
							nextStep={nextStep}
							prevStep={prevStep}
							handleChange={handleChange}
							values={state}
						/>
					</div>
				</div>
			) : null}
			{step === 3 ? (
				<div className='App mt-3'>
					<div className='container col-lg-8 mx-auto text-center'>
						<Projects
							nextStep={nextStep}
							prevStep={prevStep}
							handleChange={handleChange}
							values={state}
						/>
					</div>
				</div>
			) : null}
			{step === 4 ? (
				<div className='App mt-3'>
					<div className='container col-lg-10 mx-auto text-center'>
						<Experience
							nextStep={nextStep}
							prevStep={prevStep}
							handleChange={handleChange}
							values={state}
						/>
					</div>
				</div>
			) : null}
			{step === 5 ? (
				<div className='App mt-3'>
					<div className='container col-lg-10 mx-auto text-center'>
						<Extras
							prevStep={prevStep}
							handleChange={handleChange}
							values={state}
						/>
					</div>
				</div>
			) : null}
		</>
	);
}

export default Resume;

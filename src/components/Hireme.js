import React from 'react';
import hireme from '../assets/hire-me.jpg'

const Hireme = () => {
    return (
			<section id='hireme' className='py-10 px-3 text-white'>
				<div className='text-center'>
					<h3 className='text-4xl font-semibold'>
						Hire <span className='text-cyan-600'>Me</span>
					</h3>
					<p className='text-gray-400 mt-3 text-lg'>Do you have any work?</p>
				</div>
				<div className='bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center'>
					<div>
						<h2 className='text-2xl font-semibold'>
							Do you want any work from me?
						</h2>
						<p className='lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6'>
							I would love if you can contribute to social cause, as you are
							ready to work free and any work. Start gathering groups of people
							who are illeterate and innocent and educate them about the things
							you know. The journey begins from there... you will learn a new
							perspective of life, rest assured on me, you will definitely make
							a good career too.
						</p>
						<button className='btn btn-primary mt-10'>Say Hello</button>
					</div>
					<img
						src={hireme}
						alt=''
						className='lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover rounded-xl'
					/>
				</div>
			</section>
		);
};

export default Hireme;
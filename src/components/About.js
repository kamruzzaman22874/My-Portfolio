import React from 'react';
import aboutImg from '../assets/about.jpg'
import resume from '../assets/Jamal-Hossen.pdf'
const About = () => {
    const info = [
        {text:'Years experience',count: 'Fresher'},
        {text:'Completed Projects',count: '04'},
        {text:'Companies Work',count: '01'},
    ]
    return (
			<section id='about' className='py-10 text-white'>
				<div className='text-center mt-8'>
					<h3 className='text-5xl font-semibold'>
						About <span className='text-cyan-600'>Me</span>
					</h3>
					<p className='text-gray-400 my-3 text-2xl mb-10'>My introduction</p>
					<div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
						<div className='p-2'>
							<div className='text-gray-400 my-3'>
								<p className='text-justify text-lg leading-7 w-11/12'>
									I am a Front-End Developer with an amazing ability to develop
									websites that are both functional and aesthetically pleasing.
									I have a strong under-standing of web standards and best
									practices, and I am passionate about creating websites that
									users will find easy to use and visually appealing.
								</p>
								<div className='flex mt-10 items-center gap-7'>
									{info.map((content) => (
										<div key={content.text}>
											<h3 className='md:text-4xl text-2xl font-semibold text-white'>
												<span className='text-cyan-600'>{content.count}</span>
											</h3>
											<span className='md:text-base text-xs'>
												{content.text}
											</span>
										</div>
									))}
								</div>
								<a href='../assets/Jamal-Hossen.pdf' download>
									<button className='btn btn-primary mt-8'>
										Download Resume
									</button>
								</a>
							</div>
						</div>
						<div className='flex-1 md:mt-0 mt-6 flex justify-center items-center'>
							<div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg'>
								<img
									src={aboutImg}
									alt=''
									className='w-full object-cover bg-cyan-600 rounded-xl'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
};

export default About;
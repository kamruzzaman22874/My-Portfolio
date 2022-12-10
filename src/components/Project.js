import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import carsell from '../assets/CAR-SELL-Project.jpeg'
import spaservice from '../assets/Spa-Service-Project.jpeg'
import learncode from '../assets/Learn-Coding.jpg'
import images from '../assets/about.jpg'
import "swiper/css"
import "swiper/css/pagination"
import { Pagination , Autoplay } from 'swiper';


const Project = () => {
    const projects = [
			{
            img: carsell,
                name: 'Car Sell',
				github_client_link:
					'https://github.com/kamruzzaman22874/My-Old-Car-Sell-Repo',
				github_server_link:
					'https://github.com/kamruzzaman22874/Sell-Car-Server-Repo',
				live_link: 'https://old-car-390a9.web.app/',
			},
			{
                img: spaservice,
                name:'Spa Service',
				github_client_link: 'https://github.com/kamruzzaman22874/My-Spa-Service-Repo',
				github_server_link: 'https://github.com/kamruzzaman22874/Spa-Service-Server-Repo',
				live_link: 'https://assignment11-spa.web.app/',
			},
			{
                img: learncode,
                name:'Learn Coding',
				github_client_link: 'https://github.com/kamruzzaman22874/My-Learn-Coding-Repo',
				github_server_link: 'https://github.com/kamruzzaman22874/Learn-Coding-Repo',
				live_link: 'https://assignment10-authenticat-1b32f.web.app/',
			},
		];
    return (
			<section id='project' className='py-10 text-white'>
				<div className='text-center'>
					<h3 className='text-4xl font-semibold'>
						My <span className='text-cyan-600'>Projects</span>
					</h3>
					<p className='text-gray-400 mt-3 text-lg'>My awesome works</p>
				</div>
				<br />
				<div className='flex max-w-6xl px-5 mx-auto items-center relative'>
					<div className='lg:w-2/3 w-full'>
						<Swiper
							slidesPerview={1.2}
							spaceBetween={20}
							breakpoints={{
								786: {
									slidesPerView: 2,
								},
							}}
							loop={true}
							autoplay={{
								delay: 3000,
							}}
							pagination={{
								clickable: true,
							}}
							modules={[Pagination, Autoplay]}
						>
                        {
                            projects.map((project_info, i) => (
                                <SwiperSlide key={i}>
								<div className='h-fit w-full p-4 bg-slate-700 rounded-xl'>
									<img src={project_info.img} alt='' className='rounded-lg' />
									<h3 className='text-xl my-4'>{project_info.name}</h3>
									<div className='flex gap-3'>
										<a
											href={project_info.github_client_link}
											className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'
										>
											GitHub Client
										</a>
										<a
											href={project_info.github_server_link}
											className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'
										>
											GitHub Server
										</a>
										<a
											href={project_info.live_link}
											className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'
										>
											Live Demo
										</a>
									</div>
								</div>
							</SwiperSlide>
                            ))
                        }
						</Swiper>
					</div>

					<div className='lg:block hidden '>
						<img src={images} alt='' />
					</div>
				</div>
			</section>
		);
};

export default Project;
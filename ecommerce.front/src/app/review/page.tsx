'use client';

import { useState } from 'react';
import Image from 'next/image';

const ReviewPage = () => {
	const [showMore, setShowMore] = useState(false);

	const photos = [
		'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e706398-df38-41dc-afa4-dd71c5ee87c8/sweat-a-capuche-oversize-sportswear-phoenix-fleece-pour-VsSlC5.png',
		'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/478c8151-ab7e-4251-8598-098a9ae52879/sweat-a-capuche-oversize-sportswear-phoenix-fleece-pour-VsSlC5.png',
		'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/842f465f-0030-445c-b45a-effbdeaed86e/sweat-a-capuche-oversize-sportswear-phoenix-fleece-pour-VsSlC5.png',
		'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d24f102a-ed9b-46cb-9954-29d5956cfa16/sweat-a-capuche-oversize-sportswear-phoenix-fleece-pour-VsSlC5.png',
		'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bc67c600-014b-4a1b-bc50-d0e6683faa14/sweat-a-capuche-oversize-sportswear-phoenix-fleece-pour-VsSlC5.png',
	];

	const items = [
		{
			image:
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/842f465f-0030-445c-b45a-effbdeaed86e/sweat-a-capuche-oversize-sportswear-phoenix-fleece-pour-VsSlC5.png',
			name: 'Product 1',
			colorCount: 2,
			sizeCount: 3,
			price: '$100',
			disabled: false,
		},
		{
			image:
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a7feb95f-7095-4de5-9d06-65199705677f/survetement-taille-haute-sportswear-phoenix-fleece-pour-jlLXrP.png',
			name: 'Product 2',
			colorCount: 1,
			sizeCount: 2,
			price: '$120',
			disabled: true,
		},
		{
			image:
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f8be6eb3-a616-4dd1-b0b0-0538167576e0/casquette-featherlight-souple-dri-fit-club-srwpLb.png',
			name: 'Product 3',
			colorCount: 3,
			sizeCount: 4,
			price: '$130',
			disabled: false,
		},
		{
			image:
				'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/93a279d3-816c-4696-88a5-4e59891afae9/chaussures-air-force-1-07-next-nature-pour-f0Mwhp.png',
			name: 'Product 4',
			colorCount: 2,
			sizeCount: 2,
			price: '$140',
			disabled: true,
		},
	];

	const handleShowMore = () => {
		setShowMore(true);
	};

	return (
		<div className='mt-8 md:mt-24 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
			<div className='flex flex-col px-4 md:px-0 md:flex-row justify-between'>
				<div className='w-full md:w-2/3  h-full grid grid-cols-2 gap-2'>
					{photos.slice(0, 4).map((photo, index) => (
						<img key={index} src={photo} alt={`Product Image ${index + 1}`} className='w-full h-auto' />
					))}
					{showMore &&
						photos
							.slice(4)
							.map((photo, index) => (
								<img key={index} src={photo} alt={`Product Image ${index + 5}`} className='w-full h-auto' />
							))}
					{!showMore && photos.length > 4 ? (
						<button className=' w-full col-span-2 h-20 bg-gray-100 p-4 text-md text-center' onClick={handleShowMore}>
							See more
						</button>
					) : (
						''
					)}
				</div>

				<div className='w-full md:w-1/2 flex flex-col ml-0 md:ml-6 mt-20 md:mt-0'>
					<p className='text-xl font-medium'>By "User48"</p>
					{items.map((item, index) => (
						<>
							<div
								key={index}
								className={`flex p-2 items-center justify-between mt-4 ${
									item.disabled ? 'cursor-not-allowed relative' : 'cursor-pointer'
								}`}
							>
								<div className='flex items-center gap-2 md:gap-12'>
									<Image src={item.image} alt={item.name} width={100} height={100} />
									<h3 className='text-sm font-medium'>{item.name}</h3>
								</div>
								<div className='flex items-center gap-6 md:gap-12'>
									<div>
										<p className='text-xs text-gray-500'>Colors: {item.colorCount}</p>
										<p className='text-xs text-gray-500'>Sizes: {item.sizeCount}</p>
									</div>
									<p className='text-sm font-semibold'>{item.price}</p>
								</div>
								{item.disabled && (
									<span className='absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1'>Sold Out</span>
								)}
							</div>
							<div className='border-b w-full'></div>
						</>
					))}
				</div>
			</div>
		</div>
	);
};

export default ReviewPage;

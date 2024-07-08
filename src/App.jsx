import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
// Import car logos
import Aston_martin from './assets/aston_martin.png'
import Audi from './assets/audi.png'
import Bentley from './assets/bentley.png'
import Bmw from './assets/bmw.png'
import Cadillac from './assets/cadillac.png'
import Chevrolet from './assets/chevrolet.png'
import Ferrari from './assets/ferrari.png'
import Ford from './assets/ford.png'
import Gac from './assets/gac.png'
import Genesis from './assets/genesis.png'
import Hyundai from './assets/hyundai.png'
import Kia from './assets/kia.png'
import Lamborjini from './assets/lamborjini.png'
import Land_Rover from './assets/land_rover.png'
import Lexus from './assets/lexus.png'
import Mers from './assets/mers.png'
import Mini from './assets/mini.png'
import Nissan from './assets/nissan.png'
import Porsche from './assets/porsche.png'
import Rolls_royce from './assets/rolls_royce.png'
import Tesla from './assets/tesla.png'
import Toyoto from './assets/toyoto.png'
import Volksvagen from './assets/volkswagen.png'
import { PostsContext } from './components/PostProvider'


const category = [
	{ category: 'mers', img: Mers },
	{ category: 'bmw', img: Bmw },
	{ category: 'audi', img: Audi },
	{ category: 'bentley', img: Bentley },
	{ category: 'genesis', img: Genesis },
	{ category: 'cadillac', img: Cadillac },
	{ category: 'chevrolet', img: Chevrolet },
	{ category: 'ferrari', img: Ferrari },
	{ category: 'hyundai', img: Hyundai },
	{ category: 'lamborjini', img: Lamborjini },
	{ category: 'kia', img: Kia },
	{ category: 'land_rover', img: Land_Rover },
	{ category: 'lexus', img: Lexus },
	{ category: 'mini', img: Mini },
	{ category: 'nissan', img: Nissan },
	{ category: 'porsche', img: Porsche },
	{ category: 'rolls_royce', img: Rolls_royce },
	{ category: 'tesla', img: Tesla },
	{ category: 'toyoto', img: Toyoto },
	{ category: 'wolksvagen', img: Volksvagen },
	{ category: 'ford', img: Ford },
	{ category: 'aston_martin', img: Aston_martin },
	{ category: 'gac', img: Gac },
]

function App() {
	const posts = useContext(PostsContext)
	const [status, setStatus] = useState('')
	const navigate = useNavigate()

	console.log(posts)
	const filtered = posts.filter(el => el.category === status)

	return (
		<>
			<header>
				<div className='left_div'>
					<img
						onClick={() => setStatus('')}
						src='https://autoline.uz/img/dealers/logos/a/e/1645629938825415767.png'
						alt=''
					/>
				</div>
				<div className='right_div'>
					<ul>
						<li>СПЕЦТЕХНИКА</li>
						<li>КАТАЛОГ</li>
						<li>ПАРТНЁРЫ</li>
						<li>СЕРВИСНИЙ ЦЕНТР</li>
						<li>КОНТАКТЫ</li>
					</ul>
				</div>
			</header>
			<main>
				<div className='car_logo'>
					{category.map(el => (
						<img
							key={el.category}
							onClick={() => setStatus(el.category)}
							src={el.img}
							alt=''
						/>
					))}
				</div>
				<div className='car_img'>
					<img
						src='https://orientmotors.uz/uploads/images/banner/banner-showroom/dsc00537-577.jpg'
						alt=''
					/>
				</div>
				<div className='katalog'>
					<h1>КАТАЛОГ</h1>
					<div className='carwfqx'>
						<div className='cards'>
							{!status ? (
								posts.map(post => (
									<div
										key={post.id}
										className='car_in'
										data-aos='fade-down'
										onClick={() => navigate(`/car/${post.id}`)}
									>
										<div className='car_ss'>
											<div className='car-img'>
												<img src={post.imageUrl} alt={post.title} />
											</div>
											<div className='car'>
												<h4 className='hash4'>{post.title}</h4>
												<p className='pi4'>{post.desc}</p>
											</div>
										</div>
									</div>
								))
							) : filtered.length > 0 ? (
								filtered.map(element => (
									<div
										key={element.id}
										className='car_in'
										data-aos='fade-down'
										onClick={() => navigate(`/car/${element.id}`)}
									>
										<div className='car_ss'>
											<div className='car-img'>
												<img src={element.imageUrl} alt={element.title} />
											</div>
											<div className='car'>
												<h4 className='hash4'>{element.title}</h4>
												<p className='pi4'>{element.desc}</p>
											</div>
										</div>
									</div>
								))
							) : (
								<h2>Bu bolim mavjud emas</h2>
							)}
						</div>
					</div>
				</div>
			</main>
			<footer>
				<div className='left'>
					<h2>НУЖНА ПОМОЩЬ В ПОКУПКЕ?</h2>
				</div>
				<div className='between'>
					<h6>ПОЗВОНИТЕ НАМ</h6>
					<h2>+998 71 205-09-90</h2>
				</div>
				<div className='right'>
					<button>НАПИСИТЕ ПИСЬМО</button>
				</div>
			</footer>
		</>
	)
}

export default App

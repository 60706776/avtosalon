import { addDoc, collection } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useState } from 'react'
import { v4 } from 'uuid'
import '../components/CreatePost.css'
import { db, imgdb } from '../firebase.config'

export default function AdminWork() {
	const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('')
	const [img, setImg] = useState(null)
	const [category, setCategory] = useState('')
	const [year, setYear] = useState('')
	const [dvigatel, setDvigatel] = useState('')
	const [fuel, setFuel] = useState('')
	const [razgon, setRazgon] = useState('')
	const [moshina, setMoshina] = useState('')

	const enterWork = collection(db, 'works')

	const createWork = async () => {
		try {
			let imageUrl = ''
			if (img) {
				const imgRef = ref(imgdb, `files/${v4()}`)
				await uploadBytes(imgRef, img)
				imageUrl = await getDownloadURL(imgRef)
			}
			await addDoc(enterWork, {
				title: title,
				desc: desc,
				category: category,
				imageUrl: imageUrl,
				year: year,
				dvigatel: dvigatel,
				fuel:fuel,
				razgon: razgon,
				moshina: moshina
			})
			setTitle('')
			setDesc('')
			setImg(null)
			setCategory('')
			setYear('')
			setDvigatel('')
			setFuel('')
			setRazgon('')
			setMoshina('')

			console.log('Document successfully written!')
		} catch (error) {
			console.log('Xato:', error)
		}
	}

	return (
		<>
			<div className='adminform'>

				<input
					type='text'
					placeholder='Title'
					value={title}
					onChange={event => setTitle(event.target.value)}
				/>
				<br />
				<textarea
					placeholder='Text'
					value={desc}
					onChange={event => setDesc(event.target.value)}
				></textarea>

				<select
					name='cars'
					id='cars'
					value={category}
					onChange={event => setCategory(event.target.value)}
				>
					<option value='mers'>Mercedez-Benz</option>
					<option value='bmw'>Bmw</option>
					<option value='audi'>Audi</option>
					<option value='bentley'>Bentley</option>
					<option value='genesis'>Genesis</option>
					<option value='cadillac'>Cadillac</option>
					<option value='chevrolet'>Chevrolet</option>
					<option value='ferrari'>Ferrari</option>
					<option value='hyundai'>Hyundai</option>
					<option value='lamborjini'>Lamborghini</option>
					<option value='kia'>Kia</option>
					<option value='land_rover'>Land Rover</option>
					<option value='lexus'>Lexus</option>
					<option value='mini'>Mini</option>
					<option value='nissan'>Nissan</option>
					<option value='porsche'>Porsche</option>
					<option value='rolls_royce'>Rolls Royce</option>
					<option value='tesla'>Tesla</option>
					<option value='toyoto'>Toyoto</option>
					<option value='volkswagen'>Volkswagen</option>
					<option value='ford'>Ford</option>
					<option value='aston_martin'>Aston Martin</option>
					<option value='gac'>Gac</option>
				</select>

				<input
					type='file'
					onChange={event => setImg(event.target.files[0])}
					accept='image/*,.png,.jpg,.gif,.web'
				/>


				<select
					name='cars'
					id='cars'
					value={year}
					onChange={event => setYear(event.target.value)}
				>
					<option value='2010'>2010</option>
					<option value='2011'>2011</option>
					<option value='2012'>2012</option>
					<option value='2013'>2013</option>
					<option value='2014'>2014</option>
					<option value='2015'>2015</option>
					<option value='2016'>2016</option>
					<option value='2017'>2017</option>
					<option value='2018'>2018</option>
					<option value='2019'>2019</option>
					<option value='2020'>2020</option>
					<option value='2021'>2021</option>
					<option value='2022'>2022</option>
					<option value='2023'>2023</option>
					<option value='2024'>2024</option>
					<option value='2025'>2025</option>
				</select>
				<input type="text" placeholder='Dvigatel' value={dvigatel}
					onChange={event => setDvigatel(event.target.value)} />
				<select
					name='cars'
					id='cars'
					value={fuel}
					onChange={event => setFuel(event.target.value)}
				>
					<option value='Benzin'>Benzin</option>
					<option value='Gaz'>Gaz</option>
					<option value='Tok'>Tok</option>
				</select>
				<input type="text" placeholder='Razgon 0-100 km/s'
					value={razgon}
					onChange={event => setRazgon(event.target.value)} />
				<select
					name='cars'
					id='cars'
					value={moshina}
					onChange={event => setMoshina(event.target.value)}
				>
					<option value='Avtomat'>Avtomat</option>
					<option value='Mexanika'>Mexanika</option>
					<option value='Electro car'>Electro car</option>
				</select>
				<br />
				<button className='button' onClick={createWork}>
					Submit
				</button>
			</div>
		</>
	)
}

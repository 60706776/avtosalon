
// import { collection, getDocs } from 'firebase/firestore';
// import React, { useContext, useEffect, useState } from 'react';
// import { db } from '../firebase.config';
// import "../components2/Car.css";
// import { useParams } from 'react-router-dom';
// import { PostsContext } from '../components/PostProvider';

// export default function Car() {
//   const { id } = useParams();
//   const posts = useContext(PostsContext);
//   const car = posts.find(post => post.id === id);
//   console.log(car);

//   const [post, setPosts] = useState([]);
//   const [status, setStatus] = useState("");

//   const filtered = posts.filter((el) => el.category === status);
//   const allPostCollection = collection(db, 'works');

//   const getAllPosts = async () => {
//     try {
//       const data = await getDocs(allPostCollection);
//       const postsArray = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setPosts(postsArray);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAllPosts();
//   }, []);

//   if (!car) {
//     return <h2>Product not found</h2>;
//   }

//   return (
//     <div className="car-container">
//       {posts.map(post => (
//         <div key={post.id} className="car-card" data-aos="fade-down">
//           <div className="car-content">
//             <div className="car-image">
//               <img src={post.imageUrl} alt={post.title} />
//               <div className="thumbnail-images">
//                 <img src={car.imageUrl} alt="thumbnail" />
//                 <img src={car.imageUrl} alt="thumbnail" />
//                 <img src={car.imageUrl} alt="thumbnail" />
//                 <img src={car.imageUrl} alt="thumbnail" />
//                 <img src={car.imageUrl} alt="thumbnail" />
//               </div>
//             </div>
//             <div className="car-details">
//               <table>
//                 <tbody>
//                   <tr>
//                     <th>Title</th>
//                     <td>{post.title}</td>
//                   </tr>
//                   <tr>
//                     <th>Description</th>
//                     <td>{post.desc}</td>
//                   </tr>
//                   <tr>
//                     <th>Category</th>
//                     <td>{post.category}</td>
//                   </tr>
//                   <tr>
//                     <th>Year</th>
//                     <td>{post.year}</td>
//                   </tr>
//                   <tr>
//                     <th>Dvigatel</th>
//                     <td>{post.dvigatel}</td>
//                   </tr>
//                   <tr>
//                     <th>Kpp</th>
//                     <td>{post.moshina}</td>
//                   </tr>
//                   <tr>
//                     <th>Fuel</th>
//                     <td>{post.fuel}</td>
//                   </tr>
//                   <tr>
//                     <th>Razgon</th>
//                     <td>{post.razgon}</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import "../components2/Car.css"
import { PostsContext } from '../components/PostProvider'

const Car = () => {
	const { id } = useParams()
	const posts = useContext(PostsContext)
	const car = posts.find(post => post.id === id)
	console.log(car)


	if (!car) {
		return <h2>Product not found</h2>
	}

	return (
		<div className='container'>
			<div className='image-gallery'>
				<div className='main-image'>
					<img src={car.imageUrl} alt={car.title} />
				</div>
				<div className='thumbnail-images'>
					<img src={car.imageUrl} alt='thumbnail' />
					<img src={car.imageUrl} alt='thumbnail' />
					<img src={car.imageUrl} alt='thumbnail' />
					<img src={car.imageUrl} alt='thumbnail' />
					<img src={car.imageUrl} alt='thumbnail' />
				</div>
			</div>
			<div className='car-info'>
				<h1>{car.title}</h1>
				<p className='price'>Цена: по запросу</p>
				<div className='tabs'>
					<button className='tab-button'>Описание</button>
					<button className='tab-button active'>Характеристики</button>
				</div>
				<div className='characteristics'>
					<h2>Характеристики</h2>
					<table className='car-table'>
						<tbody>
							<tr>
								<th>Год выпуска</th>
								<td>{car.year}</td>
							</tr>
							<tr>
								<th>Объем двигателя, см³</th>
								<td></td>
							</tr>
							<tr>
								<th>КПП</th>
								<td>{car.kpp}</td>
							</tr>
							<tr>
								<th>Мощность, л.с.</th>
								<td>530</td>
							</tr>
							<tr>
								<th>Разгон 0-100 км/ч</th>
								<td>4.4 сек</td>
							</tr>
							<tr>
								<th>Тип топлива</th>
								<td>{car.fuel}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default Car

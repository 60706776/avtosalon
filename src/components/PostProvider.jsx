import { collection, getDocs } from 'firebase/firestore'
import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'
import { db } from '../firebase.config'

export const PostsContext = createContext()

export const PostsProvider = ({ children }) => {
	console.log(children)
	const [posts, setPosts] = useState([])

	const allPostCollection = collection(db, 'works')

	const getAllPosts = async () => {
		try {
			const data = await getDocs(allPostCollection)
			const postsArray = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
			setPosts(postsArray)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getAllPosts()
	}, [])

	return <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
}

PostsProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

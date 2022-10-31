import { projectFirestore } from "../firebase/config"
import { ref } from "vue"

const getPost = (id) => {
  const post = ref(null)
  const error = ref(null)
  
  const load = async () => {
    try {      
      let res = await projectFirestore.collection('posts').doc(id).get()
      post.value = { ...res.data(), id: res.id }
      
      if(!res.exists) {
        throw Error('That post does not exist.')
      }
      
    }
    catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }
  
  return { post, error, load }
}

export default getPost
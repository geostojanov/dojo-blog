import { ref } from "vue"
import { projectFirestore } from "@/firebase/config"

const createPost = (post) => {
  const submit = async () => {
    try {
      const res = await projectFirestore.collection('posts').add(post)
    }
    catch (err) {
      console.log(err.value)
    }
  }
  
  return { submit }
}

export default createPost
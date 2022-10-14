import { ref } from "vue"

const createPost = (post) => {
  
  const submit = async () => {
    try {
      await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post) 
      })
    }
    catch (err) {
      console.log(err.value)
    }
  }
  
  return { submit }
}

export default createPost
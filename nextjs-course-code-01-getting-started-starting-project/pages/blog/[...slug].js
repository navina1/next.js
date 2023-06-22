 import React from 'react'
 import { useRouter } from 'next/router'
function BlogPostPage() {
    const router = useRouter();
     console.log(router.query)
   return (
     <div> The BlogPostPage</div>
   )
 }
 
 export default BlogPostPage
import React, { useState } from 'react';
import SectionTitle from "../UI/SectionTitle";
import BlogItem from "./blogItem";

import Blogs1 from '../../data/Blog/blog.json';
import Blogs2 from  '../../data/Blog/blogArabic.json';
import './blogs.css'

// function Blog() {
//     const [Blogs ,setBlogs] = useState(Blogs1)
//     const handleToggleSliderData = () =>  {
//         setBlogs(prevData => prevData === Blogs1 ? Blogs2 : Blogs1)

//     }

   
//     return (
//         <div className="blog-area-wrapper sm-top">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12 text-center">

//                         <SectionTitle title="Clients Testimonials" heading="Sunt officia deserunt animd laborum perspicial"/>
//                     </div>
//                 </div>

//                 <div className="row mtn-35">
//                 <button className='blogs' onClick={handleToggleSliderData}>change</button>
//                     {
//                         Blogs.reverse().slice(0,3).map(blog =>(
//                             <BlogItem key={blog.id} id={blog.id} title={blog.title} excerpt={blog.excerpt} postBy={blog.author.name} date={blog.publishDate}/>

//                         ))
                        
//                     }
                     
//                 </div>

               
//             </div>
            
//         </div>
//     );
// }

// export default Blog;

function BlogArabic() {
    const [blogs] = useState(Blogs2);

  

    return (
        <div className="blog-area-wrapper sm-top">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <SectionTitle title="Clients Testimonials" heading="Sunt officia deserunt animd laborum perspicial"/>
                    </div>
                </div>
                <div className="row mtn-35">
                 
                    {blogs.reverse().slice(0, 3).map(blog => (
                        <BlogItem
                            key={blog.id}
                            id={blog.id}
                            title={blog.title}
                            excerpt={blog.excerpt}
                            thumb={blog.thumb}
                            content={blog.content}
                            date={blog.publishDate}
                            author={blog.author.name}
                          
                             // Assuming you want to pass only the author's name
                        />
                    ))}
                </div>
            </div>
            {/* <button onClick={handleToggleSliderData}>Click here</button> */}
        </div>
        
    );
}

export default BlogArabic;
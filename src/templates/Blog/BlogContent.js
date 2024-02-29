// import Blog1 from '../../data/Blog/blog.json'
// import { useState } from 'react';
// import Blog2 from '../../data/Blog/blogArabic.json'
// import Pagination from "../../components/Pagination";
// import { Fragment } from 'react';
// import BlogItem from "../../components/Blog/blogItem";
// import BlogItemList from "../../components/Blog/blogItemList";

// const BlogContent = (props) => {
//     const [blogs ,setBlogs] = useState(Blog1);
//     const handleToggleSliderData = () => {
//         console.log("Before toggle:", blogs);
//         setBlogs(prevData => prevData === Blog1 ? Blog2 : Blog1);
//         console.log("After toggle:", blogs);
//     };
    
//     const [state, setState] = useState({
//         posts: blogs.reverse(),
//         currentPage: 1,
//         postsPerPage: 6
//     });

//     // Get current posts
//     const indexOfLastPost = state.currentPage * state.postsPerPage;
//     const indexOfFirstPost = indexOfLastPost - state.postsPerPage;
//     const currentPosts = state.posts.slice(indexOfFirstPost, indexOfLastPost);

//     // Change page
//     const paginate = currentPage => setState(prevState => {
//         return {
//             ...prevState,
//             currentPage: currentPage
//         }
//     });

//     return (
//         <>
//         <div className={props.cols + ' ' + props.classes}>
//             <Fragment>
//                 <div className={`blog-content-wrapper ${props.blog_type === 'list' && 'blog-list'}`}>
//                     <div className="row mtn-30">
//                         {
//                             props.blog_type === 'list' ? (
//                                 <div className={'col-12'}>
//                                     {
//                                         currentPosts.map(blog => (
//                                             <BlogItemList
//                                                 key={blog.id}
//                                                 id={blog.id}
//                                                 thumb={blog.thumb}
//                                                 title={blog.title}
//                                                 excerpt={blog.excerpt}
//                                                 postBy={blog.author.name}
//                                                 date={blog.publishDate}
//                                             />
//                                         ))
//                                     }
//                                 </div>
//                             ) : (
//                                 currentPosts.map(blog => (
//                                     <BlogItem
//                                         key={blog.id}
//                                         id={blog.id}
//                                         cols={props.cols === 'col-12' ? 'col-md-6 col-lg-4' : 'col-md-6'}
//                                         thumb={blog.thumb}
//                                         title={blog.title}
//                                         excerpt={blog.excerpt}
//                                         postBy={blog.author.name}
//                                         date={blog.publishDate}
//                                     />
//                                 ))
//                             )
//                         }
//                     </div>
                 
//                 </div>

//                 <Pagination
//                     paginate={paginate}
//                     totalPosts={state.posts.length}
//                     currentPage={state.currentPage}
//                     postsPerPage={state.postsPerPage}
//                 />
//             </Fragment>
            
//         </div>
//         <button onClick={handleToggleSliderData}>click hereeeeeeee</button>
//         </>
        
//     );
// }

// export default BlogContent;

// import Blog1 from '../../data/Blog/blog.json';
// import { useState, useEffect } from 'react';
// import Blog2 from '../../data/Blog/blogArabic.json';
// import Pagination from '../../components/Pagination';
// import { Fragment } from 'react';
// import BlogItem from '../../components/Blog/blogItem';
// import BlogItemList from '../../components/Blog/blogItemList';

// const BlogContent = (props) => {
//     const [blogs, setBlogs] = useState(Blog1);

//     useEffect(() => {
//         console.log('Current blogs:', blogs);
//     }, [blogs]);

//     const handleToggleSliderData = () => {
//         setBlogs((prevData) => (prevData === Blog1 ? Blog2 : Blog1));
//     };

//     const [state, setState] = useState({
//         posts: blogs.reverse(),
//         currentPage: 1,
//         postsPerPage: 6,
//     });

//     // Get current posts
//     const indexOfLastPost = state.currentPage * state.postsPerPage;
//     const indexOfFirstPost = indexOfLastPost - state.postsPerPage;
//     const currentPosts = state.posts.slice(indexOfFirstPost, indexOfLastPost);

//     // Change page
//     const paginate = (currentPage) =>
//         setState((prevState) => ({
//             ...prevState,
//             currentPage: currentPage,
//         }));

//     return (
//         <>
//             <div className={props.cols + ' ' + props.classes}>
//                 <Fragment>
//                     <div className={`blog-content-wrapper ${props.blog_type === 'list' && 'blog-list'}`}>
//                         <div className="row mtn-30">
//                             {props.blog_type === 'list' ? (
//                                 <div className={'col-12'}>
//                                     {currentPosts.map((blog) => (
//                                         <BlogItemList
//                                             key={blog.id}
//                                             id={blog.id}
//                                             thumb={blog.thumb}
//                                             title={blog.title}
//                                             excerpt={blog.excerpt}
//                                             postBy={blog.author.name}
//                                             date={blog.publishDate}
//                                         />
//                                     ))}
//                                 </div>
//                             ) : (
//                                 currentPosts.map((blog) => (
//                                     <BlogItem
//                                         key={blog.id}
//                                         id={blog.id}
//                                         cols={props.cols === 'col-12' ? 'col-md-6 col-lg-4' : 'col-md-6'}
//                                         thumb={blog.thumb}
//                                         title={blog.title}
//                                         excerpt={blog.excerpt}
//                                         postBy={blog.author.name}
//                                         date={blog.publishDate}
//                                     />
//                                 ))
//                             )}
//                         </div>
//                     </div>

//                     <Pagination
//                         paginate={paginate}
//                         totalPosts={state.posts.length}
//                         currentPage={state.currentPage}
//                         postsPerPage={state.postsPerPage}
//                     />
//                 </Fragment>
//             </div>
//             <button onClick={handleToggleSliderData}>Toggle Blogs</button>
//         </>
//     );
// };

// export default BlogContent;

import Blog1 from '../../data/Blog/blog.json';
import Blog2 from '../../data/Blog/blogArabic.json'
import React, {Fragment, useState} from 'react';
import Pagination from "../../components/Pagination";
import BlogItem from "../../components/Blog/blogItem";
import BlogItemList from "../../components/Blog/blogItemList";

const BlogContent = (props) => {
        const [blogs ,setBlogs] = useState(Blog1);
    const handleToggleSliderData = () => {
        console.log("Before toggle:", blogs);
        setBlogs(prevData => prevData === Blog1 ? Blog2 : Blog1);
        console.log("After toggle:", blogs);
    };
    
    const [state, setState] = useState({
        posts: blogs.reverse(),
        currentPage: 1,
        postsPerPage: 6
    });

    // Get current posts
    const indexOfLastPost = state.currentPage * state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - state.postsPerPage;
    const currentPosts = state.posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = currentPage => setState(prevState => {
        return {
            ...prevState,
            currentPage: currentPage
        }
    });
  

    return (
        <div className={props.cols + ' ' + props.classes}>
            <Fragment>
                <div className={`blog-content-wrapper ${props.blog_type === 'list' && 'blog-list'}`}>
                    <div className="row mtn-30">
                        {
                            props.blog_type === 'list' ? (
                                <div className={'col-12'}>
                                    {
                                        currentPosts.map(blog => (
                                            <BlogItemList
                                                key={blog.id}
                                                id={blog.id}
                                                thumb={blog.thumb}
                                                title={blog.title}
                                                excerpt={blog.excerpt}
                                                postBy={blog.author.name}
                                                date={blog.publishDate}
                                            />
                                        ))
                                    }
                                </div>
                            ) : (
                                currentPosts.map(blog => (
                                    <BlogItem
                                        key={blog.id}
                                        id={blog.id}
                                        cols={props.cols === 'col-12' ? 'col-md-6 col-lg-4' : 'col-md-6'}
                                        thumb={blog.thumb}
                                        title={blog.title}
                                        excerpt={blog.excerpt}
                                        postBy={blog.author.name}
                                        date={blog.publishDate}
                                    />
                                ))
                            )
                        }
                    </div>
                </div>

                <Pagination
                    paginate={paginate}
                    totalPosts={state.posts.length}
                    currentPage={state.currentPage}
                    postsPerPage={state.postsPerPage}
                />
            </Fragment>
            <button onClick={handleToggleSliderData}>click hereeeeeeee</button>
        </div>
    );
}

export default BlogContent;
import React, {useEffect, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostsForm from "./components/PostsForm";
import PostsFilter from "./components/PostsFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/MyButton/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import MyLoader from "./components/UI/MyLoader/MyLoader";

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort:'',query:''});
    const [modal, setModal] = useState(false);
    const [isPostsLoading, setIsPostsLoading] = useState(false);

    const sortedAndSearchPosts = usePosts(posts,filter.sort,filter.query);

    useEffect(()=>{
        fetchPosts()
    },[])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    async function fetchPosts() {
        setIsPostsLoading(true);
        setTimeout(async ()=> {
            const posts = await PostService.getAll();
            setPosts(posts);
            setIsPostsLoading(false);
        },1000)

    }
    return (
        <div className="App">
            <button style={{margin:'10px'}} onClick={fetchPosts}>GET POSTS</button>
            <MyButton onClick={() => setModal(true)} style={{marginTop:'15px'}}>Создать пост</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostsForm create={createPost}/>
            </MyModal>


            <hr style={{margin:'15px 0'}}/>

            <PostsFilter filter={filter} setFilter={setFilter}/>
            {isPostsLoading
            ? <div style={{display:'flex',justifyContent:'center', marginTop:'50px'}}> <MyLoader/> </div>
            : <PostList remove={removePost} posts={sortedAndSearchPosts} title={'Посты про JS'}/>}


        </div>
    );
}


export default App;

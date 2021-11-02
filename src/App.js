import React, {useEffect, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostsForm from "./components/PostsForm";
import PostsFilter from "./components/PostsFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/MyButton/MyButton";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";

function App() {
    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort:'',query:''});
    const [modal, setModal] = useState(false);

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
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
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

            <PostList remove={removePost} posts={sortedAndSearchPosts} title={'Посты про JS'}/>

        </div>
    );
}


export default App;

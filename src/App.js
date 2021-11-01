import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostsForm from "./components/PostsForm";
import PostsFilter from "./components/PostsFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/MyButton/MyButton";
import {usePosts} from "./hooks/usePosts";

function App() {
    const [posts, setPosts] = useState([
        {id: 0, title: 'JavaScript', body: 'это язык программирования'},
        {id: 1, title: 'HTML', body: 'уж это не язык программирования'},
        {id: 2, title: 'Python', body: 'супер язык программирования'}
    ])

    const [filter, setFilter] = useState({sort:'',query:''});
    const [modal, setModal] = useState(false);

    const sortedAndSearchPosts = usePosts(posts,filter.sort,filter.query);


    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
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

import React,{useState} from 'react';
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";

const PostsForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
          ...post,
            id:Date.now()
        }
        create(newPost);
        setPost({title: '', body: ''})
    }
    return (
            <form>
                <MyInput
                    style={{display: 'block'}}
                    type="text"
                    placeholder={'Название поста'}
                    value={post.title}
                    onChange={(e) => setPost({...post, title: e.target.value})}/>

                <MyInput
                    style={{display: 'block'}}
                    type="text"
                    placeholder={'Содержание поста'}
                    value={post.body}
                    onChange={(e) => setPost({...post, body: e.target.value})}/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
    );
};

export default PostsForm;
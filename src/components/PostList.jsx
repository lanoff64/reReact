import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts,title,remove}) => {

    if(!posts.length) {
        return (
            <h1 style={{textAlign:'center'}}>Посты не найдены</h1>
        )
    }

    return (
        <div>
            <div className="App">
                <h1 style={{textAlign:'center'}}>{title}</h1>
                <TransitionGroup>
                {posts.map((post) =>
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post">
                        <PostItem remove={remove} id={post.id} post={post}  />
                        </CSSTransition>
                    )}

                </TransitionGroup>
            </div>
        </div>
    );
};

export default PostList;
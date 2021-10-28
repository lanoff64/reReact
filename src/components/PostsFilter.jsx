import React from 'react';
import MyInput from "./UI/MyInput/MyInput";
import MySelect from "./UI/MySelect/MySelect";

const PostsFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e =>  setFilter({...filter, query: e.target.value})}
                placeholder={'поиск'} />

            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
                defaultValue={'Сортировка по'}
                options={[
                    {value:'title',name:'По названию'},
                    {value:'body',name:'По содержанию'}
                ]}/>
        </div>
    );
};

export default PostsFilter;
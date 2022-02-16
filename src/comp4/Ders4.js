import React from 'react';
import UserList from './UserList';
import PersonAdd from './PersonAdd';
import PersonList from './PersonList';
import PostList from './PostList';
import TodoList from './TodoList';


export default function Ders4() {
    return (
        <div>
            <h2>[Ders 4] - Fetch</h2>

            <UserList />
            <PersonAdd />
            <PersonList />
            <PostList />
            <TodoList />
            
        </div>
    )
}
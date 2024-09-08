import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CiSearch } from "react-icons/ci";
import UsersList from './UsersList';
import { fetchUsers } from '../store/usersSlice';

const Dashboard = () => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (searchVal) => {
        setSearchText(searchVal);
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            dispatch(fetchUsers({ searchTxt: searchText.trim() }));
        }
    }

    useEffect(() => {
        const fetchData = setTimeout(() => {
            dispatch(fetchUsers({ searchTxt: searchText.trim() }));
        }, 600);
        return () => {
            clearTimeout(fetchData);
        };
    }, [searchText, dispatch]);

    return (
        <div className='mx-auto max-w-xl sm:min-w-96'>
            <label className='block text-2xl font-medium py-5'>List View</label>
            <div className='flex items-center sticky top-2'>
                <input type="text" name="searchbar" id="searchbar" placeholder='Search User' value={searchText} onChange={(e) => handleSearch(e.target.value)} onKeyDown={handleKeyDown} className='outline-0 border-2 border-solid border-slate-400 rounded-xl py-1 pl-9 pr-3 grow' />
                <CiSearch className='absolute text-xl ml-3 text-slate-500' />
            </div>
            <div>
                <UsersList />
            </div>
        </div>
    )
}

export default Dashboard

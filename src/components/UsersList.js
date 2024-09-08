import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdClose } from "react-icons/io";
import { deleteUser } from '../store/usersSlice';
import ModalPopup from './ModalPopup';
import User from './User';

const UsersList = () => {
    const [expandedUser, setExpandedUser] = useState(null);
    const [isModalOpened, setModalOpened] = useState(false);
    const [deleteUserId, setDeleteUserId] = useState(null);
    const [currentEditingUser, setCurrentEditingUser] = useState(null);
    const users = useSelector(store => store.users.searchedUsers);
    const dispatch = useDispatch();

    const handleExpand = (id) => {
        if (!currentEditingUser) {
            if (expandedUser === id) setExpandedUser(null);
            else setExpandedUser(id);
        }
    }
    const openModal = () => {
        setModalOpened(true);
    }
    const closeModal = () => {
        setModalOpened(false);
        setDeleteUserId(null);
    }
    const setDeleteUser = (id) => {
        setDeleteUserId(id);
    }
    const handleCurrentEditingUser = (value) => {
        setCurrentEditingUser(value);
    }
    const cancelDelete = () => {
        closeModal();
    }
    const confirmDelete = () => {
        dispatch(deleteUser({ userId: deleteUserId }));
        closeModal();
    }

    return (
        <>
            {
                users.length ? users.map(user => {
                    return (
                        <User key={user.id} user={user} handleExpand={handleExpand} expanded={expandedUser} openModal={openModal} setDeleteUser={setDeleteUser} handleCurrentEditingUser={handleCurrentEditingUser} />
                    )
                }) : <div className='my-3 text-center'><span className='text-yellow-600'>No users available!</span></div>
            }
            <ModalPopup isOpen={isModalOpened} closeModal={closeModal}>
                <div className='flex justify-between items-center mb-5'>
                    <label>Are you sure you want to delete?</label>
                    <IoMdClose className='cursor-pointer text-slate-500 text-xl' onClick={closeModal} />
                </div>
                <div className='flex justify-end'>
                    <button type="button" className='cursor-pointer px-4 py-1 rounded-lg border-2 border-solid border-slate-300 mr-2' onClick={cancelDelete}>Cancel</button>
                    <button type="button" className='cursor-pointer px-4 py-1 rounded-lg border-2 border-solid border-red-600 bg-red-600 text-white' onClick={confirmDelete}>Delete</button>
                </div>
            </ModalPopup>
        </>
    )
}

export default UsersList

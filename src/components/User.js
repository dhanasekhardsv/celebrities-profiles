import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { TfiPencil } from "react-icons/tfi";
import { MdOutlineCancel } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { schema } from '../utils/schema';
import calculateAge from '../utils/calculateAge';
import getFirstLastNames from '../utils/getFirstLastNames';
import calculateNewDOB from '../utils/calculateNewDOB';
import { updateUser } from '../store/usersSlice';

const User = ({ user, expanded, handleExpand, openModal, setDeleteUser, handleCurrentEditingUser }) => {
    const { id, first, picture, last, dob, gender, country, description } = user;
    const isActive = expanded === id;
    const age = calculateAge(dob);
    const [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch();

    const enableEdit = () => {
        if (age >= 18) setEditMode(true);
    }
    const disableEdit = () => {
        setEditMode(false);
    }
    const openDeletePopup = () => {
        openModal();
        setDeleteUser(id);
    }
    const handleEdit = (val, enableVal) => {
        handleCurrentEditingUser(val);
        (enableVal === 'enable') ? enableEdit() : disableEdit();
    }
    const onSubmit = async (values) => {
        let { firstName, lastName } = getFirstLastNames(values.name);
        let newDOB = calculateNewDOB(dob, values.age);
        let updatedValues = {
            id: id,
            first: firstName,
            last: lastName,
            dob: newDOB,
            gender: values.gender,
            country: values.country,
            description: values.description
        }
        dispatch(updateUser(updatedValues));
        handleEdit(null, 'disable');
    }

    const { handleChange, handleSubmit, values, errors } = useFormik({
        initialValues: {
            name: `${first} ${last}`,
            age: age,
            gender: gender,
            country: country,
            description: description
        },
        validationSchema: schema,
        onSubmit
    });

    return (
        <div className='mt-4 px-4 py-2 rounded-lg border-2 border-solid border-slate-300'>
            <form onSubmit={handleSubmit}>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-between items-center'>
                        <img src={picture} alt={first} className='rounded-full mr-4' width={45} height={45} />
                        {!editMode ? (<label className='mr-4 text-xl font-medium'>{`${first} ${last}`}</label>) : (<div>
                            <input type="text" name="name" id="name" value={values.name} onChange={handleChange} className='outline-0 border-2 border-solid border-slate-300 rounded-lg py-1 px-2 max-w-40' />
                            {errors.name && <p className='text-xs text-red-600'>{errors.name}</p>}
                        </div>)}
                    </div>
                    <IoIosArrowDown className={`${isActive ? 'rotate-180' : ''} cursor-pointer text-slate-600 text-xl`} onClick={() => handleExpand(id)} />
                </div>
                {
                    isActive ? (
                        <div>
                            <div className='mt-4 min-[425px]:flex'>
                                <div className='mb-2 min-[425px]:mb-0 pr-3 min-[425px]:inline-block min-[425px]:basis-1/3'>
                                    <label className='text-slate-500'>Age</label>
                                    {!editMode && <p>{age} Years</p>}
                                    {editMode && (<>
                                        <input type="number" name="age" id="age" value={values.age} onChange={handleChange} className='outline-0 border-2 border-solid border-slate-300 rounded-lg py-1 px-2 mt-1 w-full max-w-full' />
                                        {errors.age && <p className='text-xs text-red-600'>{errors.age}</p>}
                                    </>)}
                                </div>
                                <div className="mb-2 min-[425px]:mb-0 pr-3 min-[425px]:inline-block min-[425px]:basis-1/3">
                                    <label className='text-slate-500'>Gender</label>
                                    {!editMode ? (<p>{gender}</p>) : (<>
                                        <select name="gender" id="gender" value={values.gender} onChange={handleChange} className='outline-0 border-2 border-solid border-slate-300 rounded-lg py-1 px-2 mt-1 w-full max-w-full'>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="transgender">Transgender</option>
                                            <option value="Rather not say">Rather not say</option>
                                            <option value="other">Other</option>
                                        </select>
                                        {errors.gender && <p className='text-xs text-red-600'>{errors.gender}</p>}
                                    </>)}
                                </div>
                                <div className="mb-2 min-[425px]:mb-0 pr-3 min-[425px]:inline-block min-[425px]:basis-1/3">
                                    <label className='text-slate-500'>Country</label>
                                    {!editMode ? (<p>{country}</p>) : (<>
                                        <input type="text" name="country" id="country" value={values.country} onChange={handleChange} className='outline-0 border-2 border-solid border-slate-300 rounded-lg py-1 px-2 mt-1 w-full max-w-full' />
                                        {errors.country && <p className='text-xs text-red-600'>{errors.country}</p>}
                                    </>)}
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label className='text-slate-500'>Description</label>
                                {!editMode ? (<p>{description}</p>) : (<>
                                    <textarea name="description" id="description" value={values.description} onChange={handleChange} className='block outline-0 border-2 border-solid border-slate-300 rounded-lg py-1 px-2 mt-1 max-w-full w-full min-h-32' />
                                    {errors.description && <p className='text-xs text-red-600'>{errors.description}</p>}
                                </>)}
                            </div>
                            <div className="flex justify-end mt-4">
                                <button type="button" className={`${editMode ? 'hidden' : 'block'} ml-4`} onClick={openDeletePopup}><RiDeleteBinLine className='text-2xl text-red-500' /></button>
                                <button type="button" className={`${editMode ? 'hidden' : 'block'} ml-4`} onClick={() => handleEdit(id, 'enable')}><TfiPencil className='text-2xl text-cyan-400' /></button>
                                <button type="button" className={`${editMode ? 'block' : 'hidden'} ml-4`} onClick={() => handleEdit(null, 'disable')}><MdOutlineCancel className='text-2xl text-red-500' /></button>
                                <button type="submit" className={`${editMode ? 'block' : 'hidden'} ml-4 ${Object.keys(errors).length ? 'opacity-40' : ''}`} disabled={Object.keys(errors).length}><SiTicktick className='text-xl text-green-500' /></button>
                            </div>
                        </div>
                    ) : null
                }
            </form>
        </div>
    )
}

export default User

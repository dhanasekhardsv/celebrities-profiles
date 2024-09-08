import * as yup from 'yup';

export const schema = yup.object().shape({
    name: yup.string().required('Name is required').max(20, 'Max chars limit is 20').min(3, 'Min 3 chars needed'),
    age: yup.number().required('Age is required').min(18, 'Must be greater than 17'),
    gender: yup.string().required('Gender is required').oneOf(['male', 'female', 'transgender', 'Rather not say', 'other'], 'Invalid selection'),
    country: yup.string().required('Country is required').min(1, 'Min 1 char needed').matches(/^[A-Za-z\s]+$/, 'Should not contain numbers'),
    description: yup.string().required('Description is required').max(500, 'Max chars limit is 500').min(50, 'Min 50 chars needed')
});
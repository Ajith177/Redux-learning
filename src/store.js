import {configureStore} from '@reduxjs/toolkit';
import Counterslice from './features/Counterslice';

export default configureStore({
    reducer:{
        counter:Counterslice,
    },
})

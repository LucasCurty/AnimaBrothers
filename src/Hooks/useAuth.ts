import { useContext } from 'react';
import { AuthContext } from '../Context/authGoogle';

export  function useAuth(){
    const value = useContext(AuthContext);
    return value;
}

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGitHubUser } from '../redux/gitHubSlice';

// Creamos el buscador 

const SearchUser = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        if (username.trim() !== '') {
            dispatch(fetchGitHubUser(username));
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Buscar usuario de GitHub..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );
};

export default SearchUser;

import { useSelector } from 'react-redux';

//Creamos el perfil de usuario

const UserProfile = () => {
    const { user, status, error } = useSelector((state) => state.github);

    if (status === 'loading') return <p>Cargando...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;
    if (!user) return <p>No se ha buscado ningún usuario aún.</p>;

    return (
        <div className="profile-card">
            <img src={user.avatar_url} alt="Avatar" />
            <h2>{user.name || 'Nombre no disponible'}</h2>
            <p>@{user.login}</p>
            <p>Seguidores: {user.followers}</p>
            <p>Repos públicos: {user.public_repos}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                Ver perfil en GitHub
            </a>
        </div>
    );
};

export default UserProfile;

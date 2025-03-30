import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Estado inicial
const initialState = {
    user: null,
    status: 'idle', // 'idle' el estado nos dice en qué fase está a petición
    // 'idle' quiere decir que no ha iniciado la petición
    error: null,
};

// Thunk para buscar un usuario en GitHub
// CreateAsyncThunk es una utilidad de Redux Tollkit que ayuda
// a manejar acciones asíncronas, como llamadas a APIs.
export const fetchGitHubUser = createAsyncThunk(
    'github/fetchGitHubUser',
    async (username) => {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error('Usuario no encontrado');
        }
        return response.json();
    }
);

// Crear el slice
const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGitHubUser.pending, (state) => {
                state.status = 'loading';
        })
            .addCase(fetchGitHubUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
        })
            .addCase(fetchGitHubUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
        });
    },
});

export default githubSlice.reducer;

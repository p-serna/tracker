<script>
    import axios from 'axios';

    let email = '';
    let password = ''; 

    async function login() {
        try {
            console.log(email, password);
            const response = await axios.post('http://localhost:8000/token', {
                username: email,
                password: password
            });
            localStorage.setItem('token', response.data.access_token);
        } catch (error) {
            console.error(error);
        }
    }
</script>

<form on:submit|preventDefault={login}>
    <input type="email" bind:value={email} placeholder="Email">
    <input type="password" bind:value={password} placeholder="Password">
    <button type="submit">Login</button>
</form>

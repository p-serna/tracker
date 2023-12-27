<script>
  import { onMount } from 'svelte';
  import axios from 'axios';
  import Login from './Login.svelte';

  let isAuthenticated = false;

  onMount(async () => {
      const token = localStorage.getItem('token');
      if (token) {
          try {
              const response = await axios.get('http://localhost:8000/users/me', {
                  headers: {
                      Authorization: `Bearer ${token}`
                  }
              });
              isAuthenticated = true;
              // Set user data as needed
          } catch (error) {
              console.error(error);
              isAuthenticated = false;
          }
      }
  });

  function logout() {
      localStorage.removeItem('token');
      isAuthenticated = false;
  }
</script>

{#if isAuthenticated}
  <p>User is authenticated</p>
  <button on:click={logout}>Logout</button>
{:else}
  <Login />
{/if}

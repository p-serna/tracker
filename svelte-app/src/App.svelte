<script>
  import {
    Auth0Context, 
    Auth0LoginButton, Auth0LogoutButton,
    isAuthenticated,
    userInfo
  } from '@dopry/svelte-auth0';
  import config from './auth_config.json';

const authConfig = {
  domain: config.domain,
  client_id: config.clientId,
}
</script>


<Auth0Context domain={authConfig.domain} client_id={authConfig.client_id}>
  <nav>
    {#if $isAuthenticated}
    Welcome {JSON.stringify($userInfo)}
    <Auth0LogoutButton class="btn">
      Logout
    </Auth0LogoutButton>
    {:else}
    You are not logged in, please log in
    <Auth0LoginButton class="btn btn-danger">
      Login now
    </Auth0LoginButton>
    {/if}
  </nav>
</Auth0Context>

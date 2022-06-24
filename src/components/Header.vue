<template>
  <nav class="header">
    <div class="left-header">
      <router-link style="margin: 0;" to="/"><img class="header-logo" alt="header-logo" src="@/assets/safedrive-logo.png"/></router-link>
      <router-link class="typed-logo" to="/">SafeDrive</router-link>
    </div>
    <div class="center-header">
        <router-link class="header-link" :to="{ path: '/', hash: '#technology' }">Technology</router-link>
        <router-link class="header-link" :to="{ path: '/', hash: '#team' }">Team</router-link>
        <router-link class="header-link" :to="{ path: '/', hash: '#faqs' }">FAQs</router-link>
    </div>
    <div class="right-header">
        <div v-if="user">
            <router-link to="/dashboard">
                Dashboard
            </router-link>
            <div style="color: white;" class="btn btn-secondary">
                Log out
            </div>
        </div>
        <div v-else>
            <router-link to="/login">
                <div style="color: white;" class="btn btn-secondary">
                    Login
                </div>
            </router-link>
            <a href="mailto:hello@safedrive.io" style="color: black; margin-left: 10px;">
                Contact Us
            </a>
        </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from 'vuex';
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';


// @ is an alias to /src
export default {
    name: 'Header',
    components: {},
    computed: {
    ...mapGetters({
        user: "auth/user",
        }),
    },
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 70px;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 2;
}
.header-logo {
    width: auto;
    height: 35px;
    margin-right: 10px;
}

.btn-horiz-social {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.left-header {
    display: flex;
    align-items: center;
}

a {
    text-decoration: none;
}

.typed-logo {
    font-size: 1.5em;
    font-weight: bold;
    color: #07111c;
}

.header-link {
    color: #454c55;
    margin-right: 20px;
    font-size: 1em;
    font-weight: bold;
}

i {
    font-size: 2em;
    margin-left: 20px;
    color: #454c55;
}

</style>
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
            <router-link class="header-link" to="/dashboard">
                Dashboard
            </router-link>
            <div @click="logout" style="color: white;" class="btn btn-secondary">
                Log out
            </div>
        </div>
        <div v-else>
            <router-link to="/login">
                <div style="color: white;" class="btn btn-secondary">
                    Login
                </div>
            </router-link>
            <a href="mailto:hello@safedrive.ml" style="color: black; margin-left: 10px;">
                Contact Us
            </a>
        </div>
    </div>
    <div @click="openMobileHeader()" class="burger-menu" style="display: none">
      <div class="burger-menu-icon">
        <i class="fas fa-bars"></i>
      </div>
    </div>
    <div @click="this.isMobileHeaderOpen = false;" v-if="isMobileHeaderOpen" class="mobile-header-container">
        <div class="mobile-header">
        <i style="cursor: pointer; margin-left: 0px !important;" class="material-icons" @click="this.isMobileHeaderOpen = false;">clear</i>
        <router-link to="/">HOME</router-link>
        <div class="mobile-header-links">
            <router-link class="header-link" :to="{ path: '/', hash: '#technology' }">TECHNOLOGY</router-link>
            <router-link class="header-link" :to="{ path: '/', hash: '#team' }">TEAM</router-link>
            <router-link class="header-link" :to="{ path: '/', hash: '#faqs' }">FAQs</router-link>
        </div>
        <div class="mobile-header-links">
            <router-link v-if="!user" to="/login">LOGIN</router-link>
            <router-link v-if="!user" to="/login">GET STARTED</router-link>
            <a style="cursor: pointer" v-if="user" @click="logout">SIGN-OUT</a>
        </div>
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
    data() {
        return {
        isMobileHeaderOpen: false,
        };
    },
    name: 'Header',
    components: {},
    computed: {
    ...mapGetters({
        user: "auth/user",
        }),
    },
    methods: {
        async logout() {
            await this.$store.dispatch("auth/logout");
            this.$store.commit("collectionsInfo/setCollections", null);
            this.$router.push("/");
        },
        openMobileHeader() {
            this.isMobileHeaderOpen = !this.isMobileHeaderOpen;
        },
    }
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

.mobile-header-container a {
    text-decoration: none;
    color: black;
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

.mobile-header-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  z-index: 103;
  padding: 10px;
}
.mobile-header {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mobile-header-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 850px) {
  .center-header {
    display: none;
  }
  .right-header {
    display: none;
  }
  .burger-menu {
    display: block !important;
  }
}


</style>
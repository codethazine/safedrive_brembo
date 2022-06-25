<template>
    <div class="login-container">
        <div class="login-section">
            <form @submit.prevent="login">
                <h3><b>Login to Your Account</b></h3>
                <div class="form-group">
                    <input type="text" class="form-control" id="email" v-model="email" placeholder="Email">
                </div>
                <div class="form-group pwd-container">
                    <input v-on:keyup.enter="login" :type="passwordFieldType" class="pwd-inputbox" v-model="password" placeholder="Password"/>
                    <i type="password" v-if="passwordFieldType === 'password'" @click="switchVisibility" class="material-icons pwd-vis-btn">visibility</i>
                    <i type="password" v-if="passwordFieldType === 'text'" @click="switchVisibility" class="material-icons pwd-vis-btn">visibility_off</i>
                </div>
                <router-link to="/forgot-password" class="forgot-password">Forgot password?</router-link>
                <div v-if="error" style="width: 300px; ">{{error}}</div>
                <button style="display: block" class="text-center btn btn-login btn-dark btn-block">Login</button>
            </form>
            
        </div>
        <div class="signup-container">
            <h3><b>New here?</b></h3>
            <p class="descr-message text-center">Sign up and join the Sensify revolution
            </p>
            <div class="text-center">
                <router-link to="/signup" class="homepage-button">
                    <button class="btn btn-signup btn-dark btn-block">Sign Up</button>
                </router-link>
            </div>
        </div>
    </div>
</template> 
<script>
import { mapActions } from "vuex";
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { mapGetters } from 'vuex';


// @ is an alias to /src
export default {
  name: 'LoginView',
  components: {},
  // If there is a user on login redirect to dashboard
  mounted() {
    if (this.user) {
      this.$router.push('/dashboard');
    }
  },
  data() {
        return {
            email: "",
            password: "",
            error: "",
            passwordFieldType: "password",
            strength: 0,
            finalMessageArr: []
        }
    },
    methods: {
        switchVisibility() {
            this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
        },
        ...mapActions({
            loginVue: "auth/login",
            loginSocial: "auth/loginSocial"
        }),
        async login() {
            try {
                await this.loginVue({
                email: this.email,
                password: this.password,
                });
                this.$router.push("/my-collections");
            } catch (error) {
                this.error = error;
            }
        },
        async loginWithSocial(social) {
            if (social === "Google") {
                user = await Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google })
                //await this.loginSocial(user);      
            }
            else if (social === "Facebook") {
                user = await Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Facebook })
                //await this.loginSocial(user);      
            }
        },
    },
    computed: {
    ...mapGetters({
        user: "auth/user",
        }),
    },
}


</script>
<style scoped>

.login-container {
    display: flex;
    flex-direction: row;
    padding: 0px;
}

.login-section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 87vh;
    flex-direction: column;
    background-size: cover;
    width: 60%;
}

.signup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 88vh;
    flex-direction: column;
    background-size: cover;
    background-image: url('../assets/safedrive-bg.jpg');
    width: 40%;
    margin-bottom: -3rem;
}

.form-control {
    margin: 10px 0;
}

.social-container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: space-evenly;
    align-items: center;
}
.social-btn {
    font-size: 20px;
    color: white;
    background-color: #222529;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 43px;
    margin-bottom: 10px;
}

.or-option-login {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7F7F7F; 
  text-align: center;
}

.or-option-login:after, .or-option-login:before {
  content: '';
  width: 100%;
  height: 1px;
  background: #7F7F7F; 
  margin: 0 10px;
}

.forgot-password {
  color: #7F7F7F;
  text-decoration: none;
}

.btn-login {
    width: 60%;
    margin: 10px auto;
}

.btn-signup {
    padding-left: 60px;
    padding-right: 60px;
}

.pwd-vis-btn {
    padding : 10px;
    font-size: 20px;
    color: #7F7F7F;
}

.pwd-container {
    display: flex;
    flex-direction: row;
    border: 1px solid #ced4da;
    border-radius: 5px;
    background : #fff;
    align-items : center;
    overflow: hidden;
    margin: 10px 0;
}
.pwd-inputbox {
    outline: none;
    border: none;
    background: none;
    font-size: 1em;
    padding: 0.375rem 0.75rem;
    color: inherit;
    flex : auto 1 1;
    width : 100%;
    background : none;
    background-color : transparent;
}

.btn-horiz-social {
    width: 100%;
    margin: 5px auto;
}

@media screen and (max-width: 700px) {
    .login-container {
        flex-direction: column;
    }
    .signup-container {
        width: 100%;
    }
    .login-container {
        width: 100% !important;
    }
    .login-section {
        width: 100% !important;
    }
}

</style>


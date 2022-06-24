<template>
    <div class="signup-container">
        <div v-if="!confirmPassword" class="signup-section">
            <div class="form-container">
            <form @submit.prevent="signUp">
                <h3 style="text-align: center;"><b>Signup to Your Account</b></h3>
                <p style="color: #7F7F7F; text-align: center;">Signup using social networks</p>
                <div class="social-container">
                    <div @click="loginWithSocial('Google')" style="display: flex; justify-content: space-between;" class="text-center btn btn-dark btn-horiz-social">
                        <a href="#" style="display: absolute; color: white; margin-left: 0"><i class="fab fa-google"></i></a>
                        Google
                        <a href="#" style="display: absolute; color: transparent; margin-left: 0"><i class="fab fa-google"></i></a>
                    </div>
                    <div @click="loginWithSocial('Facebook')" style="display: flex; justify-content: space-between;" class="text-center btn btn-dark btn-horiz-social">
                        <a href="#" style="display: absolute; color: white; margin-left: 0"><i class="fab fa-facebook"></i></a>
                        Facebook
                        <a href="#" style="display: absolute; color: transparent; margin-left: 0"><i class="fab fa-facebook"></i></a>
                    </div>
                </div>
                <p class="or-option-login">Or</p>
                <div class="form-group">
                    <input type="text" class="form-control" v-model="email" placeholder="Email">
                </div>
                <div class="form-group pwd-container">
                    <input v-on:input="checkPwdStrength" :type="passwordFieldType" class="pwd-inputbox" v-model="password" placeholder="Password"/>
                    <i type="password" v-if="passwordFieldType === 'password'" @click="switchVisibility" class="material-icons pwd-vis-btn">visibility</i>
                    <i type="password" v-if="passwordFieldType === 'text'" @click="switchVisibility" class="material-icons pwd-vis-btn">visibility_off</i>
                </div>
                <div class="pwd-str-checker">
                    <div class="pwd-str-checker-bar">
                        <div class="pwd-str-checker-bar-fill" :style="{width: strength + '%'}"></div>
                    </div>
                </div>
                <div class="tos-privacy-disclaimer">
                    <input type="checkbox" v-model="tosprivacy">
                    <span style="margin: 10px;">I agree to the <router-link to="/terms-of-service">Terms of Service</router-link> and <router-link to="/privacy-policy">Privacy Policy</router-link></span>
                </div>
                <div class="text-center">
                    <button class="btn btn-signup btn-dark btn-block">Sign Up</button>
                </div>
                <div v-if="error" class="error-msg">{{ error.message }}</div>
            </form>
            </div>
        </div>
            <div v-if="confirmPassword" class="pwd-confirmation-container">
            <h3>Enter your code. Please check your email</h3>
            <div style="display: flex; flex-direction: row; justify-content: space-evenly; align-items: center; width: 60%;">
                <input
                class=""
                type="text"
                v-model="code"
                />
                <button class="btn btn-dark btn-block" @click="confirmSignUp">Confirm Code</button>
                <div v-if="error" class="error-msg">{{ error.message }}</div>
            </div>
        </div>
    </div>
</template> 
<script>
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

// @ is an alias to /src
export default {
    name: 'Signup View',
    components: {},
    data() {
        return {
            email: "",
            password: "",
            error: "",
            confirmPassword: false,
            code: "",
            passwordFieldType: "password",
            strength: 0,
            tosprivacy: false
        }
    },
    methods: {
        checkPwdStrength() {
            let pwd = this.password
            let strength = 0
            if (pwd.match(/[a-z]/)) {
                strength += 1
            }
            if (pwd.match(/[A-Z]/)) {
                strength += 1
            }
            if (pwd.match(/[0-9]/)) {
                strength += 1
            }
            if (pwd.length > 7) {
                strength += 1
            }
            this.strength = strength * 25
        },
        switchVisibility() {
            this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
        },
        loginWithSocial(social) {
            if (social === "Google") {
                Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google })
            }
            else if (social === "Facebook") {
                Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Facebook })
            }
        },
        async signUp() {
            if (!this.email) {
                return this.error = {
                    message: "Email is required"
                }
            }
            if (!this.password) {
                return this.error = {
                    message: "Password is required"
                }
            }
            if (!this.tosprivacy) {
                return this.error = {
                    message: "You must agree to the Terms of Service and Privacy Policy"
                }
            }
            try {
                await this.$store.dispatch("auth/signUp", {
                email: this.email,
                password: this.password,
                });
                this.confirmPassword = true;
                this.error = null;
            } catch (error) {
                this.error = error;
            }
            },
            async confirmSignUp() {
            if (!this.email || !this.code) {
                return;
            }
            try {
                const { email, password, code } = this;
                await this.$store.dispatch("auth/confirmSignUp", {
                email,
                code,
                });
                await this.$store.dispatch("auth/login", {
                email,
                password,
                });
                this.$router.push("/my-collections");
            } catch (error) {
                console.log(error);
                this.error = error;
            }
        },

    }
}


</script>
<style scoped>
.pwd-confirmation-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 87vh;
  flex-direction: column;
  background-image: url('../assets/safedrive-bg.jpeg');  
  background-size: cover;
}

.form-container {
    background-color: #fff;
    height: 80%;
    padding: 3rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e6e6e6;
}
.signup-section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 87vh;
    flex-direction: column;
    background-size: cover;
    width: 100%;
}

.signup-section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 87vh;
    flex-direction: column;
    background-size: cover;
    width: 40%;
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

.btn-signup {
    margin-top: 10px;
    padding-left: 60px;
    padding-right: 60px;
}

.pwd-vis-btn {
    padding : 10px;
    font-size: 20px;
    color: #7F7F7F;
    cursor: pointer;
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
.pwd-str-checker-bar {
    width: 100%;
    height: 5px;
    background-color: #ced4da;
    border-radius: 5px;
}
.pwd-str-checker-text {
    font-size: 0.8em;
    color: #7F7F7F;
}
.pwd-str-checker-bar-fill {
    height: 100%;
    background-color: #28a745;
    border-radius: 5px;
}

.tos-privacy-disclaimer {
    display: flex;
    flex-direction: row ;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}
.error-msg {
    margin-top: 10px;
    color: #dc3545;
    font-size: 0.8em;
}

.btn-horiz-social {
    width: 100%;
    margin: 5px auto;
}

@media screen and (max-width: 1024px) {
    .signup-section {
        width: 100%;
    }
}
</style>


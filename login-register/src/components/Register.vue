<template>
     <div>
        <h2>Register</h2>
        <p>I know, it's ridiculous but I wanted to make an user service. </p>
        <p>You can join here to my service, don't worry also you have an option for delete every own information.</p>
        <div>
            <label>Username</label><br>
            <input type="text" placeholder="Tony Stark" 
            :class="{'valid':!$v.username.$error && $v.username.$dirty,'invalid':$v.username.$error && !$v.username.dirty }"
            v-model.trim="username" @input="setUsername($event.target.value)">
            <div class="error" v-if="$v.username.$error && !$v.username.dirty">
                <div v-if="!$v.username.required">Field is required</div>
                <div v-if="!$v.username.minLength">Name must have at least {{$v.username.$params.minLength.min}} letters.</div>
                <div v-if="!$v.username.maxLength">Name must have most {{$v.username.$params.maxLength.max}} letters.</div>
            </div>
            <div class="green" v-if="!$v.username.$error && $v.username.$dirty">
                Success !
            </div>
        </div>
        <div>
            <label>Email Address</label><br>
            <input type="email" 
            :class="{'valid':!$v.email.$error && $v.email.$dirty,'invalid':$v.email.$error && !$v.email.dirty }"
            v-model.trim="email" placeholder="tonystart@example.com" @input="setEmail($event.target.value)" >    
            <div class="error" v-if="$v.email.$error && !$v.email.dirty">
                <div v-if="!$v.email.required">Field is required</div>
                <div v-if="!$v.email.email">Field must be email.</div>
            </div>
            <div class="green" v-if="!$v.email.$error && $v.email.$dirty">
                Success !
            </div>
        </div>
        <div>
            <label>Password</label><br>
            <input type="password"
            :class="{'valid':!$v.password.$error && $v.password.$dirty,'invalid':$v.password.$error && !$v.password.dirty }"
            v-model.trim="password" @input="setPassword($event.target.value)">    
            <div class="error" v-if="$v.password.$error && !$v.password.dirty">
                <div v-if="!$v.password.required">Field is required</div>
                <div v-if="!$v.password.minLength">Field must have at least {{$v.password.$params.minLength.min}} letters.</div>
                <div v-if="!$v.password.maxLength">Field must have most {{$v.password.$params.maxLength.max}} letters.</div>
            </div>
            <div class="green" v-if="!$v.password.$error && $v.password.$dirty">
                Success !
            </div>
        </div>
        <div>
            <label>Re-Password</label><br>
            <input type="password" 
            :class="{'valid':!$v.repeatPassword.$error && $v.repeatPassword.$dirty,'invalid':$v.repeatPassword.$error && !$v.repeatPassword.dirty }"  
            v-model.trim="repeatPassword" @input="setRepeatPassword($event.target.value)">    
            <div class="error" v-if="$v.repeatPassword.$error && !$v.repeatPassword.dirty">
                <div v-if="!$v.repeatPassword.required">Field is required</div>
                <div v-if="!$v.repeatPassword.sameAsPassword">Password and Re-password are not match.</div>
            </div>
            <div class="green" v-if="!$v.repeatPassword.$error && $v.repeatPassword.$dirty">
                Success !
            </div>
        </div>
        <div>
            <label >
                <input type="checkbox" v-model.trim="terms" @change="$v.terms.$touch()"> 
                Kullanıcı Sözleşmesini kabul ediyorum.
            </label>
            <div class="error" v-if="$v.terms.$error && !$v.terms.dirty">
                <div v-if="!$v.terms.sameAsTerms">This place can not be empty.</div>
            </div>
            <div class="green" v-if="!$v.terms.$error && $v.terms.$dirty">
                Success !
            </div>
        </div>
        <div>
            <button class="btn-panel custom-panel" :disabled='$v.$invalid ' @click="submit()" >Sign Up</button>
            <button class="btn-github"><img src="@/assets/github.svg" width="25px" height="25px" alt=""> Sign Up With GitHub</button>
        </div>
    </div>
</template>

<script>
import { required, minLength,maxLength,email,sameAs } from 'vuelidate/lib/validators'


export default {

    name:"register", 
    data() {
        return {
            email:'',
            username:'',
            password:'',
            repeatPassword:'',
            terms: false,

        }
    },
    validations: {
        email: {
            required,
            email
        },
        username: {
            required,
            minLength:minLength(4),
            maxLength:maxLength(20),
        },
        password:{
            required,
            minLength:minLength(8),
            maxLength:maxLength(20),
        },
        repeatPassword : {
            required,
            sameAsPassword: sameAs('password')
        },
        terms : {
            checked(val) {
                return this.terms === "on" ? true : val;
            }
        }
    },
    methods:{
        setEmail(email) {
            this.email = email;
            this.$v.email.$touch();

        },
        setUsername(username) {
            this.username = username;
            this.$v.username.$touch();
            
        },
        setPassword(password) {
            this.password = password;
            this.$v.password.$touch();
        },
        setRepeatPassword(password) {
            this.repeatPassword = password;
            this.$v.repeatPassword.$touch();
        },
        submit(){
            alert("işlem başarılır\nemail address:"+this.email+"\npasw: "+this.password);
        }
    }
}
</script>

<style scoped>
input {
    margin-top: 10px;
    display: inline-block;
    height: 25px;
    width: 60%;
    font: 19px 'Inconsolata', monospace;
    border:1px solid #9A9A9A;
    border-radius: 5px;
    padding: 5px;
}
input:focus,button:focus {
    outline: 0;
}   
input[type="checkbox"]{
    width: 30px;
}
.btn-github {
    width: 60%;
    margin-top: 15px;
    cursor: pointer;
    padding: 10px 30px;
    font-size: 20px;
    background-color: #1B1817;
    border: none;
    color: #fff;
    border-radius: 10px;
    font-family: 'Inconsolata', monospace;
}
.btn-github:hover {
    background-color: #1e1e1e;
    color: #4f65dd;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.btn-panel { 
    float:right;
    cursor: pointer;
    padding: 10px 30px;
    font-size: 20px;
    background-color: #FFDD00;
    border: none;
    border-radius: 10px;
    font-family: 'Inconsolata', monospace;
}
.btn-panel:hover { 
    background-color: #FFD000;
    color: #4f65dd;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: block;
}
.custom-panel {
    width: 60%;
    float: none;
}
.error {
    color: #dc3545;
}
.green {
    color:#198754
}
div {
    margin-top: 10px;
}
.valid {
    border: 1.5px solid #198754
}
.invalid {
    border:1.5px solid #dc3545;
}

</style>

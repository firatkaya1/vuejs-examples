<template>
   <div>
       <h2>Login</h2>
        <p>Welcome again, Login and read easily.</p>
        <div style="margin-top: 50px;">
            <label>Username or Email Address</label><br>
            <input type="text" placeholder="tony@stark.com"
            :class="{'valid':!$v.email.$error && $v.email.$dirty,'invalid':$v.email.$error && !$v.email.dirty }"
            v-model.trim="email" @input="setEmail($event.target.value)">
            <div class="error" v-if="$v.email.$error && !$v.email.dirty">
                <div v-if="!$v.email.required">Field is required</div>
                <div v-if="!$v.email.email">Field must be email</div>
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
        <div class="forgot-pass">
            <a href="#">Şifremi unuttum</a>
        </div>
        <div style="margin-top: 10px;">
            <label >
                <input type="checkbox"> 
                Remember me
            </label>
        </div>
        <div>
            <button class="btn-panel custom-panel" :disabled='$v.$invalid' @click="submit()">Sign In</button>
            <button class="btn-github"><img src="@/assets/github.svg" width="25px" height="25px" alt=""> Sign In With GitHub</button>
        </div>
   </div>
</template>

<script>
import { required,minLength,maxLength,email } from 'vuelidate/lib/validators'

export default {

    name:"login",
    data() {
        return {
            email:'',
            password:''
        }
    },
    validations : {
        email : {
            required,
            email
        },
        password: {
            minLength:minLength(8),
            maxLength:maxLength(20)
        }
    },
    methods:{
        setEmail(val){
            this.email = val;
            this.$v.email.$touch();
        },
        setPassword(val){
            this.password = val;
            this.$v.password.$touch();
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

div {
    margin-top: 10px;
}
.valid {
    border: 1.5px solid #198754
}
.invalid {
    border:1.5px solid #dc3545;
}
.error {
    color: #dc3545;
}
.green {
    color:#198754
}
</style>
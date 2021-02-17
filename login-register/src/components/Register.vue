<template>
     <div>
        <h2>Register</h2>
        <p>I know, it's ridiculous but I wanted to make an user service. </p>
        <p>You can join here to my service, don't worry also you have an option for delete every own information.</p>
        <div>
            <label>Username</label><br>
            <input type="text" placeholder="Tony Stark">
            <p class="red" >
                En az bir küçük harf gerekiyor.
            </p>
            <p class="red" >
                En az bir büyük harf gerekiyor.
            </p>
            <p class="green">
                İşte bu ! Harika gözüküyor.
            </p>
        </div>
        <div>
            <label>Email Address</label><br>
            <input type="email" placeholder="tonystart@example.com" >    
        </div>
        <div>
            <label>Password</label><br>
            <input type="password">    
        </div>
        <div>
            <label>Re-Password</label><br>
            <input type="password">    
        </div>
        <div>
            <label >
                <input type="checkbox"> 
                Kullanıcı Sözleşmesini kabul ediyorum.
            </label>
        </div>
        <div>
            <button class="btn-panel custom-panel" >Sign Up</button>
            <button class="btn-github"><img src="@/assets/github.svg" width="25px" height="25px" alt=""> Sign Up With GitHub</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"register"
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
.red {
    color: red;
    display: none;
}
.green {
    color: green;
    display: none;
}
div {
    margin-top: 10px;
}
</style>

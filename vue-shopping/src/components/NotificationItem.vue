<template>
    <div >
        {{notification.message}}
        <div class="exit">
            <img src="../assets/x.svg" width="15px" height="15px" @click="deleteNotification(notification.id)" alt="">
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name:"NotificationItems",
    props:['notification'],
    methods:mapMutations('notification',['deleteNotification']),
    mounted(){
        setTimeout(() => {
            this.deleteNotification(this.notification.id)
        }, 4000);
    }
}
</script>

<style scoped>
.exit {
    float: right;
    cursor: pointer;
}
</style>
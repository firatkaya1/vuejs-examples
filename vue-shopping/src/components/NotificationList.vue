<template>
    <div class="box">
        <div v-for="notification in notifications" :key="notification.id" class="item" v-bind:class="{success:notification.type==='success',error:notification.type==='error'}">
            <NotificationItem v-bind:notification="notification" />
        </div>
    </div>
</template>

<script>
import NotificationItem from './NotificationItem';
import {  mapState } from 'vuex';

export default {
    name:"NotificationList",
    computed:mapState({
        notifications:state => state.notification.notifications
    }),
    components:{
        NotificationItem
    }
}
</script>

<style scoped>

.box {
    position: fixed;
    right: 20px;
    height: auto;
    margin-top: 5px;
    z-index: 5;
    max-width: 300px;
}
.item {
    min-width: 300px;
    height: auto;
    padding: 10px;
    margin-top: 10px;
    font-weight: bold;
    border-radius: 15px;
    display: inline-block;
}
.success {
    background-color: #fd0;
}
.error {
    background: #e25454;
}
</style>
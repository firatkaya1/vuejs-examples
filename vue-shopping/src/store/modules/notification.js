const state = {
    notifications:[]
}

const getters = {
    getNotifications:state => state.notifications
};

const actions = {
    
};

const mutations = {
    pushNotification(state,notify){
        state.notifications.push(notify);
    },
    deleteNotification(state,id){
        state.notifications = state.notifications.filter((item) => item.id !== id);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
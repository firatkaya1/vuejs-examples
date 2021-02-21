
const state = {
    count:0,
    totalPrice:0
}

const getters = {
    getCount:state => state.count,
    getTotalPrice:state => state.totalPrice.toFixed(2)
};

const actions = {
    increaseBasket(){
        let total = 0;
        for (let index = 1; index <= 10; index++) {
            if(localStorage.getItem(index)!==null){
                total = total + JSON.parse(localStorage.getItem(index)).total
                state.totalPrice =  state.totalPrice + JSON.parse(localStorage.getItem(index)).newPrice
            }
        }
        state.count = total;
    },
    decreaseBasket(){
        let total = 0;
        for (let index = 1; index <= 10; index++) {
            if(localStorage.getItem(index)!==null){
                total = total - JSON.parse(localStorage.getItem(index)).total
                state.totalPrice = state.totalPrice - JSON.parse(localStorage.getItem(index)).newPrice
            }
        }
        state.count = total;
    }
};


const mutations = {
    
};

export default {
    state,
    getters,
    actions,
    mutations
};
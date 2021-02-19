
const state = {
    count:0
}

const getters = {
    getCount:state => state.count
};

const actions = {
    increaseBasket(){
        let total = 0;
        for (let index = 1; index <= 10; index++) {
            if(localStorage.getItem(index)!==null){
                total = total + JSON.parse(localStorage.getItem(index)).total
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
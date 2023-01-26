export default store;
const namespaced = true;

const state = {
    user: {},
    isLoggedIn: false
};

localStorage.setItem("EstaLogeado",false)

const getters = {
    isLoggedIn: state => state.isLoggedIn,
    user: state => state.user
};

const actions = {
    async loginUser({ dispatch }, user) {
        await fetch('https://admin-grupo09.proyecto2022.linti.unlp.edu.ar/auth/login_jwt',{
            method: "POST",
            body: JSON.stringify(user),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        await dispatch('fetchUser')
    },
    async fetchUser({ commit }) {
    await fetch('https://admin-grupo09.proyecto2022.linti.unlp.edu.ar/api/me/profile',{
        method: "GET"
    })
        .then(({ user }) => commit('setUser', user))
    },
    async logoutUser({ commit }) {
        await fetch('https://admin-grupo09.proyecto2022.linti.unlp.edu.ar/auth/logout_jwt',{
            method: "GET",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });
        commit('logoutUserState');
    }
};

const mutations = {
    setUser(state, user) {
        state.isLoggedIn = true;
        state.user = user;
    },
    logoutUserState(state) {
        state.isLoggedIn = false;
        state.user = {};
    }
};

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
};

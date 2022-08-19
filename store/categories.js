export const state = () => ({
    list: JSON.parse(localStorage.getItem('categories')) || []
});

export const mutations = {
    add(state, title) {
        state.list.push({
            title
        });
        localStorage.setItem('categories', JSON.stringify(state.list));
    },
    remove(state, { title }) {
        state.list.splice(state.list.indexOf(title), 1);
        localStorage.setItem('categories', JSON.stringify(state.list));
    },
};
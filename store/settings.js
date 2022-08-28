export const state = () => ({
    primaryColor: localStorage.getItem('primary-color') || '#3B3561'
});

export const mutations = {
    update(state, object) {
        localStorage.setItem(object.key, object.value);
    }
};
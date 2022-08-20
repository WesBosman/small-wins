export const state = () => ({
    list: JSON.parse(localStorage.getItem('categories')) || []
});

export const mutations = {
    add(state, title) {
        state.list.push({
            title: title,
            total: 0,
            items: [],
        });
        localStorage.setItem('categories', JSON.stringify(state.list));
    },
    update(state, object) {
        let { selectedCategory, item } = object;
        selectedCategory.items.push(item);
        selectedCategory.total += parseFloat(item.price);
        localStorage.setItem('categories', JSON.stringify(state.list));
    },
    remove(state, { title }) {
        state.list.splice(state.list.indexOf(title), 1);
        localStorage.setItem('categories', JSON.stringify(state.list));
    },
};
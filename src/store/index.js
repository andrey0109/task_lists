import { createStore } from "vuex";
export default createStore({
  state: { tasks: [] },
  mutations: {
    addTask(e, t) {
      e.tasks.push(t);
    },
    deleteTask(e, t) {
      e.tasks.splice(t, 1);
    },
    editTask(e, t) {
      e.tasks[t.index] = t.editedTask;
    },
  },
  actions: {
    addTask({ commit: e }, t) {
      e("addTask", t);
    },
    deleteTask({ commit: e }, t) {
      e("deleteTask", t);
    },
    editTask({ commit: e }, t) {
      e("editTask", t);
    },
  },
  modules: {},
});

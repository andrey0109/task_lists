<template>
  <div id="tasks">
    <h2>Список задач</h2>
    <form @submit.prevent="addTask">
      <label for="taskName">Название задачи:</label>
      <input type="text" id="taskName" v-model="newTaskName" />
      <button type="submit">Добавить задачу</button>
    </form>

    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }}
        <div>
          <button @click="editTask(task.id)">Редактировать</button>
          <button @click="deleteTask(task.id)" id="remove_button">
            Удалить
          </button>
        </div>
      </li>
    </ul>

    <div v-if="editingTask">
      <h3>Редактирование задачи</h3>
      <input type="text" v-model="editingTaskName" />
      <button @click="saveEditedTask">Сохранить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskListPage",
  data() {
    return {
      tasks: [],
      newTaskName: "",
      editingTask: null,
      editingTaskName: "",
    };
  },
  created() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  },
  methods: {
    addTask() {
      if (!this.newTaskName.trim()) return;
      const newTask = {
        id: this.tasks.length + 1,
        name: this.newTaskName.trim(),
      };
      this.tasks.push(newTask);
      this.saveTasks();
      this.newTaskName = "";
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
      this.editingTask = null;
      this.saveTasks();
    },
    editTask(taskId) {
      const findTask = this.tasks.find((item) => item.id === taskId);
      if (!findTask) return;
      this.editingTask = findTask;
      this.editingTaskName = findTask.name;
    },
    saveEditedTask() {
      if (!this.editingTaskName.trim()) return;
      this.editingTask.name = this.editingTaskName.trim();
      this.editingTask = null;
      this.saveTasks();
    },
    saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
};
</script>

<style>
#tasks {
  background-image: url("../assets/background1.jpg");
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  font-family: "Times New Roman", Times, serif;
  justify-content: start;
  color: white;
  font-size: 4rem;
}

label {
  color: white;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 24px;
  font-weight: 500;
}
form {
  width: 100%;
  max-width: 768px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

input {
  border-radius: 20px;
  height: 40px;
  width: 300px;
  flex-grow: 1;
  text-align: center;
}

#remove_button {
  background: red;
}

button {
  text-align: center;
  font-size: 1rem;
  color: white;
  cursor: pointer;
  text-decoration: none;
  background-color: rgb(93 144 131);
  border: 2px solid white;
  border-radius: 20px;
  padding: 10px 20px;
}

button:hover {
  transform-origin: center;
  transform: scale(1.05);
  transition: 0.3s ease-in-out;
  background-color: rgb(0, 0, 0);
}

ul {
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: max-content;
  border-radius: 20px;
  background-color: aliceblue;
  list-style: none;
  padding: 16px;
}

li {
  width: fit-content;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px;
  align-items: center;
  font-size: 1.5rem;
}

li > div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

h3 {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: white;
  font-size: 1.5rem;
  padding-top: 40px;
}
</style>

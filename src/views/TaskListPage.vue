<template>
  <div id="tasks">
    <h2>Список задач</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }}
        <button @click="editTask(task)">Редактировать</button>
        <button @click="deleteTask(task.id)">Удалить</button>
      </li>
    </ul>

    <form @submit.prevent="addTask">
      <label for="taskName">Название задачи:</label>
      <input type="text" id="taskName" v-model="newTaskName" />
      <button type="submit">Добавить задачу</button>
    </form>

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
    editTask(task) {
      this.editingTask = task;
      this.editingTaskName = task.name;
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
  padding-right: 20px;
  font-size: 2rem;
  font-weight: 500;
}
form {
  display: flex;
  justify-content: space-between;
}

input {
  border-radius: 20px;
  height: 40px;
  width: 200px;
  text-align: center;
}

button {
  height: 45px;
  margin-left: 10px;
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
  transform: scale(1.1);
  transition: 1s;
  background-color: rgb(0, 0, 0);
}

ul {
  height: max-content;
  border-radius: 20px;
  background-color: aliceblue;
  list-style: none;
}

li {
  font-size: 1.5rem;
}

h3 {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: white;
  font-size: 1.5rem;
  padding-top: 40px;
}
</style>

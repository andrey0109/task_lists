<template>
  <section id="home">
    <header class="title">
      <h1>Добро пожаловать в Таск-менеджер!</h1>
    </header>
    <button class="button" @click="$router.push('/tasks')">
      Перейти к задачам
    </button>
  </section>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
#home {
  background-image: url("../assets/background.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  color: white;
  text-align: center;
  margin-bottom: 20px;
}

h1 {
  font-size: 4rem;
}

.button {
  text-align: center;
  letter-spacing: 0.3cap;
  color: white;
  cursor: pointer;
  text-decoration: none;
  background-color: rgb(174, 0, 255);
  border: 2px solid white;
  border-radius: 20px;
  padding: 10px 20px;
}

.button:hover {
  transform-origin: center;
  transform: scale(1.1);
  transition: 1s;
  background-color: rgb(0, 0, 0);
}
</style>

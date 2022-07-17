<template>
  <form @submit.prevent action="">
    <h4>Создание поста</h4>
    <!-- двухстороннее связывание через евент -->
    <!-- <input v-bind:value="post.title" @input="title = $event.target.value" class="input" type="text" placeholder="Название" />
    <input v-bind:value="post.body" @input="body = $event.target.value" class="input" type="text" placeholder="Описание" /> -->
    <!-- <input v-model="post.title" class="input" type="text" placeholder="Название" />
    <input v-model="post.body" class="input" type="text" placeholder="Описание" /> -->
    <my-input v-focus v-model="post.title" type="text" placeholder="Название" />
    <my-input v-model="post.body" type="text" placeholder="Описание" />
    <my-button style="align-self: flex-end; margin-top: 15px" @click="createPost">Создать</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        post: "",
      };
    },
  },
  // watch: {
  //   post: {
  //     handler(newVal) {
  //       console.log(newVal);
  //     },
  //     deep: true,
  //   },
  // },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>

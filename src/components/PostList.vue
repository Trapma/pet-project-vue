<template>
  <div v-if="posts.length">
    <h3>Список пользователей</h3>
    <transition-group name="post-list">
      <post-item v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)" />
    </transition-group>
  </div>
  <h2 v-else style="color: red">Список постов пуст</h2>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
.post-list-item {
}
/* .post-list-move, */
.post-list-enter-active,
.post-list-leave-active {
  /* transition: all 1s ease; */
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  /* transform: translateY(30px); */
  transform: translateX(130px);
}
.post-list-move {
  transition: all 0.4s ease;
}
</style>

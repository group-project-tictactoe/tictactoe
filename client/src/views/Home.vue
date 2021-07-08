<template>
  <div class="home">
    <EnterName></EnterName>

    <BoardComponent></BoardComponent>
  </div>
</template>

<script>
import EnterName from '../components/EnterName.vue';
import BoardComponent from '../components/Board.vue';

export default {
  name: 'Home',
  components: {
    EnterName,
    BoardComponent,
  },
};
</script>

<template>
  <v-app>
    <div class="">
      <h1>tictactoe</h1>
      <Game></Game>
    </div>
  </v-app>
</template>

<script>
import { io } from 'socket.io-client';
import Game from './views/Game.vue';
const socket = io('http://localhost:3000');
export default {
  name: 'App',
  components: { Game },
  mounted() {
    socket.on('connect', () => {
      console.log('connected with id: ', socket.id);
    });
  },
};
</script>

<style></style>

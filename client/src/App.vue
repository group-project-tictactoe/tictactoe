<template>
  <div>
    <h1>tictactoe</h1>
  </div>
</template>

<script>
import {io} from 'socket.io-client'
const socket = io('http://localhost:3000')

export default {
  name: 'App',
  mounted() {
    socket.on('connect', () => {
      console.log('connected with id: ', socket.id);
    })
  }
}
</script>

<style>

</style>
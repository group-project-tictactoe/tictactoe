<template>
  <div>
    
    <div class="relative pt-0 sm:px-6 lg:px-8 max-w-lg">

        <nav class="flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
          <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div class="flex items-center justify-between w-full md:w-auto">
              <router-link class="sr-only" to="/"></router-link>
            </div>
          </div>
        </nav>

        <router-view></router-view>

    </div>

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
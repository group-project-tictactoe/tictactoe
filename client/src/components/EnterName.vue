<template>
  <div>
      <div id="login-sub-section">
            <h2 class="mt-4 text-center text-6xl font-mono tracking-wider">
                <span class="text-gray-300 uppercase">TIC TAC TOE</span>
            </h2>
            <h2 class="mt-6 text-center text-3xl font-medium">
                <span class="text-yellow-500">Enter your name</span><span class="text-gray-200"> to play</span>
            </h2>
        </div>

        <!-- <div v-if="isError">
            <h2 class="mt-6 text-center text-lg font-medium text-red-600">
                {{ errorMsg }}
            </h2>
        </div> -->

        <form id="login-form" class="mt-8 space-y-6">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
                <div>
                    <input v-model="playerName" id="playerName" name="playerName" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Your name"/>
                </div>
            </div>

        <div>
        <button      type="submit" class="group relative w-full flex justify-center py-2 px-4 transition duration-150 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-yellow-600 group-hover:text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
            </span>
            Enter Game
        </button>
        </div>
        </form>

  </div>
</template>

<script>
export default {
    name: 'EnterName',
    data () {
        return {
            playerName: ''
        }
    }
}
</script>

<style>

</style>
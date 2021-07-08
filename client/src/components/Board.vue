<template>
  <div class="board-game">
      <h1>NOTE: Ini Board Component!!!</h1>

      <div class="board x" id="board">

          <div class="cell x" data-cell></div>
          <div class="cell circle" data-cell></div>
          <div class="cell" data-cell></div>
          <div class="cell" data-cell></div>
          <div class="cell" data-cell></div>
          <div class="cell" data-cell></div>
          <div class="cell" data-cell></div>
          <div class="cell" data-cell></div>
          <div class="cell" data-cell></div>

      </div>

      <div class="winning-message" id="winningMessage">
          <div data-winning-message-text>O Menang!</div>
          <button id="restartButton">Main lagi</button>
      </div>

  </div>
</template>

<script>
export default {
    name: 'Board'
}
</script>

<style>

*, *::after, *::before {
    box-sizing: border-box;
}

/* Buat template formula ukuran di styling bawah */
:root {
    --cell-size: 100px;
    --mark-size: calc(var(--cell-size) * 0.9);
}

.board-game {
    margin: 0;
}

/* START - Styling main boardnya */
.board {
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-content: center;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(3, auto)
}

.cell {
    width: var(--cell-size);
    height: var(--cell-size);
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
}
/* END - Styling main boardnya */


/* START - Ngilangin garis border kanan kiri atas bawah */
.cell:first-child,
.cell:nth-child(2),
.cell:nth-child(3) {
    border-top: none;
}

.cell:nth-child(3n + 1) {
    border-left: none;
}

.cell:nth-child(3n + 3) {
    border-right: none;
}

.cell:last-child,
.cell:nth-child(8),
.cell:nth-child(7) {
    border-bottom: none;
}
/* END - Ngilangin garis border kanan kiri atas bawah */


/* Buat mastiin gak bisa klik kotak yg udah ada isi X atau O */
.cell.x,
.cell.circle {
    cursor: not-allowed;
}

.cell.x::before,
.cell.x::after,
.cell.circle::before {
    background-color: black;
}

/* Buat efek hover di kotak yg masih kosong dan bisa diklik */
.board.x .cell:not(.x):not(.circle):hover::before,
.board.x .cell:not(.x):not(.circle):hover::after,
.board.circle .cell:not(.x):not(.circle):hover::before {
    background-color: rgba(156, 163, 175);
}

.cell.x::before,
.cell.x::after,
.board.x .cell:not(.x):not(.circle):hover::before,
.board.x .cell:not(.x):not(.circle):hover::after {
   content: '';
   position: absolute;
   width: calc(var(--mark-size) * 0.15);
   height: var(--mark-size);
}


/* START - styling garis untuk membentuk X */
.cell.x::before,
.board.x .cell:not(.x):not(.circle):hover::before {
    transform: rotate(45deg);
}

.cell.x::after,
.board.x .cell:not(.x):not(.circle):hover::after {
    transform: rotate(-45deg);
}
/* END - styling garis untuk membentuk X */


.cell.circle::before,
.cell.circle::after,
.board.circle .cell:not(.x):not(.circle):hover::before,
.board.circle .cell:not(.x):not(.circle):hover::after {
   content: '';
   position: absolute;
   border-radius: 50%;
}

.cell.circle::before,
.board.circle .cell:not(.x):not(.circle):hover::before {
    width: var(--mark-size);
    height: var(--mark-size);
}

.cell.circle::after,
.board.circle .cell:not(.x):not(.circle):hover::after {
    width: calc(var(--mark-size) * 0.7);
    height: calc(var(--mark-size) * 0.7);
    background-color: rgba(107, 114, 128);
}

/* Pesan yg muncul pas menang (harus pakai class .show di bawah) */
.winning-message {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 5rem;
    flex-direction: column;
}

/* Efek non-hover button RESTART GAME */
.winning-message button {
    font-size: 3rem;
    color: black;
    background-color: white;
    border: 1px solid black;
    padding: .25em .5em;
    cursor: pointer;
}

/* Efek hover button RESTART GAME */
.winning-message button:hover {
    background-color: black;
    color: white;
    border-color: white;
}

/* Class .show dipasang pas udah ada yg menang */
.winning-message.show {
    display: flex;
}

</style>
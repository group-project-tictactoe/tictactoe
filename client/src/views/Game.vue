<template>
  <div class="play-ground">
    <div class="players">
      <table>
        <tbody>
          <tr>
            <td>
              <div :class="{ activePlayer: activePlayer == 'x' }">
                <i class="fas fa-times"></i>
                <span style="float: right;">-</span>
              </div>
            </td>
            <td>
              <div :class="{ activePlayer: activePlayer == 'o' }">
                <i class="far fa-circle"></i>
                <span style="float: right;">-</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style="text-align: center;font-size: 20px;margin: 10px 0px;">
      It is <span style="text-transform: uppercase;color: #14bdac;font-weight: bold;">{{ activePlayer }}</span> turn!
    </p>
    <div class="play">
      <div class="result-overlay" id="result-overlay">
        <p id="p-overlay">
          <span class="winner">
            <i class="fas fa-times" v-if="winner == 'x'"></i>
            <i class="far fa-circle" v-if="winner == 'o'"></i>
          </span>
          WON
        </p>
      </div>
      <table>
        <tbody>
          <tr>
            <td style="border-top: 0px;border-left: 0px;" @click="fillInCell(0)" id="cell_0"></td>
            <td style="border-top: 0px;" @click="fillInCell(1)" id="cell_1"></td>
            <td style="border-top: 0px;border-right: 0px;" @click="fillInCell(2)" id="cell_2"></td>
          </tr>
          <tr>
            <td style="border-left: 0px;" @click="fillInCell(3)" id="cell_3"></td>
            <td @click="fillInCell(4)" id="cell_4"></td>
            <td style="border-right: 0px;" @click="fillInCell(5)" id="cell_5"></td>
          </tr>
          <tr>
            <td style="border-bottom: 0px;border-left: 0px;" @click="fillInCell(6)" id="cell_6"></td>
            <td style="border-bottom: 0px;" @click="fillInCell(7)" id="cell_7"></td>
            <td style="border-bottom: 0px;border-right: 0px;" @click="fillInCell(8)" id="cell_8"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="text-align: center;">
      <span
        style="color: #545454;
                    font-weight: bold;
                    font-size: 25px;
                    cursor: pointer;"
        @click="replay()"
        >REPLAY</span
      >
    </div>
  </div>
</template>

<script>
import { io } from 'socket.io-client';
const socket = io('http://localhost:3000');
export default {
  name: 'Game',
  data() {
    return {
      activePlayer: 'x',
      cells: [null, null, null, null, null, null, null, null, null],
      countClicks: 0,
      winningConditions: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
      winner: null,
    };
  },
  methods: {
    fillInCell(id) {
      let cellName = 'cell_' + id;
      let cell = document.getElementById(cellName);
      if (this.cells[id] == null) {
        this.countClicks += 1;
        if (this.activePlayer == 'x') cell.innerHTML = "<i class='fas fa-times' style = 'color:#545454'></i>";
        else cell.innerHTML = "<i class='far fa-circle' style = 'color:#f2ebd3'></i>";

        this.cells[id] = this.activePlayer;
        this.activePlayer = this.activePlayer == 'x' ? 'o' : 'x';

        if (this.countClicks >= 5) this.checkGame();

        socket.emit('fill', id);
      }
    },
    checkGame() {
      for (let i = 0; i <= 7; i++) {
        let winningCondition = this.winningConditions[i];
        let a = this.cells[winningCondition[0]];
        let b = this.cells[winningCondition[1]];
        let c = this.cells[winningCondition[2]];

        if (a == null || b == null || c == null) continue;
        if (a == b && b == c) {
          this.winner = a;
          break;
        }
      }
      if (this.winner) {
        let el = document.getElementById('result-overlay');
        el.style.display = 'block';
      } else {
        if (this.countClicks == 9) {
          let el = document.getElementById('result-overlay');
          let p = document.getElementById('p-overlay');
          p.innerHTML = 'DRAW';
          el.style.display = 'block';
        }
      }

      return;
    },
    replay() {
      location.reload();
    },
  },
  mounted() {
    socket.on('fillBack', (id) => {
      console.log(id);
      this.fillInCell(id);
    });
  },
};
</script>

<style>
.activePlayer {
  border-bottom: 3px solid #14bdac !important;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.16) !important;
}
.players div {
  width: 200px;
  border-bottom: 3px solid transparent;
  color: rgba(0, 0, 0, 0.54);
  font-size: 24px;
  margin: 0;
  transition: all 0.25s;
  -webkit-transition: all 0.25s;
  border-radius: 8px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.16);
  line-height: 16px;
  text-transform: uppercase;
  padding: 10px 8px;
  overflow: hidden;
}
.players div i {
  font-size: 20px;
  font-weight: 100;
}
.players table {
  margin: auto;
}
.play tr td {
  height: 110px;
  padding: 8px;
  position: relative;
  width: 125px;
  text-align: center;
  vertical-align: middle;
}
.play tr td i {
  width: 50px;
  height: 50px;
  font-size: 50px;
  font-weight: 100;
}
.play {
  background-color: #14bdac;
  padding: 20px 0px;
  position: relative;
}
.play td {
  border: 5px solid #0da192;
}
.play table {
  width: 370px;
  height: 300px;
  margin: auto;
}
.play-ground {
  margin: 50px 0px;
  padding: 20px 0px;
  border: 1px solid #dfe1e5;
  border-radius: 8px;
}
.result-overlay {
  position: absolute;
  background: #15bdacb8;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 10;
  display: none;
}
.result-overlay > p {
  font-size: 50px;
  font-weight: 100;
  text-align: center;
  color: rgb(84, 84, 84);
  vertical-align: middle;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  font-weight: bold;
}
.result-overlay > p > span {
  color: #f2ebd3;
  font-size: 100px;
  margin-right: 20px;
}
.result-overlay > p > span > i {
  font-weight: 100;
}
</style>

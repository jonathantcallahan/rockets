 <template> 
    <div>
        <div class='chart-container'>
            <Chart :chartdata='chartData' :options='chartOptions'></Chart>
        </div>
        <div class='game-container'>
            <div v-if='this.newGame === true'>
                <button class='start-game-button' v-on:click='this.createGame'>Start Game</button>
            </div>
            <div v-else>
                <div class='score-container'>
                    <div class='points'>{{this.points}}</div>
                </div>
                <div 
                    v-for="(hoop,i) in hoopLocations" 
                    :key="'hoop-' + i" 
                    class='hoop'
                    :style="{top:hoop[1] + 'px', left:hoop[0] + 'px', 'background-color': hoop[2] ? 'green' : 'black'}">
                </div>
                <div 
                    class='rocket'
                    :style="{ top:rocketLocation[1] + 'px', left:rocketLocation[0] + 'px', transform:'rotate(' + rocketLocation[2] + 'Deg)' }">
                </div>
            </div>
            <Chart></Chart>
        </div>
    </div>
 </template>

 <script>

import Chart from './Charts'

 export default {
     name: 'Sandbox',
     components: {
         Chart
     },
     data: function () {
        return {
            newGame: true,
            rocketLocation: [0,window.innerHeight/2, 0],
            isMovingRight: false,
            isMovingLeft: false,
            isMovingUp: false,
            isMovingDown: false,
            hoopLocations: [],
            flightMatrix: [],
            points: 0,
            missedHoops: 0,
            chartData: {
                datacollection: {
                    labels: ['points', 'missed'],
                    datasets: [
                        {
                            label: 'data',
                            data: [this.points, this.missedHoops]
                        }
                    ]
                }
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
     },
     methods: {
        createHoops: function () {
            const xLoc = Math.floor(Math.random() * window.innerWidth / 2)
            this.hoopLocations.push([xLoc, 0, false]) // [xlocation, ylocation, scored]
            setTimeout(this.createHoops, 4000)
        },
        moveHoops: function () {
            this.hoopLocations.forEach((e,i) => {
                this.hoopLocations[i][1] = this.hoopLocations[i][1] + 5
                const xLoc = this.rocketLocation[0] - this.hoopLocations[i][0]

                if (Math.abs(this.hoopLocations[i][1] - this.rocketLocation[1]) < 20 && (xLoc < 200 && xLoc > 0) && !this.hoopLocations[i][2]) { 
                    this.points = this.points + 1
                    this.hoopLocations[i][2] = true
                } else if (e[1] > window.innerHeight - 10) {
                    if(!this.hoopLocations[i][2]){ this.missedHoops = this.missedHoops + 1 }
                    this.hoopLocations.splice(i,1);
                }
            })
            this.$forceUpdate();
            setTimeout(this.moveHoops, 50);
        },
        keyDown: function (e) {
            const keycode = e.code;

            if (keycode == 'ArrowLeft') { 
                this.isMovingLeft = true;
                this.moveLeft();
            } else if (keycode == 'ArrowRight') { 
                this.isMovingRight = true;
                this.moveRight();
            } else if (keycode == 'ArrowDown') {
                this.isMovingDown = true;
                this.moveDown();
            } else if (keycode == 'ArrowUp') {
                this.isMovingUp = true;
                this.moveUp();
            }
        },
        keyUp: function (e) {
            const keycode = e.code;

            if (keycode == 'ArrowLeft') { 
                this.isMovingLeft = false;
            } else if (keycode == 'ArrowRight') {
                this.isMovingRight = false;
            } else if (keycode == 'ArrowDown') {
                this.isMovingDown = false;
            } else if (keycode == 'ArrowUp') {
                this.isMovingUp = false;
            } else if (e.which == 27) {
                this.newGame = true;
                this.closeGame();
            }
        },
        setRocketAngle: function () {
            const rocketAngle = this.rocketLocation[2]
            this.rocketLocation[2] = this.rocketLocation[2] > 0 ? rocketAngle - 1 : rocketAngle + 1
            if(Math.abs(rocketAngle) > 1){
                setTimeout(this.setRocketAngle, 50)
            }  
        },
        moveRight: function (e, a) {
            a = a || 10
            console.log(a)
            if (this.rocketLocation[0] + 60 < window.innerWidth) {
                this.rocketLocation[0] = this.rocketLocation[0] + 20;
                this.rocketLocation[2] = a
                this.setRocketAngle()
                a = a >= 30 ? 30 : a + 1
                this.isMovingRight ? setTimeout(this.moveRight.bind(null,e, a), 50) : null;
            }
        },
        moveLeft: function (e, a) {
            a = a || -10
            if (this.rocketLocation[0] - 60 > 0) {
               this.rocketLocation[0] = this.rocketLocation[0] - 20;
               this.rocketLocation[2] = a
               a = a <= -30 ? -30 : a - 1
               this.setRocketAngle()
                this.isMovingLeft ? setTimeout(this.moveLeft.bind(null, e, a), 50) : null;
            }
        },
        moveDown: function (e) {
            return
            if (this.rocketLocation[1] + 160 < window.innerHeight) {
                this.rocketLocation[1] = this.rocketLocation[1] + 30;
                this.isMovingDown ? setTimeout(this.moveDown, 50) : null;
            }
        },
        moveUp: function (e) {
            return
            if (this.rocketLocation[1] - 60 > 0) {
                this.rocketLocation[1] = this.rocketLocation[1] - 30;
                this.isMovingUp ? setTimeout(this.moveUp, 50) : null;
            }
        },
        closeGame: function(e) {
            this.postResults(this.points, this.flightMatrix);
            this.points = 0
            this.flightMatrix = []
        },
        flightTracker: function() {
            if (!this.newGame) {
                this.flightMatrix.push({x: this.rocketLocation[0], y: this.rocketLocation[1]})
                setTimeout(this.flightTracker, 50);
            }
        },
        createGame: function() {
            this.newGame = false;

            this.points = 0;
            this.flightMatrix = [];
            this.rocketLocation = [window.innerWidth / 2, window.innerHeight / 2];

            this.flightTracker()
            this.createHoops()
            this.moveHoops()
        },
        postResults: function(points, flight_payload) {
            console.log('Success, total points: ', points);
            console.log('Flight Data: ', flight_payload);
        }
     },
     created () {
        window.addEventListener('keydown', this.keyDown)
        window.addEventListener('keyup', this.keyUp)
     }
 }
 </script>

 <style>
 .chart-container {
     width: 19vw;
     display: inline-block
 }
 .game-container {
     width: 80vw;
     height: 100vh;
     background-color: gray;
     position: relative;
     display: inline-block;
     vertical-align: top
 }

 .start-game-button {
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%, -50%);
 }
 .hoop {
     width: 200px;
     height: 5px;
     background-color: black;
     position: absolute
 }

 .rocket {
     width: 20px;
     height: 100px;
     position: absolute;
     background-color: white
 }

 .score-container {
     position: absolute;
     top: 10px;
     left: 10px
 }
 </style>
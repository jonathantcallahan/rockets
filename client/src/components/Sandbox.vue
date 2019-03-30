 <template>
    <div class='game-container'>
        <div class='score-container'>
            <div class='points'>{{this.points}}</div>
        </div>
        <div 
            v-for="(hoop,i) in hoopLocations" 
            :key="'hoop-' + i" 
            class='hoop'
            :style="{top:hoop[1] + 'px', left:hoop[0] + 'px'}">{{hoop[1]}}
        </div>
        <div 
            class='rocket'
            :style="{ top:rocketLocation[1] + 'px', left:rocketLocation[0] + 'px' }">
        </div>
    </div>
 </template>

 <script>
 export default {
     name: 'Sandbox',
     data: function () {
         return {
             rocketLocation: [0,window.innerHeight/2],
             hoopLocations: [],
             points: 0
         }
     },
     methods: {
         createHoops: function () {
             const xLoc = Math.floor(Math.random() * window.innerWidth / 2)
             this.hoopLocations.push([xLoc, 0])
             setTimeout(this.createHoops, 4000)
         },
         moveHoops: function () {
             this.hoopLocations.forEach((e,i) => {
                 this.hoopLocations[i][1] = this.hoopLocations[i][1] + 5
                 const xLoc = this.rocketLocation[0] - this.hoopLocations[i][0]
                 console.log(xLoc)
                 if(Math.abs(this.hoopLocations[i][1] - this.rocketLocation[1]) < 20 && (xLoc < 200 && xLoc > 0)){ this.points = this.points + 1}
                 if(e[1] > window.innerHeight - 10) {
                     this.hoopLocations.splice(i,1)
                 }
             })
             this.$forceUpdate()
             setTimeout(this.moveHoops, 50)
         },
         moveRocket: function (keycode) {
             console.log(keycode)
             if(keycode == 'ArrowLeft' && this.rocketLocation[0] > 0){ this.rocketLocation[0] = this.rocketLocation[0] - 30 }
             if(keycode == 'ArrowRight' && this.rocketLocation[0] < window.innerWidth - 10){ this.rocketLocation[0] = this.rocketLocation[0] + 30 }
         }
     },
     created () {
         this.createHoops()
         this.moveHoops()
         window.addEventListener('keyup', e => {
             this.moveRocket(e.code)
         })
     }
 }
 </script>

 <style>
 .game-container {
     width: 100vw;
     height: 100vh;
     background-color: gray;
     position: relative
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
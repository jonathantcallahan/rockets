 <template>
    <div class='game-container'>
        <div 
            v-for="(hoop,i) in hoopLocations" 
            :key="'hoop-' + i" 
            class='hoop'
            :style="{top:hoop[1] + 'px', left:hoop[0] + 'px'}">{{hoop[1]}}
        </div>
        <div class='rocket'></div>
    </div>
 </template>

 <script>
 export default {
     name: 'Sandbox',
     data: function () {
         return {
             rocketLocation: [],
             hoopLocations: []
         }
     },
     methods: {
         createHoops: function () {
             const xLoc = Math.floor(Math.random() * window.innerWidth)
             this.hoopLocations.push([xLoc, 0])
             setTimeout(this.createHoops, 2000)
         },
         moveHoops: function () {
             this.hoopLocations.forEach((e,i) => {
                 this.hoopLocations[i][1] = this.hoopLocations[i][1] + 5
                 if(e[1] > window.innerHeight - 10) {
                     this.hoopLocations.splice(i,1)
                 }
             })
             this.$forceUpdate()
             setTimeout(this.moveHoops, 50)
         },
         moveRocket: function (keycode) {
             console.log(keycode)
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
 </style>
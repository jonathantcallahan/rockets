<template>
    <div>
        <div>
            <span>{{flightPoints}}</span>
            <span>{{flightHoops}}</span>
        </div>
        <canvas id='chart' width='400' height='400'>
        </canvas>
    </div>
</template>

<script>
export default {
    name: 'Charts',
    data: function () {
        return {}
    },
    props: ['flightPoints','flightHoops'],
    mounted () {
        let s = document.createElement('script')
        s.setAttribute('src','https://cdn.jsdelivr.net/npm/chart.js@2.8.0/dist/Chart.min.js')
        document.head.appendChild(s)
    },
    updated () {
        var ctx = document.querySelector('#chart')
        var data = {
            datasets: [this.flightPoints, this.flightHoops],
            labels: ['points','missed']
        }
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: data
        })
    }
}
</script>
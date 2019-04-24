<template>
    <canvas id='chart' width='400' height='400'>
    </canvas>
</template>

<script>
export default {
    name: 'Charts',
    data: function () {
        return {}
    },
    props: {
        flightData: Object
    },
    mounted () {
        let s = document.createElement('script')
        s.setAttribute('src','https://cdn.jsdelivr.net/npm/chart.js@2.8.0/dist/Chart.min.js')
        document.head.appendChild(s)
    }
}
</script>
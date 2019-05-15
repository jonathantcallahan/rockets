<template>
    <div class='container'>
        <canvas ref='canvas' width='900' height='400'></canvas>
    </div>
</template>

<script>

import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    data: function () {
        return {}
    },
    props: {
        chartdata: {
            type: Object,
            default: null
        },
        options: {
            type: Object,
            default: null
        }
    },
    mounted () {
        this.renderChart(this.chartdata, this.options)
    },
    updated () {}
}
</script>
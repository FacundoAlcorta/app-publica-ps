<script setup>
    import { ref, onMounted } from 'vue';
    import Chart from 'chart.js/auto';

    let dict = {}

    onMounted(async()=>{

        let response = await fetch("https://admin-grupo09.proyecto2022.linti.unlp.edu.ar/api/estadistica/dias_con_pagos")
        response = await response.json()


        for(let i=1; i<=31; i++){
            let obj = response.find(e => e.dia_pago == i)
            dict[i] = 0
            if(obj){
                dict[i] = obj.cant_pagos
            }
        }

        const dataLine = {
        labels: Object.keys(dict),
        datasets: [{
            label: 'Pagos por Días',
            data: Object.values(dict),
            hoverOffset: 4
        }]
    }

        const config = {
            type: 'line',
            data: dataLine,
        };
    const pieChart = new Chart(
        document.getElementById('lineChart'), config
    )

    })
</script>


<template>
    <div>
        <h3>Pagos por Días</h3>
        <div style="height:400px; width:400px">
            <canvas id="lineChart" ></canvas>
        </div>
    </div>
</template>

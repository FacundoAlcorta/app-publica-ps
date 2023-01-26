<script setup>
    import { ref, onMounted } from 'vue';
    import Chart from 'chart.js/auto';

    let dict = {}
    const meses = {
        1:'Enero',
        2:'Febrero',
        3:'Marzo',
        4:'Abril',
        5:'Mayo',
        6:'Junio',
        7:'Julio',
        8:'Agosto',
        9:'Septiembre',
        10:'Octubre',
        11:'Noviembre',
        12:'Diciembre'
    };


    onMounted(async()=>{

        let response = await fetch("https://admin-grupo09.proyecto2022.linti.unlp.edu.ar/api/estadistica/cant_socio_por_mes")
        response = await response.json()
        const mesesParseados = response.map((r) => meses[r.mes])
        console.log(response)

        console.log(mesesParseados)

        for(let i=1; i<=12; i++){
            let obj = response.find(e => e.mes == i)
            dict[i] = 0
            if(obj){
                dict[i] = obj.cant_socios
            }
        }

        const data = {
        labels: Object.values(meses),
        datasets: [{
            label: 'Socios por Mes',
            data: Object.values(dict),
            borderWidth: 1
        }]
        };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {y: {beginAtZero: true}}
        },
    };
    const pieChart = new Chart(
        document.getElementById('barChart'), config
    )

    })
</script>


<template>
    <div>
        <h3>Socios por Mes</h3>
        <div style="height:400px; width:400px">
            <canvas id="barChart" ></canvas>
        </div>
    </div>
</template>

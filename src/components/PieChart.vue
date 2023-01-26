<script setup>
    import { ref, onMounted } from 'vue';
    import Chart from 'chart.js/auto';
    
    let v_cant_socios=ref([]);
    let v_estado=ref([]);
    
    onMounted(async()=>{

        let response = await fetch("https://admin-grupo09.proyecto2022.linti.unlp.edu.ar/api/estadistica/socios_morosidad")
        response = await response.json()

        v_estado = response.map((r) => r.status)
        v_cant_socios = response.map((r) => r.cant_socios)

        const dataPie = {
        labels: v_estado,
        datasets: [{
            label: 'Estados Socios',
            data: v_cant_socios,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
      }

      const config = {
          type: 'doughnut',
          data: dataPie,
    };
    const pieChart = new Chart(
        document.getElementById('pieChart'), config
    )

    })



</script>


<template>
    <div>
        <h3>Estado Socios</h3>
        <div style="height:400px; width:400px">
            <canvas id="pieChart" ></canvas>
        </div>
    </div>

</template>

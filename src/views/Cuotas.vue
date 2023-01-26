<script setup>
import { ref, onMounted } from 'vue';

const idSocio= localStorage.getItem('idSocio').toString()
const url = `https://admin-grupo09.proyecto2022.linti.unlp.edu.ar/api/${idSocio}/payments`

const payments=ref([])
const allPayments= async()=>{
 return fetch(url)
  .then(response=>response.json())
}

onMounted(()=>{
    allPayments(idSocio).then(data=>{
        payments.value=data    
  })
})

async function pagar(month, amount) {
    console.log(month)
    console.log(amount)
    const url = `https://admin-grupo09.proyecto2022.linti.unlp.edu.ar/api/${idSocio}/payments`
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify({
            "month": month,
            "amount":amount
        })
    })
    if (response.status == 202) {
        allPayments(idSocio).then(data=>{
            cuotas = data;    
        })
    }
} 


</script>

<template>
    <div class="about">
      <h1>Listado Cuotas</h1>
    </div>  

  <table>
    <tr>
        <th>Mes</th>
        <th>Monto</th>
        <th>Pagar</th>
    
    </tr>
    
    <div v-for="cuota in payments.pagos_socio">
        <td> {{cuota.mes}}</td>
        <td> {{cuota.monto}}</td>
        <td v-if="!cuota.pagado_en">
            <button  @click="pagar(cuota.mes, cuota.monto)">Pagar</button>
        </td>
        <td v-else> Pagada </td>
    </div>


  </table>


  </template>









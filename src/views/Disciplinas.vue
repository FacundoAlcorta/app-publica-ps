<script setup>
import { ref, onMounted } from 'vue';



const disciplines=ref([])
const allDisciplines= async()=>{
  //return fetch("http://127.0.0.1:5000/api/club/disciplines")
  return fetch("https://admin-grupo09.proyecto2022.linti.unlp.edu.ar/api/club/disciplines")

  .then(response=>response.json())

}
onMounted(()=>{
  allDisciplines().then(data=>{
    disciplines.value=data    
  })
})


</script>
<template>

    <div class="about">
      <h1>Listado Disciplina</h1>
    </div>  

  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Profesor</th>
        <th>Días</th>
        <th>Horarios</th>
        <th>Precio</th>
      </tr>
    </thead>
      <tr v-for="discipline in disciplines.disciplinas_lista">
        <td> {{discipline.name}}</td>
        <td> {{discipline.teacher}}</td>
        <td> {{discipline.days}}</td>
        <td> {{discipline.time}}</td>
        <td> {{discipline.money}}</td>
      </tr>

  </table>

  </template>

<style>

[v-cloak] { display:none; }

td,th, tr {
  border-radius: 5px;
  border: 2px solid grey;
  padding: 5px; 
  width: 75px;
  height: 25px; 
  text-align: center;
  color: black;
  text-shadow: -1px 0 #A4A4A4, 0 1px #A4A4A4, 1px 0 #A4A4A4, 0 -1px #A4A4A4;
}

th{ background-color: #A9E2F3 }
.glyphicon-minus, .glyphicon-plus{
  cursor: pointer;
  font-size: 25px;
}
.glyphicon-minus{
  color:red;
  float:left;
}
.glyphicon-plus{
  color:green;
  float:right;
}
.btn-info{
  border: solid 1px black;
  padding:3px;
  margin-bottom:2px;
  border-radius: 5px;
}
#Select1, #Select2{
  width:50%;
  float:left;
  margin-bottom:22px;
}
#Select3{
  width:100%;
  float:left;
  margin-bottom:22px;
}
td{
  transition: .3s ease-in-out;
  cursor: pointer;
}
.btn-danger{
  float:right;
}
.btn-default{
  float:left;
}
tr:first-child th{
  font-size: 25px;
}
tr:nth-child(2) th{
  font-size: 20px;
}
tr:nth-child(2) th:first-child{
  min-width:100px
}
#contenido1, #contenido2{
  width:100%;
  background-color: #f1f1f1;
}

#todo {
  margin: 0 auto;
  width: 50%; /* Ancho del contenedor */
}
@media screen and (max-width: 1095px){
  #todo{float: none;
    width: 100%;
    margin-bottom:25px;}
}
#todo input {
  height: 2.5em;
  visibility: hidden;
}
#todo label {
  background: #f9f9f9; /* Fondo de las pestañas */
  border-radius: .25em .25em 0 0;
  color: #888; /* Color del texto de las pestañas */
  cursor: pointer;
  display: block;
  float: left;
  font-size: 1em; /* Tamaño del texto de las pestañas */
  height: 2.5em;
  line-height: 2.5em;
  margin-right: .25em;
  padding: 0 1.5em;
  text-align: center;
}
#todo input:hover + label {
  background: #ddd; /* Fondo de las pestañas al pasar el cursor por encima */
  color: #666; /* Color del texto de las pestañas al pasar el cursor por encima */
}
#todo input:checked + label {
  background: #f1f1f1; /* Fondo de las pestañas al presionar */
  color: #444; /* Color de las pestañas al presionar */
  position: relative;
  z-index: 6;
}
#content {
  background: #f1f1f1; /* Fondo del contenido */
  border-radius: 0 .25em .25em .25em;
  position: relative;
  width: 100%;
  z-index: 5;
}
#content div {
  opacity: 0;
  padding: 1.5em;
  position: absolute;
  z-index: -100;
}

#todo input#tab-1:checked ~ #content #contenido1,
#todo input#tab-2:checked ~ #content #contenido2{
  opacity: 1;
  z-index: 100;
}

[data-tooltip] {
  position: relative;
  z-index: 2;
  cursor: pointer;
}

/* Hide the tooltip content by default */
[data-tooltip]:before,
[data-tooltip]:after {
  visibility: hidden;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  pointer-events: none;
}

/* Position tooltip above the element */
[data-tooltip]:before {
  position: absolute;
  bottom: 150%;
  left: 50%;
  margin-bottom: 5px;
  margin-left: -80px;
  padding: 7px;
  width: 160px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background-color: #000;
  background-color: hsla(0, 0%, 20%, 0.9);
  color: #fff;
  content: attr(data-tooltip);
  text-align: center;
  font-size: 14px;
  line-height: 1.2;
}

/* Triangle hack to make tooltip look like a speech bubble */
[data-tooltip]:after {
  position: absolute;
  bottom: 150%;
  left: 50%;
  margin-left: -5px;
  width: 0;
  border-top: 5px solid #000;
  border-top: 5px solid hsla(0, 0%, 20%, 0.9);
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  content: " ";
  font-size: 0;
  line-height: 0;
}

/* Show tooltip content on hover */
[data-tooltip]:hover:before,
[data-tooltip]:hover:after {
  visibility: visible;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
}

</style>







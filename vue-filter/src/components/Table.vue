<template>
    <div>
        <h2>Subtitle</h2>
        <h3>Toplam bulunan sonuç : {{movies.length}}</h3>
        <table>
        <tr>
            <th>Line</th>
            <th>startTime</th>
            <th>endTime</th>
            <th>Message</th>
        </tr>
        <tr v-for="movie in movies" :key="movie.id">
            <td>{{movie.line}}</td>
            <td>{{movie.startTime}}</td>
            <td>{{movie.endTime}}</td>
            <td>{{movie.message}}</td>
        </tr>
        </table>
    </div>
</template>

<script>
export default {
    name:"Table",
    props:["movies"]
}
</script>

<style scoped>
table {
  width: 70%;
  display: inline-block;
}
table th{
    width: 5%;
}
table th:last-child {
    width: 50%;
}
table, th, td {
  border: 0.01px dotted #4BB883;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
  text-align: left;
}
table tr:nth-child(even) {
  background-color: #eee;
}
table tr:nth-child(odd) {
 background-color: #fff;
}
table th {
  background-color: #4BB883 ;
  color: white;
}
</style>
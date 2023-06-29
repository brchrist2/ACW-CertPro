<template>
  <div>
    <h1>Firestore Query Results</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        <h2 class=" text-xl font-bold">{{ item.Name }}</h2>
        <p>Age: {{ item.created.toDate() }}</p>
        <p>Email: {{ item.Email }}</p>
        <p>Address: {{ item.Address }} {{ item.City }}, {{ item.State }} {{ item.ZIP }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { /*subscribeToFirestoreUpdates*/ } from '../services/firestoreQuery';
const date = require('date-and-time');

export default {
  setup() {
    const items = ref([]);

    onMounted(async () => {
      //items.created = date.format(items.created.toDate(), 'dddd, MM/DD/YY h:mm A')
    });

    function daterboi(thing){
      return date.format(thing, 'dddd, MM/DD/YY h:mm A');
    }

    return {
      items,
      daterboi
    };
  }
};
</script>

<!--
  *FETCH ON SNAPSHOT
  subscribeToFirestoreUpdates((updatedData) => {
        items.value = updatedData;
      });
-->
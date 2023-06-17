<template>
  <div>
    <h1>Firestore Query Results</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { fetchFirestoreData, subscribeToFirestoreUpdates } from '../services/firestoreQuery';

export default {
  setup() {
    const items = ref([]);

    onMounted(async () => {
      items.value = await fetchFirestoreData();
      subscribeToFirestoreUpdates((updatedData) => {
        items.value = updatedData;
      });
    });

    return {
      items
    };
  }
};
</script>

<template>
  <div class="mx-auto max-w-6xl items-center justify-between">
    <div class="flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 m-5 ring-gray-900/5 sm:p-6">
      <div>
          <div class="mt-2">
            <input v-model="search" placeholder="Search clients" name="search" type="text" required="" class="inputer" />
          </div>
      </div>
      <ul role="list" class="divide-y divide-gray-100">
        <li v-for="client in filteredClients" :key="client.id" class="flex justify-between gap-x-6 py-5">
          <div class="flex gap-x-4">
            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">{{ client.name }}</p>
            </div>
          </div>
          <div class="hidden sm:flex sm:flex-col sm:items-end">
            <p class="text-sm leading-6 text-gray-900">{{ client.email }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      search: '',
      clients: [
        { id: 1, name: 'ABC Inc.', address: '123 Main St', email: 'abc@example.com' },
        { id: 2, name: 'XYZ LLC', address: '456 Elm St', email: 'xyz@example.com' },
        // Add more sample client objects here...
        // Repeat the structure { id: x, name: 'Client Name', address: 'Client Address', email: 'Client Email' }
      ]
    };
  },
  computed: {
    filteredClients() {
      return this.clients.filter(client =>
        client.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
};
</script>

<style>

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  width: 200px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
}
</style>
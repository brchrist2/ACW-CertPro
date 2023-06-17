<template>
  <div :class="['font-bold', 'text-center', 'text-sm', itemClasses]">
    {{ item.display }}
    <div class="flex space-x-1 mt-2">
      <div
        class="group relative flex items-center justify-center rounded-md border py-2 px-3 text-xs font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm"
        :class="{'bg-blue-100': isAIChecked}"
        @click="toggleSelection('AI')"
      >
        A.I.
      </div>
      <div
        class="group relative flex items-center justify-center rounded-md border py-2 px-3 text-xs font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm"
        :class="{'bg-blue-100': isWSChecked}"
        @click="toggleSelection('WS')"
      >
        W.C.
      </div>
    </div>
  </div>
</template>


<!--
        <div class="grid grid-cols-5 gap-6">
          <div v-for="item in stuff" :key="item.id">
            <div class="font-bold text-center text-sm">{{ item.display }}</div>
            <div class="flex space-x-1 mt-2">
              <label
                class="group relative flex items-center justify-center rounded-md border py-2 px-3 text-xs font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm"
                :class="{ 'bg-blue-100': isSelected(item, 'AI') }" @click="selectItem(item, 'AI')">
                <input type="checkbox" :checked="isSelected(item, 'AI')" class="sr-only">
                <span>A.I.</span>
                <span class="pointer-events-none absolute -inset-px rounded-sm" aria-hidden="true"></span>
              </label>
              <label
                class="group relative flex items-center justify-center rounded-md border py-2 px-3 text-xs font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm"
                :class="{ 'bg-blue-100': isSelected(item, 'WS') }" @click="selectItem(item, 'WS')">
                <input type="checkbox" :checked="isSelected(item, 'WS')" class="sr-only">
                <span>W.S.</span>
                <span class="pointer-events-none absolute -inset-px rounded-sm" aria-hidden="true"></span>
              </label>
            </div>
          </div>
        </div>
        -->



<script>
export default {
  name: 'CustomItem',
  props: ['item'],
  computed: {
    isAIChecked() {
      return this.item.results.AI;
    },
    isWSChecked() {
      return this.item.results.WS;
    },
    itemClasses() {
      return {
        'bg-blue-100': this.isAIChecked || this.isWSChecked,
      };
    },
  },
  methods: {
    toggleSelection(option) {
      if (option === 'AI' && this.item.id === 'WC') {
        return; // Skip toggling AI for WC
      }
      this.item.results[option] = !this.item.results[option];
    },
  },
};
</script>
  
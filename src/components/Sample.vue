<template>
  <div class="min-h-screen mx-auto flex-col overflow-hidden bg-gray-50 py-6 sm:p-6 sm:max-w-6xl">
    <div class="relative rounded-md bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:max-w-2xl">
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-7 text-gray-900">Certificate Holder Information</h3>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Name, address, and description/endorsements.</p>
      </div>
      <div class="mt-6 border-t border-gray-100">
        <dl class="divide-y divide-gray-100">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-9 text-gray-900">Name</dt>
            <dd class="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              <input class="block w-full border-0 px-0.5 placeholder-gray-300 focus:outline-none text-sm" id="name" type="text"
                placeholder="Please enter holder name (name saved on file)" />
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-9 text-gray-900">Certificate Holder</dt>
            <dd class="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              <ResizableTextarea>
                <textarea id="holder" type="text" rows="3" class="resize-none text-sm w-full border-0 px-0.5 placeholder-gray-300 focus:outline-none"
                placeholder="Include full name and address of certificate holder."></textarea>
              </ResizableTextarea>
            </dd>
          </div>
          <div class="h-64 px-4 py-6 sm:grid sm:h-48 sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-9 text-gray-900">Description</dt>
            <dd class="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              <ResizableTextarea>
                <textarea id="description" type="text" rows="3" class="resize-none text-sm w-full border-0 px-0.5 placeholder-gray-300 focus:outline-none"
                placeholder="Include full name and address of certificate holder."></textarea>
              </ResizableTextarea>
            </dd>
          </div>
        </dl>
        <div>
        <input type="checkbox" id="checkbox" v-model="checked" />
	      <label for="checkbox">{{ checked }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Sample',
  data() {
    return {
      stuff: [
        { id: "GL", display: "General Liability", results: { AI: false, WS: false } },
        { id: "AUTO", display: "Auto", results: { AI: true, WS: false } },
        { id: "UMBXS", display: "Umbrella/XS", results: { AI: false, WS: false } },
        { id: "WC", display: "Workers Comp", results: { AI: false, WS: false } },
        { id: "OTH", display: "Other", results: { AI: false, WS: false } }
      ],
    };
  },
  methods: {
    toggleSelection(item, option) {
      if (option === 'AI' && item.id === 'WC') {
        return; // Skip toggling AI for WC
      }
      item.results[option] = !item.results[option];
    },
    resizeTextarea (event) {
            event.target.style.height = 'auto'
            event.target.style.height = (event.target.scrollHeight) + 'px'
        }
  },
  mounted () {
        this.$nextTick(() => {
            this.$el.setAttribute('style', 'height:' + (this.$el.scrollHeight) + 'px;overflow-y:hidden;')
        })
        this.$el.addEventListener('input', this.resizeTextarea);
    },
    beforeDestroy () {
        this.$el.removeEventListener('input', this.resizeTextarea)
    },
    render () {
        return this.$slots.default[0]
    },
};
</script>
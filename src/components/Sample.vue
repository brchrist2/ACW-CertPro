<template>
  <div class="min-h-screen mx-auto flex-col overflow-hidden bg-transparent py-6 sm:p-6 sm:max-w-6xl">
    <div class="relative rounded-md bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:max-w-2xl">
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-7 text-gray-900">Certificate Holder Information</h3>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Name, address, and description/endorsements.</p>
      </div>
      <div class="mt-6 border-t border-gray-100">
        <dl class="divide-y divide-gray-100">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-8 text-gray-900">Name</dt>
            <dd class="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              <input class="block w-full border-0 p-[5px] placeholder-gray-300 focus:outline-none text-sm" id="name"
                v-model="documentData.name" type="text" placeholder="Please enter holder name (name saved on file)" />
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-8 text-gray-900">Certificate Holder</dt>
            <dd class="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              <template v-if="documentData.holder">
                <div id="wrapper1">
                  <resize-textarea class="text-sm w-full p-0 border-0 placeholder-gray-300 focus:outline-none" :rows="3"
                    v-model="documentData.holder">
                  </resize-textarea>
                </div>
              </template>
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:h-48 sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-8 text-gray-900">Description</dt>
            <dd class="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              <template v-if="documentData.description">
                <div id="wrapper2">
                  <resize-textarea class="text-sm w-full p-0 border-0 placeholder-gray-300 focus:outline-none" :rows="4"
                  v-model="documentData.description">
                  </resize-textarea>
                </div>
              </template>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import certQuery from '../services/DataService.js';

export default {
  name: 'Sample',
  setup() {
    const documentData = ref({});
    let updateTimeout = null;

    onMounted(async () => {
      const specDoc = await certQuery.specific("wYS0aJ84PHmS2NfUw14I");
      documentData.value = specDoc;
    });

    async function updateDocument() {
      const updatedData = {
        name: documentData.value.name,
        holder: convertTextareaToHtml('wrapper1'),
        description: convertTextareaToHtml('wrapper2'),
      };
      await certQuery.updateEntry("wYS0aJ84PHmS2NfUw14I", updatedData);
    }

    function convertTextareaToHtml(wrapperId) {
      const wrapper = document.getElementById(wrapperId);
      const textarea = wrapper.querySelector('textarea');
      return textarea.value;
    }

    function debounceUpdateDocument() {
      clearTimeout(updateTimeout);
      updateTimeout = setTimeout(() => {
        updateDocument();
      }, 1000); // Adjust the debounce time as needed
    }

    // Watch for changes in documentData but do not trigger the update immediately
    watch(documentData, () => {
      debounceUpdateDocument();
    }, { deep: true });

    return {
      documentData,
    };
  },
};
</script>
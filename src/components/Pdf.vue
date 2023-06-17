<template>
  <div class="relative max-w-md min-w-none mx-auto bg-white rounded-m shadow-md overflow-hidden lg:max-w-6xl md:max-w-prose">
    <div class="sm:flex">
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Insured</div>
        <p class="block mt-1 text-lg leading-tight font-medium text-black">Fill the following information</p>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
            <input class="inputer" id="name" type="text" v-model="name">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="address">Address</label>
            <input class="inputer" id="address" type="text" v-model="address">
          </div>
          <!-- add more fields as required -->
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div>
    <form>
      <ul data-type="taskList">
        <li data-checked="true"><input type="checkbox" name="flour" />flour</li>
        <li data-checked="true"><input type="checkbox" name="baking" />baking powder</li>
        <li data-checked="true"><input type="checkbox" name="salt" />salt</li>
        <li data-checked="false"><input type="checkbox" name="sugar" />sugar</li>
        <li data-checked="false"><input type="checkbox" name="milk" />milk</li>
        <li data-checked="false"><input type="checkbox" name="eggs" />eggs</li>
        <li data-checked="false"><input type="checkbox" name="butter" />butter</li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  name:"Pdf",
  data() {
    return {
      name: '',
      address: '',
      data: {
  "AUTO": {
    "Eff": "2023-01-01",
    "Exp": "2024-01-01",
    "LTR": "B",
    "Limit": {
      "BI1": 500000,
      "BI2": 1000000,
      "CSL": 1000000,
      "Other": {
        "AMT": 50000,
        "TXT": "Additional Limit"
      },
      "PD": 250000
    },
    "PolicyNum": "AUTO1234",
    "Vehicles": {
      "Any": "Off",
      "Hired": "On",
      "NonOwn": "On",
      "Owned": "Off",
      "Scheduled": "On"
    }
  },
  "DATE": "2023-06-07",
  "GL": {
    "CHK": "On",
    "ClaimOccur": {
      "0": "OCCURRENCE"
    },
    "Eff": "2023-01-01",
    "Exp": "2024-01-01",
    "LTR": "A",
    "Limit": {
      "EACH_OCC": 1000000,
      "GEN_AGG": 2000000,
      "MED_EXP": 100000,
      "Other": {
        "AMT": 50000,
        "TXT": "Additional Limit"
      },
      "PERADV_INJ": 250000,
      "PROP_COMP": 500000,
      "RENT_DMG": 100000
    },
    "OtherCovg1": {
      "CHK": "On",
      "TXT": "Professional Liability"
    },
    "OtherCovg2": {
      "CHK": "Off",
      "TXT": ""
    },
    "PolProjLoc": "POLICY",
    "PolicyNum": "GL5678"
  },
  "Holder": {
    "AI": {
      "0": "On",
      "1": "On",
      "2": "On",
      "4": "On"
    },
    "Address": "456 Elm St",
    "Description": "General Contractor",
    "WS": {
      "0": "On",
      "1": "Off",
      "2": "Off",
      "3": "On",
      "4": "Off"
    }
  },
  "Insured": {
    "Address": "123 Main St",
    "City": "Anytown",
    "Name": "Big D Construction",
    "State": "CA",
    "ZIP": 54321
  },
  "Insurer": {
    "A": {
      "NAIC": 11111,
      "Name": "Insurer A"
    },
    "B": {
      "NAIC": 22222,
      "Name": "Insurer B"
    },
    "C": {
      "NAIC": 33333,
      "Name": "Insurer C"
    },
    "D": {
      "NAIC": 44444,
      "Name": "Insurer D"
    },
    "E": {
      "NAIC": 55555,
      "Name": "Insurer E"
    },
    "F": {
      "NAIC": 66666,
      "Name": "Insurer F"
    }
  },
  "OTHERINS": {
    "Coverage": "Cargo Liability",
    "Eff": "2023-01-01",
    "Exp": "2024-01-01",
    "LTR": "E",
    "Limit": {
      "Amt": 5000000,
      "TXT": "Additional Limit"
    },
    "PolicyNum": "CARGO9876"
  },
  "Producer": {
    "Address": "789 Oak St",
    "Agency": "ABC Agency",
    "City": "Anycity",
    "Email": "john.smith@smithins.com",
    "Fax": "555-123-4567",
    "Name": "John Smith",
    "Phone": "555-987-6543",
    "State": "CA",
    "ZIP": 54321
  },
  "UMBXS": {
    "ClaimOccur": "On",
    "Eff": "2023-01-01",
    "Excess": "Off",
    "Exp": "2024-01-01",
    "LTR": "C",
    "Limit": {
      "Each": 5000000,
      "GenAggr": 10000000,
      "Other": {
        "AMT": 50000,
        "TXT": "Additional Limit"
      }
    },
    "PolicyNum": "UMBXS4321",
    "Umbrella": "On"
  },
  "WC": {
    "Eff": "2023-01-01",
    "ExecExcluded": "N",
    "Exp": "2024-01-01",
    "LTR": "D",
    "Limit": {
      "Accident": 500000,
      "Disease": 500000,
      "PolicyLim": 1000000
    },
    "PolicyNum": "WC9876"
  }
}
    }
  },
  methods: {
    submitForm() {
      // submit form logic here
    },
  }
}
</script>
<!--


<script>
export default {
  name: 'Home',
  mounted() {
    this.generatePDF();
  },
  methods: {
    async generatePDF() {
      const { PDFDocument } = await import('pdf-lib');
      const doc = await PDFDocument.create();

      // Add content to the PDF document
      const page = doc.addPage();
      const { width, height } = page.getSize();
      page.drawText('Hello, PDF!', { x: 50, y: height - 50 });

      // Convert the PDF document to a Uint8Array
      const pdfBytes = await doc.save();

      // Generate a data URL from the Uint8Array
      const dataUri = `data:application/pdf;base64,${btoa(
        String.fromCharCode(...pdfBytes)
      )}`;

      // Set the iframe source to display the PDF content
      this.$refs.pdfFrame.src = dataUri;
    },
  }
};
</script>
-->
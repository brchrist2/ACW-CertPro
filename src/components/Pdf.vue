<template>
  <div id="my-container" class="">
    <iframe ref="pdfFrame" width="100%" height="600"></iframe>
  </div>
</template>

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

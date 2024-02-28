document.getElementById('downloadResume').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;

    html2canvas(document.body).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'pt',
            format: [canvas.width, canvas.height]
        });

        doc.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        doc.save('Freddy_Romero_Resume.pdf');
    });

});
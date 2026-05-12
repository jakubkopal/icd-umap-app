let selected = [];

fetch("data/data.json")
  .then(res => res.json())
  .then(data => {

    // Create scatter plot
    const trace = {
      x: data.map(d => d.umap_x),
      y: data.map(d => d.umap_y),

      text: data.map(d =>
        `${d.icd3}: ${d.name}<br>${d["ICD-10 Chapter (short)"]}`
      ),

      customdata: data, // store full row for later

      mode: 'markers',
      type: 'scattergl',

      marker: {
        size: 6,
        color: data.map(d => d.color),
        opacity: 0.8
      }
    };

    Plotly.newPlot('plot', [trace]);

    // CLICK HANDLER
    document.getElementById('plot')
      .on('plotly_click', function(event){

        const point = event.points[0].customdata;

        selected.push(point);

        if (selected.length === 2) {

          const sim = cosineSim(selected[0], selected[1]);

          document.getElementById("info").innerHTML =
            `<b>${selected[0].icd3}</b>: ${selected[0].name}<br>
             ${selected[0]["ICD-10 Chapter"]}<br><br>

             <b>${selected[1].icd3}</b>: ${selected[1].name}<br>
             ${selected[1]["ICD-10 Chapter"]}<br><br>

             <b>Cosine similarity:</b> ${sim.toFixed(4)}`;

          selected = [];
        }
      });

    // COSINE SIMILARITY
    function cosineSim(a, b) {
      let dot = 0, normA = 0, normB = 0;

      for (let i = 0; i < 120; i++) {
        const va = a[`emb_${i}`];
        const vb = b[`emb_${i}`];

        dot += va * vb;
        normA += va * va;
        normB += vb * vb;
      }

      return dot / (Math.sqrt(normA) * Math.sqrt(normB));
    }

});
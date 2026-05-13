# Clinical trajectories and genetic architecture trace the same boundary between neurological and psychiatric disorders

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![DOI](https://img.shields.io/badge/DOI-pending-lightgrey)]()

Code and interactive supplement to the manuscript submitted to *Nature Neuroscience*.

---

## Abstract

Neurological and psychiatric disorders are historically classified as distinct categories, yet whether clinical and genetic similarity jointly trace this boundary has not been examined. Combining disease trajectory embeddings from a recent foundation model with genome-wide genetic similarity estimates, we show that the boundary is largely respected, but that multiple sclerosis, migraine, and essential tremor cross it in both measures. These findings support a more integrated approach to studying and treating brain disease across the traditional neurological–psychiatric divide.

---

## Interactive visualization

An interactive UMAP explorer of the Delphi-2M disease embedding space is available at:

**[username.github.io/neuropsych-boundary](https://username.github.io/neuropsych-boundary)**

Click any two disorders to compute their pairwise cosine similarity across the full 120-dimensional embedding space.

---

## Repository structure

| File | Description |
|------|-------------|
| `index.html` | Interactive UMAP explorer (GitHub Pages) |
| `embeddings.csv` | UMAP coordinates, embeddings, and metadata |
| `calculate_boundary.ipynb` | All analyses: similarity, Mantel test, boundary strength, stability, figures |
| `Figures/` | Generated figure outputs |

## Data

| Source | Description | Availability |
|--------|-------------|--------------|
| UK Biobank (application 27412) | Electronic health records for Delphi-2M training | [ukbiobank.ac.uk](https://www.ukbiobank.ac.uk) |
| Shmatko et al. (2025) | Delphi-2M model and synthetic trajectories | [Nature](https://doi.org/10.1038/s41586-025-09529-3) |
| Smeland et al. (2025) | Pairwise genetic correlation estimates | Supplementary materials of that publication |

Raw UK Biobank data cannot be shared publicly due to controlled access restrictions. The `embeddings.csv` file contains embeddings derived from the synthetic UK Biobank trajectories released by Shmatko et al., which can be used to reproduce the visualization and similarity analyses.

---

## Reproducing the analyses

### Requirements

```bash
pip install -r requirements.txt
```

### Running the notebook

Open `calculate_boundary.ipynb` in Jupyter and run all cells in order. The notebook covers:

1. Loading and processing Delphi-2M embeddings
2. Computing pairwise cosine similarities
3. Mantel test (clinical vs. genetic similarity)
4. Boundary strength analysis and quadrant plot
5. Embedding stability across retraining seeds
6. Figure generation

---

## Citation

If you use this code or the interactive tool, please cite:

> [Authors]. Clinical trajectories and genetic architecture trace the same boundary between neurological and psychiatric disorders. *Nature Neuroscience*, [year]. DOI: [pending]

---

## License

MIT © [Authors]

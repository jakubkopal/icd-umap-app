import pandas as pd

df = pd.read_csv("data/embeddings.csv")

# Save as JSON for frontend
df.to_json("data/data.json", orient="records")

print("data.json created")
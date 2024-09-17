import csv
import json
from bson import ObjectId
import hashlib

def difficulty_to_text(difficulty):
    if difficulty < 1.5:
        return 'easy'
    elif difficulty < 2.5:
        return 'medium'
    else:
        return 'hard'

def string_to_9x9_array(s):
    return [list(s[i:i+9]) for i in range(0, 81, 9)]

def process_csv_to_json(csv_file_path, json_file_path):
    json_data = []

    with open(csv_file_path, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            puzzle = row['puzzle'].replace('.', '0')
            difficulty = difficulty_to_text(float(row['difficulty']))

            # Create ObjectId from id (for simplicity, we'll hash the id to generate a valid ObjectId)
            hex_id = hashlib.sha256(row['id'].encode()).hexdigest()[:24]  # 24 characters hex for ObjectId
            object_id = ObjectId(hex_id)

            json_data.append({
                "_id": object_id,
                "puzzle": string_to_9x9_array(puzzle),
                "solution": string_to_9x9_array(row['solution']),
                "difficulty": difficulty,
                "best_time": ""
            })

    with open(json_file_path, 'w') as jsonfile:
        json.dump(json_data, jsonfile, indent=4, default=str)  # default=str to convert ObjectId to string

# Specify your file paths
csv_file_path = 'data.csv'
json_file_path = 'sudoku.json'

# Process the CSV to JSON
process_csv_to_json(csv_file_path, json_file_path)

import os 
from supabase import create_client, Client
import pathlib as pl
import dotenv
import json
import csv
import datetime


current_file_path = pl.Path(__file__).parent.absolute()
root_path = pl.Path(current_file_path).parent.parent.absolute()
#check if .env file exists in current directory

ENV = ".env"

if len(list(current_file_path.glob("*"+ENV))) > 0:
    with open(current_file_path / ENV, "r") as f:
        dotenv.load_dotenv(stream=f)
elif (len(list(root_path.glob("*"+ENV))) > 0):
    with open(root_path / ENV, "r") as f:
        dotenv.load_dotenv(stream=f)
    
url: str = os.environ.get("PUBLIC_SUPABASE_URL")
key: str = os.environ.get("SUPABASE_SECRET")



supabase:Client = create_client(url, key)

timestamp = datetime.datetime.now().strftime("%Y-%m-%d-%H-%M-%S")
r = supabase.table("registrations").select("*").execute()

DATA = {}

for data in r.data:
    if data["event_id"] not in DATA:
        DATA[data["event_id"]] = [data]
    else:
        DATA[data["event_id"]].append(data)

pl.Path(current_file_path / f"{timestamp}").mkdir(parents=True, exist_ok=True)

for key in DATA.keys():
    with open(str(current_file_path / f"{timestamp}" / f'{key}.json'), "w") as f_json:
        with open(str(current_file_path / f"{timestamp}" / f'{key}.csv'), "w", newline="") as f_csv:
            csv_writer = csv.writer(f_csv)
            csv_writer.writerow(DATA[key][0].keys())
            for data in DATA[key]:
                csv_writer.writerow(data.values())
            f_json.write(json.dumps(DATA[key], indent=4))
            
print("DONE")
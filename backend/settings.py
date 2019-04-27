# settings.py
from dotenv import *
import os
load_dotenv()

# OR, the same with increased verbosity:
load_dotenv(verbose=True)

# OR, explicitly providing path to '.env'
from pathlib import Path  # python3 only
env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)

mongodb = os.getenv("MONGO_URL")
print(mongodb)

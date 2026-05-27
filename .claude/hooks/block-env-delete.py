import sys
import json

input_data = json.load(sys.stdin)
command = input_data.get("tool_input", {}).get("command", "")

if ".env" in command and ("del " in command or "rm " in command):
    print("Blocked: Deleting .env file is not allowed")
    sys.exit(2)  # exit code 2 = block the action

sys.exit(0)  # allow
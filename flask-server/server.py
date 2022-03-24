import keyboard # for keylogs
from flask import Flask, redirect

app = Flask(__name__)

#Dictionary to store all keys and number of presses
keys_dict = dict()

keylog_status = dict()
keylog_status["status"] = "Keylogging stopped"

def cbk(event):
    """
    This callback is invoked whenever a keyboard event is occured
    (i.e when a key is released in this example)
    """
    if event.name in keys_dict.keys():
        keys_dict[event.name] += 1
    else:
        keys_dict[event.name] = 1    

@app.route("/keylog")
def keylog():
    return keys_dict

@app.route("/status")
def status():
    return keylog_status["status"]

@app.route("/start_keylog")
def start_keylog():
    keylog_status["status"] = "Keylogger running..."
    
    dict_keys = keys_dict.keys()
    for key in dict_keys:
        keys_dict[key] = 0
    
    keyboard.on_release(callback=cbk)
    return redirect("http://localhost:3000/")

@app.route("/stop_keylog")
def stop_keylog():
    keylog_status["status"] = "Keylogging stopped"
    
    keyboard.unhook_all()

    return redirect("http://localhost:3000/")

if __name__ == "__main__":
    #Run the server from the main thread
    app.run()
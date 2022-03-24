# Keyboard Heatmap Generator
A keylogger web application which I built as a submission for SDSLabs' Makers 2022.

# Description
This application logs the keys pressed by the user over a period of time, and displays a live heatmap of the keys pressed and their frequencies.

# Instructions to run
1. Start two separate terminals, one in the client directory and the other in the flask-server directory.
2. In the flask-server terminal, run the command `.\venv\Scripts\activate` to activate the virtual environment.
3. To start the server, run `python server.py` in the same terminal.
4. Now in the other terminal, run `npm start`.
5. A webpage should show up displaying an empty heatmap. Click 'Start/Restart Keylog' to start logging the key presses, and click 'Stop Keylog' to stop logging.
6. To end the application, press Ctrl+C on both the terminals (When asked 'Terminate batch job?', press Y and hit Enter).

# Tech Stack Used
This project uses a React frontend and a Flask backend.

# Screenshot of the application
When keylogger is running:
![image](https://user-images.githubusercontent.com/69714469/159910833-85f63efa-d6f5-4f4b-a054-e6313e028447.png)

When keylogging has stopped:
![image](https://user-images.githubusercontent.com/69714469/159910913-7a53ee94-d0fa-48d7-a33c-a7ff97b9b768.png)

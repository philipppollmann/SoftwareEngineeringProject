from flask import Flask, render_template
from flask import request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)




@app.route('/show_image', methods=['POST'])
def show_image():
    # Passe den Pfad zum Bild entsprechend deiner Dateistruktur an
    image_path = 'static/your_image.jpg'
    return render_template('index.html', image_path=image_path)

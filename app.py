# from flask import Flask
# from flask import render_template

# app = Flask(__name__)

# @app.route("/")
# def tanka():
#     return render_template('tanka.html')


# if __name__ == "__main__":
#     app.run()

from flask import Flask, render_template, request, send_file
import pandas as pd
from io import BytesIO

app = Flask(__name__)

@app.route("/")
def tanka():
    return render_template('tanka.html')

@app.route("/download", methods=["POST"])
def download():
    data = request.form.to_dict()
    df = pd.DataFrame([data])

    output = BytesIO()
    with pd.ExcelWriter(output, engine='openpyxl') as writer:
        df.to_excel(writer, index=False)

    output.seek(0)
    return send_file(output, download_name="tanka.xlsx", as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True)

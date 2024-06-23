import os
from flask import Flask, request, jsonify, send_from_directory
from config import app, db
from models import Properties
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Create the folder if it doesn't exist
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

@app.route("/properties", methods=["GET"])
def get_properties():
    properties = Properties.query.all()
    json_properties = [property.to_json() for property in properties]
    return jsonify({"properties": json_properties})

@app.route("/create_property", methods=["POST"])
def create_property():
    category = request.form.get("category")
    cost = request.form.get("cost")
    location = request.form.get("location")
    description = request.form.get("description")

    if not all([category, cost, location, description]):
        return jsonify({"message": "Enter category, cost, location, and description"}), 400

    image_path = None
    if 'image' in request.files:
        image = request.files['image']
        imagename = secure_filename(image.filename)
        image_path = os.path.join(app.config['UPLOAD_FOLDER'], imagename)
        image.save(image_path)
        image_path = f'/uploads/{imagename}'  # Store relative path

    new_property = Properties(category=category, cost=cost, location=location, description=description, image=image_path)
    try:
        db.session.add(new_property)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Property created!"}), 201

@app.route("/update_property/<int:id>", methods=["PUT"])
def update_property(id):
    property = Properties.query.get(id)

    if not property:
        return jsonify({"message": "Property not found"}), 404

    data = request.form
    property.category = data.get("category", property.category)
    property.cost = data.get("cost", property.cost)
    property.location = data.get("location", property.location)
    property.description = data.get("description", property.description)

    if 'image' in request.files:
        image = request.files['image']
        imagename = secure_filename(image.filename)
        image_path = os.path.join(app.config['UPLOAD_FOLDER'], imagename)
        image.save(image_path)
        image_path = f'/uploads/{imagename}'  # Store relative path
        property.image = image_path

    db.session.commit()

    return jsonify({"message": "Property updated"}), 200

@app.route("/delete_property/<int:id>", methods=["DELETE"])
def delete_property(id):
    property = Properties.query.get(id)

    if not property:
        return jsonify({"message": "Property not found"}), 404

    db.session.delete(property)
    db.session.commit()

    return jsonify({"message": "Property deleted"}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)

# PLASTIC PLANET
#################################################
# Imports
#################################################
import os
import pandas as pd
import numpy as np
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)


import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

#################################################
# Database Setup
#################################################

# DB Version 1 - Separate tables
# Trouble with joining tables
# sqlite:///resources/database.sqlite

#DB Version 2 - One master table
# sqlite:///resources/database2.sqlite

engine = create_engine("sqlite:///resources/database2.sqlite", echo=False)
conn = engine.connect()

# Reflect Database into ORM classes
Base = automap_base()
Base.prepare(engine, reflect=True)

# DB Version 1 references
epa = Base.classes.epa
# global_waste = Base.classes.global_waste
# trades = Base.classes.trades
# treatment_types = Base.classes.treatment_types
# countries = Base.classes.countries

# DB Version 2 references
# countries = Base.classes.countries
# epa = Base.classes.epa


# DB Version 2 references
# tables = Base.classes.master

session = Session(bind=engine)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# HTML ROUTES
#################################################

# LIVE
@app.route("/")
def index():
    """ landing page """
    return render_template("index.html")

# LIVE
@app.route("/general")
def general_index():
    """ all countries waste generated bubble chart + top 25 plastic waste of 2010 page """
    return render_template("general.html")

# LIVE
@app.route("/epa")
def epa_index():
    """ epa grouped-stacked bar chart page """
    return render_template("epa.html")

# LIVE
@app.route("/epaTwo")
def epaTwo_index():
    """ epa grouped-stacked bar chart page """
    return render_template("comparison.html")

# LIVE
@app.route("/estatus")
def estatus_index():
    """ countries economic statues """
    return render_template("estatus.html")

@app.route("/projections")
def projection_index():
    """ 2025 stacked bar chart page """
    return render_template("radiaexampl.html")

# LIVE
@app.route("/data")
def data_index():
    """ data page """
    return render_template("data.html")

#################################################
# DATA ROUTES
#################################################
# USING LIVE
@app.route("/api/epa-waste")
def example():
    results = session.query(epa).all()
    #unravel_string = list(np.ravel(results))
    all = []
    for x in results:
        x_dict = {}
        # x_dict["epa_id"] = x.epa_id
        x_dict["year"] = x.year
        x_dict["tons"] = x.values
        x_dict["treatment_type"] = x.treatment_type
        x_dict["waste_material"] = x.waste_material
        all.append(x_dict)
    return jsonify(all)


# @app.route("/api/countries")
# def info():
#     # results = session.query(countries, global_waste).join(global_waste, countries.country_id == global_waste.country_id).filter(global_waste.year == "2025").all()
#     results = session.query(countries).all()
#     all = []
#     for x in results:
#         x_dict = {}
#         # x_dict["country_id"] = x.country_id
#         x_dict["country"] = x.country_x
#         x_dict["longitude"] = x.longitude
#         x_dict["latitude"] = x.latitude
#         x_dict["values"] = x.value
#         all.append(x_dict)
#     return jsonify(all)

# @app.route("/api/projections")
# def predictions():
#     # results = session.query(countries, global_waste).join(global_waste, countries.country_id == global_waste.country_id).filter(global_waste.year == "2025").all()
#     results = session.query(countries).all()
#     all = []
#     for x in results:
#         x_dict = {}
#         # x_dict["country_id"] = x.country_id
#         x_dict["country"] = x.country_x
#         x_dict["status"] = x.status
#         x_dict["metric"] = x.metric
#         x_dict["values"] = x.value
#         all.append(x_dict)
#     return jsonify(all)

# USING LIVE
@app.route("/api/global-waste")
def global_waste():
    results = session.query(country_plastic_waste).all()
    all = []
    for x in results:
        x_dict = {}
        x_dict["country_id"] = x.country_id
        x_dict["Country"] = x.Country
        x_dict["Plastic_waste_generation_kg_day"] = x.Plastic_waste_generation_kg_day
        x_dict["Managed_plastic_waste_kg_day"] = x.Managed_plastic_waste_kg_day
        x_dict["Mismanaged_plastic_waste_kg_day"] = x.Mismanaged_plastic_waste_kg_day
        all.append(x_dict)

    return jsonify(all)



# 4. Define main behavior
if __name__ == "__main__":
    app.run(debug=True)


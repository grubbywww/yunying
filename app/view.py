#coding:utf-8
from app import app
from flask import render_template,flash,redirect,session,url_for,request,g,jsonify
from werkzeug.utils import secure_filename
import datetime
import time
import os
import re
import sys
import json
import urllib
import urllib2
import xlrd
reload(sys)
sys.setdefaultencoding('utf8')
UPLOAD_FOLDER = 'upload'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
ALLOWED_EXTENSIONS = set(['xls', 'xlsx'])
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS
@app.route('/',methods = ['GET','POST'])
@app.route('/main',methods = ['GET','POST'])
def main():
    path = os.getcwd()
    parent = os.path.join(path,UPLOAD_FOLDER)
    newName = 'excelFile.xls'
    if request.method == 'POST':
        os.remove(os.path.join(parent,newName))
        file = request.files['file']
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            os.rename(os.path.join(parent,filename),os.path.join(parent,newName))
    lists = []
    if os.path.exists(os.path.join(parent,newName)):
        data = xlrd.open_workbook(parent+'/excelFile.xls')
        table = data.sheet_by_index(0)
        nrows = table.nrows
        for i in range(1,nrows):
            rows = table.row_values(i)

            lists.append({'phone':int(rows[7]),'content':rows[8]})
    else:
        lists = []
    return render_template("main.html",arr = lists)
    #return json.dumps(lists)


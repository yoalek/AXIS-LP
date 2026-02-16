
import zipfile

zip_path = '/Users/mac/Documents/axis.landinpage_0.1/axis_landing_page_complete.zip'
try:
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        print(zip_ref.namelist())
except Exception as e:
    print(e)

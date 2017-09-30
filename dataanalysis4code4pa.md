

```python
import pandas as pd
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
#from sklearn.cluster import KMeans
#%matplotlib inline

data = pd.read_csv('code4pa.csv')
print("                  Dataset                 ")
data
```

                      Dataset                 
    




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>HistoricalMarkerId</th>
      <th>Name</th>
      <th>County</th>
      <th>DedicatedYear</th>
      <th>DedicatedMonth</th>
      <th>DedicatedDate</th>
      <th>MarkerType</th>
      <th>Location</th>
      <th>MarkerText</th>
      <th>Status</th>
      <th>Longitude</th>
      <th>Latitude</th>
      <th>Category</th>
      <th>CategoryCounter</th>
      <th>Location 1</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>Reading Railroad Massacre</td>
      <td>Berks</td>
      <td>1993</td>
      <td>10.0</td>
      <td>16.0</td>
      <td>City</td>
      <td>7th &amp; Penn Sts., Reading</td>
      <td>In 1877, amidst hard times, unrest hit U.S. ra...</td>
      <td>NaN</td>
      <td>-75.9242</td>
      <td>40.3351</td>
      <td>Labor</td>
      <td>1</td>
      <td>(40.3351, -75.9242)</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1</td>
      <td>Reading Railroad Massacre</td>
      <td>Berks</td>
      <td>1993</td>
      <td>10.0</td>
      <td>16.0</td>
      <td>City</td>
      <td>7th &amp; Penn Sts., Reading</td>
      <td>In 1877, amidst hard times, unrest hit U.S. ra...</td>
      <td>NaN</td>
      <td>-75.9242</td>
      <td>40.3351</td>
      <td>Railroads</td>
      <td>2</td>
      <td>(40.3351, -75.9242)</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1</td>
      <td>Reading Railroad Massacre</td>
      <td>Berks</td>
      <td>1993</td>
      <td>10.0</td>
      <td>16.0</td>
      <td>City</td>
      <td>7th &amp; Penn Sts., Reading</td>
      <td>In 1877, amidst hard times, unrest hit U.S. ra...</td>
      <td>NaN</td>
      <td>-75.9242</td>
      <td>40.3351</td>
      <td>Transportation</td>
      <td>3</td>
      <td>(40.3351, -75.9242)</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2</td>
      <td>Silver Spring Presbyterian Church</td>
      <td>Cumberland</td>
      <td>1947</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>Roadside</td>
      <td>444 Silver Spring Rd., at church, S of Carlisl...</td>
      <td>Founded 1734 on land of James Silver by Scotch...</td>
      <td>NaN</td>
      <td>-77.0076</td>
      <td>40.2389</td>
      <td>Early Settlement</td>
      <td>1</td>
      <td>(40.2389, -77.0076)</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2</td>
      <td>Silver Spring Presbyterian Church</td>
      <td>Cumberland</td>
      <td>1947</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>Roadside</td>
      <td>444 Silver Spring Rd., at church, S of Carlisl...</td>
      <td>Founded 1734 on land of James Silver by Scotch...</td>
      <td>NaN</td>
      <td>-77.0076</td>
      <td>40.2389</td>
      <td>Ethnic &amp; Immigration</td>
      <td>2</td>
      <td>(40.2389, -77.0076)</td>
    </tr>
    <tr>
      <th>5</th>
      <td>2</td>
      <td>Silver Spring Presbyterian Church</td>
      <td>Cumberland</td>
      <td>1947</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>Roadside</td>
      <td>444 Silver Spring Rd., at church, S of Carlisl...</td>
      <td>Founded 1734 on land of James Silver by Scotch...</td>
      <td>NaN</td>
      <td>-77.0076</td>
      <td>40.2389</td>
      <td>Religion</td>
      <td>3</td>
      <td>(40.2389, -77.0076)</td>
    </tr>
    <tr>
      <th>6</th>
      <td>3</td>
      <td>Lebanon County</td>
      <td>Lebanon</td>
      <td>1982</td>
      <td>10.0</td>
      <td>6.0</td>
      <td>City</td>
      <td>County-Municipal Bldg., 400 S. 8th St., Lebanon</td>
      <td>Formed on February 16, 1813 from Dauphin and L...</td>
      <td>NaN</td>
      <td>-76.4239</td>
      <td>40.3326</td>
      <td>Agriculture</td>
      <td>1</td>
      <td>(40.3326, -76.4239)</td>
    </tr>
    <tr>
      <th>7</th>
      <td>3</td>
      <td>Lebanon County</td>
      <td>Lebanon</td>
      <td>1982</td>
      <td>10.0</td>
      <td>6.0</td>
      <td>City</td>
      <td>County-Municipal Bldg., 400 S. 8th St., Lebanon</td>
      <td>Formed on February 16, 1813 from Dauphin and L...</td>
      <td>NaN</td>
      <td>-76.4239</td>
      <td>40.3326</td>
      <td>Government &amp; Politics</td>
      <td>2</td>
      <td>(40.3326, -76.4239)</td>
    </tr>
    <tr>
      <th>8</th>
      <td>3</td>
      <td>Lebanon County</td>
      <td>Lebanon</td>
      <td>1982</td>
      <td>10.0</td>
      <td>6.0</td>
      <td>City</td>
      <td>County-Municipal Bldg., 400 S. 8th St., Lebanon</td>
      <td>Formed on February 16, 1813 from Dauphin and L...</td>
      <td>NaN</td>
      <td>-76.4239</td>
      <td>40.3326</td>
      <td>Government &amp; Politics 19th Century</td>
      <td>3</td>
      <td>(40.3326, -76.4239)</td>
    </tr>
    <tr>
      <th>9</th>
      <td>3</td>
      <td>Lebanon County</td>
      <td>Lebanon</td>
      <td>1982</td>
      <td>10.0</td>
      <td>6.0</td>
      <td>City</td>
      <td>County-Municipal Bldg., 400 S. 8th St., Lebanon</td>
      <td>Formed on February 16, 1813 from Dauphin and L...</td>
      <td>NaN</td>
      <td>-76.4239</td>
      <td>40.3326</td>
      <td>Religion</td>
      <td>4</td>
      <td>(40.3326, -76.4239)</td>
    </tr>
    <tr>
      <th>10</th>
      <td>4</td>
      <td>Edwin L. Drake</td>
      <td>Northampton</td>
      <td>1959</td>
      <td>10.0</td>
      <td>21.0</td>
      <td>City</td>
      <td>331 Wyandotte St. (PA 378), Bethlehem</td>
      <td>Drilled first oil well in America in 1859 at T...</td>
      <td>NaN</td>
      <td>-75.3844</td>
      <td>40.6108</td>
      <td>Business &amp; Industry</td>
      <td>1</td>
      <td>(40.6108, -75.3844)</td>
    </tr>
    <tr>
      <th>11</th>
      <td>4</td>
      <td>Edwin L. Drake</td>
      <td>Northampton</td>
      <td>1959</td>
      <td>10.0</td>
      <td>21.0</td>
      <td>City</td>
      <td>331 Wyandotte St. (PA 378), Bethlehem</td>
      <td>Drilled first oil well in America in 1859 at T...</td>
      <td>NaN</td>
      <td>-75.3844</td>
      <td>40.6108</td>
      <td>Entrepreneurs</td>
      <td>2</td>
      <td>(40.6108, -75.3844)</td>
    </tr>
    <tr>
      <th>12</th>
      <td>4</td>
      <td>Edwin L. Drake</td>
      <td>Northampton</td>
      <td>1959</td>
      <td>10.0</td>
      <td>21.0</td>
      <td>City</td>
      <td>331 Wyandotte St. (PA 378), Bethlehem</td>
      <td>Drilled first oil well in America in 1859 at T...</td>
      <td>NaN</td>
      <td>-75.3844</td>
      <td>40.6108</td>
      <td>Oil &amp; Gas</td>
      <td>3</td>
      <td>(40.6108, -75.3844)</td>
    </tr>
    <tr>
      <th>13</th>
      <td>5</td>
      <td>Berean Institute</td>
      <td>Philadelphia</td>
      <td>1990</td>
      <td>10.0</td>
      <td>17.0</td>
      <td>City</td>
      <td>1901 W. Girard Ave., Philadelphia</td>
      <td>Founded in 1899 by Rev. Matthew Anderson, past...</td>
      <td>NaN</td>
      <td>-75.1676</td>
      <td>39.9726</td>
      <td>African American</td>
      <td>1</td>
      <td>(39.9726, -75.1676)</td>
    </tr>
    <tr>
      <th>14</th>
      <td>5</td>
      <td>Berean Institute</td>
      <td>Philadelphia</td>
      <td>1990</td>
      <td>10.0</td>
      <td>17.0</td>
      <td>City</td>
      <td>1901 W. Girard Ave., Philadelphia</td>
      <td>Founded in 1899 by Rev. Matthew Anderson, past...</td>
      <td>NaN</td>
      <td>-75.1676</td>
      <td>39.9726</td>
      <td>Education</td>
      <td>2</td>
      <td>(39.9726, -75.1676)</td>
    </tr>
    <tr>
      <th>15</th>
      <td>5</td>
      <td>Berean Institute</td>
      <td>Philadelphia</td>
      <td>1990</td>
      <td>10.0</td>
      <td>17.0</td>
      <td>City</td>
      <td>1901 W. Girard Ave., Philadelphia</td>
      <td>Founded in 1899 by Rev. Matthew Anderson, past...</td>
      <td>NaN</td>
      <td>-75.1676</td>
      <td>39.9726</td>
      <td>Religion</td>
      <td>3</td>
      <td>(39.9726, -75.1676)</td>
    </tr>
    <tr>
      <th>16</th>
      <td>6</td>
      <td>Forbes Road - Fort Dewart</td>
      <td>Somerset</td>
      <td>1952</td>
      <td>1.0</td>
      <td>30.0</td>
      <td>Roadside</td>
      <td>US 30, New Baltimore, near Bedford County line</td>
      <td>The fort on the top of Allegheny Hill was erec...</td>
      <td>NaN</td>
      <td>-78.7674</td>
      <td>40.0388</td>
      <td>Forts</td>
      <td>1</td>
      <td>(40.0388, -78.7674)</td>
    </tr>
    <tr>
      <th>17</th>
      <td>6</td>
      <td>Forbes Road - Fort Dewart</td>
      <td>Somerset</td>
      <td>1952</td>
      <td>1.0</td>
      <td>30.0</td>
      <td>Roadside</td>
      <td>US 30, New Baltimore, near Bedford County line</td>
      <td>The fort on the top of Allegheny Hill was erec...</td>
      <td>NaN</td>
      <td>-78.7674</td>
      <td>40.0388</td>
      <td>French &amp; Indian War</td>
      <td>2</td>
      <td>(40.0388, -78.7674)</td>
    </tr>
    <tr>
      <th>18</th>
      <td>6</td>
      <td>Forbes Road - Fort Dewart</td>
      <td>Somerset</td>
      <td>1952</td>
      <td>1.0</td>
      <td>30.0</td>
      <td>Roadside</td>
      <td>US 30, New Baltimore, near Bedford County line</td>
      <td>The fort on the top of Allegheny Hill was erec...</td>
      <td>NaN</td>
      <td>-78.7674</td>
      <td>40.0388</td>
      <td>Military</td>
      <td>3</td>
      <td>(40.0388, -78.7674)</td>
    </tr>
    <tr>
      <th>19</th>
      <td>6</td>
      <td>Forbes Road - Fort Dewart</td>
      <td>Somerset</td>
      <td>1952</td>
      <td>1.0</td>
      <td>30.0</td>
      <td>Roadside</td>
      <td>US 30, New Baltimore, near Bedford County line</td>
      <td>The fort on the top of Allegheny Hill was erec...</td>
      <td>NaN</td>
      <td>-78.7674</td>
      <td>40.0388</td>
      <td>Roads</td>
      <td>4</td>
      <td>(40.0388, -78.7674)</td>
    </tr>
    <tr>
      <th>20</th>
      <td>7</td>
      <td>Gantz Oil Well</td>
      <td>Washington</td>
      <td>1953</td>
      <td>10.0</td>
      <td>3.0</td>
      <td>City</td>
      <td>W. Chestnut St. at Brookside Ave., Washington</td>
      <td>Site of first oil well in Washington County. O...</td>
      <td>Missing</td>
      <td>-80.2555</td>
      <td>40.1712</td>
      <td>Business &amp; Industry</td>
      <td>1</td>
      <td>(40.1712, -80.2555)</td>
    </tr>
    <tr>
      <th>21</th>
      <td>7</td>
      <td>Gantz Oil Well</td>
      <td>Washington</td>
      <td>1953</td>
      <td>10.0</td>
      <td>3.0</td>
      <td>City</td>
      <td>W. Chestnut St. at Brookside Ave., Washington</td>
      <td>Site of first oil well in Washington County. O...</td>
      <td>Missing</td>
      <td>-80.2555</td>
      <td>40.1712</td>
      <td>Oil &amp; Gas</td>
      <td>2</td>
      <td>(40.1712, -80.2555)</td>
    </tr>
    <tr>
      <th>22</th>
      <td>8</td>
      <td>Market House</td>
      <td>York</td>
      <td>1954</td>
      <td>9.0</td>
      <td>14.0</td>
      <td>City</td>
      <td>NE section of Square, Rt. 94 (Baltimore St.) &amp;...</td>
      <td>Stood on this square from 1815 to 1872. Under ...</td>
      <td>NaN</td>
      <td>-76.9828</td>
      <td>39.8005</td>
      <td>Buildings &amp; Architecture</td>
      <td>1</td>
      <td>(39.8005, -76.9828)</td>
    </tr>
    <tr>
      <th>23</th>
      <td>8</td>
      <td>Market House</td>
      <td>York</td>
      <td>1954</td>
      <td>9.0</td>
      <td>14.0</td>
      <td>City</td>
      <td>NE section of Square, Rt. 94 (Baltimore St.) &amp;...</td>
      <td>Stood on this square from 1815 to 1872. Under ...</td>
      <td>NaN</td>
      <td>-76.9828</td>
      <td>39.8005</td>
      <td>Business &amp; Industry</td>
      <td>2</td>
      <td>(39.8005, -76.9828)</td>
    </tr>
    <tr>
      <th>24</th>
      <td>8</td>
      <td>Market House</td>
      <td>York</td>
      <td>1954</td>
      <td>9.0</td>
      <td>14.0</td>
      <td>City</td>
      <td>NE section of Square, Rt. 94 (Baltimore St.) &amp;...</td>
      <td>Stood on this square from 1815 to 1872. Under ...</td>
      <td>NaN</td>
      <td>-76.9828</td>
      <td>39.8005</td>
      <td>Houses &amp; Homesteads</td>
      <td>3</td>
      <td>(39.8005, -76.9828)</td>
    </tr>
    <tr>
      <th>25</th>
      <td>8</td>
      <td>Market House</td>
      <td>York</td>
      <td>1954</td>
      <td>9.0</td>
      <td>14.0</td>
      <td>City</td>
      <td>NE section of Square, Rt. 94 (Baltimore St.) &amp;...</td>
      <td>Stood on this square from 1815 to 1872. Under ...</td>
      <td>NaN</td>
      <td>-76.9828</td>
      <td>39.8005</td>
      <td>Police and Safety</td>
      <td>4</td>
      <td>(39.8005, -76.9828)</td>
    </tr>
    <tr>
      <th>26</th>
      <td>9</td>
      <td>Station WQED</td>
      <td>Allegheny</td>
      <td>1964</td>
      <td>8.0</td>
      <td>20.0</td>
      <td>City</td>
      <td>4802 5th Ave., Oakland (Pittsburgh)</td>
      <td>Television station, located here, opened April...</td>
      <td>NaN</td>
      <td>-79.9445</td>
      <td>40.4472</td>
      <td>Business &amp; Industry</td>
      <td>1</td>
      <td>(40.4472, -79.9445)</td>
    </tr>
    <tr>
      <th>27</th>
      <td>9</td>
      <td>Station WQED</td>
      <td>Allegheny</td>
      <td>1964</td>
      <td>8.0</td>
      <td>20.0</td>
      <td>City</td>
      <td>4802 5th Ave., Oakland (Pittsburgh)</td>
      <td>Television station, located here, opened April...</td>
      <td>NaN</td>
      <td>-79.9445</td>
      <td>40.4472</td>
      <td>Education</td>
      <td>2</td>
      <td>(40.4472, -79.9445)</td>
    </tr>
    <tr>
      <th>28</th>
      <td>9</td>
      <td>Station WQED</td>
      <td>Allegheny</td>
      <td>1964</td>
      <td>8.0</td>
      <td>20.0</td>
      <td>City</td>
      <td>4802 5th Ave., Oakland (Pittsburgh)</td>
      <td>Television station, located here, opened April...</td>
      <td>NaN</td>
      <td>-79.9445</td>
      <td>40.4472</td>
      <td>Motion Pictures &amp; Television</td>
      <td>3</td>
      <td>(40.4472, -79.9445)</td>
    </tr>
    <tr>
      <th>29</th>
      <td>10</td>
      <td>Catawissa Friends Meeting</td>
      <td>Columbia</td>
      <td>1948</td>
      <td>5.0</td>
      <td>8.0</td>
      <td>Roadside</td>
      <td>Junction U.S. 11 &amp; Pa. 42, .7 mile SW of Bloom...</td>
      <td>At Catawissa, three miles distant, is the Frie...</td>
      <td>NaN</td>
      <td>-76.4785</td>
      <td>40.9884</td>
      <td>Buildings &amp; Architecture</td>
      <td>1</td>
      <td>(40.9884, -76.4785)</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>7631</th>
      <td>2522</td>
      <td>Dr. James Curtis Hepburn (1815-1911)</td>
      <td>Northumberland</td>
      <td>2017</td>
      <td>6.0</td>
      <td>15.0</td>
      <td>Roadside</td>
      <td>N Front St. (PA 405) near Walnut, at edge of P...</td>
      <td>Physician and Presbyterian missionary to Japan...</td>
      <td>NaN</td>
      <td>-76.8550</td>
      <td>41.0211</td>
      <td>Professions &amp; Vocations</td>
      <td>3</td>
      <td>(41.0211, -76.855)</td>
    </tr>
    <tr>
      <th>7632</th>
      <td>2522</td>
      <td>Dr. James Curtis Hepburn (1815-1911)</td>
      <td>Northumberland</td>
      <td>2017</td>
      <td>6.0</td>
      <td>15.0</td>
      <td>Roadside</td>
      <td>N Front St. (PA 405) near Walnut, at edge of P...</td>
      <td>Physician and Presbyterian missionary to Japan...</td>
      <td>NaN</td>
      <td>-76.8550</td>
      <td>41.0211</td>
      <td>Religion</td>
      <td>4</td>
      <td>(41.0211, -76.855)</td>
    </tr>
    <tr>
      <th>7633</th>
      <td>2522</td>
      <td>Dr. James Curtis Hepburn (1815-1911)</td>
      <td>Northumberland</td>
      <td>2017</td>
      <td>6.0</td>
      <td>15.0</td>
      <td>Roadside</td>
      <td>N Front St. (PA 405) near Walnut, at edge of P...</td>
      <td>Physician and Presbyterian missionary to Japan...</td>
      <td>NaN</td>
      <td>-76.8550</td>
      <td>41.0211</td>
      <td>Writers</td>
      <td>5</td>
      <td>(41.0211, -76.855)</td>
    </tr>
    <tr>
      <th>7634</th>
      <td>2523</td>
      <td>Westinghouse Gas Wells</td>
      <td>Allegheny</td>
      <td>2016</td>
      <td>11.0</td>
      <td>30.0</td>
      <td>Roadside</td>
      <td>Westinghouse Park, Thomas Blvd &amp; N Murtland St...</td>
      <td>In 1884, George Westinghouse drilled a natural...</td>
      <td>NaN</td>
      <td>-79.9044</td>
      <td>40.4525</td>
      <td>Business &amp; Industry</td>
      <td>1</td>
      <td>(40.4525, -79.9044)</td>
    </tr>
    <tr>
      <th>7635</th>
      <td>2523</td>
      <td>Westinghouse Gas Wells</td>
      <td>Allegheny</td>
      <td>2016</td>
      <td>11.0</td>
      <td>30.0</td>
      <td>Roadside</td>
      <td>Westinghouse Park, Thomas Blvd &amp; N Murtland St...</td>
      <td>In 1884, George Westinghouse drilled a natural...</td>
      <td>NaN</td>
      <td>-79.9044</td>
      <td>40.4525</td>
      <td>Environment</td>
      <td>2</td>
      <td>(40.4525, -79.9044)</td>
    </tr>
    <tr>
      <th>7636</th>
      <td>2523</td>
      <td>Westinghouse Gas Wells</td>
      <td>Allegheny</td>
      <td>2016</td>
      <td>11.0</td>
      <td>30.0</td>
      <td>Roadside</td>
      <td>Westinghouse Park, Thomas Blvd &amp; N Murtland St...</td>
      <td>In 1884, George Westinghouse drilled a natural...</td>
      <td>NaN</td>
      <td>-79.9044</td>
      <td>40.4525</td>
      <td>Invention</td>
      <td>3</td>
      <td>(40.4525, -79.9044)</td>
    </tr>
    <tr>
      <th>7637</th>
      <td>2523</td>
      <td>Westinghouse Gas Wells</td>
      <td>Allegheny</td>
      <td>2016</td>
      <td>11.0</td>
      <td>30.0</td>
      <td>Roadside</td>
      <td>Westinghouse Park, Thomas Blvd &amp; N Murtland St...</td>
      <td>In 1884, George Westinghouse drilled a natural...</td>
      <td>NaN</td>
      <td>-79.9044</td>
      <td>40.4525</td>
      <td>Oil &amp; Gas</td>
      <td>4</td>
      <td>(40.4525, -79.9044)</td>
    </tr>
    <tr>
      <th>7638</th>
      <td>2524</td>
      <td>American Institute of Mining Engineers</td>
      <td>Luzerne</td>
      <td>2016</td>
      <td>5.0</td>
      <td>16.0</td>
      <td>Roadside</td>
      <td>16 S River St., Wilkes-Barre, in front of park...</td>
      <td>Organization founded in 1871 by 22 mining prof...</td>
      <td>NaN</td>
      <td>-75.8842</td>
      <td>41.2479</td>
      <td>Business &amp; Industry</td>
      <td>1</td>
      <td>(41.2479, -75.8842)</td>
    </tr>
    <tr>
      <th>7639</th>
      <td>2524</td>
      <td>American Institute of Mining Engineers</td>
      <td>Luzerne</td>
      <td>2016</td>
      <td>5.0</td>
      <td>16.0</td>
      <td>Roadside</td>
      <td>16 S River St., Wilkes-Barre, in front of park...</td>
      <td>Organization founded in 1871 by 22 mining prof...</td>
      <td>NaN</td>
      <td>-75.8842</td>
      <td>41.2479</td>
      <td>Coal</td>
      <td>2</td>
      <td>(41.2479, -75.8842)</td>
    </tr>
    <tr>
      <th>7640</th>
      <td>2524</td>
      <td>American Institute of Mining Engineers</td>
      <td>Luzerne</td>
      <td>2016</td>
      <td>5.0</td>
      <td>16.0</td>
      <td>Roadside</td>
      <td>16 S River St., Wilkes-Barre, in front of park...</td>
      <td>Organization founded in 1871 by 22 mining prof...</td>
      <td>NaN</td>
      <td>-75.8842</td>
      <td>41.2479</td>
      <td>Education</td>
      <td>3</td>
      <td>(41.2479, -75.8842)</td>
    </tr>
    <tr>
      <th>7641</th>
      <td>2524</td>
      <td>American Institute of Mining Engineers</td>
      <td>Luzerne</td>
      <td>2016</td>
      <td>5.0</td>
      <td>16.0</td>
      <td>Roadside</td>
      <td>16 S River St., Wilkes-Barre, in front of park...</td>
      <td>Organization founded in 1871 by 22 mining prof...</td>
      <td>NaN</td>
      <td>-75.8842</td>
      <td>41.2479</td>
      <td>Iron &amp; Steel</td>
      <td>4</td>
      <td>(41.2479, -75.8842)</td>
    </tr>
    <tr>
      <th>7642</th>
      <td>2524</td>
      <td>American Institute of Mining Engineers</td>
      <td>Luzerne</td>
      <td>2016</td>
      <td>5.0</td>
      <td>16.0</td>
      <td>Roadside</td>
      <td>16 S River St., Wilkes-Barre, in front of park...</td>
      <td>Organization founded in 1871 by 22 mining prof...</td>
      <td>NaN</td>
      <td>-75.8842</td>
      <td>41.2479</td>
      <td>Science &amp; Medicine</td>
      <td>5</td>
      <td>(41.2479, -75.8842)</td>
    </tr>
    <tr>
      <th>7643</th>
      <td>2524</td>
      <td>American Institute of Mining Engineers</td>
      <td>Luzerne</td>
      <td>2016</td>
      <td>5.0</td>
      <td>16.0</td>
      <td>Roadside</td>
      <td>16 S River St., Wilkes-Barre, in front of park...</td>
      <td>Organization founded in 1871 by 22 mining prof...</td>
      <td>NaN</td>
      <td>-75.8842</td>
      <td>41.2479</td>
      <td>Oil &amp; Gas</td>
      <td>6</td>
      <td>(41.2479, -75.8842)</td>
    </tr>
    <tr>
      <th>7644</th>
      <td>2524</td>
      <td>American Institute of Mining Engineers</td>
      <td>Luzerne</td>
      <td>2016</td>
      <td>5.0</td>
      <td>16.0</td>
      <td>Roadside</td>
      <td>16 S River St., Wilkes-Barre, in front of park...</td>
      <td>Organization founded in 1871 by 22 mining prof...</td>
      <td>NaN</td>
      <td>-75.8842</td>
      <td>41.2479</td>
      <td>Professions &amp; Vocations</td>
      <td>7</td>
      <td>(41.2479, -75.8842)</td>
    </tr>
    <tr>
      <th>7645</th>
      <td>2525</td>
      <td>Hockendauqua</td>
      <td>Northampton</td>
      <td>1948</td>
      <td>3.0</td>
      <td>18.0</td>
      <td>Roadside</td>
      <td>Nor Both Blvd. (PA 329) on eastern side of Hok...</td>
      <td>The Indian town of the noted chiefs Lappawinzo...</td>
      <td>Missing</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>1</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>7646</th>
      <td>2526</td>
      <td>Repasz Band</td>
      <td>Lycoming</td>
      <td>2017</td>
      <td>8.0</td>
      <td>1.0</td>
      <td>Roadside</td>
      <td>Packer St. in Brandon Park near band shell, Wi...</td>
      <td>Founded in Williamsport in 1831 and named for ...</td>
      <td>NaN</td>
      <td>-77.0033</td>
      <td>41.2489</td>
      <td>Civil War</td>
      <td>1</td>
      <td>(41.2489, -77.0033)</td>
    </tr>
    <tr>
      <th>7647</th>
      <td>2526</td>
      <td>Repasz Band</td>
      <td>Lycoming</td>
      <td>2017</td>
      <td>8.0</td>
      <td>1.0</td>
      <td>Roadside</td>
      <td>Packer St. in Brandon Park near band shell, Wi...</td>
      <td>Founded in Williamsport in 1831 and named for ...</td>
      <td>NaN</td>
      <td>-77.0033</td>
      <td>41.2489</td>
      <td>Government &amp; Politics 19th Century</td>
      <td>2</td>
      <td>(41.2489, -77.0033)</td>
    </tr>
    <tr>
      <th>7648</th>
      <td>2526</td>
      <td>Repasz Band</td>
      <td>Lycoming</td>
      <td>2017</td>
      <td>8.0</td>
      <td>1.0</td>
      <td>Roadside</td>
      <td>Packer St. in Brandon Park near band shell, Wi...</td>
      <td>Founded in Williamsport in 1831 and named for ...</td>
      <td>NaN</td>
      <td>-77.0033</td>
      <td>41.2489</td>
      <td>Government &amp; Politics 20th Century</td>
      <td>3</td>
      <td>(41.2489, -77.0033)</td>
    </tr>
    <tr>
      <th>7649</th>
      <td>2526</td>
      <td>Repasz Band</td>
      <td>Lycoming</td>
      <td>2017</td>
      <td>8.0</td>
      <td>1.0</td>
      <td>Roadside</td>
      <td>Packer St. in Brandon Park near band shell, Wi...</td>
      <td>Founded in Williamsport in 1831 and named for ...</td>
      <td>NaN</td>
      <td>-77.0033</td>
      <td>41.2489</td>
      <td>Military</td>
      <td>4</td>
      <td>(41.2489, -77.0033)</td>
    </tr>
    <tr>
      <th>7650</th>
      <td>2526</td>
      <td>Repasz Band</td>
      <td>Lycoming</td>
      <td>2017</td>
      <td>8.0</td>
      <td>1.0</td>
      <td>Roadside</td>
      <td>Packer St. in Brandon Park near band shell, Wi...</td>
      <td>Founded in Williamsport in 1831 and named for ...</td>
      <td>NaN</td>
      <td>-77.0033</td>
      <td>41.2489</td>
      <td>Music &amp; Theater</td>
      <td>5</td>
      <td>(41.2489, -77.0033)</td>
    </tr>
    <tr>
      <th>7651</th>
      <td>2527</td>
      <td>The MOVE Bombing</td>
      <td>Philadelphia</td>
      <td>2017</td>
      <td>6.0</td>
      <td>24.0</td>
      <td>City</td>
      <td>Cobbs Creek Pkwy. on Cobbs Creek Park side of ...</td>
      <td>On May 13, 1985, at 6221 Osage Avenue, an arme...</td>
      <td>NaN</td>
      <td>-75.2483</td>
      <td>39.9557</td>
      <td>African American</td>
      <td>1</td>
      <td>(39.9557, -75.2483)</td>
    </tr>
    <tr>
      <th>7652</th>
      <td>2527</td>
      <td>The MOVE Bombing</td>
      <td>Philadelphia</td>
      <td>2017</td>
      <td>6.0</td>
      <td>24.0</td>
      <td>City</td>
      <td>Cobbs Creek Pkwy. on Cobbs Creek Park side of ...</td>
      <td>On May 13, 1985, at 6221 Osage Avenue, an arme...</td>
      <td>NaN</td>
      <td>-75.2483</td>
      <td>39.9557</td>
      <td>Government &amp; Politics 20th Century</td>
      <td>2</td>
      <td>(39.9557, -75.2483)</td>
    </tr>
    <tr>
      <th>7653</th>
      <td>2527</td>
      <td>The MOVE Bombing</td>
      <td>Philadelphia</td>
      <td>2017</td>
      <td>6.0</td>
      <td>24.0</td>
      <td>City</td>
      <td>Cobbs Creek Pkwy. on Cobbs Creek Park side of ...</td>
      <td>On May 13, 1985, at 6221 Osage Avenue, an arme...</td>
      <td>NaN</td>
      <td>-75.2483</td>
      <td>39.9557</td>
      <td>Police and Safety</td>
      <td>3</td>
      <td>(39.9557, -75.2483)</td>
    </tr>
    <tr>
      <th>7654</th>
      <td>2528</td>
      <td>Fairview Park</td>
      <td>Westmoreland</td>
      <td>2017</td>
      <td>8.0</td>
      <td>19.0</td>
      <td>Roadside</td>
      <td>Pittsburgh St./Old Wm. Penn Hwy. near Turner L...</td>
      <td>Due to racial segregation into the mid-20th ce...</td>
      <td>NaN</td>
      <td>-79.5515</td>
      <td>40.4061</td>
      <td>African American</td>
      <td>1</td>
      <td>(40.4061, -79.5515)</td>
    </tr>
    <tr>
      <th>7655</th>
      <td>2528</td>
      <td>Fairview Park</td>
      <td>Westmoreland</td>
      <td>2017</td>
      <td>8.0</td>
      <td>19.0</td>
      <td>Roadside</td>
      <td>Pittsburgh St./Old Wm. Penn Hwy. near Turner L...</td>
      <td>Due to racial segregation into the mid-20th ce...</td>
      <td>NaN</td>
      <td>-79.5515</td>
      <td>40.4061</td>
      <td>Religion</td>
      <td>2</td>
      <td>(40.4061, -79.5515)</td>
    </tr>
    <tr>
      <th>7656</th>
      <td>2528</td>
      <td>Fairview Park</td>
      <td>Westmoreland</td>
      <td>2017</td>
      <td>8.0</td>
      <td>19.0</td>
      <td>Roadside</td>
      <td>Pittsburgh St./Old Wm. Penn Hwy. near Turner L...</td>
      <td>Due to racial segregation into the mid-20th ce...</td>
      <td>NaN</td>
      <td>-79.5515</td>
      <td>40.4061</td>
      <td>Sports &amp; Recreation</td>
      <td>3</td>
      <td>(40.4061, -79.5515)</td>
    </tr>
    <tr>
      <th>7657</th>
      <td>2529</td>
      <td>Robertson Art Tile Company</td>
      <td>Bucks</td>
      <td>2017</td>
      <td>8.0</td>
      <td>23.0</td>
      <td>Roadside</td>
      <td>S Pennsylvania Ave &amp; Green St., Morrisville</td>
      <td>An innovative tile and abrasives manufacturer,...</td>
      <td>NaN</td>
      <td>-74.7741</td>
      <td>40.2047</td>
      <td>Artists</td>
      <td>1</td>
      <td>(40.2047, -74.7741)</td>
    </tr>
    <tr>
      <th>7658</th>
      <td>2529</td>
      <td>Robertson Art Tile Company</td>
      <td>Bucks</td>
      <td>2017</td>
      <td>8.0</td>
      <td>23.0</td>
      <td>Roadside</td>
      <td>S Pennsylvania Ave &amp; Green St., Morrisville</td>
      <td>An innovative tile and abrasives manufacturer,...</td>
      <td>NaN</td>
      <td>-74.7741</td>
      <td>40.2047</td>
      <td>Buildings &amp; Architecture</td>
      <td>2</td>
      <td>(40.2047, -74.7741)</td>
    </tr>
    <tr>
      <th>7659</th>
      <td>2529</td>
      <td>Robertson Art Tile Company</td>
      <td>Bucks</td>
      <td>2017</td>
      <td>8.0</td>
      <td>23.0</td>
      <td>Roadside</td>
      <td>S Pennsylvania Ave &amp; Green St., Morrisville</td>
      <td>An innovative tile and abrasives manufacturer,...</td>
      <td>NaN</td>
      <td>-74.7741</td>
      <td>40.2047</td>
      <td>Business &amp; Industry</td>
      <td>3</td>
      <td>(40.2047, -74.7741)</td>
    </tr>
    <tr>
      <th>7660</th>
      <td>2529</td>
      <td>Robertson Art Tile Company</td>
      <td>Bucks</td>
      <td>2017</td>
      <td>8.0</td>
      <td>23.0</td>
      <td>Roadside</td>
      <td>S Pennsylvania Ave &amp; Green St., Morrisville</td>
      <td>An innovative tile and abrasives manufacturer,...</td>
      <td>NaN</td>
      <td>-74.7741</td>
      <td>40.2047</td>
      <td>Invention</td>
      <td>4</td>
      <td>(40.2047, -74.7741)</td>
    </tr>
  </tbody>
</table>
<p>7661 rows × 15 columns</p>
</div>




```python
print("                       information About the data                     ")
data.info()
```

                           information About the data                     
    <class 'pandas.core.frame.DataFrame'>
    RangeIndex: 7661 entries, 0 to 7660
    Data columns (total 15 columns):
    HistoricalMarkerId    7661 non-null int64
    Name                  7661 non-null object
    County                7661 non-null object
    DedicatedYear         7661 non-null int64
    DedicatedMonth        7155 non-null float64
    DedicatedDate         7006 non-null float64
    MarkerType            7661 non-null object
    Location              7661 non-null object
    MarkerText            7661 non-null object
    Status                816 non-null object
    Longitude             6840 non-null float64
    Latitude              6840 non-null float64
    Category              7652 non-null object
    CategoryCounter       7661 non-null int64
    Location 1            6840 non-null object
    dtypes: float64(4), int64(3), object(8)
    memory usage: 897.8+ KB
    


```python
print("                        DATA SET CONTAINS INFORMATION ABout YEAR      ")
data.DedicatedYear.unique()
```

                            DATA SET CONTAINS INFORMATION ABout YEAR      
    




    array([1993, 1947, 1982, 1959, 1990, 1952, 1953, 1954, 1964, 1948, 1967,
           1992, 1969, 1970, 1974, 2008, 1963, 1960, 1950, 1972, 1955, 2000,
           1949, 1973, 1958, 1997, 1995, 1979, 1986, 1996, 1946, 1951, 2005,
           1983, 1980, 1985, 1966, 1988, 1975, 1991, 1987, 1968, 1981, 1999,
           1994, 2001, 2002, 1957, 1961, 2003, 1962, 1984, 1998, 1965, 2017,
           1929, 1930, 1931, 1926, 1918, 1928, 1921, 1925, 1916, 1932, 1915,
           1922, 1943, 1917, 1924, 1919, 1933, 1914, 2006, 1977, 2007, 1971,
           2015, 1989, 1978, 2004, 1976, 2013, 2016, 2009, 2010, 2011, 2012,
           2014, 1935], dtype=int64)




```python
print("                        DATA SET CONTAINS INFORMATION ABout DedicatedMonth      ")
data.DedicatedMonth.unique()
```

                            DATA SET CONTAINS INFORMATION ABout DedicatedMonth      
    




    array([ 10.,  nan,   1.,   9.,   8.,   5.,   2.,   6.,   4.,   3.,  11.,
            12.,   7.])




```python
print("                        DATA SET CONTAINS INFORMATION ABout DedicatedDate      ")
data.DedicatedDate.unique()
```

                            DATA SET CONTAINS INFORMATION ABout DedicatedDate      
    




    array([ 16.,  nan,   6.,  21.,  17.,  30.,   3.,  14.,  20.,   8.,  27.,
            13.,   4.,  15.,   9.,   1.,  28.,  26.,  29.,  25.,  22.,  12.,
            10.,  23.,   5.,   2.,   7.,  18.,  11.,  31.,  24.,  19.])




```python
print("                        DATA SET CONTAINS INFORMATION ABout MarkerType      ")
data.MarkerType.unique()
```

                            DATA SET CONTAINS INFORMATION ABout MarkerType      
    




    array(['City', 'Roadside', 'Plaque'], dtype=object)




```python
print("                        DATA SET CONTAINS INFORMATION ABout Location     ")
data.Location.unique()
```

                            DATA SET CONTAINS INFORMATION ABout Location     
    




    array(['7th & Penn Sts., Reading',
           '444 Silver Spring Rd., at church, S of Carlisle Pk. (US 11), Mechanicsburg',
           'County-Municipal Bldg., 400 S. 8th St., Lebanon', ...,
           'Cobbs Creek Pkwy. on Cobbs Creek Park side of street opposite Osage Ave.',
           'Pittsburgh St./Old Wm. Penn Hwy. near Turner Ln., Delmont',
           'S Pennsylvania Ave & Green St., Morrisville'], dtype=object)




```python
print("                        DATA SET CONTAINS INFORMATION ABout MarkerText     ")
data.MarkerText.unique()
```

                            DATA SET CONTAINS INFORMATION ABout MarkerText     
    




    array([ 'In 1877, amidst hard times, unrest hit U.S. rail lines. Workers for the Reading Railroad had endured pay cuts. Here, on July 23, militia fired into an unarmed crowd that blocked the trains, and 10 people were killed. U.S. troops reopened the railroad.',
           'Founded 1734 on land of James Silver by Scotch-Irish Presbyterians, earliest settlers of the Cumberland Valley. Present church built in 1783, restored in 1928 to its original style, and still used for worship.',
           'Formed on February 16, 1813 from Dauphin and Lancaster counties. Named for old Lebanon Township, originally created 1729. Lebanon, county seat, is dated from 1740. Early settlers began the building of a rich agricultural and religious heritage.',
           ...,
           'On May 13, 1985, at 6221 Osage Avenue, an armed conflict occurred between the Phila. Police Dept. and MOVE members. A Pa. State Police helicopter dropped a bomb on MOVE\xe2\x80\x99s house. An uncontrolled fire killed eleven MOVE members, including five children, and destroyed 61 homes.',
           'Due to racial segregation into the mid-20th century, African Americans were excluded from many amusement parks and recreational facilities. Local Sunday School superintendents formed the Monongahela Valley Sunday School Assoc. and in 1945 purchased land here to create a park open to all blacks. It was the first and only black-owned amusement park in Pa. and has been listed in the National Register of Historic Places since 2011.',
           'An innovative tile and abrasives manufacturer, founded by the Robertson family of ceramic artisans in 1890, operated here until 1982. It was notable for craze-free pure white tiles, its efficient single-fire method, and an on-site quality control lab. Featured at the 1907 Jamestown Exposition, RATC ceramic mosaic tiles were among the first in the US to line an indoor swimming pool. In the 1950s, Robertson tiles were installed in most original Levittown homes.'], dtype=object)




```python
print("                        DATA SET CONTAINS INFORMATION ABout Status     ")
data.Status.unique()
```

                            DATA SET CONTAINS INFORMATION ABout Status     
    




    array([nan, 'Missing'], dtype=object)




```python
print("                        DATA SET CONTAINS INFORMATION ABout Longitude     ")
data.Longitude.unique()
```

                            DATA SET CONTAINS INFORMATION ABout Longitude     
    




    array([-75.9242, -77.0076, -76.4239, ..., -75.2483, -79.5515, -74.7741])




```python
print("                        DATA SET CONTAINS INFORMATION ABout Latitude     ")
data.Latitude.unique()
```

                            DATA SET CONTAINS INFORMATION ABout Latitude     
    




    array([ 40.3351,  40.2389,  40.3326, ...,  41.2489,  39.9557,  40.4061])




```python
print("                        DATA SET CONTAINS INFORMATION ABout Category     ")
data.Category.unique()
```

                            DATA SET CONTAINS INFORMATION ABout Category     
    




    array(['Labor', 'Railroads', 'Transportation', 'Early Settlement',
           'Ethnic & Immigration', 'Religion', 'Agriculture',
           'Government & Politics', 'Government & Politics 19th Century',
           'Business & Industry', 'Entrepreneurs', 'Oil & Gas',
           'African American', 'Education', 'Forts', 'French & Indian War',
           'Military', 'Roads', 'Buildings & Architecture',
           'Houses & Homesteads', 'Police and Safety',
           'Motion Pictures & Television',
           'Government & Politics 18th Century', 'American Revolution',
           'Civil Rights', 'Professions & Vocations', 'Underground Railroad',
           'Writers', 'William Penn', 'Artists', 'Environment',
           'Mansions & Manors', 'Women', 'Government & Politics 20th Century',
           'Bridges', 'Invention', 'Science & Medicine', 'George Washington',
           'Iron & Steel', 'Civil War', 'Cities & Towns', 'Mills',
           'Native American', 'Canals', 'Music & Theater',
           'Publishing & Journalism', 'Military Post-Civil War', 'Electricity',
           'Performers', 'Whiskey Rebellion', 'Inns & Taverns',
           'Paths & Trails', 'Navigation',
           'Government & Politics 17th Century', 'Exploration',
           'Abraham Lincoln', 'Sports & Recreation', 'War of 1812', 'Coal',
           'Football', 'Baseball', nan, 'Basketball', 'Governors', 'Furnaces',
           'Glass', 'Folklore'], dtype=object)




```python
print("                        DATA SET CONTAINS INFORMATION ABout CategoryCounter     ")
data.CategoryCounter.unique()
```

                            DATA SET CONTAINS INFORMATION ABout CategoryCounter     
    




    array([1, 2, 3, 4, 5, 6, 7, 8], dtype=int64)




```python
print("                        DATA SET CONTAINS INFORMATION ABout County     ")
data.County.unique()
```

                            DATA SET CONTAINS INFORMATION ABout County     
    




    array(['Berks', 'Cumberland', 'Lebanon', 'Northampton', 'Philadelphia',
           'Somerset', 'Washington', 'York', 'Allegheny', 'Columbia',
           'Delaware', 'Luzerne', 'Montgomery', 'Montour', 'Armstrong',
           'Beaver', 'Bedford', 'Fayette', 'Bradford', 'Bucks', 'Crawford',
           'Chester', 'Franklin', 'Elk', 'Erie', 'Lackawanna', 'Schuylkill',
           'Adams', 'Lancaster', 'Dauphin', 'Pike', 'Wyoming', 'Lycoming',
           'Lehigh', 'Westmoreland', 'Venango', 'Forest', 'Susquehanna',
           'Northumberland', 'Monroe', 'Indiana', 'Centre', 'Butler', 'McKean',
           'Mercer', 'Mifflin', 'Perry', 'Potter', 'Snyder', 'Tioga',
           'Jefferson', 'Sullivan', 'Cambria', 'Blair', 'Lawrence', 'Union',
           'Fulton', 'Huntingdon', 'Carbon', 'Clearfield', 'Warren', 'Greene',
           'Clarion', 'Wayne', 'Clinton', 'Cameron', 'Juniata'], dtype=object)




```python
print("                        DATA SET CONTAINS INFORMATION ABout Name     ")
data.Name.unique()
```

                            DATA SET CONTAINS INFORMATION ABout Name     
    




    array(['Reading Railroad Massacre', 'Silver Spring Presbyterian Church',
           'Lebanon County', ..., 'The MOVE Bombing', 'Fairview Park',
           'Robertson Art Tile Company'], dtype=object)




```python
data.Name.unique()
```


    ---------------------------------------------------------------------------

    AttributeError                            Traceback (most recent call last)

    <ipython-input-21-f3dd8b013583> in <module>()
    ----> 1 data.Name.unique.count()
    

    AttributeError: 'function' object has no attribute 'count'



```python
print("                        DATA SET CONTAINS INFORMATION ABoutHistoricalMarkerId")
data.HistoricalMarkerId.unique()
```

                            DATA SET CONTAINS INFORMATION ABoutHistoricalMarkerId
    




    array([   1,    2,    3, ..., 2527, 2528, 2529], dtype=int64)




```python

```

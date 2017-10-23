
# coding: utf-8

# In[1]:

import pandas as pd
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
get_ipython().magic(u'matplotlib inline')

data = pd.read_csv('Pennsylvania_State_Park_Amenities.csv')
print("                  Dataset                 ")
data


# In[2]:

print("                       information About the data                     ")
data.info()


# In[3]:

print("                        DATA SET CONTAINS INFORMATION ABout different states in US      ")
data.PARK_NAME.unique()


# In[4]:

import pandas as pd
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
get_ipython().magic(u'matplotlib inline')

data = pd.read_csv('Pennsylvania_State_Park_Boating_Table.csv')
print("                  Dataset                 ")
data


# In[5]:

print("                       information About the data                     ")
data.info()


# In[6]:

print("                        DATA SET CONTAINS INFORMATION ABout different states in US      ")
data.PARK_NAME.unique()


# In[7]:

import pandas as pd
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
get_ipython().magic(u'matplotlib inline')

data = pd.read_csv('Pennsylvania_State_Park_Boundaries.csv')
print("                  Dataset                 ")
data


# In[8]:

print("                       information About the data                     ")
data.info()


# In[9]:

print("                        DATA SET CONTAINS INFORMATION ABout different states in US      ")
data.PARK_NAME.unique()


# In[10]:

import pandas as pd
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
get_ipython().magic(u'matplotlib inline')

data = pd.read_csv('Pennsylvania_State_Park_Campground_Entrances.csv')
print("                  Dataset                 ")
data


# In[11]:

print("                       information About the data                     ")
data.info()


# In[12]:

print("                        DATA SET CONTAINS INFORMATION ABout different states in US      ")
data.Name.unique()


# In[13]:

print("                        DATA SET CONTAINS INFORMATION ABout different states in US      ")
data.PARK_NAME.unique()


# In[16]:

import pandas as pd
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
get_ipython().magic(u'matplotlib inline')

data = pd.read_csv('Pennsylvania_State_Park_Camping_Table.csv')
print("                  Dataset                 ")
data


# In[17]:

print("                       information About the data                     ")
data.info()


# In[18]:

print("                        DATA SET CONTAINS INFORMATION ABout different states in US      ")
data.Name.unique()


# In[19]:

print("                        DATA SET CONTAINS INFORMATION ABout different states in US      ")
data.PARK_NAME.unique()


# In[20]:

import pandas as pd
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
get_ipython().magic(u'matplotlib inline')

data = pd.read_csv('Pennsylvania_State_Park_hiking_Trails.csv')
print("                  Dataset                 ")
data


# In[21]:

data.info()


# In[22]:

data.NAME.unique()


# In[23]:

import pandas as pd
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
get_ipython().magic(u'matplotlib inline')

data = pd.read_csv('Pennsylvania_State_Park_Lodging_Table.csv')
print("                  Dataset                 ")
data


# In[24]:

data.info()


# In[25]:

data.PARK_NAME.unique()


# In[27]:

import pandas as pd
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
get_ipython().magic(u'matplotlib inline')

data = pd.read_csv('Pennsylvania_State_Park_Ponds_and_Lakes.csv')
print("                  Dataset                 ")
data


# In[28]:

data.info()


# In[29]:

data.NAME.unique()


# In[30]:

import pandas as pd
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
get_ipython().magic(u'matplotlib inline')

data = pd.read_csv('Pennsylvania_State_Park_Regions.csv')
print("                  Dataset                 ")
data


# In[31]:

import pandas as pd
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
get_ipython().magic(u'matplotlib inline')

data = pd.read_csv('Pennsylvania_State_Park_Roads.csv')
print("                  Dataset                 ")
data


# In[32]:

data.info()


# In[33]:

data.NAME.unique()


# In[34]:

data.SURFACE.unique()


# In[35]:

import pandas as pd
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
get_ipython().magic(u'matplotlib inline')

data = pd.read_csv('Pennsylvania_State_Park_Sightseeing_Table.csv')
print("                  Dataset                 ")
data


# In[36]:

data.info()


# In[37]:

data.PARK_NAME.unique()


# In[38]:

import pandas as pd
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
get_ipython().magic(u'matplotlib inline')

data = pd.read_csv('Civilian_Conservation_Corps_Camps_of_Pennsylvania.csv')
print("                  Dataset                 ")
data


# In[39]:

data.info()


# In[40]:

data.NAME.unique()


# In[3]:

import pandas as pd
import numpy as np


data = pd.read_csv('Pennsylvania_State_Forest_Meadows_Food_Plots_and_other_Herbaceous_Openings.csv')
print("                  Dataset                 ")
data


# In[4]:

data.info()


# In[5]:

data.Habitat_Type.unique()


# In[6]:

import pandas as pd
import numpy as np


data = pd.read_csv('Pennsylvania_State_Forest_Boundary.csv')
print("                  Dataset                 ")
data


# In[7]:

data.info()


# In[8]:

data.DistrictNumber.unique()


# In[9]:

data.DistrictName.unique()


# In[11]:

data.SF_Name.unique()


# In[12]:

data.WnaType.unique()


# In[13]:

data.WnaName.unique()


# In[14]:

data.LandManager.unique()


# In[15]:

data.Notes.unique()


# In[16]:

data.Acreage.unique() 


# In[17]:

data.DESCRIPTION.unique()


# In[18]:

import pandas as pd
import numpy as np


data = pd.read_csv('Pennsylvania_State_Forest_Recent_Timber_Harvests.csv')
print("                  Dataset                 ")
data


# In[19]:

data.info()


# In[20]:

data.forester.unique()


# In[21]:

import pandas as pd
import numpy as np


data = pd.read_csv('Pennsylvania_State_Forest_Mature_Oak_Stands.csv')
print("                  Dataset                 ")
data


# In[22]:

data.info()


# In[24]:

data.Habitat_Type.unique()


# In[25]:

import pandas as pd
import numpy as np


data = pd.read_csv('Pennsylvania_State_Forest_DMAP_Units.csv')
print("                  Dataset                 ")
data


# In[26]:

data.info()


# In[28]:

data.FD_NAME.unique()


# In[29]:

data.DD_DESCRIPT.unique()


# In[31]:

import pandas as pd
import numpy as np


data = pd.read_csv('Pennsylvania_State_Forest_Mineral_Rights_Ownership_and_Leased_lands.csv')
print("                  Dataset                 ")
data


# In[32]:

import pandas as pd
import numpy as np


data = pd.read_csv('Pennsylvania_State_Forest_Winter_Thermal_Cover.csv')
print("                  Dataset                 ")
data


# In[34]:

import pandas as pd
import numpy as np


data = pd.read_csv('Pennsylvania_State_Forest_Wild_Natural_Areas.csv')
print("                  Dataset                 ")
data


# In[35]:

import pandas as pd
import numpy as np


data = pd.read_csv('Pennsylvania_State_Forest_Gated_Roads_Open_For_Deer_Season.csv')
print("                  Dataset                 ")
data


# In[36]:

data.info()


# In[37]:

data.Name.unique()


# In[39]:

data.LastEditedBy.unique()


# In[41]:

import pandas as pd
import numpy as np


data = pd.read_csv('Pennsylvania_State_Forest_ADA_Accessible_Sites.csv')
print("                  Dataset                 ")
data


# In[42]:

data.info()


# In[43]:

data.DistrictName.unique()


# In[44]:

data.FacilityName.unique()


# In[45]:

data.Type.unique()


# In[46]:

data.Description.unique()


# In[48]:

import pandas as pd
import numpy as np


data = pd.read_csv('Trail_Gaps_in_Pennsylvania.csv')
print("                  Dataset                 ")
data


# In[49]:

data.info()


# In[50]:

data.Trail_System.unique()


# In[51]:

data.Gap_Name.unique()


# In[52]:

data.MGMT_Name.unique()


# In[53]:

data.MGMT_Address.unique()


# In[54]:

data.MGMT_Phone.unique() 


# In[55]:

import pandas as pd
import numpy as np


data = pd.read_csv('PA_Greenway_Trails.csv')
print("                  Dataset                 ")
data


# In[56]:

data.info()


# In[57]:

import pandas as pd
import numpy as np

data = pd.read_csv('ATV_Trails_in_pennsylvania.csv')
print("                  Dataset                 ")
data


# In[58]:

data.info()


# In[59]:

data.NAME01.unique()


# In[60]:

import pandas as pd
import numpy as np

data = pd.read_csv('PA_Greenway_trail_Projects.csv')
print("                  Dataset                 ")
data


# In[61]:

data.info()


# In[62]:

import pandas as pd
import numpy as np

data = pd.read_csv('Rail_Trails_in_Pennsylvania.csv')
print("                  Dataset                 ")
data


# In[63]:

data.info()


# In[65]:

data.NAME01.unique()


# In[67]:

import pandas as pd
import numpy as np

data = pd.read_csv('OffRoad_Motorcycle_Trails.csv')
print("                  Dataset                 ")
data


# In[68]:

data.info()


# In[69]:

import pandas as pd
import numpy as np

data = pd.read_csv('Biking_Trails_of_Pennsylvania.csv')
print("                  Dataset                 ")
data


# In[70]:

data.info()


# In[71]:

data.NAME01.unique()


# In[72]:

data.DESCRIPTION.unique()


# In[73]:

import pandas as pd
import numpy as np

data = pd.read_csv('Interpretive_Trails_in_Pennsylvania.csv')
print("                  Dataset                 ")
data


# In[74]:

data.info()


# In[75]:

data.NAME01.unique()


# In[76]:

data.NAME02.unique()


# In[77]:

data.DESCRIPTION.unique()


# In[78]:

import pandas as pd
import numpy as np

data = pd.read_csv('Hiking_Trails_in_Pennsylvania.csv')
print("                  Dataset                 ")
data


# In[79]:

import pandas as pd
import numpy as np

data = pd.read_csv('Equestrian_Trails_in_Pennsylvania.csv')
print("                  Dataset                 ")
data


# In[80]:

data.info()


# In[81]:

data.NAME01.unique()


# In[82]:

import pandas as pd
import numpy as np

data = pd.read_csv('Snowmobile_Trails_in_Pennsylvania.csv')
print("                  Dataset                 ")
data


# In[83]:

data.NAME01.unique()


# In[84]:

data.DESCRIPTION.unique()


# In[87]:

import pandas as pd
import numpy as np

data = pd.read_csv('Pennsylvania_State_Park_Hiking_Trails.csv')
print("                  Dataset                 ")
data


# In[89]:

data.NAME.unique()


# In[90]:

data.info()


# In[91]:

import pandas as pd
import numpy as np

data = pd.read_csv('Trail_Parking_in_Pennsylvania.csv')
print("                  Dataset                 ")
data


# In[92]:

data.info()


# In[93]:

data.NAME01.unique()


# In[96]:

import pandas as pd
import numpy as np

data = pd.read_csv('Pennsylvania_Trails_points_of_interest.csv')
print("                  Dataset                 ")
data


# In[97]:

data.info()


# In[98]:

import pandas as pd
import numpy as np

data = pd.read_csv('Four_Wheel_Drive_Trails_in_Pennsylvania.csv')
print("                  Dataset                 ")
data


# In[99]:

data.info()


# In[100]:

data.NAME01.unique()


# In[104]:

import pandas as pd
import numpy as np

data = pd.read_csv('PA_Greenway_Grant_Projects.csv')
print("                  Dataset                 ")
data


# In[105]:

import pandas as pd
import numpy as np

data = pd.read_csv('PA_Greenway_Trail_Projects.csv')
print("                  Dataset                 ")
data


# In[107]:

import pandas as pd
import numpy as np

data = pd.read_csv('Local_Parks_Parking_Areas.csv')
print("                  Dataset                 ")
data


# In[109]:

import pandas as pd
import numpy as np

data = pd.read_csv('Pennsylvania_Local_Park_Boundaries.csv')
print("                  Dataset                 ")
data


# In[111]:

import pandas as pd
import numpy as np

data = pd.read_csv('Historic_Sites.csv')
print("                  Dataset                 ")
data


# In[112]:

import pandas as pd
import numpy as np

data = pd.read_csv('Park_and_Ride_Locations_Current_Transportation.csv')
print("                  Dataset                 ")
data


# In[ ]:




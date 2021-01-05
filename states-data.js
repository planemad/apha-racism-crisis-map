const statesLookup = {
    "AL": {
      "code": "AL",
      "boundary_id": 70377,
      "name": "Alabama",
      "bounds": [
        -88.4732,
        30.1941,
        -84.8882,
        35.008
      ]
    },
    "AK": {
      "code": "AK",
      "boundary_id": 135913,
      "name": "Alaska",
      "bounds": [
        -187.5552,
        51.2154,
        -129.994,
        71.3885
      ]
    },
    "AZ": {
      "code": "AZ",
      "boundary_id": 201449,
      "name": "Arizona",
      "bounds": [
        -114.8166,
        31.3322,
        -109.0452,
        37.0037
      ]
    },
    "AR": {
      "code": "AR",
      "boundary_id": 266985,
      "name": "Arkansas",
      "bounds": [
        -94.6179,
        33.0041,
        -89.6444,
        36.4997
      ]
    },
    "CA": {
      "code": "CA",
      "boundary_id": 332521,
      "name": "California",
      "bounds": [
        -124.415,
        32.5343,
        -114.1312,
        42.0095
      ]
    },
    "CO": {
      "code": "CO",
      "boundary_id": 398057,
      "name": "Colorado",
      "bounds": [
        -109.0602,
        36.9924,
        -102.0409,
        41.0034
      ]
    },
    "CT": {
      "code": "CT",
      "boundary_id": 463593,
      "name": "Connecticut",
      "bounds": [
        -73.7278,
        40.9805,
        -71.7872,
        42.0505
      ]
    },
    "DE": {
      "code": "DE",
      "boundary_id": 529129,
      "name": "Delaware",
      "bounds": [
        -75.789,
        38.4504,
        -75.0487,
        39.8395
      ]
    },
    "DC": {
      "code": "DC",
      "boundary_id": 594665,
      "name": "District of Columbia",
      "bounds": [
        -77.1198,
        38.7916,
        -76.9094,
        38.9958
      ]
    },
    "FL": {
      "code": "FL",
      "boundary_id": 660201,
      "name": "Florida",
      "bounds": [
        -87.6348,
        24.5211,
        -80.0312,
        31.001
      ]
    },
    "GA": {
      "code": "GA",
      "boundary_id": 725737,
      "name": "Georgia",
      "bounds": [
        -85.6052,
        30.3558,
        -80.8403,
        35.0013
      ]
    },
    "HI": {
      "code": "HI",
      "boundary_id": 791273,
      "name": "Hawaii",
      "bounds": [
        -178.3332,
        18.9107,
        -154.8066,
        28.4021
      ]
    },
    "ID": {
      "code": "ID",
      "boundary_id": 856809,
      "name": "Idaho",
      "bounds": [
        -117.243,
        41.9882,
        -111.0435,
        49.0009
      ]
    },
    "IL": {
      "code": "IL",
      "boundary_id": 922345,
      "name": "Illinois",
      "bounds": [
        -91.5131,
        36.9703,
        -87.4932,
        42.5085
      ]
    },
    "IN": {
      "code": "IN",
      "boundary_id": 987881,
      "name": "Indiana",
      "bounds": [
        -88.0979,
        37.7717,
        -84.7846,
        41.7607
      ]
    },
    "IA": {
      "code": "IA",
      "boundary_id": 1053417,
      "name": "Iowa",
      "bounds": [
        -96.6395,
        40.3754,
        -90.1401,
        43.5012
      ]
    },
    "KS": {
      "code": "KS",
      "boundary_id": 1118953,
      "name": "Kansas",
      "bounds": [
        -102.0518,
        36.993,
        -94.5884,
        40.0032
      ]
    },
    "KY": {
      "code": "KY",
      "boundary_id": 1184489,
      "name": "Kentucky",
      "bounds": [
        -89.5712,
        36.4971,
        -81.9648,
        39.1477
      ]
    },
    "LA": {
      "code": "LA",
      "boundary_id": 1250025,
      "name": "Louisiana",
      "bounds": [
        -94.0434,
        28.9175,
        -88.8201,
        33.0195
      ]
    },
    "ME": {
      "code": "ME",
      "boundary_id": 1315561,
      "name": "Maine",
      "bounds": [
        -71.0839,
        42.9776,
        -66.9496,
        47.4599
      ]
    },
    "MD": {
      "code": "MD",
      "boundary_id": 1381097,
      "name": "Maryland",
      "bounds": [
        -79.4877,
        37.8938,
        -75.0493,
        39.723
      ]
    },
    "MA": {
      "code": "MA",
      "boundary_id": 1446633,
      "name": "Massachusetts",
      "bounds": [
        -73.5082,
        41.239,
        -69.9288,
        42.8868
      ]
    },
    "MI": {
      "code": "MI",
      "boundary_id": 1512169,
      "name": "Michigan",
      "bounds": [
        -90.4184,
        41.6961,
        -82.4183,
        48.2627
      ]
    },
    "MN": {
      "code": "MN",
      "boundary_id": 1577705,
      "name": "Minnesota",
      "bounds": [
        -97.2391,
        43.4994,
        -89.4918,
        49.3831
      ]
    },
    "MS": {
      "code": "MS",
      "boundary_id": 1643241,
      "name": "Mississippi",
      "bounds": [
        -91.655,
        30.1768,
        -88.0979,
        34.9961
      ]
    },
    "MO": {
      "code": "MO",
      "boundary_id": 1708777,
      "name": "Missouri",
      "bounds": [
        -95.7747,
        35.9957,
        -89.099,
        40.6136
      ]
    },
    "MT": {
      "code": "MT",
      "boundary_id": 1774313,
      "name": "Montana",
      "bounds": [
        -116.05,
        44.3579,
        -104.0397,
        49.0011
      ]
    },
    "NE": {
      "code": "NE",
      "boundary_id": 1839849,
      "name": "Nebraska",
      "bounds": [
        -104.0535,
        39.9999,
        -95.3083,
        43.0017
      ]
    },
    "NV": {
      "code": "NV",
      "boundary_id": 1905385,
      "name": "Nevada",
      "bounds": [
        -120.0065,
        35.0019,
        -114.0395,
        42.0018
      ]
    },
    "NH": {
      "code": "NH",
      "boundary_id": 1970921,
      "name": "New Hampshire",
      "bounds": [
        -72.5571,
        42.697,
        -70.6109,
        45.3058
      ]
    },
    "NJ": {
      "code": "NJ",
      "boundary_id": 2036457,
      "name": "New Jersey",
      "bounds": [
        -75.5713,
        38.9286,
        -73.9027,
        41.3574
      ]
    },
    "NM": {
      "code": "NM",
      "boundary_id": 2101993,
      "name": "New Mexico",
      "bounds": [
        -109.0504,
        31.3322,
        -103.002,
        37.0002
      ]
    },
    "NY": {
      "code": "NY",
      "boundary_id": 2167529,
      "name": "New York",
      "bounds": [
        -79.7621,
        40.4962,
        -71.8563,
        45.0129
      ]
    },
    "NC": {
      "code": "NC",
      "boundary_id": 2233065,
      "name": "North Carolina",
      "bounds": [
        -84.3218,
        33.8344,
        -75.461,
        36.5881
      ]
    },
    "ND": {
      "code": "ND",
      "boundary_id": 2298601,
      "name": "North Dakota",
      "bounds": [
        -104.05,
        45.9351,
        -96.5544,
        49.0007
      ]
    },
    "OH": {
      "code": "OH",
      "boundary_id": 2364137,
      "name": "Ohio",
      "bounds": [
        -84.8203,
        38.4034,
        -80.5185,
        41.9773
      ]
    },
    "OK": {
      "code": "OK",
      "boundary_id": 2429673,
      "name": "Oklahoma",
      "bounds": [
        -103.0024,
        33.6158,
        -94.4307,
        37.0023
      ]
    },
    "OR": {
      "code": "OR",
      "boundary_id": 2495209,
      "name": "Oregon",
      "bounds": [
        -124.6065,
        41.9921,
        -116.4633,
        46.2921
      ]
    },
    "PA": {
      "code": "PA",
      "boundary_id": 2560745,
      "name": "Pennsylvania",
      "bounds": [
        -80.5195,
        39.7198,
        -74.6895,
        42.2693
      ]
    },
    "RI": {
      "code": "RI",
      "boundary_id": 2626281,
      "name": "Rhode Island",
      "bounds": [
        -71.8865,
        41.1464,
        -71.1206,
        42.0188
      ]
    },
    "SC": {
      "code": "SC",
      "boundary_id": 2691817,
      "name": "South Carolina",
      "bounds": [
        -83.3539,
        32.0374,
        -78.5472,
        35.2155
      ]
    },
    "SD": {
      "code": "SD",
      "boundary_id": 2757353,
      "name": "South Dakota",
      "bounds": [
        -104.0579,
        42.4797,
        -96.4365,
        45.9457
      ]
    },
    "TN": {
      "code": "TN",
      "boundary_id": 2822889,
      "name": "Tennessee",
      "bounds": [
        -90.3103,
        34.9829,
        -81.6469,
        36.6783
      ]
    },
    "TX": {
      "code": "TX",
      "boundary_id": 2888425,
      "name": "Texas",
      "bounds": [
        -106.6456,
        25.8372,
        -93.508,
        36.5007
      ]
    },
    "UT": {
      "code": "UT",
      "boundary_id": 2953961,
      "name": "Utah",
      "bounds": [
        -114.0529,
        36.9977,
        -109.0416,
        42.0017
      ]
    },
    "VT": {
      "code": "VT",
      "boundary_id": 3019497,
      "name": "Vermont",
      "bounds": [
        -73.4312,
        42.7269,
        -71.4651,
        45.0167
      ]
    },
    "VA": {
      "code": "VA",
      "boundary_id": 3085033,
      "name": "Virginia",
      "bounds": [
        -83.6754,
        36.5409,
        -75.2424,
        39.466
      ]
    },
    "WA": {
      "code": "WA",
      "boundary_id": 3150569,
      "name": "Washington",
      "bounds": [
        -124.7625,
        45.5435,
        -116.9161,
        49.0024
      ]
    },
    "WV": {
      "code": "WV",
      "boundary_id": 3216105,
      "name": "West Virginia",
      "bounds": [
        -82.6446,
        37.2015,
        -77.7195,
        40.6388
      ]
    },
    "WI": {
      "code": "WI",
      "boundary_id": 3281641,
      "name": "Wisconsin",
      "bounds": [
        -92.8894,
        42.4919,
        -86.764,
        47.0807
      ]
    },
    "WY": {
      "code": "WY",
      "boundary_id": 3347177,
      "name": "Wyoming",
      "bounds": [
        -111.0569,
        40.9948,
        -104.0522,
        45.0058
      ]
    }
  }
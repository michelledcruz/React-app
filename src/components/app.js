
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";


    /*
    Header: 
           Logo on left side
           List Items
           Cart

      Body: Image
            Items
            Star rating
    */


// const Title = () =>(
//     <a href="/">
//         <h1 key="head">
//         Food Villa
//         </h1>
//     </a>
// );

const restaurantList =[
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "650422",
    "name": "Mumbaiya Pav Bhaji",
    "uuid": "811a93e9-895f-4bef-a521-6b06e843cebf",
    "city": "5",
    "area": "Kurla",
    "totalRatingsString": "20+ ratings",
    "cloudinaryImageId": "a0f2a59b9ad17f7f0e8e08ef7f7b9386",
    "cuisines": [
    "Fast Food"
    ],
    "tags": [],
    "costForTwo": 25000,
    "costForTwoString": "₹250 FOR TWO",
    "deliveryTime": 39,
    "minDeliveryTime": 39,
    "maxDeliveryTime": 39,
    "slaString": "39 MINS",
    "lastMileTravel": 2.700000047683716,
    "slugs": {
    "restaurant": "happy8-pav-bhaji-kurla-kurla",
    "city": "mumbai"
    },
    "cityState": "5",
    "address": "UNIT NO S-13, 2ND FLOOR, PHOENIX MARKETCITY, L.B.S. MARG, KURLA WEST 400070",
    "locality": "L.B.S. Marg",
    "parentId": 356838,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
    "header": "20% off",
    "shortDescriptionList": [
    {
    "meta": "20% off | Use TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "20% off up to ₹50 | Use code TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "20% OFF",
    "shortDescriptionList": [
    {
    "meta": "Use TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "20% off up to ₹50 | Use code TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [],
    "totalFees": 0,
    "message": "",
    "title": "",
    "amount": "",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=5979205~p=1~eid=00000186-9a63-c689-470a-fa6100860141",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "2.7 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "650422",
    "deliveryTime": 39,
    "minDeliveryTime": 39,
    "maxDeliveryTime": 39,
    "lastMileTravel": 2.700000047683716,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.1",
    "totalRatings": 20,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "427807",
    "name": "WELCOME FASTFOOD AND JUICE CENTER",
    "uuid": "f93b0838-45ca-410b-a959-109bba1143c5",
    "city": "5",
    "area": "Kurla",
    "totalRatingsString": "20+ ratings",
    "cloudinaryImageId": "gfir09kr79ooz5x9jphq",
    "cuisines": [
    "Beverages",
    "Juices",
    "Pizzas"
    ],
    "tags": [],
    "costForTwo": 15000,
    "costForTwoString": "₹150 FOR TWO",
    "deliveryTime": 28,
    "minDeliveryTime": 28,
    "maxDeliveryTime": 28,
    "slaString": "28 MINS",
    "lastMileTravel": 0.699999988079071,
    "slugs": {
    "restaurant": "welcome-fastfood-and-juice-center-kurla-kurla",
    "city": "mumbai"
    },
    "cityState": "5",
    "address": "SHOP NO A-12, NATIONAL ENTERPRISES, PLOT NO.211, LBS MARG, NEAR KURLA WEIGHT BRIDGE, KURLA WEST, MUM, Kurla Gaon, Greater Mumbai Ward-L, Greater Mumbai, Maharashtra, 400070",
    "locality": "Ghansolinavi",
    "parentId": 238430,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
    "header": "FREE DELIVERY",
    "shortDescriptionList": [
    {
    "meta": "FREE DELIVERY",
    "discountType": "FREE_DELIVERY",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "FREE DELIVERY",
    "discountType": "FREE_DELIVERY",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "",
    "shortDescriptionList": [
    {
    "meta": "Free Delivery",
    "discountType": "FREE_DELIVERY",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "FREE DELIVERY",
    "discountType": "FREE_DELIVERY",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "chain": [],
    "feeDetails": {
    "fees": [],
    "totalFees": 0,
    "message": "",
    "title": "",
    "amount": "",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "0.6 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "427807",
    "deliveryTime": 28,
    "minDeliveryTime": 28,
    "maxDeliveryTime": 28,
    "lastMileTravel": 0.699999988079071,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.1",
    "totalRatings": 20,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "486036",
    "name": "Royal Paan",
    "uuid": "b4e66f76-032f-4424-b9db-208894189faa",
    "city": "5",
    "area": "Kurla",
    "totalRatingsString": "Too Few Ratings",
    "cloudinaryImageId": "j19apjjiipajgawktjds",
    "cuisines": [
    "Paan"
    ],
    "tags": [],
    "costForTwo": 10000,
    "costForTwoString": "₹100 FOR TWO",
    "deliveryTime": 29,
    "minDeliveryTime": 29,
    "maxDeliveryTime": 29,
    "slaString": "29 MINS",
    "lastMileTravel": 0.6000000238418579,
    "slugs": {
    "restaurant": "royal-paan-kurla-kurla",
    "city": "mumbai"
    },
    "cityState": "5",
    "address": "SHOP NO 4 GROUND FLOOR  SULTAN ANNEX LBS ROAD, NEAR KALPANA CINEMA KURLA WEST, Kurla Gaon, Greater Mumbai Ward L Greater Mumbai  Maharashtra  400070",
    "locality": "Near Kalpana Cinema",
    "parentId": 291756,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
    "header": "FREE DELIVERY",
    "shortDescriptionList": [
    {
    "meta": "FREE DELIVERY",
    "discountType": "FREE_DELIVERY",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "FREE DELIVERY",
    "discountType": "FREE_DELIVERY",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "",
    "shortDescriptionList": [
    {
    "meta": "Free Delivery",
    "discountType": "FREE_DELIVERY",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "FREE DELIVERY",
    "discountType": "FREE_DELIVERY",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "chain": [],
    "feeDetails": {
    "fees": [],
    "totalFees": 0,
    "message": "",
    "title": "",
    "amount": "",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "0.6 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "486036",
    "deliveryTime": 29,
    "minDeliveryTime": 29,
    "maxDeliveryTime": 29,
    "lastMileTravel": 0.6000000238418579,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "--",
    "totalRatings": 0,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "432648",
    "name": "SHREENATH JI PAV BHAJI CENTER",
    "uuid": "a0b1a3bb-3294-49b1-84a5-f429a4fbb1f3",
    "city": "5",
    "area": "Andheri East",
    "totalRatingsString": "100+ ratings",
    "cloudinaryImageId": "qfzpgjblkhbhtgwr2mpp",
    "cuisines": [
    "Chaat",
    "Indian"
    ],
    "tags": [],
    "costForTwo": 15000,
    "costForTwoString": "₹150 FOR TWO",
    "deliveryTime": 42,
    "minDeliveryTime": 42,
    "maxDeliveryTime": 42,
    "slaString": "42 MINS",
    "lastMileTravel": 8,
    "slugs": {
    "restaurant": "shreenath-ji-pav-bhaji-center-andheri-east-andheri-east",
    "city": "mumbai"
    },
    "cityState": "5",
    "address": "Room NO.12, MATA PRASAD CHAWL, COL DONGARI GALLI NO 1, ANDHERI EAST, Bhandara, Bhandara, Maharashtra - 400069",
    "locality": "Mata Prasad Chawl",
    "parentId": 260830,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
    "header": "20% off",
    "shortDescriptionList": [
    {
    "meta": "20% off | Use TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "20% off up to ₹50 | Use code TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "20% OFF",
    "shortDescriptionList": [
    {
    "meta": "Use TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "20% off up to ₹50 | Use code TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [],
    "totalFees": 0,
    "message": "",
    "title": "",
    "amount": "",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=5991570~p=4~eid=00000186-9a63-c689-470a-fa620086041d",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "8 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "432648",
    "deliveryTime": 42,
    "minDeliveryTime": 42,
    "maxDeliveryTime": 42,
    "lastMileTravel": 8,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.0",
    "totalRatings": 100,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "627419",
    "name": "Happy8 Wraps	",
    "uuid": "5c6b2222-9d8f-4abf-9b97-2f5d29842ae7",
    "city": "5",
    "area": "Kurla",
    "totalRatingsString": "20+ ratings",
    "cloudinaryImageId": "8c78040597b866bf87bf6c154ab4c919",
    "cuisines": [
    "Snacks",
    "Tandoor"
    ],
    "tags": [],
    "costForTwo": 40000,
    "costForTwoString": "₹400 FOR TWO",
    "deliveryTime": 43,
    "minDeliveryTime": 43,
    "maxDeliveryTime": 43,
    "slaString": "43 MINS",
    "lastMileTravel": 2.5999999046325684,
    "slugs": {
    "restaurant": "happy8-wraps-phoenixkurla-phoenixkurla",
    "city": "mumbai"
    },
    "cityState": "5",
    "address": "UNIT NO S-13, 2ND FLOOR, PHOENIX MARKETCITY, L.B.S. MARG, KURLA WEST ,Greater Mumbai Ward-L,Greater Mumbai,Maharashtra-400070",
    "locality": "L.B.S. Marg",
    "parentId": 374589,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
    "header": "20% off",
    "shortDescriptionList": [
    {
    "meta": "20% off | Use TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "20% off up to ₹50 | Use code TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "20% OFF",
    "shortDescriptionList": [
    {
    "meta": "Use TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "20% off up to ₹50 | Use code TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "chain": [],
    "feeDetails": {
    "fees": [],
    "totalFees": 0,
    "message": "",
    "title": "",
    "amount": "",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "2.5 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "627419",
    "deliveryTime": 43,
    "minDeliveryTime": 43,
    "maxDeliveryTime": 43,
    "lastMileTravel": 2.5999999046325684,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "5.0",
    "totalRatings": 20,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "596840",
    "name": "Happy8 Sandwich",
    "uuid": "15be1ed9-e2d9-46cc-bdff-341e4d745954",
    "city": "5",
    "area": "Kurla",
    "totalRatingsString": "20+ ratings",
    "cloudinaryImageId": "1f7d4a45b06b4ff84ae372296c622193",
    "cuisines": [
    "Fast Food",
    "Beverages"
    ],
    "tags": [],
    "costForTwo": 35000,
    "costForTwoString": "₹350 FOR TWO",
    "deliveryTime": 37,
    "minDeliveryTime": 37,
    "maxDeliveryTime": 37,
    "slaString": "37 MINS",
    "lastMileTravel": 2.5999999046325684,
    "slugs": {
    "restaurant": "happy-sandwich-kurla-kurla",
    "city": "mumbai"
    },
    "cityState": "5",
    "address": "UNIT NO S-13, 2ND FLOOR, PHOENIX MARKETCITY, L.B.S. MARG, KURLA WEST, Greater Mumbai Ward-L, Greater Mumbai, Maharashtra-400070",
    "locality": "Lbs Marg",
    "parentId": 351322,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
    "header": "20% off",
    "shortDescriptionList": [
    {
    "meta": "20% off | Use TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "20% off up to ₹50 | Use code TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "20% OFF",
    "shortDescriptionList": [
    {
    "meta": "Use TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "20% off up to ₹50 | Use code TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "chain": [],
    "feeDetails": {
    "fees": [],
    "totalFees": 0,
    "message": "",
    "title": "",
    "amount": "",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "2.5 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "596840",
    "deliveryTime": 37,
    "minDeliveryTime": 37,
    "maxDeliveryTime": 37,
    "lastMileTravel": 2.5999999046325684,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.9",
    "totalRatings": 20,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "454644",
    "name": "La Pino'z Pizza",
    "uuid": "87cfd1e3-05b6-417e-95bc-cbe2a640cf2e",
    "city": "5",
    "area": "Andheri East",
    "totalRatingsString": "500+ ratings",
    "cloudinaryImageId": "mnu3gqwlwuia7ruejapd",
    "cuisines": [
    "Pizzas",
    "Snacks"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 39,
    "minDeliveryTime": 39,
    "maxDeliveryTime": 39,
    "slaString": "39 MINS",
    "lastMileTravel": 7.599999904632568,
    "slugs": {
    "restaurant": "la-pino'z-pizza-andheri-east-andheri-east",
    "city": "mumbai"
    },
    "cityState": "5",
    "address": "SHOP NO.17 AND 18,PINNACAL BUSINESS PARK ,MAHAKAKI RD ,ANDHERI EAST MUMBAI, Greater Mumbai, Maharashtra-400093",
    "locality": "Mahakaki Rd",
    "parentId": 4961,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
    "header": "FREE DELIVERY",
    "shortDescriptionList": [
    {
    "meta": "FREE DELIVERY",
    "discountType": "FREE_DELIVERY",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "FREE DELIVERY",
    "discountType": "FREE_DELIVERY",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "",
    "shortDescriptionList": [
    {
    "meta": "Free Delivery",
    "discountType": "FREE_DELIVERY",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "FREE DELIVERY",
    "discountType": "FREE_DELIVERY",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [],
    "totalFees": 0,
    "message": "",
    "title": "",
    "amount": "",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=6009995~p=7~eid=00000186-9a63-c689-470a-fa630086077f",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "7.5 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "454644",
    "deliveryTime": 39,
    "minDeliveryTime": 39,
    "maxDeliveryTime": 39,
    "lastMileTravel": 7.599999904632568,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "3.8",
    "totalRatings": 500,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "587152",
    "name": "Happy8 Salads",
    "uuid": "dc1ef114-d85a-4574-9f8e-515fe2493d97",
    "city": "5",
    "area": "Kurla",
    "totalRatingsString": "50+ ratings",
    "cloudinaryImageId": "ee8aed4d8536ebdacd59eb5299bef471",
    "cuisines": [
    "Salads",
    "Juices",
    "Fast Food",
    "Snacks"
    ],
    "tags": [],
    "costForTwo": 40000,
    "costForTwoString": "₹400 FOR TWO",
    "deliveryTime": 39,
    "minDeliveryTime": 39,
    "maxDeliveryTime": 39,
    "slaString": "39 MINS",
    "lastMileTravel": 2.700000047683716,
    "slugs": {
    "restaurant": "happy-salads-phoenixkurla-phoenixkurla",
    "city": "mumbai"
    },
    "cityState": "5",
    "address": "UNIT NO S-13, 2ND FLOOR,  PHOENIX MARKETCITY, L.B.S.  MARG, KURLA WEST, Greater  Mumbai Ward-L, Greater Mumbai,  Maharashtra, 400070",
    "locality": "Kurla West",
    "parentId": 375634,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
    "header": "50% off",
    "shortDescriptionList": [
    {
    "meta": "50% off | Use TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "50% off up to ₹100 | Use code TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "50% OFF",
    "shortDescriptionList": [
    {
    "meta": "Use TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "50% off up to ₹100 | Use code TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "chain": [],
    "feeDetails": {
    "fees": [],
    "totalFees": 0,
    "message": "",
    "title": "",
    "amount": "",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "2.7 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "587152",
    "deliveryTime": 39,
    "minDeliveryTime": 39,
    "maxDeliveryTime": 39,
    "lastMileTravel": 2.700000047683716,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.5",
    "totalRatings": 50,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "488405",
    "name": "Irani Chai Maska",
    "uuid": "3e6d5e5a-e26d-4c33-a840-600aded26136",
    "city": "5",
    "area": "Chembur",
    "totalRatingsString": "Too Few Ratings",
    "cloudinaryImageId": "lj8xhymha6us8f7cdzeu",
    "cuisines": [
    "Snacks",
    "Beverages"
    ],
    "tags": [],
    "costForTwo": 40000,
    "costForTwoString": "₹400 FOR TWO",
    "deliveryTime": 43,
    "minDeliveryTime": 43,
    "maxDeliveryTime": 43,
    "slaString": "43 MINS",
    "lastMileTravel": 5.599999904632568,
    "slugs": {
    "restaurant": "irani-chai-maska-chembur-chembur",
    "city": "mumbai"
    },
    "cityState": "5",
    "address": "Plot No 42 , Janta Timber Mart Ghatkopar Mankhurd link road behind Lotus Bakery Govandi Mumbai -400043",
    "locality": "Ghatkopar",
    "parentId": 293000,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
    "header": "FREE DELIVERY",
    "shortDescriptionList": [
    {
    "meta": "FREE DELIVERY",
    "discountType": "FREE_DELIVERY",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "FREE DELIVERY",
    "discountType": "FREE_DELIVERY",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "",
    "shortDescriptionList": [
    {
    "meta": "Free Delivery",
    "discountType": "FREE_DELIVERY",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "FREE DELIVERY",
    "discountType": "FREE_DELIVERY",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [],
    "totalFees": 0,
    "message": "",
    "title": "",
    "amount": "",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=5942210~p=10~eid=00000186-9a63-c689-470a-fa6400860a1c",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "5.5 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "488405",
    "deliveryTime": 43,
    "minDeliveryTime": 43,
    "maxDeliveryTime": 43,
    "lastMileTravel": 5.599999904632568,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "--",
    "totalRatings": 0,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "672313",
    "name": "Beri Beri",
    "uuid": "1b0236c2-a4f0-420e-b6fc-a8793e301ec9",
    "city": "5",
    "area": "Kurla",
    "totalRatingsString": "20+ ratings",
    "cloudinaryImageId": "f8096fc55d42f3638124c4d222a7733b",
    "cuisines": [
    "Beverages"
    ],
    "tags": [],
    "costForTwo": 20000,
    "costForTwoString": "₹200 FOR TWO",
    "deliveryTime": 39,
    "minDeliveryTime": 39,
    "maxDeliveryTime": 39,
    "slaString": "39 MINS",
    "lastMileTravel": 2.700000047683716,
    "slugs": {
    "restaurant": "beri-beri-kurla-kurla",
    "city": "mumbai"
    },
    "cityState": "5",
    "address": "Lal Bahadur Shastri Rd, Patelwadi.Kurla, Kamani, Kurla West, Kurla, Mumbai, Maharashtra 400070, India",
    "locality": "Lal Bahadur Shastri Rd",
    "parentId": 400763,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
    "header": "30% off",
    "shortDescriptionList": [
    {
    "meta": "30% off | Use TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "30% off up to ₹75 | Use code TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "30% OFF",
    "shortDescriptionList": [
    {
    "meta": "Use TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "30% off up to ₹75 | Use code TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "chain": [],
    "feeDetails": {
    "fees": [],
    "totalFees": 0,
    "message": "",
    "title": "",
    "amount": "",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "2.7 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "672313",
    "deliveryTime": 39,
    "minDeliveryTime": 39,
    "maxDeliveryTime": 39,
    "lastMileTravel": 2.700000047683716,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "5.0",
    "totalRatings": 20,
    "new": true
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "324349",
    "name": "Tossin Pizza",
    "uuid": "ecbab0de-f314-4dad-b713-0be4e5c0ef90",
    "city": "5",
    "area": "Chembur",
    "totalRatingsString": "100+ ratings",
    "cloudinaryImageId": "qjd2softxioczctuwkfb",
    "cuisines": [
    "Pizzas",
    "Italian",
    "Beverages",
    "Desserts"
    ],
    "tags": [],
    "costForTwo": 60000,
    "costForTwoString": "₹600 FOR TWO",
    "deliveryTime": 41,
    "minDeliveryTime": 41,
    "maxDeliveryTime": 41,
    "slaString": "41 MINS",
    "lastMileTravel": 4.800000190734863,
    "slugs": {
    "restaurant": "tossin-pizza-tossin_chembur-tossin_chembur",
    "city": "mumbai"
    },
    "cityState": "5",
    "address": "Shop 10, ST Road, Opposite Diamond Garden, Chembur East, Mumbai",
    "locality": "Opposite Diamond Garden",
    "parentId": 1778,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
    "header": "20% off",
    "shortDescriptionList": [
    {
    "meta": "20% off | Use TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "20% off up to ₹50 | Use code TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "20% OFF",
    "shortDescriptionList": [
    {
    "meta": "Use TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "20% off up to ₹50 | Use code TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "chain": [],
    "feeDetails": {
    "fees": [],
    "totalFees": 0,
    "message": "",
    "title": "",
    "amount": "",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "4.8 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "324349",
    "deliveryTime": 41,
    "minDeliveryTime": 41,
    "maxDeliveryTime": 41,
    "lastMileTravel": 4.800000190734863,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.1",
    "totalRatings": 100,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "1824",
    "name": "Subway",
    "uuid": "1ad9ee10-3354-46b4-ab67-bd8517e131ff",
    "city": "5",
    "area": "Andheri East",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "0bf19a82b109b40c2f5c56d00f071a33",
    "cuisines": [
    "Salads",
    "Snacks",
    "Desserts",
    "Beverages"
    ],
    "tags": [],
    "costForTwo": 35000,
    "costForTwoString": "₹350 FOR TWO",
    "deliveryTime": 33,
    "minDeliveryTime": 33,
    "maxDeliveryTime": 33,
    "slaString": "33 MINS",
    "lastMileTravel": 5,
    "slugs": {
    "restaurant": "subway-powai",
    "city": "mumbai"
    },
    "cityState": "5",
    "address": "Shope no 10 satellite silver building next to nikon gallery near marol naka metro station andheri kurla road andheri east mumbai 400039",
    "locality": "Marol",
    "parentId": 2,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
    "header": "40% off",
    "shortDescriptionList": [
    {
    "meta": "40% off | Use TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "40% off up to ₹80 | Use code TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "40% OFF",
    "shortDescriptionList": [
    {
    "meta": "Use TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "40% off up to ₹80 | Use code TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "chain": [],
    "feeDetails": {
    "fees": [],
    "totalFees": 0,
    "message": "",
    "title": "",
    "amount": "",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "5 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "1824",
    "deliveryTime": 33,
    "minDeliveryTime": 33,
    "maxDeliveryTime": 33,
    "lastMileTravel": 5,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.2",
    "totalRatings": 1000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "190494",
    "name": "Starboy Pizza & Shakes",
    "uuid": "4287c918-c32c-439c-ad66-d31ee2ba5e4a",
    "city": "5",
    "area": "Marol Sakinaka",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "rrg6gaw1b8ll4rc1w9y9",
    "cuisines": [
    "Pizzas",
    "Italian",
    "Desserts",
    "Beverages",
    "Snacks",
    "Fast Food"
    ],
    "tags": [],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 40,
    "minDeliveryTime": 40,
    "maxDeliveryTime": 40,
    "slaString": "40 MINS",
    "lastMileTravel": 6,
    "slugs": {
    "restaurant": "star-boy-pizza-and-cafe-andheri-east-andheri-east",
    "city": "mumbai"
    },
    "cityState": "5",
    "address": "Gala Noa 8, Nand Dham, Udyog Permises Coop Soc Ltd, Agni Shaman Dal Marg,, MV Collage, Greater Mumbai Ward-K/E, Greater Mumbai, Maharashtra - 400059",
    "locality": "Nandadham Industrial Estate",
    "parentId": 195514,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
    "header": "40% off",
    "shortDescriptionList": [
    {
    "meta": "40% off | Use PARTY",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "40% off | Use code PARTY",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "40% OFF",
    "shortDescriptionList": [
    {
    "meta": "Use PARTY",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "40% off | Use code PARTY",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "chain": [],
    "feeDetails": {
    "fees": [],
    "totalFees": 0,
    "message": "",
    "title": "",
    "amount": "",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 1,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "6 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "190494",
    "deliveryTime": 40,
    "minDeliveryTime": 40,
    "maxDeliveryTime": 40,
    "lastMileTravel": 6,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "IT_IS_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.0",
    "totalRatings": 1000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "520393",
    "name": "KHALIFA BIRYANI",
    "uuid": "3cdf4e69-6269-47dd-8170-0329382a3a83",
    "city": "5",
    "area": "Marol Sakinaka",
    "totalRatingsString": "Too Few Ratings",
    "cloudinaryImageId": "klkkvgdm1snolpuzs1vs",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Kebabs"
    ],
    "tags": [],
    "costForTwo": 50000,
    "costForTwoString": "₹500 FOR TWO",
    "deliveryTime": 45,
    "minDeliveryTime": 45,
    "maxDeliveryTime": 45,
    "slaString": "45 MINS",
    "lastMileTravel": 5.5,
    "slugs": {
    "restaurant": "khalifa-biryani-marol-sakinaka-marol-sakinaka",
    "city": "mumbai"
    },
    "cityState": "5",
    "address": "ANDHERI KURLA ROAD,OPP.LEELA HOTEL,MAROL NAKA,ANDHERI[EAST],MUMBAI,GREATER MUMBAI WARD-K/E,GREATER MUMBAI[MAHARASHTRA]-400059",
    "locality": "Opp Leela Hotelmarol Naka",
    "parentId": 117027,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
    "header": "30% off",
    "shortDescriptionList": [
    {
    "meta": "30% off | Use TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "30% off up to ₹75 | Use code TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "30% OFF",
    "shortDescriptionList": [
    {
    "meta": "Use TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "30% off up to ₹75 | Use code TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "chain": [],
    "feeDetails": {
    "fees": [],
    "totalFees": 0,
    "message": "",
    "title": "",
    "amount": "",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "5.5 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "520393",
    "deliveryTime": 45,
    "minDeliveryTime": 45,
    "maxDeliveryTime": 45,
    "lastMileTravel": 5.5,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "--",
    "totalRatings": 0,
    "new": false
    },
    "subtype": "basic"
    }
    ]

const ResturantCard = ({cloudinaryImageId, name, costForTwoString, area}) =>{

    return(
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h3>{costForTwoString}/-</h3>
            <h4>{area}</h4>
        </div>
    )
}

// const Header = () => {
//     return (
//         <div className="header">
//              {Title()}
//             <div className="nav-items">
//                 <ul>
//                     <li>
//                         Home
//                     </li>
//                     <li>
//                         About Us
//                     </li>
//                     <li>
//                         Contact Us
//                     </li>
//                     <li>
//                         Cart
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

const BodyComponent = () =>{
    return(
        <div className="body-section">
            {restaurantList.map(( restaurant )=> {
                return (<ResturantCard {...restaurant.data}/>)
            })
            }
        </div>
    );
};

const FooterComponent = () =>{
    return(
        <div className="footer-section">
            This is my footer
        </div>
    );
};

const AppComponent = () =>{
    return(
        [
            <Header/>,
            <BodyComponent/>,
            <FooterComponent/>
        ]
        
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

// root.render(container);
root.render(<AppComponent />);
import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));

const Navbar = () => {
    return(
        <header className="header-section">
            <div className="logo-img">
                <img alt="logo" src="https://images-platform.99static.com/O3ZHfJeHB741xpyYH95tWvMsdTI=/0x0:1279x1279/500x500/top/smart/99designs-contests-attachments/63/63966/attachment_63966256"/>
            </div>
            <div className="logo-content">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </header>
    )
}

const ResturantCard = (props) => {
    const {resdata} = props;
    const resname = resdata.card.card.info.name;
    const resprice = resdata.card.card.info.costForTwo;
    const cuisines = resdata.card.card.info.cuisines.join(", ");
    const locality = resdata.card.card.info.locality;
    const area= resdata.card.card.info.areaName;
    const avgRating = resdata.card.card.info.avgRating;    
    return (
        <div className="resturant-card">
            <div className="res-img">
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/`+resdata.card.card.info.cloudinaryImageId} alt="res-img"/>
            </div>
            <div className="res-content">
                <h4>{resname}</h4>
                <h6>{resprice}</h6>
                <p className="cuisine">{cuisines}</p>
                <p className="rating"> <span>Rating:</span> {avgRating} stars</p >               
                <p className="location"> <span>Location: </span> 
                 {locality==area ? locality : locality+", "+area}
                </p>                
            </div>
        </div>
    )
}

const reslist = [
    {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "16540",
              "name": "Hotel Saravana Bhavan",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/24/758d1715-6c15-4506-8ef6-791c09543abb_16540.JPG",
              "locality": "Vellala Street",
              "areaName": "Purasaiwakkam",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "South Indian",
                "Meal",
                "North Indian",
                "Chinese",
                "Bakery",
                "Sweets",
                "Beverages",
                "Desserts",
                "Snacks"
              ],
              "avgRating": 4.3,
              "parentId": "101987",
              "avgRatingString": "4.3",
              "totalRatingsString": "38K+",
              "promoted": true,
              "adTrackingId": "cid=4f22f476-1231-4245-90f9-1d794338b5f2~p=0~adgrpid=4f22f476-1231-4245-90f9-1d794338b5f2#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=16540~plpr=COLLECTION~eid=465e6079-196b-4c5a-855f-bb437f7c35db~srvts=1772351202184~collid=83633",
              "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-03-01 23:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "pureveg",
                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹19",
                "footerText": "3 DEALS LEFT",
                "secondaryHeaderType": "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER"
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "4f22f476-1231-4245-90f9-1d794338b5f2"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=16540&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
       {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "354761",
              "name": "Ss Hyderabad Biryani",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/23/13337a82-1218-4f83-8651-b561f90018c2_354761.JPG",
              "locality": "Santhome",
              "areaName": "Mylapore",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Biryani"
              ],
              "avgRating": 4.6,
              "parentId": "599700",
              "avgRatingString": "4.6",
              "totalRatingsString": "21K+",
              "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 7.7,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "7.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-03-01 23:45:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.2",
                  "ratingCount": "1.5K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=354761&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
       {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "258595",
              "name": "Shyam's Bombay Halwa house",
              "cloudinaryImageId": "qjyxbqoft7ysdtevzkta",
              "locality": "Sowcarpet",
              "areaName": "Sowcarpet",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "North Indian"
              ],
              "avgRating": 4.5,
              "parentId": "16962",
              "avgRatingString": "4.5",
              "totalRatingsString": "3.4K+",
              "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-03-01 15:30:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "pureveg"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹59",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.3",
                  "ratingCount": "828"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=258595&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "644303",
              "name": "A2B - Adyar Ananda Bhavan",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/7/c9fae499-3ac2-4d1f-9d70-9269fc7a2d2c_644303.JPG",
              "locality": "Egmore",
              "areaName": "Kilpauk",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "South Indian",
                "Sweets",
                "Chinese"
              ],
              "avgRating": 4.5,
              "veg": true,
              "parentId": "22",
              "avgRatingString": "4.5",
              "totalRatingsString": "6.9K+",
              "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 0.8,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "0.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-03-01 22:30:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                          "description": "Delivery!"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹33"
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=644303&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "810579",
              "name": "Nandhana Palace",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/ad122ab6-e98b-4a8a-9fa4-c862197e003e_810579.jpg",
              "locality": "Egmore",
              "areaName": "Mount Road",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Andhra",
                "Biryani",
                "South Indian"
              ],
              "avgRating": 4.4,
              "parentId": "2120",
              "avgRatingString": "4.4",
              "totalRatingsString": "10K+",
              "promoted": true,
              "adTrackingId": "cid=4d7b7931-b841-4147-b9c3-c7016e4c3a1b~p=1~adgrpid=4d7b7931-b841-4147-b9c3-c7016e4c3a1b#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=810579~plpr=COLLECTION~eid=9fad6d8c-58a6-4779-968f-f0bb62fd94ea~srvts=1772351202184~collid=83633",
              "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-03-02 02:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Biryani.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "Rxawards/_CATEGORY-Biryani.png",
                          "description": "Delivery!"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99"
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "4d7b7931-b841-4147-b9c3-c7016e4c3a1b"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=810579&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1162944",
              "name": "RNR Biryani - Taste Of 1953",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/1dde1753-cfc8-4b47-b12c-5ace0447f25f_1162944.JPG",
              "locality": "Egmore",
              "areaName": "Egmore",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Biryani",
                "South Indian"
              ],
              "avgRating": 4.3,
              "parentId": "11620",
              "avgRatingString": "4.3",
              "totalRatingsString": "346",
              "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-03-02 01:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=1162944&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "17446",
              "name": "Nithya Amirtham Sweets",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/27/78f95366-23f7-46f9-bf9e-48b041878e59_17446.jpg",
              "locality": "Kilpauk",
              "areaName": "Kilpauk",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Sweets",
                "Snacks",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4.7,
              "veg": true,
              "parentId": "2169",
              "avgRatingString": "4.7",
              "totalRatingsString": "12K+",
              "promoted": true,
              "adTrackingId": "cid=891271aa-8de7-4d7e-86f8-7f3cceac11e5~p=3~adgrpid=891271aa-8de7-4d7e-86f8-7f3cceac11e5#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=17446~plpr=COLLECTION~eid=67f1ab56-2b52-46a6-80c1-6e0c047ac6c6~srvts=1772351202184~collid=83633",
              "sla": {
                "deliveryTime": 40,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-03-01 23:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "pureveg"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹50 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "891271aa-8de7-4d7e-86f8-7f3cceac11e5"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=17446&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "791662",
              "name": "North Indian & Bengali Pearl Restaurant",
              "cloudinaryImageId": "43649026375c81ef3955c7c847623911",
              "locality": "Periamet",
              "areaName": "Periamet",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Indian",
                "Fast Food",
                "Chinese"
              ],
              "avgRating": 4.3,
              "parentId": "488310",
              "avgRatingString": "4.3",
              "totalRatingsString": "1.4K+",
              "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-03-02 05:59:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹200 OFF",
                "subHeader": "ABOVE ₹999",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.0",
                  "ratingCount": "67"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=791662&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "17443",
              "name": "Nithya Amirtham",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/27/b9756b1c-95bc-4718-bb65-cb59945bfada_17443.jpg",
              "locality": "Mylapore",
              "areaName": "Mylapore",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "South Indian",
                "Sweets",
                "Chinese",
                "Snacks"
              ],
              "avgRating": 4.6,
              "veg": true,
              "parentId": "149425",
              "avgRatingString": "4.6",
              "totalRatingsString": "163K+",
              "promoted": true,
              "adTrackingId": "cid=ce59ad36-e4bd-4c55-94c8-8272f32748da~p=4~adgrpid=ce59ad36-e4bd-4c55-94c8-8272f32748da#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=17443~plpr=COLLECTION~eid=8257cef5-618b-49d3-867f-8cdcee106adc~srvts=1772351202184~collid=83633",
              "sla": {
                "deliveryTime": 57,
                "lastMileTravel": 9.5,
                "serviceability": "SERVICEABLE",
                "slaString": "55-65 mins",
                "lastMileTravelString": "9.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-03-01 23:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                          "description": "Delivery!"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹799",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.1",
                  "ratingCount": "8.4K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "ce59ad36-e4bd-4c55-94c8-8272f32748da"
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=17443&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      }
]

const Body = ()=> {
    return(
        <section className="body-section">
            <h1>Welcome to Foody</h1>
            <div className="restuarant-container">
               {reslist.map((resturant)=>(
                <ResturantCard key={resturant.card.card.info.id} resdata={resturant}/>
               ))}
            </div>
        </section>
    )
}


const App = () => {
    return(
        <>
            <Navbar />
            <Body />
        </>
    )
}

    
root.render(<App />);






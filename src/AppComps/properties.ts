

// export interface PropertyProps {
//   id: number;
//   img: string | StaticImageData;
//   propertyType:
//     | "House"
//     | "Apartment"
//     | "Condo"
//     | "Cabin"
//     | "Farmhouse"
//     | "Villa"
//     | "Penthouse"
//     | "Winery"
//     | "Loft"
//     | "Flat";
//   propertyStatus: "For Rent" | "For Sale";
//   area: string;
//   price: string;
//   propertyName: string;
//   location: string;
//   bedrooms: number;
//   bathrooms: number;
//   parking: number;
//   owner: string;
//   date: string;
//   balcony?: number;
// }

import { p1, p2, p3, p4, p5, p6 } from "../data/media";

export interface PropertyRProps {
  type: string;
  concept: string;
  location: string;
  area: string;
  details: string[];
  img: string ;
}

// export const properties: PropertyRProps[] = [
//   {
//     id: 1,
//     img: p1,
//     propertyType: "Flat",
//     propertyStatus: "For Sale",
//     area: "1350 sqft",
//     price: "$500,000",
//     propertyName: "Beautiful Family Home",
//     location: "Sector 123 Greater Mohali",
//     bedrooms: 3,
//     bathrooms: 3,
//     balcony: 2,
//     parking: 2,
//     owner: "John Doe",
//     date: "March 15, 2021",
//   },
//   {
//     id: 2,
//     img: p2,
//     propertyType: "Apartment",
//     propertyStatus: "For Rent",
//     area: "1200 sqft",
//     price: "$1,500/mo",
//     propertyName: "Modern Apartment",
//     location: "456 Elm St, Metropolis",
//     bedrooms: 2,
//     bathrooms: 1,
//     parking: 1,
//     owner: "Jane Smith",
//     date: "April 10, 2021",
//   },
//   {
//     id: 3,
//     img: p3,
//     propertyType: "Condo",
//     propertyStatus: "For Sale",
//     area: "1800 sqft",
//     price: "$400,000",
//     propertyName: "Luxury Condo",
//     location: "789 Oak St, Star City",
//     bedrooms: 2,
//     bathrooms: 2,
//     parking: 1,
//     owner: "Alice Johnson",
//     date: "February 20, 2021",
//   },
//   {
//     id: 4,
//     img: p4,
//     propertyType: "Cabin",
//     propertyStatus: "For Rent",
//     area: "1500 sqft",
//     price: "$2,000/mo",
//     propertyName: "Cozy Cabin",
//     location: "321 Pine St, Forestville",
//     bedrooms: 3,
//     bathrooms: 2,
//     parking: 2,
//     owner: "Bob Brown",
//     date: "May 5, 2021",
//   },
//   {
//     id: 5,
//     img: p5,
//     propertyType: "Loft",
//     propertyStatus: "For Sale",
//     area: "2000 sqft",
//     price: "$450,000",
//     propertyName: "Spacious Loft",
//     location: "654 Cedar St, Uptown",
//     bedrooms: 1,
//     bathrooms: 1,
//     parking: 1,
//     owner: "Charlie Davis",
//     date: "January 30, 2021",
//   },
// ];



export const propertiesereal: PropertyRProps[] = [
  {
    type: "3 BHK Flat, G+2",
    concept: "Semi Furnished",
    location: "115 Sector Mohali",
    area: "1800 sq ft",
    details: [
      "Modular Kitchen",
      "LED Panels",
      "LED Lighting",
      "2 Parking Spaces",
      "Wallpapers",
      "Wardrobes",
      "3 Bedrooms",
      "3 Washrooms",
      "2 Balconies",
    ],
    img: p1,
  },
  {
    type: "Independent House",
    concept: "Semi Furnished",
    location: "Sector 125 Mohali",
    area: "1600 sq ft",
    details: [
      "Secured Entry under CCTVs",
      "Modular Kitchen",
      "Wardrobes",
      "Panels",
      "LED Lighting",
      "Wallpapers",
      "4 Bedrooms",
      "4 Washrooms",
      "2 Kitchens",
      "4 Balconies",
    ],
    img: p2,
  },
  {
    type: "Villas",
    concept: "Semi Furnished",
    location: "Sector 124,Mohali",
    area: "1350 sq ft",
    details: [
      "Gated Community",
      "Modular Kitchen",
      "LED Lighting",
      "Panels",
      "Wardrobes",
      "Wallpapers",
      "Near to Airport Road Mohali",
    ],
    img: p3,
  },
  {
    type: "3 BHK Flats",
    concept: "Semi Furnished",
    location: "125 Sector",
    area: "1800 sq ft",
    details: [
      "Lifs",
      "Bigger Size",
      "Luxurious Flats with all Amenities",
      "Lift",
      "Modular Kitchen",
      "LED Panels",
      "Designed Wall",
      "Wardrobes",
      "Near to PR7 Airport Road",
    ],
    img: p4,
  },
  {
    type: "Villa 3 BHK",
    concept: "Semi Furnished",
    location: "124 Sector, Mohalli",
    area: "1350 sq ft",
    details: [
      "Gated Community",
      "Modular Kitchen",
      "Wardrobes",
      "Wallpapers",
      "LED Lighting",
      "Panels",
      "Direct Connectivity to New Chandigarh, Baddi, Delhi, Himachal",
      "1 Covered Parking",
      "1 Open Parking",
    ],
    img: p5,
  },
  {
    type: "3 BHK Flats",
    concept: "Semi Furnished",
    location: "Sector 123 Greater Mohali",
    area: "1350 sq ft",
    details: [
      "3 Bedrooms",
      "3 Bathrooms",
      "2 Balconies",
      "Drawing",
      "Dinning",
      "Modular Kitchen",
      "On Road Location of PR7 Airport Road",
      "Direct Connectivity to Chandigarh, Himachal, Baddi",
    ],
    img: p6,
  },
];

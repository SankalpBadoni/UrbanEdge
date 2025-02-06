import React from "react";
import { listData } from "../../Data/DummyData";
import Filter from "../../Components/Filter/Filter";
import Card from "../../Components/Card/Card";
import Map from "../../Components/Map/Map";
import { useLoaderData } from "react-router-dom";

export default function ListPage() {
  const data = listData;
  const propertiesData = useLoaderData();
  const properties = propertiesData?.properties || []; 
  console.log("loader data", properties);
  return (
    <>
      <div className="flex h-screen">
        <div className="w-3/5 pr-12 flex flex-col overflow-y-auto">
          <Filter />
          <div className="flex flex-col gap-12 overflow-y-auto">
            { Array.isArray(properties) && properties.length > 0 ? (
              properties.map((item) => <Card key={item.id} item={item} />)
            ) : (
              <p className="text-gray-500">No properties found.</p>
            )}
          </div>
        </div>

        <div className="w-2/5 bg-pink-100">
          <Map items={properties} />
        </div>
      </div>
    </>
  );
}

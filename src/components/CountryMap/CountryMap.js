import React from "react";
import { YMaps, Map } from 'react-yandex-maps';

const CountryMap = (props) => (
   <div style={{height:'333px'}}>
      <YMaps>
         <Map state={{ center: [props.lat, props.lng], zoom: 6.5,}} width={"100%"} height={"330px"}/>
      </YMaps>
   </div>
);

export default CountryMap;
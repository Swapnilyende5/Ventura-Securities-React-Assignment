import React from "react";
import ListPageTitle from "../ListPageTitle";
import About from "./DetailsTabs/About";
import IpoTimeline from "./DetailsTabs/Timeline";
import Details from "./DetailsTabs/Details";
import DetailsHeader from "./DetailsTabs/DetailsHeader";

const IpoDetailsPage = () => {
  return (
    <>
      <ListPageTitle title="IPO Details Page" />
      <div>
        <DetailsHeader/>
        <Details />
        <IpoTimeline />
        <About />
      </div>
    </>
  );
};

export default IpoDetailsPage;

import React from "react";
import ListPageTitle from "../ListPageTitle";
import About from "./DetailsTabs/About";
import IpoTimeline from "./DetailsTabs/Timeline";
import Details from "./DetailsTabs/Details";
import DetailsHeader from "./DetailsTabs/DetailsHeader";
import Breadcrumb from "../Breadcrumb";

const IpoDetailsPage = ({ ipoDetails }) => {
  const { company, link, logo } = ipoDetails || {};
  return (
    <>
      <ListPageTitle title="IPO Details Page" />
      <Breadcrumb link={link} />
      <div>
        <DetailsHeader company={company} logo={logo} />
        <Details />
        <IpoTimeline />
        <About />
      </div>
    </>
  );
};

export default IpoDetailsPage;

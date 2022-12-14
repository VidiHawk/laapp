import React from "react";

// shared page components
// import MultipleDesignBlocks from "./shared/MultipleDesignBlocks.jsx";
// import FeaturesCantMiss from "./shared/FeaturesCantMiss.jsx";
// import Pricing from "./shared/Pricing.jsx";
import Integration from "./shared/Integration.jsx";
// import WhyUs from "./shared/WhyUs.jsx";
// import Faqs from "./shared/Faqs.jsx";
import StartFree from "./shared/StartFree.jsx";
import Subscribe from "./shared/Subscribe.jsx";
import PowerfulFeatures from "./shared/PowerfulFeatures.jsx";

// core components
import DefaultNavbar from "components/Navbars/DefaultNavbar.jsx";
import DefaultFooter from "components/Footers/DefaultFooter.jsx";

// alternative 2 page components
import Heading from "./alter2/Heading.jsx";
import Partners from "./alter2/Partners.jsx";
import Features from "./alter2/Features.jsx";
import Proposal from "./alter1/Proposal.jsx";

class Alternative2 extends React.Component {
  render() {
    return (
      <>
        <DefaultNavbar useOnlyDarkLogo={false} />
        <main ref="main">
          {/* Alternative 2 specific components */}
          <Heading />
          <Partners />
          <Features />

          {/* Shared Components */}
          {/* <MultipleDesignBlocks /> */}
          <Integration />
          {/* <FeaturesCantMiss /> */}
          <Proposal />
          <PowerfulFeatures />
          {/* <Pricing /> */}

          {/* <WhyUs /> */}
          {/* <Faqs /> */}
          <StartFree />
          <Subscribe />
        </main>
        <DefaultFooter />
      </>
    );
  }
}

export default Alternative2;

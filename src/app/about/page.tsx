import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import AboutSectionThree from "@/components/About/AboutSectionThree";

import Breadcrumb from "@/components/Common/Breadcrumb";

import AboutCardSection from "@/components/AboutCards";


import { Metadata } from "next";
import { Span } from "next/dist/trace";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName={<span>About <span className="text-blue-600"> Paarsh Edu. Learning </span></span>}

        description="Our goal is to empower businesses worldwide to achieve great heights through technology."
      />
      <AboutSectionThree/>
      <AboutSectionTwo />
      <AboutSectionOne />
      <AboutCardSection/>

    </>
  );
};

export default AboutPage;

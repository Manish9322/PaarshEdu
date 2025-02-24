import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionThree = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title={<><span className="text-blue-600">Transforming Education</span> with Web Experiences.</>}
                paragraph="Seamless course management with flexible pricing, user-friendly interface, and lifetime access."
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <p className="mb-5 text-lg text-body-color">
                  <span className="text-blue-600 font-bold"> Paarsh Infotech Pvt. Ltd.</span> is the best Software development company in Nashik, India. It was established in 2018.
                  We provide high-end web design & development solutions in Web & IT world. We do not just believe in increasing
                  business. We trust in creating customer delight. We believe in making long-life relationships with our clients.
                  We expect in developing a solid foundation for our company personally and professionally.
                </p>

                <p className="mb-5 text-lg text-body-color">
                  We work for our clients and measure our success by their success. We not only provide services to our clients. But also we
                  give internships to computer science students. Students can join our internship program as per their interests.
                  We also provide an opportunity for our students to work on live projects. It will make them capable stand out
                  in the interview of the company.
                </p>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
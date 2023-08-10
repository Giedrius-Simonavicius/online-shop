import React from 'react';
import Comments from '../components/homePageProducts/Comments';
import AboutUsSingleComponent from '../components/aboutUsComponents/AboutUsSingleComponent';

function AboutUs() {
  return (
    <div>
      <h1 className="container mx-auto my-5 px-5 text-4xl font-bold">
        About Us
      </h1>
      <AboutUsSingleComponent
        theme="bg-black text-white"
        title="A Family That Keeps On Growing"
        text1="We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store."
        text2="
        Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success."
        imgSrc="/images/aboutUs/office.jpg"
        imgSrcSm="/images/aboutUs/officeSmall.png"
      />
      <AboutUsSingleComponent
        theme={`bg-white text-black flex-row-reverse `}
        title="Shop.com"
        text1="Shop.com is a proudly Australian owned, Melbourne based supplier of I.T. goods and services, operating since 1991. Our client base encompasses individuals, small business, corporate and government organisations. We provide complete business IT solutions, centred on high quality hardware and exceptional customer service."
        imgSrc="/images/aboutUs/keyboard.jpg"
        icon="/icons/aboutUs/aboutShop.svg"
      />
      <AboutUsSingleComponent
        theme="bg-black text-white"
        title="Now You're In Safe
        Hands"
        text1="Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.
        "
        text2="Now You're In Safe Hands"
        imgSrc="/images/aboutUs/aboutPC00.jpg"
        icon="/icons/aboutUs/aboutHeart.svg"
      />
      <AboutUsSingleComponent
        theme="bg-white text-black flex-row-reverse"
        title="The Highest Quality of Products"
        text1="We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.
        "
        imgSrc="/images/aboutUs/aboutPC2.jpg"
        icon="/icons/aboutUs/aboutStar.svg"
      />
      <AboutUsSingleComponent
        theme="bg-black text-white"
        title="We Deliver to Any Regions"
        text1="We deliver our goods all across Australia. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be.
        "
        imgSrc="/images/aboutUs/aboutPC03.jpg"
        icon="/icons/aboutUs/aboutDeliver.svg"
      />
      <Comments />
      <h4 className="mt-10 text-center text-xl">Where to find us?</h4>
      <iframe
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Embedded"
        className=" mx-auto mb-8 mt-8 h-[30rem] w-3/4"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4605.968809874129!2d25.294992289052875!3d54.74507693972719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1snusistu%20plazas!5e0!3m2!1slt!2slt!4v1691401205293!5m2!1slt!2slt"
      />
    </div>
  );
}

export default AboutUs;

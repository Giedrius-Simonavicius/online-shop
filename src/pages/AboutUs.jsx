import React from 'react';
import Comments from '../components/homePageProducts/Comments';
import AboutUsSingleComponent from '../components/aboutUsComponents/AboutUsSingleComponent';

function AboutUs() {
  return (
    <div>
      <h1 className="container mx-auto my-5 text-4xl font-bold">About Us</h1>
      <AboutUsSingleComponent
        theme="bg-black text-white"
        title="A Family That Keeps On Growing"
        text1="We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store."
        text2="
        Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success."
        imgSrc="/images/aboutUs/office.jpg"
      />
      <AboutUsSingleComponent
        theme="bg-white text-black flex-row-reverse"
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
        imgSrc="/images/aboutUs/aboutPC00.png"
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
        imgSrc="/images/aboutUs/aboutPC03.png"
        icon="/icons/aboutUs/aboutDeliver.svg"
      />
      <Comments />
    </div>
  );
}

export default AboutUs;

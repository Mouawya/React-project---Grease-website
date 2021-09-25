import React from "react";
import ImageSlider from "../components/ImageSlider";
import MoreAboutCard from "../components/MoreAboutCard";

const Home = () => {
  return (
    <div className="home">
      <ImageSlider />
      <div className="more-about-container">
        <h1 className="more-about-title">More about Grease</h1>
        <div className="more-about-cards">
          <MoreAboutCard
            image={require("../images/dance-festival.jpg").default}
            alt="festival"
            title="Festival"
            text="Once per year in November we organize a week full of dancing. The moment to try different dance styles or dance your favorite moves with national and international dancers.
            "
            btnText="Buy a ticket"
          />
          <MoreAboutCard
            image={require("../images/Private-Dance-Lessons.jpg").default}
            alt="people dancing"
            title="Private Lessons"
            text="Do you want to improve your skills or prepare for a special dance? Hire one of our teachers for a private lesson! We promise you will not regret it.
            
"
            btnText="Register"
          />
          <MoreAboutCard
            image={require("../images/Live-Music-nights.jpg").default}
            alt="playing music"
            title="Live Music Nights"
            text="Every first Saturday of the month we invite a band to come and play for the dancers in our school. Live groves are always the best to get you into the dancing mood!
"
            btnText="Buy a ticket"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;

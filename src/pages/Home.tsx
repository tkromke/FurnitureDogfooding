import { FunctionComponent, useCallback } from "react";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/single-product");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <FrameComponent6 />
      <FrameComponent3 />
      <section className={styles.frameParent}>
        <FrameComponent4 />
        <section className={styles.privacyPolicy}>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.topPicksForYouWrapper}>
                  <div className={styles.topPicksFor}>Top Picks For You</div>
                </div>
                <div className={styles.findABright}>
                  Find a bright ideal to suit your taste with our great
                  selection of suspension, floor and table lights.
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.graniteSquareSideTable2Parent}>
                <img
                  className={styles.graniteSquareSideTable2}
                  alt=""
                  src="/granite-square-side-table-2@2x.png"
                />
                <div className={styles.frameWrapper1}>
                  <div className={styles.graniteSquareSideTableParent}>
                    <div className={styles.graniteSquareSide}>
                      Granite square side table
                    </div>
                    <div className={styles.rs25880000}>Rs. 258,800.00</div>
                  </div>
                </div>
              </div>
              <div className={styles.asgaardSofa2Parent}>
                <img
                  className={styles.asgaardSofa2}
                  alt=""
                  src="/asgaard-sofa-2@2x.png"
                />
                <div className={styles.frameWrapper2}>
                  <div className={styles.asgaardSofaParent}>
                    <div className={styles.asgaardSofa}>Asgaard sofa</div>
                    <div className={styles.rs25000000}>Rs. 250,000.00</div>
                  </div>
                </div>
              </div>
              <div className={styles.mayaSofaThreeSeater1Parent}>
                <img
                  className={styles.mayaSofaThreeSeater1}
                  alt=""
                  src="/maya-sofa-three-seater-1@2x.png"
                />
                <div className={styles.frameWrapper3}>
                  <div className={styles.mayaSofaThreeSeaterParent}>
                    <div className={styles.mayaSofaThree}>
                      Maya sofa three seater
                    </div>
                    <div className={styles.rs11500000}>Rs. 115,000.00</div>
                  </div>
                </div>
              </div>
              <ProductCard
                trentonModularSofa31="/outdoor-sofa-set-1@2x.png"
                trentonModularSofa3="Outdoor sofa set"
                rs2500000="Rs. 244,000.00"
                propHeight="unset"
                propWidth="unset"
                propMargin="unset"
                propPosition="unset"
                propTop="unset"
                propLeft="unset"
                propFlex="0.6419"
                propPadding="0px var(--padding-41xl-5) var(--padding-12xs)"
                propAlignSelf="unset"
                propFlex1="unset"
                propOverflow="unset"
                propMarginLeft="-72.5px"
                propWidth1="344px"
                propAlignSelf1="stretch"
                propAlignSelf2="stretch"
                propWidth2="unset"
                propDisplay="unset"
              />
            </div>
            <div className={styles.frameWrapper4}>
              <div className={styles.viewMoreWrapper}>
                <div className={styles.viewMore}>View More</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.asgaardSofa1Wrapper}>
              <img
                className={styles.asgaardSofa1}
                alt=""
                src="/asgaard-sofa-1@2x.png"
              />
            </div>
            <div className={styles.backgroundImage}>
              <div className={styles.testimonialCardParent}>
                <div className={styles.testimonialCard}>
                  <div className={styles.feedbackForm}>
                    <div className={styles.newArrivals}>New Arrivals</div>
                  </div>
                  <b className={styles.asgaardSofa3}>Asgaard sofa</b>
                </div>
                <div className={styles.frameWrapper5}>
                  <button
                    className={styles.orderNowWrapper}
                    onClick={onFrameButtonClick}
                  >
                    <div className={styles.orderNow}>Order Now</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.privacyPolicyInner}>
            <div className={styles.frameWrapper6}>
              <div className={styles.frameParent2}>
                <div className={styles.ourBlogsParent}>
                  <h1 className={styles.ourBlogs}>Our Blogs</h1>
                  <div className={styles.findABright1}>
                    Find a bright ideal to suit your taste with our great
                    selection
                  </div>
                </div>
                <div className={styles.universityDrive}>
                  <FrameComponent2 frame230="/frame-230@2x.png" />
                  <FrameComponent2 frame230="/frame-230-1@2x.png" />
                  <FrameComponent2 frame230="/frame-230-2@2x.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <FrameComponent />
    </div>
  );
};

export default Home;

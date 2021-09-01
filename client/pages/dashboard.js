import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../components/UserContext';
/* eslint-disable react/jsx-filename-extension */
import Image from 'next/image';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Carousel from 'react-material-ui-carousel';
import NavBar from '../components/NavBar';
import styles from '../styles/Dashboard.module.css';
import SignOutButton from '../components/SignOut';
import Footer from '../components/Footer';
import leafTop from '../public/grassTop.png';
import leafBot from '../public/grassBottom.png';
import SearchDrawer from '../components/SearchDrawer.js';
import SearchContext from '../components/SearchContext.js';
import ChatBot from '../components/ChatBot';

export default function Dashboard() {
  const { authUser, loading } = useUser();
  console.log(authUser)
  const router = useRouter();
  useEffect(() => {
    if (!loading && !authUser) {
      router.push('/login');
    }
  }, [authUser, loading]);

  return (

    <>

      {/* <SignOutButton /> */}

      <div className={styles.container}>
      <NavBar />
        <div className={styles.top}>
          <div className={styles.greeting}>
            Welcome Zariopheef!
          </div>
          <div className={styles.search}>
            <SearchDrawer />
          </div>
        </div>
        <div className={styles.topBox}>
          <div className={styles.left}>
            <div>
              <div className={styles.quote}>
                <Image src={leafTop} alt="picture of some leaves" />
                <span>
                  {/* <span className={styles.quoteDot}>.</span> */}
                  <br />

                  We believe in healthcare for everyone. For us, everyone really does
                  include every person and identity. Our clinics are inclusive, judgment-free zones.
                  <br />
                  <span className={styles.quoteDot}>.</span>
                </span>
                <Image src={leafBot} alt="picture of some leaves" />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            {/* <div className={styles.dashboardTitle}>
              User Dashboard
            </div> */}
            <div className={styles.topRight}>
              {/* <form>
                <input
                  placeholder="Search"
                  className={styles.search}
                />
              </form> */}
            </div>

            <div className={styles.yourTeam}>
              <div className={styles.yourTeamTitle}>
                Your Preferred Providers
              </div>
              <div className={styles.providerCardContainer}>
                <div className={styles.providerCard}>
                  <div className={styles.providerBarTitle}>Gender Affirming Care</div>
                  {/* <div className={styles.providerBarDoctor}>Select Your Physician</div> */}
                  {/* <Image src={DOCTOR_IMAGE_URL_SOURCE} /> */}

                </div>
                <div className={styles.providerCard}>
                  <div className={styles.providerBarTitle}>Mental Well Being</div>
                  {/* <div className={styles.providerBarDoctor}>YouBeen Jung, MD</div> */}
                  {/* <Image src={DOCTOR_IMAGE_URL_SOURCE} /> */}
                </div>
                <div className={styles.providerCard}>
                  <div className={styles.providerBarTitle}>Meditation Center</div>
                  {/* <div className={styles.providerBarDoctor}>YouBeen Jung, MD</div> */}
                  {/* <Image src={DOCTOR_IMAGE_URL_SOURCE} /> */}
                </div>
              </div>

            </div>

          </div>
        </div>
        <div className={styles.bottomBox}>
          <div className={styles.bottomLeft}>
          </div>
          <div className={styles.bottomRight}>
            <div className={styles.yourServices}>
              <div className={styles.discoverTitle}>
                Discover More Services
              </div>
              <div className={styles.bigCarousel}>
                <Carousel
                  autoPlay={false}
                >
                  {/* <ArrowBackIosIcon onClick={() => console.log('LEFT YALL')} /> */}
                  <div className={styles.carouselBody}>
                    <button type="button" className={styles.discoverButton}>Accupuncture</button>
                    <button type="button" className={styles.discoverButton}>Behavioral Health</button>
                    <button type="button" className={styles.discoverButton}>Herbal Healing</button>
                    <button type="button" className={styles.discoverButton}>Eastern Remedies</button>
                  </div>
                  <div className={styles.carouselBody}>
                    <button type="button" className={styles.discoverButton}>Gender Affirming Care</button>
                    <button type="button" className={styles.discoverButton}>Mental Health Services</button>
                  </div>
                  {/* <ArrowForwardIosIcon onClick={() => console.log('RIGHT YALL')} /> */}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatBot />
      <Footer />
    </>
  );
}

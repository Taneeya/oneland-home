import type { NextPage } from 'next'
import styles from '../styles/Land.module.scss'

const LandPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.sectionOne}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div className={styles.sectionHead}>
            <div className={styles.headLeft}>
              <img src="images/logo.svg" alt="" />
              <span>ONELAND<span>.finance</span> </span>
            </div>
            <div className={styles.headRight}>
              <i className={styles.in}></i>
              <i className={styles.twiter}></i>
              <i className={styles.facebook}></i>
              <i className={styles.circle}></i>
              <div><span>Launch App</span></div>
            </div>
          </div>
          <div className={styles.sectionBody}>
            <span className={styles.title1}>ONELAND</span>
            <span className={styles.title2}>Activate your land</span>
            <span className={styles.title3}>One-stop Land Platform For the Metaverse</span>
            <div className={styles.btnGroup}>
              <img src="images/launch.svg" alt="" />
              <img src="images/learn.svg" alt="" />
            </div>
            <div className={styles.numInfo}>
              <div className={styles.infoBox}>
                <span className={styles.top}>123,020 ETH</span>
                <span>Total Landfi TVL</span>
              </div>
              <div className={styles.line}></div>
              <div className={styles.infoBox}>
                <span className={styles.top}>12,123,020</span>
                <span>Traders</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sectionTwo}>
        <div className={styles.maxWidthStyle}>
          <span className={styles.title4}>Value of Oneland</span>
          <span className={styles.title5}>The most professional finance platform for the lands of metaverse</span>
          <div className={styles.roleGroup}>
            <div className={styles.commonDivStyle}>
              <div className={styles.roleDiv}>
                <img src="images/buyers.svg" alt="" />
                <div className={styles.roleInfo}>
                  <span className={styles.roleTop}>Buyers</span>
                  <span className={styles.roleBottom}>The ‘supermarket’ where they can discover and collect land assets of all kinds, from all projects.</span>
                </div>
              </div>
              <div className={styles.roleDiv}>
                <img src="images/sellers.svg" alt="" />
                <div className={styles.roleInfo}>
                  <span className={styles.roleTop}>Sellers</span>
                  <span className={styles.roleBottom}>Better liquidity. One-stop services. Smooth trading experiences. Always get lands sold at reasonable prices.</span>
                </div>
              </div>
            </div>
            <div className={styles.commonDivStyle}>
              <div className={styles.roleDiv}>
                <img src="images/holders.svg" alt="" />
                <div className={styles.roleInfo}>
                  <span className={styles.roleTop}>holders</span>
                  <span className={styles.roleBottom}>Provide a variety of financial services, so that the holder's assets can continue to increase</span>
                </div>
              </div>
              <div className={styles.roleDiv}>
                <img src="images/metaverse.svg" alt="" />
                <div className={styles.roleInfo}>
                  <span className={styles.roleTop}>Metaverse Project</span>
                  <span className={styles.roleBottom}>A larger potential user base and a more liquid marketplace can be found here.</span>
                </div>
              </div>
            </div>
          </div>
          <span className={styles.title4} style={{ marginTop: '95px' }}>Information as a service</span>
          <span className={styles.title5} style={{ marginBottom: '0px' }}>Easy trading , communication and decision making</span>
          <div className={styles.infomation}>
            <div className={styles.infomationBox}>
              <img src="images/forum.svg" alt="" />
              <span className={styles.infomationTitle}>Land Forum</span>
              <span className={styles.infomationTitle1}>Discuss any issues about any specific land, such as prices, activities, construction, etc anywhere at any time.</span>
            </div>
            <div className={styles.infomationBox}>
              <img src="images/aggrator.svg" alt="" />
              <span className={styles.infomationTitle}>Information aggrator</span>
              <span className={styles.infomationTitle1}>The only place you can find multi-dimensional, in-depth metaverse land information,  customized according to different projects.</span>
            </div>
            <div className={styles.infomationBox}>
              <img src="images/estimator.svg" alt="" />
              <span className={styles.infomationTitle}>Value estimator</span>
              <span className={styles.infomationTitle1}>Build models to provide users with land value estimator, making the most value from your trading.</span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sectionThree}>
        <div className={styles.maxWidthStyle}>
          <span className={styles.title6}>Operation as a service</span>
          <span className={styles.title7}>Connect value, create benefits</span>
          <div className={styles.roleGroup}>
            <div className={styles.commonDivStyle}>
              <div className={styles.roleDiv}>
                <img src="images/people.svg" alt="" />
                <div style={{ width: '20px' }}></div>
                <div className={styles.roleInfo}>
                  <span className={styles.roleTop}>Land development </span>
                  <span className={styles.roleBottom}>Build models to provide users with land value estimator, making the most value from your trading.</span>
                </div>
              </div>
              <div className={styles.roleDiv}>
                <img src="images/dao.svg" alt="" />
                <div style={{ width: '20px' }}></div>
                <div className={styles.roleInfo}>
                  <span className={styles.roleTop}>Land DAO</span>
                  <span className={styles.roleBottom}>Engage more people to participate in land investment and make decision for asset.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sectionFour}>
        <div className={styles.maxWidthStyle}>
          <span className={styles.title7}>Finance as a service</span>
          <span className={styles.title8}>Where you can earn more through LandFi</span>
          <div className={styles.infomation}>
            <div className={styles.infomationBox}>
              <img src="images/trading.svg" alt="" />
              <span className={styles.infomationTitle}>Land Trading</span>
              <span className={styles.infomationTitle1}>A two-way trading system, not only land listing</span>
            </div>
            <div className={styles.infomationBox}>
              <img src="images/leasing.svg" alt="" />
              <span className={styles.infomationTitle}>Land leasing</span>
              <span className={styles.infomationTitle1}>Make the land generate value, the owner obtains rental benefit, and the renter obtains operating benefit.</span>
            </div>
            <div className={styles.infomationBox}>
              <img src="images/mortgage.svg" alt="" />
              <span className={styles.infomationTitle}>Land Mortgage</span>
              <span className={styles.infomationTitle1}>Release the owner's asset liquidity</span>
            </div>
          </div>
          <div className={styles.infomation}>
            <div className={styles.infomationBox}>
              <img src="images/fragmentation.svg" alt="" />
              <span className={styles.infomationTitle}>Land fragmentation</span>
              <span className={styles.infomationTitle1}>make land more liquid.Earn income by providing land building solutions.</span>
            </div>
            <div className={styles.infomationBox}>
              <img src="images/inverstment.svg" alt="" />
              <span className={styles.infomationTitle}>Land investment fund</span>
              <span className={styles.infomationTitle1}>Engage more people to participate in land investment and make land more liquid.</span>
            </div>
            <div className={styles.infomationBox}>
              <img src="images/launchpad.svg" alt="" />
              <span className={styles.infomationTitle}>Launchpad</span>
              <span className={styles.infomationTitle1}>Quickly start and promote the project arms to the accurate uses on platform.</span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sectionFive}>
        <div className={styles.maxWidthStyle}>
          <span className={styles.roadMapTitle}>RoadMap</span>
          <div className={styles.mapBox}>
            <div className={styles.mapLeft}>
              <span className={styles.dateTitle}>2021 Q4</span>
              <span className={styles.dateInfo}>· Marketing research</span>
              <span className={styles.dateInfo}>· Concept design</span>
              <div style={{ height: '116px' }}></div>
              <span className={styles.dateTitle}>2022 Q2</span>
              <span className={styles.dateInfo}>· Complete value estimato</span>
              <span className={styles.dateInfo}>· Optimize trading module</span>
              <span className={styles.dateInfo}>· Optimize information aggregator</span>
              <span className={styles.dateInfo}>· Version 1.0 release</span>
              <span className={styles.dateInfo}>· Private round financing</span>
              <div style={{ height: '93px' }}></div>
              <span className={styles.dateTitle}>2022 Q4</span>
              <span className={styles.dateInfo}>· Launch land fund</span>
              <span className={styles.dateInfo}>· Launch land fragmentation</span>
              <span className={styles.dateInfo}>· Launch land DAO</span>
              <span className={styles.dateInfo}>· Launchpad</span>
              <span className={styles.dateInfo}>· Content development</span>
              <span className={styles.dateInfo}>· Version 2.0 release</span>
            </div>
            <div className={styles.mapCenter}>
            </div>
            <div className={styles.mapRight}>
              <div style={{ height: '102px' }}></div>
              <span className={styles.dateTitle}>2022 Q1</span>
              <span className={styles.dateInfo}>· Complete information aggregator</span>
              <span className={styles.dateInfo}>· Complete trading module</span>
              <span className={styles.dateInfo}>· Integrate Sandbox/Decentraland</span>
              <span className={styles.dateInfo}>· MVP release</span>
              <span className={styles.dateInfo}>· Seed round financing</span>
              <div style={{ height: '66px' }}></div>
              <span className={styles.dateTitle}>2022 Q3</span>
              <span className={styles.dateInfo}>· Launch land fortum</span>
              <span className={styles.dateInfo}>· Launch land leasing</span>
              <span className={styles.dateInfo}>· Launch land mortgage</span>
              <span className={styles.dateInfo}>· Integrate more metaverse projects</span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sectionSix}>
        <div className={styles.maxWidthStyle}>
          <span className={styles.partnerTitle}>Partners</span>
          <div className={styles.partnerList}>
            <img src="images/partner.svg" alt="" />
            <img src="images/partner.svg" alt="" />
            <img src="images/partner.svg" alt="" />
            <img src="images/partner.svg" alt="" />
            <img src="images/partner.svg" alt="" />
            <img src="images/partner.svg" alt="" />
            <img src="images/partner.svg" alt="" />
            <img src="images/partner.svg" alt="" />
            <img src="images/partner.svg" alt="" />
            <img src="images/partner.svg" alt="" />
          </div>
          <div className={styles.footer}>
            <div className={styles.footerLeft}>
              <div className={styles.footLogo}>
                <div>
                  <img src="images/logo.svg" alt="" />
                  <div>
                    <span className={styles.oneland}>ONELAND</span>
                    <span className={styles.youLand}>Active your land</span>
                  </div>
                </div>
                <span>© 2020 Oneland.finance</span>
              </div>
              <div className={styles.footInfo}>
                <div>
                  <span>Marketplace</span>
                  <span>Buy</span>
                  <span>Sell</span>
                  <span>Lease</span>
                  <span>Forum</span>
                </div>
                <div>
                  <span>Landfi</span>
                  <span>mortgage</span>
                  <span>Fragmentate</span>
                  <span>Invest fund</span>
                </div>
                <div>
                  <span>Resources</span>
                  <span>White paper</span>
                  <span>Github</span>
                  <span>FAQ</span>
                </div>
              </div>
            </div>
            <div className={styles.footerRight}>
              <span>Community</span>
              <div>
                <i className={styles.in}></i>
                <i className={styles.twiter}></i>
                <i className={styles.facebook}></i>
                <i className={styles.circle}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandPage

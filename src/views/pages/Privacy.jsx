import React from "react";
import { Container } from "reactstrap";

// core components
import DefaultNavbar from "../../components/Navbars/DefaultNavbar.jsx";
import DefaultFooter from "../../components/Footers/DefaultFooter.jsx";
import Fade from "react-reveal/Fade";

const shapes = [
  { duration: 1500, delay: 100 },
  { duration: 1000, delay: 100 },

  { duration: 500, delay: 200 },
  { duration: 500, delay: 200 },

  { duration: 1000, delay: 200 },
  { duration: 1000, delay: 200 },
  { duration: 1000, delay: 100 },

  { duration: 1000, delay: 100 },
  { duration: 1000, delay: 300 },
];

class Privacy extends React.Component {
  render() {
    return (
      <>
        <DefaultNavbar useOnlyDarkLogo={false} />
        <main ref="main">
          <header className="header alter2-header section" id="home">
            <div className="shapes-container">
              {/* diagonal shapes */}
              {shapes.map((shape, i) => (
                <Fade bottom key={"fade" + i}>
                  <div
                    className="shape shape-animated shape-diagonal"
                    duration={shape.duration}
                    delay={shape.delay}
                  />
                </Fade>
              ))}

              {/* animated shapes */}
              <div className="animation-shape shape-ring animation--clockwise" />
              <div className="animation-shape shape-circle shape-circle-1 animation--anti-clockwise" />
              <div className="animation-shape shape-circle shape-circle-2 animation--clockwise" />
              <div className="animation-shape shape-heart animation--clockwise">
                <div className="animation--rotating" />
              </div>

              <div className="animation-shape shape-triangle animation--rotating-diagonal">
                <div className="animation--rotating" />
              </div>
              <div className="animation-shape shape-diamond animation--anti-clockwise">
                <div className="animation--rotating" />
              </div>

              {/* static shapes */}
              <div className="static-shape shape-ring-1" />
              <div className="static-shape shape-ring-2" />

              <div className="static-shape shape-circle shape-circle-1">
                <Fade top right>
                  <div />
                </Fade>
              </div>

              <div className="static-shape shape-circle shape-circle-2">
                <Fade top right delay={500}>
                  <div />
                </Fade>
              </div>

              <div className="static-shape pattern-dots-1" />
              <div className="static-shape pattern-dots-2" />

              {/*  main shape */}
              <div className="static-shape background-shape-main" />

              {/*  ghost shapes */}
              <div className="static-shape ghost-shape ghost-shape-1" />
            </div>
          </header>

          <section className="section alter3-features" id="product">
            <div className="shapes-container">
              <div className="shape shape-ring shape-ring-1">
                <div className="animation animation--rotating" />
              </div>
              <div className="shape shape-ring shape-ring-2">
                <div className="animation animation--rotating" />
              </div>
              <div className="shape shape-circle animation--clockwise">
                <div />
              </div>
            </div>

            <section className="section stay-tunned">
              <Container className="bring-to-front">
                <div className="shadow rounded p-5 bg-contrast overflow-hidden">
                  <div className="terms-section">
                    <h2 className="heading-line">Privacy Policy</h2>
                    <p className="lead text">
                      {" "}
                      Acceptance of the Privacy Policy
                    </p>

                    <div>
                      <div class="content">
                        This Privacy Policy explains how Vidiren handles
                        personal information obtained through your use of our
                        website (Vidiren.com) and its various subdomains
                        (collectively, the “Site”). With respect to the
                        collection of your information, if you do not want your
                        personal information collected, please do not submit it
                        to us. If you have already submitted information and
                        would like to review, correct, or remove it from our
                        records, please contact us.
                      </div>
                      <div class="lead text mt-3">
                        1) Information we collect
                      </div>
                      <div class="content">
                        <p>
                          We collect different personal information from you
                          depending on how you want to engage with us at
                          Vidiren. We also automatically collect
                          non-identifiable data through the Site (such as IP
                          addresses, browser characteristics, device
                          characteristics, operating system, language
                          preferences, referring URLs, information on actions
                          taken on our website, and dates and times of website
                          visits).
                        </p>
                        <p>
                          <strong>a) Personal Information</strong>
                          <br />
                          When you register for the Vidiren Newsletter we
                          require your name and email address to enable delivery
                          to you.
                        </p>
                        <p>
                          Our Site may include social media features, such as
                          the Facebook, YouTube, Linked-In and Twitter buttons.
                          These features may also collect your IP address, which
                          page you are visiting on our Site, and may set a
                          cookie (see below) to enable the feature to function
                          properly. These features may also give you the option
                          to post information about your activities on our Site
                          to your profile page to share with others within your
                          network. Your interactions with these features are
                          governed by the Privacy Policy of the company
                          providing them.
                        </p>
                        <p>
                          Vidiren may invite you to participate in
                          questionnaires and surveys. If you choose to
                          participate and provide information in response to a
                          questionnaire or survey (collectively, “Survey
                          Responses”), this information will be used to conduct
                          research and analytics.
                        </p>
                        <p>
                          <strong>
                            b) Cookies and Other Data Collection Tools
                          </strong>
                          <br />
                          We also collect non-identifying information about your
                          interaction with our Site so that we can better
                          understand how visitors use our Site and thus how we
                          can improve the Site functionality. For example, we
                          collect certain standard information that your browser
                          sends to every website you visit, such as your IP
                          address, browser type, and language, access times and
                          referring website addresses. We may also use website
                          analytics tools on our site to retrieve information
                          from your browser, including the site you came from,
                          the search engines and keywords you used to find our
                          Site, the pages you view within our Site, the links
                          you click on, and your browser add-ons.
                        </p>
                        <p>
                          Additionally, we may use technologies, such as cookies
                          and web beacons, to collect information about the
                          pages you view, the links you click and other actions
                          you take on our sites and services. Cookies, web
                          beacons and/or similar technologies were originally
                          designed to help a website distinguish a user's
                          browser from a previous visitor and thus save and
                          remember any preferences that may have been set while
                          the user was browsing the site or to track the user's
                          activities. These can be helpful, for example, in
                          recognizing your browser as you move between pages of
                          the Site, login, and improve your experience on the
                          Site when you have logged in.
                        </p>
                        <p>
                          A cookie is a small text file that is placed on your
                          hard disk by a Web page server. Cookies contain
                          information that can later be read by a Web server in
                          the domain that issued the cookie to you. Cookies
                          cannot be used to retrieve any other data from your
                          hard drive, capture your email address, run programs,
                          or deliver viruses to your computer. A web beacon is a
                          small transparent GIF image that is embedded in an
                          HTML page or email used to track when the page or
                          email has been viewed. These assist in delivering
                          cookies on our Site and allow us to count users who
                          have visited those pages. This technology is similar
                          to a cookie in that it tracks your visit and the data
                          can only be read by the server that receives the data.
                          It is different than a cookie in that it is not
                          browser-based, may not function as an identification
                          card, and does not store any data on your computer. We
                          refer to these technologies collectively as "Data
                          Collection Tools."
                        </p>
                        <p>
                          If you wish to disable cookies, you can set your
                          browser not to accept cookies. You can find out how to
                          do so here: www.aboutcookies.org. Please note though
                          that if you turn off cookies, there may be some
                          features and functions of our Site that will not be
                          available to you and some pages may not display
                          properly.
                        </p>
                        <p>
                          <strong>
                            c) Data Collection by Third Parties and Google
                            Analytics
                          </strong>
                          <br />
                          We may integrate Data Collection Tools from third
                          parties in order to help us compile aggregated
                          statistics regarding the effectiveness of our
                          promotional campaigns or other operations of our Site.
                        </p>
                        <p>
                          We use Google Analytics to collect data about and to
                          assess the performance of our Site. Google captures
                          this Site usage data for use as described in "How
                          Google uses data when you use our partners' sites or
                          apps." You can prevent your data from being used by
                          Google Analytics on websites including ours by
                          installing the Google Analytics opt-out browser add-on
                          here. We also employ IP address masking, a technique
                          used to truncate IP addresses collected by Google
                          Analytics and store them in an abbreviated form to
                          prevent them from being traced back to individual
                          users. Portions of our Site may also use Google
                          Analytics for Display Advertisers including
                          DoubleClick or Dynamic Remarketing which provide
                          interest-based ads based on your visit to this or
                          other websites. You can use Ads Settings to manage the
                          Google ads you see and to opt-out of interest-based
                          ads.
                        </p>
                      </div>

                      <div class="lead text">
                        2) How we use your information
                      </div>
                      <div class="content">
                        <p>
                          We use your personal information to provide you with
                          the information you have requested, and to market and
                          improve our Site. We described above in the Personal
                          Information section what sort of identifiable
                          information we collect, the context in which we
                          collect it, and examples of reasons why. As you can
                          expect, we use personal information for our own
                          internal business operations as well as to operate and
                          promote Vidiren. For example, we may use your personal
                          information to:
                        </p>
                        <ul>
                          <li>Send you newsletters you request</li>
                          <li>Provide our technology platform</li>
                        </ul>
                        <p>
                          If you have expressly permitted us to do so, we may
                          also use your personal information to send you
                          marketing information or to contact you for marketing
                          research. At a minimum, we will always give you the
                          opportunity to "opt out" of receiving marketing
                          materials you choose to unsubscribe from.
                        </p>
                        <p>
                          If we would like to use your personal information for
                          any purposes other than those described, or as
                          otherwise permitted under applicable law, we will
                          obtain your prior consent.
                        </p>
                      </div>
                      <div class="lead text">
                        3) Information sharing and disclosure
                      </div>
                      <div class="content">
                        <p>
                          We do not share your personal information unless you
                          have expressly agreed to it.
                        </p>
                        <p>
                          We do not sell your personal information under
                          California law, which defines certain disclosures of
                          personal data for monetary or valuable consideration
                          as “sales.”
                        </p>
                      </div>
                      <div class="lead text">
                        4) Rights and access to your personal data
                      </div>
                      <div class="content">
                        <p>
                          We make good faith efforts to provide you with access
                          to your personal information and either to correct
                          this data if it is inaccurate or to delete such data
                          at your request if it is not otherwise required to be
                          retained by law or for legitimate business purposes.
                        </p>
                        <p>
                          Upon request we will provide you with information
                          about whether we hold, or process on behalf of a third
                          party, any of your personal information. To request
                          this information, please contact us.
                        </p>
                      </div>
                      <div class="lead text">5) Children’s privacy</div>
                      <div class="content">
                        <p>
                          Our website is not intended for children under the age
                          of 16.
                        </p>
                        <p>
                          We do not knowingly collect information from children.
                          In the event that we learn that we have collected
                          personal on the Site from a child under age 16, we
                          will delete that information promptly. If you believe
                          that we might have any information from a child under
                          16, please contact us.
                        </p>
                      </div>
                      <div class="lead text">
                        6) Visiting our Site from outside the United States
                      </div>
                      <div class="content">
                        <p>
                          We store and process all personal information for the
                          Vidiren sites within the US.
                        </p>
                      </div>
                      <div class="lead text">
                        7) Account Information Security
                      </div>
                      <div class="content">
                        <p>
                          Vidiren safeguards the personal information you send
                          us and takes reasonable physical, technical, and
                          organizational measures to prevent unauthorized
                          access, unlawful processing, and unauthorized or
                          accidental loss, destruction, or damage to your
                          personal information. We use industry-standard efforts
                          to safeguard the confidentiality of personally
                          identifiable information, including encryption,
                          firewalls and SSL (Secure Sockets Layer). While we
                          strive to protect your personal information, we need
                          your co-operation to ensure the security of the
                          information you transmit to us. We urge you to take
                          every precaution to protect your personal information
                          while using the Internet. Change your passwords often,
                          and use a passphrase instead of password with at least
                          8 characters in combination of letters and numbers.
                          Make sure you use a secure internet browser, follow
                          the vendor suggestion and apply updates when required.
                        </p>
                      </div>
                      <div class="lead text">8) Forums and Blogs</div>
                      <div class="content">
                        Some of our Site pages may allow our users to publish
                        content via discussion forums, blogs, and other means.
                        Any information that is disclosed in these forums
                        becomes public information that could be read, collected
                        or used by other users to send you unsolicited messages.
                        We are not responsible for the personally identifiable
                        information you choose to submit in these forums. You
                        should exercise caution when deciding to disclose your
                        personal information. Each participant's opinion
                        expressed is his or her own and should not be considered
                        as reflecting the opinion of Vidiren. Note also that
                        your use of these online communication tools is subject
                        to our Terms of Use.
                      </div>
                      <div class="lead text mt-3">
                        9) Changes to this Privacy Policy
                      </div>
                      <div class="content">
                        We review and update our Privacy Policy periodically and
                        will post any changes on this page. If you continue
                        using our Site, you will be agreeing to the revised
                        Privacy Policy, unless required by applicable law
                        otherwise. We recommend that you check our Site from
                        time to time to inform yourself of any changes in this
                        Privacy Policy. If we make significant changes to our
                        Privacy Policy, we may notify you, where appropriate, by
                        other means.
                      </div>
                      <div class="lead text mt-3">
                        10) Contact, Questions or Feedback
                      </div>
                      <div class="content">
                        <p>
                          If you have any questions or comments regarding our
                          privacy policy and practice, please reach us at the
                          following:
                        </p>
                        Vidiren
                        <br />
                        8383 Wilshire Blvd., CA 90211
                        <br />
                        Los Angeles, USA
                        <br />
                        info@vidiren.com
                        <br />
                        <p>
                          When we receive formal written complaints, it is our
                          policy to contact the person regarding his or her
                          concerns. We will cooperate with the appropriate
                          regulatory authorities, including local data
                          protection authorities, to resolve any complaints
                          regarding the transfer of personal data that cannot be
                          resolved between Vidiren and an individual.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </section>
          </section>
        </main>
        <DefaultFooter />
      </>
    );
  }
}

export default Privacy;

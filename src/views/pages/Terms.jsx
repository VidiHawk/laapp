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

class Terms extends React.Component {
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
                    <h2 className="heading-line">Terms of Use</h2>
                    <p className="lead text"> Acceptance of the Terms of Use</p>
                    <div class="content">
                      <p>
                        These terms of use are entered into by and between You
                        and Vidiren (<b>”Company”</b>, <b>“we”</b>, or{" "}
                        <b>“us”</b>). The following terms and conditions (
                        <b>“Terms of Use”</b>), govern your access to and use of
                        Vidiren.com and its and their various subdomains,
                        including any content, functionality, and services
                        offered on or through these sites (the <b>“Website”</b>
                        ), whether as a guest or a registered competitor or
                        volunteer.
                      </p>
                      <p>
                        Please read the Terms of Use carefully before you start
                        to use the Website.{" "}
                        <b>
                          By using the Website and by clicking to accept the
                          Terms of Use, you accept and agree to be bound and
                          abide by these Terms of Use and you are also
                          indicating receipt and acknowledgement of the terms of
                          our Privacy Notice.
                        </b>{" "}
                        If you do not want to agree to these Terms of Use you
                        must not access or use the Website.
                      </p>
                      <p>
                        This Website is offered to and directed primarily toward
                        users who are 18 years of age or older. By using this
                        Website, you represent that you are at least 18 years
                        old and that you are of legal age to form a binding
                        contract with the Company. If you are under legal age of
                        consent, and you wish to register with us as a user or
                        otherwise take part in a competition, then your parent
                        or legal guardian must register for you.
                      </p>
                    </div>

                    <div class="heading">Changes to the Terms of Use</div>
                    <div class="content">
                      <p>
                        We may revise and update these Terms of Use from time to
                        time in our sole discretion. All changes are effective
                        immediately when we post them, and apply to all access
                        to and use of the Website thereafter. However, any
                        changes to the dispute resolution provisions set out in
                        Governing Law and Jurisdiction will not apply to any
                        disputes for which the parties have actual notice [on
                        or] before the date the change is posted on the Website.
                      </p>
                      <p>
                        Your continued use of the Website following the posting
                        of revised Terms of Use means that you accept and agree
                        to the changes. You are expected to check this page
                        [from time to time/frequently/each time you access this
                        Website] so you are aware of any changes, as they are
                        binding on you. Accessing the Website and Account
                        Security
                      </p>
                      <p>
                        We reserve the right to withdraw or amend this Website,
                        and any service or material we provide on the Website,
                        in our sole discretion without notice. We will not be
                        liable if for any reason all or any part of the Website
                        is unavailable at any time or for any period. From time
                        to time, we may restrict access to some parts of the
                        Website, or the entire Website, to users, including
                        registered users.
                      </p>
                      <p>
                        To access the Website or some of the resources it
                        offers, you may be asked to provide certain registration
                        details or other information. It is a condition of your
                        use of the Website that all the information you provide
                        on the Website is correct, current, and complete. You
                        agree that all information you provide to register with
                        this Website or otherwise, including but not limited to
                        through the use of any interactive features on the
                        Website, is governed by the terms of our Privacy Notice.
                      </p>
                      <p>
                        If you choose, or are provided with, a user name,
                        password, or any other piece of information as part of
                        our security procedures, you must treat such information
                        as confidential, and you must not disclose it to any
                        other person or entity. You also acknowledge that your
                        account is personal to you and agree not to provide any
                        other person with access to this Website or portions of
                        it using your user name, password, or other security
                        information. You agree to notify us immediately of any
                        unauthorized access to or use of your user name or
                        password or any other breach of security. You also agree
                        to ensure that you exit from your account at the end of
                        each session. You should use particular caution when
                        accessing your account from a public or shared computer
                        so that others are not able to view or record your
                        password or other personal information.
                      </p>
                      <p>
                        We have the right to disable any user name, password, or
                        other identifier, whether chosen by you or provided by
                        us, at any time in our sole discretion for any or no
                        reason, including if, in our opinion, you have violated
                        any provision of these Terms of Use.
                      </p>
                    </div>

                    <div class="heading">Intellectual Property Rights</div>
                    <div class="content">
                      <p>
                        The Website and its entire contents, features, and
                        functionality (including but not limited to all
                        information, software, text, displays, images, video,
                        and audio, and the design, selection, and arrangement
                        thereof) are owned by theCompany, its licensors, or
                        other providers of such material and are protected by
                        United States and international copyright, trademark and
                        other intellectual property or proprietary rights laws.
                      </p>
                      <p>
                        These Terms of Use permit you to use the Website for
                        your personal, non-commercial use only. You must not
                        reproduce, distribute, modify, create derivative works
                        of, publicly display, publicly perform, republish,
                        download, store, or transmit any of the material on our
                        Website, except as follows:
                      </p>
                      <ul>
                        <li>
                          Your computer may temporarily store copies of such
                          materials in RAM incidental to your accessing and
                          viewing those materials.
                        </li>
                        <li>
                          You may store files that are automatically cached by
                          your Web browser for display enhancement purposes.
                        </li>
                        <li>
                          You may print or download one copy of a reasonable
                          number of pages of the Website for your own personal,
                          non-commercial use and not for further reproduction,
                          publication, or distribution.
                        </li>
                      </ul>
                      <p>You must not:</p>
                      <ul>
                        <li>
                          Modify copies of any materials from this Website.
                        </li>
                        <li>
                          Delete or alter any copyright, trademark, or other
                          proprietary rights notices from copies of materials
                          from this site.
                        </li>
                      </ul>
                      <p>
                        You must not access or use for any commercial purposes
                        any part of the Website or any services or materials
                        available through the Website.
                      </p>
                      <p>
                        If you print, copy, modify, download, or otherwise use
                        or provide any other person with access to any part of
                        the Website in breach of the Terms of Use, your right to
                        use the Website will stop immediately and you must, at
                        our option, return or destroy any copies of the
                        materials you have made. No right, title, or interest in
                        or to the Website or any content on the Website is
                        transferred to you, and all rights not expressly granted
                        are reserved by the Company. Any use of the Website not
                        expressly permitted by these Terms ofUse is a breach of
                        these Terms of Use and may violate copyright, trademark,
                        and other laws.
                      </p>
                    </div>

                    <div class="heading">Trademarks</div>
                    <div class="content">
                      The Company name, the term “Vidiren,” and all related
                      names, logos, product and service names, designs, and
                      slogans are trademarks of the Company. You must not use
                      such marks without the prior written permission of the
                      Company. All other names, logos, product and service
                      names, designs,and slogans on this Website are the
                      trademarks of their respective owners.
                    </div>

                    <div class="heading">Trademarks</div>
                    <div class="content">
                      <p></p>
                    </div>

                    <div class="heading">Prohibited Uses</div>
                    <div class="content">
                      <p>
                        You may use the Website only for lawful purposes and in
                        accordance with these Terms of Use. You agree not to use
                        the Website:
                      </p>
                      <ul>
                        <li>
                          In any way that violates any applicable federal,
                          state, local, or international law or regulation
                          (including, without limitation, any laws regarding the
                          export of data or software to and from the US or other
                          countries).
                        </li>
                        <li>
                          To send, knowingly create, receive, upload, download,
                          use, or re-use any material or content that (i) is
                          demonstrably false and/or misleading; (ii) harassing,
                          (iii) defamatory, (iv) demeans or insults (directly or
                          indirectly) any other person based upon gender, race,
                          ethnicity, sexual orientation or gender identify.{" "}
                        </li>
                        <li>
                          To transmit, or procure the sending of, any
                          advertising or promotional material, including any
                          “junk mail”, “chain letter”, “spam”, or any other
                          similar solicitation.
                        </li>
                        <li>
                          To impersonate or attempt to impersonate the Company,
                          a Company employee, another user, or any other person
                          or entity (including, without limitation, by using
                          email addresses associated with any of the foregoing).
                        </li>
                        <li>
                          To engage in any other conduct that restricts or
                          inhibits anyone’s use or enjoyment of the Website, or
                          which, as determined by us, may harmthe Company or
                          users of the Website or expose them to liability.
                        </li>
                      </ul>
                      <p>Additionally, you agree not to:</p>
                      <ul>
                        <li>
                          Use the Website in any manner that could disable,
                          overburden, damage, or impair the site or interfere
                          with any other party’s use of the Website, including
                          their ability to engage in real time activities
                          through the Website.
                        </li>
                        <li>
                          Use any robot, spider, or other automatic device,
                          process, or means to access the Website for any
                          purpose, including monitoring or copying any of the
                          material on the Website.
                        </li>
                        <li>
                          Use any manual process to monitor or copy any of the
                          material on the Website or for any other unauthorized
                          purpose without our prior written consent.
                        </li>
                        <li>
                          Use any device, software, or routine that interferes
                          with the proper working of the Website.
                        </li>
                        <li>
                          Introduce any viruses, Trojan horses, worms, logic
                          bombs, or other material that is malicious or
                          technologically harmful.
                        </li>
                        <li>
                          Attempt to gain unauthorized access to, interfere
                          with, damage, or disrupt any parts of the Website, the
                          server on which the Website is stored, or any server,
                          computer, or database connected to the Website.
                        </li>
                        <li>
                          Attack or assist any other person to attack the
                          Website via a denial-of-service attack or a
                          distributed denial-of-service attack.
                        </li>
                        <li>
                          Otherwise attempt to interfere with the proper working
                          of the Website.
                        </li>
                      </ul>
                    </div>

                    <div class="heading">User Contributions</div>
                    <div class="content">
                      <p>
                        The Website may contain content from users or from third
                        parties and/or from, including on any message boards,
                        chat rooms, personal web pages or profiles, forums,
                        bulletin boards, and other interactive features
                        (collectively, “Interactive Services”) that allow users
                        to post, submit, publish, display, or transmit to other
                        users or other persons (hereinafter, “post”) content or
                        materials (collectively, “User Contributions”) on or
                        through the Website.
                      </p>
                      <p>
                        All User Contributions must comply with these Terms of
                        Use.
                      </p>
                      <p>
                        Unless otherwise stated here or in any applicable policy
                        or notice, all User Contribution(s) you post and/or
                        transmit on or through the Website will be considered
                        non-confidential and non-proprietary. By providing any
                        User Contribution on the Website, you grant us and our
                        affiliates and service providers, and each of their and
                        our respective licensees, successors, and assigns the
                        right to use, reproduce, modify, perform, display,
                        distribute, and otherwise disclose to third parties any
                        such material for any purpose/according to your account
                        settings. For purposes of this Section on User
                        Contributions, any information you send directly to us
                        through the Website, such as the data you provide when
                        you register, and your application to participate in a
                        competition, is not a “User Contribution.
                      </p>
                      <p>You represent and warrant that:</p>
                      <ul>
                        <li>
                          You own or control all rights in and to your User
                          Contributions and havethe right to grant the license
                          granted above to us and our affiliates andservice
                          providers, and each of their and our respective
                          licensees, successors, and assigns.
                        </li>
                        <li>
                          All of your User Contributions do and will comply with
                          these Terms of Use. You understand and acknowledge
                          that you are responsible for anyUser Contributions you
                          submit or contribute, and you, not the Company, have
                          full responsibility for such content, including its
                          legality, reliability, accuracy, and appropriateness.
                        </li>
                      </ul>
                      <p>
                        We are not responsible or liable to any third party for
                        the content or accuracy of any User Contributions posted
                        by you or any other user of the Website.
                      </p>
                    </div>

                    <div class="heading">
                      Monitoring and Enforcement; Termination
                    </div>
                    <div class="content">
                      <p>We have the right to:</p>
                      <ul>
                        <li>
                          Remove or refuse to post any User Contributions for
                          any or no reason in our sole discretion.
                        </li>
                        <li>
                          Take any action with respect to any User Contribution
                          that we deem necessary or appropriate in our sole
                          discretion, including if we believe that such User
                          Contribution violates the Terms of Use, infringes any
                          intellectual property right or other right of any
                          person or entity, threatens the personal safety of
                          users of the Website or the public, or could create
                          liability for the Company.
                        </li>
                        <li>
                          Disclose your identity or other information about you
                          to any third party who claims that material posted by
                          you violates their rights, including their
                          intellectual property rights or their right to
                          privacy.
                        </li>
                        <li>
                          Take appropriate legal action, including without
                          limitation, referral to law enforcement, for any
                          illegal or unauthorized use of the Website.
                        </li>
                        <li>
                          Terminate or suspend your access to all or part of the
                          Website for any or no reason, including without
                          limitation, any violation of these Terms of Use
                        </li>
                      </ul>
                      <p>
                        Without limiting the foregoing, we have the right to
                        cooperate fully with any law enforcement authorities or
                        court order requesting or directing us to disclose the
                        identity or other information of anyone posting any
                        materials on or through the Website. YOU WAIVE AND HOLD
                        HARMLESS THE COMPANY AND ITS AFFILIATES, LICENSEES, AND
                        SERVICE PROVIDERS FROM ANY CLAIMS RESULTING FROM ANY
                        ACTION TAKEN BY THE COMPANY DURING, ORTAKEN AS A
                        CONSEQUENCE OF, INVESTIGATIONS BY EITHER THE COMPANY OR
                        LAW ENFORCEMENT AUTHORITIES. However, we do not
                        undertake to review material before it is posted on or
                        transmitted through the Website, and cannot ensure
                        prompt removal of objectionable material after it has
                        been posted. Accordingly, we assume no liability for any
                        action or inaction regarding transmissions,
                        communications, or content provided by any user or third
                        party. We have no liability or responsibility to anyone
                        for performance or nonperformance of the activities
                        described in this section.
                      </p>
                    </div>

                    <div class="heading">Content Standards</div>
                    <div class="content">
                      <p>
                        These content standards apply to any and all User
                        Contributions and use of Interactive Services. User
                        Contributions must in their entirety comply with all
                        applicable federal, state, local, and international laws
                        and regulations. Without limiting the foregoing, User
                        Contributions must not:
                      </p>
                      <ul>
                        <li>
                          Contain any material that is defamatory, obscene,
                          indecent, abusive, offensive, harassing, violent,
                          hateful, inflammatory, or otherwise objectionable.
                        </li>
                        <li>
                          Promote sexually explicit or pornographic material,
                          violence, or discrimination based on race, sex,
                          religion, nationality, disability, sexual orientation,
                          or age.
                        </li>
                        <li>
                          Infringe any patent, trademark, trade secret,
                          copyright, or other intellectual property or other
                          rights of any other person.
                        </li>
                        <li>
                          Violate the legal rights (including the rights of
                          publicity and privacy) of others or contain any
                          material that could give rise to any civil or criminal
                          liability under applicable laws or regulations or that
                          otherwise may be in conflict with these Terms of Use
                          and our Privacy Policy
                          https://www.vidiren.com/privacy.
                        </li>
                        <li>Be likely to deceive any person.</li>
                        <li>
                          Promote any illegal activity, or advocate, promote, or
                          assist any unlawful act.
                        </li>
                        <li>
                          Cause annoyance, inconvenience, or needless anxiety or
                          be likely to upset, embarrass, alarm, or annoy any
                          other person.
                        </li>
                        <li>
                          Impersonate any person, or misrepresent your identity
                          or affiliation with any person or organization.
                        </li>
                        <li>
                          Involve commercial activities or sales, such as
                          contests, sweepstakes, and other sales promotions,
                          barter, or advertising.
                        </li>
                        <li>
                          Give the impression that they emanate from or are
                          endorsed by us or any other person or entity, if this
                          is not the case.
                        </li>
                      </ul>
                    </div>

                    <div class="heading">Copyright Infringement</div>
                    <div class="content">
                      <p>Reporting Claims of Copyright Infringement</p>
                      <p>
                        We take claims of copyright infringement seriously. We
                        will respond to notices of alleged copyright
                        infringement that comply with applicable law. If you
                        believe any materials accessible on or from this site
                        (the “Website”) infringe your copyright, you may request
                        removal of those materials (or access to them) from the
                        Website by submitting written notification to our
                        copyright agent designated below. In accordance with the
                        Online Copyright Infringement Liability Limitation Act
                        of the Digital Millennium Copyright Act (17 U.S.C. §
                        512) (”DMCA”), the written notice (the “DMCA Notice”)
                        must include substantially the following:
                      </p>
                      <ul>
                        <li>Your physical or electronic signature.</li>
                        <li>
                          Identification of the copyrighted work you believe to
                          have been infringed or, if the claim involves multiple
                          works on the Website, a representative list of such
                          works.
                        </li>
                        <li>
                          Identification of the material you believe to be
                          infringing in a sufficiently precise manner to allow
                          us to locate that material.
                        </li>
                        <li>
                          Adequate information by which we can contact you
                          (including your name, postal address, telephone
                          number, and, if available, email address).
                        </li>
                        <li>
                          A statement that you have a good faith belief that use
                          of the copyrighted material is not authorized by the
                          copyright owner, its agent, or the law.
                        </li>
                        <li>
                          A statement that the information in the written notice
                          is accurate.
                        </li>
                        <li>
                          A statement, under penalty of perjury, that you are
                          authorized to act on behalf of the copyright owner.
                        </li>
                      </ul>
                      <p>
                        If you fail to comply with all of the requirements of
                        Section 512(c)(3) of the DMCA, your DMCA Notice may not
                        be effective.
                      </p>
                      <p>
                        Please be aware that if you knowingly materially
                        misrepresent that material or activity on the Website is
                        infringing your copyright, you may be held liable for
                        damages (including costs and attorneys’ fees) under
                        Section 512(f) of theDMCA
                      </p>
                    </div>

                    <div class="heading">Reliance on Information Posted</div>
                    <div class="content">
                      <p>
                        The information presented on or through the Website is
                        made available solely for general information purposes.
                        We do not warrant the accuracy, completeness, or
                        usefulness of this information. Any reliance you place
                        on such information is strictly at your own risk. We
                        disclaim all liability and responsibility arising from
                        any reliance placed on such materials by you or any
                        other visitor to the Website, or by anyone who may be
                        informed of any of its contents.
                      </p>
                      <p>
                        This Website may include content provided by third
                        parties, including materials provided by other users,
                        bloggers, and third-party licensors, syndicators,
                        aggregators, and/or reporting services. All statements
                        and/or opinions expressed in these materials, and all
                        articles and responses to questions and other content,
                        other than the content provided by the Company, are
                        solely the opinions and the responsibility of the person
                        or entity providing those materials. These materials do
                        not necessarily reflect the opinion of the Company. We
                        are not responsible, or liable to you or any third
                        party, for the content or accuracy of any materials
                        provided by any third parties.
                      </p>
                    </div>

                    <div class="heading">Changes to the Website</div>
                    <div class="content">
                      <p>
                        We may update the content on this Website from time to
                        time, but its content is not necessarily complete or
                        up-to-date. Any of the material on the Website may be
                        out of date at any given time, and we are under no
                        obligation to update such material.
                      </p>
                    </div>

                    <div class="heading">
                      Information About You and Your Visits to the Website
                    </div>
                    <div class="content">
                      <p>
                        All information we collect on this Website is subject to
                        the practices set out in our Privacy Notice
                      </p>
                    </div>

                    <div class="heading">
                      Linking to the Website and Social Media Features
                    </div>
                    <div class="content">
                      <p>
                        You may link to our homepage, provided you do so in a
                        way that is fair and legal and does not damage our
                        reputation or take advantage of it, but you must not
                        establish a link in such a way as to suggest any form of
                        association,approval, or endorsement on our part without
                        our express consent. This Website may, either currently
                        or in the future, provide certain social media features
                        that enable you to:
                      </p>
                      <ul>
                        <li>
                          Link from your own or certain third-party websites to
                          certain content on this Website.
                        </li>
                        <li>
                          Send emails or other communications with certain
                          content, or links to certain content, on this Website.
                        </li>
                        <li>
                          Cause limited portions of content on this Website to
                          be displayed or appear to be displayed on your own or
                          certain third-party websites.
                        </li>
                      </ul>
                      <p>
                        If these features are available, you may use them solely
                        as they are provided by us, and solely with respect to
                        the content they are displayed with. Subject to the
                        foregoing, you must not:
                      </p>
                      <ul>
                        <li>
                          Establish a link from any website that is not owned by
                          you.
                        </li>
                        <li>
                          Cause the Website or portions of it to be displayed
                          on, or appear to be displayed by, any other site, for
                          example, framing, deep linking, or in-line linking.
                        </li>
                        <li>
                          Link to any part of the Website other than the
                          homepage.
                        </li>
                        <li>
                          Otherwise take any action with respect to the
                          materials on this Website that is inconsistent with
                          any other provision of these Terms of Use.
                        </li>
                      </ul>
                      <p>
                        You agree to cooperate with us in causing any
                        unauthorized framing or linking immediately to stop. We
                        reserve the right to withdraw linking permission without
                        notice.
                      </p>
                      <p>
                        We may disable all or any social media features and any
                        links at any time without notice in our discretion
                      </p>
                    </div>

                    <div class="heading">Links from the Website</div>
                    <div class="content">
                      <p>
                        If the Website contains links to other sites and
                        resources provided by third parties, these links are
                        provided for your convenience only. This includes links
                        contained in advertisements, including banner
                        advertisements and sponsored links. We have no control
                        over the contents of those sites or resources, and
                        accept no responsibility for them or for any loss or
                        damage that may arise from your use of them. If you
                        decide to access any of the third-party websites linked
                        to this Website, you do so entirely at your own risk and
                        subject to the terms and conditions of use for such
                        websites.
                      </p>
                    </div>

                    <div class="heading">Disclaimer of Warranties</div>
                    <div class="content">
                      <p>
                        You understand that we cannot and do not guarantee or
                        warrant that files available for downloading from the
                        internet or the Website will be free of viruses or other
                        destructive code. You are responsible for implementing
                        sufficient procedures and checkpoints to satisfy your
                        particular requirementsfor anti-virus protection and
                        accuracy of data input and output, and for maintaining a
                        means external to our site for any reconstruction of any
                        lost data. TO THE FULLEST EXTENT PROVIDED BY LAW, WE
                        WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A
                        DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES, OR OTHER
                        TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR
                        COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA, OR OTHER
                        PROPRIETARY MATERIAL DUE TO YOUR USE OF THE WEBSITE OR
                        ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE OR TO
                        YOUR DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY
                        WEBSITE LINKED TO IT. YOUR USE OF THE WEBSITE, ITS
                        CONTENT, AND ANY SERVICESOR ITEMS OBTAINED THROUGH THE
                        WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS CONTENT,
                        AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE
                        ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS,
                        WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                        IMPLIED. NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED
                        WITH THE COMPANY MAKES ANY WARRANTY OR REPRESENTATION
                        WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY,
                        QUALITY, ACCURACY, OR AVAILABILITY OF THE WEBSITE.
                        WITHOUT LIMITING THE FOREGOING, NEITHER THE COMPANY NOR
                        ANYONE ASSOCIATED WITH THE COMPANY REPRESENTS OR
                        WARRANTS THAT THE WEBSITE, ITS CONTENT, OR ANY SERVICES
                        OR ITEMS OBTAINED THROUGH THE WEBSITE WILL BE ACCURATE,
                        RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS
                        WILL BE CORRECTED, THAT OUR SITE OR THE SERVER THAT
                        MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL
                        COMPONENTS, OR THAT THE WEBSITE OR ANY SERVICES OR ITEMS
                        OBTAINED THROUGH THE WEBSITE WILL OTHERWISE MEET YOUR
                        NEEDS OR EXPECTATIONS. TO THE FULLEST EXTENT PROVIDED BY
                        LAW, THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY
                        KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY,
                        OROTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES
                        OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR
                        PARTICULAR PURPOSE. THE FOREGOING DOES NOT AFFECT ANY
                        WARRANTIES THAT CANNOT BE EXCLUDED OR LIMITED UNDER
                        APPLICABLE LAW.
                      </p>
                    </div>

                    <div class="heading">Limitation on Liability</div>
                    <div class="content">
                      <p>
                        TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL
                        THE COMPANY, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE
                        PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE
                        LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY,
                        ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR
                        INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO
                        IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES,
                        INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL,
                        CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT
                        LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING,
                        EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS,
                        LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE,
                        LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY
                        TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR
                        OTHERWISE,EVEN IF FORESEEABLE.
                      </p>
                      <p>
                        THE FOREGOING DOES NOT AFFECT ANY LIABILITY THAT CANNOT
                        BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
                      </p>
                    </div>

                    <div class="heading">Indemnification</div>
                    <div class="content">
                      <p>
                        You agree to defend, indemnify, and hold harmless the
                        Company, its affiliates, licensors, and service
                        providers, and its and their respective officers,
                        directors, employees, contractors, agents, licensors,
                        suppliers, successors, and assigns from and against any
                        claims, liabilities, damages, judgments, awards, losses,
                        costs, expenses, or fees (including reasonable
                        attorneys’ fees) arising out of or relating to your
                        violation of these Terms of Use or your use of the
                        Website, including, but not limited to, your User
                        Contributions, any use of the Website’s content,
                        services, and products other than as expressly
                        authorized in these Terms of Use or your use of any
                        information obtained from the Website.
                      </p>
                    </div>

                    <div class="heading">Governing Law and Jurisdiction</div>
                    <div class="content">
                      <p>
                        All matters relating to the Website and these Terms of
                        Use and any dispute or claim arising therefrom or
                        related thereto (in each case, including non-contractual
                        disputes or claims), shall be governed by and construed
                        in accordance with the internal laws of California.
                      </p>
                      <p>
                        Any legal suit, action, or proceeding arising out of, or
                        related to, these Terms of Use or the Website shall be
                        instituted exclusively in the federal courts of the
                        United States although we retain the right to bring any
                        suit, action, or proceeding against you for breach of
                        these Terms of Use in your country of residence or any
                        other relevant country. You waive any and all objections
                        to the exercise of jurisdiction over you by such courts
                        and to venue in such courts.
                      </p>
                    </div>

                    <div class="heading">Waiver and Severability</div>
                    <div class="content">
                      <p>
                        No waiver by the Company of any term or condition set
                        out in these Terms ofUse shall be deemed a further or
                        continuing waiver of such term or condition or a waiver
                        of any other term or condition, and any failure of the
                        Company to assert a right or provision under these Terms
                        of Use shall not constitute a waiver of such right or
                        provision.
                      </p>
                      <p>
                        If any provision of these Terms of Use is held by a
                        court or other tribunal of competent jurisdiction to be
                        invalid, illegal, or unenforceable for any reason, such
                        provision shall be eliminated or limited to the minimum
                        extent such that the remaining provisions of the Terms
                        of Use will continue in full force and effect.
                      </p>
                    </div>

                    <div class="heading">Entire Agreement</div>
                    <div class="content">
                      <p>
                        The Terms of Use and related policies referred to herein
                        constitute the sole and entire agreement between you and
                        Vidiren regarding the Website and supersede all prior
                        and contemporaneous understandings, agreements,
                        representations, and warranties, both written and oral,
                        regarding the Website. Your Comments and Concerns
                      </p>
                      <p>This website is operated by:</p>
                      <p>
                        Vidiren
                        <br />
                        8383 Wilshire Blvd., CA 90211
                        <br />
                        Los Angeles, USA
                      </p>
                      <p>
                        All other feedback, comments, requests for technical
                        support, and other communications relating to the
                        Website should be directed to: info@vidiren.com.
                      </p>
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

export default Terms;

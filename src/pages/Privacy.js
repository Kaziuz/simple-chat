import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Privacy() {
  return (
    <div>
      <Header></Header>
      <section>
        <div className="jumbotron jumbotron-fluid py-5">
          <div className="container text-left py-5">
            <h1 className="text-center display-2">Privacy Policy</h1>
            <p>
              Parallelo built the Chat app as
              an Open Source app. This SERVICE is provided by
              parallelo at no cost and is intended for use as
              is.
            </p>
            <p>
              This page is used to inform visitors regarding our
              policies with the collection, use, and disclosure of Personal
              Information if anyone decided to use our Service.
            </p>
            <p>
              If you choose to use our Service, then you agree to
              the collection and use of information in relation to this
              policy. The Personal Information that we collect is
              used for providing and improving the Service. we will not use or share your information with
              anyone except as described in this Privacy Policy.
            </p>
            <p>
              The terms used in this Privacy Policy have the same meanings
              as in our Terms and Conditions, which is accessible at
              Chat unless otherwise defined in this Privacy Policy.
            </p>
            <h1 className="text-left display-6">
              <small>Information Collection and Use</small>
            </h1>
            <p>
              For a better experience, while using our Service, we
              may require you to provide us with certain personally
              identifiable information, including but not limited to johnny, sepulveda. The information that
              we request will be retained by us and used as described in this privacy policy.
            </p>
            <p>
              The app does use third party services that may collect
              information used to identify you.
            </p>
            <p>
              Link to privacy policy of third party service providers used
              by the app
            </p>
            <ul className="list-group list-group-flush my-4">
              <li className="list-group-item">
                <Link
                  to="https://www.google.com/policies/privacy/"
                  target="_blank" rel="noopener noreferrer"
                >
                  Google Play Services
                </Link>
              </li>
              <li className="list-group-item">
                <Link
                  to="https://firebase.google.com/policies/analytics"
                  target="_blank"
                  rel="noopener noreferrer"
                >Google Analytics for Firebase
                </Link>
              </li>
              <li className="list-group-item">
                <Link
                  to="https://firebase.google.com/support/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firebase Crashlytics
                </Link>
              </li>
              <li className="list-group-item">
                <Link
                  to="https://www.facebook.com/about/privacy/update/printable"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                  </Link>
              </li>
            </ul>
            <h1 className="text-left display-6"><small>Log Data</small></h1>
            <p>
              we want to inform you that whenever you
              use our Service, in a case of an error in the app
              we collect data and information (through third party
              products) on your phone called Log Data. This Log Data may
              include information such as your device Internet Protocol
              (“IP”) address, device name, operating system version, the
              configuration of the app when utilizing our Service,
              the time and date of your use of the Service, and other
              statistics.
            </p>
            <h1 className="text-left display-6"><small>Cookies</small></h1>
            <p>
              Cookies are files with a small amount of data that are
              commonly used as anonymous unique identifiers. These are sent
              to your browser from the websites that you visit and are
              stored on your device's internal memory.
            </p>
            <p>
              This Service does not use these “cookies” explicitly. However,
              the app may use third party code and libraries that use
              “cookies” to collect information and improve their services.
              You have the option to either accept or refuse these cookies
              and know when a cookie is being sent to your device. If you
              choose to refuse our cookies, you may not be able to use some
              portions of this Service.
            </p>
            <h1 className="text-left display-6"><small>Service Providers</small></h1>
            <p>
              we may employ third-party companies and
              individuals due to the following reasons:
            </p>
            <div>
              <ul className="list-group list-group-flush my-4">
                <li className="list-group-item">To facilitate our Service</li>
                <li className="list-group-item">To provide the Service on our behalf</li>
                <li className="list-group-item">To perform Service-related services or</li>
                <li className="list-group-item">To assist us in analyzing how our Service is used</li>
              </ul>
            </div>
            <p>
              we want to inform users of this Service
              that these third parties have access to your Personal
              Information. The reason is to perform the tasks assigned to
              them on our behalf. However, they are obligated not to
              disclose or use the information for any other purpose.
                </p>
            <h1 className="text-left display-6"><small>Security</small></h1>
            <p>
              we value your trust in providing us your
              Personal Information, thus we are striving to use commercially
              acceptable means of protecting it. But remember that no method
              of transmission over the internet, or method of electronic
              storage is 100% secure and reliable, and we cannot
              guarantee its absolute security.
            </p>
            <h1 className="text-left display-6"><small>Links to Other Sites</small></h1>
            <p>
              This Service may contain links to other sites. If you click on
              a third-party link, you will be directed to that site. Note
              that these external sites are not operated by us.
              Therefore, we strongly advise you to review the
              Privacy Policy of these websites. we have
              no control over and assume no responsibility for the content,
              privacy policies, or practices of any third-party sites or
              services.
            </p>
            <h1 className="text-left display-6"><small>Children’s Privacy</small></h1>
            <p>
              These Services do not address anyone under the age of 13.
              we do not knowingly collect personally
              identifiable information from children under 13. In the case
              we discover that a child under 13 has provided
              us with personal information, we immediately
              delete this from our servers. If you are a parent or guardian
              and you are aware that your child has provided us with
              personal information, please contact us so that
              we will be able to do necessary actions.
            </p>
            <h1 className="text-left display-6"><small>Changes to This Privacy Policy</small></h1>
            <p>
              we may update our Privacy Policy from
              time to time. Thus, you are advised to review this page
              periodically for any changes. we will
              notify you of any changes by posting the new Privacy Policy on
              this page.
            </p>
            <p><mark>This policy is effective as of 2020-05-17</mark></p>
            <h1 className="text-left display-6"><small>Contact Us</small></h1>
            <p>
              If you have any questions or suggestions about our
              Privacy Policy, do not hesitate to contact us at johnnysepulveda988@gmail.com.
            </p>
            <p>
              This privacy policy page was created at <Link
                to="https://privacypolicytemplate.net"
                target="_blank"
                rel="noopener noreferrer"
              >privacypolicytemplate.net</Link> and modified/generated by <Link
                to="https://app-privacy-policy-generator.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >App Privacy Policy Generator</Link>
            </p>
          <h1 className="text-center display-2">terms & conditions</h1>
          <p>
            <strong>Terms & ConditionsBy</strong> downloading or using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. You’re not allowed to copy, or modify the app, any part of the app, or our trademarks in any way. You’re not allowed to attempt to extract the source code of the app, and you also shouldn’t try to translate the app into other languages, or make derivative versions. The app itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to parallelo.
            parallelo is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you’re paying for.
            The Chat app stores and processes personal data that you have provided to us, in order to provide our Service. It’s your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the Chat app won’t work properly or at all.
            The app does use third party services that declare their own Terms and Conditions.
            Link to Terms and Conditions of third party service providers used by the app
          </p>
          <div>
            <ul className="list-group list-group-flush my-4">
              <li className="list-group-item">Google Play Services</li>
              <li className="list-group-item">Google Analytics for Firebase</li>
              <li className="list-group-item">Firebase Crashlytics</li>
              <li className="list-group-item">Facebook</li>
            </ul>
          </div>
          <p>
            You should be aware that there are certain things that parallelo will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi, or provided by your mobile network provider, but parallelo cannot take responsibility for the app not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data allowance left.
            If you’re using the app outside of an area with Wi-Fi, you should remember that your terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third party charges. In using the app, you’re accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you’re using the app, please be aware that we assume that you have received permission from the bill payer for using the app.
            Along the same lines, parallelo cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the Service, parallelo cannot accept responsibility.
            With respect to parallelo’s responsibility for your use of the app, when you’re using the app, it’s important to bear in mind that although we endeavour to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. parallelo accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.
            At some point, we may wish to update the app. The app is currently available on – the requirements for system(and for any additional systems we decide to extend the availability of the app to) may change, and you’ll need to download the updates if you want to keep using the app. parallelo does not promise that it will always update the app so that it is relevant to you and/or works with the version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device.
            Changes to This Terms and Conditions
            </p>
          <p>
            we may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. we will notify you of any changes by posting the new Terms and Conditions on this page.
            These terms and conditions are effective as of 2020-05-17
          </p>
          <h1 className="text-left display-6"><small>Contact Us</small></h1>
          <p>
            If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at johnnysepulveda988@gmail.com.
            This Terms and Conditions page was generated by App Privacy Policy Generator
          </p>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Privacy
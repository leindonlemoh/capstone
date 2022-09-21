import React from 'react';
import { Accordion } from '../../components';
import './FAQ.scss';

const FAQ = ( ) => {
  return (
    <div className='faq'>

        <section className='faq'>
        <header className='faq flex'>Frequently Asked Questions</header>

        <div className='accordion__container'><Accordion /></div>
        </section>

        <section className='privacy'>

          <header className='privacy flex'>Privacy Policy</header>

          <div className='flex' style={{flexDirection: 'column', width: '100%', gap: '1.5rem', fontSize: '1.2rem'}}>
            <span>We respect your privacy</span>
            <ul className='faq__list'>
              <li>Making Dough respects your right to privacy and is committed to safeguarding the privacy of our customers and website visitors. We adhere to the Australian Privacy Principles contained in the Privacy Act 1988 (Cth). This policy sets out how we collect and treat your personal information.</li>
              <li>"Personal information" is information we hold which is identifiable as being about you.</li>
            </ul>

            <span>Collection of personal information</span>
            <ul className='faq__list'>

              <li>Making Dough will, from time to time, receive and store personal information you enter onto our website, provided to us directly or given to us in other forms.</li>
              <li>You may provide basic information such as your name, phone number, address and email address to enable us to send information, provide updates and process your product or service order. We may collect additional information at other times, including but not limited to, when you provide feedback, when you provide information about your personal or business affairs, change your content or email preferences, respond to surveys and/or promotions, provide financial or credit card information, or communicate with our customer support.</li>
              <li>Additionally, we may also collect any other information you provide while interacting with us.</li>
            </ul>

            <span>How we collect your personal information</span>
            <ul className='faq__list'>
              <li>Making Dough collects personal information from you in a variety of ways, including when you interact with us electronically or in person, when you access our website and when we provide our services to you. We may receive personal information from third parties. If we do, we will protect it as set out in this Privacy Policy.</li>
            </ul>

            <span>Disclosure of your personal information</span>
            <ul className='faq__list'>
         
              <li>We may disclose your personal information to any of our employees, officers, insurers, professional advisers, agents, suppliers or subcontractors insofar as reasonably necessary for the purposes set out in this Policy. Personal information is only supplied to a third party when it is required for the delivery of our services.</li>
              <li>We may disclose your personal information to any of our employees, officers, insurers, professional advisers, agents, suppliers or subcontractors insofar as reasonably necessary for the purposes set out in this Policy. Personal information is only supplied to a third party when it is required for the delivery of our services.</li>
              <li>We may also use your personal information to protect the copyright, trademarks, legal rights, property or safety of Making Dough, its customers or third parties.</li>
              <li>Information that we collect may from time to time be stored, processed in or transferred between parties located in countries outside of Australia. These may include, but are not limited to United States.</li>
              <li>If there is a change of control in our business or a sale or transfer of business assets, we reserve the right to transfer to the extent permissible at law our user databases, together with any personal information and non-personal information contained in those databases. This information may be disclosed to a potential purchaser under an agreement to maintain confidentiality. We would seek to only disclose information in good faith and where required by any of the above circumstances.</li>
              <li>By providing us with personal information, you consent to the terms of this PrivacyPolicy and the types of disclosure covered by this Policy. Where we disclose your personal information to third parties, we will request that the third party follow this Policy regarding handling your personal information.</li>
            </ul>

            <span>Changes To Privacy Policy</span>
            <ul className='faq__list'>
        
              <li>Please be aware that we may change this Privacy Policy in the future. We may modify this Policy at any time, in our sole discretion and all modifications will be effective immediately upon our posting of the modifications on our website or notice board. Please check back from time to time to review our Privacy Policy.</li>
            </ul>
          </div>
        </section>

    </div>
  )
}

export default FAQ
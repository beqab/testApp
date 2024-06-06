import './privacy-policy.scss';

const PrivacyPolicy = () => {
  return (
    <main className='privacy'>
      <div className='privacy__menu'>
        <span>Privacy policy</span>
      </div>

      <section className='privacy__content'>
        <div className='privacy__intro'>
          <h1 className='privacy__title'>Privacy policy</h1>
          <p className='privacy__description'>
            Customer Solutions LTD (“we”, “us” or “our”) respects your privacy
            and is committed to protecting the personal information that you
            share with us. This Privacy Policy outlines how we collect, use,
            disclose, and protect the information you provide us through our
            website and software services.
          </p>
        </div>
        <div className='privacy__list-container'>
          <ol className='privacy__list'>
            <li className='privacy__item privacy__item-1'>
              <span className='privacy__item-title'>
                Information Collection and Use.
              </span>
              <div className='privacy__item-content'>
                We collect personal information, such as your name, address,
                email address, and telephone number, when you voluntarily
                provide it to us through our website or software services. We
                use this information to provide you with the services you have
                requested and to communicate with you about our products and
                services.
              </div>
            </li>
            <li className='privacy__item privacy__item-2'>
              <span className='privacy__item-title'>
                Disclosure of Information.
              </span>
              <div className='privacy__item-content'>
                We do not sell, trade, or rent your personal information to
                third parties. We may disclose your information to third-party
                service providers to assist us in providing you with the
                services you have requested. These third-party service providers
                are bound by confidentiality agreements and are only allowed to
                use your information for the purpose of providing services to
                us.
              </div>
            </li>
            <li className='privacy__item privacy__item-3'>
              <span className='privacy__item-title'>
                Protection of Information.
              </span>
              <div className='privacy__item-content'>
                We take reasonable steps to protect your personal information
                from unauthorized access, use, or disclosure. We have
                implemented physical, electronic, and administrative safeguards
                to secure your information. However, no method of transmission
                over the internet or method of electronic storage is 100%
                secure, so we cannot guarantee its absolute security.
              </div>
            </li>
            <li className='privacy__item privacy__item-4'>
              <span className='privacy__item-title'>
                Access to Information.
              </span>
              <div className='privacy__item-content'>
                You have the right to access and correct any personal
                information that we have collected about you. To request access
                or correction, please contact us at the email address provided
                below.
              </div>
            </li>
            <li className='privacy__item privacy__item-5'>
              <span className='privacy__item-title'>
                Changes to this Privacy Policy.
              </span>
              <div className='privacy__item-content'>
                We may revise this Privacy Policy from time to time to reflect
                changes in the law or our personal information practices. The
                most current version of the Privacy Policy will govern our use
                of your information and will always be available on our website.
              </div>
            </li>
            <li className='privacy__item privacy__item-6'>
              <span className='privacy__item-title'>Contact Information.</span>
              <div className='privacy__item-content'>
                If you have any questions or concerns about our Privacy Policy
                or the information we have collected about you, please contact
                us at info@prodaway.org.
              </div>
            </li>
          </ol>
          <p className='privacy__data-note'>
            This Privacy Policy is effective as of 31.10.2022.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;

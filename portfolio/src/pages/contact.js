import React from "react";
import { Page } from '../components/Page'
import { Seo } from '../components/Seo'
import { Animation } from '../components/Animation'
import { Section } from '../components/Section'
import { ContactSection } from '../sections/Contact'
import { ContactForm } from '../components/ContactForm'



export default function ContactPage() {
  return (
    <>
      <Seo title="Contact Me" useTitleTemplate={true} noIndex={true} />
      <Page>
        <Animation type="fadeUp">
              <Section heading="Contact Me">

                <ContactForm />
                
              </Section>
              <ContactSection />
          </Animation>
      </Page>
    </>
  );
}

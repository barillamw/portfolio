import React from "react";

import { Page } from '../components/Page'
import { Seo } from '../components/Seo'

import { LegalSection } from '../sections/Legal'

export default function PrivacyPage() {
  return (
    <>
      <Seo title="Privacy Policy" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="privacy" heading="Privacy Policy" />
      </Page>
    </>
  );
}

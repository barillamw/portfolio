import React from "react";

import { Page } from '../components/Page'
import { Seo } from '../components/Seo'

import { LegalSection } from '../sections/Legal'


export default function ImprintPage() {
  return (
    <>
      <Seo title="Imprint" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="imprint" heading="Imprint" />
      </Page>
    </>
  );
}

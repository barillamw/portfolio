import React from "react";

import { AboutSection } from '../sections/About'
import { ArticlesSection } from '../sections/Articles'
import { ContactSection } from '../sections/Contact'
import { HeroSection } from '../sections/Hero'
import {InterestsSection } from '../sections/Interests'
import { ProjectsSection } from '../sections/Projects'
import { Page } from '../components/Page'
import { Seo } from '../components/Seo'

export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />

        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="skills" heading="My Toolbox" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['medium']} />
        <ContactSection sectionId="github" heading="Contact Me" />
      </Page>
    </>
  );
}

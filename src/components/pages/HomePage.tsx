import React from "react";
import { HeroSection } from "../home/HeroSection";
import { TrustManifesto } from "../home/TrustManifesto";
import { FeaturedCurations } from "../home/FeaturedCurations";
import { ImpactStats } from "../home/ImpactStats";
import { CommunityVoices } from "../home/CommunityVoices";

export const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <TrustManifesto />
      <FeaturedCurations />
      <ImpactStats />
      <CommunityVoices />
    </main>
  );
};

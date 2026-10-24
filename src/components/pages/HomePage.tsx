import React from 'react';
import { HeroSection } from '../home/HeroSection';
import { TrustManifesto } from '../home/TrustManifesto';
import { FeaturedCurations } from '../home/FeaturedCurations';
import { ArtisanSpotlight } from '../home/ArtisanSpotlight';
import { ImpactStats } from '../home/ImpactStats';
import { CommunityVoices } from '../home/CommunityVoices';
import { CreatorInvitation } from '../home/CreatorInvitation';

export const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <TrustManifesto />
      <FeaturedCurations />
      <ArtisanSpotlight />
      <ImpactStats />
      <CommunityVoices />
      <CreatorInvitation />
    </main>
  );
};


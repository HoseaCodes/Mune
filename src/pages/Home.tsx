import React from 'react';
import Layout from '../components/home/Layout';
import Hero from '../components/home/Hero';
import FeatureLearn from '../components/home/FeatureLearn';
import FeaturePay from '../components/home/FeaturePay';
import SavingSection from '../components/home/SavingSection';
import UsersSection from '../components/home/UsersSection';
import UnlockSection from '../components/home/UnlockSection';
import AccessSection from '../components/home/AccessSection';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <Layout modalOpen={isModalOpen}>
      <Hero />
      <FeaturePay isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <FeatureLearn isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <SavingSection isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <UsersSection />
      <UnlockSection isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <AccessSection isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </Layout>
  );
};

export default Home;

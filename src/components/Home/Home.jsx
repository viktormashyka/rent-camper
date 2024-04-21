import { XStack, YStack, Text, Heading, Subheading } from 'style/common.styled';
import { ServiceCard } from 'components/ServiceCard/ServiceCard';

const Home = () => {
  return (
    <YStack style={{ gap: 16, justifyContent: 'center', alignItems: 'center' }}>
      <YStack style={{ gap: 32, padding: '24px 0' }}>
        <Heading style={{ textAlign: 'center' }}>
          Welcome to Camper Rental Services
        </Heading>
        <Subheading style={{ textAlign: 'center' }}>
          Explore our range of services for your next adventure!
        </Subheading>

        <XStack style={{ gap: 32 }}>
          <ServiceCard
            title="Camper Rentals"
            description="Rent our top-quality campers for your next road trip."
            serviceType="rental"
          />
          <ServiceCard
            title="Campsite Delivery"
            description="Have your camper delivered directly to your chosen campsite."
            serviceType="delivery"
          />
        </XStack>

        <XStack style={{ gap: 32 }}>
          <ServiceCard
            title="24/7 Support"
            description="Our customer support team is available around the clock to assist you."
            serviceType="support"
          />
          <ServiceCard
            title="Customization Options"
            description="Personalize your camper rental with optional features and accessories."
            serviceType="options"
          />
        </XStack>
      </YStack>
    </YStack>
  );
};

export default Home;

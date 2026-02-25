import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import AchievementCard from './AchievementCard';

export const CarouselOfCertificates = ({
  certificates,
}: {
  certificates: { title: string; date: string; description: string; imageUrl?: string }[];
}) => {
  return (
    <Carousel>
      <CarouselContent>
        {certificates.map((achievement, index) => (
          <CarouselItem key={index} className="basis-[85%] pl-4 sm:basis-1/2 md:basis-1/3">
            <AchievementCard
              title={achievement.title}
              date={achievement.date}
              description={achievement.description}
              imageUrl={achievement.imageUrl}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

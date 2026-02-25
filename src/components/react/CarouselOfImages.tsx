import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

export const CarouselOfImages = ({ images }: { images: { imageUrl: string; alt: string }[] }) => {
  return (
    <Carousel>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="basis-[85%] pl-4 sm:basis-auto">
            <img
              src={image.imageUrl}
              alt={image.alt}
              className="h-[295px] w-auto rounded-xl object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

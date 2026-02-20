
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'

export const CarouselOfImages = ({ images }: { images: { imageUrl: string, alt: string }[] }) => {
  return (
    <Carousel>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className='basis-[85%] sm:basis-auto pl-4'>

            <img
              src={image.imageUrl}
              alt={image.alt}
              className="h-[295px] w-auto object-cover rounded-xl"
            />

          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  )
}

import Link from "next/link";

const mockURLs = [
  "https://utfs.io/f/c0b85663-2e9f-4f3a-bbaa-bf89081d5344-ja4b6j.jpg",
  "https://utfs.io/f/33c65d9d-39ba-4212-9496-4f4640138ffa-ja4b6k.jpg",
  "https://utfs.io/f/8455df63-777c-4cfc-bc31-c46ed7ec0195-hhcy55.jpg",
  "https://utfs.io/f/d92b6e39-e7eb-4b85-96a2-b45ed007ce9c-jelt2e.jpg",
  "https://utfs.io/f/2a0f00e7-c1e5-4199-a836-5e01032f1fc0-7b1ezs.jpg",
  "https://utfs.io/f/f81271e1-102d-45e2-b680-807049297791-2zs7o5.jpg",
];

const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url
}));

import Image from "next/image";

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
              <Image src={image.url} alt="image" width={100} height={100}/>
          </div>
        ))}
      </div>
      Hello (gallery) in progress
    </main>
  );
}

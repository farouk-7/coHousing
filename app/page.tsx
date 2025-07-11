import Image from "next/image";
import hero from "../public/hero.png";
import CustomBtn from "@/components/CustomBtn";
import { MdSupervisorAccount } from "react-icons/md";
import { BsCalculator, BsSearch } from "react-icons/bs";
import user1 from "../public/user1.png";
import user2 from "../public/user2.png";
import user3 from "../public/user3.png";
import trustee1 from "../public/trustee1.png";
import trustee2 from "../public/trustee2.png";
import trustee3 from "../public/trustee3.png";
import trustee4 from "../public/trustee4.png";

const userData = [
  {
    id: 1,
    name: "John Doe",
    image: user1,
    testimonial:
      "This platform has transformed my co-living experience. The rent splitting calculator is a game-changer!",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: user2,
    testimonial:
      "The rent-splitting calculator is a game-changer. No more awkward conversations about bills.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    image: user3,
    testimonial:
      "I love the user profiles. It helped me find roommates who share my interests and lifestyle.",
  },
  {
    id: 4,
    name: "Bob Brown",
    image: user1,
    testimonial:
      "The search filters made it easy to find a place that fits my budget and preferences.",
  },
];
const trusteeData = [
  {
    id: 1,
    image: trustee1,
  },
  {
    id: 2,
    image: trustee2,
  },
  {
    id: 3,
    image: trustee3,
  },
  {
    id: 4,
    image: trustee4,
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="flex  justify-center relative">
        <div>
          <div className="inset-0 opacity-100">
            <Image
              src={hero}
              alt="Hero Image"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-[20px] md:text-[50px] font-bold text-white">
              Find your perfect co-living space
            </p>
            <p className="py-3 md:py-5 max-w-[600px] font-bold text-white text-center px-auto">
              Discover shared housing options and split rent fairly with
              roommates. Join a community of like-minded individuals.
            </p>
            <div>
              <CustomBtn text="Get Started" bg="bg-blue-700" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mt-10">
          <p className="text-2xl text-center md:text-start md:text-3xl font-bold py-2">Key Features</p>
          <p className="text-[20px] text-center md:text-start">
            Explore the features that make co-living easy and enjoyable.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-5 gap-[20px]">
          <div className="border-1 border-gray-300 bg-amber-100 p-2 rounded-lg  ">
            <MdSupervisorAccount size={25} />
            <p className="font-bold text-[18px] py-2">User Profile</p>
            <p className="text-[#637587] font-semibold">
              Create detailed profiles to showcase your lifestyle and
              preferences.
            </p>
          </div>
          <div className="border-1 border-gray-300 bg-amber-100 p-2 rounded-lg  ">
            <BsSearch size={25} />
            <p className="font-bold text-[18px] py-2">Search Filters</p>
            <p className="text-[#637587] font-semibold">
              Find housing that matches your criteria with advanced search
              filters.
            </p>
          </div>
          <div className="border-1 border-gray-300 bg-amber-100 p-2 rounded-lg  ">
            <BsCalculator size={25} />
            <p className="font-bold text-[18px] py-2">
              Rent Spliting Calculator
            </p>
            <p className="text-[#637587] font-semibold">
              Calculate and split rent fairly with roommates using our built-in
              tool
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mt-10">
          <p className="text-3xl text-center md:text-start font-bold py-2">Testimonials</p>
          <p className="text-[20px] text-center md:text-start">
            Few of our users have some things to say about us.
          </p>
        </div>
        <div className="mt-5">
          <div className="flex flex-col justify-center items-center md:flex-row md:justify-between  gap-5">
            {userData?.map((user) => (
              <div key={user.id} className="mb-4 ">
                <Image
                  src={user.image}
                  alt={user.name}
                  className="w-fit h-[300px] mb-2"
                />
                <p className="font-bold text-[18px] text-center">{user.name}</p>
                <p className="text-[#637587] max-w-[300px] text-sm font-semibold text-center">
                  {user.testimonial}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mt-10">
          <p className="text-3xl text-center md:text-start font-bold py-2">Trusted By</p>
        </div>
        <div className="mt-5">
          <div className="flex flex-wrap md:flex-row justify-center items-center gap-5">
            {trusteeData?.map((trustee) => (
              <div key={trustee.id} className="mb-4 ">
                <Image src={trustee.image} alt={""} className="w-fit   mb-2" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-[30px] text-center font-bold align-center">
          Ready to find your co-living space
        </p>
        <p className="text-center">Join co-living today and start your journey to shared living</p>
        <div className="mt-5">
          <CustomBtn text="Get Started" bg="bg-blue-700" />
        </div>
      </div>
    </div>
  );
}

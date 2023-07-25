import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero2 from "~/components/hero/hero2";
// import MeetFelu from "~/components/home/MeetFelu";

export default component$(() => {
  return (
    <div class="w-full bg-[#010715]">
      <Hero2 />
      {/* <MeetFelu />
      <div class="container mx-auto text-center pt-10 bg-[#030014] pb-10">
        <p class="mb-5 border-2 text-[#ede6fde8] border-[#b6b1f854] rounded-xl inline-block pt-1 pb-1 pl-4 pr-4">
          All your ideas, enlightened
        </p>
        <h2 class="font-anton text-[#CDCCD8] text-5xl font-medium leading-[1.05] mb-2 uppercase">
          Give your stories some elasticity
        </h2>
        <div class ="flex flex-col justify-center items-center w-full"> 
          <p class="text-[#ede6fde8] text-lg mb-8">
            Elegant and crafted. Give your stories the contemporary platform
            they deserve. All free and easy to share your readers
            best experience.
          </p>
          <div class="flex gap-6">
          <img
            class="w-96"
            src="/assets/images/dummy_image.png"
            alt="test_iamge"
          />
           <img
            class="w-96"
            src="/assets/images/dummy_image.png"
            alt="test_iamge"
          />
          </div>
        </div>
      </div> */}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Felu.io",
  meta: [
    {
      name: "description",
      content: "Give you stories some spenaz",
    },
  ],
};

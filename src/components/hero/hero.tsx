import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="w-full h-screen bg-[url(/assets/images/landing_image_v3.jpg)] bg-cover bg-top">
      <div class="flex w-full justify-center">
        <h1 class="md:text-9xl text-8xl font-anton font-bold text-[#EDE9B9] uppercase xl:pt-[13%] md:pt-[16%] pt-[32%] text-center">
          Join Our Journey
        </h1>
      </div>
    </div>
  );
});

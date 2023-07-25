import { component$ } from "@builder.io/qwik";

import waveStyle from "./hero2.module.css";

export default component$(() => {
  return (
    <div class="">
      <lottie-player
        src="/assets/images/felu_wave.json"
        background="transparent"
        speed="1"
        class="h-screen absolute rotate-90 left-80 z-10"
        loop
        autoplay
      ></lottie-player>
      <div class="w-full flex h-screen bg-[#010715]">
        <div class="w-full flex flex-col align-middle justify-center pt-16">
          <h1 class="text-8xl font-anton font-bold text-[#EDE9B9] uppercase text-center mb-3 z-20 tracking-[0.15rem]">
            Join Our Journey
          </h1>
          <p class="text-xl text-white text-center mb-5">
            Meet Felu. Your new go to story time for the modern day storyteller
          </p>
          <div class="w-full flex justify-center items-center gap-3">
            <a href="/demo">
              <button
                type="button"
                class="text-white font-medium rounded-lg text-base px-6 py-3 text-center mr-2 mb-2 bg-purple-500"
              >
                Explore the demo
              </button>
            </a>

            <button
              type="button"
              class="text-white font-medium rounded-lg text-base px-6 py-3 text-center mr-2 mb-2 bg-slate-800"
            >
              Learn more
            </button>
          </div>
        </div>
        <div
          class={[
            "w-full bg-[url(/assets/images/dummy-landing.png)] bg-cover bg-no-repeat [background-position-x:-300px]",
            waveStyle.animate_area,
          ]}
        ></div>
      </div>
    </div>
  );
});

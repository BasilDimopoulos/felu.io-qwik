import { component$ } from "@builder.io/qwik";

import waveStyle from "./hero2.module.css";

export default component$(() => {
  return (
    <div class="">
      <lottie-player
        src="/assets/images/felu_wave.json"
        background="transparent"
        speed="1"
        class="h-screen absolute rotate-90 lg:left-80 left-52 z-10"
        loop
        autoplay
      ></lottie-player>
      <div class="w-full flex h-screen bg-[#010715] relative">
        <div class="w-full flex flex-col align-middle justify-center pt-16 pl-16 xl:pl-0 z-20">
          <h1 class="xl:text-8xl text-6xl text-left xl:text-center font-anton font-bold text-[#EDE9B9] uppercase mb-3 z-20 tracking-[0.15rem]">
            Join Our Journey
          </h1>
          <p class="xl:text-xl text-lg text-white text-left xl:text-center mb-5">
            Meet Felu. Your new go to story time for the modern day storyteller
          </p>
          <div class="w-full flex xl:justify-center gap-3">
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

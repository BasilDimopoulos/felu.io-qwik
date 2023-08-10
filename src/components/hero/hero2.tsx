import { component$ } from "@builder.io/qwik";

import waveStyle from "./hero2.module.css";

export default component$(() => {
  return (
    <div class="">
      <lottie-player
        src="/assets/images/felu_wave.json"
        background="transparent"
        speed="1"
        class="absolute h-screen lg:rotate-90 rotate-180 2xl:left-80 lg:left-40 left-0 z-10 sm:top-16 top-24 lg:top-0"
        loop
        autoplay
      ></lottie-player>
      <div class="w-full lg:flex lg:h-screen bg-[#010715] relative">
        <div class="w-full flex flex-col align-middle justify-center pt-32 lg:pt-16 sm:pl-16 pl-8 2xl:pl-0 pb-28 xs:pb-36 lg:pb-0 z-20">
          <h1 class="2xl:text-8xl text-6xl text-left 2xl:text-center font-anton font-bold text-[#EDE9B9] uppercase mb-3 z-20 tracking-[0.15rem]">
            Join Our Journey
          </h1>
          <p class="2xl:text-xl text-lg text-white text-left 2xl:text-center mb-5 z-20 pr-8">
            Meet Felu. Your new go to story time for the modern day storyteller
          </p>
          <div class="w-full flex 2xl:justify-center gap-3 z-20">
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
            "w-full h-[50vh] lg:h-full bg-[url(/assets/images/dummy-landing.png)] bg-cover bg-no-repeat 2xl:[background-position-x:-300px] lg:[background-position-x:-500px] md:[background-position-x:-30px] sm:[background-position-x:-0px] [background-position-x:-200px] ",
            waveStyle.animate_area,
          ]}
        ></div>
      </div>
    </div>
  );
});

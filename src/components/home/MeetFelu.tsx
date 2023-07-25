import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="h-screen z-30 container mx-auto flex flex-col justify-center pt-32">
      <div class="flex justify-center items-center  gap-32">
        <div class="">
          <h2 class="text-white uppercase text-7xl font-anton pb-2 max-w-2xl">
            Felu is a bit different from anything you have seen before
          </h2>
          <p class="text-slate-300 text-xl pb-5">
            Meet Felu, your new go to story time for the learned developer
          </p>
          <button
            type="button"
            class="text-white font-medium rounded-lg text-base px-6 py-3 text-center mr-2 mb-2 bg-purple-500"
          >
            Explore the demo
          </button>
        </div>
        <div>
          <img src="/assets/images/felu_blocks.svg"></img>
        </div>
      </div>
    </div>
  );
});

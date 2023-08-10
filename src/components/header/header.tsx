/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="bg-transparent absolute md:top-6 top-6 w-full">
      <div class = "md:pl-12 pl-6 md:pt-5">
        <a href="/">
          <img alt="logo" src="/assets/images/felu-moon.png" class="h-16 z-50 relative"></img>
        </a>
      </div>
      {/* <div class="flex justify-center">
        <div class="sm:block hidden">
          <div class="flex space-x-16 justify-center items-center">
            <a href="/">
              <p class="text-white">Home</p>
            </a>
            <a href="/about">
              <p class="text-white">About</p>
            </a>
            <a href="/">
              <img
                alt="logo"
                src="/assets/images/felu-moon.png"
                class="h-16"
              ></img>
            </a>
            <a href="/stories">
              <p class="text-white">Stories</p>
            </a>
            <a href={"/journal"}>
              <p class="text-white">Journal</p>
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
});

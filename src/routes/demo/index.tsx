import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import demo from "./demo.json";

export default component$(() => {
  const paragraphs = [];
  const p1: String[] = demo.page1.split("<br>");
  const p2: String[] = demo.page2.split("<br>");
  const p3: String[] = demo.page3.split("<br>");
  const p4: String[] = demo.page4.split("<br>");
  paragraphs.push(p1, p2, p3, p4);
  const activePage = useSignal(0);

  return (
    <div class="w-full h-screen pl-44 pr-44 pt-12 pb-20 bg-[#010715] flex flex-col justify-center">
      <div class="flex flex-col items-center pt-10">
        <div class="w-3/6 bg-gray-200 h-2 dark:bg-gray-700 rounded-full">
          <div
            style={{ width: `${((activePage.value + 2) / 4) * 100}%` }}
            class={`bg-[#598894] h-2 rounded-full`}
          ></div>
        </div>
      </div>

      <div class="flex justify-center gap-x-8 pt-24 h-full">
        <div class="w-full pr-16">
          <h4 class="font-anton mb-3 text-2xl text-white">{demo.chapter}</h4>
          <h3 class="font-anton uppercase text-5xl text-white">{demo.title}</h3>
          {paragraphs[activePage.value].map((paragraph: any, pKey) => (
            <p class="mt-5 text-xl text-[#e5e6eb]" key={pKey}>
              {paragraph}
            </p>
          ))}
        </div>
        <div class="w-full h-full pr-16">
          {paragraphs[activePage.value + 1].map((paragraph: any, pKey) => (
            <p class="text-xl mt-5 text-[#e5e6eb]" key={pKey}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div class="flex items-center justify-center relative">
        <div class="absolute">
          <button
            type="button"
            onClick$={() =>{activePage.value > 0 ? activePage.value -= 1 : console.log("Hello!")}}
            class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            type="button"
            class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
            onClick$={() =>{activePage.value < 2 ? activePage.value ++ : console.log(activePage.value)}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "felu.io Demo",
  meta: [
    {
      name: "description",
      content: "The demo for felu.io",
    },
  ],
};

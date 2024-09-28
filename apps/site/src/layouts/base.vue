<template>
  <div class="flex flex-col h-screen">
    <nav class="p-2 mt-0 w-full z-10 fixed top-0">
      <div class="container mx-auto flex flex-wrap items-center">
        <div class="flex w-full md:w-1/2 justify-center md:justify-start font-extrabold">
          <a class="no-underline hover:text-white" href="#">
            <span class="text-2xl">ReConta</span>
          </a>
        </div>
        <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
          <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li class="mr-3">
              <a class="inline-block py-2 px-4 text-white no-underline" href="#">Início</a>
            </li>
            <li class="mr-3">
              <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                href="#">link</a>
            </li>
            <li class="mr-3">
              <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                href="#">link</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="container mx-auto mt-24 md:mt-16 h-full">
      <slot />
    </main>
    
    <footer class="container mx-auto mt-auto">
      <div class="flex flex-wrap items-center justify-center p-2">
        &copy; 2024 ReConta
      </div>
    </footer>
  </div>
</template>
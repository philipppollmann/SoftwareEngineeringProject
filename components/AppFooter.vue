<template>

  <footer class="bg-blue-950 rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full  mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="/" class="flex items-center mb-4 sm:mb-0">
          <img src="" class="h-8 mr-3" alt="Philipp Pollmann" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Philipp Pollmann</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <NuxtLink to="/" class="mr-4 hover:underline md:mr-6 ">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="mr-4 hover:underline md:mr-6 ">Privacy Policy</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="mr-4 hover:underline md:mr-6 ">Impressum</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="mr-4 hover:underline md:mr-6 ">Contact</NuxtLink>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"><SocialMediaButtons></SocialMediaButtons></span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>
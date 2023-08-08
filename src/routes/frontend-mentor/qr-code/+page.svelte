<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<script>
  import qrcode from '$lib/assets/frontend-mentor/image-qr-code.png';
</script>


<section class="qr-code grid items-center grow py-20 bg-[color:var(--light-gray)] font-['Outfit']">
  <div class="container">
    <div class="bg-white rounded-2xl w-fit flex flex-col mx-auto max-w-xs shadow-md">
      <div class="px-4 pt-4">
        <img src="{qrcode}" alt="" class="rounded-lg mx-auto">
      </div>
      
      <div class="mt-6 px-6 pb-10">
        <h2 class="font-bold text-center text-2xl text-[color:var(--dark-blue)] mb-4">
          Improve your front-end skills by building projects
        </h2>
        
        <p class="text-center text-[15px] text-[color:var(--grayish-blue)]">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  </div>
</section>

<style>
.qr-code {
  --white: hsl(0, 0%, 100%);
  --light-gray: hsl(212, 45%, 89%);
  --grayish-blue: hsl(220, 15%, 55%);
  --dark-blue: hsl(218, 44%, 22%);
}
</style>
onload = () => {
    document.body.classList.remove("container");
  };

  const wrapper = document.querySelector(".wrapper");
    setTimeout(() => {
        document.querySelector('.text').classList.add('open');
          }, 1000);
          
  document.addEventListener("DOMContentLoaded", function() {
    const audio = document.querySelector("audio");
    if (audio) {
      audio.volume = 0.2; // Ajusta el volumen (0.0 a 1.0)
    }
  });

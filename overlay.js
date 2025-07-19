on('load', () => {
  
  $('.over-18').on('click', () => {
    document.cookie = 'unrestricted=true;'; 
    $('.overlay').style.opacity = 0;
    setTimeout(() => {
      $('.overlay').remove();
    }, 200)
  });
  
  $('.under-18').on('click', () => {
    window.location.href = 'https://google.com/search?q=cats&udm=2';
  });
  
  if (document.cookie.indexOf('unrestricted=true') >= 0) $('.overlay').remove();
  
});
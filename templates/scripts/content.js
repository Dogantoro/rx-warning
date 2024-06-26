// nav bar code in string form
const nav = `
<nav class="navbar navbar-expand-lg pt-1" data-bs-theme="dark">
  <div class="container-fluid ">
  
  <a class="navbar-brand" aria-current="page" href="/">
	<p class="nav-title fs-3 mb-0">Rx Warning</p>
  </a>
  
  <button class="navbar-toggler mt-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	<span class="navbar-toggler-icon"></span>
  </button>
  
  <div class="collapse navbar-collapse " id="navbarNav">
	<ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
	  <li class="nav-item">
		<a class="nav-link nav-item fs-4" href="/random">Randomize</a>
	  </li>
	</ul>
	
	<span class="navbar-text nav-item pill-bottle">
	  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="36" viewBox="0 0 30 36" fill="none">
		<g filter="url(#filter0_f_21_113)">
		  <path d="M10.3125 14.25C10.0639 14.25 9.8254 14.3488 9.64959 14.5246C9.47377 14.7004 9.375 14.9389 9.375 15.1875V22.6875C9.375 22.9361 9.47377 23.1746 9.64959 23.3504C9.8254 23.5262 10.0639 23.625 10.3125 23.625C10.5611 23.625 10.7996 23.5262 10.9754 23.3504C11.1512 23.1746 11.25 22.9361 11.25 22.6875V19.875H11.7994L15.5494 23.625L13.3987 25.7738C13.2227 25.9498 13.1238 26.1885 13.1238 26.4375C13.1238 26.6865 13.2227 26.9252 13.3987 27.1013C13.5748 27.2773 13.8135 27.3762 14.0625 27.3762C14.3115 27.3762 14.5502 27.2773 14.7263 27.1013L16.875 24.9506L19.0237 27.1013C19.1998 27.2773 19.4385 27.3762 19.6875 27.3762C19.9365 27.3762 20.1752 27.2773 20.3513 27.1013C20.5273 26.9252 20.6262 26.6865 20.6262 26.4375C20.6262 26.1885 20.5273 25.9498 20.3513 25.7738L18.2006 23.625L20.3513 21.4763C20.5273 21.3002 20.6262 21.0615 20.6262 20.8125C20.6262 20.5635 20.5273 20.3248 20.3513 20.1488C20.1752 19.9727 19.9365 19.8738 19.6875 19.8738C19.4385 19.8738 19.1998 19.9727 19.0237 20.1488L16.875 22.2994L14.4281 19.8506C15.1355 19.7569 15.7808 19.3978 16.2333 18.8461C16.6858 18.2944 16.9117 17.5913 16.8652 16.8793C16.8187 16.1673 16.5033 15.4995 15.9829 15.0113C15.4625 14.5231 14.776 14.251 14.0625 14.25H10.3125ZM11.25 16.125H14.0625C14.3111 16.125 14.5496 16.2238 14.7254 16.3996C14.9012 16.5754 15 16.8139 15 17.0625C15 17.3111 14.9012 17.5496 14.7254 17.7254C14.5496 17.9012 14.3111 18 14.0625 18H11.25V16.125Z" fill="white"/>
		  <path d="M3.75 4.875C3.75 4.37772 3.94754 3.90081 4.29917 3.54917C4.65081 3.19754 5.12772 3 5.625 3H24.375C24.8723 3 25.3492 3.19754 25.7008 3.54917C26.0525 3.90081 26.25 4.37772 26.25 4.875V8.625C26.25 9.12228 26.0525 9.59919 25.7008 9.95083C25.3492 10.3025 24.8723 10.5 24.375 10.5V30.1875C24.375 30.9334 24.0787 31.6488 23.5512 32.1762C23.0238 32.7037 22.3084 33 21.5625 33H8.4375C7.69158 33 6.97621 32.7037 6.44876 32.1762C5.92132 31.6488 5.625 30.9334 5.625 30.1875V10.5C5.12772 10.5 4.65081 10.3025 4.29917 9.95083C3.94754 9.59919 3.75 9.12228 3.75 8.625V4.875ZM7.5 10.5V30.1875C7.5 30.4361 7.59877 30.6746 7.77459 30.8504C7.9504 31.0262 8.18886 31.125 8.4375 31.125H21.5625C21.8111 31.125 22.0496 31.0262 22.2254 30.8504C22.4012 30.6746 22.5 30.4361 22.5 30.1875V10.5H7.5ZM5.625 8.625H24.375V4.875H5.625V8.625Z" fill="white"/>
		</g>
		<defs>
		  <filter id="filter0_f_21_113" x="-3" y="0" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
			<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_21_113"/>
		  </filter>
		</defs>
	  </svg>
	</span>
  </div>
  
  </div>
</nav>    
`;

function insertNav() {  // inserts nav bar code into html file when inserted via script tag
	document.body.insertAdjacentHTML("afterbegin", nav);
}

insertNav();  // calls function

if(document.cookie == "dataStruct=matrix") {
	document.body.style.backgroundColor = "#0d6efd";
}
else {
	document.body.style.backgroundColor = "#f00";
}

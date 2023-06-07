$(function(){
	let $body = $('body');
	
	$body.on('click', '.btn', function(){
	  $($(this).attr('data-target')).modal('show');
	});
	
	$body.on('click', '[data-dismiss="modal"]', function(){
	  let $closestModal = $(this).closest('.modal');
	  $('#' + $closestModal.attr('id')).modal('hide');
	});
  });

  let counter = 0;

  function addContentOnScroll() {
	counter++;
  
	if (counter > 30) {
	  window.removeEventListener('scroll', scrollListener);
	  return;
	}
  
	const featurettes = [
	  {
		heading: 'Oh yeah, it’s that good.',
		paragraph: 'Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.',
		imageSrc: 'img/nature-3.jpg'
	  },
	  {
		heading: 'And lastly, this one.',
		paragraph: 'And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.',
		imageSrc: 'img/nature-4.jpg'
	  }
	];
  
	const container = document.createElement('div');
	container.className = 'container';
	container.setAttribute('loading', 'lazy');
  
	featurettes.forEach(featurette => {
	  const featuretteHTML = `
		<hr class="featurette-divider mt-5 mb-5">
		<div class="row featurette">
		  <div class="col-md-6">
			<h2 class="featurette-heading">${featurette.heading}</h2>
			<p>${featurette.paragraph}</p>
		  </div>
		  <div class="col-md-6">
			<img class="featurette-image img-fluid" src="${featurette.imageSrc}" alt="500x500">
		  </div>
		</div>
	  `;
	  container.innerHTML += featuretteHTML;
	});
  
	document.body.appendChild(container);
  }
  
  window.addEventListener('scroll', function() {
	if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
	  addContentOnScroll();
	}
  });
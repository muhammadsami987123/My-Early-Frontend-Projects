document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const mainImage = document.getElementById('mainImage');
    const imageTitle = document.getElementById('imageTitle');
    const imageDescription = document.getElementById('imageDescription');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Current state
    let currentIndex = 0;
    let isTransitioning = false;

    // Function to update the main image and info with animation
    function updateMainImage(index) {
        // Prevent rapid clicking during transition
        if (isTransitioning) return;
        
        // Validate index
        if (index < 0 || index >= thumbnails.length) return;
        
        // Set transitioning flag
        isTransitioning = true;
        
        // Update current index
        currentIndex = index;
        
        // Fade out main image
        mainImage.style.opacity = '0';
        mainImage.style.transition = 'opacity 0.3s ease';
        
        setTimeout(() => {
            // Update thumbnails active state
            thumbnails.forEach((thumb, i) => {
                if (i === currentIndex) {
                    thumb.classList.add('active');
                    thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                } else {
                    thumb.classList.remove('active');
                }
            });
            
            // Get the selected thumbnail
            const selectedThumb = thumbnails[currentIndex];
            
            // Update main image
            mainImage.src = selectedThumb.src;
            mainImage.alt = selectedThumb.alt;
            
            // Update image info with fade effect
            imageTitle.style.opacity = '0';
            imageDescription.style.opacity = '0';
            
            setTimeout(() => {
                // Update text content
                imageTitle.textContent = selectedThumb.dataset.title || '';
                imageDescription.textContent = selectedThumb.dataset.description || '';
                
                // Fade in text
                imageTitle.style.opacity = '1';
                imageDescription.style.opacity = '1';
                imageTitle.style.transition = 'opacity 0.3s ease';
                imageDescription.style.transition = 'opacity 0.3s ease';
                
                // Fade in image
                mainImage.style.opacity = '1';
                
                // Reset transitioning flag after animation completes
                setTimeout(() => {
                    isTransitioning = false;
                }, 300);
            }, 200);
        }, 300);
        
        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === thumbnails.length - 1;
        
        // Apply visual indication for disabled buttons
        if (prevBtn.disabled) {
            prevBtn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            prevBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
        
        if (nextBtn.disabled) {
            nextBtn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            nextBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }

    // Add click event listeners to thumbnails
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            if (index !== currentIndex) {
                updateMainImage(index);
            }
        });
    });

    // Add click event listeners to navigation buttons
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0 && !isTransitioning) {
            updateMainImage(currentIndex - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < thumbnails.length - 1 && !isTransitioning) {
            updateMainImage(currentIndex + 1);
        }
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentIndex > 0 && !isTransitioning) {
            updateMainImage(currentIndex - 1);
            e.preventDefault(); // Prevent scrolling
        } else if (e.key === 'ArrowRight' && currentIndex < thumbnails.length - 1 && !isTransitioning) {
            updateMainImage(currentIndex + 1);
            e.preventDefault(); // Prevent scrolling
        }
    });

    // Add touch swipe support for mobile devices
    let touchStartX = 0;
    let touchEndX = 0;

    mainImage.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    mainImage.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (isTransitioning) return;
        
        const swipeThreshold = 50;
        const swipeLength = touchEndX - touchStartX;

        if (Math.abs(swipeLength) > swipeThreshold) {
            if (swipeLength > 0 && currentIndex > 0) {
                // Swipe right - show previous image
                updateMainImage(currentIndex - 1);
            } else if (swipeLength < 0 && currentIndex < thumbnails.length - 1) {
                // Swipe left - show next image
                updateMainImage(currentIndex + 1);
            }
        }
    }

    // Lightbox functionality
    mainImage.addEventListener('click', () => {
        // Create lightbox elements
        const lightbox = document.createElement('div');
        lightbox.classList.add('fixed', 'inset-0', 'bg-black/90', 'z-50', 'flex', 'items-center', 'justify-center', 'p-4', 'opacity-0');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        
        const lightboxContainer = document.createElement('div');
        lightboxContainer.classList.add('relative', 'max-w-5xl', 'w-full', 'flex', 'flex-col', 'items-center');
        
        const lightboxImg = document.createElement('img');
        lightboxImg.src = mainImage.src;
        lightboxImg.classList.add('max-h-[80vh]', 'max-w-full', 'object-contain', 'rounded-lg', 'shadow-2xl');
        
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&times;';
        closeBtn.classList.add('absolute', 'top-4', 'right-4', 'text-white', 'text-4xl', 'hover:text-gray-300', 'z-10');
        
        const captionContainer = document.createElement('div');
        captionContainer.classList.add('bg-black/50', 'text-white', 'p-4', 'mt-4', 'rounded-lg', 'max-w-3xl', 'w-full');
        
        const captionTitle = document.createElement('h3');
        captionTitle.textContent = imageTitle.textContent;
        captionTitle.classList.add('text-xl', 'font-bold', 'mb-2');
        
        const captionDesc = document.createElement('p');
        captionDesc.textContent = imageDescription.textContent;
        
        // Navigation buttons in lightbox
        const navContainer = document.createElement('div');
        navContainer.classList.add('absolute', 'inset-x-0', 'top-1/2', '-translate-y-1/2', 'flex', 'justify-between', 'px-4');
        
        const prevLightbox = document.createElement('button');
        prevLightbox.innerHTML = '<i class="fas fa-chevron-left text-2xl"></i>';
        prevLightbox.classList.add('bg-black/50', 'text-white', 'w-12', 'h-12', 'rounded-full', 'flex', 'items-center', 'justify-center', 'transition-all', 'hover:bg-black/70');
        prevLightbox.disabled = currentIndex === 0;
        if (prevLightbox.disabled) prevLightbox.classList.add('opacity-50', 'cursor-not-allowed');
        
        const nextLightbox = document.createElement('button');
        nextLightbox.innerHTML = '<i class="fas fa-chevron-right text-2xl"></i>';
        nextLightbox.classList.add('bg-black/50', 'text-white', 'w-12', 'h-12', 'rounded-full', 'flex', 'items-center', 'justify-center', 'transition-all', 'hover:bg-black/70');
        nextLightbox.disabled = currentIndex === thumbnails.length - 1;
        if (nextLightbox.disabled) nextLightbox.classList.add('opacity-50', 'cursor-not-allowed');
        
        // Append elements
        navContainer.appendChild(prevLightbox);
        navContainer.appendChild(nextLightbox);
        
        captionContainer.appendChild(captionTitle);
        captionContainer.appendChild(captionDesc);
        
        lightboxContainer.appendChild(lightboxImg);
        lightboxContainer.appendChild(closeBtn);
        lightboxContainer.appendChild(captionContainer);
        lightboxContainer.appendChild(navContainer);
        
        lightbox.appendChild(lightboxContainer);
        document.body.appendChild(lightbox);
        
        // Fade in the lightbox
        setTimeout(() => {
            lightbox.style.opacity = '1';
            lightbox.style.transition = 'opacity 0.3s ease';
        }, 10);
        
        // Add navigation functionality to lightbox
        prevLightbox.addEventListener('click', () => {
            if (currentIndex > 0) {
                updateLightboxImage(currentIndex - 1);
            }
        });
        
        nextLightbox.addEventListener('click', () => {
            if (currentIndex < thumbnails.length - 1) {
                updateLightboxImage(currentIndex + 1);
            }
        });
        
        function updateLightboxImage(index) {
            currentIndex = index;
            
            // Update main display in background
            thumbnails.forEach((thumb, i) => {
                if (i === currentIndex) {
                    thumb.classList.add('active');
                } else {
                    thumb.classList.remove('active');
                }
            });
            
            // Update lightbox image with fade effect
            lightboxImg.style.opacity = '0';
            lightboxImg.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                lightboxImg.src = thumbnails[currentIndex].src;
                captionTitle.textContent = thumbnails[currentIndex].dataset.title || '';
                captionDesc.textContent = thumbnails[currentIndex].dataset.description || '';
                
                // Fade back in
                lightboxImg.style.opacity = '1';
                
                // Update main image in background
                mainImage.src = thumbnails[currentIndex].src;
                imageTitle.textContent = thumbnails[currentIndex].dataset.title || '';
                imageDescription.textContent = thumbnails[currentIndex].dataset.description || '';
                
                // Update lightbox nav buttons
                prevLightbox.disabled = currentIndex === 0;
                nextLightbox.disabled = currentIndex === thumbnails.length - 1;
                
                if (prevLightbox.disabled) {
                    prevLightbox.classList.add('opacity-50', 'cursor-not-allowed');
                } else {
                    prevLightbox.classList.remove('opacity-50', 'cursor-not-allowed');
                }
                
                if (nextLightbox.disabled) {
                    nextLightbox.classList.add('opacity-50', 'cursor-not-allowed');
                } else {
                    nextLightbox.classList.remove('opacity-50', 'cursor-not-allowed');
                }
            }, 300);
        }
        
        // Add keyboard navigation in lightbox
        const keyHandler = (e) => {
            if (e.key === 'ArrowLeft' && currentIndex > 0) {
                updateLightboxImage(currentIndex - 1);
                e.preventDefault();
            } else if (e.key === 'ArrowRight' && currentIndex < thumbnails.length - 1) {
                updateLightboxImage(currentIndex + 1);
                e.preventDefault();
            } else if (e.key === 'Escape') {
                closeLightbox();
            }
        };
        
        document.addEventListener('keydown', keyHandler);
        
        // Add close functionality
        function closeLightbox() {
            lightbox.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(lightbox);
                document.body.style.overflow = ''; // Re-enable scrolling
                document.removeEventListener('keydown', keyHandler);
            }, 300);
        }
        
        closeBtn.addEventListener('click', closeLightbox);
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    });

    // Add fade styles to images on page load
    mainImage.style.transition = 'opacity 0.3s ease';
    imageTitle.style.transition = 'opacity 0.3s ease';
    imageDescription.style.transition = 'opacity 0.3s ease';

    // Initialize the gallery
    updateMainImage(0);
}); 
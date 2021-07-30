import React from 'react'

function FooterComponent() {
    return (
      <div>
        <footer class="footer bg-white relative pt-1 border-b-2 border-yellow-400">
          <div class="container mx-auto px-6">
            <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
              <div class="sm:w-2/3 text-center py-6">
                <p class="text-sm text-yellow-400 font-bold mb-2">
                  © Made with love by Sanchit Hajela for Myways &#10084;&#65039;
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
}

export default FooterComponent

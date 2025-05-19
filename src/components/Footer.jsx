import logo from '../assets/Logo.png'
export default function Footer() {
    return (
      <footer className="bg-green-900 text-gray-300 px-6 py-10 flex justify-center item-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Left - Logo and Description */}
          <div>
            {/* Replace this with your logo if you have */}
            <div className="mb-4">
              <div className="text-3xl text-green-400">
                <img src={logo} alt="logo" class='w-[79px] h-[56px]' /></div> 
            </div>
            <p className="text-[20px] text-[#2B9348] leading-relaxed">
              Crop Care Solutions helps farmers reduce post-harvest losses with expert storage tips, practical guides, and access to local storage facilities.
            </p>
          </div>
  
          {/* Middle - Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Storage Tips</a></li>
              <li><a href="#" className="hover:underline">Videos</a></li>
              <li><a href="#" className="hover:underline">Storage Centers</a></li>
              <li><a href="#" className="hover:underline">News</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Ask Experts</a></li>
            </ul>
          </div>
  
          {/* Middle - Contact Us */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <p className="text-sm mb-2">Bantama, Kumasi</p>
            <p className="text-sm mb-2">info@cropcaresolution.com</p>
            <p className="text-sm">+233 55 860 8896</p>
          </div>
  
          {/* Right - Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-4">Social Media</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">X</a></li>
            </ul>
          </div>
  
        </div>
  
        {/* Divider */}
        <div className="border-t border-green-700 my-8"></div>
  
        {/* Bottom - Copyright */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between text-xs text-gray-400">
          <p>© 2025 Crop Care Solution. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </footer>
    );
  }
  
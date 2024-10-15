import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <h6 className="text-sm mb-2">
          Created by P203 |&nbsp;
          <a
            href="https://github.com/ak8057/User-biometric-auth"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            AbhayAkshitVishnu
          </a>
        </h6>
      
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} P203. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

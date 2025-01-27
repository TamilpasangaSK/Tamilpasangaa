import React from 'react';
import { Mail, Phone, Globe, MapPin, AlertCircle, X } from 'lucide-react';

interface OwnerInfoProps {
  onClose: () => void;
}

export function OwnerInfo({ onClose }: OwnerInfoProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="relative w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl p-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact Information</h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <Mail className="w-5 h-5" />
                <span>contact@tamilpasanga.com</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <Globe className="w-5 h-5" />
                <span>www.tamilpasanga.com</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Disclaimer</h3>
            
            <div className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-1" />
              <p className="text-sm">
                TamilPasanga is a movie information platform. We do not host or distribute any copyrighted content. 
                All movie information is provided for educational purposes only. Please support the film industry 
                by watching movies in theaters or through legal streaming platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
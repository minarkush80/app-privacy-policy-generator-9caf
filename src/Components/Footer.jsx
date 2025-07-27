import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-black text-white py-8 px-4'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b border-gray-700 py-10 gap-6'>
        
        {/* Solutions */}
        <div>
          <h6 className='font-semibold uppercase text-white mb-2'>Solutions</h6>
          <ul className='space-y-1 text-sm text-gray-400 hover:[&>li]:text-white transition'>
            <li>Travel</li>
            <li>Booking</li>
            <li>Flights</li>
            <li>Cruises</li>
            <li>Ground</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h6 className='font-semibold uppercase text-white mb-2'>Support</h6>
          <ul className='space-y-1 text-sm text-gray-400 hover:[&>li]:text-white transition'>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Tours</li>
            <li>Refunds</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className='font-semibold uppercase text-white mb-2'>Company</h6>
          <ul className='space-y-1 text-sm text-gray-400 hover:[&>li]:text-white transition'>
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Partners</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className='font-semibold uppercase text-white mb-2'>Legal</h6>
          <ul className='space-y-1 text-sm text-gray-400 hover:[&>li]:text-white transition'>
            <li>Claims</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Policies</li>
            <li>Conditions</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className='col-span-2'>
          <p className='text-lg font-bold uppercase mb-2'>Subscribe to our newsletter</p>
          <p className='text-sm text-gray-400 mb-4'>
            Get the latest deals, articles, and resources sent to your inbox weekly.
          </p>
          <form className='flex flex-col sm:flex-row gap-2'>
            <input
              className='w-full px-4 py-2 rounded-md bg-[#111111] text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white'
              type='email'
              placeholder='Enter your email...'
            />
            <button className='bg-white text-black font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition'>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='flex flex-col max-w-[1400px] mx-auto sm:flex-row justify-between items-center text-sm text-gray-500 py-6'>
        <p className='mb-4 sm:mb-0'>&copy; 2025 Experiences, Inc. All rights reserved.</p>
        <div className='flex gap-6 text-xl text-gray-400 hover:[&>*]:text-white transition-all duration-300'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <TiSocialPinterest size={24} />
        </div>
      </div>
    </div>
  );
};

export default Footer;

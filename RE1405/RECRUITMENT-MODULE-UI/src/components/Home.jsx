import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.svg";


const Home = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${formattedHours}:${minutes} ${ampm}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=' p-4'>
      <div className='p-4 px-8'>

        <ul class="flex flex-wrap   dark:text-white">
          <li>
            <a href='#' class="me-4 border-b-2 text-[#29AB87] border-[#29AB87] md:me-6 text-sm font-medium ">
              Home
              {/* <div class="border-b-2 text-[#29AB87] border-[#29AB87]" /> */}
            </a>
          </li>
          <li>
            <a href='#' class="me-4 md:me-6 text-sm font-medium">CEO Connect</a>
          </li>

        </ul>

      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2  p-4 px-8">
          <div>
            <img className='w-1/5' src={logo} />
            <h3 className='font-bold text-sm'>Good Morning, <span className='text-[#29AB87]'>Vikas</span></h3>
            <p className='text-xs text-gray-400'>Monday, April 15, 2024</p>
          </div>
        </div>
        <div className="md:w-1/2  p-4 px-8">
          <div className='mt-3 float-right'>
            <h3 className='font-bold text-lg'>{currentTime} </h3>
            <p className='text-xs text-gray-400'>Visakhapatnam</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-4">
        <div className="md:w-1/4  p-4">
          <div>
            <h5 className='font-bold text-base mb-10'>
              Employee Services
            </h5>
            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 p-3">
              <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Recruitment Services
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-3">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      My Requests
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-3">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      My Workflow
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-3">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      My Personal Details
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-3">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      My Job Profile
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
        <div className="md:w-5/12  p-4">
          <div>
            <h5 className='font-bold text-base mb-10'>
              Announcements
            </h5>
            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 p-3">
              <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-medium text-dark truncate dark:text-white">
                      Exciting News
                    </p>
                    <p className="text-sm  text-gray-500 truncate dark:text-white">Launch for our new Mentorship Program</p>
                    <small className="text-gray-500">11:00 • 24th March, 2024</small>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ...
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-medium text-dark truncate dark:text-white">
                      Remainder
                    </p>
                    <p className="text-sm  text-gray-500 truncate dark:text-white">
                      Upcoming Staff Training Session on Workplace Diversity
                    </p>
                    <small className="text-gray-500">11:00 • 24th March, 2024</small>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ...
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-medium text-dark truncate dark:text-white">
                      Save the Date
                    </p>
                    <p className="text-sm  text-gray-500 truncate dark:text-white">
                      Annual Company Retreat Announced for Next Month!
                    </p>
                    <small className="text-gray-500">11:00 • 24th March, 2024</small>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ...
                  </div>
                </div>
              </li>

            </ul>
          </div>
          <div className='mt-2'>
            <h5 className='font-bold text-base mb-6'>
              Announcements
            </h5>
            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 p-3">

              <li className="py-3 sm:py-3 ">
                <div className="flex items-center space-x-4 rtl:space-x-reverse homecardbackground  p-3 rounded-lg">
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-medium text-dark truncate dark:text-white">
                      Remainder
                    </p>
                    <p className="text-sm  text-gray-500 truncate dark:text-white">
                      Upcoming Staff Training Session on Workplace Diversity
                    </p>
                    <small className="text-gray-500">11:00 • 24th March, 2024</small>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ...
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-3">
                <div className="flex items-center space-x-4 rtl:space-x-reverse homecardbackground p-3 rounded-lg">
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-medium text-dark truncate dark:text-white">
                      Save the Date
                    </p>
                    <p className="text-sm  text-gray-500 truncate dark:text-white">
                      Annual Company Retreat Announced for Next Month!
                    </p>
                    <small className="text-gray-500">11:00 • 24th March, 2024</small>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ...
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
        <div className="md:w-5/12  p-4">
          <div>
            <h5 className='font-bold text-base mb-10'>
              Announcements
            </h5>
            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 p-3">
              <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-medium text-dark truncate dark:text-white">
                      Exciting News
                    </p>
                    <p className="text-sm  text-gray-500 truncate dark:text-white">Launch for our new Mentorship Program</p>
                    <small className="text-gray-500">11:00 • 24th March, 2024</small>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ...
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-medium text-dark truncate dark:text-white">
                      Remainder
                    </p>
                    <p className="text-sm  text-gray-500 truncate dark:text-white">
                      Upcoming Staff Training Session on Workplace Diversity
                    </p>
                    <small className="text-gray-500">11:00 • 24th March, 2024</small>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ...
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-medium text-dark truncate dark:text-white">
                      Save the Date
                    </p>
                    <p className="text-sm  text-gray-500 truncate dark:text-white">
                      Annual Company Retreat Announced for Next Month!
                    </p>
                    <small className="text-gray-500">11:00 • 24th March, 2024</small>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ...
                  </div>
                </div>
              </li>

            </ul>
          </div>
          <div className='mt-2'>
            <h5 className='font-bold text-base mb-6'>
              Announcements
            </h5>
            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 p-3">

              <li className="py-3 sm:py-3 ">
                <div className="flex items-center space-x-4 rtl:space-x-reverse homesecondcardbackground  p-3 rounded-lg">
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-medium text-dark truncate dark:text-white">
                      Remainder
                    </p>
                    <p className="text-sm  text-gray-500 truncate dark:text-white">
                      Upcoming Staff Training Session on Workplace Diversity
                    </p>
                    <small className="text-gray-500">11:00 • 24th March, 2024</small>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ...
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-3">
                <div className="flex items-center space-x-4 rtl:space-x-reverse homesecondcardbackground p-3 rounded-lg">
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-medium text-dark truncate dark:text-white">
                      Save the Date
                    </p>
                    <p className="text-sm  text-gray-500 truncate dark:text-white">
                      Annual Company Retreat Announced for Next Month!
                    </p>
                    <small className="text-gray-500">11:00 • 24th March, 2024</small>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ...
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home
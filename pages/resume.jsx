import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Clint | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Ashish Kumar</h2>
          <div className='flex' style={{color:'rgb(86 81 229)'}}>
            <a
              href='https://www.linkedin.com/in/kumarrashish/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Ashish-kumar0707'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> RESTAPI
            <span className='px-2'>|</span> STL
            <span className='px-2'>|</span> Data Structure and Algorithms
            <span className='px-2'>|</span> C
            <span className='px-2'>|</span> C++
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Mytailmate Private Limited
            </span>
            <span className='px-2'>|</span>Hariyana, India
          </p>
          <p className='py-1 italic'>Full Stack Developer (Jun'23 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Developed subscription system with API integration and payments 
            using NextJS, ReactJS, JavaScript and AWS Database.
            </li>
            <li>
            Created Service area validation API to ensure accurate coverage, 
            enhancing user experience and operational efficiency
            </li>
            <li>
            Developed subscription details and website pages with Material UI
             for visually appealing and responsive user interfaces.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Indgeos Private Limited
            </span>
            <span className='px-2'>|</span>Hariyana, India
          </p>
          <p className='py-1 italic'>Software Engineer (Nov'22 - Jan'23)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Constructed an SEO-optimized website for company using ReactJS, 
            integrated with Google Analytics for traffic monitoring.

            </li>
            <li>
            Created a Geospatial application with map sharing functionality, layering
             options, and drawing features using Openlayers.

            </li>
            <li>
            Utilized Google Place and Drawing library within Maps JavaScript API
             for geographic searches and advanced drawing tools.
            </li>
          </ul>
        </div>


        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Indian Institute of Technology Kharagpur
            </span>
            <span className='px-2'>|</span> West Bengal, India
          </p>
          <p className='py-1 italic'>Research Intern    (Aug'22 - Dec'22)</p>
          <p className='py-1 italic'>Guide: Professor Rajib Mall </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Analyzed code property graphs and their relation to source code,
             exploring connections with AST, CFG, and PDG edges.
            </li>
            <li>
            Analyzed code property graphs and their relation to source code,
             exploring connections with AST, CFG, and PDG edges.
            </li>
            <li>
            Developed Python script for automated code graph generation and 
            storage, streamlining analysis of the code directories
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Achievements
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Secured 1421th rank out of 13,000+ participants around the globe in coding contest Codeforces Round 877 Divison-2.
            </li>
            <li>
            Secured 6th rank out of 3000+ participants around the globe in coding contest CodeChef STARTERS 90 Division-3.
            </li>
            <li>
            Secured top 1.26 percentile in highly competitive JEE(Joint Entrance Examination) mains 2020 out of 1 million students.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;

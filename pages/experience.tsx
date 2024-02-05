import getConfig from 'next/config';
import Layout from '@/components/Layout';
import SvgArrow from '@/components/atoms/SvgArrow';
import Navbar from '@/components/Navbar';
import Skill from '@/components/atoms/Skill';
import Location from '@/components/Location';
import jobAndProjectData from 'components/experience.json';
import MarkdownListItem from '@/components/atoms/MarkdownListItem';
import SvgMap from '@/components/atoms/SvgMap';
import { useState } from 'react';


const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Experience = () => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date();
  const [showProjects, setShowProjects] = useState(false);

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Navbar />
          <section className="py-10">
            <div className="prose mb-4">
              <h2>Experience</h2>
              <SvgMap />
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 dark:text-gray-300 cursor-pointer" onClick={() => setShowProjects(false)}>Work</span>
                  <div className={`rounded-full shadow-md bg-gray-300 w-12 h-6 px-1 flex items-center ${showProjects ? 'justify-end' : ''} dark:bg-gray-700 cursor-pointer`} onClick={() => setShowProjects(!showProjects)}>
                    <span className="sr-only">Toggle button</span>
                    <span className="rounded-full w-5 h-5 bg-white shadow-md transform transition-transform duration-200 ease-in-out dark:bg-gray-800" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 cursor-pointer" onClick={() => setShowProjects(true)}>Projects</span>
                </div>
              </div>
              {jobAndProjectData.items.filter((data) => data.type == (showProjects ? 'project' : 'work')).map((data, j_idx) => {
                return (
                  <div key={`${showProjects ? 'projects' : 'job'}_${j_idx}`} className='pb-6'>
                    <div className="flex flex-wrap justify-between mb-2">
                      <div className='flex gap-1 items-center'>
                        <h3 className='my-0'>{data.title}</h3>
                        {data.link && (
                          <>
                            <img src="/codeslashes.svg" alt="Code link symbol" className="h-4 my-0" />
                            <a href={data.link} target="_blank" rel="noopener noreferrer">
                              <h4 className="text-gray-700 my-0">Code</h4>
                            </a>
                          </>
                        )}
                      </div>
                      <h4 className='my-0 text-gray-700'>{data.present ? `${data.start} - ${months[date.getMonth()]} ${date.getFullYear()} (present)` : `${data.start} - ${data.end}`} </h4>
                    </div>
                    <div className="flex justify-between gap-2 mb-4">
                      <div className='flex flex-wrap gap-2'>
                        {data.skills.map((skill, s_idx) => {
                          return <Skill key={`skill_${j_idx}_${s_idx}`} skill={skill} />
                        })}
                      </div>
                      <Location location={data.location} />
                    </div>
                    <ul>
                      {data.keypoints.map((keypoint, k_idx) => {
                        return <MarkdownListItem key={`keypoint_${j_idx}_${k_idx}`} text={keypoint} />
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
          </section>

          <div className="flex flex-col justify-center items-center">
            <SvgArrow />
            <div className="prose text-center">
              <p className='my-1'>Working on something related?</p>
              <p className="my-1">Want to partner?</p>
            </div>
            <button className="rounded-lg py-3 px-5 shadow-md bg-black hover:shadow-lg shadow-slate-300 focus:outline-none focus:ring focus:border-blue-300 flex gap-2 items-center">
              <p className="text-white">Email me</p>
              <img src="/mailinverted.png" alt="Email symbol" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
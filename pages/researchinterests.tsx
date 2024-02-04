import getConfig from 'next/config';
import Layout from '@/components/Layout';
import Card from '@/components/Card';
import IconButton from '@/components/IconButton';
import CustomListItem from '@/components/SvgArrow';
import SvgArrow from '@/components/SvgArrow';



const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <div className="prose">
              <h1>Thomas Dhome-Casanova</h1>
            </div>
            <div>
              <a href="#" className="underline uppercase mr-4">Projects</a>
              <a href="/researchinterests" className="underline uppercase">Research Interests</a>
            </div>
          </nav>
          <section className="py-10">
            <div className="prose mb-4">
              <h2>Current Interest - AI</h2>
              <h3>Overview</h3>
              <p>The universal approximation theorem as well as modern research highlight the power of neural networks to approximate functions previously thought to be limited to humans.
                I am interested in creating ways to <strong>augment</strong> human capabilities <strong>rather than replacing</strong> humans</p>
              <h3>How I see it</h3>
              <p>Symbiotic Human-AI relationships fit into 2 categories:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-evenly">
                <div className="flex-1 thinelement border border-gray-200 p-4 rounded-lg">
                  <span className='text-center'>
                    <h4 className='mt-2'>Synchronous AI</h4>
                  </span>
                  <p>Fits into and improves a human's daily life without human input</p>
                  <div className="flex flex-col gap-2">
                    <span>
                      <p className='bg-ochre rounded-lg py-2 px-4 my-0 inline-block leading-normal'>Catch errors</p>
                    </span>
                    <span>
                      <p className='bg-ochre rounded-lg py-2 px-4 my-0 inline-block leading-normal'>Constructively critique</p>
                    </span>
                    <span>
                      <p className='bg-ochre rounded-lg py-2 px-4 my-0 inline-block leading-normal'>Predict desired next step in all apps</p>
                    </span>
                  </div>
                </div>
                <div className="flex-1 thinelement border border-gray-200 p-4 rounded-lg">
                  <span className='text-center'>
                    <h4 className='mt-2'>Asynchronous AI</h4>
                  </span>
                  <p>Requested as needed by a human for abilities the human doesn't have</p>
                  <div className="flex flex-col gap-2">
                    <span>
                      <p className='bg-ochre rounded-lg py-2 px-4 my-0 inline-block leading-normal'>Aggregate existing knowledge</p>
                    </span>
                    <span>
                      <p className='bg-ochre rounded-lg py-2 px-4 my-0 inline-block leading-normal'>Novel field discovery</p>
                    </span>
                    <span>
                      <p className='bg-ochre rounded-lg py-2 px-4 my-0 inline-block leading-normal'>Generate content out of user skillset</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <div className="flex flex-col justify-center items-center">
            {/* <img src='/arrow.svg' alt="Spiral downward arrow" className='w-20' /> */}
            <SvgArrow />
            <div className="prose text-center">
              <p className='my-1'>Working on something related?</p>
              <p className="my-1">Want to partner?</p>
            </div>
            <button className="rounded-lg p-3 shadow-md bg-white hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300 flex gap-2 items-center">
              <p>Email me</p>
              <img src="/mail.png" alt="Email symbol" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
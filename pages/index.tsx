import getConfig from 'next/config';
import Layout from '@/components/Layout';
import Card from '@/components/Card';
import IconButton from '@/components/IconButton';
import CustomListItem from '@/components/CustomListItem';
import SvgArrow from '@/components/atoms/SvgArrow';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <Navbar />
        <section className="mx-auto py-10 flex gap-4 flex-col lg:flex-row">
          <div className="rounded-2xl overflow-hidden lg:w-1/2">
            <img src="/headshot.png" alt="Headshot" className="rounded-2xl" />
          </div>
          <div className="mt-auto">
            <div className="pb-2">
              <IconButton imageSrc="/linkedin.png" imageAlt="LinkedIn logo" buttonUrl="https://github.com/ThomasDh-C" />
              <IconButton imageSrc="/github.png" imageAlt="GitHub logo" buttonUrl="https://www.linkedin.com/in/thomas-dhome-casanova" />
              <IconButton imageSrc="/mail.png" imageAlt="Email symbol" buttonUrl="mailto:thomasdhca@gmail.com" />
            </div>
            <div className="flex-col gap-1">
              <CustomListItem imageSrc="/msft.png" imageAlt="Microsoft" text="Currently, a Software engineer @ Microsoft" />
              <CustomListItem imageSrc="/princeton.png" imageAlt="Princeton" text="Electrical and Computer engineer @ Princeton '23" />
              <div className="flex py-1">
                <div className="w-10">
                  <img src="/researcher.png" alt="Researcher" className="h-6 mx-auto" />
                </div>
                <p className="text-left prose w-full">
                  Research under{' '}
                  <a href="https://www.princeton.edu/~sharad/" target="_blank" rel="noopener noreferrer">
                    Sharad Malik
                  </a>{' '}
                  at Princeton and{' '}
                  <a href="https://www.imperial.ac.uk/people/f.bello" target="_blank" rel="noopener noreferrer">
                    Fernando Bello
                  </a>{' '}
                  at Imperial College London.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-10">
          <div className="prose mb-4">
            <h2>Recent Projects</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
            <Card imageSrc="/coffee.png" imageAlt="Steaming coffee mug"
              logo1Src="/teams.png" logo1Alt="Teams logo" logo2Src="/azure.png"
              logo2Alt="Azure logo" title="Coffee ordering copilot"
              text="Chat on Teams and instantly order over Azure cloud to barista at work with shortest wait" />
            <Card imageSrc="/thesis.png" imageAlt="Princeton senior thesis binded book"
              logo1Src="/nvidia.png" logo1Alt="NVIDIA logo" logo2Src="/princeton.png"
              logo2Alt="Princeton logo" title="AI to accelerator compiler"
              text="Wrote a compiler for neural network computation to be offloaded to the NVDLA" />
            <Card imageSrc="/truck.png" imageAlt="Autonomous remote control truck driving"
              logo1Src="/saferobotics.png" logo1Alt="Princeton Safe Robotics Lab logo"
              logo2Src="/princeton.png" logo2Alt="Princeton Logo" title="AI truck algorithms"
              text="Coded trucks to navigate, whilst following road rules and avoiding static or dynamic obstacles" />
            <Card imageSrc="/neuralrendering.png" imageAlt="Renderings of faces from a neural network"
              logo1Src="/pcilab.png" logo1Alt="Princeton PCILab logo"
              logo2Src="/princeton.png" logo2Alt="Princeton logo" title="Neural rendering faces"
              text="Novel AI approach to generating unseen views of faces using a transformer architecture" />
          </div>
          <div>
            <div className="prose mb-4">
              <h2 className="my-4">Recent awards</h2>
            </div>
            <div className="flex gap-1 flex-col">
              <CustomListItem imageSrc="/msft.png" imageAlt="Microsoft" text="Hackathon Bay Area Employee Quality of Life Award" />
              <CustomListItem imageSrc="/msft.png" imageAlt="Microsoft" text="Hackathon Worldwide Special Mention Award" />
              <CustomListItem imageSrc="/princeton.png" imageAlt="Princeton" text="Princeton Charles Ira Young Memorial Tablet and Medal" />
              <CustomListItem imageSrc="/princeton.png" imageAlt="Princeton" text="Tau Beta Pi engineering honor society (President), Sigma Xi research honor society and Phi Beta Kappa honor society" />
              <CustomListItem imageSrc="/kickstarter.png" imageAlt="Kickstarter" text="Project We Love from Kickstarter for SureLight the safest bike light" />
            </div>
          </div>
        </section>
        <div className="flex flex-col justify-center items-center">
          <SvgArrow />
          <div className="prose text-center mb-2">
            <p className='my-1'>Interested by these projects?</p>
            <p className="my-1">Want to learn more?</p>
          </div>
          <a href="mailto:thomasdhca@gmail.com" target="_blank" rel="noopener noreferrer">
            <button className="rounded-lg py-3 px-5 shadow-md bg-black hover:shadow-lg shadow-slate-300 focus:outline-none focus:ring focus:border-blue-300 flex gap-2 items-center">
              <p className="text-white">Email me</p>
              <img src="/mailinverted.png" alt="Email symbol" className="w-5 h-5" />
            </button>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
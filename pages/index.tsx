import getConfig from 'next/config';
import Layout from '@/components/Layout';
import Card from '@/components/Card';
import IconButton from '@/components/IconButton';
import CustomListItem from '@/components/CustomListItem';



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
              <a href="#" className="underline uppercase">Research Interests</a>
            </div>
          </nav>
          <section className="mx-auto py-10 flex gap-4 flex-col lg:flex-row">
            <div className="rounded-2xl overflow-hidden lg:w-1/2">
              <img src="/headshot.jpg" alt="Headshot" className="rounded-2xl" />
            </div>
            <div className="mt-auto">
              <div className="pb-2">
                <IconButton imageSrc="/linkedin.png" imageAlt="LinkedIn logo" />
                <IconButton imageSrc="/github.png" imageAlt="GitHub logo" />
                <IconButton imageSrc="/mail.png" imageAlt="Email symbol" />
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
                    <a href="https://www.princeton.edu/~malik/" target="_blank" rel="noopener noreferrer">
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
                <CustomListItem imageSrc="/princeton.png" imageAlt="Princeton" text="Tau Beta Pi engineering honor society, Sigma Xi research honor society and Phi Beta Kappa honor society" />
                <CustomListItem imageSrc="/kickstarter.png" imageAlt="Kickstarter" text="Project We Love from Kickstarter for SureLight the safest bike light" />
              </div>
            </div>
          </section>
          <div className="flex flex-col justify-center items-center">
            <img src='/arrow.svg' alt="Spiral downward arrow" className='w-20' />
            <div className="prose text-center">
              <p className='my-1'>Interested by these projects?</p>
              <p className="my-1">Want to learn more?</p>
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
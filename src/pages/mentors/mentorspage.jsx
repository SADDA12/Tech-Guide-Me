import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import AllMentors from "../../components/mentors/allmentors.jsx";
import WebDevMentors from "../../components/mentors/webdevmentors.jsx";
import SoftwareDevMentors from "../../components/mentors/softwaredevmentors.jsx";
import DataMentors from "../../components/mentors/datamentors.jsx";
import CloudComputingMentors from "../../components/mentors/cloudcomputingmentors.jsx";
import CyberSecuritymentors from "../../components/mentors/cybersecmentors.jsx";
import DigitalMarketingMentors from "../../components/mentors/digitalmarketingmentors.jsx";
import AiMachineLearningMentors from "../../components/mentors/aimachinelearningmentors.jsx";

export default function Mentors() {
  return (
    <>
      <Navbar />

      <section className="border-b py-4">
        <Tabs>
          <TabList>
            <Tab>
              <button className="bg-gray-100 my-1 px-1 border rounded hover:bg-red-600 hover:text-white">
                All Mentors
              </button>
            </Tab>

            <Tab>
              <button className="bg-gray-100 my-1 px-1 border rounded hover:bg-red-600 hover:text-white">
                Web Development/Design
              </button>
            </Tab>

            <Tab>
              <button className="bg-gray-100 my-1 px-1 border rounded hover:bg-red-600 hover:text-white">
                Software Development
              </button>
            </Tab>

            <Tab>
              <button className="bg-gray-100 my-1 px-1 border rounded hover:bg-red-600 hover:text-white">
                Data
              </button>
            </Tab>

            <Tab>
              <button className="bg-gray-100 my-1 px-1 border rounded hover:bg-red-600 hover:text-white">
                Cloud Computing
              </button>
            </Tab>

            <Tab>
              <button className="bg-gray-100 my-1 px-1 border rounded hover:bg-red-600 hover:text-white">
                CyberSecurity
              </button>
            </Tab>

            <Tab>
              <button className="bg-gray-100 my-1 px-1 border rounded hover:bg-red-600 hover:text-white">
                Digital Marketing
              </button>
            </Tab>

            <Tab>
              <button className="bg-gray-100 my-1 px-1 border rounded hover:bg-red-600 hover:text-white">
                Ai/Machine Learning
              </button>
            </Tab>
          </TabList>

          <TabPanel id="all-mentors">
            <AllMentors />
          </TabPanel>

          <TabPanel id="web-development-design">
            <WebDevMentors />
          </TabPanel>

          <TabPanel id="software-development">
            <SoftwareDevMentors />
          </TabPanel>

          <TabPanel id="data-mentors">
            <DataMentors />
          </TabPanel>

          <TabPanel id="cloud-computing">
            <CloudComputingMentors />
          </TabPanel>

          <TabPanel id="cybersecurity">
            <CyberSecuritymentors />
          </TabPanel>

          <TabPanel id="digital-marketing">
            <DigitalMarketingMentors />
          </TabPanel>

          <TabPanel id="ai-machine-learning">
            <AiMachineLearningMentors />
          </TabPanel>
        </Tabs>
      </section>

      <Footer />
    </>
  );
}

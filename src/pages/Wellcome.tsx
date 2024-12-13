import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import Lottie from 'react-lottie';
import animationData from '../assets/animay.json';
import Layout from "../components/Layout";
import InstallPWAButton from "../components/PwaButton";

function Wellcome() {
    const defaultOptions = {
        loop: true,          // Loop the animation
        autoplay: true,      // Autoplay the animation
        animationData: animationData, // The Lottie animation data
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice', // Customize the aspect ratio
        },
    };

  return (
    <Layout>
      <div className="h-screen flex flex-col">
        <div className="max-w-96 mx-auto my-auto">
          <div className="mx-auto pt-10">
          <Lottie options={defaultOptions}  />
          </div>
          <div className="mt-10">
            <p className="text-4xl text-gray-800">
              <span className=" mr-2">Better </span>
              Task Management
            </p>
            <p className="mt-4 text-gray-800 text-opacity-90">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              hic sunt recusandae quaerat esse fugiat
            </p>
          </div>

          <div className="mt-5">
            <Link
              to="/login"
              className="w-fit flex gap-2 rounded-full bg-yellow-200 text-black"
            >
              <span className="my-auto inline-block pl-5 pr-3">
                Get Started
              </span>
              <div className="p-4 rounded-full m-1 text-white bg-black">
                <IoArrowForward className="my-auto text-2xl text-white" />
              </div>
            </Link>

<InstallPWAButton />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Wellcome;

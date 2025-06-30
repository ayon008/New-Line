import PrimaryButton from "@/Shared/Buttons/PrimaryButton";
import SecondaryButton from "@/Shared/Buttons/SecondaryButton";
import Image from "next/image";
import heroImage from '../../public/New Project (1).png'
import image from '../../public/two-star.svg'
import Features from "@/Shared/Features/Features";
import About from "@/Shared/About/About";
import Services from "@/Shared/Services/Services";
import Marquees from "@/Shared/Marquee/Marquee";
import Choose from "@/Shared/Choose Us/Choose";
import Brand from "@/Shared/Brands/Brand";
import Team from "@/Shared/Team/Team";
import Process from "@/Shared/Process/Process";
import States from "@/Shared/States/States";

export const Svg1 = ({ className }) => {
  return (
    <svg className={`${className}`} width="91" height="97" viewBox="0 0 91 97" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M31 0L34.3852 16.0217C37.4898 30.7151 47.9156 42.7883 62 48C47.9259 53.2079 37.532 65.305 34.5029 80.0028L31 97L27.4971 80.0028C24.468 65.305 14.0741 53.2079 0 48C14.0844 42.7883 24.5102 30.7151 27.6148 16.0217L31 0Z" fill="#007CFA" />
      <path d="M62 0L63.0794 5.06122C64.0885 9.79306 67.4574 13.6749 72 15.3402C67.4608 17.0043 64.1023 20.8939 63.1176 25.6272L62 31L60.8824 25.6272C59.8977 20.8939 56.5392 17.0043 52 15.3402C56.5426 13.6749 59.9114 9.79306 60.9206 5.06122L62 0Z" fill="#FFC702" />
      <path d="M84 20L84.8093 24.0223C85.483 27.3705 87.8166 30.1445 91 31.3814C87.8188 32.6175 85.4922 35.3966 84.835 38.7457L84 43L83.165 38.7457C82.5078 35.3966 80.1812 32.6175 77 31.3814C80.1834 30.1445 82.517 27.3705 83.1907 24.0223L84 20Z" fill="#007CFA" />
    </svg>

  )
}

export const Svg2 = ({ className }) => {
  return (
    <Image className={className} alt="" src={image} />
  )
}

export default function Home() {
  return (
    <div>
      <div className="2xl:!h-[920px] md:!h-[720px] sm:!h-[705px] min-h-[800px] h-[710px] w-full banner-container flex flex-col relative">
        <div className="2xl:px-0 md:px-6 px-6 h-full flex flex-col md:pt-[150px] pt-[72px] max-w-[1290px] w-full mx-auto">
          <div className="md:my-auto md:space-y-6 space-y-5 md:p-0 py-20">
            <p className="subheadline xl:subheadline text-primary font-medium md:text-xl 2xl:text-2xl text-xl md:text-left text-center">We Clean, You Shine</p>
            <h1 className={`md:text-6xl 2xl:text-7xl text-4xl font-semibold md:text-left text-center`}>Best Cleaning <br />
              Experience From <br className="md:block hidden" />
              Top Service</h1>
            <div className="flex gap-4 items-center md:justify-start justify-center relative">
              <PrimaryButton text={'Discover More'} />
              <SecondaryButton text={'Our Services'} />
              <div className="absolute top-[80px] left-[350px] animation-side md:block hidden">
                <svg width="260" height="100" viewBox="0 0 360 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M162.165 85.9702L163.513 86.6283L162.165 85.9702ZM75.7596 116.124L76.194 114.688L76.2081 114.692L76.2221 114.697L75.7596 116.124ZM11.4126 1.24254C12.031 0.691328 12.9792 0.74582 13.5304 1.36425L22.5129 11.4422C23.0641 12.0606 23.0096 13.0088 22.3912 13.56C21.7728 14.1112 20.8246 14.0567 20.2734 13.4383L12.2889 4.48013L3.33075 12.4646C2.71232 13.0158 1.76414 12.9613 1.21293 12.3429C0.661716 11.7245 0.716208 10.7763 1.33464 10.2251L11.4126 1.24254ZM358.829 187.747C319.185 184.926 261.691 176.517 218.132 160.419C196.379 152.38 177.903 142.353 166.917 129.984C161.405 123.778 157.74 116.939 156.541 109.436C155.341 101.926 156.633 93.8817 160.817 85.312L163.513 86.6283C159.555 94.7349 158.416 102.156 159.504 108.963C160.593 115.779 163.936 122.11 169.16 127.992C179.647 139.799 197.557 149.617 219.172 157.605C262.351 173.563 319.526 181.942 359.042 184.754L358.829 187.747ZM160.817 85.312C165.99 74.7169 171.984 68.1584 178.203 64.8441C184.466 61.5066 190.825 61.534 196.471 63.8612C207.632 68.4616 215.874 81.9468 215.89 95.7582C215.898 102.719 213.823 109.821 208.948 115.976C204.073 122.129 196.473 127.241 185.579 130.358C163.849 136.574 128.837 134.903 75.2971 117.551L76.2221 114.697C129.564 131.985 163.882 133.444 184.754 127.473C195.162 124.496 202.181 119.686 206.596 114.113C211.011 108.54 212.897 102.112 212.89 95.7617C212.875 82.9517 205.182 70.6966 195.328 66.6348C190.466 64.6309 185.046 64.5967 179.614 67.4917C174.137 70.41 168.518 76.3781 163.513 86.6283L160.817 85.312ZM75.3252 117.559C51.8306 110.451 6.59474 77.4174 10.9131 2.27625L13.9081 2.44837C9.67701 76.072 53.8937 107.941 76.194 114.688L75.3252 117.559Z" fill="#FFC702" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Image width={872} height={733} priority className="absolute z-10 md:right-[2%] bottom-0 2xl:w-[872px] 2xl:h-[733px] md:w-[650px] md:h-[546px] w-[450px]" src={heroImage} alt="hero-image" />
        <Svg1 className={'absolute bottom-0 left-[5%] 2xl:block hidden top-[20%] animation-side'} />
        <Svg2 className={'absolute md:left-[5%] left-[5px] bottom-[3%] animation'} />
        <Svg2 className={'absolute right-[1%] md:top-[30%] top-[15%] animation'} />
        <Svg1 className={'absolute bottom-[3%] right-[2%] animation-side md:block hidden'} />
      </div>
      <div className="my-20 px-6 2xl:px-0">
        <Features />
      </div>
      <div className="px-6 2xl:px-0">
        <About />
      </div>
      <Services />
      <div className="mb-20">
        <Marquees />
      </div>
      <Choose />
      <Brand />
      <Team />
      <Process />
      <States />
    </div>
  );
}

import { Link } from "react-router"

const LandingPage = () => {
  return (
    <>

      <nav className="flex items-center justify-between w-full max-w-[1280px] px-[52px] py-9 mx-auto">
        <Link to="/" className="flex shrink-0">
          <img src="/assets/images/logos/heyhao.svg" className="h-[38px]" alt="logo" />
        </Link>
        <ul className="flex items-center gap-6">
          <li>
            <Link to="/" className="font-medium text-lg leading-[22.5px]">Home</Link>
          </li>
          <li>
            <Link to="#" className="font-medium text-lg leading-[22.5px]">Features</Link>
          </li>
          <li>
            <Link to="#" className="font-medium text-lg leading-[22.5px]">Privacy</Link>
          </li>
          <li>
            <Link to="#" className="font-medium text-lg leading-[22.5px]">Download</Link>
          </li>
        </ul>
        <Link to="/sign-in" className="flex items-center justify-center gap-[10px] rounded-full h-[52px] px-8 py-4 bg-[#165DFF17]">
          <span className="font-bold leading-5 text-heyhao-blue">My Account</span>
        </Link>
      </nav>
  
      
      <header className="relative w-full max-w-[1280px] px-[52px] mx-auto">
        <div className="flex flex-col rounded-t-[52px] h-[999px] bg-[linear-gradient(180deg,#F7F9FF_0%,rgba(247,249,255,0.01)_100%)]">
          <div className="flex flex-col gap-[54px] items-center mt-20">
            <div className="flex flex-col gap-[30px] items-center">
              <div className="badge w-fit flex items-center gap-2 py-4 px-6 rounded-full bg-heyhao-black">
                <img src="/assets/images/icons/crown-fill-white.svg" className="flex shrink-0 size-6" alt="icon" />
                <p className="font-semibold leading-5 text-white">Step Into the Next Messaging Age</p>
              </div>
              <h1 className="font-extrabold text-[52px] leading-[65px] text-center">
                <p className="flex items-center gap-2">
                  <span>Build Your Community</span>
                  <img src="/assets/images/photos/Group Members.png" className="flex shrink-0 h-[44px]" alt="photos" />
                </p>
                Make New Revenue Stream
              </h1>
              <p className="w-[559px] font-medium leading-[28px] text-heyhao-secondary text-center">Be Part of or Build Communities That Empower You to Network, Learn, and Achieve Career Milestones Faster</p>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <Link to="/sign-up" className="flex items-center rounded-[50px] w-[200px] h-16 justify-center py-5 px-9 gap-[6px] bg-heyhao-blue">
                <span className="text-white font-bold leading-5">Get Started</span>
                <img src="/assets/images/icons/arrow-right.svg" className="flex shrink-0 size-6" alt="icon" />
              </Link>
              <Link to="#Testimonials" className="flex items-center rounded-[50px] w-[200px] h-16 justify-center py-5 px-9 gap-[6px] bg-heyhao-blue/[9%]">
                <span className="text-heyhao-blue font-bold leading-5">View Testimoni</span>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto mt-[52px] -mb-[330px] pt-[64px]">
            <img src="/assets/images/thumbnails/hero-banner-left.png" alt="" className="w-[285px] z-40 absolute left-[-41px] top-0" />
            <span className="w-[225px] h-[276px] rounded-3xl bg-[#1B2340]/[20%] absolute top-[125px] left-[49px] z-30 blur-[60px]"></span>
            <span className="left-[-20px] bg-[#1B3266]/[5%] absolute right-[-20px] top-[64px] h-[380px] z-10 blur-[50px]"></span>
            <img src="/assets/images/thumbnails/hero-banner-center.png" className="w-[1094px] relative z-20" alt="" />
            <img src="/assets/images/thumbnails/hero-banner-right.png" alt="" className="w-[345px] absolute right-[-41px] bottom-[108px] z-40" />
            <span className="w-[345px] h-[287px] rounded-3xl bg-[#1B2340]/[20%] absolute bottom-[88px] right-[-21px] z-30 blur-[60px]"></span>
          </div>
        </div>
      </header>
      <section id="Testimonials" className="w-full bg-heyhao-black overflow-x-hidden">
        <div className="flex flex-col gap-3 items-center mt-[450px]">
          <div className="flex items-center justify-center gap-2">
            <img src="/assets/images/icons/lovely-orange.svg" className="flex shrink-0 size-6" alt="icon" />
            <p className="font-medium text-xl leading-[25px] text-heyhao-orange">Happy Customers</p>
          </div>
          <h2 className="font-bold text-4xl leading-[57.6px] text-center text-white">Loved by Millions, Trusted by You</h2>
        </div>
        <div className="flex w-max flex-nowrap mt-[52px]">
          <div className="slider w-max">
            <div className="slide-right flex gap-8 flex-nowrap pr-8">
              <div className="card bg-white/[9%] flex flex-col w-[430px] shrink-0 rounded-3xl p-5 gap-4 text-white">
                <div className="flex items-center gap-[2px]">
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                </div>
                <p className="font-semibold text-lg leading-8">"It’s more than just a messaging app—it’s my go-to tool for staying in touch with everyone I care about."</p>
                <hr className="border-white/5" />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-5">Olivia Harris</p>
                    <p className="leading-5">UI Designer</p>
                  </div>
                  <div className="flex rounded-full size-[50px] overflow-hidden">
                    <img src="/assets/images/photos/photo-1.png" className="w-full h-full object-cover" alt="photo" />
                  </div>
                </div>
              </div>
              <div className="card bg-white/[9%] flex flex-col w-[430px] shrink-0 rounded-3xl p-5 gap-4 text-white">
                <div className="flex items-center gap-[2px]">
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                </div>
                <p className="font-semibold text-lg leading-8">"It’s more than just a messaging app—it’s my go-to tool for staying in touch with everyone I care about."</p>
                <hr className="border-white/5" />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-5">Olivia Harris</p>
                    <p className="leading-5">UI Designer</p>
                  </div>
                  <div className="flex rounded-full size-[50px] overflow-hidden">
                    <img src="/assets/images/photos/photo-2.png" className="w-full h-full object-cover" alt="photo" />
                  </div>
                </div>
              </div>
              <div className="card bg-white/[9%] flex flex-col w-[430px] shrink-0 rounded-3xl p-5 gap-4 text-white">
                <div className="flex items-center gap-[2px]">
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                </div>
                <p className="font-semibold text-lg leading-8">"It’s more than just a messaging app—it’s my go-to tool for staying in touch with everyone I care about."</p>
                <hr className="border-white/5" />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-5">Olivia Harris</p>
                    <p className="leading-5">UI Designer</p>
                  </div>
                  <div className="flex rounded-full size-[50px] overflow-hidden">
                    <img src="/assets/images/photos/photo-3.png" className="w-full h-full object-cover" alt="photo" />
                  </div>
                </div>
              </div>
              <div className="card bg-white/[9%] flex flex-col w-[430px] shrink-0 rounded-3xl p-5 gap-4 text-white">
                <div className="flex items-center gap-[2px]">
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                </div>
                <p className="font-semibold text-lg leading-8">"It’s more than just a messaging app—it’s my go-to tool for staying in touch with everyone I care about."</p>
                <hr className="border-white/5" />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-5">Olivia Harris</p>
                    <p className="leading-5">UI Designer</p>
                  </div>
                  <div className="flex rounded-full size-[50px] overflow-hidden">
                    <img src="/assets/images/photos/photo-4.png" className="w-full h-full object-cover" alt="photo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider w-max">
            <div className="slide-right flex gap-8 flex-nowrap pr-8">
              <div className="card bg-white/[9%] flex flex-col w-[430px] shrink-0 rounded-3xl p-5 gap-4 text-white">
                <div className="flex items-center gap-[2px]">
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                </div>
                <p className="font-semibold text-lg leading-8">"It’s more than just a messaging app—it’s my go-to tool for staying in touch with everyone I care about."</p>
                <hr className="border-white/5" />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-5">Olivia Harris</p>
                    <p className="leading-5">UI Designer</p>
                  </div>
                  <div className="flex rounded-full size-[50px] overflow-hidden">
                    <img src="/assets/images/photos/photo-1.png" className="w-full h-full object-cover" alt="photo" />
                  </div>
                </div>
              </div>
              <div className="card bg-white/[9%] flex flex-col w-[430px] shrink-0 rounded-3xl p-5 gap-4 text-white">
                <div className="flex items-center gap-[2px]">
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                </div>
                <p className="font-semibold text-lg leading-8">"It’s more than just a messaging app—it’s my go-to tool for staying in touch with everyone I care about."</p>
                <hr className="border-white/5" />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-5">Olivia Harris</p>
                    <p className="leading-5">UI Designer</p>
                  </div>
                  <div className="flex rounded-full size-[50px] overflow-hidden">
                    <img src="/assets/images/photos/photo-2.png" className="w-full h-full object-cover" alt="photo" />
                  </div>
                </div>
              </div>
              <div className="card bg-white/[9%] flex flex-col w-[430px] shrink-0 rounded-3xl p-5 gap-4 text-white">
                <div className="flex items-center gap-[2px]">
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                </div>
                <p className="font-semibold text-lg leading-8">"It’s more than just a messaging app—it’s my go-to tool for staying in touch with everyone I care about."</p>
                <hr className="border-white/5" />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-5">Olivia Harris</p>
                    <p className="leading-5">UI Designer</p>
                  </div>
                  <div className="flex rounded-full size-[50px] overflow-hidden">
                    <img src="/assets/images/photos/photo-3.png" className="w-full h-full object-cover" alt="photo" />
                  </div>
                </div>
              </div>
              <div className="card bg-white/[9%] flex flex-col w-[430px] shrink-0 rounded-3xl p-5 gap-4 text-white">
                <div className="flex items-center gap-[2px]">
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                </div>
                <p className="font-semibold text-lg leading-8">"It’s more than just a messaging app—it’s my go-to tool for staying in touch with everyone I care about."</p>
                <hr className="border-white/5" />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-5">Olivia Harris</p>
                    <p className="leading-5">UI Designer</p>
                  </div>
                  <div className="flex rounded-full size-[50px] overflow-hidden">
                    <img src="/assets/images/photos/photo-4.png" className="w-full h-full object-cover" alt="photo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-max flex-nowrap mt-[32px] mb-[100px]">
          <div className="slider w-max">
            <div className="slide-left flex gap-8 flex-nowrap pr-8">
              <div className="card bg-white/[9%] flex flex-col w-[430px] shrink-0 rounded-3xl p-5 gap-4 text-white">
                <div className="flex items-center gap-[2px]">
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                </div>
                <p className="font-semibold text-lg leading-8">"It’s more than just a messaging app—it’s my go-to tool for staying in touch with everyone I care about."</p>
                <hr className="border-white/5" />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-5">Olivia Harris</p>
                    <p className="leading-5">UI Designer</p>
                  </div>
                  <div className="flex rounded-full size-[50px] overflow-hidden">
                    <img src="/assets/images/photos/photo-1.png" className="w-full h-full object-cover" alt="photo" />
                  </div>
                </div>
              </div>
              <div className="card bg-white/[9%] flex flex-col w-[430px] shrink-0 rounded-3xl p-5 gap-4 text-white">
                <div className="flex items-center gap-[2px]">
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                </div>
                <p className="font-semibold text-lg leading-8">"It’s more than just a messaging app—it’s my go-to tool for staying in touch with everyone I care about."</p>
                <hr className="border-white/5" />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-5">Olivia Harris</p>
                    <p className="leading-5">UI Designer</p>
                  </div>
                  <div className="flex rounded-full size-[50px] overflow-hidden">
                    <img src="/assets/images/photos/photo-2.png" className="w-full h-full object-cover" alt="photo" />
                  </div>
                </div>
              </div>
              <div className="card bg-white/[9%] flex flex-col w-[430px] shrink-0 rounded-3xl p-5 gap-4 text-white">
                <div className="flex items-center gap-[2px]">
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                </div>
                <p className="font-semibold text-lg leading-8">"It’s more than just a messaging app—it’s my go-to tool for staying in touch with everyone I care about."</p>
                <hr className="border-white/5" />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-5">Olivia Harris</p>
                    <p className="leading-5">UI Designer</p>
                  </div>
                  <div className="flex rounded-full size-[50px] overflow-hidden">
                    <img src="/assets/images/photos/photo-3.png" className="w-full h-full object-cover" alt="photo" />
                  </div>
                </div>
              </div>
              <div className="card bg-white/[9%] flex flex-col w-[430px] shrink-0 rounded-3xl p-5 gap-4 text-white">
                <div className="flex items-center gap-[2px]">
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                </div>
                <p className="font-semibold text-lg leading-8">"It’s more than just a messaging app—it’s my go-to tool for staying in touch with everyone I care about."</p>
                <hr className="border-white/5" />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-5">Olivia Harris</p>
                    <p className="leading-5">UI Designer</p>
                  </div>
                  <div className="flex rounded-full size-[50px] overflow-hidden">
                    <img src="/assets/images/photos/photo-4.png" className="w-full h-full object-cover" alt="photo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider w-max">
            <div className="slide-left flex gap-8 flex-nowrap pr-8">
              <div className="card bg-white/[9%] flex flex-col w-[430px] shrink-0 rounded-3xl p-5 gap-4 text-white">
                <div className="flex items-center gap-[2px]">
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                </div>
                <p className="font-semibold text-lg leading-8">"It’s more than just a messaging app—it’s my go-to tool for staying in touch with everyone I care about."</p>
                <hr className="border-white/5" />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-5">Olivia Harris</p>
                    <p className="leading-5">UI Designer</p>
                  </div>
                  <div className="flex rounded-full size-[50px] overflow-hidden">
                    <img src="/assets/images/photos/photo-1.png" className="w-full h-full object-cover" alt="photo" />
                  </div>
                </div>
              </div>
              <div className="card bg-white/[9%] flex flex-col w-[430px] shrink-0 rounded-3xl p-5 gap-4 text-white">
                <div className="flex items-center gap-[2px]">
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                </div>
                <p className="font-semibold text-lg leading-8">"It’s more than just a messaging app—it’s my go-to tool for staying in touch with everyone I care about."</p>
                <hr className="border-white/5" />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-5">Olivia Harris</p>
                    <p className="leading-5">UI Designer</p>
                  </div>
                  <div className="flex rounded-full size-[50px] overflow-hidden">
                    <img src="/assets/images/photos/photo-2.png" className="w-full h-full object-cover" alt="photo" />
                  </div>
                </div>
              </div>
              <div className="card bg-white/[9%] flex flex-col w-[430px] shrink-0 rounded-3xl p-5 gap-4 text-white">
                <div className="flex items-center gap-[2px]">
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                </div>
                <p className="font-semibold text-lg leading-8">"It’s more than just a messaging app—it’s my go-to tool for staying in touch with everyone I care about."</p>
                <hr className="border-white/5" />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-5">Olivia Harris</p>
                    <p className="leading-5">UI Designer</p>
                  </div>
                  <div className="flex rounded-full size-[50px] overflow-hidden">
                    <img src="/assets/images/photos/photo-3.png" className="w-full h-full object-cover" alt="photo" />
                  </div>
                </div>
              </div>
              <div className="card bg-white/[9%] flex flex-col w-[430px] shrink-0 rounded-3xl p-5 gap-4 text-white">
                <div className="flex items-center gap-[2px]">
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                  <img src="/assets/images/icons/Star 1.svg" className="flex shrink-0" alt="star" />
                </div>
                <p className="font-semibold text-lg leading-8">"It’s more than just a messaging app—it’s my go-to tool for staying in touch with everyone I care about."</p>
                <hr className="border-white/5" />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-5">Olivia Harris</p>
                    <p className="leading-5">UI Designer</p>
                  </div>
                  <div className="flex rounded-full size-[50px] overflow-hidden">
                    <img src="/assets/images/photos/photo-4.png" className="w-full h-full object-cover" alt="photo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage
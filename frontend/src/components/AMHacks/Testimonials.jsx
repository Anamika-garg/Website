import {useState, useEffect} from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {

    
    const [currentIndex, setCurrentIndex] = useState(0);

    const tests = [
        {
            id: 1,
            quote: " \" Winning AM Hacks'25 was an incredible source of learning & growth in the Web3 world! 🏆🚀\n The chance to brainstorm ideas with amazing mentors & guidance of Aptos judges was truly priceless. \n Thankful to @AM_igdtuw for conducting such an amazing hackathon 💫\"",
            name: "Arnav",
            x_id : "@ArnavKirti"
        },
        {
            id: 2,
            quote: "\" Big love to @AM_igdtuw for powering the delhi stop!⚡\n They're bringing real builder vibes, strong community energy, and helping us make Delhi a core memory for the tour. Make some noise. 🔊 \"",
            name: "ActualOne",
            x_id : "@ActualOnexyz"
        },        
        {
            id: 3,
            quote: "\" KRNL Dekoded Tour kicked off in Dilwalon ki shehar Dilli ❤️ \n No fluff. Just raw modular infra alpha from @KRNL_xyz \n Think smart contracts, but actually modular, composable, and dev-friendly⚒️ \n @Muskanjain0401 kickstarted the show in style ⚡ \n Here's what went down : \n > Kernels = the new building blocks for onchain apps \n > No more bloated monoliths think reusable logic.\n> Kernels make it easier to integrate agentic behavior into dApps \"",
            name: "ActualOne",
            x_id : "@ActualOnexyz"
        },
        {
            id: 4,
            quote: "\" Forgot to post it before, conducted an event on 25th September at IGDTUW with @MEXC_Official & @Build3DAO! 🚀 \nThanks to @AM_igdtuw team (especially to @palakbansl26) for all the support.\" ",
            name: "Bhavyam Arora",
            x_id : "@AroraBhavyam"
        },
        {
            id: 5,
            quote: "\" It was a great experience to host event with MEXC Foundation! \n Also, special mention to whole @AM_igdtuw team who helped us to execute the event end to end.🫶 \"",
            name: "Build3 DAO",
            x_id : "@Build3DAO"
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        },3800); 

        return () => clearInterval(interval);
    }, [currentIndex]);


    const nextSlide  = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === tests.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? tests.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const getVisibleTestimonials = () => {
        const prevIndex = currentIndex === 0 ? tests.length - 1 : currentIndex - 1;
        const nextIndex = currentIndex === tests.length - 1 ? 0 : currentIndex + 1;
    
        return [
            { ...tests[prevIndex], position: 'left' },
            { ...tests[currentIndex], position: 'center' },
            { ...tests[nextIndex], position: 'right' }
        ];
    }

    const visibleTestimonials = getVisibleTestimonials();
    return (
         <div className="min-h-screen bg--900 flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-400 mb-2" style={{ color: "oklch(82.8% 0.189 84.429)" }}>
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-500 mx-auto" style={{ backgroundColor: "oklch(41.4% 0.112 45.904)" }}></div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  testimonial.position === 'center'
                    ? 'lg:scale-110 z-20'
                    : 'lg:scale-90 lg:opacity-60 z-10'
                }`}
              >
                <div className={`rounded-3xl p-8 min-h-[400px] flex flex-col ${
                  testimonial.position === 'center'
                    ? 'bg--800 border-2 border-400/40'
                    : 'bg--800/60 border border-400/20'
                }`} style={{ borderColor: "oklch(60% 0.189 84.429)" }}>
                  <div className="text-orange-400 text-5xl mb-4 font-serif">"</div>
                  
                  <p className={`text-white mb-6 flex-grow leading-relaxed ${
                    testimonial.position === 'center' ? 'text-lg' : 'text-base'
                  }`} style={{fontFamily: 'sans-serif', color: "oklch(92.9% 0.013 255.508)"}}>
                    {testimonial.quote}
                  </p>

                  <div className="w-12 h-0.5 bg-orange-400 mb-4"></div>

                  <div>
                    <h3 className="text-white text-lg font-semibold mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {testimonial.x_id}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="bg-orange-900/50 hover:bg-orange-800/70 text-400 rounded-full p-3 transition-colors"
              aria-label="Previous testimonial"
              style={{ color: "oklch(82.8% 0.189 84.429)" }}
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {tests.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'w-8 bg-orange-400' 
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-orange-900/50 hover:bg-orange-800/70 text-orange-400 rounded-full p-3 transition-colors"
              aria-label="Next testimonial"
              style={{ color: "oklch(82.8% 0.189 84.429)" }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Testimonials;


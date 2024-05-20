import Layout from "@/layout";
import { FontManrope, FontSpaceMono } from "@/utils/typography";
import { motion, useScroll, useTransform } from 'framer-motion';

type Props = {}

const index = (props: Props) => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.1], [2, 1]);
    const y = useTransform(scrollYProgress, [0, 0.1], [-200, 0]);

    const boxes = Array.from({ length: 12 }, (_, index) => (
        <motion.div
            key={index}
            className={`w-[260px] bg-[#FFFFFF] h-[350px] border-2 border-black rounded-lg shadow-brut-sm flex flex-col`}
            initial={{ opacity: 0, scale: 2, y: -200 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
        >
            <div className={`bg-[#D9D9D9] w-[250px] h-[250px] self-center mt-1 border-black border-2 rounded-lg`}></div>
            <label className={`uppercase ${FontSpaceMono.className} font-bold`}>caption<span className="text-red-600">*</span></label>
            <p>Include instructions and guidelines here.</p>
        </motion.div>
    ));

    return (
        <Layout showFooter={false}>
            <section id="first" className=" h-screen w-fit grid grid-cols-[50%_1fr] gap-8">
                <div className="pt-8">
                    <h1 className={`${FontSpaceMono.className} text-[46px] font-bold text-black uppercase`}>
                        Get paid to shape the future of ai
                    </h1>
                    <p className={`${FontManrope.className} font-semibold text-xl text-black text-opacity-50 pr-2`}>
                        Earn TAO through responding to AI-generated tasks across various domains. Join the crowd-sourced effort to build the world's most powerful multimodal AI models.
                    </p>
                    <button className={` hover:shadow-brut-sm hover:opacity-75 border-0 uppercase bg-[#00B6A6] px-4 py-2 text-white ${FontSpaceMono.className} font-bold text-lg border rounded-xl mt-[13px]`}>
                        Let's Start
                    </button>
                </div>
                <div>
                    {/* Add content for the second column */}
                    <div className={`w-[260px] bg-[#FFFFFF] h-[350px] border-2 border-black rounded-lg shadow-brut-sm flex flex-col`}>
                        <div className={`bg-[#D9D9D9] w-[250px] h-[250px] self-center mt-1 border-black border-2 rounded-lg`}></div>
                        <label className={`p-2 uppercase ${FontSpaceMono.className} font-bold`}>caption<span className="text-red-600">*</span></label>
                        <p className="px-2 text-xs">Include instructions and guidelines here.</p>
                        {/* <InputField className="w-fit"/> */}
                    </div>
                </div>
            </section>
            <motion.section
                id="second"
                className="h-screen bg-red-900 w-full flex flex-col items-center justify-center"
            >
                <motion.div
                    initial={{ scale: 900, y: -200 }}
                    animate={{ scale: 1, y: 0 }}
                    className={`w-[1000px] h-[167px] border-4 border-black rounded-lg shadow-brut-sm mb-8 flex flex-col justify-center items-center gap-4 transform -rotate-12 -translate-y-20`}
                    style={{
                        background: 'linear-gradient(to bottom, #D7F9F6, #F9FFFE)',
                        opacity, scale, y
                    }}
                >
                    <h1 className={`text-center text-3xl font-bold ${FontManrope.className}`}>Work anytime from anywhere</h1>
                    <p className={`${FontManrope.className} font-bold text-lg`}>Enjoy the freedom to work on tasks at your convenience from any location</p>
                </motion.div>
                <motion.div
                    className={`w-[1000px] h-[167px] border-4 border-black rounded-lg shadow-brut-sm mb-8 flex flex-col justify-center items-center gap-4`}
                    style={{
                        background: 'linear-gradient(to bottom, #D7F9F6, #F9FFFE)',
                    }}
                >
                    <h1 className={`text-center text-3xl font-bold ${FontManrope.className}`}>Work anytime from anywhere</h1>
                    <p className={`${FontManrope.className} font-bold text-lg`}>Enjoy the freedom to work on tasks at your convenience from any location</p>
                </motion.div>
                <motion.div
                    className={`w-[1000px] h-[167px] border-4 border-black rounded-lg shadow-brut-sm flex flex-col justify-center items-center gap-4 transform rotate-12 translate-y-20`}
                    style={{
                        background: 'linear-gradient(to bottom, #D7F9F6, #F9FFFE)',
                    }}
                >
                    <h1 className={`text-center text-3xl font-bold ${FontManrope.className}`}>Work anytime from anywhere</h1>
                    <p className={`${FontManrope.className} font-bold text-lg`}>Enjoy the freedom to work on tasks at your convenience from any location</p>
                </motion.div>
            </motion.section>
            {/* <section 
                id="third" 
                className=""
            >
                <h1 className={`${FontSpaceMono.className} font-bold text-5xl uppercase`}>How does it work?</h1>
                <p className={`${FontManrope.className} font-bold text-2xl opacity-60`}>Five simple steps to get you started!</p>
                <div className="flex gap-2">
                <div className='w-[393px] h-[312px] bg-black border-2 shadow-brut-sm border-black rounded-2xl mr-[49px] relative'>
                    <div className="px-[11px] py-[9px] w-fit bg-white relative">
                        <h1 className="uppercase">Step 1</h1>
                    </div>
                    <div >
                        <img src="./step1.png" className="w-full mt-9 p-2"/>
                    </div>
                </div>
                    <div className='w-full h-[312px] bg-white rounded-2xl'>
                        
                    </div>
                </div>
            </section> */}
        </Layout>
    )
}

export default index
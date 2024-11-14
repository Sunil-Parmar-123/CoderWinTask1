import React from 'react';
import "@fontsource/inter";

function AboutUs() {
    return (
        <section className="relative w-[1436px] h-[758px] p-[50px]">
            <div className='absolute top-[206px] left-[119px] w-[240px] h-[183px] font-sans text-[50px] font-bold leading-[60.51px] text-center text-[#5676FF]  decoration-slice hover:underline hover:decoration-blue-400'>
                Welcome to smart Academy
            </div>

            <div class="absolute top-[434px] left-[129px] w-[310px] h-[72px] gap-0   font-sans text-[20px] font-medium leading-[24.2px] text-left text-[#363636] underline decoration-[#ffffff] decoration-slice hover:underline hover:decoration-blue-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor.
            </div>

            <div className='bg-[url("/r11.png")] w-[421px] h-[648px] absolute top-[110px] left-[454px] z-0 '>
            </div>

            <div className='bg-[url("/r10.png")] w-[357px] h-[548px] absolute top-[210px] left-[486px] z-10 bg-cover bg-no-repeat'>
            </div>
            <div class="w-[247px] h-[51px] absolute top-[256px] left-[937px] font-inter text-[42px] font-bold leading-[50.83px] text-left hover:underline hover:decoration-blue-400 text-[#5676FF]">
                Our Mission
            </div>
            <div class="w-[409px] h-[96px] absolute top-[362px] left-[937px] font-inter text-[20px] font-normal leading-[24.2px] text-left hover:underline hover:decoration-blue-400 decoration-slice text-[#363636]">
                Lorem ipsum dolor sit amet, consectetur elit. Etiam condimentum leo sed nisi vehicula, fringilla ante tincidunt. Sed sit amet
            </div>
            <div class="w-[420px] h-[99px] absolute top-[504px] left-[922px] justify-between flex">
                <div class="w-[110px] h-[99px] justify-between">
                    <div class="w-[110px] h-[41px] text-[#5676FF] font-ubuntu text-[36px] font-medium leading-[41.36px] text-center hover:underline hover:decoration-blue-400 ">
                        <h3>10+</h3>
                    </div>
                    <div class="w-[110px] h-[50px] text-[#363636] font-mulish text-[20px] font-normal leading-[25.1px] text-center hover:underline hover:decoration-blue-400">
                        Years Experience
                    </div>
                </div>

                <div class="w-[110px] h-[99px] justify-between">
                    <div class="w-[110px] h-[41px] text-[#5676FF] font-ubuntu text-[36px] font-medium leading-[41.36px] text-center hover:underline hover:decoration-blue-400 ">
                        <h3>29+</h3>
                    </div>
                    <div class="w-[110px] h-[50px] text-[#363636] font-mulish text-[20px] font-normal leading-[25.1px] text-center hover:underline hover:decoration-blue-400">
                        Total Course
                    </div>
                </div>

                <div class="w-[110px] h-[99px] justify-between">
                    <div class="w-[110px] h-[41px] text-[#5676FF] font-ubuntu text-[36px] font-medium leading-[41.36px] text-center hover:underline hover:decoration-blue-400 ">
                        <h3>50K+</h3>
                    </div>
                    <div class="w-[110px] h-[50px] text-[#363636] font-mulish text-[20px] font-normal leading-[25.1px] text-center hover:underline hover:decoration-blue-400">
                        Student Active
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs

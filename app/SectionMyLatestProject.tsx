"use client";

import { assets } from "@/constant/assets.1";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FiFigma } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import styles from "./home.module.css";

const tabs = [
    {
        name: 'Licences',
        image: assets.home.myLatestProject.suitcase,
        data: [
            {
                title: 'Customer Relation Management (CRM)',
                image: assets.home.myLatestProject.projects.crm,
                repositoryUrl: "https://www.life-global.org/",
            },
            {
                title: 'Agile Scrum Master (ASM®)',
                image: assets.home.myLatestProject.projects.asm,
                repositoryUrl: "https://lms.simplilearn.com/dashboard/certificate/",
            
            },
            {
                slug: 'transform-portfolio-design-to-web-app-3',
                title: 'Operational Management',
                image: assets.home.myLatestProject.projects.great,
                repositoryUrl: "https://olympus.mygreatlearning.com/courses/63781/certificate",
            },
            {
                slug: 'transform-portfolio-design-to-web-app-4',
                title: 'Business Anlayst and Project Management',
                image: assets.home.myLatestProject.projects.link,
                repositoryUrl: "https://www.linkedin.com/learning/",
    
            },
            {
                slug: 'transform-portfolio-design-to-web-app-5',
                title: 'Agile Project Management',
                image: assets.home.myLatestProject.projects.udemy,
                repositoryUrl: "https://www.udemy.com/certificate/UC-ebfb2cba-851f-40c9-9c1b-71ec16b95563/",
            }
            
        ]
    },
    {
        name: 'Projects',
        image: assets.home.myLatestProject.figma,
        data: [
            {
                slug: 'portfolio-web-design',
                title: 'Mobile App Design',
                image: assets.home.myLatestProject.projects.figma1,
                repositoryUrl: "https://www.figma.com/design/3FSjRhGxRHWY3oWQT8RuRP/Quiz-Game-UI-Satyam?node-id=0-1&t=5gSzmQlJ73wnravk-1",
                
            },
            {
                slug: 'portfolio-web-design',
                title: 'Web Design',
                image: assets.home.myLatestProject.projects.figma1,
                repositoryUrl: "https://www.figma.com/file/SUc96aoApv9SlXXMozfssO/Pink?type=design&node-id=0-1&mode=design&t=eyisPaQo2FfCRvRd-0",
                
            },
        ],
    },
    
];

tabs.push({
    name: 'More',
    image: assets.home.myLatestProject.rocket,
    data: []
});

export default function SectionMyLatestProject() {
    const [activeTab, setActiveTab] = useState(0);

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const router = useRouter();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const tab = urlParams.get('tab');
        if (tab && parseInt(tab) < tabs.length - 1) {
            setActiveTab(parseInt(tab));
        }
    }, [activeTab])

    return (
        <section ref={ref} className={`safe-x-padding ${styles.sectionDistance}`} aria-label='My Liecence and Certificate'>
            <div className='text-center'>
                <motion.h2 initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5 }} className={styles.sectionTitle}>My Licences and Certificate</motion.h2>
                <motion.p initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.7 }} className={`${styles.sectionDescription} max-w-[706px] mx-auto`}>Take a look at my advanced training complements my hands-on expertise, driving successful project outcomes and optimizing processes.</motion.p>
            </div>
            <div className='mt-[50px] h-full'>
                <div className='flex flex-col items-center justify-center md:items-start md:flex-row gap-9'>
                    <div className='flex flex-row md:flex-col bg-gray p-3 md:p-[26px] rounded-2xl md:rounded-[25px] gap-x-3 md:gap-x-0 gap-y-[26px]'>
                        {tabs.map((tab, index) => (
                            <motion.button
                                key={index.toString()}
                                className={`relative ${activeTab === index ? 'gradient-bg' : 'bg-white'} w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-2xl md:rounded-[25px] flex justify-center items-center shadow-xl overflow-hidden`}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                onClick={() => {
                                    if (index === tabs.length - 1) {
                                        router.push('/project');
                                        return;
                                    }
                                    setActiveTab(index);
                                    window.history.pushState({}, '', `?tab=${index}`);
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Image
                                    src={tab.image}
                                    alt=""
                                    width={100}
                                    height={100}
                                    style={{ height: 'auto' }}
                                />
                                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-opacity duration-300 opacity-0 bg-gray/10 backdrop-blur-sm rounded-2xl md:rounded-[25px] hover:opacity-100 md:text-2xl">
                                    <p className={`${activeTab === index ? 'text-white' : 'text-accent'} font-bold transition-colors duration-75 ease-in-out`}>{tab.name}</p>
                                </div>
                            </motion.button>

                        ))}
                    </div>
                    <div className='overflow-hidden'>
                        <div className='bg-gray rounded-[36px] p-[26px] w-full h-[600px] overflow-y-auto'>
                            <div className='grid grid-flow-row grid-cols-12 gap-[26px]'>
                                {tabs.map((tab, tabIndex) =>
                                    tab.data.map((item, dataIndex) =>
                                        activeTab === tabIndex && (
                                            <motion.div
                                                key={dataIndex.toString()}
                                                className="relative col-span-12 overflow-hidden group xl:col-span-6"
                                                initial={{ opacity: 0, x: -50 }}
                                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ duration: 0.5 }}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <div className="col-span-6">
                                                    <motion.div
                                                        className="bg-white p-[26px] rounded-2xl md:rounded-[25px]"
                                                        initial={{ opacity: 0, x: -50 }}
                                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                                        transition={{ duration: 0.5, delay: 0.2 + dataIndex * 0.1 }}
                                                    >
                                                        <Image
                                                            className="object-contain w-full h-auto"
                                                            src={item.image}
                                                            alt=""
                                                            width={441}
                                                            height={261}
                                                            priority
                                                        />
                                                    </motion.div>
                                                </div>
                                                <div className='absolute top-0 bottom-0 left-0 right-0 hidden transition-all duration-300 gap-y-2 group-hover:block bg-gray/10 backdrop-blur-sm rounded-2xl'>
                                                    <div className='flex flex-col items-center justify-center w-full h-full select-none lg:select-auto'>
                                                        <p className="p-8 text-xl font-bold text-center transition-all duration-150 ease-in-out line-clamp-1">{item.title}</p>
                                                        <div className='flex flex-row gap-4 text-3xl'>
                                                            {item.repositoryUrl && (
                                                                <Link
                                                                    className="p-4 transition-all duration-150 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
                                                                    href={{
                                                                        pathname: item.repositoryUrl,
                                                                        query: {
                                                                            utm_source: 'deri.my.id',
                                                                            utm_medium: 'campaign',
                                                                            utm_campaign: 'portfolio'
                                                                        }
                                                                    }}
                                                                    target='_blank'
                                                                    title="Repository"
                                                                >
                                                                    {tabs[activeTab].name.toLowerCase() === "project" ? (
                                                                        <BsGithub />
                                                                    ) : (
                                                                        <FiFigma />
                                                                    )}
                                                                </Link>
                                                            )}
                                    
                                                                
                                                    
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

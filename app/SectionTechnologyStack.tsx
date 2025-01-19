'use client';

import { assets } from "@/constant/assets.1";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import styles from './home.module.css';
const technologyStack = [
  {
    name: 'JIRA ',
    image: assets.home.technologyStack.jira,
    officialSite: 'https://www.atlassian.com/',
  },
  {
    name: 'Trello',
    image: assets.home.technologyStack.Trello,
    officialSite: 'https://trello.com/',
  },
  {
    name: 'React JS',
    image: assets.home.technologyStack.reactJs,
    officialSite: 'https://reactjs.org/',
  },
  {
    name: 'Power Bi',
    image: assets.home.technologyStack.PowerBi,
    officialSite: 'https://en.wikipedia.org/wiki/Microsoft_Power_BI/',
  },
  
  {
    name: 'MS Office',
    image: assets.home.technologyStack.msofc,
    officialSite: 'https://www.microsoft.com/',
  },
  {
    name: 'SQL',
    image: assets.home.technologyStack.SQL,
    officialSite: 'https://www.mysql.com/',
  },
  {
    name: 'Dropbox',
    image: assets.home.technologyStack.dropbox,
    officialSite: 'https://www.dropbox.com/',
  },
  {
    name: 'Waterfall',
    image: assets.home.technologyStack.waterfall,
    officialSite: 'https://www.pmi.org/',
  },
  {
    name: 'Java',
    image: assets.home.technologyStack.java,
    officialSite: 'https://www.oracle.com/java/',
  },
  {
    name: 'Harvest',
    image: assets.home.technologyStack.harvest,
    officialSite: 'https://www.getharvest.com/',
  },
  {
    name: 'HubSpot',
    image: assets.home.technologyStack.hubspot,
    officialSite: 'https://flutter.dev/',
  },
];

export default function SectionTechnologyStack() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className={`safe-x-padding ${styles.sectionDistance}`}>
      <div className='text-center'>
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className={styles.sectionTitle}
        >
          Technology Stack
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className={`${styles.sectionDescription} max-w-[960px] mx-auto`}
        >
          Prioritizing security and performance, I continuously update and
          integrate leading technologies to ensure optimal outcomes for my company and clients.
        </motion.p>
      </div>
      <div className='flex items-center justify-center mt-12'>
        <div className='flex flex-row gap-[50px] max-w-[864px] flex-wrap justify-center items-center'>
          {technologyStack.map((item, index) => (
            <div key={index.toString()} className='relative h-full'>
              <motion.div
                className='flex justify-center items-center w-[100px] h-[100px] transition-all duration-150 ease-in-out'
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  className='w-auto h-[100px]'
                  src={item.image}
                  width={0}
                  height={100}
                  alt={item.name}
                />
                <Link
                  href={{
                    pathname: item.officialSite,
                  }}
                  target='_blank'
                  title={`Figure out about ${item.name}`}
                >
                  <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full p-1 text-white transition-all duration-300 bg-opacity-50 opacity-0 gradient-bg hover:opacity-100 rounded-xl'>
                    <p className='font-semibold text-center line-clamp-3'>
                      {item.name}
                    </p>
                  </div>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FeedbackFish } from '@feedback-fish/react';
import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import ScrollToTop from 'react-scroll-to-top';
import { Tooltip } from 'react-tippy';

import Logo from '@/components/Logo';
export default function Footer() {
  const [copied, setcopied] = React.useState('Click the mail logo to copy my email.');
  return (
    <footer className='absolute mx-auto w-full  bg-primary py-14 leading-loose'>
      <div className='layout text- flex flex-col items-center text-slate-200'>
        <Logo className='mb-5' width='200' />
        <p>Copyright © {new Date().getFullYear()} - All rights reserved. </p>
        <FeedbackFish
          projectId={process.env.NEXT_PUBLIC_FEEDBACKFISH as string}
        >
          <button className='border-none'>Got any feedback?</button>
        </FeedbackFish>
        <div className='mt-3 grid grid-flow-col gap-4'>
          <Tooltip
            html={
              <div className='mb-2 inline-block rounded-sm border  border-gray-600 bg-dark p-2 text-xs text-gray-200 shadow-md '>
                {copied}
              </div>
            }
            hideOnClick={false}
            position='top'
            trigger='mouseenter'
            interactive
          >
            <CopyToClipboard
              text='sebastiankeilby@outlook.com'
              onCopy={() => {
                setcopied('Copied');
                setTimeout(
                  () => setcopied('Click the mail logo to copy my email.'),
                  1500
                );
              }}
            >
              <MdOutlineMail className='mt-[-3px] h-8 w-7 cursor-pointer text-slate-200' />
            </CopyToClipboard>
          </Tooltip>
          <Tooltip
            html={
              <div className='mb-2 inline-block rounded-sm border  border-gray-600 bg-dark p-2 text-xs text-gray-200 shadow-md '>
                See my projects on GitHub.
              </div>
            }
            hideOnClick={false}
            position='top'
            trigger='mouseenter'
            interactive
          >
            <a
              href='https://github.com/sebastiankeilby'
              target='_blank'
              rel='noreferrer'
              aria-label='linkedin'
            >
              <BsGithub className='h-6 w-6 cursor-pointer text-slate-200' />
            </a>
          </Tooltip>
          <Tooltip
            html={
              <div className='mb-2 inline-block rounded-sm border  border-gray-600 bg-dark p-2 text-xs text-gray-200 shadow-md '>
                Find me on LinkedIn.
              </div>
            }
            hideOnClick={false}
            position='top'
            trigger='mouseenter'
            interactive
          >
            <a
              href='https://www.linkedin.com/in/sebastiankeilby/'
              target='_blank'
              rel='noreferrer'
              aria-label='linkedin'
            >
              <FaLinkedin className='h-6 w-6 cursor-pointer text-slate-200' />
            </a>
          </Tooltip>
        </div>
      </div>
      <ScrollToTop
        className='fixed right-10 bottom-10 z-50 flex h-10 w-10 items-center justify-center rounded-md border-none bg-primary-focus text-slate-200  shadow-sm
            dark:bg-gray-700  dark:text-slate-100 dark:hover:bg-gray-800'
        smooth
        aria-label='scroll to top'
        component={<AiOutlineArrowUp className='h-6 w-6' />}
      />
    </footer>
  );
}

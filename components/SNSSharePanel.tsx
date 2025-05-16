'use client'

import { useState } from 'react'
import {
  TwitterShareButton,
  FacebookShareButton,
  LineShareButton,
  HatenaShareButton,
  XIcon,
  FacebookIcon,
  LineIcon,
  HatenaIcon,
} from 'react-share'

import { motion, AnimatePresence } from 'framer-motion'

const shareUrl = 'https://dd2030.org/'
const shareTitle = 'デジタル民主主義2030プロジェクトポータルサイト'

const SNSButtons = () => (
  <>
    <HatenaShareButton url={shareUrl} title={shareTitle}>
      <HatenaIcon size={32} round />
    </HatenaShareButton>
    <LineShareButton url={shareUrl} title={shareTitle}>
      <LineIcon size={32} round />
    </LineShareButton>
    <FacebookShareButton url={shareUrl}>
      <FacebookIcon size={32} round />
    </FacebookShareButton>
    <TwitterShareButton url={shareUrl} title={shareTitle}>
      <XIcon size={32} round />
    </TwitterShareButton>
  </>
)

export default function SNSSharePanel({ className = '' }: { className?: string }) {
  const [visible, setVisible] = useState(false)

  return (
    <div className={`relative flex items-center gap-2 ${className}`}>
      {/* SNSボタン：PC表示（横） */}
      <AnimatePresence>
        {visible && (
          <motion.div
            className="hidden sm:flex gap-3 mr-1"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <SNSButtons />
          </motion.div>
        )}
      </AnimatePresence>

      {/* SHAREボタン */}
      <button
        className={`text-sm font-normal px-3 py-0.5 rounded-none transition z-10
    ${visible ? 'bg-white text-black border border-black' : 'bg-black text-white border border-black hover:bg-gray-700 hover:text-white'
    }`}
        onClick={() => setVisible((v) => !v)}
      >
        SHARE
      </button>

      {/* SNSボタン：スマホ表示（下に表示） */}
      <AnimatePresence>
        {visible && (
          <motion.div
            className="sm:hidden absolute top-full mt-2 right-0 flex gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <SNSButtons />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

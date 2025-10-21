'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import { CopyToClipboard } from 'react-copy-to-clipboard'

const CopyLink = ({ title, href }) => {
  const [copied, setCopied] = useState(false)

  return (
    <div className="relative z-[999]">
      <CopyToClipboard onCopy={() => setCopied(true)} text={title}>
        <div className="flex justify-center items-center w-full p-3 space-x-2">
          <Link href={href} className="">
            {title}
          </Link>
          <div className="flex flex-row items-center space-x-2 cursor-pointer text-covey-600 hover:text-covey-700">
            {copied ? '👍' : '📋'}{' '}
          </div>
        </div>
      </CopyToClipboard>
      {copied && <div className="text-xs text-green-400">Event link copied!</div>}
    </div>
  )
}

export default CopyLink

'use client'

import React from 'react'
import { FileUploaderRegular } from '@uploadcare/react-uploader/next'
import '@uploadcare/react-uploader/core.css'

type Props = {
  onUpload: (cdnUrl: string) => void
}

const UploadCareButton = ({ onUpload }: Props) => {
  return (
    <div>
      <FileUploaderRegular
        pubkey="b23e4cb4f97007851848"
        sourceList="local, camera, gdrive, dropbox, url"
        classNameUploader="uc-dark"
        onFileUploadSuccess={(fileInfo: any) => {
          if (fileInfo?.cdnUrl) {
            onUpload(fileInfo.cdnUrl)
          }
        }}
      />
    </div>
  )
}

export default UploadCareButton

declare namespace Comp {
  interface KeyValueTableItems {
    name?: string
    value?: string | number
  }

  interface KeyValueTableProps {
    details: KeyValueTableItems[]
    repeat: number
  }

  interface FileContentType {
    name: string
    isFile: boolean
    path: string
    description: string
    createdAt: string
    modifiedAt: string
    downloadUrl: string
    aiPdfUrl: string
  }

  interface DefaultPrompt {
    agent_type: string
    job_object_type: string
    job_type: string
    job_object_name: string
    last_modified: string
    default: boolean
    prompt: string
  }

  interface DriveDataType {
    path?: string
    folders: DriveContentType[] | []
    files: DriveContentType[] | []
  }
}

import {useState} from 'react'

export const useDragFile = () => {
  const [imagePreview, setImagePreview] = useState<
    string | ArrayBuffer | null
  >()
  const [imageFile, setImageFile] = useState<File | null>()
  const [isDragActive, setDragActive] = useState<boolean>(false)

  const cleanUp = () => {
    setImagePreview(null)
    setImageFile(null)
  }

  const imageHandler = (e: any) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImagePreview(reader.result)
        setImageFile(e.target.files[0])
      }
    }

    reader.readAsDataURL(e.target.files[0])
  }

  // handle drag events
  const handleDrag = (e: React.DragEvent<any>) => {
    e.preventDefault()
    e.stopPropagation()
    e.dataTransfer.effectAllowed = 'all'
    e.dataTransfer.dropEffect = 'move'

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  // triggers when file is dropped
  const handleDrop = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setImageFile(e.dataTransfer.files && e.dataTransfer.files[0])
      const reader = new FileReader()
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagePreview(reader.result)
        }
      }

      reader.readAsDataURL(e.dataTransfer.files[0])
    }
  }

  return {
    imagePreview,
    imageFile,
    isDragActive,
    imageHandler,
    handleDrag,
    handleDrop,
    cleanUp,
    setImagePreview
  }
}

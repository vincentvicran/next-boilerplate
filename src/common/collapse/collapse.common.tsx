import {useRef, useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

export const Collapse = ({
  id,
  title,
  content,
  iconVisible = true
}: Com.CollapseProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.body
        className="collapse"
        animate={{backgroundColor: isOpen ? '#f2f6ff' : '#fcfdff'}}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <motion.header initial={false} className="collapse-headings">
          {title}
          {iconVisible && (
            <div className="collapse-icons">
              <img
                src="/assets/images/faq-arrow.svg"
                loading="lazy"
                alt="down arrow"
                className={`collapse-arrow ${isOpen ? 'open' : ''}`}
              />
            </div>
          )}
        </motion.header>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.section
              key={`collapse-content-${id}`}
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: {opacity: 1, height: 'auto', scale: 1},
                collapsed: {opacity: 0, height: 0, scale: 0.9}
              }}
              transition={{duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98]}}
            >
              <div className="collapse-content">{content}</div>
            </motion.section>
          )}
        </AnimatePresence>
      </motion.body>
    </>
  )
}

export const CollapseOG = ({
  title,
  content,
  iconVisible = true
}: Com.CollapseProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const headingRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className={`collapse ${isOpen ? 'open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="collapse-headings" ref={headingRef}>
        {title}
        {iconVisible && (
          <div className="collapse-icons">
            <img
              src="/assets/images/faq-arrow.svg"
              loading="lazy"
              alt="down arrow"
              className={`collapse-arrow ${isOpen ? 'open' : ''}`}
            />
          </div>
        )}
      </div>
      {isOpen && (
        <div ref={contentRef} className="collapse-content">
          {content}
        </div>
      )}
    </div>
  )
}

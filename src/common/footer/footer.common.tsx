import {useNavigate} from 'react-router-dom'
import {HStack, VStack} from '../stack'

export const Footer = () => {
  const navigate = useNavigate()
  return (
    <VStack className="footer-react-container">
      <div className="footer-react-logo">
        <img
          src="/assets/images/v2k-ai-logo.svg"
          onClick={() => {
            window.open('https://v2k.ai', '_blank')
          }}
        />
      </div>
      <div className="footer-react">
        <div className="footer-react-text">
          © 2023 V2K Ai, Inc. All rights reserved.
        </div>
        <HStack className="footer-react-nav">
          <div
            className="footer-react-nav-text"
            onClick={() => {
              navigate('/privacy-policy')
            }}
          >
            Privacy Policy
          </div>
          {/* <div className="footer-react-nav-social-icon">
            <img src="/assets/images/x.svg" />
          </div>
          <div className="footer-react-nav-social-icon">
            <img src="/assets/images/youtube.svg" />
          </div>
          <div className="footer-react-nav-social-icon">
            <img src="/assets/images/linkedin.svg" />
          </div> */}
        </HStack>
      </div>
    </VStack>
  )
}

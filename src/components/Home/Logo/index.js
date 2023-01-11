import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import logos from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin)

  //   gsap
  //     .timeline()
  //     .to(bgRef.current, {
  //       duration: 1,
  //       opacity: 1,
  //     })
  //     .from(outlineLogoRef.current, {
  //       drawSVG: 0,
  //       duration: 20,
  //     })

  //   gsap.fromTo(
  //     solidLogoRef.current,
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       delay: 4,
  //       duration: 4,
  //     }
  //   )
  // }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        // ref={solidLogoRef}
        src={logos}
        // alt="JavaScript,  Developer"
      />

      {/* <svg
        width="135"
        height="198"
        viewBox="0 0 135 198"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M67.5 84L121.627 169.5H13.3734L67.5 84Z" fill="#1539FA" />
        <path
          d="M67.5 0L82.6547 43.1864H131.696L92.0208 69.8771L107.176 113.064L67.5 86.3729L27.8245 113.064L42.9792 69.8771L3.30369 43.1864H52.3453L67.5 0Z"
          fill="#DD1919"
        />
      </svg> */}
    </div>
  )
}

export default Logo;

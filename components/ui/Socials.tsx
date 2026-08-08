import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Socials() {
  return (
    <div className="flex gap-6">
  <a
    href="https://github.com/kaliprasadp7"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-black transition-all duration-300 hover:scale-110"
  >
    <FaGithub size={24} />
  </a>

  <a
    href="https://www.linkedin.com/in/kaliprasadp7/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-blue-600 transition-all duration-300 hover:scale-110"
  >
    <FaLinkedin size={24} />
  </a>

  <a href="mailto:kaliprasadp7@gmail.com" className="text-gray-500 hover:text-red-500 transition-all duration-300 hover:scale-110">
    <FaEnvelope size={24} />
  </a>
</div>
  )
}

export default Socials

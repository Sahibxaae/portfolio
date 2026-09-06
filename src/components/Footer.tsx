import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="
      bg-[#0E0F16]
      text-[#F5F5F0]
      w-full
      flex
      flex-row
      items-center
      justify-between
      px-5
      h-20
      border-t
      border-white/10
      font-mono-tech
      text-xs

      md:flex-col
      md:h-auto
      md:items-start
      md:py-3
    ">
        <Link to="/login" className="font-bold text-white hover:text-[#00F0FF] transition-colors cursor-pointer">
          MOHAMED SAHIB
        </Link>
        <p>&copy;2026 MOHAMED SAHIB. ALL SYSTEMS OPERATIONAL.</p>
        <Link to="/login" className="text-[#00F0FF] hover:underline">LOGIN ADMIN</Link>
    </div>
  )
}

export default Footer;
import logoImage from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src={logoImage} alt="logo" width={48} height={48} />
      <span className="text-4xl uppercase">Talion</span>
    </Link>
  )
}

export default Logo

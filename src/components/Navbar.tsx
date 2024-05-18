import LiveChecker from './LiveChecker'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between">
        <Logo />
        <div>
          <LiveChecker />
        </div>
      </div>
    </div>
  )
}

export default Navbar

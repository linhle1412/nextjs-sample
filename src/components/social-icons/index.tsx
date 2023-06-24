import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Twitter from './twitter.svg'

// Icons taken from: https://simpleicons.org/

const components: { [key: string]: any } = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  twitter: Twitter,
}

const SocialIcon = ({ kind, href, size = 8 }: { kind: string, href: string, size: number | string }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]
  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <img src={SocialSvg} alt={kind} />
    </a>
  )
}

export default SocialIcon

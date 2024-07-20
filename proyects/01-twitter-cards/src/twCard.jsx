import { useState } from "react"
export function TwCard({user, username}) {
    const [isFollowing, setIsFollowing] = useState(false)
    const handleFollow = () => {
        setIsFollowing(!isFollowing)
    }
    const txt = isFollowing ? 'Seguiendo' : 'Seguir'
  
    const btnClass = isFollowing ? 'tw-button tw-is-follow' : 'tw-button'
    return (
        <article className="tw-card">
            <header className='tw-card-header'>
                <img className='tw-avatar' src={`https://unavatar.io/${username}`} onClick={() => {}} alt="El avatar de midudev" />
                <div className='tw-div'>
                    <strong className='tw-strong'>{user}</strong>
                    <span className='tw-span'>@{username}</span>
                </div>
            </header>
            <aside className='tw-aside'>
                <button className={btnClass} onClick={handleFollow}><span className="txt-original">{txt}</span><span className="txt-hover">Dejar de Seguir</span></button>
            </aside>
        </article>
    )
}
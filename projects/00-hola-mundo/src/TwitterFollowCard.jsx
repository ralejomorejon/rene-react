import { useState } from "react"

export function TwitterFollowCard({children,userName}){
    const [isFollowing,setIsFollowing] = useState(false)
    const text = isFollowing ? 'Siguiendo':'Seguir'
    const buttonClassName = isFollowing ? 'btnFollowing':'btn'
    const imageSrc = `https://unavatar.io/${userName}`
    

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

return (
<article>
<header>
    <img alt="Avatar de René" src={imageSrc} />
    <div>
    <strong>{children}</strong>
    <span>{userName}</span>
    </div>
</header>

<aside>
<button className={buttonClassName} onClick={handleClick}>
<span className="follow">{text}</span>
<span className="stop-follow">Dejar de seguir</span></button>
</aside>

</article>
)
}
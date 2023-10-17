import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <>
      <TwitterFollowCard isFollowing userName="@ralejomorejon">
        René Alejo Morejón
      </TwitterFollowCard>
      
      <TwitterFollowCard isFollowing={false} userName="midudev">
        Miguel Angel Durán
      </TwitterFollowCard>
    </>
  );
}

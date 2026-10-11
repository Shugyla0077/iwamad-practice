import { createContext, useContext, useState, type ReactNode } from 'react'

export type LikesContextValue = {
  likes: number
  addLike: () => void
}

const LikesContext = createContext<LikesContextValue | null>(null)

export const LikesProvider = ({ children }: { children: ReactNode }) => {
  const [likes, setLikes] = useState<number>(0)

  const addLike = () => {
    setLikes((prev) => prev + 1)
  }

  return (
    <LikesContext.Provider value={{ likes, addLike }}>
      {children}
    </LikesContext.Provider>
  )
}

export const useLikes = (): LikesContextValue => {
  const context = useContext(LikesContext)
  if (!context) {
    throw new Error('useLikes must be used within a LikesProvider')
  }
  return context
}

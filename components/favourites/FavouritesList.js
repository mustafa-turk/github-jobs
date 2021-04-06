export default function FavouritesList({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

export function FavouritesListItem({ details }) {
  return (
    <div>
      {details.title}
    </div>
  )
}

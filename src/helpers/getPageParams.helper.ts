import {useLocation} from 'react-router-dom'

export function usePage() {
  const location = useLocation()
  const obj = new URLSearchParams(location.search)
  const page = obj.get('page')

  return Number(page || 1)
}

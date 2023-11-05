import {
  Params,
  useLocation,
  useParams as useParamFromDom
} from 'react-router-dom'

export function useQuery(queryStr: string | null = null) {
  const location = useLocation()

  const queryParams = new URLSearchParams(queryStr ?? location.search)

  const resultObject = {} as any
  for (const [key, value] of queryParams.entries()) {
    resultObject[key] = value
  }

  return resultObject
}

export function useParams(
  param?: string
): string | Readonly<Params<string>> | undefined {
  const params = useParamFromDom()

  return param ? params[param] : params
}

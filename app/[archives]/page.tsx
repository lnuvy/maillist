import getQueryClient from "@/app/_utils/query-client"
import { HydrationBoundary, dehydrate } from "@tanstack/react-query"
import React from "react"
import { NextPageProps } from "../_types/next"

interface ArchivesPageParams {

}


const ArchivesPage = async (props: NextPageProps<ArchivesPageParams>) => {
  // get Server queryClient
  const queryClient = getQueryClient()

  // Optional: define params
  const params = {}

  // prefetch query
  await queryClient.prefetchQuery({
    queryKey: [],
    queryFn: () => {},
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 60,
  })

  // prefetch infinite query
//   await queryClient.prefetchInfiniteQuery({
//     queryKey: ["archives"],
//     queryFn: () => {},
//     staleTime: 1000 * 60,
//     gcTime: 1000 * 60 * 60,
//   })

  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <div>ArchivesPage</div>
    </HydrationBoundary>
  )
}

export default ArchivesPage

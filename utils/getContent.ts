import { useDayjs } from '#dayjs'

export function insertCurrentYearToPosts(posts: any) {
  const dayjs = useDayjs()
  const year = dayjs().format('YYYY')
  console.log('🚀 ~ insertCurrentYearToPosts ~ year:', year)
}

export async function getIncludedYearPosts(dirName: string) {
  const result = await queryContent(dirName).sort({ date: -1 }).find()
  insertCurrentYearToPosts(result)
  return result
}

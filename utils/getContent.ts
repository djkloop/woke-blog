export function insertCurrentYearToPosts(posts: any) {
  return posts
}

export async function getIncludedYearPosts(dirName: string) {
  const result = await queryContent(dirName).sort({ date: -1, isPin: 1 }).find()
  insertCurrentYearToPosts(result)
  return result
}

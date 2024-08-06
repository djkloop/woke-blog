export function insertCurrentYearToPosts(posts: any) {
  let currentYear = -1
  return posts.reduce(
    (posts: any, post: any) => {
      const year = new Date(post.date).getFullYear()
      if (year !== currentYear && !Number.isNaN(year)) {
        posts.push({
          isMarked: true,
          year,
        })
        currentYear = year
      }
      posts.push(post)
      return posts
    },
    [],
  )
}

export async function getIncludedYearPosts(dirName: string) {
  const result = await queryContent(dirName).sort({ date: -1 }).find()
  insertCurrentYearToPosts(result)
  return result
}

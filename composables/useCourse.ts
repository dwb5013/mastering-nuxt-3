import courseData from "./courseData"
type Lesson = {
  title: string
  slug: string
  number: number
  downloadUrl:
  string
  videoId: number
  text: string
  sourceUrl?: string

}

type Chapter = {
  title: string
  slug: string
  number: number
  lessons: Lesson[]
}

type Course = {
  title: string
  chapters: Chapter[]
}
export const useCourse = () => {
  const chapters: Chapter[] = courseData.chapters.map((chapter) => {
    const lessons = chapter.lessons.map((lesson) => ({
      ...lesson,
      path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`
    }))
    return { ...chapter, lessons }
  })
  return { ...courseData, chapters }
}

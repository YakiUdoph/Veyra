import { LessonEngine } from "@/components/lesson-engine";
import { germanAccommodationPrototypeFixture } from "@/fixtures/prototype/german-accommodation";
import { lessonForAudience } from "@/lib/content-engine";

export function LessonPrototype() {
  const lesson = lessonForAudience(
    germanAccommodationPrototypeFixture,
    "prototype",
  );
  return <LessonEngine lesson={lesson} />;
}

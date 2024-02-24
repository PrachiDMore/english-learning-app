import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackCircle } from "react-icons/io5";

const YourStory = () => {
  return (
    <div className='h-screen w-screen bg-purpleWhite flex flex-col gap-5 items-center p-7 '>
      <div className='w-full flex justify-between items-center'>
        <Link to={'/uploadStory'} className='w-7 h-7 flex justify-center items-center'>
          <IoArrowBackCircle className='text-textBlue text-2xl' />
        </Link>
        <h1 className='w-full h-max text-center text-2xl font-bold text-textBlue'>Your Story</h1>
        <IoArrowBackCircle className='text-lightWhite text-3xl' />
      </div>

      <div className='pb-7'>
        <p>
          In the midst of a dense forest, shrouded in the perpetual twilight of its towering trees, there existed a small, forgotten pond. This pond, known only to the denizens of the forest, was home to two unlikely friends:Luna, a luminous firefly, and Throne, a solitary old turtle.
         Luna, with her incandescent glow, was the embodiment of light and gaiety. Each night, she danced above the pond's mirror-like surface, casting reflections that shimmered like stars fallen to earth. Throne, on the other hand, was the epitome of patience and wisdom. With a shell weathered by time, he moved through life at a deliberate pace, a silent observer of the world's wonders and woes.
          Their friendship was an oddity, born out of a chance meeting when Luna, fascinated by the reflection of the moon on the water's surface, had dived too close and found herself trapped in the water's embrace. Throne, hearing the commotion, had slowly made his way to her and, with a gentle nudge of his nose, had brought her back to the safety of the air. Since that night,Luna had been steadfast in her gratitude, and Throne had found companionship in her light, a solace he hadn't realized he'd yearned for.
          Each evening, as the forest succumbed to night's embrace,Luna would tell tales of the sights she'd seen beyond the forest's confines, of cities that glowed as she did, but with light that never flickered nor faded. Throne, in turn, shared stories of the forest's ancient past, of times when the trees were young, and the world was a quieter place.
          Their conversations, filled with dreams and memories, spanned the hours until the first light of dawn. They spoke of desires and fears, ofLuna's secret wish to see the sun, and Throne's quiet fear that he would one day wake to find her light extinguished, her adventures having carried her too far from the safety of their pond.
          ButLuna, with a wisdom that belied her seeming frivolity, would always reassure him. "Throne," she'd say, her light pulsing softly in the darkness, "as long as this pond is here, and its waters reflect the sky, I will always return. For what is the joy of the sun, if I cannot share its stories with you?"
          And so, beneath the canopy of an eternal forest, their bond deepened, a testament to the unlikely friendships that flourish in the heart of nature.Luna and Throne, a firefly and a turtle, together they remained, two solitary lights against the backdrop of an ever-changing world, their stories a bridge spanning the gap between the earth and the stars.
        </p>
      </div>
    </div>
  )
}

export default YourStory

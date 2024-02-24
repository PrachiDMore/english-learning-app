import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { SiGooglemessages } from "react-icons/si";

const Story = () => {
  return (
    <div className='bg-purpleWhite h-max-screen overflow-y-auto relative'>
      <div className='relative'>
        <Link to={'/selectStory'} className='w-7 h-7 absolute top-7 left-7 flex justify-center items-center'>
          <IoArrowBackCircle className='text-lightWhite text-2xl' />
        </Link>
        <img className='h-96' src="https://img.freepik.com/free-photo/landscape-body-water_198169-128.jpg?t=st=1708761712~exp=1708765312~hmac=f1fe11b068dd81d3dfe89e944be49e37aad1f126ba479962a9bb294b466a567d&w=900" alt="" />
      </div>
      <div className='h-full px-7 pt-3 pb-5  grid gap-3'>
        <h1 className='text-textBlue font-bold text-2xl'>Reflections Beneath the Forest Canopy</h1>
        <p>
          In the midst of a dense forest, shrouded in the perpetual twilight of its towering trees, there existed a small, forgotten pond. This pond, known only to the denizens of the forest, was home to two unlikely friends: <span className='text-textBlue font-bold'>Luna</span>, a luminous firefly, and <span className='text-textBlue font-bold'>Thorne</span>, a solitary old turtle.
          <span className='text-textBlue font-bold'>Luna</span>, with her incandescent glow, was the embodiment of light and gaiety. Each night, she danced above the pond's mirror-like surface, casting reflections that shimmered like stars fallen to earth. <span className='text-textBlue font-bold'>Thorne</span>, on the other hand, was the epitome of patience and wisdom. With a shell weathered by time, he moved through life at a deliberate pace, a silent observer of the world's wonders and woes.
          Their friendship was an oddity, born out of a chance meeting when <span className='text-textBlue font-bold'><span className='text-textBlue font-bold'>Luna</span></span>, fascinated by the reflection of the moon on the water's surface, had dived too close and found herself trapped in the water's embrace. <span className='text-textBlue font-bold'>Thorne</span>, hearing the commotion, had slowly made his way to her and, with a gentle nudge of his nose, had brought her back to the safety of the air. Since that night, <span className='text-textBlue font-bold'>Luna</span> had been steadfast in her gratitude, and <span className='text-textBlue font-bold'>Thorne</span> had found companionship in her light, a solace he hadn't realized he'd yearned for.
          Each evening, as the forest succumbed to night's embrace, <span className='text-textBlue font-bold'>Luna</span> would tell tales of the sights she'd seen beyond the forest's confines, of cities that glowed as she did, but with light that never flickered nor faded. <span className='text-textBlue font-bold'>Thorne</span>, in turn, shared stories of the forest's ancient past, of times when the trees were young, and the world was a quieter place.
          Their conversations, filled with dreams and memories, spanned the hours until the first light of dawn. They spoke of desires and fears, of <span className='text-textBlue font-bold'>Luna</span>'s secret wish to see the sun, and <span className='text-textBlue font-bold'>Thorne</span>'s quiet fear that he would one day wake to find her light extinguished, her adventures having carried her too far from the safety of their pond.
          But <span className='text-textBlue font-bold'>Luna</span>, with a wisdom that belied her seeming frivolity, would always reassure him. "<span className='text-textBlue font-bold'>Thorne</span>," she'd say, her light pulsing softly in the darkness, "as long as this pond is here, and its waters reflect the sky, I will always return. For what is the joy of the sun, if I cannot share its stories with you?"
          And so, beneath the canopy of an eternal forest, their bond deepened, a testament to the unlikely friendships that flourish in the heart of nature. <span className='text-textBlue font-bold'>Luna</span> and <span className='text-textBlue font-bold'>Thorne</span>, a firefly and a turtle, together they remained, two solitary lights against the backdrop of an ever-changing world, their stories a bridge spanning the gap between the earth and the stars.
        </p>
      </div>
      <Link to={'/selectCharacter'} className='absolute bottom-10 right-10'>
        <SiGooglemessages className='text-4xl rounded-full text-textBlue iconShadow' />
      </Link>
    </div>
  )
}

export default Story

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackCircle } from "react-icons/io5";
import { SiGooglemessages } from "react-icons/si";
import axios from 'axios';
import QuestionAnswerPage from './QuestionAnswerPage';

const YourStory = () => {
  const [files, setFiles] = useState([]);
  const [filesUploaded, setFilesUploaded] = useState(false); // State to track if files were uploaded successfully

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('files', file);
    });

    try {
      await axios('http://localhost:5000/upload', {
        method: "POST",

        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: formData
      }
      ).then((res) => {
        console.log(res);
        console.log('Files uploaded successfully');
        setFilesUploaded(true); // Set filesUploaded state to true upon successful upload
      })
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div className='h-screen w-screen bg-purpleWhite flex flex-col gap-5   '>
      <div className='w-full flex justify-between items-center'>
        <Link to={'/uploadStory'} className=' flex justify-center items-center'>
          <IoArrowBackCircle className='text-textBlue text-4xl' />
        </Link>
        <h1 className='w-full h-max text-center text-2xl font-bold text-textBlue'>Your Story</h1>
        <IoArrowBackCircle className='text-lightWhite text-4xl' />
      </div>

 <div className='pb-7'>
        <p className='text-justify text-lg'>
          In the midst of a dense forest, shrouded in the perpetual twilight of its towering trees, there existed a small, forgotten pond. This pond, known only to the denizens of the forest, was home to two unlikely friends:Luna, a luminous firefly, and Throne, a solitary old turtle.
         Luna, with her incandescent glow, was the embodiment of light and gaiety. Each night, she danced above the pond's mirror-like surface, casting reflections that shimmered like stars fallen to earth. Throne, on the other hand, was the epitome of patience and wisdom. With a shell weathered by time, he moved through life at a deliberate pace, a silent observer of the world's wonders and woes.
          Their friendship was an oddity, born out of a chance meeting when Luna, fascinated by the reflection of the moon on the water's surface, had dived too close and found herself trapped in the water's embrace. Throne, hearing the commotion, had slowly made his way to her and, with a gentle nudge of his nose, had brought her back to the safety of the air. Since that night,Luna had been steadfast in her gratitude, and Throne had found companionship in her light, a solace he hadn't realized he'd yearned for.
          Each evening, as the forest succumbed to night's embrace,Luna would tell tales of the sights she'd seen beyond the forest's confines, of cities that glowed as she did, but with light that never flickered nor faded. Throne, in turn, shared stories of the forest's ancient past, of times when the trees were young, and the world was a quieter place.
          Their conversations, filled with dreams and memories, spanned the hours until the first light of dawn. They spoke of desires and fears, ofLuna's secret wish to see the sun, and Throne's quiet fear that he would one day wake to find her light extinguished, her adventures having carried her too far from the safety of their pond.
          ButLuna, with a wisdom that belied her seeming frivolity, would always reassure him. "Throne," she'd say, her light pulsing softly in the darkness, "as long as this pond is here, and its waters reflect the sky, I will always return. For what is the joy of the sun, if I cannot share its stories with you?"
          And so, beneath the canopy of an eternal forest, their bond deepened, a testament to the unlikely friendships that flourish in the heart of nature.Luna and Throne, a firefly and a turtle, together they remained, two solitary lights against the backdrop of an ever-changing world, their stories a bridge spanning the gap between the earth and the stars.
        </p>
      </div> 



      {/* <h1>Upload Files</h1>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {filesUploaded && <QuestionAnswerPage filesUploaded />} {/* Conditionally render the question and answer page if filesUploaded is true */}
      {/* <Link to={'/selectCharacter'} className='fixed z-50 bottom-7 right-7'>
        <SiGooglemessages className='text-5xl rounded-full text-textBlue bg-white  iconShadow' />
      </Link> 
       */}



    </div>
  )
}

export default YourStory
